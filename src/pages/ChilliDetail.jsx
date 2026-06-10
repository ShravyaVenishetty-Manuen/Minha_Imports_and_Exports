import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiCheckCircle, FiMapPin, FiDroplet, FiAward, FiTag } from 'react-icons/fi';
import { GiChiliPepper } from 'react-icons/gi';
import { chilliVarieties } from '../config/chilliData';

// Import local assets for gallery fallback
import chilliIntroDry from '../assets/chilli-intro-dry.png';
import chilliSpotlightDry from '../assets/chilli-spotlight-dry.png';
import chilliBowlTable from '../assets/chilli-bowl-table.png';
import chilliExportCta from '../assets/chilli-export-cta.png';
import chilliPremium from '../assets/glowing-chilli-premium-remove-bg-io.png';

const ChilliDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState('');

  // Find the current chilli variety details
  const chilli = chilliVarieties.find(c => c.id === id);

  // Scroll to top on mount or route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Update default active image when data loads
  useEffect(() => {
    if (chilli) {
      setActiveImage(chilli.image);
    }
  }, [chilli]);

  if (!chilli) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-surface text-center p-6">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Product Not Found</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">The specified chilli variety could not be found in our catalog.</p>
        <Link to="/varieties" className="bg-primary text-white font-bold px-8 py-3 rounded hover:bg-primary-container transition-all">
          Back to Varieties
        </Link>
      </div>
    );
  }

  // Create local images gallery
  const gallery = [
    chilli.image,
    chilliIntroDry,
    chilliSpotlightDry,
    chilliBowlTable
  ];

  // Related products (different than current, showing 2)
  const relatedChillies = chilliVarieties
    .filter(c => c.id !== chilli.id)
    .sort((a, b) => (a.category === chilli.category ? 1 : -1))
    .slice(0, 2);

  const isByadgi = chilli.category === 'Byadgi';
  const applications = [
    {
      idx: "01",
      title: "Spice & Grinding Industry",
      desc: isByadgi
        ? "Perfect for making mild chilli powder and seasoning mixes that need a deep natural red color."
        : "Perfect for making hot chilli powder and spice mixes that need a strong, steady heat profile.",
      highlights: isByadgi
        ? ["Easy to grind into fine powder", "Deep natural red coloring", "No chemical additives needed"]
        : ["Keeps heat level steady in mixes", "Excellent powder grind yield", "Long-lasting spice strength"],
      numColor: "text-[#8f000d]/15",
      accentLine: "border-[#8f000d]"
    },
    {
      idx: "02",
      title: "Food Processing Lines",
      desc: isByadgi
        ? "Great for making sauces, pastes, and packaged foods that need a rich red color without high heat."
        : "Great for making hot sauces, pastes, and packaged foods that need a spicy kick and bright red color.",
      highlights: [
        "Works well with vinegar and sauces",
        "Stays fresh after heat processing",
        "Keeps sauces thick and consistent"
      ],
      numColor: "text-[#1F5E3B]/15",
      accentLine: "border-[#1F5E3B]"
    },
    {
      idx: "03",
      title: isByadgi ? "Natural Color Extraction" : "Oleoresin Extraction",
      desc: isByadgi
        ? "Highly preferred for extracting natural red food color because of its very high ASTA pigment level."
        : "Highly preferred for extracting hot spice oil because of its naturally high capsaicin level.",
      highlights: isByadgi
        ? ["High yield of natural red color", "Pure color pigment quality", "Ideal for food coloring labs"]
        : ["High yield of hot spice oil", "Excellent extraction recovery", "Clean and pure filter standard"],
      numColor: "text-[#cca72f]/25",
      accentLine: "border-[#cca72f]"
    }
  ];

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center text-white overflow-hidden bg-neutral-900 pt-20">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          alt={`${chilli.name} Hero`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={chilli.image}
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-6">
          <nav className="flex justify-center items-center gap-2 font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#cca72f] uppercase mb-2">
            <Link className="hover:text-white transition-colors" to="/">Home</Link>
            <span className="text-white/60">/</span>
            <Link className="hover:text-white transition-colors" to="/varieties">Chilli Varieties</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">{chilli.name}</span>
          </nav>
          <h1 className="font-['Montserrat'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            {chilli.name}
          </h1>
          <p className="font-['Inter'] font-normal text-white/80 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Premium Export Grade Guntur Dry Red Chilli
          </p>
        </div>
      </section>

      {/* 2. Product Overview Section */}
      <section className="py-12 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left: Gallery */}
          <div className="lg:col-span-7 space-y-gutter">
            <div className="bg-white rounded p-2 ambient-shadow overflow-hidden">
              <img
                alt={`${chilli.name} Main`}
                className="w-full h-[500px] object-cover rounded-sm"
                id="main-img"
                src={activeImage}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {gallery.map((img, idx) => (
                <img
                  key={idx}
                  alt={`Thumb ${idx + 1}`}
                  className={`w-full h-24 object-cover rounded cursor-pointer transition-all ${activeImage === img ? 'border-2 border-primary-container opacity-100' : 'opacity-60 hover:opacity-100'
                    }`}
                  src={img}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Right: Key Specs Dashboard */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Export Grade {chilli.grade}</span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight mb-6">Technical Specifications</h2>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">

              {/* Card 1: Variety Name */}
              <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-red-50 text-[#8f000d]">
                    <FiTag className="text-[16px]" />
                  </div>
                  <span className="text-neutral-500 font-bold text-[9px] uppercase tracking-wider">Variety Name</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[#1a1c1e] font-bold text-[14px] md:text-[15px] font-heading">{chilli.name}</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5 font-body">Premium Commercial Export Code</div>
                  </div>
                  <span className="text-[10px] font-semibold text-[#8f000d] bg-red-50 px-2 py-0.5 rounded">Verified Quality</span>
                </div>
              </div>

              {/* Card 2: Heat Level */}
              <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-red-50 text-[#8f000d]">
                    <GiChiliPepper className="text-[16px]" />
                  </div>
                  <span className="text-neutral-500 font-bold text-[9px] uppercase tracking-wider">Heat Level</span>
                </div>
                <div>
                  <div className="text-[#8f000d] font-bold text-[14px] md:text-[15px] leading-tight font-heading">{chilli.heatLevel}</div>
                  <div className="text-[10px] text-neutral-400 mt-1 font-body">Scoville Units (SHU)</div>
                </div>
              </div>

              {/* Card 3: Color Value */}
              <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-yellow-50 text-[#cca72f]">
                    <FiAward className="text-[16px]" />
                  </div>
                  <span className="text-neutral-500 font-bold text-[9px] uppercase tracking-wider">Color value</span>
                </div>
                <div>
                  <div className="text-[#cca72f] font-bold text-[14px] md:text-[15px] leading-tight font-heading">{chilli.colorValue}</div>
                  <div className="text-[10px] text-neutral-400 mt-1 font-body">ASTA Color Units</div>
                </div>
              </div>

              {/* Card 4: Stem Style */}
              <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-green-50 text-[#1f5e3b]">
                    <FiCheckCircle className="text-[16px]" />
                  </div>
                  <span className="text-neutral-500 font-bold text-[9px] uppercase tracking-wider">Stem cut</span>
                </div>
                <div>
                  <div className="text-[#1a1c1e] font-bold text-[14px] md:text-[15px] leading-tight font-heading">{chilli.stemType}</div>
                  <div className="text-[10px] text-neutral-400 mt-1 font-body">Processing Style</div>
                </div>
              </div>

              {/* Card 5: Moisture */}
              <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    <FiDroplet className="text-[16px]" />
                  </div>
                  <span className="text-neutral-500 font-bold text-[9px] uppercase tracking-wider">Moisture</span>
                </div>
                <div>
                  <div className="text-[#1a1c1e] font-bold text-[14px] md:text-[15px] leading-tight font-heading">{chilli.moisture}</div>
                  <div className="text-[10px] text-neutral-400 mt-1 font-body font-semibold text-blue-600">Export Standard</div>
                </div>
              </div>

              {/* Card 6: Origin */}
              <div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-neutral-50 text-neutral-600">
                    <FiMapPin className="text-[16px]" />
                  </div>
                  <span className="text-neutral-500 font-bold text-[9px] uppercase tracking-wider">Regional Origin</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[#1a1c1e] font-bold text-[14px] md:text-[15px] font-heading">Guntur, Andhra Pradesh</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5 font-body">Direct Farm Source Supply</div>
                  </div>
                  <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">Grown in India</span>
                </div>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#inquire" className="flex-1 bg-[#8f000d] text-white py-4 rounded font-bold hover:bg-[#72000a] transition-all active:scale-95 text-center uppercase tracking-wider text-[11px] shadow-lg shadow-[#8f000d]/10">
                Send Inquiry
              </a>
              <Link to="/contact" className="flex-1 border border-neutral-200 text-[#1a1c1e] py-4 rounded font-bold hover:bg-neutral-50 transition-all active:scale-95 text-center uppercase tracking-wider text-[11px]">
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. About Variety */}
      <section className="py-8 lg:py-10 bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] gap-6 lg:gap-8 items-center">

            {/* Left Column: Text Content */}
            <div className="text-left space-y-6">
              <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
                The {isByadgi ? "Pigmentation" : "Pungency"} King
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-justify">
                {chilli.description} Sourced directly from Guntur’s most fertile tracts, this selection represents the best quality Indian dry red chilli available for export.
              </p>
              <p className="font-body-md text-body-md text-[#5a403e] leading-relaxed text-justify">
                Its status as a top choice for spice industries and international markets stems from its consistent color retention, ideal skin thickness, and clean pod structure. It is predominantly used in the production of high-grade chilli powder, spice blends, and food processing lines. At Minha, we ensure every batch of {chilli.name} meets stringent global food safety standards, including FSSAI, APEDA, and ISO compliance.
              </p>
            </div>

            {/* Right Column: Transparent Product Image Showcase */}
            <div className="flex justify-center lg:justify-end items-center relative group">
              {/* Subtle background glow effect behind the transparent image */}
              <div className="absolute w-72 h-72 md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-tr from-[#8f000d]/8 to-[#cca72f]/8 blur-3xl pointer-events-none" />

              <img
                src={chilliPremium}
                alt="Premium Guntur Dry Red Chillies"
                className="relative z-10 max-h-[300px] md:max-h-[360px] lg:max-h-[400px] w-auto max-w-[90%] md:max-w-[85%] lg:max-w-[90%] object-contain drop-shadow-[0_20px_35px_rgba(143,0,13,0.20)]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Technical Specifications Table */}
      <section className="py-12 bg-white border-t border-b border-neutral-100">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-8">
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Technical Datasheet</span>
            <h3 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight text-center">Export Quality Specifications</h3>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] max-w-2xl mx-auto mt-3 text-center">
              Standardized laboratory testing parameters verified for direct trade bulk cargo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 font-body text-[14px]">

            {/* Column 1 */}
            <div className="space-y-6">

              {/* Item 1 */}
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div className="text-left">
                  <span className="font-semibold text-neutral-800 text-[14px] md:text-[15px] block">Scoville Heat Units (SHU)</span>
                  <span className="text-[11px] text-neutral-400 block mt-1">HPLC Analysis Method</span>
                </div>
                <span className="font-bold text-[#8f000d] text-[14px] md:text-[15px]">{chilli.heatLevel}</span>
              </div>

              {/* Item 2 */}
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div className="text-left">
                  <span className="font-semibold text-neutral-800 text-[14px] md:text-[15px] block">ASTA Color Value</span>
                  <span className="text-[11px] text-neutral-400 block mt-1">Spectrophotometry</span>
                </div>
                <span className="font-bold text-[#cca72f] text-[14px] md:text-[15px]">{chilli.colorValue}</span>
              </div>

              {/* Item 3 */}
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div className="text-left">
                  <span className="font-semibold text-neutral-800 text-[14px] md:text-[15px] block">Moisture Content</span>
                  <span className="text-[11px] text-neutral-400 block mt-1">Oven Drying Method</span>
                </div>
                <span className="font-bold text-neutral-800 text-[14px] md:text-[15px]">{chilli.moisture} Max</span>
              </div>

            </div>

            {/* Column 2 */}
            <div className="space-y-6">

              {/* Item 4 */}
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div className="text-left">
                  <span className="font-semibold text-neutral-800 text-[14px] md:text-[15px] block">Purity Standard</span>
                  <span className="text-[11px] text-neutral-400 block mt-1">Manual Sorting</span>
                </div>
                <span className="font-bold text-neutral-800 text-[14px] md:text-[15px]">99.5% Min</span>
              </div>

              {/* Item 5 */}
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div className="text-left">
                  <span className="font-semibold text-neutral-800 text-[14px] md:text-[15px] block">Foreign Matter</span>
                  <span className="text-[11px] text-neutral-400 block mt-1">Visual Inspection</span>
                </div>
                <span className="font-bold text-[#ba1a1a] text-[14px] md:text-[15px]">&lt; 1% Max</span>
              </div>

              {/* Item 6 */}
              <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                <div className="text-left">
                  <span className="font-semibold text-neutral-800 text-[14px] md:text-[15px] block">Shelf Life</span>
                  <span className="text-[11px] text-neutral-400 block mt-1">Proper Dry Storage</span>
                </div>
                <span className="font-bold text-neutral-800 text-[14px] md:text-[15px]">12 - 18 Months</span>
              </div>

            </div>

            {/* Packaging (Full Width) */}
            <div className="md:col-span-2 pt-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#FAF8F4] rounded-2xl border border-[#cca72f]/20">
                <div className="text-left mb-4 md:mb-0">
                  <span className="font-semibold text-neutral-800 text-[14px] md:text-[15px] block">Standard Export Packaging</span>
                  <span className="text-[11px] text-neutral-400 block mt-1">OEM & Bulk supply configurations</span>
                </div>
                <span className="text-[13px] font-semibold text-neutral-700 bg-white px-4 py-2.5 rounded-xl border border-neutral-100 text-left md:text-right leading-relaxed max-w-xl">
                  Standard Jute Bags (5kg/10kg/15kg/25kg), PP Bags, or Custom Vacuum-Sealed Cartons
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Applications Section */}
      <section className="py-12 bg-[#FAF8F4] border-t border-b border-neutral-100">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

          <div className="text-center mb-8">
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Industrial Supply Scope</span>
            <h3 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight text-center">Industrial Applications</h3>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] max-w-2xl mx-auto mt-3 text-center">
              Providing the raw material backbone for diverse food, spice processing, and extraction lines globally.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {applications.map((app, idx) => (
              <div key={idx} className="flex flex-col text-left space-y-5 relative">

                {/* Number Overlay */}
                <div className={`font-heading font-extrabold text-[72px] leading-none ${app.numColor} select-none`}>
                  {app.idx}
                </div>

                {/* Accent Top Border */}
                <div className={`border-t-2 ${app.accentLine} w-16 pt-3`} />

                <div>
                  <h4 className="font-heading font-bold text-[18px] text-[#1a1c1e] mb-3">{app.title}</h4>
                  <p className="text-neutral-500 font-body text-[13.5px] leading-relaxed mb-5">{app.desc}</p>
                </div>

                {/* Highlights Bullet List */}
                <ul className="space-y-2.5 border-t border-neutral-100 pt-5 text-[12.5px] font-body font-semibold text-[#1a1c1e] flex-grow">
                  {app.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2">
                      <span className="text-[#1f5e3b] text-[14px]">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Packaging & Export */}
      <section className="py-12 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-on-background text-white rounded-xl overflow-hidden flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 p-12 flex flex-col justify-center text-left">
              <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-white tracking-tight mb-6">Logistics & Global Export</h2>
              <ul className="space-y-4 font-body-md text-white/80">
                <li className="flex gap-4">
                  <span className="text-secondary-fixed flex-shrink-0">✓</span>
                  <span>Moisture-proof packaging to keep chillies dry during sea shipping.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary-fixed flex-shrink-0">✓</span>
                  <span>Holds 6.5 metric tons in a 20ft container and 14 metric tons in a 40ft container.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary-fixed flex-shrink-0">✓</span>
                  <span>We offer custom labels and packaging designed for your brand.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary-fixed flex-shrink-0">✓</span>
                  <span>Third-party quality checks (SGS or Intertek) are available if you ask.</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative min-h-[300px]">
              <img alt="Logistics Section" className="absolute inset-0 w-full h-full object-cover" src={chilliBowlTable} />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Related Varieties */}
      <section className="py-12 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight mb-8 text-center">Explore Other Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
            {relatedChillies.map((relatedChilli, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden ambient-shadow flex flex-col border border-outline-variant card-hover transition-all text-left">
                <Link to={`/varieties/${relatedChilli.id}`} className="block h-48 w-full overflow-hidden">
                  <img alt={relatedChilli.name} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" src={relatedChilli.image} />
                </Link>
                <div class="p-8">
                  <h4 className="font-headline-md text-headline-md mb-2">
                    <Link to={`/varieties/${relatedChilli.id}`} className="hover:text-primary transition-colors">
                      {relatedChilli.name}
                    </Link>
                  </h4>
                  <p className="text-on-surface-variant text-body-sm mb-6">{relatedChilli.description}</p>
                  <Link to={`/varieties/${relatedChilli.id}`} className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform uppercase text-sm">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Dynamic Inquiry Form */}
      <section id="inquire" className="py-12 px-6 md:px-12 bg-[#FAF8F4]">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row border border-neutral-100">
          {/* Left: Image Showcase */}
          <div className="md:w-5/12 relative min-h-[250px] md:min-h-full">
            <img
              src={chilliExportCta}
              alt="Minha Chilli Exports"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
          </div>

          {/* Right: Content & Action */}
          <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center text-left space-y-6">
            <div className="inline-block px-3 py-1 bg-[#8f000d]/10 text-[#8f000d] font-['Montserrat'] font-semibold text-[10px] uppercase tracking-[0.15em] rounded-md self-start">
              Direct Trade Supply
            </div>
            <h2 className="font-['Montserrat'] font-bold text-[28px] md:text-[34px] text-[#1a1c1e] leading-tight">
              Request Quote for <span className="text-[#8f000d] block mt-1">{chilli.name}</span>
            </h2>
            <p className="font-['Inter'] text-[#5a403e] text-[14px] leading-relaxed">
              Partner with India’s leading spice export desk. Request specialized bulk pricing, certificate reports (COA/Aflatoxin), and custom logistics parameters for this variety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`mailto:minhaimportsexports@gmail.com?subject=Enquiry for ${chilli.name}&body=Hello Minha Desk,%0D%0A%0D%0AI would like to request export details, certificates, and wholesale pricing for ${chilli.name}.`}
                className="bg-[#8f000d] text-white font-['Montserrat'] font-bold text-[12px] py-4 px-8 rounded-xl hover:bg-[#72000a] transition-all uppercase tracking-wider text-center shadow-lg shadow-[#8f000d]/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                Email Enquiry
              </a>
              <a
                href="tel:+918185867999"
                className="border border-[#8f000d]/20 text-[#8f000d] font-['Montserrat'] font-bold text-[12px] py-4 px-8 rounded-xl hover:bg-[#8f000d]/5 transition-all uppercase tracking-wider text-center hover:-translate-y-0.5 active:translate-y-0"
              >
                Call Export Desk
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ChilliDetail;