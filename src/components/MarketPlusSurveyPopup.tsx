import { useState, useEffect } from 'react';
import { X, ExternalLink, TrendingUp } from 'lucide-react';
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

  const handleTakeSurvey = () => {
    window.open('https://forms.gle/cmZgJUiS7ekyf9FS9', '_blank');
    setIsVisible(false);
    if (onTakeSurvey) onTakeSurvey();
  };

  const handleMaybeLater = () => {
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          {trigger === 'booking' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={handleClose}
            />
          )}

          {/* Popup */}
          <motion.div
            initial={trigger === 'scroll' ? { opacity: 0, x: 100 } : { opacity: 0, scale: 0.9 }}
            animate={trigger === 'scroll' ? { opacity: 1, x: 0 } : { opacity: 1, scale: 1 }}
            exit={trigger === 'scroll' ? { opacity: 0, x: 100 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`fixed z-50 ${
              trigger === 'scroll'
                ? 'bottom-6 right-6 max-w-sm'
                : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full mx-4'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-[#f57c00] overflow-hidden">
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-[#f57c00] to-[#ff9500] p-6 text-white relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Market+ Survey</h3>
                    <p className="text-sm text-white/90">Product Research Initiative</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  {trigger === 'booking' 
                    ? "Before you proceed with your booking, we'd love your input! Help us shape the future of our training programs."
                    : "Help us understand your training needs better! Your insights will help us create even better programs for professionals like you."
                  }
                </p>

                <div className="bg-[#f57c00]/5 border border-[#f57c00]/20 rounded-lg p-4 mb-6">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#f57c00] mt-0.5">✓</span>
                      <span>Takes only 3-5 minutes to complete</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#f57c00] mt-0.5">✓</span>
                      <span>Your responses shape our future offerings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#f57c00] mt-0.5">✓</span>
                      <span>100% confidential and anonymous</span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={handleTakeSurvey}
                    className="w-full bg-[#f57c00] hover:bg-[#d66a00] text-white group"
                  >
                    Take Survey Now
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                  
                  <Button
                    onClick={handleMaybeLater}
                    variant="ghost"
                    className="w-full text-gray-600 hover:text-gray-800"
                  >
                    {trigger === 'booking' ? 'Continue to Booking' : 'Maybe Later'}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
