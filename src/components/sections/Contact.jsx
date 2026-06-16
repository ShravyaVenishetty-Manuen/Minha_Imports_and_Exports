import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Contact = () => {
  const redBgStyle = {
    backgroundImage: `
      radial-gradient(rgba(255, 255, 255, 0.035) 1.5px, transparent 1.5px),
      linear-gradient(135deg, #8f000d 0%, #a50f15 50%, #5a0006 100%)
    `,
    backgroundSize: '24px 24px, 100% 100%',
  };

  return (
    <section
      id="contact"
      className="relative bg-white py-12 md:py-16 overflow-hidden border-t border-neutral-100"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10 w-full">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3 }}
          style={redBgStyle}
          className="relative z-10 rounded-[2rem] overflow-hidden py-10 md:py-14 px-6 md:px-12 shadow-[0_35px_80px_rgba(0,0,0,0.18)] border border-[#8f000d]/10 transition-all duration-300"
        >


          {/* Decorative glows inside card */}
          <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-[#cca72f]/10 rounded-full blur-[70px] pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-white/5 rounded-full blur-[50px] pointer-events-none z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Brand Quote (lg:col-span-5) */}
            <div className="relative space-y-4 text-center lg:text-left lg:border-r lg:border-white/10 lg:pr-8 xl:pr-12 lg:col-span-5 w-full z-10">
              <span className="absolute -top-10 -left-2 text-white/10 text-8xl font-serif select-none pointer-events-none hidden lg:inline-block">
                “
              </span>
              <blockquote className="font-['Montserrat'] font-medium italic text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-white/95 relative z-10">
                "From Guntur's rich farming heritage to global markets, we deliver products crafted with care and commitment.Every shipment reflects our dedication to quality, trust, and long-term relationships."
              </blockquote>
              <div className="font-['Montserrat'] font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-[#cca72f] relative z-10">
                — The Minha Imports & Exports Team
              </div>
              <span className="absolute -bottom-14 right-4 text-white/10 text-8xl font-serif select-none pointer-events-none hidden lg:inline-block">
                ”
              </span>
            </div>

            {/* Right Column: CTA Content (lg:col-span-7) */}
            <div className="space-y-5 text-center lg:text-left lg:col-span-7 w-full">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#cca72f] font-['Montserrat'] font-bold text-[8.5px] sm:text-[9px] tracking-widest uppercase mx-auto lg:mx-0">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cca72f] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#cca72f]"></span>
                </span>
                Partnership Opportunities
              </div>

              <h2 className="font-['Montserrat'] font-bold text-[22px] sm:text-[26px] md:text-[30px] leading-[1.2] text-white tracking-tight">
                Looking for a Reliable <br className="hidden sm:inline" /> Chilli Buying Partner?
              </h2>

              <p className="font-['Inter'] font-normal text-[13.5px] leading-relaxed text-white/80">
                Looking to buy premium dry red chillies or high-quality chilli powder? Get in touch with us today for customized wholesale quotes, bulk orders, and direct sourcing inquiries.
              </p>

              {/* Feature badges - Styled as Glass Chips with bullet dots */}
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-1">
                {[
                  "100% Export Quality",
                  "Direct Guntur Farms",
                  "Global Sourcing & Trade"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 bg-white/5 border border-white/5 backdrop-blur-[2px] rounded-full px-3.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cca72f] shrink-0" />
                    <span className="font-['Montserrat'] font-bold text-[8.5px] sm:text-[9px] text-white/90 uppercase tracking-wider">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#8f000d] font-['Montserrat'] font-bold text-[11.5px] sm:text-[12px] py-[12px] px-[26px] rounded-full shadow-[0_4px_15px_-2px_rgba(0,0,0,0.12)] hover:bg-neutral-50 hover:translate-y-[-2px] hover:shadow-[0_6px_20px_-2px_rgba(0,0,0,0.2)] active:scale-98 transition-all duration-300 uppercase tracking-wider group"
                >
                  Contact Us
                  <FiArrowRight className="text-xs transition-transform group-hover:translate-x-1 duration-300" />
                </Link>
              </div>
            </div>

          </div>

        </motion.div>
      </div>

      {/* Thin Divider to Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-100 z-20" />
    </section>
  );
};

export default Contact;