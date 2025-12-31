
import React from 'react';
import BusinessCard from './components/BusinessCard';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-12">
      {/* Designer Experience Wrapper */}
      <div className="w-full max-w-[420px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Subtle Aesthetic Tag */}
        <div className="mb-12 text-center no-print">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/60 border border-[#D3C9BC]/40 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A797B2]"></span>
            <span className="text-[10px] font-bold text-[#423D39] uppercase tracking-[0.4em]">Welcome to Store</span>
          </div>
        </div>

        {/* The Card Component */}
        <div className="card-container">
          <BusinessCard />
        </div>

        {/* Refined Action Area */}
        <div className="mt-14 no-print flex justify-center gap-8">
          <button 
            onClick={() => window.print()} 
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-14 h-14 rounded-full border border-[#D3C9BC] flex items-center justify-center bg-white text-[#423D39] group-hover:bg-[#423D39] group-hover:text-white group-hover:border-[#423D39] transition-all duration-300 shadow-sm">
              <i className="fa-solid fa-print text-sm"></i>
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#423D39]">Download QR</span>
          </button>

          <button 
            onClick={() => {
              if(navigator.share) {
                navigator.share({
                  title: 'Sanvaliya Seth Designer Card',
                  text: 'Premium Retail Experience - Stationery & Gifts',
                  url: window.location.href
                });
              }
            }} 
            className="flex flex-col items-center gap-3 group"
          >
            <div className="w-14 h-14 rounded-full border border-[#D3C9BC] flex items-center justify-center bg-white text-[#423D39] group-hover:bg-[#A797B2] group-hover:text-white group-hover:border-[#A797B2] transition-all duration-300 shadow-sm">
              <i className="fa-solid fa-share-nodes text-sm"></i>
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#423D39]">Share Card</span>
          </button>
        </div>

        {/* Minimal Elegance Footer */}
        <div className="mt-20 text-center space-y-3 opacity-60 no-print">
          <p className="text-[20px] font-serif font-bold italic text-[#262320]">
            Quality & Tradition hand in hand.
          </p>
          <div className="h-px w-10 bg-[#D3C9BC] mx-auto"></div>
          <p className="text-[10px] font-bold text-[#423D39] uppercase tracking-[0.5em]">Thank You to Vist</p> 
        </div>
      </div>
    </div>
  );
};

export default App;
