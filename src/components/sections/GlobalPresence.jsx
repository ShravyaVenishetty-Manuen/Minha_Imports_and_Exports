import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import globalMapFlat from '../../assets/global-map-flat.png';

const GlobalPresence = () => {
  const stats = [
    {
      value: "50+",
      label: "Global Clients",
      colorClass: "text-[#B22222]"
    },
    {
      value: "5000+",
      label: "MT Annual Capacity",
      colorClass: "text-[#1F5E3B]"
    },
    {
      value: "100%",
      label: "Export Quality",
      colorClass: "text-[#C8A96A]"
    },
    {
      value: "14+",
      label: "Chilli Varieties",
      colorClass: "text-[#B22222]"
    }
  ];

  return (
    <section id="global-presence" className="pt-6 md:pt-12 pb-10 md:pb-24 px-6 md:px-12 bg-[#FAF8F4] relative overflow-hidden">

      {/* Decorative leaf outlines in background */}
      <div className="absolute top-12 left-6 w-[200px] h-[200px] opacity-[0.02] text-[#1F5E3B] pointer-events-none select-none z-0 hidden lg:block">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,90 C25,65 45,55 85,15 C60,45 55,65 10,90 Z" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Main Content Row: Info vs Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading & Button */}
          <div className="lg:col-span-5 space-y-6 text-left pt-4 lg:pt-12">
            <span className="font-['Montserrat'] font-bold text-[12px] tracking-[0.2em] text-[#B22222] uppercase block">
              Global Footprint
            </span>

            <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[40px] leading-[1.2] text-[#1a1c1e] tracking-tight">
              Taking <span className="text-[#8f000d]">Guntur's Finest</span> to the World
            </h2>

            <p className="font-['Inter'] font-normal text-[#5a403e] text-[15px] md:text-[16px] leading-[1.6]">
              From Guntur to global markets, we ensure quality, consistency and trust in every shipment.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#1F5E3B] text-white text-xs font-['Montserrat'] font-bold py-3.5 px-8 rounded-lg shadow-md hover:bg-[#17482d] hover:translate-y-[-2px] active:scale-95 transition-all duration-300 uppercase tracking-wider"
              >
                Contact Us
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#5a403e]/10 my-4" />

            {/* Key Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <span className="font-['Montserrat'] font-semibold text-[13px] text-[#1a1c1e] block mb-1">
                  Purity Guaranteed
                </span>
                <span className="font-['Inter'] text-[12px] text-[#5a403e]/80 leading-relaxed block">
                  Carefully selected crops processed in hygienic environments to preserve the rich, natural heat and color.
                </span>
              </div>
              <div>
                <span className="font-['Montserrat'] font-semibold text-[13px] text-[#1a1c1e] block mb-1">
                  Reliable Supply
                </span>
                <span className="font-['Inter'] text-[12px] text-[#5a403e]/80 leading-relaxed block">
                  Consistent year-round availability backed by robust cold storage facilities to support large-scale orders.
                </span>
              </div>
            </div>


          </div>

          {/* Right Column: Flat Dotted Map with routes */}
          <div className="lg:col-span-7 flex flex-col items-center gap-6 -mt-6 lg:-mt-16">
            <div className="relative w-full max-w-[650px] h-auto flex items-center justify-center">
              <img
                src={globalMapFlat}
                alt="Global Footprint Map"
                className="w-full h-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.02)]"
                draggable="false"
              />
            </div>

            {/* 4 Cards at the map bottom */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-[650px] relative z-20 -mt-16 sm:-mt-32 lg:-mt-48">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-black/[0.03] rounded-xl p-4 md:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:translate-y-[-2px] transition-all duration-300 flex flex-col items-center justify-center text-center"
                >
                  <span className={`font-['Montserrat'] font-extrabold text-[22px] md:text-[26px] leading-tight ${stat.colorClass}`}>
                    {stat.value}
                  </span>
                  <span className="font-['Inter'] font-semibold text-[#5a403e]/70 text-[10px] md:text-[11px] mt-1.5 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GlobalPresence;
