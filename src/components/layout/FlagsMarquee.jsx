import React from 'react';

const FlagsMarquee = () => {
  // Row 1 countries
  const row1Countries = [
    { name: "USA", code: "us" },
    { name: "UAE", code: "ae" },
    { name: "Vietnam", code: "vn" },
    { name: "Thailand", code: "th" },
    { name: "Mexico", code: "mx" },
    { name: "Nepal", code: "np" }
  ];

  // Row 2 countries
  const row2Countries = [
    { name: "China", code: "cn" },
    { name: "Malaysia", code: "my" },
    { name: "Indonesia", code: "id" },
    { name: "Sri Lanka", code: "lk" },
    { name: "Bangladesh", code: "bd" }
  ];

  // Triple the arrays to guarantee seamless infinite scroll
  const scrollRow1 = [...row1Countries, ...row1Countries, ...row1Countries];
  const scrollRow2 = [...row2Countries, ...row2Countries, ...row2Countries];

  return (
    <div className="relative w-full py-6 bg-[#FAF8F4] overflow-hidden z-20 flex flex-col gap-6">
      {/* Soft edge gradient masks for fade out */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FAF8F4] via-[#FAF8F4]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FAF8F4] via-[#FAF8F4]/80 to-transparent z-10 pointer-events-none" />

      {/* Row 1: Left to Right Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex gap-6">
          {scrollRow1.map((country, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 shrink-0 bg-white border border-black/5 rounded-2xl px-6 py-4 shadow-sm w-[220px]"
            >
              {/* Flag image */}
              <div className="w-[48px] h-[32px] rounded-[4px] overflow-hidden border border-black/10 shadow-sm bg-white shrink-0">
                <img
                  src={`https://flagcdn.com/w80/${country.code}.png`}
                  alt={`${country.name} Flag`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Country details */}
              <div className="flex flex-col text-left">
                <span className="font-['Montserrat'] font-bold text-[15px] text-[#1a1c1e] uppercase tracking-wide whitespace-nowrap">
                  {country.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right to Left Marquee (Reversed) */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex gap-6" style={{ animationDirection: 'reverse' }}>
          {scrollRow2.map((country, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 shrink-0 bg-white border border-black/5 rounded-2xl px-6 py-4 shadow-sm w-[220px]"
            >
              {/* Flag image */}
              <div className="w-[48px] h-[32px] rounded-[4px] overflow-hidden border border-black/10 shadow-sm bg-white shrink-0">
                <img
                  src={`https://flagcdn.com/w80/${country.code}.png`}
                  alt={`${country.name} Flag`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Country details */}
              <div className="flex flex-col text-left">
                <span className="font-['Montserrat'] font-bold text-[15px] text-[#1a1c1e] uppercase tracking-wide whitespace-nowrap">
                  {country.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlagsMarquee;
