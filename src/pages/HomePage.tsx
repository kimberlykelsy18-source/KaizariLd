import { Hero } from '../components/Hero';
import { Events } from '../components/Events';
import { Testimonials } from '../components/Testimonials';
import { PromoSection } from '../components/PromoSection';
import { ContactForm } from '../components/ContactForm';
import { MarketPlusSurveyPopup } from '../components/MarketPlusSurveyPopup';

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Events />
      <Testimonials />
      <PromoSection />
      <ContactForm />

      {/* Scroll-triggered Survey Popup (disabled previously) */}
      <MarketPlusSurveyPopup trigger="scroll" />
    </>
  );
}
