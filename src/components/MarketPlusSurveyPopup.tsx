import { useState, useEffect } from 'react';
import { X, TrendingUp, Calendar, Users, Award } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';

interface MarketPlusSurveyPopupProps {
  trigger: 'scroll' | 'booking';
  onClose?: () => void;
  onTakeSurvey?: () => void;
}

export function MarketPlusSurveyPopup({ trigger, onClose, onTakeSurvey }: MarketPlusSurveyPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (trigger === 'scroll' && !hasShown) {
      const handleScroll = () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        // Show after user has scrolled 40% of the page
        if (scrollPercentage > 40 && !hasShown) {
          setIsVisible(true);
          setHasShown(true);
          // Remove scroll listener after showing once
          window.removeEventListener('scroll', handleScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [trigger, hasShown]);

  useEffect(() => {
    if (trigger === 'booking') {
      setIsVisible(true);
    }
  }, [trigger]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  const handleRegisterNow = () => {
    // Scroll to events section or open registration
    // For now, we'll close the popup - you can customize this
    setIsVisible(false);
    if (onTakeSurvey) onTakeSurvey();
    
    // If on a page with event cards, scroll to them
    const eventsSection = document.getElementById('events-section');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMaybeLater = () => {
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop - Always show for center popup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup - Always centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg w-full mx-4 z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-[#f57c00] overflow-hidden">
              {/* Header with gradient and urgency banner */}
              <div className="bg-gradient-to-r from-[#005a7c] via-[#007a9c] to-[#f57c00] p-6 text-white relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
                >
                  <X className="h-5 w-5" />
                </button>
                
                {/* Urgency Badge */}
                <div className="inline-flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 animate-pulse">
                  <Calendar className="h-3 w-3" />
                  NOV 19-21, 2025
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl mb-1">Financial Modeling with Excel</h3>
                    <p className="text-sm text-white/95">Master Essential Skills for Career Growth</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-5">
                  <p className="text-gray-700 mb-4">
                    {trigger === 'booking' 
                      ? "Don't miss out on our most popular training! Join our Financial Modeling with Excel course from November 19-21 and transform your career."
                      : "Level up your career with our comprehensive Financial Modeling with Excel training from November 19-21. Seats are filling fast!"
                    }
                  </p>

                  {/* Key Benefits */}
                  <div className="bg-gradient-to-br from-[#f57c00]/10 to-[#005a7c]/10 border border-[#f57c00]/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="h-5 w-5 text-[#f57c00]" />
                      <span className="font-semibold text-gray-900">Why Join This Training?</span>
                    </div>
                    <ul className="space-y-2.5 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#f57c00] mt-0.5 font-bold">✓</span>
                        <span><strong>Hands-on practice</strong> with real-world Excel models</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f57c00] mt-0.5 font-bold">✓</span>
                        <span><strong>Expert instructors</strong> with industry experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f57c00] mt-0.5 font-bold">✓</span>
                        <span><strong>Certificate of completion</strong> to boost your CV</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#f57c00] mt-0.5 font-bold">✓</span>
                        <span><strong>Limited seats</strong> - Register now to secure your spot!</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Training Details Bar */}
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 mb-5 border border-gray-200">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-[#005a7c]" />
                    <span className="text-gray-700 font-semibold">Nov 19-21, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-[#005a7c]" />
                    <span className="text-gray-700 font-semibold text-[#f57c00]">Limited Spots</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={handleRegisterNow}
                    className="w-full bg-gradient-to-r from-[#f57c00] to-[#ff9500] hover:from-[#d66a00] hover:to-[#e08500] text-white shadow-lg hover:shadow-xl transition-all group py-6"
                  >
                    <span className="font-semibold text-base">Register Now</span>
                    <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button
                    onClick={handleMaybeLater}
                    variant="ghost"
                    className="w-full text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                  >
                    {trigger === 'booking' ? 'Continue Browsing' : 'Maybe Later'}
                  </Button>
                </div>

                {/* Trust Indicator */}
                <p className="text-center text-xs text-gray-500 mt-4">
                  Join professionals who have enhanced their skills with us
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
