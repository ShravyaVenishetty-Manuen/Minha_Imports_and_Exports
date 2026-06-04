import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiGlobe, FiInstagram, FiFacebook, FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#111315] text-[#a0a5ad] font-['Inter'] relative overflow-hidden border-t border-white/[0.02]">
      
      {/* Top Main Footer Area */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand Info (5 cols on lg) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="flex items-center gap-3">
              {/* Tractor Icon SVG */}
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#cca72f]/10 text-[#cca72f]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <circle cx="18" cy="18" r="3" />
                  <circle cx="6" cy="18" r="2" />
                  <path d="M6 16h6v-4H8V8h4V6h4v6h2v4" />
                </svg>
              </div>
              <span className="font-['Montserrat'] font-bold text-[20px] md:text-[22px] text-white leading-tight">
                Minha Imports & Exports
              </span>
            </div>

            <p className="text-[14px] leading-[1.6] text-[#a0a5ad]/80 max-w-sm">
              Delivering premium Guntur dry red chillies with quality, reliability and global export standards. We bridge the gap between Indian spice heritage and international markets.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <FiLinkedin className="w-4 h-4" />, href: "#" },
                { icon: <FiGlobe className="w-4 h-4" />, href: "#" },
                { icon: <FiInstagram className="w-4 h-4" />, href: "#" },
                { icon: <FiFacebook className="w-4 h-4" />, href: "#" }
              ].map((social, sIdx) => (
                <a 
                  key={sIdx}
                  href={social.href}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#cca72f] hover:text-white transition-all duration-300 bg-white/[0.01]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <h4 className="font-['Montserrat'] font-bold text-[12px] tracking-[0.15em] text-[#cca72f] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-[14px]">
              {[
                { name: 'Home', path: '/' },
                { name: 'Chilli Varieties', path: '/varieties' },
                { name: 'Our Company', path: '/about' },
                { name: 'Quality Assurance', path: '/quality' },
                { name: 'Facility', path: '/facility' },
                { name: 'Certification', path: '/certifications' },
                { name: 'Contact', path: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="hover:text-white transition-colors duration-200 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-6 text-left">
            <h4 className="font-['Montserrat'] font-bold text-[12px] tracking-[0.15em] text-[#cca72f] uppercase">
              Our Products
            </h4>
            <ul className="space-y-3.5 text-[14px]">
              {[
                { name: 'Dry Red Chillies', path: '/varieties' },
                { name: 'Chilli Powder', path: '/powder' }
              ].map((product, idx) => (
                <li key={idx} className="flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#1F5E3B] transition-transform duration-200 group-hover:scale-150" />
                  <Link to={product.path} className="hover:text-white transition-colors duration-200 block">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Stay Connected (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-6 text-left">
            <h4 className="font-['Montserrat'] font-bold text-[12px] tracking-[0.15em] text-[#cca72f] uppercase">
              Stay Connected
            </h4>
            <p className="text-[13px] leading-[1.5] text-[#a0a5ad]/80">
              Subscribe to our trade updates and harvest reports.
            </p>

            {/* Newsletter Input */}
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full max-w-sm rounded-lg overflow-hidden bg-white/[0.03] border border-white/10 focus-within:border-[#cca72f]/50 transition-all">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent text-[13px] text-white px-4 py-3 w-full focus:outline-none placeholder-text-gray/50"
                required
              />
              <button 
                type="submit"
                className="bg-[#8f000d] text-white font-['Montserrat'] font-bold text-[12px] px-6 py-3 hover:bg-[#72000a] transition-colors uppercase tracking-wider"
              >
                Join
              </button>
            </form>

            {/* Contact Details Info */}
            <div className="space-y-3.5 text-[13px] pt-2">
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-white transition-colors">
                <FiPhone className="w-4 h-4 text-[#cca72f]" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:trade@minhaexports.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <FiMail className="w-4 h-4 text-[#cca72f]" />
                <span>trade@minhaexports.com</span>
              </a>
              <div className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-[#cca72f] mt-0.5 shrink-0" />
                <span>Market Yard Road, Guntur,<br />Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Red-Gold-Green Gradient Stripe */}
      <div className="w-full h-[3px] bg-gradient-to-r from-[#8f000d] via-[#cca72f] to-[#1F5E3B]" />

      {/* Bottom Bar Area */}
      <div className="bg-[#0b0c0d] text-[13px] text-[#a0a5ad]/60 py-6 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <div>
            Copyright © 2026 Minha Imports & Exports. All Rights Reserved.
          </div>

          {/* Secondary Links & Hours */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <div className="flex items-center gap-1.5 border-l border-white/10 pl-6 text-[#a0a5ad]/50">
              <FiClock className="w-3.5 h-3.5" />
              <span>Mon - Sat: 9:00 - 18:00 IST</span>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
