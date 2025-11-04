import { Mail, Phone, MapPin, Send, TrendingUp, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent } from './ui/card';
import { toast } from 'sonner@2.0.3';

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    
    // Check if running on Netlify (form will submit normally)
    if (form.hasAttribute('data-netlify')) {
      // Let Netlify handle the submission
      return;
    }
    
    // For local development, prevent default and show toast
    e.preventDefault();
    toast.success('Thank you! We will get back to you within 24 hours.');
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      content: 'admin@kaizarildinternational.com',
      link: 'mailto:admin@kaizarildinternational.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      content: '+254 713 664 234',
      link: 'tel:+254713664234',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      content: 'JKUAT Towers 17th floor, Kenyatta Avenue',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#005a7c] mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Interested in our programs? We're here to help you transform your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <a
                    href={info.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#f57c00] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">{info.title}</div>
                      <div className="text-[#005a7c] group-hover:text-[#f57c00] transition-colors">
                        {info.content}
                      </div>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-[#005a7c] to-[#003d54] text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl mb-2">Quick Response</h3>
                <p className="text-gray-200 text-sm">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </CardContent>
            </Card>

            {/* Market+ Survey Promotion */}
            <Card className="bg-gradient-to-br from-[#f57c00] to-[#ff9500] text-white border-2 border-[#f57c00]">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Market+ Survey</h3>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  Share your training needs in our quick 3-minute survey and help us serve you better.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white text-[#f57c00] hover:bg-gray-100 border-white"
                  onClick={() => window.open('https://forms.gle/cmZgJUiS7ekyf9FS9', '_blank')}
                >
                  Participate Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 shadow-lg">
            <CardContent className="pt-6">
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input id="contact-name" name="name" required placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input id="contact-email" name="email" type="email" required placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input id="contact-phone" name="phone" type="tel" placeholder="+254 700 000 000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-company">Company Name</Label>
                    <Input id="contact-company" name="company" placeholder="Your Company" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-interest">I'm Interested In *</Label>
                  <Select name="interest" required>
                    <SelectTrigger id="contact-interest">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="course">Specific Course/Event</SelectItem>
                      <SelectItem value="corporate">Corporate Training Program</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="trainer">Becoming a Trainer</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Your Message *</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your training needs or any questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#f57c00] hover:bg-[#d66a00] text-white"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
