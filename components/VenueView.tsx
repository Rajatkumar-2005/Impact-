
import React from 'react';
import { LOCATIONS } from '../constants';

const VenueView: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 glass rounded-3xl p-8 min-h-[400px] relative overflow-hidden bg-slate-950/40">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* Mock Grid Lines for Map Aesthetic */}
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #475569 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-blue-500">🗺️</span> Interactive Floor Plan
        </h3>

        <div className="relative aspect-video w-full border border-white/5 rounded-2xl bg-slate-900/30">
          {/* Simple Schematic Map Overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-display text-4xl font-black opacity-10 rotate-12 select-none">
            BHARAT MANDAPAM
          </div>

          {LOCATIONS.map((loc) => (
            <div 
              key={loc.id}
              className="absolute group"
              style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
            >
              <div className="w-4 h-4 bg-blue-500 rounded-full glow cursor-pointer hover:scale-125 transition-transform" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 glass p-2 rounded-lg text-[10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 text-center">
                <p className="font-bold">{loc.name}</p>
                <p className="text-slate-400">{loc.floor}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-500 rounded-full"></div> Hall/Auditorium</div>
          <div className="flex items-center gap-1"><div className="w-3 h-3 bg-slate-700 rounded-full"></div> Facilities</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-2">Location Directory</h3>
        {LOCATIONS.map((loc) => (
          <div key={loc.id} className="glass p-4 rounded-xl border-l-4 border-blue-500/50">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold">{loc.name}</span>
              <span className="text-[10px] uppercase font-bold text-slate-500 px-2 py-0.5 bg-slate-800 rounded">{loc.type}</span>
            </div>
            <p className="text-sm text-slate-400">Located at: {loc.floor}</p>
          </div>
        ))}
        
        <div className="glass p-6 rounded-2xl bg-blue-600/5 mt-6">
          <h4 className="font-bold mb-2 flex items-center gap-2">
            🚀 Getting There
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            Bharat Mandapam is located at Pragati Maidan, New Delhi.
          </p>
          <ul className="text-xs text-slate-500 mt-2 space-y-1">
            <li>• Metro: Supreme Court Station (Blue Line)</li>
            <li>• Gate 5 & 7 for General Entry</li>
            <li>• Gate 1 for VIP and Media</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VenueView;
