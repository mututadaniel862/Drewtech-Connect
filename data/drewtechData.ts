import { Creative, AppEvent, MediaReel } from '../types';

export const CREATIVES: Creative[] = [
  {
    id: 'c1',
    name: 'DJ Drew',
    skill: 'DJ & MC',
    bio: 'Bringing the energy to every Harare event. Specializing in Afro-tech and Amapiano.',
    avatar: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=200',
    portfolio: [
      { id: 'p1', type: 'image', url: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=800' },
      { id: 'p2', type: 'image', url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800' },
    ],
    contact: '+263 77 123 4567',
  },
  {
    id: 'c2',
    name: 'Tinashe Vision',
    skill: 'Photographer',
    bio: 'Capturing moments that last a lifetime. Harare based, available for travel.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
    portfolio: [
      { id: 'v1', type: 'image', url: 'https://images.unsplash.com/photo-1502602732942-775ea453c03a?w=800' },
      { id: 'v2', type: 'image', url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800' },
    ],
    contact: '+263 78 987 6543',
  },
];

export const EVENTS: AppEvent[] = [
  {
    id: 'e1',
    name: 'Harare Youth Festival',
    location: 'ZESA Grounds, Harare',
    date: 'May 24, 2026',
    time: '12:00 PM - 10:00 PM',
    poster: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
    ticketInfo: 'Free for student card holders. $5 General Admission.',
    organizer: 'Drewtech Media',
    featured: true,
  },
  {
    id: 'e2',
    name: 'Amapiano Night Bulawayo',
    location: 'Horizon Pub, Bulawayo',
    date: 'June 2, 2026',
    time: '8:00 PM - Late',
    poster: 'https://images.unsplash.com/photo-1514525253344-f20387431e6c?w=800',
    ticketInfo: '$10 Early Bird. VIP $25.',
    organizer: 'Vibe Events',
    featured: false,
  },
];

export const MEDIA_REELS: MediaReel[] = [
  {
    id: 'm1',
    title: 'Interview with DJ Drew',
    type: 'interview',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400',
  },
  {
    id: 'm2',
    title: 'Highlights: Harare Carnival',
    type: 'coverage',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400',
  },
];
