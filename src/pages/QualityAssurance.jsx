import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiCheckCircle,
  FiMapPin,
  FiCheckSquare,
  FiSettings,
  FiTruck,
  FiThermometer,
  FiDroplet,
  FiAward,
  FiPackage,
  FiShield,
  FiStar
} from 'react-icons/fi';

import dryChilliSortingFacility from '../assets/dry_chilli_sorting_facility.png';
import qaInspector from '../assets/qa_inspector.png';

// Import custom generated step timeline images
import qaStepFarm from '../assets/qa_step_farm.png';
import qaStepAcquisition from '../assets/qa_step_acquisition.png';
import qaStepProcessing from '../assets/qa_step_processing.png';
import qaStepShipping from '../assets/qa_step_shipping.png';
import chilliExportCta from '../assets/chilli-export-cta.png';
import glowingChilliPremiumRemoveBg from '../assets/glowing-chilli-premium-remove-bg-io.png';
import fssaiLogo from '../assets/3fssai-logo-png.png';
import brcLogo from '../assets/brc-food-certification-logo-Photoroom.png';
import fieoLogo from '../assets/fieo-Photoroom.png';



const QualityAssurance = () => {
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const processStages = [
    {
      num: '01',
      title: 'Farm Visits',
      image: qaStepFarm,
      desc: 'Our journey begins at the origin. We conduct on-site inspections at partner farms to monitor crop health.',
      colorClass: 'border-[#2c6a46]/40',
      dotBgClass: 'bg-[#2c6a46]',
      badgeBgClass: 'bg-[#2c6a46]'
    },
    {
      num: '02',
      title: 'Acquisition',
      image: qaStepAcquisition,
      desc: 'Strict procurement protocols ensure only the top 10% of harvested yield enters our supply chain.',
      colorClass: 'border-[#8f000d]/40',
      dotBgClass: 'bg-[#8f000d]',
      badgeBgClass: 'bg-[#8f000d]'
    },
    {
      num: '03',
      title: 'Processing',
      image: qaStepProcessing,
      desc: 'Cleaning, stem removal, and moisture control are performed in our climate-controlled facility.',
      colorClass: 'border-[#2c6a46]/40',
      dotBgClass: 'bg-[#2c6a46]',
      badgeBgClass: 'bg-[#2c6a46]'
    },
    {
      num: '04',
      title: 'Shipping',
      image: qaStepShipping,
      desc: 'Final export clearance and container loading under supervised inspection for timely global delivery.',
      colorClass: 'border-[#8f000d]/40',
      dotBgClass: 'bg-[#8f000d]',
      badgeBgClass: 'bg-[#8f000d]'
    }
  ];



  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center text-white overflow-hidden bg-neutral-900 pt-20">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          alt="Quality Inspection and Sorting Facility"
          className="absolute inset-0 w-full h-full object-cover object-[center_42%]"
          src={dryChilliSortingFacility}
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-6">
          <nav className="flex justify-center items-center gap-2 font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#cca72f] uppercase mb-2">
            <Link className="hover:text-white transition-colors" to="/">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Quality Assurance</span>
          </nav>
          <h1 className="font-['Montserrat'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            Quality Assurance
          </h1>
          <p className="font-['Inter'] font-normal text-white/85 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Maintaining Excellence Through Every Stage of Export
          </p>
        </div>
      </section>

      {/* 2. Quality Commitment Section */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column (Image with secondary accent background glow) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-[#2c6a46]/10 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500 -z-10"></div>
            <img
              alt="Expert Quality Grading Red Chillies"
              className="relative rounded-xl shadow-xl w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-[1.01]"
              src={qaInspector}
            />
          </motion.div>

          {/* Right Column (Commitment Texts and Bullet list) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left space-y-6"
          >
            <div>
              <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">
                Our Commitment
              </span>
              <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
                Premium Standards for Global Markets
              </h2>
            </div>

            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6]">
              At Minha Imports & Exports, quality is not just a department—it is our core identity. We specialize in the high-stakes export of Guntur Dry Red Chillies, where precision in grading and hygiene determines global competitiveness.
            </p>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6]">
              Every consignment undergoes rigorous multi-tier testing. From field-level crop monitoring to final airtight packaging, our protocols ensure that our clients receive produce that meets the strictest international food safety and aesthetic standards.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-[#2c6a46] text-xl shrink-0 mt-0.5" />
                <span className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-normal">
                  Zero-tolerance policy on cross-contamination and impurities.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-[#2c6a46] text-xl shrink-0 mt-0.5" />
                <span className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-normal">
                  Advanced moisture-level monitoring for extended shelf life.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-[#2c6a46] text-xl shrink-0 mt-0.5" />
                <span className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-normal">
                  Ethical sourcing directly from certified Guntur farming clusters.
                </span>
              </li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* 3. 4-Stage Quality Process */}
      <section className="bg-surface-container-low py-8 md:py-12 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">
              Our Process
            </span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Our 4-Stage Quality Process
            </h2>
            <div className="w-24 h-[3px] bg-[#8f000d] mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="relative mt-8">
            {/* Horizontal connecting line with midpoint dots (Desktop only) */}
            <div className="absolute top-[80px] left-[12.5%] right-[12.5%] h-[2px] border-t border-dashed border-neutral-300 hidden md:block -z-10">
              {/* Mid-segment dots */}
              <div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#2c6a46]"></div>
              <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#2c6a46]"></div>
              <div className="absolute left-[75%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#2c6a46]"></div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 lg:gap-8"
            >
              {processStages.map((stage, idx) => (
                <motion.div
                  key={stage.num}
                  variants={fadeUpVariants}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Outer circle frame with compass dots */}
                  <div className={`relative w-40 h-40 rounded-full border p-1.5 bg-white shadow-premium-soft flex items-center justify-center ${stage.colorClass}`}>

                    {/* Compass-style boundary dots */}
                    <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${stage.dotBgClass}`}></div>
                    <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${stage.dotBgClass}`}></div>
                    <div className={`absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${stage.dotBgClass}`}></div>
                    <div className={`absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${stage.dotBgClass}`}></div>

                    {/* Circular Image Container */}
                    <div className="w-[144px] h-[144px] rounded-full overflow-hidden relative">
                      <img
                        alt={stage.title}
                        className="w-full h-full object-cover"
                        src={stage.image}
                      />
                    </div>
                  </div>

                  {/* Stage status badge */}
                  <div className={`w-6 h-6 rounded-full text-white flex items-center justify-center font-['Montserrat'] font-bold text-[11px] mt-6 shadow-md ${stage.badgeBgClass}`}>
                    {stage.num}
                  </div>

                  {/* Heading & text */}
                  <h3 className="font-['Montserrat'] font-bold text-[16px] text-neutral-900 mt-4 mb-2 uppercase tracking-wide">
                    {stage.title}
                  </h3>
                  <p className="font-['Inter'] font-normal text-[#5a403e] text-[13px] md:text-[14px] leading-relaxed max-w-xs px-2">
                    {stage.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. Quality Standards Checklist (Benchmarks) */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-left"
          >
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">
              Our Benchmarks
            </span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Certified Quality Measures
            </h2>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] mt-4 max-w-2xl">
              Rigorous laboratory analysis and inspections are implemented to monitor ASTA moisture, purity, safety index, and phytosanitary metrics.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {/* 1. Quality First Always Left Card (Spans 2 rows) */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-1 md:row-span-2 bg-[#123e25] text-white p-6 rounded-2xl flex flex-col justify-between text-left overflow-hidden relative shadow-premium-soft min-h-[420px] md:min-h-full"
            >
              <div className="space-y-6 relative z-10">
                {/* Shield Icon and Heading Inline */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 shrink-0">
                    <FiShield className="text-white text-lg" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-[18px] leading-tight text-white">
                    Quality First<br />Always
                  </h3>
                </div>
                
                <p className="font-['Inter'] font-normal text-white/80 text-[13.5px] leading-relaxed">
                  Every step is controlled, tested and certified.
                </p>
              </div>

              {/* Background removed chilli bowl image at bottom part of card */}
              <div className="absolute bottom-0 left-0 right-0 h-[48%] pointer-events-none select-none z-0">
                <img
                  src={glowingChilliPremiumRemoveBg}
                  alt="Quality Red Chillies Bowl"
                  className="w-full h-full object-contain object-bottom"
                />
              </div>
            </motion.div>

            {/* 2. Moisture Control Card */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-1 bg-white border border-neutral-100/80 shadow-premium-soft rounded-2xl p-6 flex flex-col justify-between text-left hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2c6a46]/10 text-[#2c6a46] flex items-center justify-center shrink-0">
                    <FiThermometer className="text-lg" />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-[15px] text-neutral-900 leading-tight">
                    Moisture Control
                  </h4>
                </div>
                <p className="font-['Inter'] font-normal text-[#5a403e] text-[13px] leading-relaxed mt-4">
                  10-12% maintained to prevent mold.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-['Montserrat'] font-bold w-max mt-4 text-[#2c6a46] bg-[#2c6a46]/10">
                <span>✓</span> Controlled
              </div>
            </motion.div>

            {/* 3. Cleanliness Card */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-1 bg-white border border-neutral-100/80 shadow-premium-soft rounded-2xl p-6 flex flex-col justify-between text-left hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8f000d]/10 text-[#8f000d] flex items-center justify-center shrink-0">
                    <FiDroplet className="text-lg" />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-[15px] text-neutral-900 leading-tight">
                    Cleanliness
                  </h4>
                </div>
                <p className="font-['Inter'] font-normal text-[#5a403e] text-[13px] leading-relaxed mt-4">
                  Product free from foreign matter.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-['Montserrat'] font-bold w-max mt-4 text-[#2c6a46] bg-[#2c6a46]/10">
                <span>✓</span> Verified
              </div>
            </motion.div>

            {/* 4. Product Grading Card */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-1 bg-white border border-neutral-100/80 shadow-premium-soft rounded-2xl p-6 flex flex-col justify-between text-left hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2c6a46]/10 text-[#2c6a46] flex items-center justify-center shrink-0">
                    <FiAward className="text-lg" />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-[15px] text-neutral-900 leading-tight">
                    Product Grading
                  </h4>
                </div>
                <p className="font-['Inter'] font-normal text-[#5a403e] text-[13px] leading-relaxed mt-4">
                  SHU & ASTA standards for markets.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-['Montserrat'] font-bold w-max mt-4 text-[#2c6a46] bg-[#2c6a46]/10">
                <span>✓</span> Certified
              </div>
            </motion.div>

            {/* 5. Packaging Safety Card */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-1 bg-white border border-neutral-100/80 shadow-premium-soft rounded-2xl p-6 flex flex-col justify-between text-left hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8f000d]/10 text-[#8f000d] flex items-center justify-center shrink-0">
                    <FiPackage className="text-lg" />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-[15px] text-neutral-900 leading-tight">
                    Packaging Safety
                  </h4>
                </div>
                <p className="font-['Inter'] font-normal text-[#5a403e] text-[13px] leading-relaxed mt-4">
                  Food-grade packaging for long freshness.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-['Montserrat'] font-bold w-max mt-4 text-[#8f000d] bg-[#8f000d]/10">
                <span>✓</span> Validated
              </div>
            </motion.div>

            {/* 6. Export Compliance Card */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-1 bg-white border border-neutral-100/80 shadow-premium-soft rounded-2xl p-6 flex flex-col justify-between text-left hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2c6a46]/10 text-[#2c6a46] flex items-center justify-center shrink-0">
                    <FiShield className="text-lg" />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-[15px] text-neutral-900 leading-tight">
                    Export Compliance
                  </h4>
                </div>
                <p className="font-['Inter'] font-normal text-[#5a403e] text-[13px] leading-relaxed mt-4">
                  Phytosanitary & MRL compliant.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-['Montserrat'] font-bold w-max mt-4 text-[#2c6a46] bg-[#2c6a46]/10">
                <span>✓</span> Compliant
              </div>
            </motion.div>

            {/* 7. Global Trust Card */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-1 relative overflow-hidden bg-gradient-to-br from-neutral-900 to-[#122e1d] text-white p-6 rounded-2xl flex flex-col justify-between text-left shadow-premium-soft min-h-[200px]"
            >
              {/* Vessel overlay ship graphic */}
              <img
                src={chilliExportCta}
                alt="Cargo logistics overlay"
                className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-15 pointer-events-none"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 shrink-0">
                    <FiStar className="text-white text-lg fill-current" />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-[15px] text-white leading-tight">
                    Global Trust
                  </h4>
                </div>
                <p className="font-['Inter'] font-normal text-white/80 text-[13px] leading-relaxed mt-4">
                  Delivering premium quality to international spice hubs.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-['Montserrat'] font-bold w-max mt-4 text-emerald-400 bg-emerald-500/10 relative z-10">
                <span>✓</span> Trusted
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* 5. Trust Highlight Section */}
      <section className="py-8 md:py-12 bg-surface-container-low relative overflow-hidden text-center">
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Heading */}
            <div className="space-y-3">
              <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase block">
                Global Sourcing Partner
              </span>
              <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[42px] leading-[1.2] tracking-tight text-[#1a1c1e]">
                Quality You Can Trust
              </h2>
              <div className="w-16 h-[2.5px] bg-[#8f000d] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[17px] leading-relaxed max-w-3xl mx-auto">
              Our legacy is built on the consistency of our supply. By integrating technology with traditional farming wisdom, we provide a transparent bridge between Indian agriculture and global commerce. When you choose Minha, you choose a partner committed to your brand's integrity.
            </p>

            {/* Stats Divider Line */}
            <div className="border-t border-neutral-200/60 my-5"></div>

            {/* 3-Column Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200/80">
              
              {/* Stat 1 */}
              <div className="space-y-2 py-4 md:py-0 md:px-4 text-center">
                <div className="font-['Montserrat'] font-black text-[40px] md:text-[48px] leading-none text-[#8f000d]">
                  100%
                </div>
                <div className="font-['Montserrat'] font-bold text-[10.5px] tracking-[0.15em] text-neutral-800 uppercase">
                  Certified Quality
                </div>
                <p className="text-[12.5px] text-[#5a403e]/80 font-['Inter'] max-w-[220px] mx-auto leading-relaxed mt-1">
                  Every batch passes strict ASTA & chemical residue limits.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="space-y-2 py-4 md:py-0 md:px-4 text-center">
                <div className="font-['Montserrat'] font-black text-[40px] md:text-[48px] leading-none text-[#8f000d]">
                  50+
                </div>
                <div className="font-['Montserrat'] font-bold text-[10.5px] tracking-[0.15em] text-neutral-800 uppercase">
                  Global Destinations
                </div>
                <p className="text-[12.5px] text-[#5a403e]/80 font-['Inter'] max-w-[220px] mx-auto leading-relaxed mt-1">
                  Delivering dry red chilli imports to global port hubs.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="space-y-2 py-4 md:py-0 md:px-4 text-center">
                <div className="font-['Montserrat'] font-black text-[40px] md:text-[48px] leading-none text-[#2c6a46] flex items-center justify-center gap-2">
                  24/7
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-emerald-600 animate-pulse shrink-0"></span>
                </div>
                <div className="font-['Montserrat'] font-bold text-[10.5px] tracking-[0.15em] text-neutral-800 uppercase">
                  Supply Chain Visibility
                </div>
                <p className="text-[12.5px] text-[#5a403e]/80 font-['Inter'] max-w-[220px] mx-auto leading-relaxed mt-1">
                  Real-time batch trace reports from farm blocks to delivery.
                </p>
              </div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* 6. Inquiry CTA Section */}
      <section className="py-6 px-6 md:px-12 max-w-[850px] mx-auto z-10 relative">
        <div className="relative rounded-[2rem] overflow-hidden text-center text-white py-12 md:py-16 shadow-2xl border border-white/10 bg-gradient-to-br from-[#2c6a46] via-[#123e25] to-[#111315] group">

          {/* Subtle grid and glowing accents */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#2c6a46]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#2c6a46]/30 transition-all duration-700" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Cargo logistics overlay ship image */}
          <img
            src={chilliExportCta}
            alt="Cargo logistics overlay"
            className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-10 pointer-events-none mix-blend-overlay"
          />

          <div className="relative z-10 max-w-xl mx-auto space-y-5 px-4">

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cca72f] animate-pulse" />
              <span className="font-['Montserrat'] font-bold text-[8.5px] tracking-[0.2em] text-[#cca72f] uppercase">
                Premium Sourcing & Logistics
              </span>
            </div>

            {/* Title */}
            <h2 className="font-['Montserrat'] font-extrabold text-[24px] md:text-[32px] leading-tight text-white tracking-tight">
              Looking for Premium <br className="hidden sm:inline" /> Quality Chilli Exports?
            </h2>

            {/* Description */}
            <p className="font-['Inter'] font-normal text-white/80 text-[13px] md:text-[14px] max-w-lg mx-auto leading-relaxed">
              Partner with Minha Imports & Exports for reliable, grade-A dry red chillies. Get a customized quote based on your specific requirements today.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2 max-w-xs sm:max-w-md mx-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white text-[#2c6a46] px-8 py-3.5 rounded-full font-['Montserrat'] font-extrabold text-[12px] uppercase tracking-wider hover:bg-neutral-100 hover:text-black shadow-lg shadow-black/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center whitespace-nowrap"
              >
                Send Inquiry
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto border-2 border-white/80 text-white px-8 py-[12px] rounded-full font-['Montserrat'] font-extrabold text-[12px] uppercase tracking-wider hover:bg-white hover:text-black hover:border-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust Guarantee */}
            <div className="text-[8px] font-['Montserrat'] tracking-widest text-white/40 uppercase pt-1">
              Export Desk Response Guarantee: Within 12 Hours
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default QualityAssurance;
