import type { Metadata } from 'next';
import { Oswald, Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/lib/config';
import { getPalette } from '@/lib/palettes';
// Load all 4 heading font options
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.tagline,
};

// Map headingFont to body class
const fontClassMap: Record<string, string> = {
  oswald: 'font-oswald',
  playfair: 'font-playfair',
  cormorant: 'font-cormorant',
  inter: 'font-inter',
};

// Map headingFont to CSS variable
const fontVarMap: Record<string, string> = {
  oswald: `var(--font-oswald)`,
  playfair: `var(--font-playfair)`,
  cormorant: `var(--font-cormorant)`,
  inter: `var(--font-inter)`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { headingFont } = SITE_CONFIG;
  const palette = getPalette(SITE_CONFIG.palette);

  // Inject palette as CSS variables
  const cssVars: React.CSSProperties & Record<string, string> = {
    '--primary': palette.primary,
    '--primary-dark': palette.primaryDark,
    '--primary-light': palette.primaryLight,
    '--bg': palette.bg,
    '--bg-alt': palette.bgAlt,
    '--card': palette.card,
    '--card-hover': palette.cardHover,
    '--text': palette.text,
    '--text-muted': palette.textMuted,
    '--border': palette.border,
    '--stats-bg': palette.statsBg,
    '--stats-text': palette.statsText,
    '--hero-overlay': palette.heroOverlay,
    '--chat-toggle-bg': palette.isDark ? palette.card : palette.primary,
    '--chat-toggle-color': palette.isDark ? palette.text : '#ffffff',
    '--heading-font': fontVarMap[headingFont] ?? fontVarMap.oswald,
  };

  const fontVariables = [
    oswald.variable,
    playfair.variable,
    cormorant.variable,
    inter.variable,
  ].join(' ');

  const bodyClass = fontClassMap[headingFont] ?? 'font-oswald';

  return (
    <html lang={SITE_CONFIG.language} className={fontVariables} style={cssVars}>
      <body className={bodyClass} data-theme={palette.isDark ? 'dark' : 'light'}>{children}</body>
    </html>
  );
}
