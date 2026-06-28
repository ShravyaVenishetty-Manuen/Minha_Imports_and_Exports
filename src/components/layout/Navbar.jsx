import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo-minha-main.png';
import logoDarkImg from '../../assets/logo-minha-dark.png';

// Import hero images for hover-based prefetching
import certificationsHero from '../../assets/certifications-hero.png';
import contactHero from '../../assets/contact-hero.png';
import facilityHero from '../../assets/facility-hero.png';
import powderHero from '../../assets/powder-hero.png';
import aboutHero from '../../assets/about_hero_bg.png';
import varietiesHero from '../../assets/chilli-hero-varieties.png';

const heroImageMap = {
  '/certifications': certificationsHero,
  '/contact': contactHero,
  '/facility': facilityHero,
  '/powder': powderHero,
  '/about': aboutHero,
  '/varieties': varietiesHero,
};

const navLinks = [
  { name: 'Chilli Varieties', path: '/varieties' },
  { name: 'Chilli Powder', path: '/powder' },
  { name: 'Our Company', path: '/about' },
  { name: 'Quality', path: '/quality' },
  { name: 'Facility', path: '/facility' },
  { name: 'Certification', path: '/certifications' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleLinkHover = (path) => {
    const imgSrc = heroImageMap[path];
    if (imgSrc) {
      const img = new Image();
      img.src = imgSrc;
    }
  };

  // Solid bar appears once the user leaves the hero
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActivePath = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      {/* Full-width bar: transparent over the hero, solid white once scrolled */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-white border-b border-neutral-200 shadow-[0_1px_24px_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 md:px-10 lg:px-12 h-[72px] flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 focus:outline-none" aria-label="Minha Imports & Exports — home">
            <img
              src={isScrolled ? logoImg : logoDarkImg}
              alt="Minha Imports & Exports"
              className="h-[40px] object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => {
              const active = isActivePath(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onMouseEnter={() => handleLinkHover(link.path)}
                  className={`relative font-['urbanist'] text-[12px] xl:text-[12.5px] font-bold tracking-[0.04em] py-2 transition-colors duration-200 focus:outline-none ${
                    isScrolled
                      ? active
                        ? 'text-[#8f000d]'
                        : 'text-neutral-700 hover:text-[#8f000d]'
                      : active
                        ? 'text-white'
                        : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="navActiveUnderline"
                      className={`absolute -bottom-0.5 left-0 right-0 h-[2.5px] rounded-full ${
                        isScrolled ? 'bg-[#8f000d]' : 'bg-[#cca72f]'
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              onMouseEnter={() => handleLinkHover('/contact')}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#8f000d] hover:bg-[#a3000f] text-white font-['urbanist'] font-bold text-[11.5px] py-2.5 px-5 rounded-lg uppercase tracking-wider transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cca72f] focus-visible:ring-offset-2"
            >
              Contact
              <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 -mr-2 transition-colors focus:outline-none ${
                isScrolled ? 'text-neutral-900 hover:text-[#8f000d]' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — solid, no glass */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#140605] z-50 flex flex-col lg:hidden text-white"
          >
            <div className="w-full px-6 h-[72px] flex items-center justify-between border-b border-white/10">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
                <img src={logoDarkImg} alt="Minha Imports & Exports" className="h-8 object-contain" />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 text-white hover:text-[#cca72f] transition-colors focus:outline-none"
                aria-label="Close navigation menu"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto px-6 py-8 flex flex-col">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#cca72f] mb-5">
                Menu
              </span>
              <div className="flex flex-col divide-y divide-white/10">
                {navLinks.map((link, idx) => {
                  const active = isActivePath(link.path);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <Link
                        to={link.path}
                        onMouseEnter={() => handleLinkHover(link.path)}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between font-['urbanist'] font-bold text-[17px] tracking-tight py-4 transition-colors ${
                          active ? 'text-[#cca72f]' : 'text-white hover:text-[#cca72f]'
                        }`}
                      >
                        {link.name}
                        <FiArrowRight className="text-base opacity-50" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-8 inline-flex items-center justify-center gap-2 bg-[#8f000d] hover:bg-[#a3000f] text-white text-[13px] font-['urbanist'] font-bold py-4 px-8 rounded-lg uppercase tracking-wider transition-colors"
              >
                Request an export quote
                <FiArrowRight className="text-sm" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
