import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiChiliPepper } from 'react-icons/gi';
import chilliPowderImg from '../../assets/chilli-powder-hero.png';
import heroSlide1Img from '../../assets/hero.png';

const Hero = () => {
  const bgImages = [
    heroSlide1Img,
    chilliPowderImg
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  // Slideshow transition interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % bgImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Motion variants for staged entrance animations of text overlay
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // premium cubic-bezier easeOut
      }
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] md:h-[90vh] overflow-hidden flex items-end justify-center bg-black pb-8 md:pb-12 pt-28">

      {/* Background Image Slideshow with smooth crossfade and Ken Burns scale effect */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((image, index) => {
          const isActive = index === currentIdx;
          return (
            <motion.img
              key={index}
              src={image}
              alt={index === 0 ? "Premium Guntur Dry Red Chillies" : "Pure Chilli Powder Sourcing"}
              initial={{ opacity: index === 0 ? 1 : 0, scale: 1 }}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1.06 : 1
              }}
              transition={{
                opacity: { duration: 2.0, ease: "easeInOut" },
                scale: { duration: 5.0, ease: "easeOut" }
              }}
              className="absolute inset-0 w-full h-full object-cover"
              fetchpriority={index === 0 ? "high" : "low"}
              loading={index === 0 ? "eager" : "lazy"}
            />
          );
        })}
        {/* Dark overlay (45% opacity for crisp text readability) */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Radial ambient glow to boost visual depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#cca72f]/5 rounded-full blur-[120px] pointer-events-none z-15" />

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 text-center pt-4 pb-12 md:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-6 md:space-y-8"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-['urbanist'] font-extrabold text-white text-[38px] sm:text-[48px] md:text-[62px] leading-[1.15] md:leading-[1.08] tracking-tight max-w-4xl text-center"
          >
            Premium Guntur Dry Red Chillies <span className="bg-gradient-to-r from-[#ffdad6] via-[#cca72f] to-[#ffdad6] bg-clip-text text-transparent block mt-2">Exported Worldwide</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="font-['nunito'] font-normal text-[15px] sm:text-[17px] md:text-[19px] leading-relaxed max-w-2xl text-white/95 text-center"
          >
            Delivering Quality, Purity and Trust Across Global Markets. We are your premium gateway to the finest spices from India's chilli capital.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center w-full sm:w-auto"
          >
            <Link
              to="/varieties"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#8f000d] to-[#b22222] text-white font-['urbanist'] font-bold text-[13px] sm:text-[14px] py-4 px-9 rounded-full shadow-lg shadow-[#8f000d]/30 hover:shadow-[#8f000d]/50 hover:translate-y-[-2px] active:scale-98 transition-all duration-300 uppercase tracking-wider group"
            >
              Explore Varieties
              <GiChiliPepper className="text-[20px] transition-transform group-hover:translate-x-1 duration-300 scale-x-[-1] rotate-45" />
            </Link>

            <a
              href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20am%20interested%20in%20your%20premium%20Guntur%20dry%20red%20chillies.%20Please%20share%20more%20details%20about%20your%20products%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/30 backdrop-blur-sm text-white font-['urbanist'] font-bold text-[13px] sm:text-[14px] py-4 px-9 rounded-full hover:bg-white hover:text-[#8f000d] hover:border-white hover:translate-y-[-2px] active:scale-98 transition-all duration-300 uppercase tracking-wider"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
