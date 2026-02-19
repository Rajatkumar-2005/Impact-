
import React from 'react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'schedule', label: 'Schedule', icon: '📅' },
    { id: 'exhibitors', label: 'Exhibitors', icon: '🏢' },
    { id: 'venue', label: 'Venue', icon: '📍' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4 md:top-0 md:bottom-auto glass border-t md:border-t-0 md:border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="hidden md:flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">AI</div>
          <span className="font-display font-bold text-xl tracking-tight">Impact Summit <span className="text-blue-500">2026</span></span>
        </div>
        <div className="flex w-full md:w-auto justify-around md:gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-1 rounded-full transition-all ${
                activeTab === tab.id 
                  ? 'text-blue-400 bg-blue-500/10' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="text-xl md:text-base">{tab.icon}</span>
              <span className="text-[10px] md:text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
