import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiChiliPepper } from 'react-icons/gi';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo-minha-main.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    { name: 'Home', path: '/' },
    { name: 'Chilli Varieties', path: '/varieties' },
    { name: 'Chilli Powder', path: '/powder' },
    { name: 'Our Company', path: '/about' },
    { name: 'Quality Assurance', path: '/quality' },
    { name: 'Facility', path: '/facility' },
    { name: 'Certification', path: '/certifications' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border-b border-brand-red/10 py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-transparent py-5'
          }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo Section */}
          <Link to="/" className="flex items-center focus:outline-none">
            <img
              src={logoImg}
              alt="Minha Imports & Exports"
              className={`transition-all duration-500 object-contain ${isScrolled ? 'h-7 md:h-8' : 'h-9 md:h-10'
                }`}
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-body text-[13px] font-medium tracking-[0.08em] transition-all duration-300 relative py-1 hover:text-brand-red ${isActive
                      ? 'text-brand-red font-semibold'
                      : 'text-text-gray'
                    }`}
                >
                  {link.name}

                  {/* Underline Hover and Active Animation */}
                  {isActive ? (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-red rounded-full"
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red/60 rounded-full transition-all duration-300 hover:w-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button and Hamburger toggle (Desktop / Mobile combined) */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-brand-red text-white text-xs font-heading font-bold py-2.5 px-6 rounded-lg hover:opacity-80 active:scale-95 transition-all duration-200"
            >
              Enquire Now
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-brand-red hover:text-brand-red/80 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
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
            className="fixed inset-0 bg-white z-50 flex flex-col lg:hidden"
          >
            {/* Overlay Header Bar */}
            <div className="w-full px-6 py-4 flex items-center justify-between border-b border-neutral-100 bg-white/95 backdrop-blur-md">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
                <img
                  src={logoImg}
                  alt="Minha Imports & Exports"
                  className="h-8 object-contain"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-brand-red hover:text-brand-red/80 transition-colors focus:outline-none"
                aria-label="Close Navigation Menu"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Overlay Scrollable Content Container */}
            <div className="flex-grow overflow-y-auto px-6 py-6 flex flex-col">
              <div className="my-auto flex flex-col items-center space-y-4 text-center w-full max-w-sm mx-auto">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
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
                        onClick={() => setIsOpen(false)}
                        className={`font-body text-base font-semibold tracking-[0.08em] transition-all py-2 block rounded-lg ${isActive
                            ? 'text-brand-red bg-brand-red/5 font-bold'
                            : 'text-text-gray hover:text-brand-red hover:bg-neutral-50'
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
                    onClick={() => setIsOpen(false)}
                    className="block bg-brand-red text-white text-sm font-heading font-semibold py-3 px-8 rounded-lg shadow-lg text-center hover:opacity-95 transition-opacity"
                  >
                    Enquire Now
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
