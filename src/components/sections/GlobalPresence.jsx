import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import globalPresenceMap from '../../assets/global-presence-map-nobg.png';
import CountUp from '../common/CountUp';

const GlobalPresence = () => {
  const stats = [
    { end: 50, suffix: '+', label: 'Global Clients', colorClass: 'text-[#B22222]' },
    { end: 5000, suffix: '+', label: 'MT Annual Capacity', colorClass: 'text-[#1F5E3B]' },
    { end: 100, suffix: '%', label: 'Export Quality', colorClass: 'text-[#C8A96A]' },
    { end: 14, suffix: '+', label: 'Chilli Varieties', colorClass: 'text-[#B22222]' }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="global-presence" className="py-12 md:py-16 px-6 md:px-12 bg-surface-container-low relative overflow-hidden">

      {/* Decorative leaf outlines in background */}
      <div className="absolute top-12 left-6 w-[200px] h-[200px] opacity-[0.02] text-[#1F5E3B] pointer-events-none select-none z-0 hidden lg:block">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,90 C25,65 45,55 85,15 C60,45 55,65 10,90 Z" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Main Content Row: Info vs Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading & Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="lg:col-span-5 space-y-6 text-left pt-0 lg:pt-4"
          >
            <span className="font-['urbanist'] font-bold text-[12px] tracking-[0.2em] text-[#B22222] uppercase block">
              Global Footprint
            </span>

            <h2 className="font-['urbanist'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Taking <span className="text-[#8f000d]">Guntur's Finest</span> to the World
            </h2>

            <p className="font-['nunito'] font-semibold text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6]">
              From Guntur to global markets, we ensure quality, consistency and trust in every shipment.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20am%20interested%20in%20importing%20your%20Guntur%20chillies%20to%20my%20country.%20Please%20share%20export%20details%20and%20logistics%20support."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1F5E3B] text-white text-xs font-['urbanist'] font-bold py-3.5 px-8 rounded-lg shadow-md hover:bg-[#17482d] hover:translate-y-[-2px] active:scale-95 transition-all duration-300 uppercase tracking-wider"
              >
                Contact Us
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#5a403e]/10 my-4" />

            {/* Key Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <span className="font-['urbanist'] font-semibold text-[13px] text-[#1a1c1e] block mb-1">
                  Purity Guaranteed
                </span>
                <span className="font-['nunito'] font-semibold text-[12px] text-[#5a403e] leading-relaxed block">
                  Carefully selected crops processed in hygienic environments to preserve the rich, natural heat and color.
                </span>
              </div>
              <div>
                <span className="font-['urbanist'] font-semibold text-[13px] text-[#1a1c1e] block mb-1">
                  Reliable Supply
                </span>
                <span className="font-['nunito'] font-semibold text-[12px] text-[#5a403e] leading-relaxed block">
                  Consistent year-round availability backed by robust cold storage facilities to support large-scale orders.
                </span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Clean Map with routes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="lg:col-span-7 flex flex-col items-center gap-6 -mt-6 lg:-mt-16"
          >
            <div className="relative w-full max-w-[650px] h-auto flex items-center justify-center">
              <motion.img
                src={globalPresenceMap}
                alt="Global Footprint Map"
                className="w-full h-auto object-contain"
                draggable="false"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* 4 Stat Items at the map bottom (No Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-[650px] relative z-20 mt-4 px-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center justify-center text-center py-2"
                >
                  <span className={`font-['urbanist'] font-extrabold text-[24px] md:text-[30px] leading-none ${stat.colorClass}`}>
                    <CountUp end={stat.end} suffix={stat.suffix} duration={1.6} className="inline-block" />
                  </span>
                  <span className="font-['nunito'] font-semibold text-[#5a403e]/70 text-[10px] md:text-[11px] mt-2 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default GlobalPresence;
