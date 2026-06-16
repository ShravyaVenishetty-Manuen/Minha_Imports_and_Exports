import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheck, FiFilter, FiInfo, FiMail, FiDroplet, FiFileText, FiShield, FiCheckCircle } from 'react-icons/fi';
import { GiChiliPepper } from 'react-icons/gi';
import { chilliVarieties } from '../config/chilliData';
import chilliHeroVarieties from '../assets/chilli-hero-varieties.png';
import chilliIntroDry from '../assets/chilli-intro-dry.png';
import chilliSpotlightDry from '../assets/chilli-spotlight-dry.png';
import chilliBowlTable from '../assets/chilli-bowl-table.png';
import chilliBlossoms from '../assets/chilli-blossoms-left.png';
import singleChilliPod from '../assets/single-chilli-pod-right.png';
import chilliMountainsBg from '../assets/chilli-mountains-bg.png';
import chilliTwigsBg from '../assets/chilli-twigs-bg.png';

const Varieties = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);

  const redBgStyle = {
    backgroundImage: `
      radial-gradient(rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px),
      linear-gradient(135deg, #8f000d 0%, #a50f15 50%, #5a0006 100%)
    `,
    backgroundSize: '24px 24px, 100% 100%',
  };

  // Categories list derived from data
  const categories = ['All', 'Teja S17', 'S4 / 334', 'S10', 'Byadgi'];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset expansion when filter changes
  useEffect(() => {
    setIsExpanded(false);
  }, [activeFilter]);

  // Filtered varieties
  const filteredVarieties = activeFilter === 'All'
    ? (isExpanded ? chilliVarieties : chilliVarieties.slice(0, 4))
    : chilliVarieties.filter(v => v.category === activeFilter);

  // Background header styles
  const heroStyle = {
    backgroundImage: `
      linear-gradient(rgba(17, 19, 21, 0.5), rgba(17, 19, 21, 0.7)),
      url(${chilliHeroVarieties})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center 25%',
  };

  return (
    <div className="bg-[#FAF8F4] min-h-screen font-['Inter'] text-[#1a1c1e] relative overflow-hidden">

      {/* 1. Hero Banner */}
      <section style={heroStyle} className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center text-white overflow-hidden pt-20">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1.5 font-['Montserrat'] font-bold text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#cca72f] uppercase mb-2 px-4">
            <Link to="/" className="hover:text-white transition-colors whitespace-nowrap">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white whitespace-normal text-center">Chilli Varieties</span>
          </nav>
          <h1 className="font-['Montserrat'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            Premium Chilli Varieties
          </h1>
          <p className="font-['Inter'] font-normal text-white/85 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Export-Grade Guntur Dry Red Chillies with Superior Quality and Global Standards
          </p>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-10 md:py-14 px-6 md:px-12 max-w-[1280px] mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Copy content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left"
          >
            <span className="text-[#8f000d] font-['Montserrat'] font-bold text-[12px] tracking-[0.2em] uppercase block">
              Global Sourcing Excellence
            </span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Precision-Graded for <br className="hidden sm:inline" /> Global Markets
            </h2>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6]">
              At Minha Imports & Exports, we understand the nuances of global commodity trading. Our red chillies are sourced directly from the fertile Guntur region, processed in state-of-the-art facilities to meet stringent international food safety standards.
            </p>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6]">
              From moisture control to stem removal and customized grading, every batch undergoes rigorous quality checks. We cater to diverse requirements including whole pods, crushed flakes, and fine powder, ensuring the SHU levels and color values match your exact technical specifications.
            </p>

            <div className="pt-4 flex gap-10">
              <div className="space-y-1">
                <p className="text-[#8f000d] font-['Montserrat'] font-bold text-[24px] md:text-[28px] leading-none">100%</p>
                <p className="font-['Montserrat'] font-bold text-[11px] uppercase tracking-[0.1em] text-[#a0a5ad]">Traceability</p>
              </div>
              <div className="space-y-1 border-l border-[#a0a5ad]/20 pl-10">
                <p className="text-[#8f000d] font-['Montserrat'] font-bold text-[24px] md:text-[28px] leading-none">ISO</p>
                <p className="font-['Montserrat'] font-bold text-[11px] uppercase tracking-[0.1em] text-[#a0a5ad]">Certified Sourcing</p>
              </div>
            </div>
          </motion.div>

          {/* Graded Chillies Showcase Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1F5E3B]/10 rounded-xl -z-10 transition-transform duration-300 group-hover:scale-105" />
            <img
              alt="Systematic Grading of Guntur Chillies"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] relative z-10 border border-white/40"
              src={chilliIntroDry}
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#8f000d]/5 rounded-xl -z-10 transition-transform duration-300 group-hover:scale-105" />
          </motion.div>

        </div>
      </section>

      {/* 3. Chilli Varieties Showcase catalog */}
      <section className="py-10 md:py-14 bg-[#f8f8fc] border-t border-[#1a1c1e]/[0.02] border-b border-[#1a1c1e]/[0.02]">
        <div className="px-6 md:px-12 max-w-[1280px] mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-primary tracking-tight">
              Our Core Varieties
            </h2>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6]">
              We offer tailored grades across major varieties to suit extraction, food service, and spice blend specifications.
            </p>

            {/* Dynamic Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {categories.map((cat, idx) => {
                let icon;
                if (cat === 'All') {
                  icon = (
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="6" height="6" rx="1.5" />
                      <rect x="15" y="3" width="6" height="6" rx="1.5" />
                      <rect x="15" y="15" width="6" height="6" rx="1.5" />
                      <rect x="3" y="15" width="6" height="6" rx="1.5" />
                    </svg>
                  );
                } else if (cat === 'Teja S17' || cat === 'Byadgi') {
                  icon = (
                    <GiChiliPepper className={`w-4.5 h-4.5 mr-2 ${activeFilter === cat ? 'text-white' : 'text-[#8f000d]'}`} />
                  );
                } else if (cat === 'S4 / 334') {
                  icon = (
                    <svg className={`w-4.5 h-4.5 mr-2 ${activeFilter === cat ? 'text-white' : 'text-[#1F5E3B]'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 11 2 2 4-4" />
                    </svg>
                  );
                } else if (cat === 'S10') {
                  icon = (
                    <svg className={`w-4.5 h-4.5 mr-2 ${activeFilter === cat ? 'text-white' : 'text-[#cca72f]'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  );
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-5 py-2.5 rounded-full font-['Montserrat'] font-bold text-[12px] tracking-wider uppercase transition-all duration-300 flex items-center ${activeFilter === cat
                      ? 'bg-[#8f000d] text-white shadow-lg'
                      : 'bg-white text-[#5a403e] border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300'
                      }`}
                  >
                    {icon}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredVarieties.map((chilli) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={chilli.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] border border-neutral-100 flex flex-col justify-between group hover:-translate-y-2.5 hover:shadow-[0_20px_45px_-10px_rgba(143,0,13,0.08)] transition-all duration-500"
                >
                  {/* Image container */}
                  <Link to={`/varieties/${chilli.id}`} className="relative h-48 overflow-hidden bg-neutral-100 block">
                    <img
                      src={chilli.image}
                      alt={chilli.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>

                  {/* Details content */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[11px] font-['Montserrat'] font-bold tracking-widest text-[#cca72f] uppercase block">
                        {chilli.category}
                      </span>
                      <h3 className="font-['Montserrat'] font-bold text-[16px] md:text-[18px] text-[#1a1c1e] group-hover:text-[#8f000d] transition-colors leading-snug">
                        <Link to={`/varieties/${chilli.id}`} className="hover:text-[#8f000d]">
                          {chilli.name}
                        </Link>
                      </h3>
                      <p className="font-['Inter'] font-normal text-[#5a403e] text-[13px] leading-[1.5] h-15 overflow-hidden text-ellipsis line-clamp-3">
                        {chilli.description}
                      </p>
                    </div>

                    {/* Stats List */}
                    <div className="space-y-2 border-t border-neutral-100 pt-4 text-[12px] font-['Montserrat'] font-semibold">
                      <div className="flex justify-between items-center">
                        <span className="text-[#a0a5ad] flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-[#8f000d]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2c-.6 0-1 .4-1 1c0 .9-.6 1.7-1.5 1.9C8.3 5.2 7.2 5.9 6.4 6.8c-1.9 2.2-2.4 5.3-1.3 8C5.6 16.1 6.5 17.2 7.6 18c1.2.8 2.6 1.2 4 1.1c2.2-.1 4.2-1.3 5.4-3.1c1.8-2.8 1.8-6.4 0-9.2c-.6-.9-1.5-1.6-2.5-1.9c-.9-.2-1.5-1-1.5-1.9c0-.6-.4-1-1-1z" />
                          </svg>
                          Heat Level
                        </span>
                        <span className="text-[#8f000d]">{chilli.heatLevel}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#a0a5ad] flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-[#cca72f]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          Color Value
                        </span>
                        <span className="text-[#1F5E3B]">{chilli.colorValue}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#a0a5ad] flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-[#5a403e]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="6" cy="6" r="3" />
                            <circle cx="6" cy="18" r="3" />
                            <line x1="20" y1="4" x2="8.12" y2="15.88" />
                            <line x1="14.47" y1="14.48" x2="20" y2="20" />
                            <line x1="8.12" y1="8.12" x2="12" y2="12" />
                          </svg>
                          {chilli.stemType === 'Stemless' ? 'Stemless' : chilli.stemType === 'Stemcut' ? 'Stemcut' : 'Stem Style'}
                        </span>
                        <span className="text-[#1a1c1e]">{chilli.stemType}</span>
                      </div>
                    </div>

                    {/* Enquiry Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <Link
                        to={`/varieties/${chilli.id}`}
                        className="text-[#8f000d] border border-[#8f000d]/20 py-2.5 rounded-lg font-['Montserrat'] font-bold text-[11px] leading-none uppercase tracking-wider hover:bg-[#8f000d]/5 hover:border-[#8f000d]/40 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <FiInfo className="text-[13px] flex-shrink-0" /> Details
                      </Link>
                      <a
                        href="#inquire"
                        className="bg-[#8f000d] text-white py-2.5 rounded-lg font-['Montserrat'] font-bold text-[11px] leading-none uppercase tracking-wider hover:bg-[#72000a] transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg shadow-[#8f000d]/10 hover:-translate-y-0.5"
                      >
                        <FiMail className="text-[13px] flex-shrink-0" /> Inquire
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All / Show Less Button */}
          {activeFilter === 'All' && chilliVarieties.length > 4 && (
            <div className="flex justify-center pt-12">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-[#8f000d] hover:bg-[#72000a] text-white font-['Montserrat'] font-bold text-[13px] py-4.5 px-10 rounded-full shadow-[0_4px_15px_rgba(143,0,13,0.15)] hover:shadow-[0_8px_25px_rgba(143,0,13,0.25)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group cursor-pointer border-none uppercase tracking-wider"
              >
                {isExpanded ? (
                  <>
                    Show Less <FiArrowRight className="-rotate-90 group-hover:-translate-y-1 transition-transform text-base" />
                  </>
                ) : (
                  <>
                    View All Varieties <FiArrowRight className="group-hover:translate-x-1 transition-transform text-base" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 4. Special Spotlight: Teja S17 */}
      <section className="py-10 md:py-14 px-6 md:px-12 max-w-[1280px] mx-auto z-10 relative">
        <div className="bg-[#111315] text-white rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-white/[0.03]">
          {/* Spotlight text */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center text-left space-y-6">
            <span className="text-[#cca72f] font-['Montserrat'] font-bold text-[11px] tracking-[0.25em] uppercase block">
              PLATINUM EXPORT GRADE
            </span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-white tracking-tight">
              The King of Spice: <br /> Teja S17
            </h2>
            <p className="font-['Inter'] text-[#a0a5ad] text-[14px] sm:text-[15px] leading-relaxed">
              Minha’s premium Teja S17 is the hallmark of heat and flavor. Sourced directly from Guntur’s top farms, this variety is highly sought after by global food processors and spice extractors.
            </p>
            <ul className="space-y-4 pt-2">
              {[
                { title: "Highest SHU Rating", desc: "Intense pungency levels exceeding 75k–110k SHU, ideal for oleoresins.", icon: <FiCheck className="text-[#cca72f] text-lg mt-0.5" /> },
                { title: "Bright Red Luster", desc: "Stunning uniform red skin color that retains its brightness during export shipping.", icon: <FiCheck className="text-[#cca72f] text-lg mt-0.5" /> },
                { title: "Strict Global Compliance", desc: "Meets international pesticide residue levels and strict Aflatoxin compliance.", icon: <FiCheck className="text-[#cca72f] text-lg mt-0.5" /> }
              ].map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#cca72f]/10 flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-bold text-[15px] text-white leading-tight">{feat.title}</h4>
                    <p className="font-['Inter'] text-[#a0a5ad]/80 text-[13px] mt-1">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#inquire"
              className="bg-[#cca72f] text-black font-['Montserrat'] font-bold text-[13px] py-4 px-8 rounded-xl hover:bg-[#cca72f]/90 hover:translate-y-[-2px] transition-all self-start uppercase tracking-wider mt-4 shadow-lg shadow-[#cca72f]/10"
            >
              Get Teja Quote
            </a>
          </div>

          {/* Spotlight image */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={chilliSpotlightDry}
              alt="Teja S17 Graded Hot Chillies"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* 5. Quality Standards & Sourcing Ethics */}
      <section className="py-10 md:py-14 bg-[#FAF8F4] relative overflow-hidden">
        {/* Soft elegant background blur graphics */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B22222]/[0.02] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1F5E3B]/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">

          {/* Section Heading with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          >
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-2">
              Quality Standards
            </span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Uncompromising Sourcing Ethics
            </h2>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] leading-relaxed">
              Our seed-to-shipment workflow ensures that the quality harvested on the farm is exactly what arrives at your destination port.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {[
              {
                idx: "01",
                title: "Precision Sorting",
                desc: "Hand-sorted selection based on grade, color intensity, skin thickness, and cap presence.",
                details: ["Uniform size selection", "Discolored pod elimination", "Foreign matter removal"],
                icon: <FiFilter className="text-white text-xl" />,
                bg: "bg-[#8f000d]"
              },
              {
                idx: "02",
                title: "Moisture Controls",
                desc: "Rigorous moisture checks to secure storage integrity and preserve rich ASTA colors.",
                details: ["Maintained under 12% moisture", "Preventative heat damage drying", "Anti-mold storage environment"],
                icon: <FiDroplet className="text-white text-xl" />,
                bg: "bg-[#1F5E3B]"
              },
              {
                idx: "03",
                title: "Hygienic Cleaning",
                desc: "Multiple screening stages to eliminate physical impurities and dust.",
                details: ["Metal detector scanners", "Forced-air blowing cleaners", "Sanitized handling floors"],
                icon: <FiShield className="text-white text-xl" />,
                bg: "bg-[#cca72f]"
              },
              {
                idx: "04",
                title: "Lab Certification",
                desc: "All trade shipments are strictly tested and issued with analytical COA reports.",
                details: ["Aflatoxin residue tests", "Sudan dye screenings", "COA reports with shipments"],
                icon: <FiFileText className="text-white text-xl" />,
                bg: "bg-[#a73b0f]"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="font-['Montserrat'] font-bold text-[12px] text-[#cca72f] tracking-wider">{item.idx}</span>
                    <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-[18px] text-[#1a1c1e] leading-snug">{item.title}</h3>
                  <p className="font-['Inter'] text-[#5a403e] text-[13.5px] leading-relaxed">{item.desc}</p>
                </div>
                <ul className="space-y-2.5 border-t border-neutral-100/80 pt-5 mt-5 text-[12.5px] font-['Inter'] font-semibold text-[#1a1c1e] text-left">
                  {item.details.map((det, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <FiCheck className="text-[#1F5E3B] text-[14px] flex-shrink-0" />
                      <span>{det}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom Packaging Bottom Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8"
          >
            {/* Text details for packaging */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between gap-6 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1 bg-[#1F5E3B]/10 text-[#1F5E3B] font-['Montserrat'] font-bold text-[10px] uppercase tracking-wider rounded-md">
                  Export Packaging
                </div>
                <h3 className="font-['Montserrat'] font-bold text-[22px] md:text-[24px] text-[#1a1c1e]">
                  Custom Packaging Solutions
                </h3>
                <p className="font-['Inter'] text-[#5a403e] text-[14px] md:text-[15px] leading-relaxed">
                  We supply all bulk orders in premium quality packaging to withstand long-transit sea shipments and maintain freshness, color, and aroma. Custom branding and labeling are available as per buyer request.
                </p>
              </div>

              {/* Packaging types row */}
              <div className="grid grid-cols-3 gap-4 border-t border-neutral-100 pt-6">
                {[
                  { name: "Jute Bags", desc: "Traditional breathable eco-friendly storage" },
                  { name: "PP Bags", desc: "Woven moisture-proof bags for export" },
                  { name: "Carton Boxes", desc: "Rigid corrugated boxes for pod protection" }
                ].map((pkg, idx) => (
                  <div key={idx} className="space-y-1">
                    <h5 className="font-['Montserrat'] font-bold text-[13px] text-[#8f000d]">{pkg.name}</h5>
                    <p className="font-['Inter'] text-[#5a403e]/70 text-[11px] leading-tight">{pkg.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Image */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-lg border border-neutral-100 relative min-h-[200px] group">
              <img
                src={chilliBowlTable}
                alt="Guntur Dry Red Chillies Packaging"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="font-['Montserrat'] font-bold text-white text-[16px] leading-tight">Export Grade Logistics</p>
                <p className="font-['Inter'] text-white/80 text-[11px] mt-0.5">Sealed-fresh destination port delivery</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. Inquiry CTA Section */}
      <section id="inquire" className="relative bg-[#FAF8F4] py-12 md:py-16 overflow-hidden border-t border-neutral-100">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="relative z-10 bg-[#181410] rounded-[2rem] overflow-hidden py-10 md:py-14 px-6 md:px-12 shadow-2xl border border-white/5 transition-all duration-300"
          >
            {/* Decorative glows inside card */}
            <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-[#cca72f]/10 rounded-full blur-[70px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-white/5 rounded-full blur-[50px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Sourcing Quote (lg:col-span-5) */}
              <div className="relative space-y-4 text-center lg:text-left lg:border-r lg:border-white/10 lg:pr-8 xl:pr-12 lg:col-span-5 w-full z-10">
                <span className="absolute -top-10 -left-2 text-white/10 text-8xl font-serif select-none pointer-events-none hidden lg:inline-block">
                  “
                </span>
                <blockquote className="font-['Montserrat'] font-medium italic text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-white/95 relative z-10">
                  "We select Guntur's finest chilli pods directly from farms we trust, grading every batch by hand to guarantee perfect SHU levels, color retention, and moisture compliance."
                </blockquote>
                <div className="font-['Montserrat'] font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-[#cca72f] relative z-10">
                  — The Minha Sourcing Team
                </div>
                <span className="absolute -bottom-14 right-4 text-white/10 text-8xl font-serif select-none pointer-events-none hidden lg:inline-block">
                  ”
                </span>
              </div>

              {/* Right Column: CTA Content (lg:col-span-7) */}
              <div className="space-y-5 text-center lg:text-left lg:col-span-7 w-full">
                {/* Tagline Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#cca72f] font-['Montserrat'] font-bold text-[8.5px] sm:text-[9px] tracking-widest uppercase mx-auto lg:mx-0">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cca72f] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#cca72f]"></span>
                  </span>
                  Bulk Procurement
                </div>

                <h2 className="font-['Montserrat'] font-bold text-[22px] sm:text-[26px] md:text-[30px] leading-[1.25] text-white tracking-tight">
                  Need Bulk Chilli Supply for <br className="hidden sm:inline" /> Export or Processing?
                </h2>

                <p className="font-['Inter'] font-normal text-[13.5px] leading-relaxed text-white/80">
                  Partner with India’s premier chilli export desk. Request specialized quotes, certificate reports, and booking timelines for your trade volume.
                </p>

                {/* Checkmark trade highlights / Glass Chips */}
                <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-1">
                  {[
                    "100% Pure & Tested",
                    "ASTA Compliant Quality",
                    "Custom Packing Formats"
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 bg-white/5 border border-white/5 backdrop-blur-[2px] rounded-full px-3.5 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cca72f] shrink-0" />
                      <span className="font-['Montserrat'] font-bold text-[8.5px] sm:text-[9px] text-white/90 uppercase tracking-wider">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Buttons Group */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 relative z-10 pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#8f000d] to-[#b22222] hover:shadow-[0_6px_20px_-2px_rgba(143,0,13,0.3)] text-white font-['Montserrat'] font-bold text-[11px] sm:text-[11.5px] py-[12px] px-[22px] rounded-full shadow-lg shadow-[#8f000d]/20 hover:translate-y-[-2px] active:scale-98 transition-all duration-300 uppercase tracking-wider text-center group whitespace-nowrap cursor-pointer"
                  >
                    Send Enquiry
                    <FiArrowRight className="text-xs transition-transform group-hover:translate-x-1 duration-300" />
                  </Link>
                  <a
                    href="mailto:minhaimportsexports@gmail.com"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-['Montserrat'] font-bold text-[11px] sm:text-[11.5px] py-[12px] px-[22px] rounded-full shadow-md active:scale-98 transition-all duration-300 uppercase tracking-wider text-center whitespace-nowrap cursor-pointer"
                  >
                    <FiMail className="text-sm shrink-0" />
                    Contact Us
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Varieties;
