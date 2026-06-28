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
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileVarietiesOpen, setMobileVarietiesOpen] = useState(false);
  const location = useLocation();

  const megaMenuData = [
    {
      category: 'Teja S17',
      displayName: 'TEJA S17',
      color: 'text-[#8f000d]',
      bgColor: 'bg-[#8f000d]/10',
      badgeColor: 'bg-[#8f000d]',
      items: [
        { label: 'Stem Deluxe', id: 'teja-stem-deluxe' },
        { label: 'Stemless Deluxe', id: 'teja-stemless-deluxe' },
        { label: 'Best Stem', id: 'teja-stem-best' },
        { label: 'Premium Grade', id: 'teja-stem-deluxe' }
      ]
    },
    {
      category: 'S4 / 334',
      displayName: 'S4 / 334',
      color: 'text-[#2c6a46]',
      bgColor: 'bg-[#2c6a46]/10',
      badgeColor: 'bg-[#2c6a46]',
      items: [
        { label: 'Deluxe Stem', id: 's4-stem-deluxe' },
        { label: 'Deluxe Stemless', id: 's4-stemless-deluxe' },
        { label: 'Best Stem', id: 's4-stem-best' },
        { label: 'Best Stemless', id: 's4-stemless-best' }
      ]
    },
    {
      category: 'S10',
      displayName: 'S10',
      color: 'text-[#cca72f]',
      bgColor: 'bg-[#cca72f]/10',
      badgeColor: 'bg-[#cca72f]',
      items: [
        { label: 'S10 with Stem', id: 's10-stem' },
        { label: 'S10 Stemless', id: 's10-stemless' }
      ]
    },
    {
      category: 'Byadgi',
      displayName: 'BYADGI',
      color: 'text-[#a73b0f]',
      bgColor: 'bg-[#a73b0f]/10',
      badgeColor: 'bg-[#a73b0f]',
      items: [
        { label: 'Byadgi with Stem', id: 'byadgi-stem' },
        { label: 'Byadgi Stemless', id: 'byadgi-stemless' },
        { label: 'Syngenta 5531 Byadgi', id: 'syngenta-5531-byadgi' }
      ]
    },
    {
      category: 'Other Varieties',
      displayName: 'OTHER VARIETIES',
      color: 'text-[#d97706]',
      bgColor: 'bg-[#d97706]/10',
      badgeColor: 'bg-[#d97706]',
      items: [
        { label: '341 Dry Red', id: '341-dry-chilli' },
        { label: 'No. 5 (C5)', id: 'no5-dry-chilli' },
        { label: 'Armoor Dry Red', id: 'armoor-dry-chilli' },
        { label: 'DD / Devonur Deluxe', id: 'devonur-deluxe-chilli' },
        { label: 'Teja Fatki', id: 'teja-fatki' },
        { label: '334 S/10 Fatki', id: 's10-fatki' },
        { label: 'Bullet Dry Red', id: 'bullet-dry-chilli' },
        { label: '26 Dry Red', id: 'chilli-26-dry' },
        { label: 'Super 10 Dry Red', id: 'super10-dry-chilli' },
        { label: 'Bangaram Grade A', id: 'bangaram-chilli-gradea' },
        { label: 'Shark Dry Red', id: 'shark-dry-chilli' },
        { label: 'Classic Dry Red', id: 'classic-dry-chilli' },
        { label: 'Romi 26 Dry Red', id: 'romi26-dry-chilli' },
        { label: '335 Byadgi Dry Red', id: 'byadgi-335-chilli' },
        { label: 'ENDO 5 / C5', id: 'endo5-c5-chilli' },
        { label: 'Kashmiri Dry Red', id: 'kashmiri-dry-chilli' },
        { label: 'Wrinkle 273 Chilli', id: 'wrinkle-273-chilli' }
      ]
    }
  ];

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
    return () => document.body.style.overflow = '';
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
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 h-[68px] px-7 flex items-center justify-between transition-all duration-500 ease-in-out ${isScrolled
          ? 'top-3 w-[92%] max-w-[1240px] bg-white/95 border border-neutral-200/50 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]'
          : 'top-6 w-[95%] max-w-[1280px] bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-[24px] shadow-sm'
          }`}
      >
        <div className="flex items-center justify-between gap-4 w-full h-full">

          <Link to="/" className="flex items-center focus:outline-none shrink-0 pl-1">
            <img
              src={isScrolled ? logoImg : logoDarkImg}
              alt="Minha Imports & Exports"
              className="h-[42px] object-contain transition-all duration-500"
            />
          </Link>

          <div className="hidden lg:flex items-center justify-center space-x-2 xl:space-x-3.5">
            {navLinks.map((link, idx) => {
              const isActive = link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);
              return (
                <React.Fragment key={link.name}>
                  {link.name === 'CHILLI VARIETIES' ? (
                    <div
                      className="relative py-2"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <Link
                        to="/varieties"
                        onClick={() => setShowDropdown(false)}
                        className={`font-heading text-[10px] xl:text-[11px] font-bold tracking-[0.06em] transition-all duration-300 relative py-1 px-0.5 inline-flex items-center gap-1 cursor-pointer bg-transparent border-none outline-none focus:outline-none ${isScrolled
                          ? isActive
                            ? 'text-[#111827]'
                            : 'text-[#374151] hover:text-brand-red font-semibold'
                          : isActive
                            ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'
                            : 'text-white/80 hover:text-[#cca72f]'
                          }`}
                      >
                        {link.name}
                        <svg className={`w-2.5 h-2.5 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                        {/* Active Underline */}
                        {isActive && (
                          <motion.span
                            layoutId="capsuleActiveUnderline"
                            className={`absolute bottom-[-4px] left-0 w-full h-[3px] rounded-full ${isScrolled ? 'bg-brand-red' : 'bg-[#cca72f]'
                              }`}
                          />
                        )}
                      </Link>

                      {/* Simple Dropdown Menu */}
                      <AnimatePresence>
                        {showDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className={`absolute left-1/2 -translate-x-1/2 top-full mt-[18px] w-[210px] rounded-[24px] py-[14px] px-[16px] z-[100] transition-all duration-300 border flex flex-col gap-[10px] ${isScrolled
                              ? 'bg-white/95 backdrop-blur-[18px] border-neutral-200/30 shadow-[0_20px_50px_rgba(0,0,0,0.2)] text-neutral-700'
                              : 'bg-[#0a0a0a]/95 backdrop-blur-[18px] border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.35)] text-white/90'
                              }`}
                          >
                            {/* Top Caret Triangle */}
                            <div className="absolute top-[-5.5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-inherit rotate-45 border-l border-t border-inherit" />

                            <Link
                              to="/varieties"
                              state={{ category: 'Teja S17' }}
                              onClick={() => setShowDropdown(false)}
                              className={`w-full block text-left py-1 px-0.5 text-[11px] font-heading font-black tracking-wider uppercase transition-all duration-300 transform hover:translate-x-[6px] hover:text-[#D4AF37] ${isScrolled ? 'text-neutral-700' : 'text-white/90'
                                }`}
                            >
                              Teja S17
                            </Link>

                            <Link
                              to="/varieties"
                              state={{ category: 'S4 / 334' }}
                              onClick={() => setShowDropdown(false)}
                              className={`w-full block text-left py-1 px-0.5 text-[11px] font-heading font-black tracking-wider uppercase transition-all duration-300 transform hover:translate-x-[6px] hover:text-[#D4AF37] ${isScrolled ? 'text-neutral-700' : 'text-white/90'
                                }`}
                            >
                              S4 / 334 Sannam
                            </Link>

                            <Link
                              to="/varieties"
                              state={{ category: 'S10' }}
                              onClick={() => setShowDropdown(false)}
                              className={`w-full block text-left py-1 px-0.5 text-[11px] font-heading font-black tracking-wider uppercase transition-all duration-300 transform hover:translate-x-[6px] hover:text-[#D4AF37] ${isScrolled ? 'text-neutral-700' : 'text-white/90'
                                }`}
                            >
                              S10 Gold
                            </Link>

                            <Link
                              to="/varieties"
                              state={{ category: 'Byadgi' }}
                              onClick={() => setShowDropdown(false)}
                              className={`w-full block text-left py-1 px-0.5 text-[11px] font-heading font-black tracking-wider uppercase transition-all duration-300 transform hover:translate-x-[6px] hover:text-[#D4AF37] ${isScrolled ? 'text-neutral-700' : 'text-white/90'
                                }`}
                            >
                              Byadgi
                            </Link>

                            <Link
                              to="/varieties"
                              state={{ category: 'Other Varieties' }}
                              onClick={() => setShowDropdown(false)}
                              className={`w-full block text-left py-1 px-0.5 text-[11px] font-heading font-black tracking-wider uppercase transition-all duration-300 transform hover:translate-x-[6px] hover:text-[#D4AF37] ${isScrolled ? 'text-neutral-700' : 'text-white/90'
                                }`}
                            >
                              Other Varieties
                            </Link>

                            <div className={`border-t mt-2 pt-2 ${isScrolled ? 'border-neutral-100' : 'border-white/5'}`} />

                            <Link
                              to="/varieties"
                              state={{ category: 'All' }}
                              onClick={() => setShowDropdown(false)}
                              className={`w-full block text-left py-1 px-0.5 text-[11px] font-heading font-black tracking-wider uppercase transition-all duration-300 transform hover:translate-x-[6px] hover:text-[#D4AF37] ${isScrolled ? 'text-brand-red font-extrabold' : 'text-[#cca72f] font-extrabold'
                                }`}
                            >
                              All Varieties
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
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
                  )}

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
                  if (link.name === 'CHILLI VARIETIES') {
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="w-full"
                      >
                        <button
                          onClick={() => setMobileVarietiesOpen(!mobileVarietiesOpen)}
                          className={`w-full font-heading text-sm font-semibold tracking-[0.12em] uppercase transition-all py-3.5 rounded-lg flex items-center justify-center gap-2 focus:outline-none cursor-pointer ${isActive
                            ? 'text-brand-gold bg-white/5 font-bold'
                            : 'text-white/80 hover:text-brand-gold hover:bg-white/5'
                            }`}
                        >
                          {link.name}
                          <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${mobileVarietiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {mobileVarietiesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-white/[0.03] border border-white/5 rounded-2xl mt-1.5 py-2 px-3 space-y-1 text-center"
                            >
                              <Link
                                to="/varieties"
                                state={{ category: 'All' }}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileVarietiesOpen(false);
                                }}
                                className="flex items-center gap-3 px-3 py-2 rounded-xl text-left hover:bg-white/5"
                              >
                                <div className="w-5 h-5 rounded bg-[#8f000d]/20 flex items-center justify-center shrink-0">
                                  <span className="text-[9px] font-black text-[#cca72f]">ALL</span>
                                </div>
                                <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#cca72f]">
                                  All Varieties
                                </span>
                              </Link>

                              {categoryMeta.map((cat) => (
                                <Link
                                  key={cat.name}
                                  to="/varieties"
                                  state={{ category: cat.name }}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setMobileVarietiesOpen(false);
                                  }}
                                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-left hover:bg-white/5"
                                >
                                  <span className={`w-2.5 h-2.5 rounded-full ${cat.color} shrink-0`} />
                                  <span className="text-xs font-['urbanist'] font-bold uppercase tracking-wider text-white/80">
                                    {cat.name}
                                  </span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }
                  if (link.name === 'CHILLI VARIETIES') {
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="w-full"
                      >
                        <button
                          onClick={() => setMobileVarietiesOpen(!mobileVarietiesOpen)}
                          className={`w-full font-heading text-sm font-semibold tracking-[0.12em] uppercase transition-all py-3.5 rounded-lg flex items-center justify-center gap-2 focus:outline-none cursor-pointer ${isActive
                            ? 'text-brand-gold bg-white/5 font-bold'
                            : 'text-white/80 hover:text-brand-gold hover:bg-white/5'
                            }`}
                        >
                          {link.name}
                          <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${mobileVarietiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {mobileVarietiesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-white/[0.03] border border-white/5 rounded-2xl mt-1.5 py-2 px-3 space-y-1 text-center"
                            >
                              <Link
                                to="/varieties"
                                state={{ category: 'All' }}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileVarietiesOpen(false);
                                }}
                                className="block py-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#cca72f]"
                              >
                                All Varieties
                              </Link>

                              <Link
                                to="/varieties"
                                state={{ category: 'Teja S17' }}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileVarietiesOpen(false);
                                }}
                                className="block py-2 text-xs font-['urbanist'] font-bold uppercase tracking-wider text-white/70 hover:text-white"
                              >
                                Teja S17
                              </Link>

                              <Link
                                to="/varieties"
                                state={{ category: 'S4 / 334' }}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileVarietiesOpen(false);
                                }}
                                className="block py-2 text-xs font-['urbanist'] font-bold uppercase tracking-wider text-white/70 hover:text-white"
                              >
                                S4 / 334
                              </Link>

                              <Link
                                to="/varieties"
                                state={{ category: 'S10' }}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileVarietiesOpen(false);
                                }}
                                className="block py-2 text-xs font-['urbanist'] font-bold uppercase tracking-wider text-white/70 hover:text-white"
                              >
                                S10
                              </Link>

                              <Link
                                to="/varieties"
                                state={{ category: 'Byadgi' }}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileVarietiesOpen(false);
                                }}
                                className="block py-2 text-xs font-['urbanist'] font-bold uppercase tracking-wider text-white/70 hover:text-white"
                              >
                                Byadgi
                              </Link>

                              <Link
                                to="/varieties"
                                state={{ category: 'Other Varieties' }}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileVarietiesOpen(false);
                                }}
                                className="block py-2 text-xs font-['urbanist'] font-bold uppercase tracking-wider text-white/70 hover:text-white"
                              >
                                Other Varieties
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }
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
