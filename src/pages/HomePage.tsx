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

      {/* Financial Modeling banner — March (TBD) */}
      <section className="bg-[#005a7c] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Financial Modeling Training</h2>
            <p className="mt-1 text-sm md:text-base text-white/90">
              March (dates TBD), 2026 — intensive instructor-led & online sessions. Seats limited.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wa.me/254713664234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-md shadow-md hover:opacity-95"
            >
              Contact / Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Events />
      <Testimonials />
      <PromoSection />
      <ContactForm />

      {/* Scroll-triggered Survey Popup (disabled previously) */}
      <MarketPlusSurveyPopup trigger="scroll" />
    </>
  );
}
