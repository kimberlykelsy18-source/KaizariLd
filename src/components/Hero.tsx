import { useState } from 'react';
import { Phone, ArrowRight, Building2, User } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import FinancialPromo from './FinancialPromo';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [payerType, setPayerType] = useState<'self' | 'company'>('self');
  const [participantType, setParticipantType] = useState<'individual' | 'company'>('individual');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDiscoveryCall = () => {
    window.location.href = 'tel:+254713664234';
  };

  const handleRegisterClick = () => {
    setShowRegistrationForm(true);
  };

  const handleRegistrationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        setShowRegistrationForm(false);
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
                onClick={handleRegisterClick}
                className="bg-[#f57c00] hover:bg-[#d66a00] text-white group shadow-xl hover:shadow-2xl transition-all"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDiscoveryCall}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 group"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Discovery Call
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

    {/* Registration Form Dialog */}
    <Dialog open={showRegistrationForm} onOpenChange={setShowRegistrationForm} modal={true}>
      <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#005a7c]">Register for Training</DialogTitle>
          <DialogDescription>Complete the form below and our team will reach out with program details and pricing.</DialogDescription>
        </DialogHeader>

        <form
          name="hero-registration"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleRegistrationSubmit}
          className="space-y-6 mt-4"
        >
          <input type="hidden" name="form-name" value="hero-registration" />
          <input type="hidden" name="bot-field" />

          {/* Who Will Be Paying */}
          <div className="space-y-3">
            <Label>Who will be paying for this training?</Label>
            <RadioGroup name="payerType" value={payerType} onValueChange={(value) => setPayerType(value as 'self' | 'company')}>
              <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                <RadioGroupItem value="self" id="hero-self" />
                <Label htmlFor="hero-self" className="flex items-center cursor-pointer flex-1">
                  <User className="h-4 w-4 mr-2 text-[#f57c00]" />
                  I will pay for myself
                </Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                <RadioGroupItem value="company" id="hero-company" />
                <Label htmlFor="hero-company" className="flex items-center cursor-pointer flex-1">
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
                <RadioGroupItem value="individual" id="hero-individual" />
                <Label htmlFor="hero-individual" className="cursor-pointer flex-1">
                  Individual Professional
                </Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                <RadioGroupItem value="company" id="hero-company-participant" />
                <Label htmlFor="hero-company-participant" className="cursor-pointer flex-1">
                  Company Representative
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="hero-firstName">First Name *</Label>
              <Input id="hero-firstName" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hero-lastName">Last Name *</Label>
              <Input id="hero-lastName" name="lastName" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hero-email">Email Address *</Label>
            <Input id="hero-email" name="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hero-phone">Phone Number *</Label>
            <Input id="hero-phone" name="phone" type="tel" required />
          </div>

          {/* Company Information (if applicable) */}
          {(payerType === 'company' || participantType === 'company') && (
            <>
              <div className="space-y-2">
                <Label htmlFor="hero-companyName">Company Name *</Label>
                <Input id="hero-companyName" name="companyName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hero-jobTitle">Job Title *</Label>
                <Input id="hero-jobTitle" name="jobTitle" required />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="hero-trainingInterest">Training Program of Interest</Label>
            <Input id="hero-trainingInterest" name="trainingInterest" placeholder="e.g., Financial Modeling, Excel, Data Analysis" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hero-participants">Number of Participants *</Label>
            <Input id="hero-participants" name="participants" type="number" min="1" defaultValue="1" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hero-specialRequests">Special Requirements or Questions</Label>
            <Textarea id="hero-specialRequests" name="specialRequests" rows={4} placeholder="Any dietary requirements, accessibility needs, or questions..." />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button type="submit" disabled={isSubmitting} className="flex-1 bg-[#f57c00] hover:bg-[#d66a00]">
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </Button>
            <Button type="button" variant="outline" onClick={() => setShowRegistrationForm(false)} className="sm:w-auto">
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
    </>
  );
}
