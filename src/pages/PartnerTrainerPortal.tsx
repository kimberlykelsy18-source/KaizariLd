import { useState } from 'react';
import { Building2, GraduationCap, CheckCircle2, Upload, Users, Award, Clock, Briefcase, MapPin, FileText, Phone, Mail, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MarketPlusSurveyPopup } from '../components/MarketPlusSurveyPopup';

type PortalType = 'select' | 'partner' | 'trainer';

export function PartnerTrainerPortal() {
  const [portalType, setPortalType] = useState<PortalType>('select');
  const [nitaCertified, setNitaCertified] = useState<string>('');
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File | null }>({
    nitaCertificate: null,
    otherCertifications: null,
    cv: null,
    companyRegistration: null,
    taxCompliance: null,
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, fileType: string) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFiles(prev => ({ ...prev, [fileType]: file }));
      toast.success(`${file.name} uploaded successfully!`);
    }
  };

  const handleTrainerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Validate NITA certification upload if certified
    if (nitaCertified === 'yes' && !uploadedFiles.nitaCertificate) {
      toast.error('Please upload your NITA certificate');
      return;
    }

    toast.success('Trainer application submitted successfully! We\'ll review your application and get back to you within 3-5 business days.');
    e.currentTarget.reset();
    setUploadedFiles({
      nitaCertificate: null,
      otherCertifications: null,
      cv: null,
      companyRegistration: null,
      taxCompliance: null,
    });
    setNitaCertified('');
  };

  const handlePartnerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Partnership application submitted successfully! Our team will contact you within 2-3 business days.');
    e.currentTarget.reset();
    setUploadedFiles({
      nitaCertificate: null,
      otherCertifications: null,
      cv: null,
      companyRegistration: null,
      taxCompliance: null,
    });
  };

  const trainerSpecializations = [
    'Financial Modeling & Analysis',
    'AI & Financial Technology',
    'Corporate Finance',
    'Budgeting & Forecasting',
    'Strategic Leadership',
    'Emotional Intelligence',
    'Team Building & Collaboration',
    'Change Management',
    'Power BI & Data Visualization',
    'Advanced Excel',
    'SQL & Database Management',
    'Tableau',
    'Other (Please Specify)',
  ];

  if (portalType === 'select') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#005a7c] to-[#f57c00] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl mb-6">
                Partner & Trainer Portal
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Join our network of excellence and help transform organizations across Africa
              </p>
            </div>
          </div>
        </div>

        {/* Selection Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Become a Trainer Card */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#f57c00]">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwb2ZmaWNlJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzYyMDE4NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Become a Trainer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#f57c00] text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>Trainer</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-[#005a7c]">Become a Part-Time Trainer</CardTitle>
                <CardDescription className="text-lg">
                  Share your expertise and earn while making an impact
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-[#f57c00] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#005a7c]">Flexible Schedule</p>
                      <p className="text-sm text-gray-600">Train on your own time - weekend or weekday sessions available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-[#f57c00] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#005a7c]">Competitive Compensation</p>
                      <p className="text-sm text-gray-600">Earn KSh 25,000 - 80,000 per training session based on course</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-[#f57c00] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#005a7c]">Professional Network</p>
                      <p className="text-sm text-gray-600">Connect with leading organizations and industry professionals</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Briefcase className="h-6 w-6 text-[#f57c00] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#005a7c]">All Specializations Welcome</p>
                      <p className="text-sm text-gray-600">Finance, Leadership, Data Analytics, and more</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#f57c00]/10 to-[#005a7c]/10 p-4 rounded-lg border-l-4 border-[#f57c00]">
                  <p className="text-sm">
                    <span className="text-[#005a7c]">Perfect for:</span> Consultants, Industry Experts, Academics, and Certified Professionals looking to share knowledge
                  </p>
                </div>

                <Button
                  onClick={() => setPortalType('trainer')}
                  className="w-full bg-[#f57c00] hover:bg-[#d66a00] text-white h-12 text-lg"
                >
                  Apply as Trainer
                </Button>
              </CardContent>
            </Card>

            {/* Become a Partner Card */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#005a7c]">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573167101669-476636b96cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbHMlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjIwMTg0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Become a Partner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#005a7c] text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  <span>Partner</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-[#005a7c]">Partner With Us</CardTitle>
                <CardDescription className="text-lg">
                  Collaborate to deliver world-class training solutions
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="h-6 w-6 text-[#005a7c] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#005a7c]">Strategic Collaboration</p>
                      <p className="text-sm text-gray-600">Joint ventures, referral programs, and co-branded solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Globe className="h-6 w-6 text-[#005a7c] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#005a7c]">Market Expansion</p>
                      <p className="text-sm text-gray-600">Access to our corporate client network across East Africa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#005a7c] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#005a7c]">Revenue Sharing</p>
                      <p className="text-sm text-gray-600">Mutually beneficial partnership models with transparent terms</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-[#005a7c] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-[#005a7c]">Brand Enhancement</p>
                      <p className="text-sm text-gray-600">Co-marketing opportunities and joint thought leadership</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#005a7c]/10 to-[#f57c00]/10 p-4 rounded-lg border-l-4 border-[#005a7c]">
                  <p className="text-sm">
                    <span className="text-[#005a7c]">Ideal for:</span> Training Institutions, Corporate Consultancies, Technology Providers, and Educational Organizations
                  </p>
                </div>

                <Button
                  onClick={() => setPortalType('partner')}
                  className="w-full bg-[#005a7c] hover:bg-[#004a66] text-white h-12 text-lg"
                >
                  Apply as Partner
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <h2 className="text-3xl text-center text-[#005a7c] mb-12">
              Why Join Kaizari L&D International?
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-[#f57c00]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#f57c00]" />
                  </div>
                  <h3 className="text-[#005a7c] mb-2">25+ Clients</h3>
                  <p className="text-sm text-gray-600">Established corporate network</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-[#005a7c]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-[#005a7c]" />
                  </div>
                  <h3 className="text-[#005a7c] mb-2">100% Satisfaction</h3>
                  <p className="text-sm text-gray-600">Proven track record</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-[#f57c00]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-[#f57c00]" />
                  </div>
                  <h3 className="text-[#005a7c] mb-2">300+ Trained</h3>
                  <p className="text-sm text-gray-600">Professionals developed</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-[#005a7c]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-[#005a7c]" />
                  </div>
                  <h3 className="text-[#005a7c] mb-2">Growing Fast</h3>
                  <p className="text-sm text-gray-600">Expanding across Africa</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (portalType === 'trainer') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            onClick={() => setPortalType('select')}
            className="mb-6"
          >
            ← Back to Selection
          </Button>

          <Card className="border-2 border-[#f57c00]">
            <CardHeader className="bg-gradient-to-r from-[#f57c00] to-[#d66a00] text-white">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-8 w-8" />
                <div>
                  <CardTitle className="text-3xl">Trainer Application</CardTitle>
                  <CardDescription className="text-white/90 text-lg">
                    Join our expert trainer network and make an impact
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-8">
              <form onSubmit={handleTrainerSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xl text-[#005a7c] flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Personal Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+254..." required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Location/City *</Label>
                    <Input id="location" name="location" placeholder="e.g., Nairobi, Kenya" required />
                  </div>
                </div>

                {/* Professional Background */}
                <div className="space-y-4">
                  <h3 className="text-xl text-[#005a7c] flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Professional Background
                  </h3>

                  <div>
                    <Label htmlFor="currentRole">Current Job Title/Role *</Label>
                    <Input id="currentRole" name="currentRole" placeholder="e.g., Senior Financial Analyst" required />
                  </div>

                  <div>
                    <Label htmlFor="organization">Current Organization</Label>
                    <Input id="organization" name="organization" placeholder="e.g., Equity Bank" />
                  </div>

                  <div>
                    <Label htmlFor="yearsExperience">Years of Professional Experience *</Label>
                    <Select name="yearsExperience" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="11-15">11-15 years</SelectItem>
                        <SelectItem value="16+">16+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="highestQualification">Highest Educational Qualification *</Label>
                    <Select name="highestQualification" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="mba">MBA</SelectItem>
                        <SelectItem value="phd">PhD/Doctorate</SelectItem>
                        <SelectItem value="professional">Professional Certification</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Training Specialization */}
                <div className="space-y-4">
                  <h3 className="text-xl text-[#005a7c] flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Training Specialization
                  </h3>

                  <div>
                    <Label>Primary Areas of Expertise * (Select all that apply)</Label>
                    <div className="grid md:grid-cols-2 gap-3 mt-2">
                      {trainerSpecializations.map((specialization) => (
                        <div key={specialization} className="flex items-center space-x-2">
                          <Checkbox id={specialization} name="specializations" value={specialization} />
                          <label
                            htmlFor={specialization}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {specialization}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="otherSpecialization">If Other, Please Specify</Label>
                    <Input id="otherSpecialization" name="otherSpecialization" />
                  </div>

                  <div>
                    <Label htmlFor="previousTraining">Previous Training Experience</Label>
                    <Textarea
                      id="previousTraining"
                      name="previousTraining"
                      placeholder="Describe your previous training/teaching experience, number of sessions delivered, organizations trained, etc."
                      rows={4}
                    />
                  </div>
                </div>

                {/* NITA Certification */}
                <div className="space-y-4 bg-[#005a7c]/5 p-6 rounded-lg border-2 border-[#005a7c]/20">
                  <h3 className="text-xl text-[#005a7c] flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    NITA Certification
                  </h3>

                  <div>
                    <Label>Are you NITA Certified? *</Label>
                    <RadioGroup
                      value={nitaCertified}
                      onValueChange={setNitaCertified}
                      className="flex gap-4 mt-2"
                      required
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="nita-yes" />
                        <Label htmlFor="nita-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="nita-no" />
                        <Label htmlFor="nita-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {nitaCertified === 'yes' && (
                    <div>
                      <Label htmlFor="nitaCertNumber">NITA Certificate Number</Label>
                      <Input
                        id="nitaCertNumber"
                        name="nitaCertNumber"
                        placeholder="Enter your NITA certificate number"
                      />
                    </div>
                  )}

                  {nitaCertified === 'no' && (
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                      <p className="text-sm text-amber-800">
                        <span className="font-semibold">Note:</span> While NITA certification is not mandatory, it is highly recommended. We can assist you in obtaining NITA certification if you're selected.
                      </p>
                    </div>
                  )}
                </div>

                {/* Document Uploads */}
                <div className="space-y-4">
                  <h3 className="text-xl text-[#005a7c] flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Document Uploads
                  </h3>

                  {nitaCertified === 'yes' && (
                    <div className="space-y-2">
                      <Label htmlFor="nitaCertificate">NITA Certificate * (PDF, max 5MB)</Label>
                      <div className="flex items-center gap-3">
                        <Input
                          id="nitaCertificate"
                          type="file"
                          accept=".pdf"
                          onChange={(e) => handleFileUpload(e, 'nitaCertificate')}
                          className="flex-1"
                        />
                        {uploadedFiles.nitaCertificate && (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500">Upload your NITA certificate</p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="cv">Curriculum Vitae (CV) * (PDF, max 5MB)</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        id="cv"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => handleFileUpload(e, 'cv')}
                        required
                        className="flex-1"
                      />
                      {uploadedFiles.cv && (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500">Upload your most recent CV</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="otherCertifications">Other Professional Certifications (Optional - PDF, max 10MB)</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        id="otherCertifications"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => handleFileUpload(e, 'otherCertifications')}
                        className="flex-1"
                      />
                      {uploadedFiles.otherCertifications && (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500">
                      Upload relevant certifications (CPA, ACCA, CFA, PMP, etc.)
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-4">
                  <h3 className="text-xl text-[#005a7c] flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Availability
                  </h3>

                  <div>
                    <Label>Preferred Training Schedule * (Select all that apply)</Label>
                    <div className="grid md:grid-cols-2 gap-3 mt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="weekdays" name="schedule" value="weekdays" />
                        <label htmlFor="weekdays" className="text-sm">Weekdays</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="weekends" name="schedule" value="weekends" />
                        <label htmlFor="weekends" className="text-sm">Weekends</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="evenings" name="schedule" value="evenings" />
                        <label htmlFor="evenings" className="text-sm">Evening Sessions</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="flexible" name="schedule" value="flexible" />
                        <label htmlFor="flexible" className="text-sm">Flexible</label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="sessionsPerMonth">How many training sessions can you deliver per month?</Label>
                    <Select name="sessionsPerMonth">
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 sessions</SelectItem>
                        <SelectItem value="3-4">3-4 sessions</SelectItem>
                        <SelectItem value="5-6">5-6 sessions</SelectItem>
                        <SelectItem value="7+">7+ sessions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-xl text-[#005a7c] flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Additional Information
                  </h3>

                  <div>
                    <Label htmlFor="whyJoin">Why do you want to become a trainer with Kaizari L&D?</Label>
                    <Textarea
                      id="whyJoin"
                      name="whyJoin"
                      placeholder="Share your motivation and what unique value you can bring to our training programs..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div>
                    <Label htmlFor="referralSource">How did you hear about this opportunity?</Label>
                    <Select name="referralSource">
                      <SelectTrigger>
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Website</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="referral">Referral from colleague</SelectItem>
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" name="terms" required />
                  <label htmlFor="terms" className="text-sm leading-relaxed">
                    I confirm that all information provided is accurate and I agree to Kaizari L&D's terms and conditions for trainers. I understand that background verification will be conducted.
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#f57c00] hover:bg-[#d66a00] text-white h-12 text-lg"
                >
                  Submit Trainer Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Partner Form
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button
          variant="outline"
          onClick={() => setPortalType('select')}
          className="mb-6"
        >
          ← Back to Selection
        </Button>

        <Card className="border-2 border-[#005a7c]">
          <CardHeader className="bg-gradient-to-r from-[#005a7c] to-[#004a66] text-white">
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8" />
              <div>
                <CardTitle className="text-3xl">Partnership Application</CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Let's collaborate to deliver exceptional training solutions
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-8">
            <form onSubmit={handlePartnerSubmit} className="space-y-6">
              {/* Organization Information */}
              <div className="space-y-4">
                <h3 className="text-xl text-[#005a7c] flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Organization Information
                </h3>

                <div>
                  <Label htmlFor="orgName">Organization Name *</Label>
                  <Input id="orgName" name="orgName" required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="registrationNumber">Registration Number *</Label>
                    <Input id="registrationNumber" name="registrationNumber" required />
                  </div>
                  <div>
                    <Label htmlFor="taxPin">Tax PIN/KRA PIN *</Label>
                    <Input id="taxPin" name="taxPin" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="orgType">Organization Type *</Label>
                  <Select name="orgType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select organization type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="training-institution">Training Institution</SelectItem>
                      <SelectItem value="consultancy">Consultancy Firm</SelectItem>
                      <SelectItem value="technology-provider">Technology Provider</SelectItem>
                      <SelectItem value="educational-institution">Educational Institution</SelectItem>
                      <SelectItem value="corporate">Corporate Organization</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="yearEstablished">Year Established *</Label>
                  <Input
                    id="yearEstablished"
                    name="yearEstablished"
                    type="number"
                    min="1900"
                    max="2025"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="orgWebsite">Organization Website</Label>
                  <Input
                    id="orgWebsite"
                    name="orgWebsite"
                    type="url"
                    placeholder="https://www.yourcompany.com"
                  />
                </div>

                <div>
                  <Label htmlFor="orgDescription">Organization Description *</Label>
                  <Textarea
                    id="orgDescription"
                    name="orgDescription"
                    placeholder="Briefly describe your organization's services, expertise, and market focus..."
                    rows={4}
                    required
                  />
                </div>
              </div>

              {/* Contact Person */}
              <div className="space-y-4">
                <h3 className="text-xl text-[#005a7c] flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Primary Contact Person
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName">Full Name *</Label>
                    <Input id="contactName" name="contactName" required />
                  </div>
                  <div>
                    <Label htmlFor="contactTitle">Job Title *</Label>
                    <Input id="contactTitle" name="contactTitle" placeholder="e.g., Managing Director" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactEmail">Email Address *</Label>
                    <Input id="contactEmail" name="contactEmail" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="contactPhone">Phone Number *</Label>
                    <Input id="contactPhone" name="contactPhone" type="tel" placeholder="+254..." required />
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div className="space-y-4">
                <h3 className="text-xl text-[#005a7c] flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Office Location
                </h3>

                <div>
                  <Label htmlFor="address">Physical Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="Building name, street, area..."
                    rows={2}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" name="city" required />
                  </div>
                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Input id="country" name="country" defaultValue="Kenya" required />
                  </div>
                </div>
              </div>

              {/* Partnership Details */}
              <div className="space-y-4">
                <h3 className="text-xl text-[#005a7c] flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Partnership Details
                </h3>

                <div>
                  <Label htmlFor="partnershipType">Type of Partnership Interested In *</Label>
                  <Select name="partnershipType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select partnership type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="joint-ventures">Joint Ventures / Co-delivery</SelectItem>
                      <SelectItem value="referral-program">Referral Program</SelectItem>
                      <SelectItem value="content-development">Content Development Partnership</SelectItem>
                      <SelectItem value="technology-integration">Technology Integration</SelectItem>
                      <SelectItem value="white-label">White Label Solutions</SelectItem>
                      <SelectItem value="regional-expansion">Regional Expansion Partner</SelectItem>
                      <SelectItem value="other">Other (Please Specify)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="servicesOffered">Services/Products You Offer *</Label>
                  <Textarea
                    id="servicesOffered"
                    name="servicesOffered"
                    placeholder="Describe the training programs, technology solutions, or services your organization offers..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="targetMarket">Primary Target Market *</Label>
                  <Textarea
                    id="targetMarket"
                    name="targetMarket"
                    placeholder="Describe your current client base, industries served, geographic coverage..."
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="clientBase">Approximate Number of Active Clients</Label>
                  <Select name="clientBase">
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 clients</SelectItem>
                      <SelectItem value="11-25">11-25 clients</SelectItem>
                      <SelectItem value="26-50">26-50 clients</SelectItem>
                      <SelectItem value="51-100">51-100 clients</SelectItem>
                      <SelectItem value="100+">100+ clients</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="partnershipValue">How would this partnership benefit both organizations? *</Label>
                  <Textarea
                    id="partnershipValue"
                    name="partnershipValue"
                    placeholder="Describe the mutual value proposition, synergies, and expected outcomes..."
                    rows={4}
                    required
                  />
                </div>
              </div>

              {/* Document Uploads */}
              <div className="space-y-4">
                <h3 className="text-xl text-[#005a7c] flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Required Documents
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="companyRegistration">Certificate of Incorporation/Registration * (PDF, max 5MB)</Label>
                  <div className="flex items-center gap-3">
                    <Input
                      id="companyRegistration"
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileUpload(e, 'companyRegistration')}
                      required
                      className="flex-1"
                    />
                    {uploadedFiles.companyRegistration && (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="taxCompliance">Tax Compliance Certificate (PDF, max 5MB)</Label>
                  <div className="flex items-center gap-3">
                    <Input
                      id="taxCompliance"
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileUpload(e, 'taxCompliance')}
                      className="flex-1"
                    />
                    {uploadedFiles.taxCompliance && (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500">Current KRA tax compliance certificate</p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-xl text-[#005a7c] flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Additional Information
                </h3>

                <div>
                  <Label htmlFor="references">Business References (Optional)</Label>
                  <Textarea
                    id="references"
                    name="references"
                    placeholder="Provide contact details of 2-3 business references (name, organization, phone, email)..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="hearAbout">How did you hear about Kaizari L&D International?</Label>
                  <Select name="hearAbout">
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="referral">Business Referral</SelectItem>
                      <SelectItem value="event">Industry Event/Conference</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="additionalInfo">Additional Comments or Information</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="Any other information you'd like to share..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start space-x-2">
                <Checkbox id="partnerTerms" name="partnerTerms" required />
                <label htmlFor="partnerTerms" className="text-sm leading-relaxed">
                  I confirm that all information provided is accurate and complete. I understand that this application will be reviewed and Kaizari L&D International will contact us to discuss partnership opportunities.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#005a7c] hover:bg-[#004a66] text-white h-12 text-lg"
              >
                Submit Partnership Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Scroll-triggered Survey Popup */}
      <MarketPlusSurveyPopup trigger="scroll" />
    </div>
  );
}
