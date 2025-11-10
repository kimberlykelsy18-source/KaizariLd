import { Phone, ArrowRight, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import FinancialPromo from './FinancialPromo';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const handleDiscoveryCall = () => {
    window.location.href = 'tel:+254713664234';
  };

  const handleViewCalendar = () => {
    if (onNavigate) {
      // Navigate to events page
      onNavigate('events');
      // Wait for page to load, then scroll to calendar section
      setTimeout(() => {
        const calendarSection = document.querySelector('.training-calendar-section');
        if (calendarSection) {
          calendarSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      // If no navigation handler, just scroll to events section
      document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#005a7c] to-[#003d54] text-white overflow-hidden min-h-[calc(100vh-64px)] flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdp[...]"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#f57c00] rounded-full">
              <span className="text-sm">Expert Corporate Training Solutions</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
              Ready to{' '}
              <span className="text-[#f57c00]">Elevate Your Team's</span>{' '}
              Performance?
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200">
              Schedule a free discovery call with our training experts. Let's discuss your unique needs 
              and design a tailored program that drives real results for your organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleDiscoveryCall}
                className="bg-[#f57c00] hover:bg-[#d66a00] text-white group shadow-xl hover:shadow-2xl transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Discovery Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-[#005a7c]"
                onClick={handleViewCalendar}
              >
                <Calendar className="mr-2 h-5 w-5" />
                View Training Calendar
              </Button>
            </div>

            {/* Insert the Financial Promo right after the action buttons */}
            <div className="mt-4">
              <FinancialPromo />
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
              <div>
                <div className="text-3xl text-[#f57c00]">25+</div>
                <div className="text-sm text-gray-300">Companies Trained</div>
              </div>
              <div>
                <div className="text-3xl text-[#f57c00]">300+</div>
                <div className="text-sm text-gray-300">Professionals</div>
              </div>
              <div>
                <div className="text-3xl text-[#f57c00]">4.9/5</div>
                <div className="text-sm text-gray-300">Client Rating</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573167101669-476636b96cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBidXNpbmVz[...]"
                alt="Corporate Training"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#005a7c]/50 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-[#005a7c] p-6 rounded-xl shadow-xl">
              <div className="text-sm">Rated Excellent</div>
              <div className="text-2xl">⭐ 4.9/5.0</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
