import { useState, useEffect } from 'react';
import { X, TrendingUp, Calendar, Users, Award, User, Building2 } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

interface MarketPlusSurveyPopupProps {
  trigger: 'scroll' | 'booking';
  onClose?: () => void;
  onTakeSurvey?: () => void;
}

export function MarketPlusSurveyPopup({ trigger, onClose, onTakeSurvey }: MarketPlusSurveyPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [payerType, setPayerType] = useState<'self' | 'company'>('self');
  const [participantType, setParticipantType] = useState<'individual' | 'company'>('individual');

  useEffect(() => {
    if (trigger === 'scroll' && !hasShown) {
      // Check if popup was already shown in this session
      const popupShownToday = sessionStorage.getItem('marketplus-popup-shown');
      const lastShown = localStorage.getItem('marketplus-popup-last-shown');
      const today = new Date().toDateString();
      
      // Don't show if already shown today or in this session
      if (popupShownToday || lastShown === today) {
        setHasShown(true);
        return;
      }

      const handleScroll = () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        // Show after user has scrolled 70% of the page (less spammy)
        if (scrollPercentage > 70 && !hasShown) {
          setIsVisible(true);
          setHasShown(true);
          // Mark as shown in session and for today
          sessionStorage.setItem('marketplus-popup-shown', 'true');
          localStorage.setItem('marketplus-popup-last-shown', today);
          // Remove scroll listener after showing once
          window.removeEventListener('scroll', handleScroll);
        }
      };

      // Add a small delay before enabling scroll detection
      const timer = setTimeout(() => {
        window.addEventListener('scroll', handleScroll);
      }, 3000); // Wait 3 seconds before enabling popup

      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
      };
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
    // Close the popup and open the booking form
    setIsVisible(false);
    setShowBookingForm(true);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Booking request submitted! We will contact you shortly.');
    setShowBookingForm(false);
    if (onTakeSurvey) onTakeSurvey();
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={handleClose}
          />

          {/* Popup - Always centered and responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 flex items-center justify-center p-4 z-[9999]"
            style={{ pointerEvents: 'none' }}
          >
            <div 
              className="max-w-sm sm:max-w-md md:max-w-lg w-full"
              style={{ pointerEvents: 'auto' }}
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border-2 border-[#f57c00] overflow-hidden max-h-[85vh] overflow-y-auto">
              {/* Header with gradient and urgency banner */}
              <div className="bg-gradient-to-r from-[#005a7c] via-[#007a9c] to-[#f57c00] p-4 sm:p-6 text-white relative">
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

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-xl backdrop-blur-sm flex-shrink-0">
                    <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg sm:text-2xl mb-1 leading-tight">Financial Modeling with Excel</h3>
                    <p className="text-xs sm:text-sm text-white/95">Master Essential Skills for Career Growth</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="mb-5">
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
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
                    <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-700">
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
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50 rounded-lg p-3 mb-5 border border-gray-200 gap-2 sm:gap-0">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-[#005a7c]" />
                    <span className="text-gray-700 font-semibold">Nov 19-21, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 text-[#005a7c]" />
                    <span className="text-gray-700 font-semibold text-[#f57c00]">Limited Spots</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={handleRegisterNow}
                    className="w-full bg-gradient-to-r from-[#f57c00] to-[#ff9500] hover:from-[#d66a00] hover:to-[#e08500] text-white shadow-lg hover:shadow-xl transition-all group py-4 sm:py-6"
                  >
                    <span className="font-semibold text-sm sm:text-base">Register Now</span>
                    <TrendingUp className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
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
            </div>
          </motion.div>
        </>
      )}
      
      {/* Booking Form Dialog */}
      <Dialog open={showBookingForm} onOpenChange={setShowBookingForm}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#005a7c]">Register for Financial Modeling with Excel</DialogTitle>
            <DialogDescription>November 19-21, 2025 | Secure your spot now!</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleBooking} className="space-y-6 mt-4">
            {/* Who Will Be Paying */}
            <div className="space-y-3">
              <Label>Who will be paying for this event?</Label>
              <RadioGroup value={payerType} onValueChange={(value) => setPayerType(value as 'self' | 'company')}>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                  <RadioGroupItem value="self" id="self" />
                  <Label htmlFor="self" className="flex items-center cursor-pointer flex-1">
                    <User className="h-4 w-4 mr-2 text-[#f57c00]" />
                    I will pay for myself
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                  <RadioGroupItem value="company" id="company" />
                  <Label htmlFor="company" className="flex items-center cursor-pointer flex-1">
                    <Building2 className="h-4 w-4 mr-2 text-[#f57c00]" />
                    My company will pay
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Participant Type */}
            <div className="space-y-3">
              <Label>Are you registering as?</Label>
              <RadioGroup value={participantType} onValueChange={(value) => setParticipantType(value as 'individual' | 'company')}>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                  <RadioGroupItem value="individual" id="individual" />
                  <Label htmlFor="individual" className="cursor-pointer flex-1">
                    Individual Professional
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                  <RadioGroupItem value="company" id="company-participant" />
                  <Label htmlFor="company-participant" className="cursor-pointer flex-1">
                    Company Representative
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" required />
            </div>

            {/* Company Information (if applicable) */}
            {(payerType === 'company' || participantType === 'company') && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input id="companyName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input id="jobTitle" required />
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="participants">Number of Participants *</Label>
              <Input id="participants" type="number" min="1" defaultValue="1" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialRequests">Special Requirements or Questions</Label>
              <Textarea id="specialRequests" rows={4} placeholder="Any dietary requirements, accessibility needs, or questions..." />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-[#f57c00] hover:bg-[#d66a00]">
                Submit Booking Request
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowBookingForm(false)} className="sm:w-auto">
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </AnimatePresence>
  );
}
