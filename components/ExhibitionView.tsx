
import React, { useState } from 'react';
import { EXHIBITORS } from '../constants';

const ExhibitionView: React.FC = () => {
  const [search, setSearch] = useState('');
  
  const filtered = EXHIBITORS.filter(ex => 
    ex.name.toLowerCase().includes(search.toLowerCase()) || 
    ex.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search exhibitors or tech categories..."
          className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">🔍</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((ex) => (
          <div key={ex.id} className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-blue-500/30 transition-all">
            <img src={ex.logo} alt={ex.name} className="w-16 h-16 rounded-xl object-cover bg-slate-800" />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg">{ex.name}</h3>
                <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">{ex.booth}</span>
              </div>
              <p className="text-xs text-slate-500 mb-2">{ex.category}</p>
              <p className="text-sm text-slate-400 line-clamp-2">{ex.description}</p>
              <div className="mt-2 text-xs font-medium text-slate-500">
                📍 {ex.hall}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExhibitionView;
