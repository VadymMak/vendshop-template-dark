import type {
  NavItem,
  StatItem,
  WhyItem,
  GalleryImage,
  Review,
  ContactItem,
  FaqItem,
  ChatConfig,
  ServiceCategory,
  DaySchedule,
  MenuCategory,
  ImageMap,
  HeroContent,
} from './types';

// Switch to true when local /images/*.webp files are ready
export const USE_LOCAL_IMAGES = false;

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------
export const HERO: HeroContent = {
  title: '',
  subtitle: '',
};

// ---------------------------------------------------------------------------
// IMAGES
// ---------------------------------------------------------------------------
export const IMAGES: ImageMap = {
  hero: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
  about: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
  gallery: [],
};

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home',     href: '#hero'     },
  { label: 'Services', href: '#services' },
  { label: 'Reviews',  href: '#reviews'  },
  { label: 'Contact',  href: '#contact'  },
];

// ---------------------------------------------------------------------------
// STATS
// ---------------------------------------------------------------------------
export const STATS: StatItem[] = [
  { value: '—', label: 'Years of experience' },
  { value: '—', label: 'Happy customers'     },
  { value: '—', label: 'Satisfaction rate'   },
  { value: '—', label: 'Projects completed'  },
];

// ---------------------------------------------------------------------------
// WHY US
// ---------------------------------------------------------------------------
export const WHY_ITEMS: WhyItem[] = [
  { id: '1', icon: '⭐', title: 'Quality',      description: 'We deliver high-quality results every time.' },
  { id: '2', icon: '⚡', title: 'Fast',         description: 'Quick turnaround without compromising quality.' },
  { id: '3', icon: '💰', title: 'Fair pricing', description: 'Transparent pricing with no hidden fees.' },
  { id: '4', icon: '🛡️', title: 'Guaranteed',  description: 'We stand behind every job we do.' },
];

// ---------------------------------------------------------------------------
// SERVICE CATEGORIES (templateType: 'services')
// ---------------------------------------------------------------------------
export const SERVICE_CATEGORIES: ServiceCategory[] = [];

// ---------------------------------------------------------------------------
// SCHEDULE (templateType: 'schedule')
// ---------------------------------------------------------------------------
export const SCHEDULE: DaySchedule[] = [];

// ---------------------------------------------------------------------------
// MENU CATEGORIES (templateType: 'menu')
// ---------------------------------------------------------------------------
export const MENU_CATEGORIES: MenuCategory[] = [];

// ---------------------------------------------------------------------------
// REVIEWS
// ---------------------------------------------------------------------------
export const REVIEWS: Review[] = [];

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------
export const CONTACT_ITEMS: ContactItem[] = [
  { icon: '📍', title: 'Address',      lines: [''] },
  { icon: '📞', title: 'Phone',        lines: [''] },
  { icon: '✉️', title: 'Email',        lines: [''] },
  { icon: '🕐', title: 'Working hours', lines: [''] },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const FAQ_ITEMS: FaqItem[] = [];

// ---------------------------------------------------------------------------
// CHAT CONFIG
// ---------------------------------------------------------------------------
export const CHAT_CONFIG: ChatConfig = {
  greeting: 'Hello! How can I help you?',
  quickReplies: [
    { id: '1', label: '📋 Services',       response: 'Please contact us for a full list of services.' },
    { id: '2', label: '🕐 Working hours',  response: 'Please check our contact section for working hours.' },
    { id: '3', label: '📍 Location',       response: 'Please check our contact section for the address.' },
    { id: '4', label: '📅 Booking',        response: 'You can book via the form on this page or call us directly.' },
  ],
  fallbackResponse: 'Thanks for your message! We will get back to you shortly.',
};
