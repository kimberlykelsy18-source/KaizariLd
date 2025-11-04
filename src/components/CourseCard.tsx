import { useState } from 'react';
import { Calendar, Clock, Award, ChevronDown, ChevronUp, Users, DollarSign, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { MarketPlusSurveyPopup } from './MarketPlusSurveyPopup';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  price: {
    individual: string;
    corporate: string;
  };
  image: string;
  details: string;
  outcomes: string[];
  hasUpcomingEvent?: boolean;
  upcomingEventDate?: string;
}

export function CourseCard({
  title,
  description,
  duration,
  level,
  price,
  image,
  details,
  outcomes,
  hasUpcomingEvent,
  upcomingEventDate,
}: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showSurveyPopup, setShowSurveyPopup] = useState(false);
  const [bookingType, setBookingType] = useState<'individual' | 'corporate'>('individual');
  const [deliveryMode, setDeliveryMode] = useState<'self-paced' | 'instructor-led'>('instructor-led');

  const handleRegisterClick = () => {
    // Show survey popup first
    setShowSurveyPopup(true);
  };

  const handleSurveyPopupClose = () => {
    setShowSurveyPopup(false);
    // Open registration form after closing survey popup
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Registration submitted! We will contact you within 24 hours to confirm your booking.');
    setIsDialogOpen(false);
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {hasUpcomingEvent && (
          <Badge className="absolute top-4 right-4 bg-[#f57c00] text-white border-0">
            <Calendar className="h-3 w-3 mr-1" />
            Event: {upcomingEventDate}
          </Badge>
        )}
        <Badge className="absolute top-4 left-4 bg-[#005a7c] text-white border-0">
          {level}
        </Badge>
      </div>

      <CardHeader>
        <CardTitle className="text-[#005a7c]">{title}</CardTitle>
        <p className="text-gray-600">{description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-[#f57c00]" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="h-4 w-4 text-[#f57c00]" />
            <span>Certificate</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">Starting from</div>
            <div className="text-2xl text-[#f57c00]">{price.individual}</div>
          </div>
          <Button 
            onClick={handleRegisterClick}
            className="bg-[#f57c00] hover:bg-[#d66a00] text-white"
          >
            Register Now
          </Button>
        </div>

        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between">
              {isExpanded ? 'Show Less' : 'Show More Details'}
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 pt-4">
            <div>
              <h4 className="font-medium text-[#005a7c] mb-2">Course Overview</h4>
              <p className="text-sm text-gray-600 whitespace-pre-line">{details}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#005a7c] mb-2">Learning Outcomes</h4>
              <ul className="space-y-1">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-[#f57c00] mt-1">•</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500">Individual Price</div>
                  <div className="text-[#f57c00]">{price.individual}</div>
                </div>
                <div>
                  <div className="text-gray-500">Corporate Price</div>
                  <div className="text-[#f57c00]">{price.corporate}</div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>

      {/* Survey Popup */}
      {showSurveyPopup && (
        <MarketPlusSurveyPopup
          trigger="booking"
          onClose={handleSurveyPopupClose}
          onTakeSurvey={handleSurveyPopupClose}
        />
      )}

      {/* Registration Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[#005a7c]">Register for {title}</DialogTitle>
            <DialogDescription>
              Fill in your details to register for this course. We'll contact you to confirm your booking.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                {/* Delivery Mode */}
                <div className="space-y-3">
                  <Label>Training Delivery Mode *</Label>
                  <RadioGroup value={deliveryMode} onValueChange={(value: any) => setDeliveryMode(value)}>
                    <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                      <RadioGroupItem value="instructor-led" id="instructor-led" />
                      <Label htmlFor="instructor-led" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-[#f57c00]" />
                          <div>
                            <div>Instructor-Led Training</div>
                            <div className="text-xs text-gray-500">Fixed schedule with live instructor</div>
                          </div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                      <RadioGroupItem value="self-paced" id="self-paced" />
                      <Label htmlFor="self-paced" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-[#f57c00]" />
                          <div>
                            <div>Self-Paced Learning</div>
                            <div className="text-xs text-gray-500">Learn at your own pace with recorded content</div>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Self-Paced LMS Notice */}
                {deliveryMode === 'self-paced' && (
                  <div className="bg-gradient-to-r from-[#f57c00]/10 to-[#005a7c]/10 border-2 border-[#f57c00] rounded-lg p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-6 w-6 text-[#f57c00] flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="text-[#005a7c] mb-2">Learning Hub Coming Soon!</h4>
                        <p className="text-sm text-gray-700 mb-4">
                          Our dedicated Learning Hub platform is currently under development. Self-paced courses will be available soon with 24/7 access to course materials, video lessons, quizzes, and downloadable resources.
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          In the meantime, this course is available as <span className="font-medium text-[#005a7c]">Instructor-Led Training</span>. Switch to instructor-led mode above to register for upcoming sessions.
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full border-[#f57c00] text-[#f57c00] hover:bg-[#f57c00] hover:text-white"
                          onClick={() => {
                            setDialogOpen(false);
                            toast.info('Self-paced courses coming soon! Check out our instructor-led options.');
                          }}
                        >
                          Close & View Instructor-Led Options
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Instructor-Led Form Fields */}
                {deliveryMode === 'instructor-led' && (
                  <>
                    {/* Booking Type */}
                    <div className="space-y-3">
                      <Label>Who is paying for this training? *</Label>
                      <RadioGroup value={bookingType} onValueChange={(value: any) => setBookingType(value)}>
                        <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                          <RadioGroupItem value="individual" id="individual" />
                          <Label htmlFor="individual" className="flex-1 cursor-pointer">
                            <div>
                              <div>Individual Booking</div>
                              <div className="text-xs text-gray-500">Price: {price.individual}</div>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                          <RadioGroupItem value="corporate" id="corporate" />
                          <Label htmlFor="corporate" className="flex-1 cursor-pointer">
                            <div>
                              <div>Corporate Booking</div>
                              <div className="text-xs text-gray-500">Price: {price.corporate}</div>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" required placeholder="+254 700 000 000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="participants">Number of Participants</Label>
                        <Input 
                          id="participants" 
                          type="number" 
                          min="1" 
                          defaultValue="1"
                          disabled={bookingType === 'individual'}
                        />
                      </div>
                    </div>

                    {/* Corporate Details */}
                    {bookingType === 'corporate' && (
                      <div className="space-y-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-[#005a7c]">Corporate Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="company">Company Name *</Label>
                            <Input id="company" required placeholder="Company Ltd" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="position">Your Position *</Label>
                            <Input id="position" required placeholder="HR Manager" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Input id="department" placeholder="Human Resources" />
                        </div>
                      </div>
                    )}

                    {/* Additional Information */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        rows={3}
                        placeholder="Any special requirements or questions..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        type="submit"
                        className="flex-1 bg-[#f57c00] hover:bg-[#d66a00] text-white"
                      >
                        Submit Registration
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsDialogOpen(false)}
                        className="sm:w-auto"
                      >
                        Cancel
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </DialogContent>
          </Dialog>
    </Card>
  );
}
