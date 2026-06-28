import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import aboutHarvestImg from '../../assets/about-harvest.png';
import harvest from '../../assets/hero-about.png';

const About = () => {
  const imageUrl = aboutHarvestImg;
  const MotionLink = motion(Link);

  return (
    <section id="about" className="py-12 md:py-16 px-6 md:px-16 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Side: Animated Image Showcase */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.01 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Decorative ambient glowing green background wash */}
          <div className="absolute -inset-4 bg-[#2c6a46]/10 rounded-xl transition-transform duration-500 group-hover:scale-105" />

          {/* Main Image */}
          <img
            alt="Chilli Harvest"
            loading="lazy"
            className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
            src={harvest}
          />
        </motion.div>

        {/* Right Side: Copy Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="space-y-6 flex flex-col items-start"
        >
          {/* Badge */}
          <div className="inline-block py-1 px-3 bg-[#adeec1] text-[#0e5130] rounded font-['Nunito'] font-semibold text-[12px] tracking-[0.08em] uppercase">
            ESTABLISHED TRADITION
          </div>

          {/* Heading */}
          <h2 className="font-['urbanist'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
            Our Commitment to <span className="text-[#8f000d]">Quality</span>
          </h2>

          {/* Body Paragraphs */}
          <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.6]">
            Minha Imports & Exports stands at the forefront of the global spice trade, specializing in the legendary Guntur Dry Red Chillies. We bridge the gap between local precision farming and international export standards.
          </p>

          <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.6]">
            Our rigorous selection process ensures that only the finest, most pungent, and color-rich chillies reach our global partners. With a legacy built on trust and a future-focused approach to logistics, we are more than just exporters—we are your strategic partners in the spice industry.
          </p>

          {/* Text CTA Link */}
          <MotionLink
            to="/about"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block border-b-2 border-[#8f000d] text-[#8f000d] font-['urbanist'] font-semibold text-[14px] pb-1 hover:opacity-70 transition-all duration-300 focus:outline-none cursor-pointer"
          >
            Learn More About Our Legacy
          </MotionLink>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
