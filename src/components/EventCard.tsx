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
  // Defensive: skip rendering promotional/2025 items
  const lowerTitle = title?.toLowerCase() || '';
  if (lowerTitle.includes('financial modeling') || (date && date.includes('2025')) || (details && details.includes('2025'))) {
    return null;
  }

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

          <p className="text-sm text-gray-700 line-clamp-4 whitespace-pre-line">{details}</p>
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500">Duration</div>
            <div className="text-sm text-gray-700">{duration}</div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" onClick={() => setShowBookingForm(true)} className="bg-[#005a7c] text-white">
              Book Now
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Survey popup used before booking - component now returns null so it's safe */}
      {showSurveyPopup && <MarketPlusSurveyPopup trigger="booking" onClose={() => setShowSurveyPopup(false)} onTakeSurvey={handleSurveyPopupClose} />}

      {/* Booking form dialog handled inside EventCard in original implementation (kept) */}
    </>
  );
}
