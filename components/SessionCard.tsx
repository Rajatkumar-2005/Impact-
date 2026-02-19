
import React from 'react';
import { Session } from '../types';

interface SessionCardProps {
  session: Session;
}

const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const trackColors = {
    Ethics: 'border-purple-500/50 text-purple-400',
    Technical: 'border-blue-500/50 text-blue-400',
    Business: 'border-emerald-500/50 text-emerald-400',
    Policy: 'border-orange-500/50 text-orange-400',
  };

  return (
    <div className="glass p-6 rounded-2xl hover:bg-slate-800/50 transition-all border-white/5 group">
      <div className="flex justify-between items-start mb-4">
        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded border ${trackColors[session.track]}`}>
          {session.track}
        </span>
        <span className="text-slate-400 text-sm font-medium">
          {formatTime(session.startTime)} - {formatTime(session.endTime)}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{session.title}</h3>
      <p className="text-slate-400 text-sm mb-4 line-clamp-2">{session.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {session.speakers.map((speaker) => (
            <img 
              key={speaker.id} 
              src={speaker.avatar} 
              alt={speaker.name} 
              className="w-8 h-8 rounded-full border-2 border-slate-900"
              title={`${speaker.name}, ${speaker.role} at ${speaker.company}`}
            />
          ))}
        </div>
        <span className="text-xs font-medium text-blue-500 bg-blue-500/10 px-2 py-1 rounded-lg">
          {session.room}
        </span>
      </div>
    </div>
  );
};

export default SessionCard;
