import { useState } from 'react';
import { Building2, User } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  price: { individual: string; corporate: string };
  image: string;
  details?: string;
  outcomes?: string[];
  hasUpcomingEvent?: boolean;
  upcomingEventDate?: string;
}

// Placeholder images for courses without proper images
const placeholderImages: Record<string, string> = {
  'Core Excel': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  'Intermediate → Advanced Excel': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  'Core Financial Modeling': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
  'Advanced Financial Modeling': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
  'Core Data Analysis & Power Query': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  'Advanced Data Analysis & Power Query': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
};

const defaultPlaceholder = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop';

export function CourseCard(props: CourseCardProps) {
  const { title, description, level, image, details, outcomes, hasUpcomingEvent, upcomingEventDate } = props;
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [payerType, setPayerType] = useState<'self' | 'company'>('self');
  const [participantType, setParticipantType] = useState<'individual' | 'company'>('individual');

  // Use placeholder if image is broken or not set
  const displayImage = image && !image.includes('undefined')
    ? image
    : (placeholderImages[title] || defaultPlaceholder);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Registration received! A sales representative will reach out to you shortly with pricing details and next steps.', { duration: 6000 });
    setShowBookingForm(false);
  };

  return (
    <>
      <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
        <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
          <img
            src={displayImage}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = placeholderImages[title] || defaultPlaceholder;
            }}
          />
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-[#005a7c] text-white text-xs font-medium rounded-full">
              {level}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-[#005a7c] mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

          {hasUpcomingEvent && upcomingEventDate && (
            <div className="mb-4 px-3 py-2 bg-[#f57c00]/10 border border-[#f57c00]/20 rounded-lg">
              <span className="text-sm text-[#f57c00] font-medium">Next session: {upcomingEventDate}</span>
            </div>
          )}

          <Button
            onClick={() => setShowBookingForm(true)}
            className="w-full bg-[#f57c00] hover:bg-[#d66a00] text-white font-medium"
          >
            Register Now
          </Button>

          {details && (
            <div className="mt-4 pt-4 border-t text-sm text-gray-700">
              <p className="line-clamp-2">{details}</p>
              {outcomes && outcomes.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {outcomes.slice(0, 2).map((o, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#f57c00] mt-1">•</span>
                      <span className="line-clamp-1">{o}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Registration Form Dialog */}
      <Dialog open={showBookingForm} onOpenChange={setShowBookingForm} modal={true}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#005a7c]">Register for {title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleBooking} className="space-y-6 mt-4">
            {/* Who Will Be Paying */}
            <div className="space-y-3">
              <Label>Who will be paying for this course?</Label>
              <RadioGroup value={payerType} onValueChange={(value) => setPayerType(value as 'self' | 'company')}>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="self" id="course-self" />
                  <Label htmlFor="course-self" className="flex items-center cursor-pointer flex-1">
                    <User className="h-4 w-4 mr-2 text-[#f57c00]" />
                    I will pay for myself
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="company" id="course-company" />
                  <Label htmlFor="course-company" className="flex items-center cursor-pointer flex-1">
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
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="individual" id="course-individual" />
                  <Label htmlFor="course-individual" className="cursor-pointer flex-1">
                    Individual Professional
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value="company" id="course-company-participant" />
                  <Label htmlFor="course-company-participant" className="cursor-pointer flex-1">
                    Company Representative
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="course-firstName">First Name *</Label>
                <Input id="course-firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="course-lastName">Last Name *</Label>
                <Input id="course-lastName" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="course-email">Email Address *</Label>
              <Input id="course-email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="course-phone">Phone Number *</Label>
              <Input id="course-phone" type="tel" required />
            </div>

            {/* Company Information (if applicable) */}
            {(payerType === 'company' || participantType === 'company') && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="course-companyName">Company Name *</Label>
                  <Input id="course-companyName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course-jobTitle">Job Title *</Label>
                  <Input id="course-jobTitle" required />
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="course-participants">Number of Participants *</Label>
              <Input id="course-participants" type="number" min="1" defaultValue="1" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="course-specialRequests">Special Requirements or Questions</Label>
              <Textarea id="course-specialRequests" rows={4} placeholder="Any specific topics you'd like covered, accessibility needs, or questions..." />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-[#f57c00] hover:bg-[#d66a00]">
                Submit Registration
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
