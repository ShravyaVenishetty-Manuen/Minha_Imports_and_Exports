import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const redBgStyle = {
    backgroundImage: `
      radial-gradient(rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px),
      linear-gradient(135deg, #9B111E 0%, #B22222 100%)
    `,
    backgroundSize: '24px 24px, 100% 100%',
  };

  return (
    <section
      id="contact"
      style={redBgStyle}
      className="relative py-[90px] px-6 md:px-12 text-center overflow-hidden border-t border-[#B22222]/10"
    >

      <div className="max-w-3xl mx-auto relative z-10 space-y-8">

        {/* Animated Text Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h2 className="font-['Montserrat'] font-bold text-[28px] sm:text-[36px] md:text-[42px] leading-tight text-white tracking-wide">
            Looking for a Reliable <br className="hidden sm:inline" /> Chilli Buying Partner?
          </h2>

          <p 
            className="font-['Inter'] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
          >
            Looking to buy premium dry red chillies or high-quality chilli powder? Get in touch with us today for customized wholesale quotes, bulk orders, and direct sourcing inquiries.
          </p>
        </motion.div>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="pt-2"
        >
          <a
            href="#contact"
            className="inline-block bg-white text-[#B22222] font-['Montserrat'] font-bold text-[14px] sm:text-[15px] py-[16px] px-[36px] rounded-full shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] hover:bg-neutral-50 hover:translate-y-[-2px] active:scale-98 transition-all duration-300 uppercase tracking-wider"
          >
            Contact Us
          </a>
        </motion.div>

      </div>

      {/* Thin Divider to Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10 z-20" />
    </section>
  );
};

export default Contact;
