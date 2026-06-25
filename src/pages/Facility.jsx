import React, { useEffect, useState, useRef } from 'react';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
  FiAward,
  FiGlobe,
  FiShield,
  FiLayers
} from 'react-icons/fi';

import chilliExportCta from '../assets/chilli-export-cta.png';
import facilityHeroBg from '../assets/facility-hero.png';
import market from '../assets/market-image.png';

const Facility = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
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

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden">
      <SEO
        title="Processing Facility | Minha Imports & Exports"
        description="State-of-the-art Guntur chilli processing facility. 50,000 sq ft climate-controlled storage, optical sorters, automated packaging. Seed-to-shipment transparency for every export batch."
        keywords="Chilli Processing Facility India, Guntur Chilli Storage, Chilli Sorting Plant, Chilli Export Warehouse, Minha Exports Facility"
        url="/facility"
        schemas={[{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/' },
            { '@type': 'ListItem', position: 2, name: 'Facility', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/facility' },
          ],
        }]}
      />

      {/* 1. Hero Section */}
      <section className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center text-white overflow-hidden bg-neutral-900 pt-20">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          ref={imgRef}
          alt="Sprawling high-tech industrial processing facility"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          src={market}
          onLoad={() => setImageLoaded(true)}
          fetchpriority="high"
          loading="eager"
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-6 px-6">
          <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1.5 font-['urbanist'] font-bold text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#cca72f] uppercase mb-2 px-4">
            <Link className="hover:text-white transition-colors whitespace-nowrap" to="/">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white whitespace-normal text-center">Facility</span>
          </nav>
          <h1 className="font-['urbanist'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            Our Facilities
          </h1>
          <p className="font-['Nunito'] font-semibold text-white/85 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Modern Infrastructure for Safe, Hygienic, and Reliable Chilli Exports
          </p>
        </div>
      </section>

      {/* 2. Facility Intro Section */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column (Commitment Text) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-6"
          >
            <div>
              <span className="font-['urbanist'] font-bold text-[11px] tracking-[0.2em] text-[#2c6a46] bg-[#2c6a46]/10 px-3 py-1 rounded-sm uppercase inline-block mb-3">
                World-Class Operations
              </span>
              <h2 className="font-['urbanist'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
                Precision Engineering for Agricultural Excellence
              </h2>
            </div>

            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6]">
              At Minha Imports & Exports, our facilities represent the pinnacle of "Seed-to-Shipment" logistics. We have invested in state-of-the-art infrastructure that integrates cold chain management, automated sorting, and multi-tier quality control labs to ensure every shipment meets the stringent standards of the international market.
            </p>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6]">
              Our operational capabilities are built around a central philosophy: transparency. From the moment the chillies arrive from the farms to the final dispatch, every step is documented and performed under strict hygienic conditions.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20would%20like%20to%20know%20more%20about%20your%20export%20facilities%20and%20processing%20capabilities.%20Please%20get%20in%20touch."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#8f000d] text-white px-8 py-3.5 rounded-lg font-['urbanist'] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#8f000d]/95 hover:shadow-primary/20 transition-all active:scale-95"
              >
                Contact Us
                <FiArrowRight className="text-sm" />
              </a>
            </div>
          </motion.div>

          {/* Right Column (Image with yellow highlight background block behind it) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#cca72f]/20 rounded-xl -rotate-2 -z-10 group-hover:rotate-0 transition-transform duration-500"></div>
            <img
              alt="High-precision quality control equipment laboratory"
              className="relative rounded-xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-[1.01]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiRkTV-zYvEfZX4Y2CKcXLkJMn4BQXjP-1e3ES_rDiwgW6X4VHc_z5pg5oFUJMpTdqVrHzmp3qRmlb29AMmq9-92m-pgtNSjPkRwC3djOdY6SkEElyc7EP9YKpfMh1IcCjmhDN4znmm2h3QIunm-qcZnFlDSCGHFzSRdO_iBWo2mUS9m7HYGth0sne6QN0zef0O2iKVwUXPX3EVIrVn0qrVAN0hFJs_-JuQ0AXlqyy5XQTsz5fnjX3XO55oMoRwvpJZ8rmQJ_js_o"
            />
          </motion.div>

        </div>
      </section>

      {/* 4. Connected Vertical Process Timeline */}
      <section className="py-10 md:py-14 bg-surface relative overflow-hidden">

        {/* Header */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center mb-8 relative z-10">
          <span className="font-['urbanist'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">
            Workflow Stages
          </span>
          <h2 className="font-['urbanist'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
            Our 4-Stage Operational Process
          </h2>
          <div className="w-20 h-1 bg-[#8f000d] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 pb-4 z-10">

          {/* Vertical Connecting Line */}
          <div className="absolute left-12 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#8f000d] via-[#2c6a46] to-[#cca72f] opacity-25 transform -translate-x-1/2 z-0"></div>

          {/* Timeline Items */}
          <div className="space-y-10 md:space-y-14">

            {/* Phase 01 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative min-h-[280px]">

              {/* Timeline Center Node */}
              <div className="absolute left-12 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#8f000d] flex items-center justify-center font-['urbanist'] font-bold text-xs shadow-md relative z-10">
                  <span className="text-[#8f000d]">01</span>
                  <span className="absolute -inset-1.5 rounded-full border border-[#8f000d] opacity-40 animate-pulse text-[#8f000d]"></span>
                </div>
              </div>

              {/* Left Column: Content Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full order-1 pl-16 md:pl-0 text-left"
              >
                <div className="bg-white border border-neutral-100/85 rounded-3xl p-6 md:p-8 shadow-premium-soft hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative z-10">
                  <span className="text-[#8f000d] font-['urbanist'] font-bold text-[11px] tracking-[0.2em] uppercase">
                    Phase 01
                  </span>
                  <h3 className="font-['urbanist'] font-bold text-[22px] md:text-[26px] text-neutral-900 leading-tight mt-1">
                    Advanced Cleaning &amp; Sorting
                  </h3>
                  <div className="w-12 h-[2.5px] bg-[#8f000d] rounded-full mt-3 mb-4"></div>
                  <p className="font-['Nunito'] text-[#5a403e] text-[14px] md:text-[15px] leading-relaxed mb-6">
                    Our cleaning units utilize magnetic separators and air-suction systems to remove foreign particles, stones, and dust. The sorting process is managed by high-resolution optical sorters that categorize chillies based on color consistency and size uniformity, ensuring only the highest grade S4 and Teja varieties move forward.
                  </p>

                  {/* Phase Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#8f000d] uppercase tracking-wider">Daily Capacity</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">50 Metric Tons / Day</p>
                    </div>
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#8f000d] uppercase tracking-wider">Technology</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">Optical Sorters</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Image Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full order-2 pl-16 md:pl-0"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100 aspect-video group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    alt="Industrial cleaning and sorting unit"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuH9RkZjvftpwODeAZZ1jCT_ElfBIFqsfgVEPGsdkBeC7xPSJDlPvf-mgctafwM3EPqX25Gvjtz4o59zHkarMUxbNDE5J-PY1aIQvCVACHmZgz7mkHjCdH_Q-C6-VWrK47maS8ORHQ00Mg6qwCjALBkctFjgwopO1tX70dFav7txsvNg8xNhRX0kxaIq4HVI_X72D-nbgG1zU2W1wEB5p7ByffL0W34-Y5U-T6aoXP_v1znpEr8ffkspBndog36CiE7hx619PXs90"
                  />
                </div>
              </motion.div>

            </div>

            {/* Phase 02 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative min-h-[280px]">

              {/* Timeline Center Node */}
              <div className="absolute left-12 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#2c6a46] flex items-center justify-center font-['urbanist'] font-bold text-xs shadow-md relative z-10">
                  <span className="text-[#2c6a46]">02</span>
                  <span className="absolute -inset-1.5 rounded-full border border-[#2c6a46] opacity-40 animate-pulse text-[#2c6a46]"></span>
                </div>
              </div>

              {/* Left Column: Image Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full order-2 md:order-1 pl-16 md:pl-0"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100 aspect-video group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    alt="Climate controlled warehouse racking interior"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVqfMaAEOt8IxXPT1_xAgBkVbDdPUhsXpc-HbC8eTO7yHqGVr6agRLRn1dK6cVLPThqlameqXuArRfhh_4k0y5E0Fh3CuDHyJSvPbtXt4iH5DXLy6sMP7po0RJKHPoeYdT6eCd7gY7PKJMf9pM5fZSRHzrZZmD0yc7kSqzNWreJR4VGfYyzagh3F1s3p3PG2wF8F4ADeZ2xHHTcQGzQOi9NDX-Kf23UYdGeXellGPlcGSC9rNIC6GI6hqoHB03ZGQA5HPfPCSlNzM"
                  />
                </div>
              </motion.div>

              {/* Right Column: Content Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full order-1 md:order-2 pl-16 md:pl-0 text-left"
              >
                <div className="bg-white border border-neutral-100/85 rounded-3xl p-6 md:p-8 shadow-premium-soft hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative z-10">
                  <span className="text-[#2c6a46] font-['urbanist'] font-bold text-[11px] tracking-[0.2em] uppercase">
                    Phase 02
                  </span>
                  <h3 className="font-['urbanist'] font-bold text-[22px] md:text-[26px] text-neutral-900 leading-tight mt-1">
                    Climate-Controlled Storage
                  </h3>
                  <div className="w-12 h-[2.5px] bg-[#2c6a46] rounded-full mt-3 mb-4"></div>
                  <p className="font-['Nunito'] text-[#5a403e] text-[14px] md:text-[15px] leading-relaxed mb-6">
                    To prevent moisture damage and maintain the pungency (SHU levels) of our chillies, we operate a 50,000 sq. ft. storage facility. The environment is strictly monitored for humidity and temperature, with dedicated pallets that keep the product away from floor contact, ensuring 100% pest-free storage.
                  </p>

                  {/* Phase Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#2c6a46] uppercase tracking-wider">Facility Area</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">50,000 Sq. Ft.</p>
                    </div>
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#2c6a46] uppercase tracking-wider">Purity Rating</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">100% Pest-Free</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Phase 03 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative min-h-[280px]">

              {/* Timeline Center Node */}
              <div className="absolute left-12 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#cca72f] flex items-center justify-center font-['urbanist'] font-bold text-xs shadow-md relative z-10">
                  <span className="text-[#cca72f]">03</span>
                  <span className="absolute -inset-1.5 rounded-full border border-[#cca72f] opacity-40 animate-pulse text-[#cca72f]"></span>
                </div>
              </div>

              {/* Left Column: Content Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full order-1 pl-16 md:pl-0 text-left"
              >
                <div className="bg-white border border-neutral-100/85 rounded-3xl p-6 md:p-8 shadow-premium-soft hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative z-10">
                  <span className="text-[#cca72f] font-['urbanist'] font-bold text-[11px] tracking-[0.2em] uppercase">
                    Phase 03
                  </span>
                  <h3 className="font-['urbanist'] font-bold text-[22px] md:text-[26px] text-neutral-900 leading-tight mt-1">
                    Export-Grade Packaging
                  </h3>
                  <div className="w-12 h-[2.5px] bg-[#cca72f] rounded-full mt-3 mb-4"></div>
                  <p className="font-['Nunito'] text-[#5a403e] text-[14px] md:text-[15px] leading-relaxed mb-6">
                    We provide customized packaging solutions tailored to international shipping requirements. From 5kg vacuum-sealed pouches to 25kg PP bags, our automated machinery ensures airtight seals and accurate weight measurement. Every package features clear batch-tracking QR codes for total traceability.
                  </p>

                  {/* Phase Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#cca72f] uppercase tracking-wider">Bag Sizes</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">5kg to 25kg Pallets</p>
                    </div>
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#cca72f] uppercase tracking-wider">Traceability</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">QR Code Scans</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Image Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full order-2 pl-16 md:pl-0"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100 aspect-video group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    alt="Automated packaging line machinery"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwEhcZ_nHs0EQKJLbDX7y0XvRmPOa6iAucqFWH9T2nOMY1BE9iW5qzgjsCbWcEJyncANWwgYEsImiqruW5g8aT_QByVk0WuLK9e4d8f1ewlKx_Bs0OourJgT_NYtGiaIgFELQVMPL5sfYsHuoqTFdUWjps-594SZ4Kh_JD0qxvEBTmOTmCWhfE9sXOf2idzcqwIrKaSJ0CKhFJwSms8r_oz71yG0hXecuu0__NXQR5apJco-8tmdJSfonXusgeJQXJZc4qUisMzxM"
                  />
                </div>
              </motion.div>

            </div>

            {/* Phase 04 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative min-h-[280px]">

              {/* Timeline Center Node */}
              <div className="absolute left-12 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#b22222] flex items-center justify-center font-['urbanist'] font-bold text-xs shadow-md relative z-10">
                  <span className="text-[#b22222]">04</span>
                  <span className="absolute -inset-1.5 rounded-full border border-[#b22222] opacity-40 animate-pulse text-[#b22222]"></span>
                </div>
              </div>

              {/* Left Column: Image Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full order-2 md:order-1 pl-16 md:pl-0"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100 aspect-video group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    alt="Shipping bay container loading logistics"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5HpVK-YBD7YMK4w_aG0iQmuKajVrU2QtRvNh5tYHHIsz7svDjHgtGoc0hIxia2U_xYapwx3ky6-7VBDF7A0HITuxBa2nwjCNSZkU1nL-OQySWSynBfmHxFpR1YY0VXIwuFW0SV4QrjcoL_4O-_qJ4FVpb77R_wzZMpyB7GrDWRwvSECqkzBkPFOIZduK75DHMrijKV61IXgNhLoRKxvF79kj-xF6IQJyQYfg3eEh_NuNORFTy1iGVpKuQ6P4-_g6nzl2ALmLVZb8"
                  />
                </div>
              </motion.div>

              {/* Right Column: Content Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full order-1 md:order-2 pl-16 md:pl-0 text-left"
              >
                <div className="bg-white border border-neutral-100/85 rounded-3xl p-6 md:p-8 shadow-premium-soft hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative z-10">
                  <span className="text-[#b22222] font-['urbanist'] font-bold text-[11px] tracking-[0.2em] uppercase">
                    Phase 04
                  </span>
                  <h3 className="font-['urbanist'] font-bold text-[22px] md:text-[26px] text-neutral-900 leading-tight mt-1">
                    Logistics &amp; Global Dispatch
                  </h3>
                  <div className="w-12 h-[2.5px] bg-[#b22222] rounded-full mt-3 mb-4"></div>
                  <p className="font-['Nunito'] text-[#5a403e] text-[14px] md:text-[15px] leading-relaxed mb-6">
                    Located near major transport hubs, our logistics arm ensures rapid transit from facility to port. We handle all container stuffing on-site under high surveillance, ensuring that the integrity of the packaging is maintained until the doors are sealed for global shipping.
                  </p>

                  {/* Phase Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#b22222] uppercase tracking-wider">Dispatch Hours</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">24/7 Loading Bays</p>
                    </div>
                    <div>
                      <h5 className="font-['urbanist'] font-bold text-[11px] text-[#b22222] uppercase tracking-wider">Tracking</h5>
                      <p className="font-['Nunito'] text-neutral-800 text-[13px] font-semibold mt-0.5">Real-time GPS Logs</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. Operations Gallery */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="font-['urbanist'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">
              Gallery
            </span>
            <h2 className="font-['urbanist'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Inside Our Operations
            </h2>
            <div className="w-20 h-1 bg-[#8f000d] mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              {
                title: 'Sorting Tech',
                alt: 'Precision sorting machinery and sensors',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdRuK0UnIzK3_sX3XpMYGL2G95-yjeM3iHgFeQru0iezjVHXGLxklO-YQB48LlIvlvYyd1MGfsI2Xr9Ga8PbmgQ8RezDF_WeTm7_7vwY_RrLgbAw0tq-gQxJELCBpnHQszN6lskgfpCioY3_dEM9FrX0P7p_mFKwRbjsdxRRKS3QTlBsALHgvOY46d16xahESy7uYBjaU3ICzcqteoJjVqv88BMztubueTpByhbqL3eya9bHkmehCQfPXhPSkGsEHTNu8AxgeZ4j0'
              },
              {
                title: 'Processing Hall',
                alt: 'Sanitized industrial hall with workers',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7tsFM0-MC3-B-7ssDYwk1wHV5YPBEyZfx7x_CUZMaMdTsu17k-RDaqDJ_lvt8ablJ0lRAS-Y3HGbmg1w8xL-u-wKetQm8Wu9XvugeoXAqqOcdBMEzJb8R52Ke192JvyIaBXHD5xxsF3-UZ_m5LAtFIDUUuL50pAInICkvDqfW0p7uCWVi4jDc_DuR6hTBTiriH_U0sRjLdC5Z4YsiXxJVC2UwwngvmFpfCAbln0UFi-JvejUfbXYxG7vq5L2OKvYvtAf-15G8sN8'
              },
              {
                title: 'Quality Control',
                alt: 'Dry red chilli pod inspection',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5RV5LkqhelQNJBH8UT4s_pmOhN14wgFuCrqrbbnGbWEozpZ2PzLrllp70JH98-TVr5Q6yIAjuQSofGa1VlL-H5BW2MisUL0RMu7cMLiqR8RhhfS2z-aM9mhZwWCtYYypNIuRwUq4CuqfRY2hAIPE_mTn2ljOvKnzggQcLlxxFG6igl6kJFr5Bh6iHjotkXM66Dxz360QEBYmGNrutJgdqjuXdKxv2RoLbp0ov2gih0dRsu2_JsnS_bEIGcxCq6Rkiyoz7F8IM97Q'
              },
              {
                title: 'Logistics Ready',
                alt: 'Pallets prepared for export loading',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3ktwPMuHUTtghkrsgWId09mtsprbyLx-cfZKAqBCGTHXz1ZrIxXoH-56cDIIZs97VNGTM_L9x3FTtkbF__Xcg3swmfdo4De7oh3AGJjKqZWn3rjmbhAy1gquQNqDrtk-nbfkmcQ8n1Od4ggN0am3grhUCuZATg9jQDn2qLrxXBgtF8qrDzYCc2x6DTM5DaRKXqW7D9IFyAjv9sC7ZupH8J1IaYkP21KYQt6RGagACwekSxD5YSg1zjtokv1Mg1QcuYBFEHq5eIMM'
              }
            ].map((img, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariants}
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-md border border-neutral-100"
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={img.alt}
                  src={img.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:bg-[#8f000d]/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end md:items-center justify-start md:justify-center p-3.5 md:p-0">
                  <span className="text-white font-['urbanist'] font-bold text-[11px] md:text-sm tracking-wider uppercase">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. Why Our Infrastructure Matters */}
      <section className="py-10 md:py-14 bg-[#f9f9fc]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          {/* Centered Header */}
          <div className="text-center mb-16 space-y-3">
            <span className="font-['urbanist'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase block">
              Infrastructure
            </span>
            <h2 className="font-['urbanist'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Built for Quality &amp; Reliability
            </h2>
            <p className="font-['Nunito'] font-semibold text-[#5a403e] max-w-2xl mx-auto text-[15px] md:text-[16px] leading-[1.6]">
              Our infrastructure isn't just about high-tech machines; it's about the promise of safety, consistency, and promptness we deliver to your doorstep.
            </p>
            <div className="w-16 h-[2.5px] bg-[#8f000d] mx-auto mt-4 rounded-full" />
          </div>

          {/* Apple-Style Unified Grid Container */}
          <div className="bg-white rounded-[2rem] border-t border-l border-neutral-100 shadow-premium-soft overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: '01',
                title: 'Food Safety Compliance',
                desc: 'Our units are designed following global food safety protocols to ensure zero contamination.',
                iconObj: <FiCheckCircle className="text-xl" />,
                color: 'text-[#8f000d]',
                bg: 'bg-[#8f000d]/10',
                border: 'border-[#8f000d]/20',
              },
              {
                num: '02',
                title: 'High-Throughput Yield',
                desc: 'Capable of processing up to 50 metric tons of chilli per day without compromising quality.',
                iconObj: <FiCpu className="text-xl" />,
                color: 'text-[#2c6a46]',
                bg: 'bg-[#2c6a46]/10',
                border: 'border-[#2c6a46]/20',
              },
              {
                num: '03',
                title: 'Stock Availability',
                desc: 'Large-scale storage ensures consistent supply even during off-peak seasons.',
                iconObj: <FiLayers className="text-xl" />,
                color: 'text-[#cca72f]',
                bg: 'bg-[#cca72f]/10',
                border: 'border-[#cca72f]/20',
              },
              {
                num: '04',
                title: 'In-House Lab Testing',
                desc: 'Immediate moisture and color testing in our on-site laboratory for every batch.',
                iconObj: <FiAward className="text-xl" />,
                color: 'text-[#d97706]',
                bg: 'bg-[#d97706]/10',
                border: 'border-[#d97706]/20',
              },
              {
                num: '05',
                title: 'Sustainable Practices',
                desc: 'Energy-efficient machinery and waste management systems for a greener footprint.',
                iconObj: <FiGlobe className="text-xl" />,
                color: 'text-[#0a361c]',
                bg: 'bg-[#0a361c]/10',
                border: 'border-[#0a361c]/20',
              },
              {
                num: '06',
                title: 'Secure Facility',
                desc: '24/7 CCTV surveillance and restricted access zones for product security.',
                iconObj: <FiShield className="text-xl" />,
                color: 'text-[#8f6a10]',
                bg: 'bg-[#8f6a10]/10',
                border: 'border-[#8f6a10]/20',
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ backgroundColor: '#fafafb' }}
                className="p-8 md:p-10 border-b border-r border-neutral-100 flex flex-col justify-between min-h-[240px] relative group overflow-hidden text-left transition-colors duration-300"
              >
                {/* Large Background Watermarked Number */}
                <div className="absolute right-6 bottom-4 font-['urbanist'] font-extrabold text-[80px] leading-none text-neutral-100/60 select-none group-hover:text-neutral-200/50 transition-colors duration-300 pointer-events-none z-0">
                  {value.num}
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Icon Container */}
                  <div className={`w-11 h-11 rounded-xl ${value.bg} ${value.color} flex items-center justify-center shrink-0 border ${value.border} transition-transform duration-300 group-hover:scale-110`}>
                    {value.iconObj}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-['urbanist'] font-bold text-neutral-900 text-[16px] leading-tight">
                      {value.title}
                    </h4>
                    <p className="font-['Nunito'] font-semibold text-[#5a403e]/85 text-[13.5px] leading-relaxed max-w-xs">
                      {value.desc}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Business CTA */}
      <section className="py-12 md:py-16 px-6 md:px-12 max-w-[1280px] mx-auto z-10 relative w-full">
        <div className="relative rounded-[2rem] overflow-hidden py-10 md:py-14 px-6 md:px-12 shadow-[0_35px_80px_rgba(0,0,0,0.18)] border border-white/[0.04] bg-gradient-to-br from-[#3d0008] via-[#220004] to-[#140002] group">

          {/* Subtle grid and glowing accents */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#8f000d]/25 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8f000d]/35 transition-all duration-700" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#cca72f]/8 rounded-full blur-3xl pointer-events-none" />

          {/* Cargo logistics overlay ship image */}
          <img
            src={chilliExportCta}
            alt="Cargo logistics overlay"
            className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-[0.04] pointer-events-none mix-blend-overlay"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Brand Quote (lg:col-span-5) */}
            <div className="relative space-y-4 text-center lg:text-left lg:border-r lg:border-white/10 lg:pr-8 xl:pr-12 lg:col-span-5 w-full z-10">
              <span className="absolute -top-10 -left-2 text-white/10 text-8xl font-serif select-none pointer-events-none hidden lg:inline-block">
                “
              </span>
              <blockquote className="font-['urbanist'] font-medium italic text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-white/95 relative z-10">
                "Behind every successful export is a strong infrastructure built for precision and consistency. Our facilities are carefully designed to maintain product quality, ensure hygienic handling, and support seamless global deliveries."
              </blockquote>
              <div className="font-['urbanist'] font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-[#cca72f] relative z-10">
                — The Minha Infrastructure
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
                Partner With a Reliable Export Infrastructure
              </h2>

              {/* Description */}
              <p className="font-['Nunito'] font-semibold text-white/80 text-[13.5px] leading-relaxed">
                Experience the difference of a facility built for the demands of the global market. Request a virtual tour or a quote today.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <a
                  href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20bulk%20Guntur%20chilli%20export.%20Please%20share%20pricing%2C%20packaging%20options%2C%20and%20shipping%20timelines."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#cca72f] text-[#140002] px-8 py-3.5 rounded-full font-['urbanist'] font-extrabold text-[12px] uppercase tracking-wider hover:bg-[#e0bc55] shadow-lg shadow-[#cca72f]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center whitespace-nowrap"
                >
                  Request a Quote
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

export default Facility;
