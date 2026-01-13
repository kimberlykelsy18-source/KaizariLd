import { useState } from 'react';
import { Calendar, Building2, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
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
  // Only skip 2025 items
  if ((date && date.includes('2025')) || (details && details.includes('2025'))) {
    return null;
  }

  const [showBookingForm, setShowBookingForm] = useState(false);
  const [payerType, setPayerType] = useState<'self' | 'company'>('self');
  const [participantType, setParticipantType] = useState<'individual' | 'company'>('individual');

  const handleSurveyClick = () => {
    window.open('https://forms.gle/cmZgJUiS7ekyf9FS9', '_blank');
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        toast.success('Registration received! A sales representative will reach out to you shortly with pricing details and next steps.', { duration: 6000 });
        setShowBookingForm(false);
        form.reset();
      } else {
        toast.error('Something went wrong. Please try again or contact us directly.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again or contact us directly.');
    }

    setIsSubmitting(false);
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
            {type === 'survey' ? (
              <Button size="sm" onClick={handleSurveyClick} className="bg-[#f57c00] hover:bg-[#d66a00] text-white">
                Take Survey
              </Button>
            ) : (
              <Button size="sm" onClick={() => setShowBookingForm(true)} className="bg-[#f57c00] hover:bg-[#d66a00] text-white">
                Register Now
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Booking Form Dialog */}
      <Dialog open={showBookingForm} onOpenChange={setShowBookingForm} modal={true}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#005a7c]">Register for {title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          <form
            name="event-registration"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleBooking}
            className="space-y-6 mt-4"
          >
            <input type="hidden" name="form-name" value="event-registration" />
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="eventTitle" value={title} />
            {/* Who Will Be Paying */}
            <div className="space-y-3">
              <Label>Who will be paying for this event?</Label>
              <RadioGroup name="payerType" value={payerType} onValueChange={(value) => setPayerType(value as 'self' | 'company')}>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                  <RadioGroupItem value="self" id="event-self" />
                  <Label htmlFor="event-self" className="flex items-center cursor-pointer flex-1">
                    <User className="h-4 w-4 mr-2 text-[#f57c00]" />
                    I will pay for myself
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                  <RadioGroupItem value="company" id="event-company" />
                  <Label htmlFor="event-company" className="flex items-center cursor-pointer flex-1">
                    <Building2 className="h-4 w-4 mr-2 text-[#f57c00]" />
                    My company will pay
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Participant Type */}
            <div className="space-y-3">
              <Label>Are you registering as?</Label>
              <RadioGroup name="participantType" value={participantType} onValueChange={(value) => setParticipantType(value as 'individual' | 'company')}>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                  <RadioGroupItem value="individual" id="event-individual" />
                  <Label htmlFor="event-individual" className="cursor-pointer flex-1">
                    Individual Professional
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                  <RadioGroupItem value="company" id="event-company-participant" />
                  <Label htmlFor="event-company-participant" className="cursor-pointer flex-1">
                    Company Representative
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="event-firstName">First Name *</Label>
                <Input id="event-firstName" name="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-lastName">Last Name *</Label>
                <Input id="event-lastName" name="lastName" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="event-email">Email Address *</Label>
              <Input id="event-email" name="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="event-phone">Phone Number *</Label>
              <Input id="event-phone" name="phone" type="tel" required />
            </div>

            {/* Company Information (if applicable) */}
            {(payerType === 'company' || participantType === 'company') && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="event-companyName">Company Name *</Label>
                  <Input id="event-companyName" name="companyName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-jobTitle">Job Title *</Label>
                  <Input id="event-jobTitle" name="jobTitle" required />
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="event-participants">Number of Participants *</Label>
              <Input id="event-participants" name="participants" type="number" min="1" defaultValue="1" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="event-specialRequests">Special Requirements or Questions</Label>
              <Textarea id="event-specialRequests" name="specialRequests" rows={4} placeholder="Any dietary requirements, accessibility needs, or questions..." />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button type="submit" disabled={isSubmitting} className="flex-1 bg-[#f57c00] hover:bg-[#d66a00]">
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
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
}
