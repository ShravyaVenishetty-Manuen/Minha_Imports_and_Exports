import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiMapPin, FiChevronLeft, FiChevronRight, FiCheck } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rajesh Mehta",
      role: "Director of Procurement",
      company: "Vedic Spices & Extracts",
      location: "Mumbai, Maharashtra",
      tag: "Unmatched Pungency & Color Retention",
      text: "Minha's Guntur Sanam and Teja varieties have set a new benchmark for our extraction division. The color value (ASTA rating) remains stable even after months in storage. Truly exceptional quality.",
      rating: 5,
      accent: "#8f000d"
    },
    {
      name: "Anjali Sharma",
      role: "Head Quality Auditor",
      company: "Bharat Masala Foods",
      location: "Delhi NCR",
      tag: "Zero Compliance Issues on Aflatoxin",
      text: "We have sourced multiple container loads from Minha. Their sorting technology and strict laboratory controls mean zero rejections due to pesticide residues or moisture levels. The stemless sort is clean and ready.",
      rating: 5,
      accent: "#1f5e3b"
    },
    {
      name: "Vikram Sengupta",
      role: "VP Supply Chain",
      company: "Indo-Global Spice Alliance",
      location: "Kolkata, West Bengal",
      tag: "Consistent Year-Round Shipping",
      text: "Minha's cold chain storage capacity ensures we get fresh-harvest quality red chillies even during the off-season. Their locked-in pricing contract saved us from local market price hikes.",
      rating: 5,
      accent: "#cca72f"
    },
    {
      name: "Karthik Srinivasan",
      role: "Managing Partner",
      company: "Deccan Milling & Packaging",
      location: "Guntur, Andhra Pradesh",
      tag: "Custom Private Label Packaging",
      text: "Their packaging lines support varied custom configurations, from jute sacks to vacuum-sealed poly packs. The team's response time and execution speed during peak season are commendable.",
      rating: 5,
      accent: "#8f000d"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Transitions every 5 seconds

    return () => clearInterval(interval);
  }, [isHovered, reviews.length]);

  return (
    <section id="testimonials" className="py-12 md:py-16 px-6 md:px-12 bg-[#FAF8F4] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#cca72f]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#8f000d]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading, Rating Card, and Trust Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.25em] text-[#8f000d] bg-[#8f000d]/10 px-3.5 py-1.5 rounded-full uppercase inline-block mb-3.5">
                Client Voices
              </span>
              <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
                Trusted by India's <br />
                <span className="text-[#1f5e3b]">Leading Food Brands</span>
              </h2>
            </div>

            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6]">
              We partner with India's largest domestic packers, food processors, and spice exporters to deliver consistent, certified dry red chilli varieties to global end-users.
            </p>

            {/* Premium Trust Score Card */}
            <div className="bg-gradient-to-br from-[#121315] via-[#200004] to-[#121315] text-white p-6 rounded-[2rem] shadow-xl border border-white/[0.05] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#cca72f]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 flex items-center gap-5">
                <div>
                  <div className="font-['Montserrat'] font-black text-[38px] md:text-[46px] text-[#cca72f] leading-none">
                    4.9
                  </div>
                  <div className="flex text-[#cca72f] gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="fill-[#cca72f] text-xs" />
                    ))}
                  </div>
                </div>
                <div className="h-10 w-[1px] bg-white/10" />
                <div className="text-left space-y-1">
                  <div className="font-['Montserrat'] font-bold text-xs uppercase tracking-wider text-white/90">
                    Average Supplier Rating
                  </div>
                  <div className="font-['Inter'] text-[11px] text-white/60">
                    Based on 120+ audited domestic & international trading transactions.
                  </div>
                </div>
              </div>
            </div>

            {/* Bullet Quality Promises */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1f5e3b]/10 flex items-center justify-center text-[#1f5e3b]">
                  <FiCheck className="text-xs stroke-[3px]" />
                </div>
                <span className="font-['Montserrat'] font-bold text-[11px] text-neutral-800 uppercase tracking-wide">FSSAI Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#1f5e3b]/10 flex items-center justify-center text-[#1f5e3b]">
                  <FiCheck className="text-xs stroke-[3px]" />
                </div>
                <span className="font-['Montserrat'] font-bold text-[11px] text-neutral-800 uppercase tracking-wide">ASTA Standardized</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Animated Carousel Testimonial Card */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            <div
              className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >

              {/* Outer Glow behind the active card */}
              <div className="absolute inset-0 bg-[#1f5e3b]/5 rounded-[2.5rem] blur-2xl transform rotate-1 scale-95 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 40, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border border-neutral-200/60 rounded-[2rem] p-8 md:p-10 shadow-xl relative w-full flex flex-col justify-between"
                >
                  {/* Decorative Big Quote Mark */}
                  <div className="absolute top-8 right-8 opacity-[0.03] text-neutral-900 text-[90px] font-serif pointer-events-none select-none">
                    <FaQuoteLeft />
                  </div>

                  <div className="space-y-5">
                    {/* Star Rating & Accent Top Border */}
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1 text-[#cca72f]">
                        {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                          <FiStar key={i} className="fill-[#cca72f] text-sm" />
                        ))}
                      </div>
                      <span className="text-[10px] font-['Montserrat'] font-bold text-[#cca72f] bg-[#cca72f]/10 border border-[#cca72f]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        100% Quality Verified
                      </span>
                    </div>

                    {/* Tagline */}
                    <h3 className="font-['Montserrat'] font-extrabold text-[18px] sm:text-[20px] text-neutral-900 leading-snug text-left">
                      "{reviews[activeIndex].tag}"
                    </h3>

                    {/* Review text */}
                    <p className="font-['Inter'] font-normal text-[#5a403e] text-[14px] sm:text-[15.5px] leading-relaxed text-justify">
                      {reviews[activeIndex].text}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-neutral-100 my-6" />

                  {/* Profile info and Location badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-left">
                      <div className="font-['Montserrat'] font-black text-[14px] tracking-tight text-neutral-900">
                        {reviews[activeIndex].name}
                      </div>
                      <div className="font-['Inter'] text-[12px] text-[#5a403e]/70 mt-0.5">
                        {reviews[activeIndex].role}, <span className="font-semibold text-[#1f5e3b]">{reviews[activeIndex].company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-['Montserrat'] font-bold text-neutral-600 bg-[#FAF8F4] border border-neutral-100 px-3.5 py-1.5 rounded-full shadow-sm self-start sm:self-auto">
                      <FiMapPin className="text-[#8f000d]" />
                      <span>{reviews[activeIndex].location}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Navigation Dots and Arrow Controls */}
            <div className="flex items-center justify-between mt-8 px-4">
              {/* Index indicators */}
              <div className="flex gap-2.5">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-[#8f000d]' : 'w-2.5 bg-neutral-300'}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-800 flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-white transition-all duration-300 shadow-sm active:scale-95 bg-white"
                  aria-label="Previous testimonial"
                >
                  <FiChevronLeft className="text-lg" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-800 flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-white transition-all duration-300 shadow-sm active:scale-95 bg-white"
                  aria-label="Next testimonial"
                >
                  <FiChevronRight className="text-lg" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
