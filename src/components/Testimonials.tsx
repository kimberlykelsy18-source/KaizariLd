import { Star, Quote, User } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mutinda',
      role: 'Senior Finance Analyst',
      company: 'ZEP-RE (PTA Reinsurance Company)',
      content: 'The Financial Modeling training with Kaizarild was transformative for our team. The hands-on Excel techniques and practical case studies have significantly improved how we build and analyze financial models.',
      rating: 5,
      initials: 'SM',
    },
    {
      name: 'David Njoroge',
      role: 'Investment Manager',
      company: 'ZEP-RE (PTA Reinsurance Company)',
      content: 'Exceptional training experience! The instructors demonstrated deep expertise in financial modeling. The customized approach to our reinsurance industry needs made the learning immediately applicable.',
      rating: 5,
      initials: 'DN',
    },
    {
      name: 'Grace Wambui',
      role: 'Risk Management Officer',
      company: 'ZEP-RE (PTA Reinsurance Company)',
      content: 'Outstanding training program! The Excel advanced features and financial analysis techniques have enhanced our risk assessment capabilities. Highly professional trainers who truly understand corporate needs.',
      rating: 5,
      initials: 'GW',
    },
    {
      name: 'Peter Ochieng',
      role: 'Actuarial Analyst',
      company: 'ZEP-RE (PTA Reinsurance Company)',
      content: 'The trainers were knowledgeable and patient, ensuring everyone understood the concepts. The practical exercises were directly relevant to our daily work. A valuable investment in professional development.',
      rating: 5,
      initials: 'PO',
    },
  ];

  const stats = [
    { value: '100%', label: 'Client Satisfaction' },
    { value: '25+', label: 'Companies Served' },
    { value: '300+', label: 'Professionals Trained' },
    { value: '4.9/5', label: 'Average Rating' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#005a7c] mb-4">
            Our Impact Speaks Volumes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped organizations and professionals achieve excellence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl text-[#f57c00] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute top-4 right-4 text-[#f57c00] opacity-20">
                <Quote className="h-16 w-16" />
              </div>
              
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#f57c00] text-[#f57c00]" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 bg-[#005a7c]">
                    <AvatarFallback className="text-white bg-[#005a7c]">
                      <User className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-[#005a7c]">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
