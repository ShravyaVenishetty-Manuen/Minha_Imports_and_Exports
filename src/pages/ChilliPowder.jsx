import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiAnchor, FiCompass, FiTruck, FiAward, FiCheck, FiLayers, FiTarget, FiActivity, FiShield, FiPackage } from 'react-icons/fi';
import { GiChiliPepper } from 'react-icons/gi';

const ChilliPowder = () => {
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          alt="Premium Chilli Powder Hero"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Pwhv_1Pe7m0cj8GkhYAEFGC1s95Hl2BSEP1FJjMy0XnVkWqIXY6ux1Kl0uInepg-XV5rFQ-XppBEmc5FA7covRwwQvElF3nyqa2P8ILWNyTvPaX9naEGrOiagugstnAcpD7CmW_QQXmptNMLwm35h41mbo8Kpt9MrKPp1WVsIoF6p0_8YDRNzou_XhznQiIO0tbqt4IUKO3Nojt5WSe7axGywQNRBIRTSAIxXgzpjk0sIgUlrKw1QPw4_opJq8XVq-r5f3dLPXg"
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto text-center space-y-6">
          <nav className="flex justify-center items-center gap-2 font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#cca72f] uppercase mb-2">
            <Link className="hover:text-white transition-colors" to="/">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Chilli Powder</span>
          </nav>
          <h1 className="font-['Montserrat'] font-bold text-[36px] sm:text-[46px] md:text-[56px] leading-[1.1] tracking-tight text-white">
            Premium Chilli Powder
          </h1>
          <p className="font-['Inter'] font-normal text-white/80 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Hygienically processed and export-grade chilli powder meticulously sourced from the heart of Guntur for global retail and industrial markets.
          </p>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="py-12 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#cca72f]/10 -z-10 rounded"></div>
            <img 
              className="w-full h-[400px] md:h-[450px] object-cover rounded shadow-xl" 
              alt="Hygienic Spice Processing" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHxCmZ91KCCawQL5X0I_EF6lp-EW_Dl3-XOnr0xGumz6jre1FdFlDUKY4VbHcBXkqddNZlZUwRfwDMFMogvGMEDo6mmCnJdmEFhCPphalN6iLMHrbmatcwzTidPcOieMfk36Gw0-dx3kh1q4GUxLIkzGdtnIrFqlym_AoL1dS-ydHWKP29uLWvJn2-RjJ3HgqxJfBVB2UT2iF2J86000f1ZsPc4cqsdA9jh5cbA-9TcWO5ydH6iQmpyqa1zSWXgfWbvlVxeLZohkU" 
            />
          </div>
          <div className="text-left space-y-6">
            <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#2c6a46] uppercase block">
              MANUFACTURING EXCELLENCE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary border-l-4 border-primary pl-6">
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
          </div>
        </div>
      </section>

      {/* 3. Product Showcase */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-[#8f000d]/10 text-[#8f000d] font-['Montserrat'] font-semibold text-[10px] uppercase tracking-[0.15em] rounded-md mb-3">
              Catalog Grades
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-heading text-center">Our Premium Export Grades</h2>
            <p className="text-neutral-500 font-body text-sm max-w-2xl mx-auto mt-2">
              Selected variants tailored for culinary excellence and industrial applications across the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="relative mb-6 overflow-hidden rounded-xl bg-neutral-50">
                  <span className="absolute top-4 right-4 bg-[#cca72f] text-white font-['Montserrat'] font-semibold text-[9px] tracking-wider px-3 py-1 z-10 rounded-md">GRADE A+</span>
                  <img 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl" 
                    alt="Premium Red Chilli Powder" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5VxluJfmzbKMtQDO7M9XKbCq1ClwfTkNkjAiCyJjJ-uD5nWqpIMLPsFfkdKs7yHAbTjUhefTGAMcCeMCk-moulsIG9hf7SRURTpPu1RskWlu_iY5U2tsfMYgdMjJIb-WwwvYwbOgMAyOqZcYcIpWFRZUeqBNZHLOGmgTmbEIQPUx6KWxdJbjext0NKvyNwthI54eoU06E-ZCXeyDF8Q_a8QlhUBTJbb3hSaWRuMTCouJyrK1LQKOIv0WA1Rq0ohBgR2ZyrODe3x0" 
                  />
                </div>
                <h3 className="font-heading font-bold text-[18px] text-[#1a1c1e] mb-2 text-left">Premium Red</h3>
                <p className="font-body text-[13.5px] text-neutral-500 leading-relaxed mb-4 text-left">High color value with medium heat. Perfect for general culinary use and retail packaging.</p>
              </div>
              <div>
                <div className="border-t border-neutral-100 pt-4 mb-6 flex flex-col gap-1.5 text-[12.5px] font-body text-neutral-600 text-left">
                  <div className="flex justify-between"><span className="text-neutral-400 font-medium">Packaging:</span> 1kg, 5kg, 25kg</div>
                  <div className="flex justify-between"><span className="text-neutral-400 font-medium">Heat Level:</span> Medium</div>
                </div>
                <a 
                  href="#inquire" 
                  className="block w-full py-3 text-center border border-[#8f000d] text-[#8f000d] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#8f000d] hover:text-white transition-all active:scale-95"
                >
                  Inquire
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="relative mb-6 overflow-hidden rounded-xl bg-neutral-50">
                  <span className="absolute top-4 right-4 bg-[#8f000d] text-white font-['Montserrat'] font-semibold text-[9px] tracking-wider px-3 py-1 z-10 rounded-md">EXTRA HOT</span>
                  <img 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl" 
                    alt="Teja Intense Chilli Powder" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUhvF9cAbSOzn9RopCFjbQiEatAGs8sWxJtPs0wcPNdWfzAXYEdsnbrU3cr_IDbqUsBE8fZyHTlIIcYc8Jw4EAu2aWVIQFkh3uIVcsJWfJJ3eK8WdyCKuxaotl1qEoIaEhvBgjGkTaoxqk894ewh5M6BEx-amctc_VMmq5fJJ59Or2zDg4_2vMkh0qfwgGmMTKu-wKaoaiAZmtwivKBXfEOZpbm4tBuJsuSYTXbRn_b4jOD72hBVfACVLP5JNvwC6rdQbH3AABFQM" 
                  />
                </div>
                <h3 className="font-heading font-bold text-[18px] text-[#1a1c1e] mb-2 text-left">Teja Intense</h3>
                <p className="font-body text-[13.5px] text-neutral-500 leading-relaxed mb-4 text-left">Derived from Teja S17, offering intense pungency and fiery red color for specialized recipes.</p>
              </div>
              <div>
                <div className="border-t border-neutral-100 pt-4 mb-6 flex flex-col gap-1.5 text-[12.5px] font-body text-neutral-600 text-left">
                  <div className="flex justify-between"><span className="text-neutral-400 font-medium">Packaging:</span> 25kg, 50kg Bags</div>
                  <div className="flex justify-between"><span className="text-neutral-400 font-medium">Heat Level:</span> High</div>
                </div>
                <a 
                  href="#inquire" 
                  className="block w-full py-3 text-center border border-[#8f000d] text-[#8f000d] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#8f000d] hover:text-white transition-all active:scale-95"
                >
                  Inquire
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="relative mb-6 overflow-hidden rounded-xl bg-neutral-50">
                  <span className="absolute top-4 right-4 bg-[#1f5e3b] text-white font-['Montserrat'] font-semibold text-[9px] tracking-wider px-3 py-1 z-10 rounded-md">MILD</span>
                  <img 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl" 
                    alt="Mild Kashmiri Type Powder" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkgCOCJ8n7LySIdXlUHQWrYpcNdISjLMAgfU8ReQJsfgy9kFLFr7IXrQjOTvRne1UIL5vUaf2BQMJRa2Li5VpOHLJZaEehD7xfNzV91n2l0ltTsNgzfgAv9QpkOO0ol11QOSsD0k69N4qe1Ut6JkzVm65ZLRMlfasHhj3iQtAz7Sb8qu-_SBNZNExt85Rg7vjxdw-w4Bgh3sgkUEun45AC99aQzJFxKGXSWzN8fLizHYcx8UnRXlCUpLG0ZcRIpzNBRAef_Qv3TZo" 
                  />
                </div>
                <h3 className="font-heading font-bold text-[18px] text-[#1a1c1e] mb-2 text-left">Mild Kashmiri Type</h3>
                <p className="font-body text-[13.5px] text-neutral-500 leading-relaxed mb-4 text-left">Rich, deep red color with very low heat. Ideal for color enhancement in food processing.</p>
              </div>
              <div>
                <div className="border-t border-neutral-100 pt-4 mb-6 flex flex-col gap-1.5 text-[12.5px] font-body text-neutral-600 text-left">
                  <div className="flex justify-between"><span className="text-neutral-400 font-medium">Packaging:</span> Custom Bulk</div>
                  <div className="flex justify-between"><span className="text-neutral-400 font-medium">Heat Level:</span> Low</div>
                </div>
                <a 
                  href="#inquire" 
                  className="block w-full py-3 text-center border border-[#8f000d] text-[#8f000d] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#8f000d] hover:text-white transition-all active:scale-95"
                >
                  Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technical Specifications */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/3 text-left flex flex-col justify-center">
            <div className="inline-block px-3 py-1 bg-[#8f000d]/10 text-[#8f000d] font-['Montserrat'] font-semibold text-[10px] uppercase tracking-[0.15em] rounded-md mb-3 self-start">
              Datasheet
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Technical Specifications</h2>
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
      <section className="py-12 bg-inverse-surface text-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-headline-lg text-headline-lg text-white mb-12">Seed-to-Shipment Quality Control</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            
            {/* Connection Line */}
            <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-neutral-700/60 z-[-1]" />

            {/* Step 1 */}
            <div className="flex flex-col items-center group text-center space-y-4">
              <div className="w-20 h-20 bg-primary/90 hover:bg-primary border-4 border-neutral-800 flex items-center justify-center rounded-full relative transition-all duration-300">
                <FiTarget className="text-[28px] text-white" />
                <div className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-[#cca72f] rounded-full flex items-center justify-center text-white font-bold text-xs">1</div>
              </div>
              <h4 className="font-heading font-bold text-[17px] text-white">Cleaning</h4>
              <p className="text-xs text-neutral-400 max-w-[180px] leading-relaxed">Stem-removal and magnetic sorting for purity.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center group text-center space-y-4">
              <div className="w-20 h-20 bg-primary/90 hover:bg-primary border-4 border-neutral-800 flex items-center justify-center rounded-full relative transition-all duration-300">
                <FiActivity className="text-[28px] text-white" />
                <div className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-[#cca72f] rounded-full flex items-center justify-center text-white font-bold text-xs">2</div>
              </div>
              <h4 className="font-heading font-bold text-[17px] text-white">Grinding</h4>
              <p className="text-xs text-neutral-400 max-w-[180px] leading-relaxed">Precision pulverizing with aroma lock tech.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center group text-center space-y-4">
              <div className="w-20 h-20 bg-primary/90 hover:bg-primary border-4 border-neutral-800 flex items-center justify-center rounded-full relative transition-all duration-300">
                <FiShield className="text-[28px] text-white" />
                <div className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-[#cca72f] rounded-full flex items-center justify-center text-white font-bold text-xs">3</div>
              </div>
              <h4 className="font-heading font-bold text-[17px] text-white">Lab Testing</h4>
              <p className="text-xs text-neutral-400 max-w-[180px] leading-relaxed">Rigorous SHU and ASTA verification per batch.</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center group text-center space-y-4">
              <div className="w-20 h-20 bg-primary/90 hover:bg-primary border-4 border-neutral-800 flex items-center justify-center rounded-full relative transition-all duration-300">
                <FiPackage className="text-[28px] text-white" />
                <div className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-[#cca72f] rounded-full flex items-center justify-center text-white font-bold text-xs">4</div>
              </div>
              <h4 className="font-heading font-bold text-[17px] text-white">Packaging</h4>
              <p className="text-xs text-neutral-400 max-w-[180px] leading-relaxed">Vacuum sealed or moisture-proof bulk packing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Packaging & Export */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-left space-y-6">
            <div className="inline-block px-3 py-1 bg-[#2c6a46]/10 text-[#2c6a46] font-['Montserrat'] font-semibold text-[10px] uppercase tracking-[0.15em] rounded-md self-start">
              Delivery Standards
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary border-l-4 border-brand-green pl-6">
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH-pMl05K_GJimbAm3g2d1bdwH_ZQ1PrV2JVrgzwFBotUQ2pbrfzaXZ1ILjbeyfzylS1zinAWAqoCBILgVBSNJ3Qm0gmEJasGjLv6gmxi-EV1nIN8vjRLItR5Hh02JdT602JePnbuaTjDP29ykNxXEcdUGsSOqo-ST2vFUxvr7vqV-DvV4r1hjQUXHjxIayKxdN3hwPDozjJcGbvDUgWPAjGDkhjvrf2KjhUgobTahEkO6rIm5qqTjqktJNQ2HeZWTSioHGZK-y7I" 
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
      <section className="py-12 bg-[#FAF8F4] border-t border-b border-neutral-100">
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
      <section id="inquire" className="relative py-20 overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          alt="Inquiry CTA Red Chilli Powder"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxVWr-X22A2uy8R8l86VWqrk6LutV80tBDlf-SxQqfwYsAUwxgaY3HThUezk8N2wUE6sYNEIQ491AaEyIMLEv3dSB3XiApWM9AjS3Idoj2jcDHvyGTHemKKjDa_lVPUdTY4UVh_QRm371bs1JX97m0ktKN6Rh8K_Za2O-WR1JDPfF3oDMkGUwu0QNT_wbvA3M8_SEGy67_25fKohq9O3v_tacpnlOFlh9frL1FBX6ErSOuNRuqYjyVH-9RZkcn-59_qVqTk4DWV4w"
        />
        <div className="relative z-20 w-full max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8">
          <h2 className="font-['Montserrat'] font-bold text-[28px] sm:text-[36px] md:text-[46px] leading-[1.2] tracking-tight text-white">
            Looking for Premium Chilli Powder Supply?
          </h2>
          <p className="font-[#Inter] font-normal text-white/80 text-[15px] sm:text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
            Partner with a trusted export leader. Get a customized quote for your specific grade and volume requirements today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a
              href="mailto:exports@minhaexports.com?subject=Enquiry for Premium Chilli Powder&body=Hello Minha Desk,%0D%0A%0D%0AI would like to request details and wholesale pricing for Chilli Powder."
              className="flex-1 bg-[#8f000d] text-white font-['Montserrat'] font-bold text-[12px] py-4 px-8 rounded-xl hover:bg-[#72000a] transition-all uppercase tracking-wider text-center shadow-lg shadow-[#8f000d]/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              Request a Quote
            </a>
            <a
              href="mailto:exports@minhaexports.com?subject=Request Chilli Powder Brochure"
              className="flex-1 border border-white text-white font-['Montserrat'] font-bold text-[12px] py-4 px-8 rounded-xl hover:bg-white/10 transition-all uppercase tracking-wider text-center hover:-translate-y-0.5 active:translate-y-0"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ChilliPowder;
