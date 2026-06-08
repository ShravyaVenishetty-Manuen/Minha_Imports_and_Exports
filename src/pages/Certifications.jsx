import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiCheckCircle,
  FiShield,
  FiGlobe,
  FiAward,
  FiFileText,
  FiPackage,
  FiArrowRight,
  FiX,
  FiZoomIn,
} from 'react-icons/fi';

// Existing assets
import fssaiLogo from '../assets/3fssai-logo-png.png';
import brcLogo from '../assets/brc-food-certification-logo-Photoroom.png';
import fieoLogo from '../assets/fieo-Photoroom.png';
import chilliExportCta from '../assets/chilli-export-cta.png';
import chilliBowlTable from '../assets/chilli-bowl-table.png';
import iso9001Cert from '../assets/certificates/iso-9001-2015.jpg';
import iso22000Cert from '../assets/certificates/iso-22000-2018.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const certifications = [
  {
    id: 'iso9001',
    name: 'ISO 9001:2015',
    subtitle: 'Quality Management System',
    desc: 'Independently assessed by QRO and compliant with ISO 9001:2015 for Trading, Export, Storage, Processing, and Packaging of Agricultural Commodities.',
    icon: <FiAward className="text-[#2c6a46] text-2xl" />,
    accentColor: '#2c6a46',
    certNo: '2020082101BGS',
    issuedBy: 'QRO — Quality Research Organization',
    image: iso9001Cert,
  },
  {
    id: 'iso22000',
    name: 'ISO 22000:2018',
    subtitle: 'Food Safety Management Systems',
    desc: 'Certified by QRO for compliance with ISO 22000:2018 covering Food Safety Management for Trading, Export, Storage, Processing, and Packaging of Agricultural Commodities.',
    icon: <FiShield className="text-[#8f000d] text-2xl" />,
    accentColor: '#8f000d',
    certNo: '2020082101GS',
    issuedBy: 'QRO — Quality Research Organization',
    image: iso22000Cert,
  },
];

const complianceItems = [
  {
    icon: <FiShield className="text-[#2c6a46] text-[28px]" />,
    title: 'Product Safety',
    desc: 'Stringent lab tests for pesticide residues, aflatoxin limits, and microbial content before every shipment.',
  },
  {
    icon: <FiCheckCircle className="text-[#8f000d] text-[28px]" />,
    title: 'Hygienic Handling',
    desc: 'Mechanized sorting and climate-controlled processing to minimize human contact and preserve freshness.',
  },
  {
    icon: <FiGlobe className="text-[#2c6a46] text-[28px]" />,
    title: 'Export Compliance',
    desc: 'Full adherence to destination-country specific MRL limits, phytosanitary, and trade regulations.',
  },
  {
    icon: <FiFileText className="text-[#8f000d] text-[28px]" />,
    title: 'Doc Accuracy',
    desc: 'Precise Phytosanitary Certificates, Certificate of Origin, and Health Certificates for seamless customs clearance.',
  },
];

