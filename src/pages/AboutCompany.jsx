import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiTarget,
  FiGlobe,
  FiEye,
  FiShield,
  FiCheckCircle,
  FiHeart,
  FiActivity,
  FiLayers,
  FiTruck,
  FiChevronLeft,
  FiChevronRight,
  FiAnchor,
  FiMapPin,
  FiClock
} from 'react-icons/fi';
import cooDavidChen from '../assets/coo_david_chen.png';
import aboutHeroBg from '../assets/about_hero_bg.png';
import dryChilliSortingFacility from '../assets/dry_chilli_sorting_facility.png';
import immersiveSpiceBg from '../assets/immersive_spice_bg.png';
import worldMapSvg from '../assets/world-map.svg';

const AboutCompany = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeTimelineYear, setActiveTimelineYear] = useState(0);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const regionalTradeDetails = [
    {
      id: 'asia',
      name: 'Asia & SE Asia',
      countries: ['China', 'Vietnam', 'Thailand', 'Indonesia', 'Malaysia', 'Sri Lanka'],
      ports: ['Shanghai', 'Haiphong', 'Bangkok', 'Jakarta', 'Port Klang', 'Colombo'],
      transitTime: '8 - 14 Days',
      certifications: ['Phytosanitary Cert', 'FSSAI Approved', 'ISO 22000'],
      stats: '80+ Containers / Yr',
      accentColor: '#8f000d',
      markerCoordinates: [
        { top: '48%', left: '72%' },
        { top: '56%', left: '75%' },
        { top: '60%', left: '72%' },
        { top: '68%', left: '76%' },
        { top: '64%', left: '74%' },
        { top: '62%', left: '65%' },
      ]
    },
    {
      id: 'middle-east',
      name: 'Middle East',
      countries: ['UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait', 'Jordan'],
      ports: ['Jebel Ali (Dubai)', 'Jeddah', 'Sohar', 'Hamad (Doha)', 'Shuwaikh', 'Aqaba'],
      transitTime: '5 - 10 Days',
      certifications: ['Halal Certified', 'SABER Compliance', 'Phytosanitary Cert'],
      stats: '60+ Containers / Yr',
      accentColor: '#2c6a46',
      markerCoordinates: [
        { top: '50%', left: '56%' },
        { top: '52%', left: '50%' },
        { top: '53%', left: '57%' },
        { top: '49%', left: '55%' },
        { top: '47%', left: '53%' },
        { top: '45%', left: '48%' },
      ]
    },
    {
      id: 'europe',
      name: 'Europe',
      countries: ['United Kingdom', 'Germany', 'Netherlands', 'Poland', 'Spain', 'Italy'],
      ports: ['Felixstowe', 'Hamburg', 'Rotterdam', 'Gdansk', 'Valencia', 'Genoa'],
      transitTime: '22 - 28 Days',
      certifications: ['BRC Food Standard', 'Eurofins Lab Reports', 'Aflatoxin-Free Cert'],
      stats: '40+ Containers / Yr',
      accentColor: '#cca72f',
      markerCoordinates: [
        { top: '28%', left: '38%' },
        { top: '30%', left: '43%' },
        { top: '29%', left: '41%' },
        { top: '29%', left: '46%' },
        { top: '38%', left: '37%' },
        { top: '36%', left: '42%' },
      ]
    },
    {
      id: 'americas',
      name: 'Americas',
      countries: ['United States', 'Canada', 'Mexico', 'Brazil'],
      ports: ['New York', 'Los Angeles', 'Vancouver', 'Manzanillo', 'Santos'],
      transitTime: '30 - 38 Days',
      certifications: ['FDA Registered', 'USDA Organic Compliance', 'ASTA Grade Analysis'],
      stats: '30+ Containers / Yr',
      accentColor: '#8f000d',
      markerCoordinates: [
        { top: '35%', left: '16%' },
        { top: '38%', left: '8%' },
        { top: '28%', left: '12%' },
        { top: '46%', left: '13%' },
        { top: '65%', left: '28%' },
      ]
    }
  ];

  const values = [
    {
      id: 'integrity',
      num: '01',
      title: 'Integrity',
      icon: <FiShield className="text-2xl" />,
      desc: 'Honest dealings and transparent communication are the foundation of our business relations. We align our operations with absolute transparency, honesty, and reliable ethics.',
      accentColor: '#8f000d',
    },
    {
      id: 'quality',
      num: '02',
      title: 'Quality',
      icon: <FiCheckCircle className="text-2xl" />,
      desc: 'We never settle for second best. Every chilli exported is a testament to our strict Guntur grade standards, ensuring premium color, heat, moisture, and ASTA compliance.',
      accentColor: '#2c6a46',
    },
    {
      id: 'commitment',
      num: '03',
      title: 'Customer Commitment',
      icon: <FiHeart className="text-2xl" />,
      desc: 'Your satisfaction is our priority, from the first export inquiry to the final delivery at your destination port, building relationships that last generations.',
      accentColor: '#cca72f',
    },
    {
      id: 'transparency',
      num: '04',
      title: 'Transparency',
      icon: <FiEye className="text-2xl" />,
      desc: 'Full seed-to-shipment traceability, giving you absolute confidence in the origin, grading, and chemical safety levels of our spice products.',
      accentColor: '#8f000d',
    },
    {
      id: 'sustainability',
      num: '05',
      title: 'Sustainability',
      icon: <FiActivity className="text-2xl" />,
      desc: 'Promoting sustainable farming practices that preserve rich Guntur soil, optimize water usage, and support our local agricultural partners.',
      accentColor: '#2c6a46',
    },
    {
      id: 'standards',
      num: '06',
      title: 'Global Standards',
      icon: <FiGlobe className="text-2xl" />,
      desc: 'Adhering to international safety, phytosanitary, and quality benchmarks (including ASTA, FDA, ISO, and BRC) across all our export destinations.',
      accentColor: '#cca72f',
    }
  ];

  const pillars = [
    {
      id: 'mission',
      label: 'Our Mission',
      icon: <FiTarget className="text-xl" />,
      tagline: 'Customer Sourcing Focus',
      content: "We believe that a satisfied customer is the best business strategy. Hence, the mission of Minha Imports and Exports Pvt Ltd is to always deliver high quality products according to the buyers’ specifications. We do this by sourcing, processing and delivering spices in an economically efficient and quality consistent way. We are constantly working to create great value for our customers within a dynamic and enjoyable ambiance."
    },
    {
      id: 'policy',
      label: 'Protect & Produce Policy',
      icon: <FiActivity className="text-xl" />,
      tagline: 'Quality Standards Frame',
      content: "We share our knowledge and experience to optimize our and our customers’ performance. We follow PROTECT & PRODUCE POLICY to have best outputs and same to serve in the GLOBAL market. Our promise is to always deliver products made from the best resources, the latest technology and the best practices."
    },
    {
      id: 'security',
      label: 'Supply Security',
      icon: <FiShield className="text-xl" />,
      tagline: 'Food Safety Framework',
      content: "We secure an uninterrupted supply of authentic, natural and food safe spices. Our staff consists of an experienced team of professionals who work with care, passion and professionalism."
    },
    {
      id: 'commitment',
      label: 'Commitment',
      icon: <FiHeart className="text-xl" />,
      tagline: 'Socio-Environmental Pledge',
      content: "We are accountable to the customers we serve, to the employees we work with, and to the environment in which we exist. MINHA honours its commitments to all of the above, and works symbiotically with them, pledging to give back more than what it takes."
    }
  ];

  const timelineData = [
    {
      year: '2018',
      title: 'Company Establishment',
      subtitle: 'Streamlining Guntur chilli trade',
      desc: 'Founded with a vision to streamline the dry red chilli export market from Guntur and resolve supply chain fragmentation. We set up our initial sourcing channels and defined our standard operating procedures.',
      tag: 'Launch Milestone',
      accent: '#8f000d',
    },
    {
      year: '2019',
      title: 'Sourcing Growth',
      subtitle: 'Empowering local farmers',
      desc: 'Partnered with over 500 local farmers in the Guntur region, securing a reliable, direct supply chain of top-grade raw crops and establishing fair-trade pricing that supports the local community.',
      tag: 'Sourcing Milestone',
      accent: '#2c6a46',
    },
    {
      year: '2021',
      title: 'Export Expansion',
      subtitle: 'State-of-the-art facilities',
      desc: 'Established full-scale state-of-the-art processing and grading units. Successfully fulfilled major international contracts in SE Asia and scaled operations under strict export guidelines.',
      tag: 'Infrastructure Growth',
      accent: '#cca72f',
    },
    {
      year: '2023',
      title: 'Global Reach',
      subtitle: 'Expanding to 15+ countries',
      desc: 'Extended distribution and trade routes, exporting premium products to over 15 countries across Europe, the Middle East, and the Americas, while securing compliance certifications for every port.',
      tag: 'Global Scale',
      accent: '#8f000d',
    }
  ];

  const handlePrevYear = () => {
    setActiveTimelineYear((prev) => (prev === 0 ? timelineData.length - 1 : prev - 1));
  };

  const handleNextYear = () => {
    setActiveTimelineYear((prev) => (prev === timelineData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 text-center text-white overflow-hidden bg-black/65">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          alt="Ripening dry red chillies field in Guntur"
          className="absolute inset-0 w-full h-full object-cover"
          src={aboutHeroBg}
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-6">
          <nav className="flex justify-center items-center gap-2 font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#cca72f] uppercase mb-2">
            <Link className="hover:text-white transition-colors" to="/">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Our Company</span>
          </nav>
          <h1 className="font-['Montserrat'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            About Minha <br className="hidden md:block" />Imports & Exports
          </h1>
          <p className="font-['Inter'] font-normal text-white/85 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Delivering Quality, Trust, and Excellence in Global Chilli Exports. We bridge the gap between local agricultural excellence and international demand.
          </p>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="py-10 md:py-16 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#2c6a46]/10 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img
              alt="Dry red chilli processing and sorting facility"
              className="relative rounded-xl shadow-xl w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-[1.01]"
              src={dryChilliSortingFacility}
            />
          </div>
          <div className="text-left space-y-6">
            <div>
              <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">A Legacy of Precision & Pure Spices</h2>
            </div>
            <p className="text-on-surface-variant font-body-lg text-body-lg leading-relaxed text-justify">
              Minha Imports & Exports stands at the forefront of the Guntur dry red chilli trade. Our expertise is rooted in decades of agricultural knowledge, combined with a modern approach to global logistics.
            </p>
            <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed text-justify">
              We specialize in sourcing, grading, and exporting the finest varieties including Teja, S4, and Byadgi. Every batch undergoes rigorous quality checks to meet international standards (ASTA), ensuring that our global partners receive nothing but excellence.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-[#8f000d] text-white px-8 py-3.5 rounded-lg font-['Montserrat'] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#8f000d]/90 hover:shadow-primary/20 transition-all active:scale-95"
              >
                Contact Us
              </Link>
              <Link
                to="/quality"
                className="border-2 border-[#2c6a46] text-[#2c6a46] px-8 py-3 rounded-lg font-['Montserrat'] font-bold text-xs uppercase tracking-wider hover:bg-[#2c6a46]/5 transition-all active:scale-95"
              >
                Export Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Policy & Commitment - Immersive Switcher Card */}
      <section className="py-10 md:py-16 bg-surface-container-low overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <div className="text-center mb-10">
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Our Foundation</span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">Mission, Policy & Commitment</h2>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] mt-4 max-w-2xl mx-auto">
              Discover our core frameworks, standards, and values that guide every export transaction and operational process.
            </p>
          </div>

          {/* Immersive Img Card Container */}
          <div className="relative w-full min-h-[520px] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-neutral-800 bg-neutral-950">
            {/* Background Image of Card */}
            <div className="absolute inset-0 z-0">
              <img
                alt="Moody dried red chillies and rich warm spices"
                className="w-full h-full object-cover opacity-35"
                src={immersiveSpiceBg}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60 lg:to-black/35"></div>
            </div>

            {/* Inner Content Grid */}
            <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch">

              {/* Left Column Navigation Panel (1/3 Width) */}
              <div className="w-full lg:w-5/12 border-b lg:border-b-0 lg:border-r border-white/10 p-6 md:p-10 flex flex-col justify-center gap-3">
                <span className="font-['Montserrat'] font-bold text-[10px] tracking-[0.2em] text-[#cca72f] uppercase block mb-4 text-left">
                  Explore Foundations
                </span>

                <div className="flex flex-col gap-3">
                  {pillars.map((pillar, idx) => {
                    const isActive = activeSection === idx;
                    return (
                      <button
                        key={pillar.id}
                        onClick={() => setActiveSection(idx)}
                        onMouseEnter={() => setActiveSection(idx)}
                        className={`flex items-center gap-4 px-6 py-4 rounded-xl font-['Montserrat'] font-bold text-xs uppercase tracking-wider transition-all duration-300 w-full text-left focus:outline-none ${isActive
                          ? 'bg-white/15 text-white border border-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.05)]'
                          : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                          }`}
                      >
                        <div className={`p-2.5 rounded-lg transition-all duration-300 ${isActive ? 'bg-[#cca72f] text-black scale-110' : 'bg-white/5 text-white/50'}`}>
                          {pillar.icon}
                        </div>
                        <div className="flex-grow">
                          <div className="text-white font-bold text-[12px]">{pillar.label}</div>
                          <div className={`text-[9px] font-medium tracking-normal normal-case transition-colors duration-300 ${isActive ? 'text-[#cca72f]' : 'text-white/35'}`}>
                            {pillar.tagline}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column Content Panel (2/3 Width) */}
              <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-left relative min-h-[350px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-white/10 text-[#cca72f] border border-white/5 shadow-sm`}>
                        {pillars[activeSection].icon}
                      </div>
                      <div>
                        <span className="font-['Montserrat'] font-semibold text-[10px] tracking-[0.15em] text-[#cca72f] uppercase block">
                          Minha imports & exports
                        </span>
                      </div>
                    </div>

                    <h3 className="font-['Montserrat'] font-extrabold text-[28px] md:text-[34px] lg:text-[40px] leading-tight text-white border-l-4 border-[#cca72f] pl-6">
                      {pillars[activeSection].label}
                    </h3>

                    <p className="font-body-lg text-white/85 text-[15px] md:text-[17px] leading-[1.7] text-justify font-normal">
                      {pillars[activeSection].content}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. Our Values - Staggered Wave Grid */}
      <section className="py-10 md:py-16 bg-surface relative overflow-hidden border-y border-neutral-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-50/50 via-surface to-surface pointer-events-none z-0"></div>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center relative z-10">

          <div className="text-center mb-10">
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">The Minha Way</span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">Core Values That Drive Us</h2>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] mt-4 max-w-2xl mx-auto">
              Our operational principles, defining how we interact with customers, partners, and the global environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pb-6 md:pb-8">
            {values.map((val, index) => {
              // Stagger cards in the middle column (index 1 and index 4) on md and lg screens
              const isStaggered = index === 1 || index === 4;
              return (
                <div
                  key={val.id}
                  className={`group relative bg-white rounded-[2rem] border border-neutral-100 p-8 md:p-10 shadow-sm hover:shadow-premium-soft hover:-translate-y-3 transition-all duration-500 ease-out text-left flex flex-col justify-between overflow-hidden ${isStaggered ? 'md:translate-y-8' : ''
                    }`}
                  style={{
                    borderTop: `4px solid ${val.accentColor}`,
                  }}
                >
                  {/* Subtle Background Hover Glow */}
                  <div
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top left, ${val.accentColor}0a, transparent 70%)`
                    }}
                  />

                  {/* Card Header (Icon) */}
                  <div className="relative z-10 flex justify-between items-center w-full mb-6">
                    <div
                      className="p-3.5 rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        color: val.accentColor,
                        backgroundColor: `${val.accentColor}12`, // 7% opacity
                      }}
                    >
                      {val.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 space-y-3">
                    <h4 className="font-['Montserrat'] font-extrabold text-[20px] text-neutral-900 tracking-tight">
                      {val.title}
                    </h4>
                    <p className="font-['Inter'] font-normal text-neutral-600 text-[14px] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  {/* Backdrop Huge Number */}
                  <div
                    className="absolute bottom-6 right-6 font-['Montserrat'] font-black text-[96px] leading-none select-none pointer-events-none opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-105 transition-all duration-500"
                    style={{
                      color: val.accentColor,
                    }}
                  >
                    {val.num}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Journey Timeline - Interactive Horizontal Slider */}
      <section className="py-10 md:py-16 bg-surface-container-high relative overflow-hidden border-y border-neutral-100">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">

          <div className="text-center mb-10">
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Our Evolution</span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">Our Journey & Milestones</h2>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] mt-4 max-w-2xl mx-auto">
              Tracing the progress of Minha Imports & Exports from our founding roots to our current global presence.
            </p>
          </div>

          {/* Progress Bar Line */}
          <div className="w-full max-w-3xl mx-auto h-[3px] bg-neutral-200 relative mb-10 mt-16 flex justify-between items-center px-2">
            {/* Active Filled Line */}
            <div
              className="absolute h-[3px] left-0 top-0 transition-all duration-500 ease-out"
              style={{
                width: `${(activeTimelineYear / (timelineData.length - 1)) * 100}%`,
                backgroundColor: timelineData[activeTimelineYear].accent,
              }}
            />
            {timelineData.map((item, idx) => {
              const isActive = idx === activeTimelineYear;
              return (
                <button
                  key={item.year}
                  onClick={() => setActiveTimelineYear(idx)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none cursor-pointer"
                >
                  {/* Year Label */}
                  <span
                    className={`absolute -top-8 font-['Montserrat'] font-extrabold text-[13px] md:text-sm tracking-wider transition-all duration-300 ${isActive ? 'scale-115' : 'text-neutral-400 opacity-60 group-hover:opacity-100'
                      }`}
                    style={{
                      color: isActive ? item.accent : undefined
                    }}
                  >
                    {item.year}
                  </span>

                  {/* Circular Node */}
                  <div
                    className={`w-6 h-6 rounded-full border-4 bg-white transition-all duration-300 flex items-center justify-center relative ${isActive ? 'scale-125 shadow-md' : 'hover:scale-110'
                      }`}
                    style={{
                      borderColor: isActive
                        ? item.accent
                        : idx < activeTimelineYear
                          ? item.accent
                          : '#e5e7eb',
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: isActive
                          ? item.accent
                          : idx < activeTimelineYear
                            ? item.accent
                            : 'transparent',
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Milestone Showcase Card */}
          <div className="w-full max-w-4xl mx-auto relative px-0 md:px-20">

            {/* Left and Right Chevron Navigation Buttons */}
            <button
              onClick={handlePrevYear}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-neutral-100 shadow-md hover:bg-neutral-50 hover:scale-105 active:scale-95 transition-all text-neutral-600 focus:outline-none cursor-pointer hidden md:block"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={handleNextYear}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-neutral-100 shadow-md hover:bg-neutral-50 hover:scale-105 active:scale-95 transition-all text-neutral-600 focus:outline-none cursor-pointer hidden md:block"
            >
              <FiChevronRight className="text-xl" />
            </button>

            {/* Showcase Slider Container */}
            <div className="bg-white rounded-[2.5rem] shadow-premium-soft border border-neutral-100/80 p-8 md:p-12 min-h-[350px] relative overflow-hidden flex items-stretch">

              {/* Subtle background glow */}
              <div
                className="absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none opacity-[0.03]"
                style={{
                  background: `radial-gradient(circle at top left, ${timelineData[activeTimelineYear].accent}, transparent 70%)`
                }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTimelineYear}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-8 relative z-10"
                >
                  {/* Left Column (Huge Year Display) */}
                  <div className="w-full md:w-5/12 flex flex-col justify-center items-start text-left space-y-4">
                    <span
                      className="px-4 py-1.5 rounded-full font-['Montserrat'] font-bold text-[10px] uppercase tracking-wider text-white"
                      style={{ backgroundColor: timelineData[activeTimelineYear].accent }}
                    >
                      {timelineData[activeTimelineYear].tag}
                    </span>

                    {/* Giant Gradient Year Text */}
                    <div
                      className="font-['Montserrat'] font-black text-[72px] sm:text-[88px] lg:text-[108px] leading-tight py-2 px-6 -ml-6 tracking-tighter select-none bg-gradient-to-br bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${timelineData[activeTimelineYear].accent}, #cca72f)`,
                      }}
                    >
                      {timelineData[activeTimelineYear].year}
                    </div>
                  </div>

                  {/* Right Column (Milestone Details) */}
                  <div className="w-full md:w-7/12 flex flex-col justify-center text-left space-y-4">
                    <span className="font-['Montserrat'] font-semibold text-[11px] tracking-[0.15em] text-[#cca72f] uppercase block">
                      {timelineData[activeTimelineYear].subtitle}
                    </span>
                    <h3 className="font-['Montserrat'] font-extrabold text-[24px] md:text-[32px] text-neutral-900 leading-tight">
                      {timelineData[activeTimelineYear].title}
                    </h3>
                    <p className="font-['Inter'] font-normal text-neutral-600 text-[15px] leading-relaxed">
                      {timelineData[activeTimelineYear].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Touch Arrows */}
            <div className="flex md:hidden justify-center items-center gap-6 mt-6">
              <button
                onClick={handlePrevYear}
                className="p-3 rounded-full bg-white border border-neutral-100 shadow-md hover:bg-neutral-50 active:scale-95 transition-all text-neutral-600 focus:outline-none"
              >
                <FiChevronLeft className="text-lg" />
              </button>
              <button
                onClick={handleNextYear}
                className="p-3 rounded-full bg-white border border-neutral-100 shadow-md hover:bg-neutral-50 active:scale-95 transition-all text-neutral-600 focus:outline-none"
              >
                <FiChevronRight className="text-lg" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Leadership & Management */}
      <section className="py-10 md:py-16 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <div className="text-center mb-10">
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Leadership & Management</span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">Leadership & Visionary Management</h2>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] mt-4 max-w-2xl mx-auto">
              Guided by decades of experience in international trade, corporate relations, and agricultural excellence.
            </p>
          </div>

          {/* Founder Feature Row */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-white rounded-[2rem] overflow-hidden border border-neutral-100 shadow-premium-soft hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row text-left group">
              <div className="w-full md:w-5/12 h-80 md:h-auto min-h-[360px] relative overflow-hidden">
                <img
                  alt="Ms. Sarah Mitchell"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAggM-W-9VZG7h_b-P4ToLPEawIZ9z3Iz-avbo9YHIETf1TcPy1Pl3SnyvplhEvS040CsQBaoOPKYV3I0n3CpEmXP1ku9m0cB-JHLOPWE1zJdX_N0rlR6SuKXD5i3zjGWQvgrAYR4-h7TWW2bMfSj9tCc4s5JeTN-bMuN5dEOhInKhyTNEXzDjsvEbYg2Tjipp1z-J1bslzmgFE8pciyyFYPl2wYslvN9TBh24TRXvAImYv4xFIz67jNrgpaoeygM-7r6I8v6pD54M"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center space-y-5">
                <div>
                  <span className="font-['Montserrat'] font-bold text-[10px] tracking-[0.2em] text-[#8f000d] uppercase block mb-2">Founder & Managing Director</span>
                  <h3 className="font-['Montserrat'] font-extrabold text-[28px] text-[#1a1c1e] leading-tight">Ms. Sarah Mitchell</h3>
                </div>

                {/* Visual quote indicator */}
                <div className="border-l-4 border-[#cca72f] pl-4 italic text-neutral-600 text-[14px] leading-relaxed font-['Inter']">
                  "Our mission is to establish Minha as the synonym of trust, quality, and purity in the global chilli and spice market, directly connecting the hard work of Guntur farmers with global buyers."
                </div>

                <p className="text-on-surface-variant font-['Inter'] font-normal text-[14px] leading-relaxed">
                  With over 20 years of experience in global agricultural exports, Sarah founded Minha Imports & Exports with a vision to bridge the gap between Indian spice heritage and global quality standards. She guides the company's long-term strategy and global relations.
                </p>
              </div>
            </div>
          </div>

          {/* Executive Management Title */}
          <div className="text-center mb-12">
            <h3 className="font-['Montserrat'] font-bold text-[20px] text-neutral-800 uppercase tracking-wider">Executive Management Board</h3>
            <div className="w-16 h-1 bg-[#cca72f] mx-auto mt-3 rounded-full" />
          </div>

          {/* 4 People Management Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* COO Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-premium-soft hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 flex flex-col group text-left">
              <div className="h-64 overflow-hidden relative">
                <img
                  alt="Mr. David Chen"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  src={cooDavidChen}
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <span className="font-['Montserrat'] font-bold text-[9px] tracking-[0.15em] text-[#8f000d] uppercase block mb-1">Chief Operating Officer</span>
                  <h4 className="font-['Montserrat'] font-bold text-[16px] text-[#1a1c1e]">Mr. David Chen</h4>
                  <p className="text-neutral-500 font-['Inter'] font-normal text-[12px] leading-relaxed mt-2">
                    David oversees our global supply chain and logistics, ensuring that every shipment meets the stringent quality requirements of our international partners.
                  </p>
                </div>
              </div>
            </div>

            {/* QA Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-premium-soft hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 flex flex-col group text-left">
              <div className="h-64 overflow-hidden relative">
                <img
                  alt="Dr. Rajesh Varma"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <span className="font-['Montserrat'] font-bold text-[9px] tracking-[0.15em] text-[#2c6a46] uppercase block mb-1">Director of Quality & Compliance</span>
                  <h4 className="font-['Montserrat'] font-bold text-[16px] text-[#1a1c1e]">Dr. Rajesh Varma</h4>
                  <p className="text-neutral-500 font-['Inter'] font-normal text-[12px] leading-relaxed mt-2">
                    Dr. Varma leads our laboratory testing, pesticide analysis, organic certifications, and strict ASTA/FDA regulatory compliance audits.
                  </p>
                </div>
              </div>
            </div>

            {/* Trade Relations Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-premium-soft hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 flex flex-col group text-left">
              <div className="h-64 overflow-hidden relative">
                <img
                  alt="Ms. Elena Rostova"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <span className="font-['Montserrat'] font-bold text-[9px] tracking-[0.15em] text-[#cca72f] uppercase block mb-1">VP of Global Trade Relations</span>
                  <h4 className="font-['Montserrat'] font-bold text-[16px] text-[#1a1c1e]">Ms. Elena Rostova</h4>
                  <p className="text-neutral-500 font-['Inter'] font-normal text-[12px] leading-relaxed mt-2">
                    Elena manages import/export compliance, international client relations, contract fulfillment, and European & Middle Eastern market expansion.
                  </p>
                </div>
              </div>
            </div>

            {/* Sourcing & Supply Chain Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-premium-soft hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 flex flex-col group text-left">
              <div className="h-64 overflow-hidden relative">
                <img
                  alt="Mr. Vikram Malhotra"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <span className="font-['Montserrat'] font-bold text-[9px] tracking-[0.15em] text-[#8f000d] uppercase block mb-1">Head of Sourcing & Logistics</span>
                  <h4 className="font-['Montserrat'] font-bold text-[16px] text-[#1a1c1e]">Mr. Vikram Malhotra</h4>
                  <p className="text-neutral-500 font-['Inter'] font-normal text-[12px] leading-relaxed mt-2">
                    Vikram coordinates directly with Guntur farming clusters to secure high-quality yields and handles dry container logistics at ports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Global Presence */}
      <section className="py-10 md:py-16 bg-surface-container-low/40">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">

          {/* Header */}
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Global Sourcing & Supply</span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Our International Trade Network
            </h2>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] mt-4">
              Operating directly from Guntur, India (the heart of the spice trade), Minha exports premium graded red chillies to global ports, ensuring strict compliance with international phytosanitary, pesticide, and ASTA guidelines.
            </p>
          </div>

          {/* Large Dashboard Map Panel */}
          <div className="max-w-[1100px] mx-auto bg-white rounded-[2rem] border border-neutral-100/80 shadow-premium-soft p-6 md:p-10 relative overflow-hidden flex flex-col items-center">

            {/* Soft Ambient Corner Tints */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#cca72f]/3 rounded-full pointer-events-none blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8f000d]/3 rounded-full pointer-events-none blur-3xl" />

            {/* Map Frame */}
            <div className="relative w-full aspect-[784/459] overflow-hidden flex items-center justify-center p-2 mb-8">
              <img
                alt="Global export presence map graphic"
                className="w-full h-full object-contain opacity-[0.85] select-none pointer-events-none"
                src={worldMapSvg}
              />

              {/* Gold/Red Pulsing Marker over Guntur, India */}
              <div className="absolute top-[55.3%] left-[72.6%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
                {/* Ping ring */}
                <span className="absolute inline-flex h-5 w-5 rounded-full bg-[#8f000d]/60 animate-ping pointer-events-none" />
                {/* Core dot */}
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#8f000d] border-2 border-white shadow-md cursor-default" />
                {/* Tooltip badge */}
                <span className="mt-2.5 bg-neutral-900/90 text-white font-['Montserrat'] font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-lg pointer-events-none flex items-center gap-1.5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cca72f] animate-pulse" />
                  Guntur Origin Hub
                </span>
              </div>
            </div>

            {/* Integrated Dividers Statistics Bar */}
            <div className="border-t border-neutral-100 w-full pt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 text-center">

              <div className="space-y-1 md:border-r border-neutral-100 last:border-0">
                <span className="block text-4xl font-extrabold text-[#8f000d]">15+</span>
                <span className="font-['Montserrat'] font-bold text-[10px] uppercase tracking-widest text-neutral-500 block">
                  Export Destinations
                </span>
                <span className="font-['Inter'] text-[11px] text-neutral-400 block max-w-[180px] mx-auto">
                  Active container shipping routes worldwide.
                </span>
              </div>

              <div className="space-y-1 md:border-r border-neutral-100 last:border-0">
                <span className="block text-4xl font-extrabold text-[#2c6a46]">200+</span>
                <span className="font-['Montserrat'] font-bold text-[10px] uppercase tracking-widest text-neutral-500 block">
                  Containers / Year
                </span>
                <span className="font-['Inter'] text-[11px] text-neutral-400 block max-w-[180px] mx-auto">
                  Consistent high-volume bulk supply logistics.
                </span>
              </div>

              <div className="space-y-1 md:border-r border-neutral-100 last:border-0">
                <span className="block text-4xl font-extrabold text-[#cca72f]">100%</span>
                <span className="font-['Montserrat'] font-bold text-[10px] uppercase tracking-widest text-neutral-500 block">
                  Sourcing Traceability
                </span>
                <span className="font-['Inter'] text-[11px] text-neutral-400 block max-w-[180px] mx-auto">
                  From Guntur farms to final shipment ports.
                </span>
              </div>

              <div className="space-y-1 last:border-0">
                <span className="block text-4xl font-extrabold text-[#8f000d]">24/7</span>
                <span className="font-['Montserrat'] font-bold text-[10px] uppercase tracking-widest text-neutral-500 block">
                  Logistics Support
                </span>
                <span className="font-['Inter'] text-[11px] text-neutral-400 block max-w-[180px] mx-auto">
                  Real-time custom clearance coordination.
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. Why Partner With Us (Horizontal Value Chain Pipeline) */}
      <section className="py-10 md:py-16 bg-[#fafafa] border-t border-neutral-100 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          {/* Header */}
          <div className="text-center mb-10">
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Why Partner With Us</span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Our Simple Three-Step Process
            </h2>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] mt-4 max-w-xl mx-auto">
              We make it easy for global businesses to source premium red chillies from India with stable prices, clean quality, and fast shipping.
            </p>
          </div>

          {/* Pipeline Container */}
          <div className="relative w-full">

            {/* Horizontal Track Line (Visible on Desktop) */}
            <div className="absolute top-8 left-[16%] right-[16%] h-[2px] bg-neutral-200 -z-0 hidden lg:block" />

            {/* Three Columns Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">

              {/* Stage 1: Sourcing */}
              <div className="text-center space-y-6 group">
                {/* Node Circle */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#2c6a46] shadow-sm flex items-center justify-center mx-auto relative transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <span className="absolute -top-3 bg-[#2c6a46] text-white text-[9px] font-['Montserrat'] font-bold py-0.5 px-2 rounded-full">
                    STAGE 01
                  </span>
                  <FiLayers className="text-[20px] text-[#2c6a46]" />
                </div>

                {/* Content */}
                <div className="space-y-3 px-4">
                  <h3 className="font-['Montserrat'] font-extrabold text-[18px] md:text-[20px] text-neutral-900">
                    Direct Sourcing
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#2c6a46]/5 text-[#2c6a46] font-['Montserrat'] font-bold text-[10px] tracking-wide uppercase">
                    20+ Farmer Groups
                  </div>
                  <p className="font-['Inter'] font-normal text-neutral-500 text-[14px] leading-relaxed pt-1 text-center">
                    We buy chillies directly from farmer groups in Guntur. This gives us better quality control, stable prices, and helps us support local farming communities.
                  </p>
                </div>
              </div>

              {/* Stage 2: Quality */}
              <div className="text-center space-y-6 group">
                {/* Node Circle */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#8f000d] shadow-sm flex items-center justify-center mx-auto relative transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <span className="absolute -top-3 bg-[#8f000d] text-white text-[9px] font-['Montserrat'] font-bold py-0.5 px-2 rounded-full">
                    STAGE 02
                  </span>
                  <FiCheckCircle className="text-[20px] text-[#8f000d]" />
                </div>

                {/* Content */}
                <div className="space-y-3 px-4">
                  <h3 className="font-['Montserrat'] font-extrabold text-[18px] md:text-[20px] text-neutral-900">
                    Tested Quality
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#8f000d]/5 text-[#8f000d] font-['Montserrat'] font-bold text-[10px] tracking-wide uppercase">
                    100% Safe Spices
                  </div>
                  <p className="font-['Inter'] font-normal text-neutral-500 text-[14px] leading-relaxed pt-1 text-center">
                    Every batch of chillies is tested in laboratories. We check for moisture, pesticide levels, and colors to make sure they match global health standards.
                  </p>
                </div>
              </div>

              {/* Stage 3: Logistics */}
              <div className="text-center space-y-6 group">
                {/* Node Circle */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#cca72f] shadow-sm flex items-center justify-center mx-auto relative transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <span className="absolute -top-3 bg-[#cca72f] text-white text-[9px] font-['Montserrat'] font-bold py-0.5 px-2 rounded-full">
                    STAGE 03
                  </span>
                  <FiTruck className="text-[20px] text-[#cca72f]" />
                </div>

                {/* Content */}
                <div className="space-y-3 px-4">
                  <h3 className="font-['Montserrat'] font-extrabold text-[18px] md:text-[20px] text-neutral-900">
                    Fast Shipping
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#cca72f]/5 text-[#cca72f] font-['Montserrat'] font-bold text-[10px] tracking-wide uppercase">
                    15+ Countries Served
                  </div>
                  <p className="font-['Inter'] font-normal text-neutral-500 text-[14px] leading-relaxed pt-1 text-center">
                    We book fast cargo ships and take care of all export paperwork. Your orders arrive at your port on time with no customs delays.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 9. Business CTA */}
      <section className="py-8 md:py-12 max-w-[800px] mx-auto px-6">
        <div className="bg-gradient-to-br from-[#8f000d] via-[#5e0008] to-[#200002] text-white rounded-[1.5rem] p-6 md:p-10 text-center relative overflow-hidden shadow-premium-soft border border-white/10 group">

          {/* Subtle grid and glowing accents */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#cca72f]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#cca72f]/15 transition-all duration-700" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-4">

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto">
              <span className="w-1 h-1 rounded-full bg-[#cca72f] animate-pulse" />
              <span className="font-['Montserrat'] font-bold text-[8px] tracking-[0.2em] text-[#cca72f] uppercase">
                Direct Export Cargo Sourcing
              </span>
            </div>

            {/* Title */}
            <h2 className="font-['Montserrat'] font-extrabold text-[22px] md:text-[30px] leading-tight text-white tracking-tight">
              Ready to Secure Your <span className="bg-gradient-to-r from-white via-white to-[#cca72f] bg-clip-text text-transparent">Chilli Supply?</span>
            </h2>

            {/* Description */}
            <p className="font-['Inter'] font-normal text-white/80 text-[12px] md:text-[13px] max-w-lg mx-auto leading-relaxed">
              Connect directly with our Guntur export desk. We offer custom packaging, strict pesticide compliance, and stable year-round shipping slots.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2 max-w-xs sm:max-w-md mx-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-[#cca72f] text-neutral-900 px-6 py-2.5 rounded-lg font-['Montserrat'] font-bold text-[10px] uppercase tracking-wider hover:bg-[#d8b43c] transition-all duration-300 active:scale-95 shadow-md shadow-[#cca72f]/10 text-center"
              >
                Request Quote
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto border border-white/20 hover:border-white/50 text-white px-6 py-2.5 rounded-lg font-['Montserrat'] font-bold text-[10px] uppercase tracking-wider hover:bg-white/5 transition-all duration-300 active:scale-95 text-center"
              >
                Send Inquiry
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

export default AboutCompany;
