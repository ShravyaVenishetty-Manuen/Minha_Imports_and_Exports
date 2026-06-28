import React, { useEffect, useState, useRef } from 'react';
import SEO from '../components/common/SEO';
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
  FiChevronRight
} from 'react-icons/fi';
import cooDavidChen from '../assets/coo_david_chen.png';
import aboutHeroBg from '../assets/about_hero_bg.png';
import dryChilliSortingFacility from '../assets/dry_chilli_sorting_facility.png';
import immersiveSpiceBg from '../assets/immersive_spice_bg.png';
import worldMapSvg from '../assets/world-map.svg';
import founder1 from '../assets/founder1.png';
import founder2 from '../assets/founder2.png';
import CountUp from '../components/common/CountUp';
import useStageProgress from '../hooks/useStageProgress';

const OdometerYear = ({ year, color }) => {
  const digits = year.split('');
  return (
    <div className="flex font-['urbanist'] font-black text-[72px] sm:text-[88px] lg:text-[108px] leading-none select-none tracking-tighter">
      {digits.map((digit, idx) => {
        const val = parseInt(digit) || 0;
        return (
          <div
            key={idx}
            className="overflow-hidden relative"
            style={{
              width: '0.7em',
              height: '1.28em',
              marginRight: idx < digits.length - 1 ? '-0.1em' : '0'
            }}
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: `-${val * 1.28}em` }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 14,
                delay: idx * 0.05
              }}
              className="absolute left-0 top-0 w-full"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <span
                  key={n}
                  className="block text-center bg-gradient-to-br bg-clip-text text-transparent"
                  style={{
                    height: '1.28em',
                    lineHeight: '1.28em',
                    backgroundImage: `linear-gradient(135deg, ${color}, #cca72f)`,
                  }}
                >
                  {n}
                </span>
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

const AboutCompany = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeTimelineYear, setActiveTimelineYear] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  // Interactive "Why Partner With Us" pipeline (auto-advances, click to control)
  const partner = useStageProgress(3, { autoPlay: true, interval: 2800 });

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
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
      year: '2013',
      title: 'Export Origins',
      subtitle: 'Started with export focus',
      desc: 'Minha began as an export-first business, helping Guntur growers reach overseas markets with premium dry red chillies and building its initial export partner base.',
      tag: 'Export Launch',
      accent: '#8f000d',
    },
    {
      year: '2016',
      title: 'Company Establishment',
      subtitle: 'Streamlining Guntur chilli trade',
      desc: 'Founded with a vision to streamline the dry red chilli export market from Guntur and resolve supply chain fragmentation. We set up our initial sourcing channels and defined our standard operating procedures.',
      tag: 'Launch Milestone',
      accent: '#2c6a46',
    },
    {
      year: '2019',
      title: 'Export Expansion',
      subtitle: 'State-of-the-art facilities',
      desc: 'Established full-scale state-of-the-art processing and grading units. Successfully fulfilled major international contracts in SE Asia and scaled operations under strict export guidelines.',
      tag: 'Infrastructure Growth',
      accent: '#cca72f',
    },
    {
      year: '2022',
      title: 'Global Reach',
      subtitle: 'Expanding to 15+ countries',
      desc: 'Extended distribution and trade routes, exporting premium products to over 15 countries across Europe, the Middle East, and the Americas, while securing compliance certifications for every port.',
      tag: 'Global Scale',
      accent: '#8f000d',
    },
    {
      year: '2026',
      title: 'Domestic Market Entry',
      subtitle: 'Now serving India too',
      desc: 'After years of export success, Minha expanded into the domestic market in 2026, delivering quality Guntur chillies across India while continuing to serve global customers.',
      tag: 'Domestic Expansion',
      accent: '#1f5e3b',
    }
  ];

  const handlePrevYear = () => {
    setSlideDirection(-1);
    setActiveTimelineYear((prev) => (prev === 0 ? timelineData.length - 1 : prev - 1));
  };

  const handleNextYear = () => {
    setSlideDirection(1);
    setActiveTimelineYear((prev) => (prev === timelineData.length - 1 ? 0 : prev + 1));
  };

  const changeTimelineYear = (newIdx) => {
    setSlideDirection(newIdx > activeTimelineYear ? 1 : -1);
    setActiveTimelineYear(newIdx);
  };

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden">
      <SEO
        title="About Us | Minha Imports & Exports"
        description="Learn about Minha Imports & Exports — Guntur's leading dry red chilli and spice exporter and domestic supplier. FSSAI, APEDA & ISO certified. Direct farm-to-port supply chain since 2013."
        keywords="Minha Imports Exports, About Minha, Guntur Chilli Exporter, Indian Spice Company, Chilli Exporter India, APEDA certified exporter"
        url="/about"
        schemas={[{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/' },
            { '@type': 'ListItem', position: 2, name: 'Our Company', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/about' },
          ],
        }]}
      />

      {/* 1. Hero Section */}
      <section className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center text-white overflow-hidden bg-neutral-900 pt-20">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          ref={imgRef}
          alt="Premium Chilli Sourcing Fields"
          className={`absolute inset-0 w-full h-full object-cover object-[center_35%] transition-opacity duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          src={aboutHeroBg}
          onLoad={() => setImageLoaded(true)}
          fetchPriority="high"
          loading="eager"
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-6">
          <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1.5 font-['urbanist'] font-bold text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#cca72f] uppercase mb-2 px-4">
            <Link className="hover:text-white transition-colors whitespace-nowrap" to="/">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white whitespace-normal text-center">Our Company</span>
          </nav>
          <h1 className="font-['urbanist'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            About Minha <br className="hidden md:block" />Imports & Exports
          </h1>
          <p className="font-['Nunito'] font-semibold text-white/85 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Delivering Quality, Trust, and Excellence in Global Chilli Exports. We bridge the gap between local agricultural excellence and international demand.
          </p>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-[#2c6a46]/10 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img
              alt="Dry red chilli processing and sorting facility"
              className="relative rounded-xl shadow-xl w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-[1.01]"
              src={dryChilliSortingFacility}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left space-y-6"
          >
            <div>
              <h2 className="font-['urbanist'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">A Legacy of Precision & Pure Spices</h2>
            </div>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.6] text-justify">
              Minha Imports & Exports stands at the forefront of the Guntur dry red chilli trade, bridging the gap between local farming legacies and global food supply networks. Our operations are deeply integrated within Guntur, Asia's largest spice marketplace, allowing us to build direct collaborations with trusted local growers since 2013 and secure early-harvest access to premium crops.
            </p>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.6] text-justify">
              We maintain a rigorous quality assurance protocol where our experienced team meticulously handpicks red chillies, discarding discolored, broken, or low-pungency pods. By ensuring tight control over raw materials, keeping moisture content strictly below 11% to prevent mold formation during long ocean transits, and sorting for uniform dimensions, we deliver a consistent product quality tailored to international market standards.
            </p>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[16px] leading-[1.6] text-justify">
              By maintaining certifications with FSSAI, APEDA, and ISO, we ensure complete transparency in export standards. Guided by our prime motto of absolute customer service, we guarantee timely B2B logistics and custom documentation support for every global shipment.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20am%20interested%20in%20a%20B2B%20partnership%20for%20chilli%20export.%20Please%20share%20your%20company%20profile%20and%20export%20terms."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8f000d] text-white px-8 py-3.5 rounded-lg font-['urbanist'] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#8f000d]/90 hover:shadow-primary/20 transition-all active:scale-95"
              >
                Contact Us
              </a>
              <Link
                to="/quality"
                className="border-2 border-[#2c6a46] text-[#2c6a46] px-8 py-3 rounded-lg font-['urbanist'] font-bold text-xs uppercase tracking-wider hover:bg-[#2c6a46]/5 transition-all active:scale-95"
              >
                Export Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Mission, Policy & Commitment - Immersive Switcher Card */}
      <section className="py-10 md:py-14 bg-surface-container-low overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <div className="text-center mb-10">
            <span className="font-['urbanist'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Our Foundation</span>
            <h2 className="font-['urbanist'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">Mission, Policy & Commitment</h2>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] mt-4 max-w-2xl mx-auto">
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
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,.38) 0%, rgba(0,0,0,.32) 40%, rgba(0,0,0,.35) 100%)"
                }}
              />
            </div>

            {/* Inner Content Grid */}
            <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch">

              {/* Left Column Navigation Panel (1/3 Width) */}
              <div className="w-full lg:w-5/12 border-b lg:border-b-0 lg:border-r border-white/10 p-6 md:p-10 flex flex-col justify-center gap-3">
                <span className="font-['urbanist'] font-bold text-[10px] tracking-[0.2em] text-[#cca72f] uppercase block mb-4 text-left">
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
                        className={`flex items-center gap-4 px-6 py-4 rounded-xl font-['urbanist'] font-bold text-xs uppercase tracking-wider transition-all duration-300 w-full text-left focus:outline-none ${isActive
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
                    {/* <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-white/10 text-[#cca72f] border border-white/5 shadow-sm`}>
                        {pillars[activeSection].icon}
                      </div>
                      <div>
                        <span className="font-['urbanist'] font-semibold text-[10px] tracking-[0.15em] text-[#cca72f] uppercase block">
                          Minha imports & exports
                        </span>
                      </div>
                    </div> */}

                    <h3 className="font-['urbanist'] font-extrabold text-[28px] md:text-[34px] lg:text-[40px] leading-tight text-white border-l-4 border-[#cca72f] pl-6">
                      {pillars[activeSection].label}
                    </h3>

                    <p className="font-body-lg text-white/85 text-[15px] md:text-[17px] leading-[1.7] text-justify font-semibold">
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
      <section className="py-12 md:py-14 bg-surface border-y border-neutral-200 relative overflow-hidden">

        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">

          {/* Header */}
          <div className="max-w-3xl mb-10">

            <span className="font-['urbanist'] font-bold uppercase tracking-[0.22em] text-[11px] text-[#8f000d]">
              The Minha Way
            </span>

            <h2 className="mt-2 font-['urbanist'] font-bold text-[32px] md:text-[38px] text-[#1a1c1e] leading-tight">
              Core Values That Drive Us
            </h2>

            <div className="w-16 h-[2px] bg-[#C8A96A] mt-4 mb-4" />

            <p className="font-['Nunito'] text-[15px] md:text-[16px] leading-7 text-[#5a403e] max-w-2xl">
              Our operational principles define every relationship we build—from farmers
              and suppliers to customers across global markets.
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">

            {values.map((val) => (

              <div
                key={val.id}
                className="group border-neutral-200 rounded-xl p-7 md:p-8 transition-all duration-300 hover:bg-[#FFFDF9] hover:border-neutral-300 hover:shadow-[0_16px_35px_-24px_rgba(0,0,0,0.12)]"
              >

                {/* Accent Bar */}
                <div
                  className="w-10 h-[3px] rounded-full mb-5"
                  style={{
                    backgroundColor: val.accentColor,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{
                    color: val.accentColor,
                    backgroundColor: `${val.accentColor}10`,
                  }}
                >
                  {val.icon}
                </div>

                {/* Title */}
                <h4
                  className="font-['urbanist'] font-bold text-[20px] mb-3 leading-tight transition-colors duration-300"
                  style={{
                    color: '#1a1c1e',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = val.accentColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#1a1c1e';
                  }}
                >
                  {val.title}
                </h4>

                {/* Description */}
                <p className="font-['Nunito'] text-[14px] leading-6 text-[#5f5b58] mb-6">
                  {val.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">

                  <span
                    className="font-['urbanist'] font-semibold text-[12px] uppercase tracking-[0.16em]"
                    style={{
                      color: val.accentColor,
                    }}
                  >
                    Principle
                  </span>

                  <span className="font-['urbanist'] text-neutral-300 font-bold text-base">
                    {val.num}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* 5. Journey Timeline - Interactive Horizontal Slider */}
      <section className="py-10 md:py-14 bg-surface-container-high relative overflow-hidden border-y border-neutral-100">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">

          <style>{`
            @keyframes progressStreak {
              0% { left: -40%; }
              100% { left: 100%; }
            }
            @keyframes haloPulse {
              0% { transform: scale(1); opacity: 0.6; }
              100% { transform: scale(1.8); opacity: 0; }
            }
          `}</style>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="font-['urbanist'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Our Evolution</span>
            <h2 className="font-['urbanist'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">Our Journey & Milestones</h2>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] mt-4 max-w-2xl mx-auto">
              Tracing the progress of Minha Imports & Exports from our founding roots to our current global presence.
            </p>
          </motion.div>

          {/* Progress Wavy Track for Desktop / Tablet (screens >= md) */}
          <div className="hidden md:block relative w-full max-w-3xl mx-auto h-[140px] mb-8 mt-12 select-none">
            <svg viewBox="0 0 800 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="wavy-timeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="10%" stopColor="#8f000d" />
                  <stop offset="30%" stopColor="#2c6a46" />
                  <stop offset="50%" stopColor="#cca72f" />
                  <stop offset="70%" stopColor="#8f000d" />
                  <stop offset="90%" stopColor="#1f5e3b" />
                </linearGradient>
              </defs>
              {/* Background Path line */}
              <path
                d="M 50,90 L 100,90 C 170,90 210,90 250,90 C 320,90 360,30 400,30 C 440,30 480,90 550,90 C 620,90 660,90 700,90 L 750,90"
                stroke="#e5e7eb"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Dynamic Gradient Path */}
              <path
                d="M 50,90 L 100,90 C 170,90 210,90 250,90 C 320,90 360,30 400,30 C 440,30 480,90 550,90 C 620,90 660,90 700,90 L 750,90"
                stroke="url(#wavy-timeline-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Interactive Nodes */}
              {timelineData.map((item, idx) => {
                const isActive = idx === activeTimelineYear;
                const cx = [100, 250, 400, 550, 700][idx];
                const cy = idx === 2 ? 30 : 90;
                return (
                  <g key={item.year} className="cursor-pointer group" onClick={() => changeTimelineYear(idx)}>
                    <circle cx={cx} cy={cy} r="16" fill={item.accent} opacity={isActive ? 0.25 : 0} className="transition-all duration-300" />
                    <circle cx={cx} cy={cy} r="10" fill={item.accent} className="transition-transform duration-300 group-hover:scale-110 origin-center" style={{ transformOrigin: `${cx}px ${cy}px` }} />
                    <circle cx={cx} cy={cy} r="5" fill="#fff" />
                  </g>
                );
              })}
            </svg>
            {/* Year Labels Overlay absolute */}
            {timelineData.map((item, idx) => {
              const isActive = idx === activeTimelineYear;
              const leftPercent = ['12.5%', '27.5%', '47.5%', '67.5%', '87.5%'][idx];
              const topVal = idx === 2 ? '50%' : '45%';
              return (
                <button
                  key={item.year}
                  onClick={() => changeTimelineYear(idx)}
                  className="absolute font-['urbanist'] font-extrabold text-[13px] md:text-sm tracking-wider transition-all duration-300 select-none -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
                  style={{
                    left: leftPercent,
                    top: topVal,
                    color: isActive ? item.accent : '#9ca3af'
                  }}
                >
                  {item.year}
                </button>
              );
            })}
          </div>

          {/* Progress Bar Line for Mobile (screens < md) */}
          <div className="md:hidden w-full max-w-[280px] mx-auto h-[3px] bg-neutral-200 relative mb-10 mt-16 flex justify-between items-center px-1">
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
                  onClick={() => changeTimelineYear(idx)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none cursor-pointer"
                >
                  <span
                    className="absolute -top-7 font-['urbanist'] font-extrabold text-[12px] tracking-wider transition-all duration-300"
                    style={{ color: isActive ? item.accent : '#9ca3af' }}
                  >
                    {item.year}
                  </span>
                  <div
                    className="w-5 h-5 rounded-full border-4 bg-white transition-all duration-300 flex items-center justify-center"
                    style={{ borderColor: isActive || idx < activeTimelineYear ? item.accent : '#e5e7eb' }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                      style={{ backgroundColor: isActive || idx < activeTimelineYear ? item.accent : 'transparent' }}
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

            <div
              className="bg-white rounded-[2.5rem] shadow-premium-soft border border-neutral-100/80 p-8 md:p-12 min-h-[350px] relative overflow-hidden flex items-stretch z-10"
            >

              <AnimatePresence mode="wait" custom={slideDirection}>
                <motion.div
                  key={activeTimelineYear}
                  custom={slideDirection}
                  variants={{
                    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 50 : -50 }),
                    center: { opacity: 1, x: 0 },
                    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -50 : 50 })
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-8 relative z-10"
                >
                  {/* Left Column (Huge Year Display) */}
                  <div className="w-full md:w-5/12 flex flex-col justify-center items-start text-left space-y-4">
                    <span
                      className="px-4 py-1.5 rounded-full font-['urbanist'] font-bold text-[10px] uppercase tracking-wider text-white"
                      style={{ backgroundColor: timelineData[activeTimelineYear].accent }}
                    >
                      {timelineData[activeTimelineYear].tag}
                    </span>

                    {/* Giant Gradient Year Text with Odometer Animation */}
                    <OdometerYear
                      year={timelineData[activeTimelineYear].year}
                      color={timelineData[activeTimelineYear].accent}
                    />
                  </div>

                  {/* Right Column (Milestone Details) */}
                  <div className="w-full md:w-7/12 flex flex-col justify-center text-left space-y-4">
                    <span className="font-['urbanist'] font-semibold text-[11px] tracking-[0.15em] text-[#cca72f] uppercase block">
                      {timelineData[activeTimelineYear].subtitle}
                    </span>
                    <h3 className="font-['urbanist'] font-extrabold text-[24px] md:text-[32px] text-[#1a1c1e] leading-tight">
                      {timelineData[activeTimelineYear].title}
                    </h3>
                    <p className="font-['Nunito'] font-semibold text-neutral-600 text-[15px] leading-relaxed">
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
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <div className="text-center mb-10">
            <span className="font-['urbanist'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Leadership & Management</span>
            <h2 className="font-['urbanist'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">Leadership & Visionary Management</h2>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] mt-4 max-w-2xl mx-auto">
              Guided by decades of experience in international trade, corporate relations, and agricultural excellence.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {/* Founder 1 Card */}
            <div className="bg-white rounded-[1.75rem] overflow-hidden border border-neutral-100 shadow-premium-soft hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-500 flex flex-col text-left group">
              <div className="aspect-[3/4] max-h-[300px] overflow-hidden relative bg-[#f0efec]">
                <img
                  alt="Mr. Shaik Jani Basha"
                  className="w-full h-full object-cover object-[50%_8%] group-hover:scale-[1.02] transition-transform duration-700"
                  src={founder1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="font-['urbanist'] font-bold text-[9px] tracking-[0.18em] text-[#8f000d] uppercase block">Founder & Managing Director</span>
                  <h3 className="font-['urbanist'] font-extrabold text-[20px] text-[#1a1c1e] leading-tight">Mr. Shaik Jani Basha</h3>
                </div>

                <div className="border-l-4 border-[#cca72f] pl-4 italic text-neutral-600 text-[12px] leading-relaxed font-['Nunito']">
                  "Our mission is to establish Minha as the synonym of trust, quality, and purity in the global chilli market, connecting Guntur farmers with buyers."
                </div>

                <p className="text-on-surface-variant font-['Nunito'] font-semibold text-[12px] leading-relaxed">
                  With over 20 years of experience in global agricultural exports, Mr. Shaik Jani Basha founded Minha with a vision to bridge the gap between Indian spice heritage and global quality standards. He guides the company's long-term strategy.
                </p>
              </div>
            </div>

            {/* Founder 2 Card */}
            <div className="bg-white rounded-[1.75rem] overflow-hidden border border-neutral-100 shadow-premium-soft hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-500 flex flex-col text-left group">
              <div className="aspect-[3/4] max-h-[300px] overflow-hidden relative bg-[#f0efec]">
                <img
                  alt="Mr. Moosa Maulavi Rafeekh"
                  className="w-full h-full object-cover object-[50%_8%] group-hover:scale-[1.02] transition-transform duration-700"
                  src={founder2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="font-['urbanist'] font-bold text-[9px] tracking-[0.18em] text-[#8f000d] uppercase block">Co-Founder & Chief Executive Officer</span>
                  <h3 className="font-['urbanist'] font-extrabold text-[20px] text-[#1a1c1e] leading-tight">Mr. Moosa Maulavi Rafeekh</h3>
                </div>

                <div className="border-l-4 border-[#cca72f] pl-4 italic text-neutral-600 text-[12px] leading-relaxed font-['Nunito']">
                  "Our goal is simple: to make Indian dry chillies the gold standard of quality and traceability in every international market we serve."
                </div>

                <p className="text-on-surface-variant font-['Nunito'] font-semibold text-[12px] leading-relaxed">
                  With over 15 years of experience in supply chain technology and global trade, Mr. Moosa Maulavi Rafeekh co-founded Minha to modernize agricultural exports. He oversees technology integration, logistics, and operational compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Executive Management Title */}
          <div className="text-center mb-12">
            <h3 className="font-['urbanist'] font-bold text-[20px] text-neutral-800 uppercase tracking-wider">Executive Management Board</h3>
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
                  <span className="font-['urbanist'] font-bold text-[9px] tracking-[0.15em] text-[#8f000d] uppercase block mb-1">Chief Operating Officer</span>
                  <h4 className="font-['urbanist'] font-bold text-[16px] text-[#1a1c1e]">Mr. David Chen</h4>
                  <p className="text-neutral-500 font-['Nunito'] font-semibold text-[12px] leading-relaxed mt-2">
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
                  <span className="font-['urbanist'] font-bold text-[9px] tracking-[0.15em] text-[#2c6a46] uppercase block mb-1">Director of Quality & Compliance</span>
                  <h4 className="font-['urbanist'] font-bold text-[16px] text-[#1a1c1e]">Dr. Rajesh Varma</h4>
                  <p className="text-neutral-500 font-['Nunito'] font-semibold text-[12px] leading-relaxed mt-2">
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
                  <span className="font-['urbanist'] font-bold text-[9px] tracking-[0.15em] text-[#cca72f] uppercase block mb-1">VP of Global Trade Relations</span>
                  <h4 className="font-['urbanist'] font-bold text-[16px] text-[#1a1c1e]">Ms. Elena Rostova</h4>
                  <p className="text-neutral-500 font-['Nunito'] font-semibold text-[12px] leading-relaxed mt-2">
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
                  <span className="font-['urbanist'] font-bold text-[9px] tracking-[0.15em] text-[#8f000d] uppercase block mb-1">Head of Sourcing & Logistics</span>
                  <h4 className="font-['urbanist'] font-bold text-[16px] text-[#1a1c1e]">Mr. Vikram Malhotra</h4>
                  <p className="text-neutral-500 font-['Nunito'] font-semibold text-[12px] leading-relaxed mt-2">
                    Vikram coordinates directly with Guntur farming clusters to secure high-quality yields and handles dry container logistics at ports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Global Presence */}
      <section className="py-10 md:py-14 bg-surface-container-low/40">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">

          {/* Header */}
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="font-['urbanist'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Global Sourcing & Supply</span>
            <h2 className="font-['urbanist'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Our International Trade Network
            </h2>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] mt-4">
              Operating directly from Guntur, India (the heart of the spice trade), Minha exports premium graded red chillies to global ports, ensuring strict compliance with international phytosanitary, pesticide, and ASTA guidelines.
            </p>
          </div>

          {/* Large Dashboard Map Panel */}
          <div className="max-w-[1100px] mx-auto bg-white rounded-[2rem] border border-neutral-100/80 shadow-premium-soft p-6 md:p-10 relative overflow-hidden flex flex-col items-center">

            {/* Soft Ambient Corner Tints */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#cca72f]/3 rounded-full pointer-events-none blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8f000d]/3 rounded-full pointer-events-none blur-3xl" />

            {/* Map Frame */}
            <div
              style={{ aspectRatio: '784.077 / 458.627' }}
              className="relative w-full mb-8"
            >
              <img
                alt="Global export presence map graphic"
                className="absolute inset-0 w-full h-full opacity-[0.85] select-none pointer-events-none block"
                src={worldMapSvg}
              />

              {/* Gold/Red Pulsing Marker over Guntur, India */}
              <div className="absolute top-[55.3%] left-[72.6%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
                {/* Ping ring */}
                <span className="absolute inline-flex h-5 w-5 rounded-full bg-[#8f000d]/60 animate-ping pointer-events-none" />
                {/* Core dot */}
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#8f000d] border-2 border-white shadow-md cursor-default" />
                {/* Tooltip badge */}
                <span className="mt-2.5 bg-neutral-900/90 text-white font-['urbanist'] font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-lg pointer-events-none flex items-center gap-1.5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cca72f] animate-pulse" />
                  Guntur origin
                </span>
              </div>
            </div>

            {/* Integrated Dividers Statistics Bar */}
            <div className="border-t border-neutral-100 w-full pt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 text-center">

              <div className="space-y-1 md:border-r border-neutral-100 last:border-0">
                <span className="block text-4xl font-extrabold text-[#8f000d]"><CountUp end={15} suffix="+" duration={1.6} className="inline-block" /></span>
                <span className="font-['urbanist'] font-bold text-[10px] uppercase tracking-widest text-neutral-500 block">
                  Export Destinations
                </span>
                <span className="font-['Nunito'] text-[11px] text-neutral-400 block max-w-[180px] mx-auto">
                  Active container shipping routes worldwide.
                </span>
              </div>

              <div className="space-y-1 md:border-r border-neutral-100 last:border-0">
                <span className="block text-4xl font-extrabold text-[#2c6a46]"><CountUp end={200} suffix="+" duration={1.6} className="inline-block" /></span>
                <span className="font-['urbanist'] font-bold text-[10px] uppercase tracking-widest text-neutral-500 block">
                  Containers / Year
                </span>
                <span className="font-['Nunito'] text-[11px] text-neutral-400 block max-w-[180px] mx-auto">
                  Consistent high-volume bulk supply logistics.
                </span>
              </div>

              <div className="space-y-1 md:border-r border-neutral-100 last:border-0">
                <span className="block text-4xl font-extrabold text-[#cca72f]"><CountUp end={100} suffix="%" duration={1.6} className="inline-block" /></span>
                <span className="font-['urbanist'] font-bold text-[10px] uppercase tracking-widest text-neutral-500 block">
                  Sourcing Traceability
                </span>
                <span className="font-['Nunito'] text-[11px] text-neutral-400 block max-w-[180px] mx-auto">
                  From Guntur farms to final shipment ports.
                </span>
              </div>

              <div className="space-y-1 last:border-0">
                <span className="block text-4xl font-extrabold text-[#8f000d]">24/7</span>
                <span className="font-['urbanist'] font-bold text-[10px] uppercase tracking-widest text-neutral-500 block">
                  Logistics Support
                </span>
                <span className="font-['Nunito'] text-[11px] text-neutral-400 block max-w-[180px] mx-auto">
                  Real-time custom clearance coordination.
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. Why Partner With Us (Horizontal Value Chain Pipeline) */}
      <section className="py-10 md:py-14 bg-surface border-t border-neutral-100 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          {/* Header */}
          <div className="text-center mb-10">
            <span className="font-['urbanist'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Why Partner With Us</span>
            <h2 className="font-['urbanist'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Our Simple Three-Step Process
            </h2>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] mt-4 max-w-xl mx-auto">
              We make it easy for global businesses to source premium red chillies from India with stable prices, clean quality, and fast shipping.
            </p>
          </div>

          {/* Pipeline Container */}
          <div className="relative w-full">
            {/* Horizontal progress track (desktop) — fills up to the active stage */}
            <div className="absolute top-8 left-[16%] right-[16%] h-[3px] bg-neutral-200 rounded-full -z-0 hidden lg:block">
              <div
                className="h-full rounded-full transition-[width] duration-700 ease-out"
                style={{
                  width: `${(partner.activeStage / 2) * 100}%`,
                  background: 'linear-gradient(90deg, #2c6a46, #8f000d, #cca72f)',
                }}
              />
            </div>

            {/* Three Columns Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">

              {/* Stage 1: Sourcing */}
              <div className="text-center space-y-6 group">
                <button
                  type="button"
                  onClick={() => partner.goToStage(0)}
                  aria-label="Show stage: Direct Sourcing"
                  className="w-16 h-16 mx-auto relative block rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none"
                  style={{ transform: partner.activeStage === 0 ? 'scale(1.12)' : undefined }}
                >
                  {/* Glow ring — replays on every click via keyed remount */}
                  {partner.activeStage === 0 && (
                    <span
                      key={partner.glowKey}
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{ border: '2px solid #2c6a46', animation: 'stageGlow 0.7s ease-out' }}
                    />
                  )}
                  {/* Core circle node */}
                  <span
                    className="w-full h-full rounded-full border-2 flex items-center justify-center relative z-10 transition-colors duration-300"
                    style={{
                      borderColor: partner.activeStage >= 0 ? '#2c6a46' : '#d4d4d4',
                      backgroundColor: partner.activeStage === 0 ? '#2c6a46' : '#ffffff',
                      boxShadow: partner.activeStage === 0 ? '0 8px 24px -6px rgba(44,106,70,0.4)' : '0 1px 2px rgba(0,0,0,0.05)',
                    }}
                  >
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[9px] font-['urbanist'] font-bold py-0.5 px-2 rounded-full whitespace-nowrap transition-colors duration-300"
                      style={{ backgroundColor: partner.activeStage >= 0 ? '#2c6a46' : '#d4d4d4' }}
                    >
                      STAGE 01
                    </span>
                    <FiLayers
                      className="text-[20px] transition-colors duration-300"
                      style={{ color: partner.activeStage === 0 ? '#ffffff' : '#2c6a46' }}
                    />
                  </span>
                </button>

                {/* Content */}
                <div className="space-y-3 px-4">
                  <h3 className="font-['urbanist'] font-extrabold text-[18px] md:text-[20px] text-neutral-900">
                    Direct Sourcing
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#2c6a46]/5 text-[#2c6a46] font-['urbanist'] font-bold text-[10px] tracking-wide uppercase">
                    20+ Farmer Groups
                  </div>
                  <p className="font-['Nunito'] font-semibold text-neutral-500 text-[14px] leading-relaxed pt-1 text-center">
                    We buy chillies directly from farmer groups in Guntur. This gives us better quality control, stable prices, and helps us support local farming communities.
                  </p>
                </div>
              </div>

              {/* Stage 2: Quality */}
              <div className="text-center space-y-6 group">
                <button
                  type="button"
                  onClick={() => partner.goToStage(1)}
                  aria-label="Show stage: Tested Quality"
                  className="w-16 h-16 mx-auto relative block rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none"
                  style={{ transform: partner.activeStage === 1 ? 'scale(1.12)' : undefined }}
                >
                  {/* Glow ring — replays on every click via keyed remount */}
                  {partner.activeStage === 1 && (
                    <span
                      key={partner.glowKey}
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{ border: '2px solid #8f000d', animation: 'stageGlow 0.7s ease-out' }}
                    />
                  )}
                  {/* Core circle node */}
                  <span
                    className="w-full h-full rounded-full border-2 flex items-center justify-center relative z-10 transition-colors duration-300"
                    style={{
                      borderColor: partner.activeStage >= 1 ? '#8f000d' : '#d4d4d4',
                      backgroundColor: partner.activeStage === 1 ? '#8f000d' : '#ffffff',
                      boxShadow: partner.activeStage === 1 ? '0 8px 24px -6px rgba(143,0,13,0.4)' : '0 1px 2px rgba(0,0,0,0.05)',
                    }}
                  >
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[9px] font-['urbanist'] font-bold py-0.5 px-2 rounded-full whitespace-nowrap transition-colors duration-300"
                      style={{ backgroundColor: partner.activeStage >= 1 ? '#8f000d' : '#d4d4d4' }}
                    >
                      STAGE 02
                    </span>
                    <FiCheckCircle
                      className="text-[20px] transition-colors duration-300"
                      style={{ color: partner.activeStage === 1 ? '#ffffff' : (partner.activeStage >= 1 ? '#8f000d' : '#9ca3af') }}
                    />
                  </span>
                </button>

                {/* Content */}
                <div className="space-y-3 px-4">
                  <h3 className="font-['urbanist'] font-extrabold text-[18px] md:text-[20px] text-neutral-900">
                    Tested Quality
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#8f000d]/5 text-[#8f000d] font-['urbanist'] font-bold text-[10px] tracking-wide uppercase">
                    100% Safe Spices
                  </div>
                  <p className="font-['Nunito'] font-semibold text-neutral-500 text-[14px] leading-relaxed pt-1 text-center">
                    Every batch of chillies is tested in laboratories. We check for moisture, pesticide levels, and colors to make sure they match global health standards.
                  </p>
                </div>
              </div>

              {/* Stage 3: Logistics */}
              <div className="text-center space-y-6 group">
                <button
                  type="button"
                  onClick={() => partner.goToStage(2)}
                  aria-label="Show stage: Fast Shipping"
                  className="w-16 h-16 mx-auto relative block rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none"
                  style={{ transform: partner.activeStage === 2 ? 'scale(1.12)' : undefined }}
                >
                  {/* Glow ring — replays on every click via keyed remount */}
                  {partner.activeStage === 2 && (
                    <span
                      key={partner.glowKey}
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{ border: '2px solid #cca72f', animation: 'stageGlow 0.7s ease-out' }}
                    />
                  )}
                  {/* Core circle node */}
                  <span
                    className="w-full h-full rounded-full border-2 flex items-center justify-center relative z-10 transition-colors duration-300"
                    style={{
                      borderColor: partner.activeStage >= 2 ? '#cca72f' : '#d4d4d4',
                      backgroundColor: partner.activeStage === 2 ? '#cca72f' : '#ffffff',
                      boxShadow: partner.activeStage === 2 ? '0 8px 24px -6px rgba(204,167,47,0.45)' : '0 1px 2px rgba(0,0,0,0.05)',
                    }}
                  >
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[9px] font-['urbanist'] font-bold py-0.5 px-2 rounded-full whitespace-nowrap transition-colors duration-300"
                      style={{ backgroundColor: partner.activeStage >= 2 ? '#cca72f' : '#d4d4d4' }}
                    >
                      STAGE 03
                    </span>
                    <FiTruck
                      className="text-[20px] transition-colors duration-300"
                      style={{ color: partner.activeStage === 2 ? '#ffffff' : (partner.activeStage >= 2 ? '#cca72f' : '#9ca3af') }}
                    />
                  </span>
                </button>

                {/* Content */}
                <div className="space-y-3 px-4">
                  <h3 className="font-['urbanist'] font-extrabold text-[18px] md:text-[20px] text-neutral-900">
                    Fast Shipping
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#cca72f]/5 text-[#cca72f] font-['urbanist'] font-bold text-[10px] tracking-wide uppercase">
                    15+ Countries Served
                  </div>
                  <p className="font-['Nunito'] font-semibold text-neutral-500 text-[14px] leading-relaxed pt-1 text-center">
                    We book fast cargo ships and take care of all export paperwork. Your orders arrive at your port on time with no customs delays.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="py-12 md:py-16 px-6 md:px-12 max-w-[1280px] mx-auto z-10 relative w-full">
        <div className="relative rounded-[2rem] overflow-hidden py-10 md:py-14 px-6 md:px-12 shadow-[0_35px_80px_rgba(0,0,0,0.18)] border border-white/[0.04] bg-gradient-to-br from-[#8f000d] via-[#5e0008] to-[#200002] group">

          {/* Subtle grid and glowing accents */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#cca72f]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#cca72f]/15 transition-all duration-700" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Brand Quote (lg:col-span-5) */}
            <div className="relative space-y-4 text-center lg:text-left lg:border-r lg:border-white/10 lg:pr-8 xl:pr-12 lg:col-span-5 w-full z-10">
              <span className="absolute -top-10 -left-2 text-white/10 text-8xl font-serif select-none pointer-events-none hidden lg:inline-block">
                “
              </span>
              <blockquote className="font-['urbanist'] font-medium italic text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-white/95 relative z-10">
                "Our story began in the fertile lands of Guntur with a simple belief—that the finest harvest deserves a place on the global stage. Today, every shipment we send carries the dedication of our farmers, the trust of our partners, and our promise of uncompromising quality."
              </blockquote>
              <div className="font-['urbanist'] font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-[#cca72f] relative z-10">
                — The Minha Board of Directors
              </div>
              <span className="absolute -bottom-14 right-4 text-white/10 text-8xl font-serif select-none pointer-events-none hidden lg:inline-block">
                ”
              </span>
            </div>

            {/* Right Column: CTA Content (lg:col-span-7) */}
            <div className="space-y-5 text-center lg:text-left lg:col-span-7 w-full">

              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto lg:mx-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#cca72f] animate-pulse" />
                <span className="font-['urbanist'] font-bold text-[8.5px] tracking-[0.2em] text-[#cca72f] uppercase">
                  Direct Export Cargo Sourcing
                </span>
              </div>

              {/* Title */}
              <h2 className="font-['urbanist'] font-extrabold text-[22px] md:text-[30px] leading-tight text-white tracking-tight">
                Ready to Secure Your <span className="bg-gradient-to-r from-white via-white to-[#cca72f] bg-clip-text text-transparent">Chilli Supply?</span>
              </h2>

              {/* Description */}
              <p className="font-['Nunito'] font-semibold text-white/80 text-[13.5px] leading-relaxed">
                Connect directly with our Guntur export desk. We offer custom packaging, strict pesticide compliance, and stable year-round shipping slots.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <a
                  href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20would%20like%20to%20request%20a%20bulk%20export%20quote.%20Please%20share%20your%20pricing%2C%20custom%20packaging%20options%2C%20and%20pesticide%20compliance%20documentation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#cca72f] text-[#140002] px-8 py-3.5 rounded-full font-['urbanist'] font-extrabold text-[12px] uppercase tracking-wider hover:bg-[#e0bc55] shadow-lg shadow-[#cca72f]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center whitespace-nowrap"
                >
                  Request Quote
                </a>
              </div>

              {/* Trust Guarantee */}
              <div className="text-[8.5px] font-['urbanist'] tracking-widest text-white/40 uppercase pt-1">
                Export Desk Response Guarantee: Within 12 Hours
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutCompany;
