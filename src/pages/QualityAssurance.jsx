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
import chilliProcessingFacility from '../assets/chilli-processing-facility.png';
import aboutHeroBg from '../assets/about_hero_bg.png';

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
      icon: <FiMapPin className="text-2xl" />,
      desc: 'Our journey begins at the origin. We conduct on-site inspections at partner farms to monitor crop health and chemical-free growth cycles.'
    },
    {
      num: '02',
      title: 'Acquisition',
      icon: <FiCheckSquare className="text-2xl" />,
      desc: 'Strict procurement protocols ensure only the top 10% of harvested yield enters our supply chain. Initial grading happens on-site.'
    },
    {
      num: '03',
      title: 'Processing',
      icon: <FiSettings className="text-2xl" />,
      desc: 'Cleaning, stem removal, and moisture control are performed in our climate-controlled, hygienic facility before final packing.'
    },
    {
      num: '04',
      title: 'Shipping',
      icon: <FiTruck className="text-2xl" />,
      desc: 'Final export clearance and container loading under supervised inspection. We ensure global logistics compliance for timely delivery.'
    }
  ];

  const benchmarks = [
    {
      title: 'Moisture Control',
      icon: <FiThermometer className="text-3xl" />,
      desc: 'Maintained strictly between 10-12% to prevent mold while preserving natural oils and potency.',
      colorClass: 'text-[#2c6a46]'
    },
    {
      title: 'Cleanliness',
      icon: <FiDroplet className="text-3xl" />,
      desc: 'Advanced sieving and dust removal systems ensure a product free from foreign matter.',
      colorClass: 'text-[#8f000d]'
    },
    {
      title: 'Product Grading',
      icon: <FiAward className="text-3xl" />,
      desc: 'Categorized by heat levels (SHU) and color intensity (ASTA) for specific market requirements.',
      colorClass: 'text-[#2c6a46]'
    },
    {
      title: 'Packaging Safety',
      icon: <FiPackage className="text-3xl" />,
      desc: 'Food-grade jute, PP bags, or custom boxes with protective liners to maintain freshness during transit.',
      colorClass: 'text-[#8f000d]'
    },
    {
      title: 'Export Compliance',
      icon: <FiShield className="text-3xl" />,
      desc: 'Adhering to international phytosanitary standards and pesticide residue limits (MRL).',
      colorClass: 'text-[#2c6a46]'
    },
    {
      title: 'Global Trust',
      icon: <FiStar className="text-3xl" />,
      desc: 'Consistently delivering premium quality that meets the expectations of international spice hubs.',
      colorClass: 'text-[#2c6a46]',
      isStar: true
    }
  ];

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 text-center text-white overflow-hidden bg-black/65">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          alt="Quality Inspection and Sorting Facility"
          className="absolute inset-0 w-full h-full object-cover"
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
      <section className="py-10 md:py-16 bg-surface">
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
              src={chilliProcessingFacility}
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
      <section className="bg-surface-container-low py-10 md:py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">
              Our Process
            </span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Our 4-Stage Quality Process
            </h2>
            <div className="w-24 h-[3px] bg-[#8f000d] mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processStages.map((stage, idx) => (
              <motion.div
                key={stage.num}
                variants={fadeUpVariants}
                className="bg-white p-8 rounded-2xl border border-neutral-100/85 shadow-premium-soft hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background Large Stage Number */}
                <div
                  className="absolute -right-4 -top-4 font-['Montserrat'] font-black text-[96px] leading-none select-none pointer-events-none opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-300"
                  style={{ color: idx % 2 === 0 ? '#2c6a46' : '#8f000d' }}
                >
                  {stage.num}
                </div>

                {/* Animated Icon Circle */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                    idx % 2 === 0
                      ? 'bg-[#2c6a46]/10 text-[#2c6a46] group-hover:bg-[#2c6a46] group-hover:text-white'
                      : 'bg-[#8f000d]/10 text-[#8f000d] group-hover:bg-[#8f000d] group-hover:text-white'
                  }`}
                >
                  {stage.icon}
                </div>

                {/* Content */}
                <h3 className="font-['Montserrat'] font-bold text-[18px] md:text-[20px] text-neutral-900 mb-3 text-left">
                  {stage.title}
                </h3>
                <p className="font-['Inter'] font-normal text-[#5a403e] text-[14px] leading-relaxed text-left">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 4. Quality Standards Checklist (Benchmarks) */}
      <section className="py-10 md:py-16 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-left"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benchmarks.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeUpVariants}
                className={`p-8 border rounded-2xl flex gap-6 items-start transition-all duration-300 bg-white border-neutral-100 hover:shadow-premium-soft hover:-translate-y-0.5 ${
                  item.isStar ? 'bg-[#2c6a46]/5 border-[#2c6a46]/10' : ''
                }`}
              >
                {/* Benchmark Icon */}
                <div className={`${item.colorClass} shrink-0`}>
                  {item.isStar ? (
                    <FiStar className="text-3xl fill-current" />
                  ) : (
                    item.icon
                  )}
                </div>

                {/* Text content */}
                <div>
                  <h4 className="font-['Montserrat'] font-bold text-[18px] md:text-[20px] text-neutral-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="font-['Inter'] font-normal text-[#5a403e] text-[14px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 5. Trust Highlight Section */}
      <section className="relative py-16 md:py-24 overflow-hidden text-white bg-black">
        <div className="absolute inset-0 bg-[#8f000d]/85 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-transparent to-transparent z-15"></div>
        <img
          alt="Ripening Dry Chillies Field"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src={aboutHeroBg}
        />
        
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <h2 className="font-['Montserrat'] font-bold text-[36px] md:text-[46px] leading-[1.1] tracking-tight text-white">
              Quality You Can Trust
            </h2>
            <p className="font-['Inter'] font-normal text-white/90 text-[15px] md:text-[17px] leading-relaxed max-w-2xl">
              Our legacy is built on the consistency of our supply. By integrating technology with traditional farming wisdom, we provide a transparent bridge between Indian agriculture and global commerce. When you choose Minha, you choose a partner committed to your brand's integrity.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-8 lg:gap-10 lg:pl-12 text-left"
          >
            <motion.div variants={fadeUpVariants} className="space-y-1">
              <div className="font-['Montserrat'] font-black text-[44px] md:text-[50px] leading-none text-[#cca72f]">
                100%
              </div>
              <div className="font-['Montserrat'] font-bold text-[10px] tracking-[0.2em] text-white/80 uppercase">
                Certified Quality
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="space-y-1">
              <div className="font-['Montserrat'] font-black text-[44px] md:text-[50px] leading-none text-[#cca72f]">
                50+
              </div>
              <div className="font-['Montserrat'] font-bold text-[10px] tracking-[0.2em] text-white/80 uppercase">
                Global Destinations
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="space-y-1">
              <div className="font-['Montserrat'] font-black text-[44px] md:text-[50px] leading-none text-[#cca72f]">
                24/7
              </div>
              <div className="font-['Montserrat'] font-bold text-[10px] tracking-[0.2em] text-white/80 uppercase">
                Supply Chain Visibility
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 6. Inquiry CTA Section */}
      <section className="py-16 md:py-24 bg-surface-container-highest">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="font-['Montserrat'] font-bold text-[28px] md:text-[36px] leading-[1.2] text-[#1a1c1e] tracking-tight max-w-3xl mx-auto">
              Looking for Premium Quality Chilli Exports?
            </h2>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[17px] max-w-2xl mx-auto leading-relaxed">
              Partner with Minha Imports & Exports for reliable, grade-A dry red chillies. Get a customized quote based on your specific requirements today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-[#8f000d] text-white px-8 py-3.5 rounded-lg font-['Montserrat'] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#8f000d]/90 hover:shadow-primary/20 transition-all active:scale-95 text-center w-full sm:w-auto"
            >
              Send Inquiry
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#2c6a46] text-[#2c6a46] bg-white hover:bg-[#2c6a46]/5 px-8 py-3 rounded-lg font-['Montserrat'] font-bold text-xs uppercase tracking-wider transition-all active:scale-95 text-center w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default QualityAssurance;
