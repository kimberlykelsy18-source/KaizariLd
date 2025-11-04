import { Building2, Target, Eye, Award, Users, Briefcase, TrendingUp, CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MarketPlusSurveyPopup } from '../components/MarketPlusSurveyPopup';

export function CompanyProfile() {
  const services = [
    {
      title: 'Corporate In-House Training',
      description: 'Customized training programs delivered at your organization\'s premises, tailored to your specific business needs and challenges.',
      icon: Building2,
    },
    {
      title: 'Public Training Workshops',
      description: 'Open enrollment courses where professionals from different organizations come together to learn and network.',
      icon: Users,
    },
    {
      title: 'Individual Professional Development',
      description: 'Specialized courses designed for professionals seeking to advance their skills and career prospects.',
      icon: TrendingUp,
    },
    {
      title: 'Consultancy Services',
      description: 'Expert advisory services in finance, strategy, and organizational development to help your business thrive.',
      icon: Briefcase,
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We deliver world-class training that meets international standards while addressing local market needs.',
    },
    {
      title: 'Practical Application',
      description: 'Our training focuses on real-world scenarios and hands-on practice, ensuring immediate workplace impact.',
    },
    {
      title: 'Client-Centric',
      description: 'We listen to our clients\' needs and customize solutions that drive measurable business results.',
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and professionalism in all our business dealings.',
    },
  ];

  const stats = [
    { number: '300+', label: 'Professionals Trained' },
    { number: '25+', label: 'Corporate Clients' },
    { number: '50+', label: 'Training Programs' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#005a7c] to-[#f57c00] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6">
              Company Profile
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Transforming Organizations Through Strategic Learning & Development
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl text-[#005a7c] mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                <span className="text-[#f57c00]">Kaizari L&D International</span> is a premier corporate training and development company based in Nairobi, Kenya. We specialize in delivering high-quality, practical training solutions to both B2B and B2C clients across East Africa.
              </p>
              <p>
                Our mission is simple: to empower professionals and organizations with the skills, knowledge, and tools they need to excel in today's dynamic business environment. We achieve this through expertly designed training programs that bridge the gap between theory and practice.
              </p>
              <p>
                With a team of seasoned trainers and industry experts, we deliver training in Finance, Leadership, and Essential Business Tools. Our approach combines international best practices with local market insights, ensuring our clients receive relevant, actionable knowledge.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                onClick={() => window.location.hash = 'courses'}
                className="bg-[#f57c00] hover:bg-[#d66a00] text-white px-8 py-6 text-lg"
              >
                View Our Courses
              </Button>
              <Button
                onClick={() => window.location.hash = 'contact'}
                variant="outline"
                className="border-2 border-[#005a7c] text-[#005a7c] hover:bg-[#005a7c] hover:text-white px-8 py-6 text-lg"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1738938744238-0f79909b742a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc2MjAyMDMzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Kaizari L&D Team"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#005a7c] to-[#f57c00] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl mb-2">{stat.number}</div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-[#005a7c]/20 hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-[#005a7c]/10 to-[#005a7c]/5">
              <div className="flex items-center gap-3">
                <div className="bg-[#005a7c] rounded-full p-3">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-[#005a7c]">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver exceptional, practical training solutions that empower individuals and organizations to achieve their full potential through continuous learning and professional development.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#f57c00]/20 hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-[#f57c00]/10 to-[#f57c00]/5">
              <div className="flex items-center gap-3">
                <div className="bg-[#f57c00] rounded-full p-3">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-[#005a7c]">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the leading learning and development partner in East Africa, recognized for transforming organizations through innovative, high-impact training programs that drive business excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-[#005a7c] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training solutions designed to meet diverse organizational and individual needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-l-4 border-l-[#f57c00]">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#f57c00]/10 rounded-full p-3 flex-shrink-0">
                      <service.icon className="h-8 w-8 text-[#f57c00]" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-[#005a7c] mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* In-House Training Highlight */}
          <Card className="mt-8 bg-gradient-to-r from-[#005a7c] to-[#f57c00] text-white border-0">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Building2 className="h-12 w-12 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl mb-3">
                    Specialized In-House Training Programs
                  </h3>
                  <p className="text-lg opacity-90 mb-4">
                    We understand that every organization has unique challenges and goals. Our in-house training programs are fully customized to address your specific business needs, industry context, and organizational culture. We work closely with your team to design and deliver training that creates immediate, measurable impact.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                      <span>Tailored curriculum design</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                      <span>Flexible scheduling</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                      <span>On-site delivery</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                      <span>Post-training support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                      <span>ROI measurement</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                      <span>Team-building focus</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-[#005a7c] mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-[#f57c00]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#f57c00]" />
                </div>
                <h3 className="text-xl text-[#005a7c] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjIwMjAzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Training Session"
                className="rounded-lg shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-3xl text-[#005a7c] mb-6">
                Why Choose Kaizari L&D International?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#f57c00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg text-[#005a7c] mb-1">Expert Trainers</h3>
                    <p className="text-gray-700">Industry practitioners with real-world experience and proven training expertise.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#f57c00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg text-[#005a7c] mb-1">Practical Approach</h3>
                    <p className="text-gray-700">Hands-on training with real business cases, tools, and templates you can use immediately.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#f57c00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg text-[#005a7c] mb-1">Customized Solutions</h3>
                    <p className="text-gray-700">Training programs tailored to your organization's specific needs and challenges.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#f57c00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg text-[#005a7c] mb-1">Comprehensive Coverage</h3>
                    <p className="text-gray-700">From finance and leadership to technical tools - we cover all critical business skills.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#f57c00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg text-[#005a7c] mb-1">Proven Track Record</h3>
                    <p className="text-gray-700">100% client satisfaction rate with leading organizations across East Africa.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#f57c00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg text-[#005a7c] mb-1">Post-Training Support</h3>
                    <p className="text-gray-700">Ongoing support and resources to ensure lasting impact and continuous improvement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Training Focus Areas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-[#005a7c] mb-4">
            Our Training Focus Areas
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-[#f57c00]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#005a7c] text-center mb-3">Finance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#f57c00]" />
                  Financial Modeling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#f57c00]" />
                  Budgeting & Forecasting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#f57c00]" />
                  Financial Analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#f57c00]" />
                  Corporate Finance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#f57c00]" />
                  AI & Financial Technology
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-[#005a7c]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#005a7c] text-center mb-3">Leadership</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#005a7c]" />
                  Strategic Leadership
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#005a7c]" />
                  Emotional Intelligence
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#005a7c]" />
                  Team Building
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#005a7c]" />
                  Change Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#005a7c]" />
                  Performance Management
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-[#f57c00]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#005a7c] text-center mb-3">Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#f57c00]" />
                  Advanced Excel
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#f57c00]" />
                  Power BI
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#f57c00]" />
                  SQL & Databases
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#f57c00]" />
                  Tableau
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#f57c00]" />
                  Data Analytics
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-[#005a7c] to-[#f57c00] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">
              Get In Touch
            </h2>
            <p className="text-xl opacity-90">
              Let's discuss how we can transform your organization through strategic training
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur hover:bg-white/20 transition-all">
              <CardContent className="pt-6 text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Our Office</h3>
                <p className="opacity-90">
                  JKUAT Towers 17th floor<br />
                  Kenyatta Avenue<br />
                  Nairobi, Kenya
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur hover:bg-white/20 transition-all">
              <CardContent className="pt-6 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Call Us</h3>
                <p className="opacity-90">
                  +254713664234
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur hover:bg-white/20 transition-all">
              <CardContent className="pt-6 text-center">
                <Mail className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Email Us</h3>
                <p className="opacity-90">
                  admin@kaizarildinternational.com
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => window.location.hash = 'contact'}
              className="bg-white text-[#005a7c] hover:bg-gray-100 px-8 py-6 text-lg shadow-lg"
            >
              Send Us a Message
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll-triggered Survey Popup */}
      <MarketPlusSurveyPopup trigger="scroll" />
    </div>
  );
}
