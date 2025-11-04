import { useState } from 'react';
import { Calendar, Clock, Users, ChevronDown, ChevronUp, Building2, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MarketPlusSurveyPopup } from './MarketPlusSurveyPopup';
import { toast } from 'sonner@2.0.3';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  duration: string;
  slotsRemaining: number;
  image: string;
  details: string;
  type: 'course' | 'general' | 'survey';
}

export function EventCard({
  title,
  description,
  date,
  duration,
  slotsRemaining,
  image,
  details,
  type,
}: EventCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showSurveyPopup, setShowSurveyPopup] = useState(false);
  const [payerType, setPayerType] = useState<'self' | 'company'>('self');
  const [participantType, setParticipantType] = useState<'individual' | 'company'>('individual');

  const handleSurveyClick = () => {
    window.open('https://forms.gle/cmZgJUiS7ekyf9FS9', '_blank');
  };

  const handleBookNowClick = () => {
    // Show survey popup before opening booking form
    setShowSurveyPopup(true);
  };

  const handleSurveyPopupClose = () => {
    setShowSurveyPopup(false);
    // Open booking form after closing survey popup
    setShowBookingForm(true);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Booking request submitted! We will contact you shortly.');
    setShowBookingForm(false);
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-[#f57c00]">
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-[#f57c00] hover:bg-[#d66a00]">
              {type === 'survey' ? `${slotsRemaining} Responses Needed` : `${slotsRemaining} Slots Left`}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-[#005a7c]">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-[#f57c00]" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-[#f57c00]" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 text-[#f57c00]" />
            <span>{type === 'survey' ? 'Responses Needed' : 'Limited Seats Available'}</span>
          </div>

          {isExpanded && (
            <div className="pt-4 border-t mt-4">
              <p className="text-sm text-gray-700 whitespace-pre-line">{details}</p>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <div className="flex gap-2 w-full">
            <Button
              onClick={() => type === 'survey' ? handleSurveyClick() : handleBookNowClick()}
              className="flex-1 bg-[#f57c00] hover:bg-[#d66a00]"
            >
              {type === 'survey' ? 'Take Survey' : 'Book Now'}
            </Button>
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="outline"
              className="border-[#005a7c] text-[#005a7c] hover:bg-[#005a7c] hover:text-white"
            >
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Survey Popup - Show before booking */}
      {type !== 'survey' && showSurveyPopup && (
        <MarketPlusSurveyPopup
          trigger="booking"
          onClose={handleSurveyPopupClose}
          onTakeSurvey={handleSurveyPopupClose}
        />
      )}

      {/* Booking Form Dialog - Only shown for non-survey types */}
      {type !== 'survey' && (
        <Dialog open={showBookingForm} onOpenChange={setShowBookingForm}>
          <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl text-[#005a7c]">Book Your Spot</DialogTitle>
              <DialogDescription>{title}</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleBooking} className="space-y-6 mt-4">
              <>
                {type === 'course' && (
                  <>
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
                  </>
                )}

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
              </>

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
      )}
    </>
  );
}
