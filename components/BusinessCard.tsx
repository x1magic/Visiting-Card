
import React from 'react';

const BusinessCard: React.FC = () => {
  return (
    <div className="relative w-full aspect-[1.7/1] sm:h-[240px] mx-auto select-none">
      {/* Main Card Container - Sharper border radius (rounded-lg) */}
      <div className="absolute inset-0 bg-white rounded-lg shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.12)] group noise">
        
        {/* Refined Gradient Background */}
        <div className="absolute inset-0 z-0">
          {/* Top Left Blue Flare */}
          <div className="absolute -top-1/4 -left-1/4 w-full h-full bg-[#e0f2fe] rounded-full blur-[80px] opacity-40"></div>
          {/* Bottom Right Pink Flare */}
          <div className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-[#ffe4e6] rounded-full blur-[80px] opacity-40"></div>
          {/* Center White Clean Area */}
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        {/* Card Border Accent */}
        <div className="absolute inset-[1px] border border-white/60 rounded-[7px] z-10 pointer-events-none"></div>

        {/* Content Layout */}
        <div className="relative h-full flex flex-col p-6 sm:p-8 z-20">
          
          {/* Header Section */}
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-800 leading-none">
                SANVALIYA <span className="text-sky-500/90">SETH</span>
              </h1>
              <div className="flex items-center gap-2">
                <div className="h-px w-6 bg-sky-200"></div>
                <p className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                  Premium General Store
                </p>
              </div>
            </div>
            
            {/* Minimalist Logo Box */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 border border-slate-100 bg-white/80 rounded-md flex items-center justify-center shadow-sm">
              <i className="fa-solid fa-gem text-sky-400/80 text-lg"></i>
            </div>
          </div>

          {/* Description - Sophisticated Typography */}
          <div className="mt-6">
            <p className="text-[11px] sm:text-[12px] text-slate-500 font-medium leading-relaxed max-w-[90%]">
              Exquisite collection of <span className="text-slate-900 font-bold">Korean Stationery</span>, 
              Unique Gifts & Creative Toys. Elevating your everyday shopping experience.
            </p>
          </div>

          {/* Contact Bar - Minimalist Footer */}
          <div className="mt-auto flex items-end justify-between">
            <div className="flex items-center gap-3">
              <a href="tel:+919876543210" className="group/icon flex items-center gap-2 text-slate-400 hover:text-sky-500 transition-colors">
                <div className="w-8 h-8 rounded-md bg-slate-50 flex items-center justify-center border border-slate-100 group-hover/icon:border-sky-100 transition-all">
                  <i className="fa-solid fa-phone text-[11px]"></i>
                </div>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" className="group/icon flex items-center gap-2 text-slate-400 hover:text-emerald-500 transition-colors">
                <div className="w-8 h-8 rounded-md bg-slate-50 flex items-center justify-center border border-slate-100 group-hover/icon:border-emerald-100 transition-all">
                  <i className="fa-brands fa-whatsapp text-sm"></i>
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" className="group/icon flex items-center gap-2 text-slate-400 hover:text-pink-500 transition-colors">
                <div className="w-8 h-8 rounded-md bg-slate-50 flex items-center justify-center border border-slate-100 group-hover/icon:border-pink-100 transition-all">
                  <i className="fa-brands fa-instagram text-sm"></i>
                </div>
              </a>
            </div>

            <div className="text-right">
              <p className="text-[7px] font-extrabold text-slate-300 uppercase tracking-widest mb-1">Our Location</p>
              <p className="text-[10px] font-bold text-slate-700 tracking-tight">DHAMNOD, M.P.</p>
            </div>
          </div>
        </div>

        {/* Decorative subtle stripe at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] flex">
          <div className="h-full flex-1 bg-sky-200/40"></div>
          <div className="h-full flex-1 bg-white"></div>
          <div className="h-full flex-1 bg-pink-200/40"></div>
        </div>
      </div>
      
      {/* Physical-like shadow flare */}
      <div className="absolute -bottom-6 left-10 right-10 h-8 bg-slate-900/5 blur-2xl -z-10 rounded-full opacity-50"></div>
    </div>
  );
};

export default BusinessCard;
