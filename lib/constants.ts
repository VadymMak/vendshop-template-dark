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
import { t } from './get-ui-text';

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
  logo: '',
};

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------
export const NAV_ITEMS: NavItem[] = [
  { label: t().nav.home,     href: '#hero'     },
  { label: t().nav.services, href: '#services' },
  { label: t().nav.reviews,  href: '#reviews'  },
  { label: t().nav.contact,  href: '#contact'  },
];

// ---------------------------------------------------------------------------
// STATS
// ---------------------------------------------------------------------------
export const STATS: StatItem[] = [
  { value: '—', label: t().stats.years     },
  { value: '—', label: t().stats.clients   },
  { value: '—', label: t().stats.rating    },
  { value: '—', label: t().stats.guarantee },
];

// ---------------------------------------------------------------------------
// WHY US
// ---------------------------------------------------------------------------
export const WHY_ITEMS: WhyItem[] = [
  { id: '1', icon: '⭐', title: t().whyUs.q1Title, description: t().whyUs.q1Desc },
  { id: '2', icon: '⚡', title: t().whyUs.q2Title, description: t().whyUs.q2Desc },
  { id: '3', icon: '💰', title: t().whyUs.q3Title, description: t().whyUs.q3Desc },
  { id: '4', icon: '🛡️', title: t().whyUs.q4Title, description: t().whyUs.q4Desc },
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
  { icon: '📍', title: t().contact.address, lines: [''] },
  { icon: '📞', title: t().contact.phone,   lines: [''] },
  { icon: '✉️', title: t().contact.email,   lines: [''] },
  { icon: '🕐', title: t().contact.hours,   lines: [''] },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const FAQ_ITEMS: FaqItem[] = [];

// ---------------------------------------------------------------------------
// CHAT CONFIG
// ---------------------------------------------------------------------------
export const CHAT_CONFIG: ChatConfig = {
  greeting: t().chat.greeting,
  quickReplies: [
    { id: '1', label: t().chat.qr1Label, response: t().chat.qr1Reply },
    { id: '2', label: t().chat.qr2Label, response: t().chat.qr2Reply },
    { id: '3', label: t().chat.qr3Label, response: t().chat.qr3Reply },
    { id: '4', label: t().chat.qr4Label, response: t().chat.qr4Reply },
  ],
  fallbackResponse: t().chat.fallback,
};
