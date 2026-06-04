import React from 'react';
import { motion } from 'framer-motion';
import step1Img from '../../assets/process-step1.png';
import step2Img from '../../assets/process-step2.png';
import step3Img from '../../assets/process-step3.png';
import step4Img from '../../assets/process-step4.png';

const OurProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Farm Visits",
      text: "Direct collaboration with trusted farmers in Guntur for premium quality cultivation.",
      image: step1Img,
      color: "bg-[#B22222]",
      arrowColor: "#1F5E3B" // Green arrow
    },
    {
      id: "02",
      title: "Raw Material Selection",
      text: "Handpicked and graded chillies ensuring vibrant color, high SHU and consistent quality.",
      image: step2Img,
      color: "bg-[#1F5E3B]",
      arrowColor: "#B22222" // Red arrow
    },
    {
      id: "03",
      title: "Processing & Packaging",
      text: "Hygienic processing, advanced sorting and customized packaging to lock in freshness and flavor.",
      image: step3Img,
      color: "bg-[#B22222]",
      arrowColor: "#1F5E3B" // Green arrow
    },
    {
      id: "04",
      title: "Global Export",
      text: "Timely delivery with complete documentation to global markets.",
      image: step4Img,
      color: "bg-[#1F5E3B]"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="our-process" className="relative py-28 px-6 md:px-12 bg-white overflow-hidden">

      {/* Decorative leaf illustrations in margins */}
      <div className="absolute top-12 left-2 w-[180px] h-[180px] opacity-[0.02] text-[#1F5E3B] pointer-events-none z-0 select-none hidden lg:block">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,90 C25,65 45,55 85,15 C60,45 55,65 10,90 Z" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-2 w-[180px] h-[180px] opacity-[0.02] text-[#1F5E3B] pointer-events-none z-0 select-none hidden lg:block">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,90 C25,65 45,55 85,15 C60,45 55,65 10,90 Z" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Top Process Badge & Headings */}
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-1.5 bg-[#8f000d] text-white font-['Montserrat'] font-semibold text-[11px] uppercase tracking-[0.15em] rounded-md mb-4 shadow-sm">
            Our Process
          </div>

          <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
            From <span className="text-[#B22222]">Guntur Farms</span> to <span className="text-[#1F5E3B]">Global Markets</span>
          </h2>

          <p className="font-['Inter'] font-medium text-[#5a403e] text-[15px] md:text-[16px] mt-3">
            A seamless journey of quality, care and commitment.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 relative"
        >
          {/* Timeline Connector Arrows */}
          <div className="hidden lg:block absolute top-[80px] left-0 w-full pointer-events-none z-0">
            {/* Arrow 1: between Col 1 and Col 2 */}
            <div className="absolute left-[25%] -translate-x-1/2 w-[80px] flex items-center justify-center">
              <svg className="w-full h-4" fill="none" viewBox="0 0 100 20">
                <path d="M 5,10 L 85,10" stroke="#1F5E3B" strokeWidth="1.5" strokeDasharray="4,4" />
                <path d="M 80,6 L 88,10 L 80,14" fill="#1F5E3B" stroke="#1F5E3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {/* Arrow 2: between Col 2 and Col 3 */}
            <div className="absolute left-[50%] -translate-x-1/2 w-[80px] flex items-center justify-center">
              <svg className="w-full h-4" fill="none" viewBox="0 0 100 20">
                <path d="M 5,10 L 85,10" stroke="#B22222" strokeWidth="1.5" strokeDasharray="4,4" />
                <path d="M 80,6 L 88,10 L 80,14" fill="#B22222" stroke="#B22222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {/* Arrow 3: between Col 3 and Col 4 */}
            <div className="absolute left-[75%] -translate-x-1/2 w-[80px] flex items-center justify-center">
              <svg className="w-full h-4" fill="none" viewBox="0 0 100 20">
                <path d="M 5,10 L 85,10" stroke="#1F5E3B" strokeWidth="1.5" strokeDasharray="4,4" />
                <path d="M 80,6 L 88,10 L 80,14" fill="#1F5E3B" stroke="#1F5E3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={stepVariants}
              className="relative flex flex-col items-center text-center group"
            >

              {/* Step Illustration */}
              <div className="w-[240px] h-[160px] mb-6 relative flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Step Number Circle */}
              <div className={`w-9 h-9 ${step.color} text-white font-['Montserrat'] font-bold text-[14px] rounded-full flex items-center justify-center mb-4 shadow-[0_4px_10px_rgba(0,0,0,0.06)] relative z-10`}>
                {step.id}
              </div>

              {/* Title */}
              <h3 className="font-['Montserrat'] font-bold text-[16px] md:text-[18px] text-[#1a1c1e] mb-3 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-['Inter'] font-normal text-[#5a403e] text-[13px] md:text-[14px] leading-[1.6] max-w-[260px]">
                {step.text}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OurProcess;
