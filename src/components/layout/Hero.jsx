import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import chilliPowderImg from '../../assets/chilli-powder-hero.png';

const Hero = () => {
  const bgImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDtpki20kGgdA7_cxFiOWTR5OBFsfm5ZCRn0_xuTFz2u0suIde-PQOmIcfojYC-TbiqH42ax86M_Zp2Mw4V7_jShncNM8V53FiFybwCdXt_NFRsbG0YM8qfClvGASqWIqivC0UUz9t51pOqZ9xNMmCq5oCEcWLNZ0D-O1xbNNJGdhWcCLfFztVWaEeZson9N5zYt1dGFSnUaiUMzi_rjzI9BRAYq3BuBhmb7Ej3EM81AJLpxJfb6uBr8XcbIEmp5yv4wJJQI9_qiCA",
    chilliPowderImg
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  // Slideshow transition interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Motion variants for staged entrance animations of text overlay
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // premium cubic-bezier easeOut
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-end justify-center bg-black">

      {/* Background Image Slideshow with smooth crossfade and Ken Burns scale effect */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((image, index) => {
          const isActive = index === currentIdx;
          return (
            <motion.div
              key={index}
              initial={{ opacity: index === 0 ? 1 : 0 }}
              animate={{
                opacity: isActive ? 1 : 0
              }}
              transition={{
                opacity: { duration: 2.8, ease: "easeInOut" }
              }}
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${image})` }}
            />
          );
        })}
        {/* Dark overlay (60% opacity) */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center pb-16 md:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-6"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-['Montserrat'] font-bold text-white text-[36px] md:text-[56px] leading-[1.2] md:leading-[1.1] tracking-[-0.02em]"
          >
            Premium Guntur Dry Red Chillies <span className="text-[#ffdad6] block md:inline">Exported Worldwide</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="font-['Inter'] font-normal text-white/90 text-[18px] leading-[1.6] max-w-2xl"
          >
            Delivering Quality, Purity and Trust Across Global Markets. We are your premium gateway to the finest spices from India's chilli capital.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 pt-8 justify-center w-full md:w-auto"
          >
            <Link
              to="/products"
              className="bg-[#8f000d] text-white font-['Montserrat'] font-bold text-lg py-4 px-10 rounded hover:shadow-xl hover:-translate-y-1 transition-all duration-200 text-center"
            >
              Explore Varieties
            </Link>

            <Link
              to="/contact"
              className="border-2 border-white text-white font-['Montserrat'] font-bold text-lg py-4 px-10 rounded hover:bg-white hover:text-[#8f000d] transition-all duration-200 text-center"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