const whyPoints = [
  {
    title: 'Buyer Confidence',
    desc: 'Certifications provide the assurance that every product meets global food consumption and safety standards.',
  },
  {
    title: 'Seamless Customs Clearance',
    desc: 'Compliant documentation ensures no port-level delays, protecting your delivery timelines.',
  },
  {
    title: 'Reliability & Consistency',
    desc: 'Uniform grade standards across every container, safeguarding your brand\'s market reputation.',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeCert]);

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden">

      {/* ── Lightbox Modal ──────────────────────────────────────────────────── */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setActiveCert(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
              <div>
                <p className="font-['Montserrat'] font-extrabold text-[16px] text-[#1a1c1e]">{activeCert.name}</p>
                <p className="font-['Montserrat'] font-semibold text-[10px] tracking-widest uppercase text-[#5a403e]/60">{activeCert.subtitle}</p>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#8f000d] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <FiX className="text-[18px]" />
              </button>
            </div>
            {/* Certificate Image */}
            <div className="p-4 bg-neutral-50">
              <img
                src={activeCert.image}
                alt={`${activeCert.name} Certificate`}
                className="w-full rounded-xl object-contain max-h-[70vh]"
              />
            </div>
            {/* Modal Footer */}
            <div className="px-5 py-3 bg-white border-t border-neutral-100 flex items-center justify-between">
              <p className="font-['Montserrat'] font-bold text-[10px] tracking-widest text-[#5a403e]/50 uppercase">
                Cert No: {activeCert.certNo} &nbsp;·&nbsp; {activeCert.issuedBy}
              </p>
              <a
                href={activeCert.image}
                download
                className="text-[11px] font-['Montserrat'] font-bold text-[#8f000d] hover:underline"
              >
                Download
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center text-white overflow-hidden bg-neutral-900 pt-20">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          alt="Certified Chilli Export Facility"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUFP4lXWY2N9ZZnMljSsoM6tmA9LoA-hRA2LWZxX1PBwuu5u1EReljIm1QHf2w-fcIqwhPJeJ5PDiKQSISSwNKl4tGg7e2AiyECz13F5lCexzj9iBiJe2QgqjLznWEHUrTvyxQ7W6fVUZ6rAZ1FZS8FudIvpnvl6i0Klr23bCvl_53WA9Klbi9FImUYI9W2AGXwRl7kKkee7vuHX_9P3Yu2jRgi60ooXCzsSa9Fgh5eAH0Bt3oli16WzCaiZcVj3w7PJ66oEOdUkA"
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-5 px-6">
          <nav className="flex justify-center items-center gap-2 font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#cca72f] uppercase mb-2">
            <Link className="hover:text-white transition-colors" to="/">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Certifications</span>
          </nav>
          <h1 className="font-['Montserrat'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            Certifications &amp; Compliance
          </h1>
          <p className="font-['Inter'] font-normal text-white/85 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Committed to International Standards and Trusted Export Practices
          </p>
        </div>
      </section>

      {/* ── 2. Introduction ─────────────────────────────────────────────────── */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#cca72f]/15 rounded-xl rotate-2 -z-10 group-hover:rotate-0 transition-transform duration-500" />
            <img
              alt="Official trade and compliance documents"
              className="relative rounded-xl shadow-2xl w-full h-[400px] md:h-[480px] object-cover transition-transform duration-500 hover:scale-[1.01]"
              src={chilliBowlTable}
            />

          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-left space-y-6"
          >
            <div>
              <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#2c6a46] bg-[#2c6a46]/10 px-3 py-1 rounded-sm uppercase inline-block mb-3">
                Global Assurance
              </span>
              <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
                Upholding the Gold Standard in Spice Export
              </h2>
            </div>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.7]">
              At Minha Imports &amp; Exports, quality is not just a promise — it is a verifiable standard. Our seed-to-shipment workflow is meticulously documented and audited to ensure every batch of Guntur Chillies meets the stringent requirements of global food safety authorities.
            </p>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.7]">
              Our certifications span national food safety, international export regulations, and global trade authorizations — giving our partners complete confidence in every container.
            </p>

            {/* Inline trust logos */}
            <div className="flex items-center gap-6 pt-2 flex-wrap">
              <img src={fssaiLogo} alt="FSSAI Certified" className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
              <img src={brcLogo} alt="BRC Certified" className="h-9 object-contain opacity-80 hover:opacity-100 transition-opacity" />
              <img src={fieoLogo} alt="FIEO Member" className="h-9 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  document.getElementById('all-certificates')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center gap-2 bg-[#8f000d] text-white px-8 py-3.5 rounded-lg font-['Montserrat'] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#8f000d]/90 transition-all active:scale-95"
              >
                View Documents
                <FiArrowRight className="text-sm" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Certifications Showcase ──────────────────────────────────────── */}
      <section id="all-certificates" className="py-10 md:py-14 bg-[#f3f3f6]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">
              Our Credentials
            </span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] text-[#1a1c1e] leading-tight">
              Internationally Recognised Certifications
            </h2>
            <div className="w-20 h-1 bg-[#8f000d] mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 flex flex-col text-left shadow-sm border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Icon pill */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${cert.accentColor}12` }}
                >
                  {cert.icon}
                </div>

                <h3 className="font-['Montserrat'] font-extrabold text-[20px] text-[#1a1c1e] mb-1">
                  {cert.name}
                </h3>
                <p className="font-['Montserrat'] font-semibold text-[10px] tracking-wider uppercase text-[#5a403e]/60 mb-3">
                  {cert.subtitle}
                </p>
                <p className="font-['Inter'] font-normal text-[#5a403e] text-[13px] leading-relaxed flex-1">
                  {cert.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <p className="font-['Montserrat'] font-bold text-[10px] tracking-widest text-[#5a403e]/50 uppercase mb-1">Certificate No.</p>
                  <p className="font-['Montserrat'] font-bold text-[12px] text-[#1a1c1e]">{cert.certNo}</p>
                  <p className="font-['Inter'] text-[11px] text-[#5a403e]/60 mt-1">{cert.issuedBy}</p>
                </div>
                <button
                  onClick={() => setActiveCert(cert)}
                  className="mt-5 inline-flex items-center gap-1.5 text-[#8f000d] font-['Montserrat'] font-bold text-[12px] hover:underline underline-offset-2 transition-all"
                >
                  <FiZoomIn className="text-[14px]" />
                  View Certificate
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. Compliance Standards Icon Grid ───────────────────────────────── */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">
              Compliance Standards
            </span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[38px] text-[#1a1c1e] leading-tight">
              Built on Four Pillars of Trust
            </h2>
            <div className="w-20 h-1 bg-[#8f000d] mx-auto mt-4 rounded-full" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {complianceItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#f9f9fc] rounded-2xl p-6 border border-neutral-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="font-['Montserrat'] font-bold text-[16px] text-[#1a1c1e] mb-2">
                  {item.title}
                </h4>
                <p className="font-['Inter'] font-normal text-[#5a403e] text-[13px] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. Why Certifications Matter ────────────────────────────────────── */}
      <section className="py-10 md:py-14 bg-[#f3f3f6]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Points */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 md:order-1 space-y-5"
          >
            <motion.div variants={fadeUp}>
              <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#2c6a46] bg-[#2c6a46]/10 px-3 py-1 rounded-sm uppercase inline-block mb-3">
                Why It Matters
              </span>
              <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[38px] leading-[1.2] text-[#1a1c1e] tracking-tight">
                Why Certified Sourcing Matters
              </h2>
            </motion.div>

            <ul className="space-y-5 pt-2">
              {whyPoints.map((pt, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#2c6a46]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <FiCheckCircle className="text-[#2c6a46] text-[16px]" />
                  </div>
                  <div>
                    <p className="font-['Montserrat'] font-bold text-[15px] text-[#1a1c1e] mb-1">{pt.title}</p>
                    <p className="font-['Inter'] font-normal text-[#5a403e] text-[14px] leading-relaxed">{pt.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 relative group"
          >
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#8f000d]/10 rounded-xl rotate-3 -z-10 group-hover:rotate-0 transition-transform duration-500" />
            <img
              alt="Global Chilli Trade Logistics"
              className="relative rounded-xl shadow-2xl w-full h-[380px] md:h-[440px] object-cover hover:scale-[1.01] transition-transform duration-500"
              src={chilliExportCta}
            />
          </motion.div>
        </div>
      </section>

      {/* ── 6. Trust Logo Strip ─────────────────────────────────────────────── */}
      <section className="py-10 bg-surface border-y border-neutral-100">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <p className="font-['Montserrat'] font-bold text-[10px] tracking-[0.25em] text-[#1a1c1e]/40 uppercase mb-8">
            Certified Quality. Trusted Worldwide.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {/* FSSAI logo */}
            <img src={fssaiLogo} alt="FSSAI" className="h-10 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            {/* BRC logo */}
            <img src={brcLogo} alt="BRC Certified" className="h-9 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            {/* FIEO logo */}
            <img src={fieoLogo} alt="FIEO" className="h-9 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />

          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-8 px-6 md:px-12 max-w-[850px] mx-auto z-10 relative">
        <div className="relative rounded-[2rem] overflow-hidden text-center text-white py-12 md:py-14 shadow-2xl border border-white/[0.04] bg-gradient-to-br from-[#3d0008] via-[#220004] to-[#140002] group">

          {/* Glows */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#8f000d]/25 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8f000d]/35 transition-all duration-700" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#cca72f]/8 rounded-full blur-3xl pointer-events-none" />

          {/* Ship image overlay */}
          <img
            src={chilliExportCta}
            alt="Export cargo overlay"
            className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-10 pointer-events-none mix-blend-overlay"
          />

          <div className="relative z-10 max-w-xl mx-auto space-y-5 px-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cca72f] animate-pulse" />
              <span className="font-['Montserrat'] font-bold text-[8.5px] tracking-[0.2em] text-[#cca72f] uppercase">
                Certified Export Partner
              </span>
            </div>

            <h2 className="font-['Montserrat'] font-extrabold text-[24px] md:text-[32px] leading-tight text-white tracking-tight">
              Looking for a Certified<br className="hidden sm:inline" /> Chilli Export Partner?
            </h2>

            <p className="font-['Inter'] font-normal text-white/80 text-[13px] md:text-[14px] max-w-lg mx-auto leading-relaxed">
              Partner with Minha for trusted sourcing with globally compliant documentation. We handle the complexity of compliance so you can focus on growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2 max-w-xs sm:max-w-md mx-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-[#cca72f] text-[#140002] px-8 py-3.5 rounded-full font-['Montserrat'] font-extrabold text-[12px] uppercase tracking-wider hover:bg-[#e0bc55] shadow-lg shadow-[#cca72f]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center whitespace-nowrap"
              >
                Send Inquiry
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-[12px] rounded-full font-['Montserrat'] font-extrabold text-[12px] uppercase tracking-wider hover:bg-white/10 hover:border-white/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>

            <div className="text-[8px] font-['Montserrat'] tracking-widest text-white/40 uppercase pt-1">
              Export Desk Response Guarantee: Within 12 Hours
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Certifications;
