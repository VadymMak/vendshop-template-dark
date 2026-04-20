import { SITE_CONFIG } from '@/lib/config';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import WhyUsSection from '@/components/sections/WhyUsSection';
import GallerySection from '@/components/sections/GallerySection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import BookingSection from '@/components/sections/BookingSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/widgets/WhatsAppButton';
import ChatWidget from '@/components/widgets/ChatWidget';

// Type-specific section imports
import ServicesSection from '@/components/sections/ServicesSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import MenuSection from '@/components/sections/MenuSection';
import PortfolioGrid from '@/components/sections/PortfolioGrid';

export default function Home() {
  const { templateType } = SITE_CONFIG;

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />

        {/* Type-specific middle section */}
        {templateType === 'services' && <ServicesSection />}
        {templateType === 'schedule' && <ScheduleSection />}
        {templateType === 'menu' && <MenuSection />}
        {templateType === 'portfolio' && <PortfolioGrid />}

        <WhyUsSection />
        <GallerySection />
        <ReviewsSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating widgets */}
      <WhatsAppButton />
      <ChatWidget />
    </>
  );
}
