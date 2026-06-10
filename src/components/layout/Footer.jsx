import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiGlobe, FiInstagram, FiFacebook, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import vchatQrImg from '../../assets/vchat-qr.jpeg';

const Footer = () => {
  return (
    <footer className="bg-[#111315] text-[#a0a5ad] font-['Inter'] relative overflow-hidden border-t border-white/[0.02]">

      {/* Top Main Footer Area */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Column 1: Brand Info (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-6 text-left">
            <div className="flex items-center gap-3">
              {/* Tractor Icon SVG */}
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#cca72f]/10 text-[#cca72f]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <circle cx="18" cy="18" r="3" />
                  <circle cx="6" cy="18" r="2" />
                  <path d="M6 16h6v-4H8V8h4V6h4v6h2v4" />
                </svg>
              </div>
              <span className="font-['Montserrat'] font-bold text-[16px] md:text-[17px] tracking-wide text-white leading-tight">
                MINHA IMPORTS & EXPORT
              </span>
            </div>

            <p className="text-[12.5px] leading-[1.6] text-[#a0a5ad]/65 max-w-sm">
              Premium Guntur dry red chillies exporter committed to global standards of purity and reliability.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <FiLinkedin className="w-4 h-4" />, href: "https://in.linkedin.com/company/minha-imports-and-exports" },
                { icon: <FiInstagram className="w-4 h-4" />, href: "https://www.instagram.com/dry_chilli_exporters/" },
                { icon: <FiFacebook className="w-4 h-4" />, href: "https://www.facebook.com/DryRedChilliesExporter/" }
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
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Chilli Varieties', path: '/varieties' },
                { name: 'Our Company', path: '/about' },
                { name: 'Quality Assurance', path: '/quality' },
                { name: 'Our Facilities', path: '/facility' },
                { name: 'Certifications', path: '/certifications' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-[13px] text-[#a0a5ad]/75 hover:text-white transition-colors duration-200 block font-normal">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <h4 className="font-['Montserrat'] font-bold text-[12px] tracking-[0.15em] text-[#cca72f] uppercase">
              Our Products
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Dry Red Chillies', path: '/varieties' },
                { name: 'Chilli Powder', path: '/powder' }
              ].map((product, idx) => (
                <li key={idx} className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cca72f] transition-transform duration-200 group-hover:scale-150" />
                  <Link to={product.path} className="text-[13px] text-[#a0a5ad]/75 hover:text-white transition-colors duration-200 block font-normal">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-6 text-left">
            <h4 className="font-['Montserrat'] font-bold text-[12px] tracking-[0.15em] text-[#cca72f] uppercase">
              Contact Us
            </h4>
            <div className="space-y-3 text-[12px]">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-[#cca72f] mt-1 shrink-0" />
                <span className="text-[#a0a5ad]/95 leading-relaxed">
                  Arundalpet 7/1, <br />
                  Beside SBI ATM, <br />
                  Andhra Pradesh, 522002
                </span>
              </div>
              <a href="mailto:minhaimportsexports@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <FiMail className="w-4 h-4 text-[#cca72f]" />
                <span className="text-[#a0a5ad]/95">minhaimportsexports@gmail.com</span>
              </a>
              <a href="tel:+918185867999" className="flex items-center gap-3 hover:text-white transition-colors">
                <FiPhone className="w-4 h-4 text-[#cca72f]" />
                <span className="text-[#a0a5ad]/95">+91 81858 67999</span>
              </a>
            </div>
          </div>

          {/* Column 5: WeChat QR Connect (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <h4 className="font-['Montserrat'] font-bold text-[12px] tracking-[0.15em] text-[#cca72f] uppercase">
              WeChat Connect
            </h4>
            <div className="inline-block p-1 bg-white rounded-lg shadow-md border border-white/5">
              <img
                src={vchatQrImg}
                alt="Minha WeChat QR Contact"
                className="w-20 h-20 object-contain rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Red-Gold Gradient Stripe (No Green) */}
      <div className="w-full h-[3px] bg-gradient-to-r from-[#8f000d] to-[#cca72f]" />

      {/* Bottom Bar Area */}
      <div className="bg-[#0b0c0d] text-[12px] text-[#a0a5ad]/50 py-6 px-6 md:px-12 font-['Montserrat']">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <div>
            © 2026 Minha Imports & Exports. All Rights Reserved.
          </div>

          {/* Secure Badge */}
          <div className="flex items-center gap-6 uppercase tracking-wider text-[11px] font-semibold text-[#a0a5ad]/40">
            <span>Secure Site</span>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
