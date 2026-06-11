import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiInstagram, FiFacebook, FiPhone, FiMail, FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import vchatQrImg from '../../assets/vchat-qr.jpeg';

const Footer = () => {
  const [linksOpen, setLinksOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <footer className="bg-[#111315] text-[#a0a5ad] font-['Inter'] relative overflow-hidden border-t border-white/[0.02]">

      {/* Top Main Footer Area */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-6 md:pt-16 pb-4 md:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12">

          {/* Column 1: Brand Info (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3 md:space-y-5 text-left">
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
            <div className="flex items-center gap-3 pt-1">
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

          {/* Column 2: Quick Links (Accordion on mobile, 2 cols on lg) */}
          <div className="lg:col-span-2 text-left border-b lg:border-b-0 border-white/5 pb-2 lg:pb-0">
            <button
              onClick={() => setLinksOpen(!linksOpen)}
              className="w-full flex justify-between items-center lg:cursor-default lg:pointer-events-none text-left focus:outline-none py-2 lg:py-0"
            >
              <h4 className="font-['Montserrat'] font-bold text-[12px] tracking-[0.15em] text-[#cca72f] uppercase">
                Quick Links
              </h4>
              <span className="lg:hidden text-white text-base">
                {linksOpen ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
              </span>
            </button>
            
            <ul className={`space-y-1.5 mt-2 lg:block ${linksOpen ? 'block' : 'hidden'}`}>
              {[
                { name: 'Home', path: '/' },
                { name: 'Chilli Varieties', path: '/varieties' },
                { name: 'Our Company', path: '/about' },
                { name: 'Quality Assurance', path: '/quality' },
                { name: 'Our Facilities', path: '/facility' },
                { name: 'Certifications', path: '/certifications' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-[13px] text-[#a0a5ad]/75 hover:text-white transition-colors duration-200 block font-normal py-1 lg:py-0">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products (Accordion on mobile, 2 cols on lg) */}
          <div className="lg:col-span-2 text-left border-b lg:border-b-0 border-white/5 pb-2 lg:pb-0">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="w-full flex justify-between items-center lg:cursor-default lg:pointer-events-none text-left focus:outline-none py-2 lg:py-0"
            >
              <h4 className="font-['Montserrat'] font-bold text-[12px] tracking-[0.15em] text-[#cca72f] uppercase">
                Our Products
              </h4>
              <span className="lg:hidden text-white text-base">
                {productsOpen ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
              </span>
            </button>
            
            <ul className={`space-y-1.5 mt-2 lg:block ${productsOpen ? 'block' : 'hidden'}`}>
              {[
                { name: 'Dry Red Chillies', path: '/varieties' },
                { name: 'Chilli Powder', path: '/powder' }
              ].map((product, idx) => (
                <li key={idx} className="flex items-center gap-2 group py-1 lg:py-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cca72f] transition-transform duration-200 group-hover:scale-150 shrink-0" />
                  <Link to={product.path} className="text-[13px] text-[#a0a5ad]/75 hover:text-white transition-colors duration-200 block font-normal">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-2.5 md:space-y-4 text-left">
            <h4 className="font-['Montserrat'] font-bold text-[12px] tracking-[0.15em] text-[#cca72f] uppercase">
              Contact Us
            </h4>
            <div className="space-y-2 md:space-y-3 text-[13px]">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-[#cca72f] mt-1 shrink-0" />
                <span className="text-[#a0a5ad]/95 leading-relaxed text-[12.5px]">
                  Arundalpet 7/1, Beside SBI ATM, <br />
                  Andhra Pradesh, 522002
                </span>
              </div>
              <a href="mailto:minhaimportsexports@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors py-1 lg:py-0">
                <FiMail className="w-4 h-4 text-[#cca72f] shrink-0" />
                <span className="text-[#a0a5ad]/95 text-[12.5px] truncate">minhaimportsexports@gmail.com</span>
              </a>
              <a href="tel:+918185867999" className="flex items-center gap-3 hover:text-white transition-colors py-1 lg:py-0">
                <FiPhone className="w-4 h-4 text-[#cca72f] shrink-0" />
                <span className="text-[#a0a5ad]/95 text-[12.5px]">+91 81858 67999</span>
              </a>
            </div>
          </div>

          {/* Column 5: WeChat QR Connect Banner (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-2.5 md:space-y-4 text-left">
            <h4 className="font-['Montserrat'] font-bold text-[12px] tracking-[0.15em] text-[#cca72f] uppercase hidden lg:block">
              WeChat Connect
            </h4>
            
            {/* Elegant Horizontal Banner for WeChat QR */}
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 max-w-sm lg:flex-col lg:items-start lg:bg-transparent lg:border-none lg:p-0">
              <div className="inline-block p-1 bg-white rounded-lg shadow-md border border-white/5 shrink-0">
                <img
                  src={vchatQrImg}
                  alt="Minha WeChat QR Contact"
                  className="w-14 h-14 lg:w-20 lg:h-20 object-contain rounded"
                />
              </div>
              <div>
                <h5 className="font-['Montserrat'] font-bold text-[11px] text-white uppercase lg:hidden">
                  WeChat QR Connect
                </h5>
                <p className="text-[11px] text-[#a0a5ad]/60 mt-0.5 leading-normal">
                  Scan to chat directly with our Guntur B2B export desk.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Red-Gold Gradient Stripe */}
      <div className="w-full h-[3px] bg-gradient-to-r from-[#8f000d] to-[#cca72f]" />

      {/* Bottom Bar Area */}
      <div className="bg-[#0b0c0d] text-[12px] text-[#a0a5ad]/50 py-6 px-6 md:px-12 font-['Montserrat']">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Minha Imports & Exports. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 uppercase tracking-wider text-[11px] font-semibold text-[#a0a5ad]/40">
            <span>Secure Site</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
