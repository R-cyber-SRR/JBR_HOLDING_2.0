export type NavPage = 
  | 'home' 
  | 'sector-ag' 
  | 'sector-re' 
  | 'sector-trans' 
  | 'sector-tech' 
  | 'how-we-think' 
  | 'founder-notes' 
  | 'journal' 
  | 'contact';

export interface SectorItem {
  id: string;
  code: string; // e.g. '01'
  title: string; // e.g. 'Agriculture'
  subtitle: string; // e.g. 'The Ground.'
  slug: NavPage;
  description: string;
  fullOverview: string;
  heroImage: string;
  stats: { label: string; value: string }[];
  focusAreas: { title: string; desc: string }[];
  portfolio: {
    name: string;
    tagline: string;
    status: string;
    founded: string;
    location: string;
    metric: string;
  }[];
}

export interface JournalArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Agriculture' | 'Real Estate' | 'Transport' | 'Technology' | 'Capital';
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
}

export interface FounderNote {
  id: string;
  code: string; // e.g. '01'
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  quote: string;
}

export interface OfficeLocation {
  city: string;
  address: string;
  timezone: string;
  email: string;
  phone: string;
}
