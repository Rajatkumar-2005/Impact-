
import { Session, Exhibitor, Location, Speaker } from './types';

export const SPEAKERS: Speaker[] = [
  { id: '1', name: 'Dr. Anita Desai', role: 'Director of AI', company: 'TechBharath', avatar: 'https://picsum.photos/seed/anita/200/200' },
  { id: '2', name: 'Marcus Sterling', role: 'Ethical Lead', company: 'GlobalAI Foundation', avatar: 'https://picsum.photos/seed/marcus/200/200' },
  { id: '3', name: 'Rohan Gupta', role: 'CEO', company: 'IndiCore Systems', avatar: 'https://picsum.photos/seed/rohan/200/200' },
  { id: '4', name: 'Sarah Chen', role: 'Senior Researcher', company: 'DeepMind Labs', avatar: 'https://picsum.photos/seed/sarah/200/200' },
];

export const SESSIONS: Session[] = [
  {
    id: 's1',
    title: 'Opening Keynote: AI and Bharat 2030',
    description: 'Exploring how AI will reshape the socio-economic landscape of India over the next decade.',
    startTime: '2026-03-15T09:00:00',
    endTime: '2026-03-15T10:30:00',
    room: 'Plenary Hall',
    track: 'Policy',
    speakers: [SPEAKERS[0], SPEAKERS[2]],
  },
  {
    id: 's2',
    title: 'Scaling Large Language Models efficiently',
    description: 'Technical deep-dive into quantization and efficient fine-tuning techniques.',
    startTime: '2026-03-15T11:00:00',
    endTime: '2026-03-15T12:30:00',
    room: 'Hall 14 - Room A',
    track: 'Technical',
    speakers: [SPEAKERS[3]],
  },
  {
    id: 's3',
    title: 'The Ethics of Autonomous Decision Systems',
    description: 'A panel discussion on legal and moral accountability in AI-driven governance.',
    startTime: '2026-03-15T14:00:00',
    endTime: '2026-03-15T15:30:00',
    room: 'Auditorium 2',
    track: 'Ethics',
    speakers: [SPEAKERS[1], SPEAKERS[0]],
  },
];

export const EXHIBITORS: Exhibitor[] = [
  { id: 'e1', name: 'Google Cloud', booth: 'A1-01', hall: 'Hall 14', category: 'Cloud & AI Infrastructure', description: 'Powering the next generation of AI with Vertex AI.', logo: 'https://picsum.photos/seed/google/100/100' },
  { id: 'e2', name: 'Microsoft Azure', booth: 'A1-05', hall: 'Hall 14', category: 'Software Services', description: 'Experience the world-class enterprise AI.', logo: 'https://picsum.photos/seed/ms/100/100' },
  { id: 'e3', name: 'NVIDIA', booth: 'B2-10', hall: 'Hall 12', category: 'Hardware/GPUs', description: 'The engine of AI worldwide.', logo: 'https://picsum.photos/seed/nvidia/100/100' },
  { id: 'e4', name: 'Sarvam AI', booth: 'C1-02', hall: 'Hall 14', category: 'Indic LLMs', description: 'Building AI for India, in India.', logo: 'https://picsum.photos/seed/sarvam/100/100' },
];

export const LOCATIONS: Location[] = [
  { id: 'l1', name: 'Plenary Hall', type: 'Auditorium', floor: 'Level 1', coordinates: { x: 50, y: 30 } },
  { id: 'l2', name: 'Hall 14', type: 'Hall', floor: 'Ground Floor', coordinates: { x: 30, y: 70 } },
  { id: 'l3', name: 'Hall 12', type: 'Hall', floor: 'Ground Floor', coordinates: { x: 70, y: 70 } },
  { id: 'l4', name: 'Global Lounge', type: 'Lounge', floor: 'Level 2', coordinates: { x: 50, y: 50 } },
];
