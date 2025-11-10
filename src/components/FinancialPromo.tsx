import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, ArrowRight, Building2, User } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';
import { MarketPlusSurveyPopup } from './MarketPlusSurveyPopup';
import { ImageWithFallback } from './figma/ImageWithFallback';
import eventData from '../data/financialEvent.json';

const FinancialPromo: React.FC = () => {
  const event = eventData;
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showSurveyPopup, setShowSurveyPopup] = useState(false);
  const [payerType, setPayerType] = useState<'self' | 'company'>('self');
  const [participantType, setParticipantType] = useState<'individual' | 'company'>('individual');

  const getTrainerImage = () => {
    try {
      return new URL(`../assets/aurthur-ogonji.png`, import.meta.url).href;
    } catch {
      return '';
    }
  };

  const handleRegisterClick = () => {
    setShowSurveyPopup(true);
  };

  const handleSurveyPopupClose = () => {
    setShowSurveyPopup(false);
    setShowBookingForm(true);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Booking request submitted! We will contact you shortly.');
    setShowBookingForm(false);
  };

  return (
    <>
      <div className="relative group">
        {/* Modern gradient card with glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f57c00] via-[#ff9800] to-[#f57c00] rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
        
        <div className="relative bg-gradient-to-br from-[#0a1628] via-[#0f1e36] to-[#142840] rounded-2xl p-4 md:p-5 border border-white/10 backdrop-blur-sm overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          
          {/* Glowing orb effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#f57c00]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col md:flex-row gap-4 items-center">
            {/* Left: Trainer Info */}
            <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#f57c00] to-[#ff9800] rounded-full blur-sm opacity-75"></div>
                <ImageWithFallback 
                  src={getTrainerImage()} 
                  alt={event.speakers?.[0]?.name || 'Trainer'} 
                  className="relative w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white/20 shadow-xl"
                />
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-[#f57c00] to-[#ff9800] text-white text-xs px-2 py-0.5 rounded-full font-bold shadow-lg">
                  <Sparkles className="inline h-3 w-3" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm md:text-base font-bold text-white truncate">
                    {event.title}
                  </h3>
                  <span className="hidden sm:inline-flex px-2 py-0.5 bg-gradient-to-r from-[#f57c00] to-[#ff9800] text-white text-xs font-bold rounded-full shadow-lg whitespace-nowrap">
                    Featured
                  </span>
                </div>
                
                {event.speakers && event.speakers.length > 0 && (
                  <p className="text-xs md:text-sm text-gray-300 mb-2">
                    with <span className="text-[#f57c00] font-semibold">{event.speakers[0].name}</span>
                  </p>
                )}

                <div className="flex flex-wrap gap-2 text-xs">
                  {event.startDate && (
                    <div className="flex items-center gap-1 text-gray-400">
                      <Calendar className="h-3 w-3 text-[#f57c00]" />
                      <span className="hidden sm:inline">{event.startDate} - {event.endDate}</span>
                      <span className="sm:hidden">{event.startDate}</span>
                    </div>
                  )}
                  {event.mode && (
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock className="h-3 w-3 text-[#f57c00]" />
                      <span>{event.mode}</span>
                    </div>
                  )}
                  {event.price && (
                    <div className="px-2 py-0.5 bg-white/10 rounded-full text-white font-semibold">
                      {event.price}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: CTA Button */}
            <div className="w-full md:w-auto flex-shrink-0">
              <Button
                onClick={handleRegisterClick}
                className="w-full md:w-auto bg-gradient-to-r from-[#f57c00] to-[#ff9800] hover:from-[#d66a00] hover:to-[#e68900] text-white font-bold px-6 py-2.5 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 group border-2 border-white/20"
              >
                <span className="mr-2">{event.ctaLabel || 'Register Now'}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Survey Popup */}
      {showSurveyPopup && (
        <MarketPlusSurveyPopup
          trigger="booking"
          onClose={handleSurveyPopupClose}
          onTakeSurvey={handleSurveyPopupClose}
        />
      )}

      {/* Booking Form Dialog */}
      <Dialog open={showBookingForm} onOpenChange={setShowBookingForm}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#005a7c]">Book Your Spot</DialogTitle>
            <DialogDescription>{event.title}</DialogDescription>
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
    </>
  );
};

export default FinancialPromo;
