// Palette presets
export type PalettePreset = 'dark-premium' | 'clean-light' | 'warm-cozy' | 'professional' | 'natural' | 'medical';

export type SiteLanguage = 'sk' | 'en' | 'de' | 'cs' | 'uk' | 'ru';

export interface PaletteColors {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  bg: string;
  bgAlt: string;
  card: string;
  cardHover: string;
  text: string;
  textMuted: string;
  border: string;
  statsBg: string;       // фон stats bar
  statsText: string;     // текст stats bar
  heroOverlay: string;   // overlay для hero (всегда тёмный)
  isDark: boolean;       // тёмная тема или светлая
}

// Site configuration
export interface SiteConfig {
  name: string;
  tagline: string;
  templateType: 'services' | 'schedule' | 'menu' | 'portfolio';
  palette: PalettePreset;   // только пресет, не ручные цвета
  language: SiteLanguage;
  headingFont: 'oswald' | 'playfair' | 'cormorant' | 'inter';
  whatsappNumber: string;
  contactEmail: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Stats
export interface StatItem {
  value: string;
  label: string;
}

// Services
export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  items: ServiceItem[];
}

// Schedule
export interface ScheduleEntry {
  time: string;
  name: string;
  instructor: string;
}

export interface DaySchedule {
  day: string;
  entries: ScheduleEntry[];
}

// Menu
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

// Why Us
export interface WhyItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Gallery
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

// Reviews
export interface Review {
  id: string;
  name: string;
  initial: string;
  text: string;
  rating: number;
  detail: string;
}

// Contact
export interface ContactItem {
  icon: string;
  title: string;
  lines: string[];
}

// FAQ
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Chat Widget
export interface QuickReply {
  id: string;
  label: string;
  response: string;
}

export interface ChatConfig {
  greeting: string;
  quickReplies: QuickReply[];
  fallbackResponse: string;
}

// Images
export interface ImageMap {
  hero: string;
  about: string;
  gallery: string[];
}

// Hero content
export interface HeroContent {
  title: string;
  subtitle: string;
}
