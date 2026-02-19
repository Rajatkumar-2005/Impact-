
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SessionCard from './components/SessionCard';
import ExhibitionView from './components/ExhibitionView';
import VenueView from './components/VenueView';
import ChatBot from './components/ChatBot';
import { SESSIONS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero />
            <section className="mb-20">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Featured Sessions</h2>
                <button 
                  onClick={() => setActiveTab('schedule')}
                  className="text-blue-400 font-medium hover:underline"
                >
                  View Full Schedule
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SESSIONS.slice(0, 3).map((session) => (
                  <SessionCard key={session.id} session={session} />
                ))}
              </div>
            </section>
            
            <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-10 text-center mb-20 border border-white/5">
              <h2 className="text-3xl font-bold mb-4">India's Biggest AI Exhibition</h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Explore 200+ exhibitors spanning across 4 massive halls at Bharat Mandapam. From hardware giants to innovative local startups.
              </p>
              <button 
                onClick={() => setActiveTab('exhibitors')}
                className="px-10 py-4 bg-white text-slate-950 font-bold rounded-xl hover:scale-105 transition-transform"
              >
                Explore Exhibitors
              </button>
            </section>
          </>
        );
      case 'schedule':
        return (
          <div className="py-10">
            <h1 className="text-4xl font-bold mb-10">Event Schedule</h1>
            <div className="flex gap-4 mb-8 overflow-x-auto pb-4 no-scrollbar">
              <button className="whitespace-nowrap px-6 py-2 bg-blue-600 rounded-full font-bold">Day 1 - Mar 15</button>
              <button className="whitespace-nowrap px-6 py-2 glass rounded-full font-bold text-slate-400">Day 2 - Mar 16</button>
              <button className="whitespace-nowrap px-6 py-2 glass rounded-full font-bold text-slate-400">Day 3 - Mar 17</button>
              <button className="whitespace-nowrap px-6 py-2 glass rounded-full font-bold text-slate-400">Workshops</button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {SESSIONS.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
            </div>
          </div>
        );
      case 'exhibitors':
        return (
          <div className="py-10">
            <h1 className="text-4xl font-bold mb-4">Innovation Floor</h1>
            <p className="text-slate-400 mb-10">Meet the pioneers building the autonomous future.</p>
            <ExhibitionView />
          </div>
        );
      case 'venue':
        return (
          <div className="py-10">
            <h1 className="text-4xl font-bold mb-4">The Venue</h1>
            <p className="text-slate-400 mb-10">Bharat Mandapam, Pragati Maidan - An architectural marvel of modern India.</p>
            <VenueView />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pb-32 md:pb-10 md:pt-24">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-6xl mx-auto px-6">
        {renderContent()}
      </main>

      <ChatBot />

      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-white/5 text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© 2026 AI Impact Summit. Bharat Mandapam, New Delhi.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Contact Support</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Entry</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
