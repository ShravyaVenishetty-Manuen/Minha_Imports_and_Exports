import React from 'react';
import fssaiLogo from '../../assets/3fssai-logo-png.png';
import fieoLogo from '../../assets/fieo-Photoroom.png';
import brcLogo from '../../assets/brc-food-certification-logo-Photoroom.png';

const Certifications = () => {
  const logos = [
    { src: fssaiLogo, alt: "FSSAI Logo", heightClass: "h-12 md:h-14" },
    { src: fieoLogo, alt: "FIEO Logo", heightClass: "h-20 md:h-24" },
    { src: brcLogo, alt: "BRC Global Standard Logo", heightClass: "h-12 md:h-14" }
  ];

  return (
    <section id="certifications" className="py-16 bg-white border-t border-black/[0.02]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Centered Heading */}
        <div className="text-center mb-10 space-y-2">
          <span className="font-['Montserrat'] font-bold text-[11px] tracking-[0.2em] text-[#8f000d] uppercase block">
            Quality & Compliance
          </span>
          <h2 className="font-['Montserrat'] font-bold text-[28px] md:text-[34px] leading-tight text-[#1a1c1e]">
            Our <span className="text-[#8f000d]">Certifications</span>
          </h2>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#cca72f] mx-auto mt-2" />
        </div>

        {/* Centered Logos Row (at the bottom of heading) */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20">
          {logos.map((logo, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-center transition-all duration-300 hover:scale-105 filter hover:brightness-105 bg-white p-3 rounded-xl border border-black/[0.01] shadow-[0_2px_10px_rgba(0,0,0,0.01)]"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={`${logo.heightClass} w-auto object-contain`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
