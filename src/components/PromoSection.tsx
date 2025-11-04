import { Sparkles, TrendingUp, Award, Users2, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PromoSection() {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Certified Training',
      description: 'All programs come with internationally recognized certificates',
    },
    {
      icon: <Users2 className="h-8 w-8" />,
      title: 'Expert Trainers',
      description: 'Learn from industry leaders with decades of experience',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Proven Results',
      description: 'Track record of measurable performance improvements',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#005a7c] to-[#003d54] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f57c00] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f57c00] rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwb2ZmaWNlJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzYyMDE4NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Training"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f57c00] rounded-full">
              <Sparkles className="h-5 w-5" />
              <span>Why Choose Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
              Empowering Growth Through{' '}
              <span className="text-[#f57c00]">Excellence in Learning</span>
            </h2>

            <p className="text-xl text-gray-200">
              We don't just deliver training – we partner with you to create lasting transformation. 
              Our programs are designed to deliver immediate impact and long-term value.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f57c00] rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Market+ Survey Banner */}
            <div className="bg-white/10 backdrop-blur-sm border-2 border-[#f57c00]/50 rounded-xl p-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#f57c00] p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Help Shape Our Future Programs</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    Participate in our Market+ Product Research Survey and influence the training solutions we develop. 
                    Your insights matter!
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white text-[#005a7c] hover:bg-gray-100 border-white"
                    onClick={() => window.open('https://forms.gle/cmZgJUiS7ekyf9FS9', '_blank')}
                  >
                    Take Survey
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-[#f57c00] hover:bg-[#d66a00] text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
