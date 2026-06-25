import React, { useState, useEffect } from 'react';
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
  '/varieties': varietiesHero
};

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

  // Scroll detection to trigger shrinking and shadow elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'CHILLI VARIETIES', path: '/varieties' },
    { name: 'CHILLI POWDER', path: '/powder' },
    { name: 'OUR COMPANY', path: '/about' },
    { name: 'QUALITY ASSURANCE', path: '/quality' },
    { name: 'FACILITY', path: '/facility' },
    { name: 'CERTIFICATION', path: '/certifications' },
  ];

  return (
    <>
      {/* Main Navbar: Floating Dark/Light Dynamic Capsule */}
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 h-[68px] px-7 flex items-center justify-between transition-all duration-500 ease-in-out ${isScrolled
          ? 'top-3 w-[92%] max-w-[1240px] bg-white/95 border border-neutral-200/50 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]'
          : 'top-6 w-[95%] max-w-[1280px] bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-[24px] shadow-sm'
          }`}
      >
        <div className="flex items-center justify-between gap-4 w-full h-full">

          {/* Logo Section */}
          <Link to="/" className="flex items-center focus:outline-none shrink-0 pl-1">
            <img
              src={isScrolled ? logoImg : logoDarkImg}
              alt="Minha Imports & Exports"
              className="h-[42px] object-contain transition-all duration-500"
            />
          </Link>

          {/* Desktop Navigation Links (with vertical separators) */}
          <div className="hidden lg:flex items-center justify-center space-x-2 xl:space-x-3.5">
            {navLinks.map((link, idx) => {
              const isActive = link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);
              return (
                <React.Fragment key={link.name}>
                  <Link
                    to={link.path}
                    onMouseEnter={() => handleLinkHover(link.path)}
                    className={`font-heading text-[10px] xl:text-[11px] font-bold tracking-[0.06em] transition-all duration-300 relative py-1 px-0.5 ${isScrolled
                      ? isActive
                        ? 'text-[#111827]'
                        : 'text-[#374151] hover:text-brand-red font-semibold'
                      : isActive
                        ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'
                        : 'text-white/80 hover:text-[#cca72f]'
                      }`}
                  >
                    {link.name}

                    {/* Active Gold/Red Underline */}
                    {isActive && (
                      <motion.span
                        layoutId="capsuleActiveUnderline"
                        className={`absolute bottom-[-4px] left-0 w-full h-[3px] rounded-full ${isScrolled ? 'bg-brand-red' : 'bg-[#cca72f]'
                          }`}
                      />
                    )}
                  </Link>

                  {/* Vertical Separator */}
                  {idx < navLinks.length - 1 && (
                    <span className={`h-3.5 w-[1px] self-center pointer-events-none ${isScrolled ? 'bg-neutral-950/10' : 'bg-white/10'
                      }`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* CTA Button and Hamburger Toggle (Desktop / Mobile combined) */}
          <div className="flex items-center space-x-3 pr-1">
            <Link
              to="/contact"
              onMouseEnter={() => handleLinkHover('/contact')}
              className="hidden sm:inline-flex items-center gap-1.5 font-heading font-extrabold text-[10px] xl:text-[11px] py-2 px-5 rounded-lg transition-all duration-300 shadow-md uppercase tracking-wider group bg-gradient-to-r from-[#B22222] to-[#D62828] text-white border border-[#B22222]/10 hover:opacity-95 hover:-translate-y-0.5"
            >
              Contact Us
              <FiArrowRight className="text-xs transition-transform group-hover:translate-x-1 duration-300" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 transition-colors focus:outline-none ${isScrolled
                ? 'text-[#111827] hover:text-brand-red'
                : 'text-white hover:text-[#cca72f]'
                }`}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-neutral-950/98 backdrop-blur-xl z-50 flex flex-col lg:hidden text-white border-l border-white/10"
          >
            {/* Overlay Header Bar */}
            <div className="w-full px-6 py-4 flex items-center justify-between border-b border-white/5 bg-neutral-950/40 backdrop-blur-md">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
                <img
                  src={logoDarkImg}
                  alt="Minha Imports & Exports"
                  className="h-8 object-contain"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white hover:text-brand-gold transition-colors focus:outline-none"
                aria-label="Close Navigation Menu"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Overlay Scrollable Content Container */}
            <div className="flex-grow overflow-y-auto px-6 py-6 flex flex-col">
              <div className="my-auto flex flex-col items-center space-y-4 text-center w-full max-w-sm mx-auto">
                {navLinks.map((link, idx) => {
                  const isActive = link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="w-full"
                    >
                      <Link
                        to={link.path}
                        onMouseEnter={() => handleLinkHover(link.path)}
                        onClick={() => setIsOpen(false)}
                        className={`font-heading text-sm font-semibold tracking-[0.12em] uppercase transition-all py-3.5 block rounded-lg ${isActive
                          ? 'text-brand-gold bg-white/5 font-bold'
                          : 'text-white/80 hover:text-brand-gold hover:bg-white/5'
                          }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="w-full pt-3"
                >
                  <Link
                    to="/contact"
                    onMouseEnter={() => handleLinkHover('/contact')}
                    onClick={() => setIsOpen(false)}
                    className="block bg-gradient-to-r from-brand-red to-[#901a1a] text-white text-[12px] font-heading font-bold py-3.5 px-8 rounded-lg shadow-lg text-center hover:opacity-95 hover:shadow-brand-red/20 tracking-wider uppercase active:scale-98 transition-all"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
