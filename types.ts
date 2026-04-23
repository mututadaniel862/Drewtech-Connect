export interface Creative {
  id: string;
  name: string;
  skill: string;
  bio: string;
  avatar: string;
  portfolio: PortfolioItem[];
  contact: string;
}

export interface PortfolioItem {
  id: string;
  type: 'image' | 'video';
  url: string;
}

export interface AppEvent {
  id: string;
  name: string;
  location: string;
  date: string;
  time: string;
  poster: string;
  ticketInfo: string;
  organizer: string;
  featured: boolean;
}

export interface MediaReel {
  id: string;
  title: string;
  type: 'interview' | 'coverage';
  videoUrl: string;
  thumbnail: string;
}
