import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGrid } from 'react-icons/fi';
import chilliBasketImg from '../../assets/chilli-basket-featured.png';

const Products = () => {
  // Motion variants for smooth editorial entrance
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const centerpieceVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
    }
  };

  return (
    <section id="products" className="py-10 md:py-24 px-6 md:px-12 bg-[#FAF8F4] relative overflow-hidden">

      {/* Soft Leaf Illustrations (Organic background decoration with light opacity) */}
      <div className="absolute top-16 left-8 w-[240px] h-[240px] opacity-[0.03] text-[#1F5E3B] pointer-events-none z-0 select-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,90 C25,65 45,55 85,15 C60,45 55,65 10,90 Z M85,15 C65,30 55,50 10,90 C45,60 65,45 85,15 Z" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-8 w-[280px] h-[280px] opacity-[0.03] text-[#1F5E3B] pointer-events-none z-0 select-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,90 C25,65 45,55 85,15 C60,45 55,65 10,90 Z M85,15 C65,30 55,50 10,90 C45,60 65,45 85,15 Z" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16 max-w-3xl mx-auto">
          <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">
            Our Products
          </span>
          <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight mb-4">
            Premium Chilli Products for the <span className="text-[#8f000d]">Global Market</span>
          </h2>
          <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6]">
            Sourced directly from Guntur, India's spice capital. We process and pack to the highest international quality standards.
          </p>
        </div>

        {/* Three-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-8 xl:gap-x-12 items-center">

          {/* Left Column: Dry Red Chillies Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          >
            {/* Top Label */}
            <span className="font-['Inter'] font-semibold text-[12px] uppercase tracking-[0.2em] text-[#C8A96A] mb-4">
              Premium Export Quality
            </span>

            {/* Montserrat Heading */}
            <h3 className="font-['Montserrat'] font-bold text-[28px] md:text-[34px] leading-[1.2] text-[#B22222] mb-6">
              Dry Red Chillies
            </h3>

            {/* Description */}
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] leading-[1.7] mb-8 max-w-md">
              Handpicked from the best farms of Guntur. Rich color, high SHU and exceptional quality that the world trusts.
            </p>

            {/* Feature List */}
            <ul className="space-y-3.5 mb-10 text-left">
              {[
                "Teja, S4, Byadgi & More",
                "Strictly Graded & Sorted",
                "12% Max Moisture",
                "Export to 25+ Countries"
              ].map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3">
                  <span className="text-[#B22222] font-semibold text-[18px] leading-none select-none">✓</span>
                  <span className="font-['Inter'] font-medium text-[#1a1c1e] text-[15px] leading-none">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Pill-shaped Button */}
            <Link to="/varieties" className="bg-[#B22222] hover:bg-[#9c1e1e] text-white font-['Montserrat'] font-semibold text-[15px] tracking-wide py-4 px-10 rounded-full shadow-[0_4px_15px_rgba(178,34,34,0.15)] hover:shadow-[0_8px_25px_rgba(178,34,34,0.25)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group cursor-pointer border-none">
              <span>Explore Varieties</span>
              <FiGrid className="text-lg transition-all duration-500 group-hover:rotate-90 group-hover:scale-110" />
            </Link>
          </motion.div>

          {/* Center Column: Circular centerpiece image and overlap logic */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={centerpieceVariants}
            className="lg:col-span-4 relative flex justify-center items-center lg:-mx-4 xl:-mx-8 z-20 group"
          >
            {/* Background Circle Element (styled with soft cream background and premium shadow) */}
            <div className="absolute w-[80%] aspect-square rounded-full bg-[#FAF8F4] border-[6px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.06)] z-0 pointer-events-none" />

            {/* Image container (no overflow crop, allowing chillies to spill outside) */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-full aspect-square flex items-center justify-center z-10 pointer-events-none">
              <img
                src={chilliBasketImg}
                alt="Premium Guntur Dry Red Chillies in a Basket"
                className="w-[95%] h-[95%] object-contain scale-[1.02] group-hover:scale-108 transition-transform duration-700"
              />
            </div>

            {/* Circular Stamp Badge */}
            <div className="absolute top-[8%] right-[8%] bg-white border border-[#C8A96A] rounded-full w-[80px] h-[80px] flex flex-col items-center justify-center text-center shadow-[0_6px_20px_rgba(0,0,0,0.05)] rotate-[15deg] select-none z-30">
              <span className="font-['Montserrat'] font-extrabold text-[16px] text-[#C8A96A] leading-none">100%</span>
              <span className="font-['Inter'] font-extrabold text-[7px] uppercase tracking-[0.15em] text-[#C8A96A] mt-1.5 leading-none">Export</span>
              <span className="font-['Inter'] font-extrabold text-[7px] uppercase tracking-[0.15em] text-[#C8A96A] leading-none mt-0.5">Quality</span>
            </div>
          </motion.div>

          {/* Right Column: Chilli Powder Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          >
            {/* Top Label */}
            <span className="font-['Inter'] font-semibold text-[12px] uppercase tracking-[0.2em] text-[#C8A96A] mb-4">
              Pure & Natural
            </span>

            {/* Montserrat Heading */}
            <h3 className="font-['Montserrat'] font-bold text-[28px] md:text-[34px] leading-[1.2] text-[#1F5E3B] mb-6">
              Chilli Powder
            </h3>

            {/* Description */}
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] leading-[1.7] mb-8 max-w-md">
              Finely ground using advanced technology to retain natural oils, color and pungency.
            </p>

            {/* Feature List */}
            <ul className="space-y-3.5 mb-10 text-left">
              {[
                "ASTA Color 60–90+",
                "Custom Blending Available",
                "No Artificial Color",
                "Hygienically Processed"
              ].map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3">
                  <span className="text-[#1F5E3B] font-semibold text-[18px] leading-none select-none">✓</span>
                  <span className="font-['Inter'] font-medium text-[#1a1c1e] text-[15px] leading-none">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Pill-shaped Button */}
            <Link to="/powder" className="bg-[#1F5E3B] hover:bg-[#184a2e] text-white font-['Montserrat'] font-semibold text-[15px] tracking-wide py-4 px-10 rounded-full shadow-[0_4px_15px_rgba(31,94,59,0.15)] hover:shadow-[0_8px_25px_rgba(31,94,59,0.25)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group cursor-pointer border-none">
              <span>Explore Product</span>
              <FiGrid className="text-lg transition-all duration-500 group-hover:rotate-90 group-hover:scale-110" />
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Products;
