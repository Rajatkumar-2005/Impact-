
export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  room: string;
  track: 'Ethics' | 'Technical' | 'Business' | 'Policy';
  speakers: Speaker[];
}

export interface Exhibitor {
  id: string;
  name: string;
  booth: string;
  hall: string;
  category: string;
  description: string;
  logo: string;
}

export interface Location {
  id: string;
  name: string;
  type: 'Hall' | 'Auditorium' | 'Lounge' | 'Food Court';
  floor: string;
  coordinates: { x: number; y: number };
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
