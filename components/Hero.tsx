
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative py-20 px-6 overflow-hidden rounded-3xl mb-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] -z-10 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] -z-10 rounded-full"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full border-blue-500/30 text-blue-400 text-sm font-medium animate-pulse">
          March 15-18, 2026 • New Delhi, India
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
          AI <span className="gradient-text">Impact Summit</span> 2026
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Join the world's brightest minds at Bharat Mandapam for the landmark event shaping the future of global AI governance and technology.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all glow">
            Get Delegate Pass
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 rounded-xl font-bold transition-all">
            Explore Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
