import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  /*
  const premiumGradientStyle = {
    backgroundImage: `
      radial-gradient(rgba(255, 255, 255, 0.06) 1.5px, transparent 1.5px),
      linear-gradient(180deg, #8f000d 0%, #540008 50%, #111315 100%)
    `,
    backgroundSize: '24px 24px, 100% 100%',
  };
  */

  const lightRedGradientStyle = {
    backgroundImage: `
      radial-gradient(rgba(143, 0, 13, 0.04) 1.5px, transparent 1.5px),
      linear-gradient(180deg, #fff0f0 0%, #ffffff 100%)
    `,
    backgroundSize: '24px 24px, 100% 100%',
  };

  return (
    <section
      id="contact"
      style={lightRedGradientStyle}
      className="relative py-24 px-6 md:px-12 text-center overflow-hidden border-t border-[#8f000d]/10"
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
          <h2 className="font-['Montserrat'] font-bold text-[24px] sm:text-[30px] md:text-[34px] leading-tight text-[#1F5E3B] tracking-wide">
            Looking for a Reliable Chilli Buying Partner?
          </h2>

          <p className="font-['Inter'] font-normal text-[#5a403e] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] max-w-2xl mx-auto">
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
            className="inline-block bg-[#8f000d] text-white font-['Montserrat'] font-bold text-[14px] sm:text-[15px] py-4 px-8 sm:px-10 rounded-xl shadow-lg hover:bg-[#72000a] hover:translate-y-[-2px] active:scale-98 transition-all duration-300 uppercase tracking-wider"
          >
            Contact Us
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
