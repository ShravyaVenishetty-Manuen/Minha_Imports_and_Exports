import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  const imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuB7n60bLqPyZwqgbpMX2yMZa4LSMOMywtGECuYtVsZXz_0XptT8Dp1tBo4wd1uAr2v2z7XvNc-MDFbGYxGE8puXpFEafoq7x2zGUmPQiGD04SkCqjaHLCiIQ-qw5zQVAMDRnHJSjxvRYMTsvx6RzNOUT-2PKxZyamylPy6TXwgz9qnV4GRtl9ZqX0kliZ2MP58-sVCKZoj1Bvs1KaEGUCI6mWis76f8Mw-ZSyWk8YdTABD1LpNKyV3xrFA3vamc6kAJThv2vFQowCA";

  return (
    <section id="about" className="py-10 md:py-24 px-6 md:px-16 bg-[#f9f9fc]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Side: Animated Image Showcase */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Decorative ambient glowing green background wash */}
          <div className="absolute -inset-4 bg-[#2c6a46]/10 rounded-xl transition-transform duration-500 group-hover:scale-105" />

          {/* Main Image */}
          <img
            alt="Chilli Harvest"
            className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
            src={imageUrl}
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
          <div className="inline-block py-1 px-3 bg-[#adeec1] text-[#0e5130] rounded font-['Inter'] font-semibold text-[12px] tracking-[0.08em] uppercase">
            ESTABLISHED TRADITION
          </div>

          {/* Heading */}
          <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
            Our Commitment to <span className="text-[#8f000d]">Quality</span>
          </h2>

          {/* Body Paragraphs */}
          <p className="font-['Inter'] font-normal text-[#5a403e] text-[16px] leading-[1.6]">
            Minha Imports & Exports stands at the forefront of the global spice trade, specializing in the legendary Guntur Dry Red Chillies. We bridge the gap between local precision farming and international export standards.
          </p>

          <p className="font-['Inter'] font-normal text-[#5a403e] text-[16px] leading-[1.6]">
            Our rigorous selection process ensures that only the finest, most pungent, and color-rich chillies reach our global partners. With a legacy built on trust and a future-focused approach to logistics, we are more than just exporters—we are your strategic partners in the spice industry.
          </p>

          {/* Text CTA Link */}
          <Link
            to="/about"
            className="inline-block border-b-2 border-[#8f000d] text-[#8f000d] font-['Montserrat'] font-semibold text-[14px] pb-1 hover:opacity-70 transition-opacity focus:outline-none cursor-pointer"
          >
            Learn More About Our Legacy
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
