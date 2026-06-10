import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const redBgStyle = {
    backgroundImage: `
      radial-gradient(rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px),
      linear-gradient(135deg, #8f000d 0%, #a50f15 50%, #5a0006 100%)
    `,
    backgroundSize: '24px 24px, 100% 100%',
  };

  return (
    <section
      id="contact"
      className="relative bg-white py-8 px-6 md:px-12 overflow-hidden border-t border-neutral-100"
    >
      <div className="max-w-[960px] mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3 }}
          style={redBgStyle}
          className="relative rounded-[20px] md:rounded-[28px] overflow-hidden px-5 py-7 sm:px-8 sm:py-9 md:py-10 md:px-12 shadow-[0_15px_40px_rgba(143,0,13,0.14)] border border-[#8f000d]/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-8 transition-all duration-300"
        >
          {/* Decorative glows inside card */}
          <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-[#cca72f]/10 rounded-full blur-[70px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-white/5 rounded-full blur-[50px] pointer-events-none" />

          {/* Left: Text & badges */}
          <div className="space-y-4 lg:max-w-xl text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#cca72f] font-['Montserrat'] font-bold text-[8.5px] sm:text-[9px] tracking-widest uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cca72f] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#cca72f]"></span>
              </span>
              Partnership Opportunities
            </div>
            
            <h2 className="font-['Montserrat'] font-bold text-[22px] sm:text-[26px] md:text-[30px] leading-[1.25] text-white tracking-tight">
              Looking for a Reliable <br className="hidden sm:inline" /> Chilli Buying Partner?
            </h2>

            <p className="font-['Inter'] font-normal text-[13px] sm:text-[13.5px] leading-relaxed text-white/80">
              Looking to buy premium dry red chillies or high-quality chilli powder? Get in touch with us today for customized wholesale quotes, bulk orders, and direct sourcing inquiries.
            </p>

            {/* Checkmark trade highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-0.5">
              {[
                "100% Export Quality",
                "Direct Guntur Farms",
                "Global Sourcing & Trade"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
                  <FiCheckCircle className="text-[#cca72f] text-xs shrink-0" />
                  <span className="font-['Montserrat'] font-bold text-[8.5px] sm:text-[9px] text-white/90 uppercase tracking-wider">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Premium Button */}
          <div className="flex shrink-0 items-center justify-start lg:justify-end relative z-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#8f000d] font-['Montserrat'] font-bold text-[11.5px] sm:text-[12px] py-[12px] px-[26px] rounded-full shadow-[0_4px_15px_-2px_rgba(0,0,0,0.12)] hover:bg-neutral-50 hover:translate-y-[-2px] hover:shadow-[0_6px_20px_-2px_rgba(0,0,0,0.2)] active:scale-98 transition-all duration-300 uppercase tracking-wider group"
            >
              Contact Us
              <FiArrowRight className="text-xs transition-transform group-hover:translate-x-1 duration-300" />
            </Link>
          </div>

        </motion.div>
      </div>

      {/* Thin Divider to Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-100 z-20" />
    </section>
  );
};

export default Contact;
