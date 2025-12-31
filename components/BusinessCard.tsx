
import React from 'react';

const BusinessCard: React.FC = () => {
  // Business data updated with user-provided details
  const business = {
    phone: "+918302817703",
    whatsapp: "918302817703",
    instagram: "sawiya_sty.general.s.dhmnod",
    location: "Dhamnod, Madhya Pradesh",
    mapsUrl: "https://www.google.com/maps/search/6F7F%2BM6+Dhamnod,+Madhya+Pradesh",
    website: "https://www.google.com/search?q=Sanvaliya+Seth+Dhamnod" 
  };

  return (
    <div className="relative w-full aspect-[1.65/1] sm:h-[240px] mx-auto group select-none">
      {/* Deep elegant shadow */}
      <div className="absolute inset-4 bg-stone-900/10 blur-3xl rounded-xl -z-10"></div>

      {/* Main Card Container - Cream Base */}
      <div className="absolute inset-0 bg-[#F9F5F0] rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.06)] overflow-hidden border border-[#E8E2D9] transition-all duration-500">
        
        {/* Subtle Paper Grain Texture */}
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none z-0" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        {/* Top Mandala Motif */}
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] opacity-[0.08] pointer-events-none z-10 group-hover:opacity-[0.12] transition-opacity duration-1000">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rotate-[15deg]">
            <circle cx="100" cy="100" r="40" stroke="#4A443D" strokeWidth="0.5" strokeDasharray="2 2" />
            {[...Array(12)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 30} 100 100)`}>
                <path d="M100 20C110 40 120 60 100 80C80 60 90 40 100 20Z" fill="#4A443D" />
                <circle cx="100" cy="50" r="3" fill="#4A443D" />
                <path d="M100 10L105 25H95L100 10Z" fill="#4A443D" />
              </g>
            ))}
            <circle cx="100" cy="100" r="70" stroke="#4A443D" strokeWidth="0.2" />
          </svg>
        </div>

        {/* Side Decorative Element */}
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-[#A797B2]/5 border-l border-[#A797B2]/10 flex flex-col justify-around py-4 opacity-50 group-hover:opacity-100 transition-opacity">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-center">
              <i className="fa-solid fa-bahai text-[10px] text-[#A797B2]"></i>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col p-8 sm:p-10 z-20">
          
          {/* Header Branding */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-serif font-light tracking-[0.1em] text-[#262320] uppercase">
              Sanvaliya <span className="font-bold text-[#A797B2]">Seth</span>
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-[0.5px] w-8 bg-[#D3C9BC]"></div>
              <p className="text-[9px] font-bold text-[#635C56] uppercase tracking-[0.4em]">
                Exquisite Retail Experience
              </p>
            </div>
          </div>

          {/* Core Business Description */}
          <div className="mt-6 sm:mt-8 max-w-[75%] border-l border-[#E8E2D9] pl-5">
            <p className="text-[11px] sm:text-[13px] text-[#423D39] font-bold leading-relaxed italic">
              Stationery &middot; Korean Collections &middot; Bespoke Gifts &middot; Toys
            </p>
          </div>

          {/* Functional Icon Tray */}
          <div className="mt-auto flex items-center justify-between gap-4 pt-4">
            <div className="flex items-center gap-3 sm:gap-4 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/90 shadow-sm">
              {/* Call Icon */}
              <a href={`tel:${business.phone}`} title="Call Us" className="text-[#423D39] hover:text-sky-700 transition-all hover:scale-125 active:scale-90">
                <i className="fa-solid fa-phone text-sm"></i>
              </a>
              
              <div className="w-[1px] h-4 bg-[#D3C9BC]"></div>

              {/* WhatsApp Icon */}
              <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noopener noreferrer" title="WhatsApp" className="text-[#423D39] hover:text-emerald-700 transition-all hover:scale-125 active:scale-90">
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </a>

              <div className="w-[1px] h-4 bg-[#D3C9BC]"></div>

              {/* Instagram Icon */}
              <a href={business.instagram.startsWith('http') ? business.instagram : `https://www.instagram.com/${business.instagram}`} target="_blank" rel="noopener noreferrer" title="Instagram" className="text-[#423D39] hover:text-rose-600 transition-all hover:scale-125 active:scale-90">
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>

              <div className="w-[1px] h-4 bg-[#D3C9BC]"></div>

              {/* Location Icon */}
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" title="View Location" className="text-[#423D39] hover:text-red-600 transition-all hover:scale-125 active:scale-90">
                <i className="fa-solid fa-location-dot text-sm"></i>
              </a>

              <div className="w-[1px] h-4 bg-[#D3C9BC]"></div>

              {/* Webpage Icon */}
              <a href={business.website} target="_blank" rel="noopener noreferrer" title="Visit Website" className="text-[#423D39] hover:text-indigo-700 transition-all hover:scale-125 active:scale-90">
                <i className="fa-solid fa-globe text-sm"></i>
              </a>
            </div>

            {/* Simple Location Text Label */}
            <div className="hidden sm:block text-right">
              <p className="text-[10px] font-bold text-[#262320] tracking-widest uppercase mb-0.5">Dhamnod</p>
              <p className="text-[8px] font-bold text-[#635C56] uppercase">Madhya Pradesh</p>
            </div>
          </div>
        </div>

        {/* Subtle Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8E2D9] to-transparent"></div>
      </div>
      
      {/* Reflection Shadow */}
      <div className="absolute -bottom-8 left-12 right-12 h-12 bg-stone-900/[0.04] blur-2xl rounded-full -z-20"></div>
    </div>
  );
};

export default BusinessCard;
