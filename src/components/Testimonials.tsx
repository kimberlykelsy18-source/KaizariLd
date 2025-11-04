import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Amani Mwangi',
      role: 'Finance Manager',
      company: 'Nairobi Finance Group',
      content: 'The Excel Financial Modeling training exceeded my expectations. I can now build complex models with confidence. The practical examples made all the difference!',
      rating: 5,
      initials: 'AM',
      image: 'https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwd29tYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjAxODQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Jabari Kimani',
      role: 'Business Analyst',
      company: 'East Africa Consulting Partners',
      content: 'Fantastic training experience! The instructors were knowledgeable and patient. I\'ve already applied what I learned to my current projects with great results.',
      rating: 5,
      initials: 'JK',
      image: 'https://images.unsplash.com/photo-1616804827035-f4aa814c14ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFtZXJpY2FuJTIwYnVzaW5lc3NtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMDE4NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Zawadi Omondi',
      role: 'Data Analyst',
      company: 'Mombasa Tech Solutions',
      content: 'Best investment in my professional development this year. The training was well-structured and the support materials were excellent. Highly recommend!',
      rating: 5,
      initials: 'ZO',
      image: 'https://images.unsplash.com/photo-1675383094481-3e2088da943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMDE4NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Neema Wanjiku',
      role: 'HR Coordinator',
      company: 'Kisumu Metro Services',
      content: 'The trainers genuinely care about your learning. They took time to answer all my questions and provided additional resources. Worth every penny!',
      rating: 5,
      initials: 'NW',
      image: 'https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwd29tYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjAxODQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="text-white">
                      {testimonial.initials}
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
