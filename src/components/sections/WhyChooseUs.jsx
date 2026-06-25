import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiShield, FiGlobe, FiTruck, FiPackage, FiThumbsUp } from 'react-icons/fi';
import worldMap from '../../assets/world-map.svg';

const WhyChooseUs = () => {
  const cards = [
    {
      title: "Premium Quality",
      text: "A-class Guntur chillies with high SHU and vibrant natural color.",
      icon: <FiAward className="text-white text-2xl md:text-3xl" />,
      bg: "bg-[#8f000d]"
    },
    {
      title: "Hygienic Processing",
      text: "International hygiene standards in sorting, stem-cutting, and packaging.",
      icon: <FiShield className="text-white text-2xl md:text-3xl" />,
      bg: "bg-[#2c6a46]"
    },
    {
      title: "Global Standards",
      text: "FDA, FSSAI & global food safety compliant for seamless international trade.",
      icon: <FiGlobe className="text-white text-2xl md:text-3xl" />,
      bg: "bg-[#cca72f]"
    },
    {
      title: "Timely Delivery",
      text: "Reliable logistics network for on-time delivery to any port worldwide.",
      icon: <FiTruck className="text-white text-2xl md:text-3xl" />,
      bg: "bg-[#d97706]"
    },
    {
      title: "Reliable Supply",
      text: "Direct sourcing ensures consistent supply even during peak seasons.",
      icon: <FiPackage className="text-white text-2xl md:text-3xl" />,
      bg: "bg-[#0a361c]"
    },
    {
      title: "Customer Trust",
      text: "Transparent deals with lab reports and inspection certificates.",
      icon: <FiThumbsUp className="text-white text-2xl md:text-3xl" />,
      bg: "bg-[#8f6a10]"
    }
  ];

  // Motion variants for staggered grid items
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="why-choose-us" className="relative pt-6 md:pt-12 pb-4 md:pb-8 bg-white overflow-hidden">

      {/* Red Header Section */}
      <div className="relative pt-6 md:pt-8 pb-10 md:pb-12 px-6 text-center text-white bg-[#8f000d]">

        {/* Section Heading */}
        <h2 className="font-['urbanist'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-white tracking-tight mb-4">
          Why the World Chooses <span className="text-[#cca72f]">Minha ?</span>
        </h2>

        {/* Premium Compact Float Layout (No back card) */}
        <div className="max-w-[600px] mx-auto flex flex-col items-center gap-1.5 mt-2">

          {/* Gold Promise Ribbon Badge */}
          <div
            className="px-3.5 py-0.5 bg-gradient-to-r from-[#cca72f] via-[#ffe17d] to-[#cca72f] text-[#8f000d] font-['urbanist'] font-extrabold tracking-wider text-[9px] sm:text-[10px] uppercase shadow-md flex items-center justify-center gap-1.5"
            style={{ clipPath: 'polygon(6px 0%, calc(100% - 6px) 0%, 100% 50%, calc(100% - 6px) 100%, 6px 100%, 0% 50%)' }}
          >
            <span>✦</span>
            <span>Our Promise</span>
            <span>✦</span>
          </div>

          {/* Main Quote Container with tight quotation marks */}
          <div className="relative mt-1 px-8 py-1 flex items-center justify-center">
            {/* Faded Giant Left Quote */}
            <span className="absolute -left-2 -top-2 text-[#cca72f]/12 text-[42px] sm:text-[48px] font-serif leading-none select-none pointer-events-none">❝</span>

            <p className="font-['urbanist'] font-extrabold text-white text-[14px] sm:text-[17px] md:text-[20px] leading-snug tracking-tight not-italic z-10 text-center">
              In <span className="text-[#cca72f]">MINHA</span>, customer service is our prime motto.
            </p>

            {/* Faded Giant Right Quote */}
            <span className="absolute -right-2 -bottom-5 sm:-bottom-7 text-[#cca72f]/12 text-[42px] sm:text-[48px] font-serif leading-none select-none pointer-events-none">❞</span>
          </div>

          {/* Elegant Divider symbol */}
          <span className="text-[#cca72f]/50 text-[12px] sm:text-[13px] my-0 select-none">❖</span>

          {/* Subtitle / Caption */}
          <p className="font-['Nunito'] font-semibold text-white/75 text-[11px] sm:text-[12px] tracking-wide">
            Delivering trust in every shipment.
          </p>

        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[16px] md:h-[24px] fill-[#f8f8f8]"
          >
            <path d="M0,60 C300,110 900,110 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

      </div>

      {/* Bottom Section / Grid */}
      <div className="pt-10 md:pt-16 pb-8 md:pb-12 px-6 md:px-16 relative overflow-hidden">

        {/* World Map Watermark Background */}
        <img
          src={worldMap}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] opacity-[0.04] pointer-events-none select-none object-contain z-0"
          alt="World Map"
        />

        {/* 6-Card Grid */}
        <div className="max-w-[1280px] mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-4 lg:gap-x-8"
          >
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="relative flex flex-col items-center text-center px-2"
              >
                {/* Connecting Line & Diamond (between columns on desktop) */}
                {idx < 5 && (
                  <div className="hidden lg:flex absolute top-[36px] left-[50%] w-[100%] items-center justify-center pointer-events-none z-0">
                    <div className="w-full h-[1px] bg-neutral-300" />
                    <div className={`w-2 h-2 rotate-45 shrink-0 mx-[-4px] ${card.bg}`} />
                    <div className="w-full h-[1px] bg-neutral-300" />
                  </div>
                )}

                {/* Vertical Divider */}
                {idx > 0 && (
                  <div className="hidden lg:block absolute left-[-8px] lg:left-[-16px] top-28 bottom-4 w-[1px] bg-neutral-200" />
                )}

                {/* Icon Circle */}
                <div className={`w-[72px] h-[72px] ${card.bg} rounded-full flex items-center justify-center mb-6 shadow-md relative z-10 transition-transform duration-300 hover:scale-110`}>
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-['urbanist'] font-bold text-[18px] text-[#1a1c1e] mb-3 leading-snug">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-['Nunito'] font-normal text-[#5a403e] text-[14px] leading-[1.6]">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
