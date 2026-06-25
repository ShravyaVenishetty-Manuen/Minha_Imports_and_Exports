import React, { useEffect, useState, useRef } from 'react';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiAnchor, FiCompass, FiTruck, FiAward, FiLayers, FiTarget, FiActivity, FiShield, FiPackage } from 'react-icons/fi';
import { GiChiliPepper } from 'react-icons/gi';
import chilliPackagingKraft from '../assets/chilli-packaging-kraft.png';
import chilliProcessingFacility from '../assets/chilli-processing-facility.png';
import powderHeroBg from '../assets/powder-hero.png';

const ChilliPowder = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);


  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden">
      <SEO
        title="Premium Chilli Powder Exporter | Minha Imports & Exports"
        description="Bulk Chilli Powder Exporter from India. Custom SHU & ASTA grades, pesticide-free cold-ground chilli powder. Trusted Indian Chilli Supplier with FSSAI & APEDA certification."
        keywords="Chilli Powder Exporter India, Bulk Chilli Powder Supplier, Guntur Chilli Powder, Custom ASTA Grade Chilli Powder, Indian Chilli Powder Export"
        url="/powder"
        schemas={[{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/' },
            { '@type': 'ListItem', position: 2, name: 'Chilli Powder', item: 'https://shravyavenishetty-manuen.github.io/Minha_Imports_and_Exports/powder' },
          ],
        }, {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Premium Guntur Chilli Powder',
          description: 'Export-grade Guntur chilli powder, cold-ground for maximum color and pungency retention. Available in custom SHU & ASTA grades.',
          brand: { '@type': 'Brand', name: 'Minha Imports & Exports' },
          category: 'Spices & Seasonings',
          countryOfOrigin: 'IN',
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
            seller: { '@type': 'Organization', name: 'Minha Imports & Exports' },
          },
        }]}
      />

      {/* 1. Hero Section */}
      <section className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center text-white overflow-hidden bg-neutral-900 pt-20">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          ref={imgRef}
          alt="Guntur Chilli Processing and Pulverizing"
          className={`absolute inset-0 w-full h-full object-cover object-[center_35%] transition-opacity duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          src={powderHeroBg}
          onLoad={() => setImageLoaded(true)}
          fetchpriority="high"
          loading="eager"
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-6">
          <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1.5 font-['Montserrat'] font-bold text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] text-[#cca72f] uppercase mb-2 px-4">
            <Link className="hover:text-white transition-colors whitespace-nowrap" to="/">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white whitespace-normal text-center">Chilli Powder</span>
          </nav>
          <h1 className="font-['Montserrat'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            Premium Chilli Powder
          </h1>
          <p className="font-['Inter'] font-normal text-white/85 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Hygienically processed and export-grade chilli powder meticulously sourced from the heart of Guntur for global retail and industrial markets.
          </p>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#cca72f]/10 -z-10 rounded"></div>
            <img
              className="w-full h-[400px] md:h-[450px] object-cover rounded shadow-xl"
              alt="Hygienic Spice Processing"
              src={chilliProcessingFacility}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left space-y-6"
          >
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Manufacturing Excellence</span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Hygienic Production & Global Supply
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
              Our chilli powder is processed in our state-of-the-art facility, ensuring the highest standards of food safety. We utilize cold-grinding technology to preserve the natural oils, aroma, and pungency of the chillies, delivering a product that meets international phytosanitary requirements.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="font-heading font-extrabold text-[32px] text-[#2c6a46] leading-none">99.5%</div>
                <div className="font-['Montserrat'] font-semibold text-[10px] tracking-wider text-neutral-400 mt-2">PURITY LEVEL</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-[32px] text-[#2c6a46] leading-none">ISO 22000</div>
                <div className="font-['Montserrat'] font-semibold text-[10px] tracking-wider text-neutral-400 mt-2">CERTIFIED FACILITY</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Product Showcase */}
      <section className="py-10 md:py-14 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Catalog Grades</span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight text-center">Our Premium Export Grades</h2>
            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6] max-w-2xl mx-auto mt-3">
              Selected variants tailored for culinary excellence and industrial applications across the globe.
            </p>
          </div>

          {(() => {
            const powderGrades = [
              {
                badge: 'GRADE A+',
                badgeColor: 'bg-[#cca72f]',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5VxluJfmzbKMtQDO7M9XKbCq1ClwfTkNkjAiCyJjJ-uD5nWqpIMLPsFfkdKs7yHAbTjUhefTGAMcCeMCk-moulsIG9hf7SRURTpPu1RskWlu_iY5U2tsfMYgdMjJIb-WwwvYwbOgMAyOqZcYcIpWFRZUeqBNZHLOGmgTmbEIQPUx6KWxdJbjext0NKvyNwthI54eoU06E-ZCXeyDF8Q_a8QlhUBTJbb3hSaWRuMTCouJyrK1LQKOIv0WA1Rq0ohBgR2ZyrODe3x0',
                alt: 'Premium Red Chilli Powder',
                name: 'Premium Red',
                description: 'High color value with medium heat. Perfect for general culinary use and retail packaging.',
                packaging: '1kg, 5kg, 25kg',
                heat: 'Medium',
              },
              {
                badge: 'EXTRA HOT',
                badgeColor: 'bg-[#8f000d]',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUhvF9cAbSOzn9RopCFjbQiEatAGs8sWxJtPs0wcPNdWfzAXYEdsnbrU3cr_IDbqUsBE8fZyHTlIIcYc8Jw4EAu2aWVIQFkh3uIVcsJWfJJ3eK8WdyCKuxaotl1qEoIaEhvBgjGkTaoxqk894ewh5M6BEx-amctc_VMmq5fJJ59Or2zDg4_2vMkh0qfwgGmMTKu-wKaoaiAZmtwivKBXfEOZpbm4tBuJsuSYTXbRn_b4jOD72hBVfACVLP5JNvwC6rdQbH3AABFQM',
                alt: 'Teja Intense Chilli Powder',
                name: 'Teja Intense',
                description: 'Derived from Teja S17, offering intense pungency and fiery red color for specialized recipes.',
                packaging: '25kg, 50kg Bags',
                heat: 'High',
              },
              {
                badge: 'MILD',
                badgeColor: 'bg-[#1f5e3b]',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkgCOCJ8n7LySIdXlUHQWrYpcNdISjLMAgfU8ReQJsfgy9kFLFr7IXrQjOTvRne1UIL5vUaf2BQMJRa2Li5VpOHLJZaEehD7xfNzV91n2l0ltTsNgzfgAv9QpkOO0ol11QOSsD0k69N4qe1Ut6JkzVm65ZLRMlfasHhj3iQtAz7Sb8qu-_SBNZNExt85Rg7vjxdw-w4Bgh3sgkUEun45AC99aQzJFxKGXSWzN8fLizHYcx8UnRXlCUpLG0ZcRIpzNBRAef_Qv3TZo',
                alt: 'Mild Kashmiri Type Powder',
                name: 'Mild Kashmiri Type',
                description: 'Rich, deep red color with very low heat. Ideal for color enhancement in food processing.',
                packaging: 'Custom Bulk',
                heat: 'Low',
              },
            ];

            return (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {powderGrades.map((grade, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
                    <div>
                      <div className="relative mb-6 overflow-hidden rounded-xl bg-neutral-50">
                        <span className={`absolute top-4 right-4 ${grade.badgeColor} text-white font-['Montserrat'] font-semibold text-[9px] tracking-wider px-3 py-1 z-10 rounded-md`}>
                          {grade.badge}
                        </span>
                        <img
                          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                          alt={grade.alt}
                          src={grade.img}
                        />
                      </div>
                      <h3 className="font-heading font-bold text-[18px] text-[#1a1c1e] mb-2 text-left">{grade.name}</h3>
                      <p className="font-body text-[13.5px] text-neutral-500 leading-relaxed mb-4 text-left">{grade.description}</p>
                    </div>
                    <div>
                      <div className="border-t border-neutral-100 pt-4 mb-6 flex flex-col gap-1.5 text-[12.5px] font-body text-neutral-600 text-left">
                        <div className="flex justify-between"><span className="text-neutral-400 font-medium">Packaging:</span> {grade.packaging}</div>
                        <div className="flex justify-between"><span className="text-neutral-400 font-medium">Heat Level:</span> {grade.heat}</div>
                      </div>
                      <Link
                        to="/contact"
                        className="block w-full py-3 text-center border border-[#8f000d] text-[#8f000d] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#8f000d] hover:text-white transition-all active:scale-95"
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>


      {/* 4. Technical Specifications */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/3 text-left flex flex-col justify-center">
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Datasheet</span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight mb-6">Technical Specifications</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              Detailed chemical and physical analysis parameters to ensure consistency for bulk buyers and importers.
            </p>
            <div className="bg-[#FAF8F4] p-5 rounded-2xl border border-[#cca72f]/20 flex items-center gap-4">
              <div className="p-3 bg-white text-[#cca72f] rounded-xl border border-neutral-100 shadow-sm flex-shrink-0">
                <FiCheckCircle className="text-[20px]" />
              </div>
              <div className="text-left">
                <div className="font-heading font-bold text-[14px] text-neutral-800">Lab Tested</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">Every batch comes with a Certificate of Analysis (COA)</div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="overflow-hidden border border-neutral-100 rounded-2xl shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#FAF8F4] border-b border-neutral-100 font-['Montserrat'] font-bold text-[10px] tracking-wider text-neutral-400 uppercase">
                  <tr>
                    <th className="p-5">PARAMETER</th>
                    <th className="p-5">EXPORT STANDARD</th>
                  </tr>
                </thead>
                <tbody className="font-body text-[13.5px] text-neutral-700">
                  <tr className="hover:bg-neutral-50/50 transition-colors border-b border-neutral-100">
                    <td className="p-5 font-semibold text-neutral-800">Color (ASTA)</td>
                    <td className="p-5">60 - 120 ASTA (As per requirement)</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors border-b border-neutral-100">
                    <td className="p-5 font-semibold text-neutral-800">Pungency (SHU)</td>
                    <td className="p-5">15,000 to 90,000 SHU</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors border-b border-neutral-100">
                    <td className="p-5 font-semibold text-neutral-800">Moisture Content</td>
                    <td className="p-5">&lt; 10% Maximum</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors border-b border-neutral-100">
                    <td className="p-5 font-semibold text-neutral-800">Physical Purity</td>
                    <td className="p-5">99.5% Minimum</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors border-b border-neutral-100">
                    <td className="p-5 font-semibold text-neutral-800">Shelf Life</td>
                    <td className="p-5">12 Months (stored in cool dry place)</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-5 font-semibold text-neutral-800">Microbiological</td>
                    <td className="p-5 text-[#2c6a46] font-bold">Steam Treated (Optional)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Processing & Quality */}
      <section className="py-10 md:py-14 px-6 md:px-12 max-w-[1280px] mx-auto z-10 relative">
        <div className="relative rounded-3xl overflow-hidden py-16 px-6 md:px-12 text-center text-white shadow-2xl border border-white/[0.05] bg-gradient-to-br from-[#121315] via-[#2A080C] to-[#121315]">
          <div className="inline-block px-3 py-1 bg-[#cca72f]/10 border border-[#cca72f]/30 text-[#cca72f] font-['Montserrat'] font-semibold text-[10px] uppercase tracking-[0.15em] rounded-md mb-4">
            Quality Assurance Flow
          </div>
          <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-white mb-12">
            Seed-to-Shipment Quality Control
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left relative z-10">
            {/* Step 1 */}
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/15 p-6 rounded-2xl relative overflow-hidden group hover:bg-white/[0.07] hover:border-[#cca72f]/80 transition-all duration-500 flex flex-col justify-between min-h-[200px] hover:shadow-[0_20px_40px_-15px_rgba(202,167,47,0.25)]">
              <div className="flex items-center justify-between w-full mb-4 relative z-10">
                <div className="p-3 bg-[#cca72f] text-[#121315] rounded-xl shadow-md shadow-[#cca72f]/10 group-hover:scale-110 transition-transform duration-300">
                  <FiTarget className="text-[20px]" />
                </div>
                <span className="text-[10px] font-heading font-extrabold tracking-widest text-[#cca72f] bg-[#cca72f]/10 border border-[#cca72f]/30 px-3 py-1 rounded-full">
                  STEP 01
                </span>
              </div>
              <div className="relative z-10">
                <h4 className="font-heading font-bold text-[17px] text-white mb-2 group-hover:text-[#cca72f] transition-colors">Cleaning</h4>
                <p className="text-[12.5px] text-neutral-300 leading-relaxed">
                  Stem-removal and magnetic sorting for purity.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#cca72f]/20 to-[#cca72f] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
            </div>

            {/* Step 2 */}
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/15 p-6 rounded-2xl relative overflow-hidden group hover:bg-white/[0.07] hover:border-[#cca72f]/80 transition-all duration-500 flex flex-col justify-between min-h-[200px] hover:shadow-[0_-20px_40px_-15px_rgba(202,167,47,0.25)]">
              <div className="flex items-center justify-between w-full mb-4 relative z-10">
                <div className="p-3 bg-[#cca72f] text-[#121315] rounded-xl shadow-md shadow-[#cca72f]/10 group-hover:scale-110 transition-transform duration-300">
                  <FiActivity className="text-[20px]" />
                </div>
                <span className="text-[10px] font-heading font-extrabold tracking-widest text-[#cca72f] bg-[#cca72f]/10 border border-[#cca72f]/30 px-3 py-1 rounded-full">
                  STEP 02
                </span>
              </div>
              <div className="relative z-10">
                <h4 className="font-heading font-bold text-[17px] text-white mb-2 group-hover:text-[#cca72f] transition-colors">Grinding</h4>
                <p className="text-[12.5px] text-neutral-300 leading-relaxed">
                  Precision pulverizing with aroma lock tech.
                </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#cca72f]/20 to-[#cca72f] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right z-10" />
            </div>

            {/* Step 3 */}
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/15 p-6 rounded-2xl relative overflow-hidden group hover:bg-white/[0.07] hover:border-[#cca72f]/80 transition-all duration-500 flex flex-col justify-between min-h-[200px] hover:shadow-[-20px_0_40px_-15px_rgba(202,167,47,0.25)]">
              <div className="flex items-center justify-between w-full mb-4 relative z-10">
                <div className="p-3 bg-[#cca72f] text-[#121315] rounded-xl shadow-md shadow-[#cca72f]/10 group-hover:scale-110 transition-transform duration-300">
                  <FiShield className="text-[20px]" />
                </div>
                <span className="text-[10px] font-heading font-extrabold tracking-widest text-[#cca72f] bg-[#cca72f]/10 border border-[#cca72f]/30 px-3 py-1 rounded-full">
                  STEP 03
                </span>
              </div>
              <div className="relative z-10">
                <h4 className="font-heading font-bold text-[17px] text-white mb-2 group-hover:text-[#cca72f] transition-colors">Lab Testing</h4>
                <p className="text-[12.5px] text-neutral-300 leading-relaxed">
                  Rigorous SHU and ASTA verification per batch.
                </p>
              </div>
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#cca72f]/20 to-[#cca72f] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-10" />
            </div>

            {/* Step 4 */}
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/15 p-6 rounded-2xl relative overflow-hidden group hover:bg-white/[0.07] hover:border-[#cca72f]/80 transition-all duration-500 flex flex-col justify-between min-h-[200px] hover:shadow-[20px_0_40px_-15px_rgba(202,167,47,0.25)]">
              <div className="flex items-center justify-between w-full mb-4 relative z-10">
                <div className="p-3 bg-[#cca72f] text-[#121315] rounded-xl shadow-md shadow-[#cca72f]/10 group-hover:scale-110 transition-transform duration-300">
                  <FiPackage className="text-[20px]" />
                </div>
                <span className="text-[10px] font-heading font-extrabold tracking-widest text-[#cca72f] bg-[#cca72f]/10 border border-[#cca72f]/30 px-3 py-1 rounded-full">
                  STEP 04
                </span>
              </div>
              <div className="relative z-10">
                <h4 className="font-heading font-bold text-[17px] text-white mb-2 group-hover:text-[#cca72f] transition-colors">Packaging</h4>
                <p className="text-[12.5px] text-neutral-300 leading-relaxed">
                  Vacuum sealed or moisture-proof bulk packing.
                </p>
              </div>
              <div className="absolute right-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#cca72f]/20 to-[#cca72f] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Packaging & Export */}
      <section className="py-10 md:py-14 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-left space-y-6">
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase inline-block mb-3">Delivery Standards</span>
            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Global Packaging & Logistics
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We understand the rigors of international shipping. Our packaging is designed to withstand humidity and temperature fluctuations, ensuring your product arrives in pristine condition.
            </p>
            <ul className="space-y-3.5 text-[14px] text-neutral-700 font-body">
              <li className="flex items-center gap-3">
                <FiCheckCircle className="text-[#2c6a46] text-[18px] flex-shrink-0" />
                <span>PP/BOPP Bags (25kg / 50kg) with inner liners</span>
              </li>
              <li className="flex items-center gap-3">
                <FiCheckCircle className="text-[#2c6a46] text-[18px] flex-shrink-0" />
                <span>Paper bags with PE coating for eco-friendly premium retail</span>
              </li>
              <li className="flex items-center gap-3">
                <FiCheckCircle className="text-[#2c6a46] text-[18px] flex-shrink-0" />
                <span>Palletization and Shrink-wrap for 20ft/40ft containers</span>
              </li>
              <li className="flex items-center gap-3">
                <FiCheckCircle className="text-[#2c6a46] text-[18px] flex-shrink-0" />
                <span>Custom labeling as per destination country regulations</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F4] p-8 rounded-3xl border border-neutral-100">
            <img
              className="w-full h-72 object-cover rounded-2xl shadow-sm mb-6"
              alt="Global Supply Warehouse"
              src={chilliPackagingKraft}
            />
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-4 bg-white rounded-xl border border-neutral-100 flex flex-col items-center justify-center space-y-1.5 shadow-sm">
                <FiAnchor className="text-[#8f000d] text-[20px]" />
                <div className="text-[10px] font-bold tracking-wider text-neutral-600">SEA FREIGHT</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-neutral-100 flex flex-col items-center justify-center space-y-1.5 shadow-sm">
                <FiCompass className="text-[#8f000d] text-[20px]" />
                <div className="text-[10px] font-bold tracking-wider text-neutral-600">AIR CARGO</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-neutral-100 flex flex-col items-center justify-center space-y-1.5 shadow-sm">
                <FiTruck className="text-[#8f000d] text-[20px]" />
                <div className="text-[10px] font-bold tracking-wider text-neutral-600">ROAD INLAND</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Trust Features */}
      <section className="py-10 md:py-14 bg-surface border-t border-b border-neutral-100">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3.5 bg-white rounded-2xl shadow-sm text-primary border border-neutral-100">
                <GiChiliPepper className="text-[24px]" />
              </div>
              <h5 className="font-heading font-bold text-[14px] text-neutral-800">Rich Color</h5>
              <p className="text-[11.5px] text-neutral-400 leading-normal">Consistent ASTA values</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3.5 bg-white rounded-2xl shadow-sm text-primary border border-neutral-100">
                <FiAward className="text-[24px]" />
              </div>
              <h5 className="font-heading font-bold text-[14px] text-neutral-800">Consistent Heat</h5>
              <p className="text-[11.5px] text-neutral-400 leading-normal">Uniform SHU levels</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3.5 bg-white rounded-2xl shadow-sm text-primary border border-neutral-100">
                <FiShield className="text-[24px]" />
              </div>
              <h5 className="font-heading font-bold text-[14px] text-neutral-800">Pesticide Free</h5>
              <p className="text-[11.5px] text-neutral-400 leading-normal">Safe & Natural processing</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3.5 bg-white rounded-2xl shadow-sm text-primary border border-neutral-100">
                <FiLayers className="text-[24px]" />
              </div>
              <h5 className="font-heading font-bold text-[14px] text-neutral-800">Bulk Supply</h5>
              <p className="text-[11.5px] text-neutral-400 leading-normal">Up to 100 MT per month</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Inquiry CTA */}
      <section id="inquire" className="py-16 relative bg-[#FAF8F4] w-full z-10 border-t border-neutral-100/40">

        {/* Subtle center glow behind the card */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#cca72f]/10 to-[#8f000d]/10 rounded-full blur-[80px] pointer-events-none select-none z-0"></div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <div className="relative rounded-[2.5rem] overflow-hidden text-white py-10 md:py-14 px-6 md:px-12 shadow-[0_35px_80px_rgba(0,0,0,0.18)] border border-white/10 bg-neutral-950/20 backdrop-blur-md">

            {/* Blurred Red Chilli Powder background inside card */}
            <div className="absolute inset-0 bg-neutral-950/50 z-10"></div>
            <img
              alt="Blurred Red Chilli Powder Background"
              className="absolute inset-0 w-full h-full object-cover filter blur-[6px] scale-105 opacity-70"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxVWr-X22A2uy8R8l86VWqrk6LutV80tBDlf-SxQqfwYsAUwxgaY3HThUezk8N2wUE6sYNEIQ491AaEyIMLEv3dSB3XiApWM9AjS3Idoj2jcDHvyGTHemKKjDa_lVPUdTY4UVh_QRm371bs1JX97m0ktKN6Rh8K_Za2O-WR1JDPfF3oDMkGUwu0QNT_wbvA3M8_SEGy67_25fKohq9O3v_tacpnlOFlh9frL1FBX6ErSOuNRuqYjyVH-9RZkcn-59_qVqTk4DWV4w"
            />

            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Column: Brand Quote (lg:col-span-5) */}
              <div className="relative space-y-4 text-center lg:text-left lg:border-r lg:border-white/10 lg:pr-8 xl:pr-12 lg:col-span-5 w-full z-10">
                <span className="absolute -top-10 -left-2 text-white/10 text-8xl font-serif select-none pointer-events-none hidden lg:inline-block">
                  “
                </span>
                <blockquote className="font-['Montserrat'] font-medium italic text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-white/95 relative z-10">
                  "Our chilli powder is processed utilizing advanced low-temperature grinding to lock in the volatile oils, natural pungency, and vivid color values that global food industries demand."
                </blockquote>
                <div className="font-['Montserrat'] font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-[#cca72f] relative z-10">
                  — The Minha Pulverizing Desk
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
                  Bulk Powder Sourcing
                </div>

                <h2 className="font-['Montserrat'] font-bold text-[22px] sm:text-[26px] md:text-[32px] leading-[1.2] text-white tracking-tight">
                  Looking for Premium <br className="hidden sm:inline" /> Chilli Powder Supply?
                </h2>
                <p className="font-['Inter'] font-normal text-white/80 text-[13.5px] leading-relaxed">
                  Partner with a trusted export leader. Get a customized quote for your specific grade and volume requirements today.
                </p>

                {/* Feature Glass Chips */}
                <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-1">
                  {[
                    "Low-Temp Cold Grinding",
                    "Pesticide & Aflatoxin Free",
                    "Custom SHU & ASTA Grading"
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
                  <a
                    href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20would%20like%20to%20request%20a%20wholesale%20quote%20for%20your%20premium%20Guntur%20chilli%20powder.%20Please%20share%20pricing%2C%20grades%2C%20and%20MOQ%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#cca72f] text-[#121315] font-['Montserrat'] font-bold text-[11px] sm:text-[11.5px] py-[12px] px-[22px] rounded-full shadow-lg shadow-[#cca72f]/20 hover:bg-white hover:text-black hover:border-white hover:-translate-y-[-2px] active:scale-98 transition-all duration-300 uppercase tracking-wider text-center whitespace-nowrap cursor-pointer"
                  >
                    Request a Quote
                  </a>
                  <a
                    href="https://wa.me/919985728555?text=Hi%20Minha%20Imports%20%26%20Exports%2C%20I%20would%20like%20to%20request%20a%20product%20brochure%20for%20your%20premium%20Guntur%20chilli%20powder.%20Please%20send%20the%20catalogue%20and%20certification%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-['Montserrat'] font-bold text-[11px] sm:text-[11.5px] py-[12px] px-[22px] rounded-full shadow-md active:scale-98 transition-all duration-300 uppercase tracking-wider text-center whitespace-nowrap cursor-pointer"
                  >
                    Download Brochure
                  </a>
                </div>

                <div className="text-[8px] font-['Montserrat'] tracking-widest text-white/40 uppercase pt-2">
                  Export Desk Response Guarantee: Within 12 Hours
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChilliPowder;