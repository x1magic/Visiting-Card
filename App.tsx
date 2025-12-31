
import React from 'react';
import BusinessCard from './components/BusinessCard';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-12">
      {/* Centered Card Container */}
      <div className="w-full max-w-sm sm:max-w-md">
        <BusinessCard />
      </div>

      {/* Modern Action Bar */}
      <div className="no-print mt-16 flex items-center gap-10">
        <button 
          onClick={() => window.print()} 
          className="flex flex-col items-center gap-2 text-slate-300 hover:text-slate-600 transition-all group"
        >
          <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm group-hover:shadow-md transition-all">
            <i className="fa-solid fa-print text-sm"></i>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-widest">Print Card</span>
        </button>

        <button 
          onClick={() => {
            if(navigator.share) {
              navigator.share({
                title: 'Sanvaliya Seth',
                text: 'Premium Stationery & General Store in Dhamnod',
                url: window.location.href
              });
            }
          }} 
          className="flex flex-col items-center gap-2 text-slate-300 hover:text-slate-600 transition-all group"
        >
          <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm group-hover:shadow-md transition-all">
            <i className="fa-solid fa-share-nodes text-sm"></i>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-widest">Share Card</span>
        </button>
      </div>

      {/* Minimal Footer */}
      <div className="mt-16 text-center">
        <p className="text-[9px] font-bold text-slate-200 uppercase tracking-[0.5em]">
          Est. 2024 • Excellence in Quality
        </p>
      </div>
    </div>
  );
};

export default App;
