import { Rocket, Clock, Mail, Bell } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { toast } from 'sonner@2.0.3';
import { MarketPlusSurveyPopup } from '../components/MarketPlusSurveyPopup';

export function LearningHubPage() {
  const handleNotifySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const selectedCourses = formData.getAll('courses');
    
    // Log the form data for debugging (remove in production)
    console.log('Form submitted with:', {
      email: formData.get('email'),
      name: formData.get('name'),
      courses: selectedCourses,
      customCourse: formData.get('customCourse')
    });
    
    toast.success('Thank you! We\'ll notify you when the Learning Hub launches and include your preferred courses.');
  };

  const courseOptions = [
    'Financial Modeling & Analysis',
    'Data Analytics & Visualization',
    'Project Management',
    'Leadership & Management',
    'Digital Marketing',
    'Business Strategy',
    'Excel Advanced Techniques',
    'PowerBI & Tableau',
    'Risk Management',
    'Corporate Finance',
    'Human Resources Management',
    'Supply Chain Management'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #005a7c 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#f57c00] to-[#ff9500] rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
                <Rocket className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#005a7c] rounded-full flex items-center justify-center">
                <Clock className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[#f57c00]/10 text-[#f57c00] rounded-full text-sm mb-6">
              Launching Soon
            </span>
            
            <h1 className="text-4xl md:text-6xl text-[#005a7c] mb-6">
              Learning Hub
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Our dedicated online learning platform is coming soon
            </p>
            
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              We're building something special – a comprehensive learning management system where you can access self-paced courses, track your progress, earn certificates, and unlock your potential 24/7.
            </p>

            {/* Notify Me Form */}
            <Card className="max-w-2xl mx-auto shadow-xl">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <Bell className="h-5 w-5 text-[#f57c00]" />
                  <h3 className="text-lg text-[#005a7c]">Get Notified When We Launch</h3>
                </div>
                <form 
                  onSubmit={handleNotifySubmit}
                  className="space-y-6"
                  name="learning-hub-notify"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="learning-hub-notify" />
                  
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  {/* Course Preferences */}
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-medium text-[#005a7c]">
                        Which training courses would you like to see on our LMS platform? *
                      </Label>
                      <p className="text-sm text-gray-600 mt-1 mb-4">
                        Select all that interest you (minimum 3 required)
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto border rounded-lg p-4 bg-gray-50/50">
                      {courseOptions.map((course, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`course-${index}`}
                            name="courses"
                            value={course}
                            className="data-[state=checked]:bg-[#f57c00] data-[state=checked]:border-[#f57c00]"
                          />
                          <Label 
                            htmlFor={`course-${index}`}
                            className="text-sm cursor-pointer leading-tight"
                          >
                            {course}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Custom Course Request */}
                  <div className="space-y-2">
                    <Label htmlFor="customCourse">
                      Any other specific courses you'd like to see? (Optional)
                    </Label>
                    <Textarea
                      id="customCourse"
                      name="customCourse"
                      placeholder="Tell us about any other training topics you're interested in..."
                      rows={3}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#f57c00] hover:bg-[#d66a00] py-3"
                    size="lg"
                  >
                    Notify Me & Share My Preferences
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-[#005a7c] mb-4">What to Expect</h2>
            <p className="text-xl text-gray-600">Powerful features designed for your learning journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Self-Paced Learning',
                description: 'Access courses anytime, anywhere. Learn at your own pace with lifetime access to materials.',
                icon: '📚',
              },
              {
                title: 'Interactive Content',
                description: 'Engage with video lessons, quizzes, assignments, and downloadable resources.',
                icon: '🎯',
              },
              {
                title: 'Track Progress',
                description: 'Monitor your learning journey with detailed analytics and achievement tracking.',
                icon: '📊',
              },
              {
                title: 'Earn Certificates',
                description: 'Receive professional certificates upon course completion to showcase your skills.',
                icon: '🏆',
              },
              {
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with real-world experience and expertise.',
                icon: '👨‍🏫',
              },
              {
                title: 'Community Support',
                description: 'Connect with fellow learners, participate in discussions, and grow together.',
                icon: '🤝',
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl text-[#005a7c] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#005a7c] to-[#00789e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            In the Meantime...
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Explore our instructor-led courses and upcoming events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#f57c00] hover:bg-[#d66a00] text-white"
              onClick={() => {
                const coursesSection = document.getElementById('courses');
                if (coursesSection) {
                  coursesSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#courses';
                }
              }}
            >
              Browse Courses
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-[#005a7c] hover:bg-gray-100"
              onClick={() => {
                const eventsPage = document.getElementById('events');
                if (eventsPage) {
                  eventsPage.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#events';
                }
              }}
            >
              View Events
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-12 w-12 text-[#f57c00] mx-auto mb-6" />
          <h2 className="text-2xl text-[#005a7c] mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Want to learn more about our upcoming Learning Hub or discuss custom training solutions?
          </p>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* Scroll-triggered Survey Popup */}
      <MarketPlusSurveyPopup trigger="scroll" />
    </div>
  );
}
