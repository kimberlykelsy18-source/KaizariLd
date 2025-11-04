import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Sparkles, Building2, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner@2.0.3';
import { EventCalendar } from '../components/EventCalendar';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MarketPlusSurveyPopup } from '../components/MarketPlusSurveyPopup';

type EventType = 'course' | 'workshop' | 'event' | 'survey';

interface HighlightedEvent {
  title: string;
  date: string;
  description: string;
  location: string;
  duration: string;
  price: {
    individual: string;
    corporate: string;
  };
  originalPrice?: {
    individual: string;
    corporate: string;
  };
  discount?: string;
  image: string;
  seats: string;
  status?: 'filling-fast' | 'open';
  type: EventType;
  details: string;
}

export function EventsPage() {
  const [requestDialogOpen, setRequestDialogOpen] = useState(false);
  const [requestType, setRequestType] = useState<'corporate' | 'individual'>('corporate');
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const [selectedBookingEvent, setSelectedBookingEvent] = useState<HighlightedEvent | null>(null);
  const [payerType, setPayerType] = useState<'self' | 'company'>('self');
  const [participantType, setParticipantType] = useState<'individual' | 'company'>('individual');

  // Highlighted Upcoming Events
  const highlightedEvents: HighlightedEvent[] = [
    {
      title: 'Financial Modeling with Excel',
      date: 'November 19-21, 2025',
      description: 'Master advanced Excel techniques for financial analysis and comprehensive modeling',
      location: 'Ibis Styles Hotel Nairobi',
      duration: '3 Days Intensive | 9:00 AM - 5:00 PM',
      price: {
        individual: 'KSh 45,000',
        corporate: 'KSh 120,000 (up to 5 pax)',
      },
      originalPrice: {
        individual: 'KSh 65,000',
        corporate: 'KSh 180,000',
      },
      discount: 'EARLY BIRD SPECIAL - Save 30%',
      image: 'https://images.unsplash.com/photo-1650784855038-9f4d5ed154a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGZpbmFuY2lhbCUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjAxODQzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      seats: '10 seats remaining',
      status: 'filling-fast',
      type: 'course' as const,
      details: `Comprehensive 3-day intensive training program covering:

• Advanced Excel Functions & Formulas
• Financial Statement Analysis
• Building Dynamic Financial Models
• Scenario Planning & Sensitivity Analysis
• Data Visualization & Dashboard Creation
• Best Practices in Financial Modeling

Perfect for finance professionals, analysts, and managers looking to enhance their Excel skills and financial modeling capabilities.

Includes: Course materials, certificate of completion, and lifetime access to resources.`,
    },
    {
      title: 'Market + Product Research Survey',
      date: 'Ongoing | Open Now',
      description: 'Help us shape the future of corporate training - Share your insights!',
      location: 'Online Survey',
      duration: '10-15 Minutes',
      price: {
        individual: 'FREE + Get 15% Discount Voucher',
        corporate: 'FREE + Win Training Worth KSh 120,000',
      },
      image: 'https://images.unsplash.com/photo-1595988163550-060b7c94acee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJ1c2luZXNzJTIwc3VydmV5JTIwcmVzZWFyY2h8ZW58MXx8fHwxNzYyMDE4NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      seats: '50 participants needed',
      status: 'open',
      type: 'survey' as const,
      details: `We're conducting comprehensive market research to better understand training needs in the corporate sector!

EXCITING REWARDS FOR PARTICIPANTS:
• 🎁 EVERYONE gets a 15% discount voucher for any future course
• 🎓 5 LUCKY WINNERS will receive completely FREE courses (worth up to KSh 120,000)
• 🏆 1 GRAND PRIZE WINNER gets FREE team training for up to 5 people
• 📚 Early access to new courses (survey participants only)
• 🎯 Monthly prize draws with more chances to win

Your Input Matters:
We want to understand your organization's training challenges, preferences, and future needs. Your feedback will directly influence our upcoming programs and services.

The survey takes just 10-15 minutes and covers:
• Current training challenges in your organization
• Preferred learning formats and delivery methods
• Topics and skills most needed
• Budget and decision-making processes

All responses are confidential and will be used solely for improving our services.

Winners will be announced monthly via email and on our website!`,
    },
    {
      title: 'Corporate Team Building Workshop',
      date: 'December 10, 2025',
      description: 'Strengthen team bonds and improve collaboration through engaging outdoor activities',
      location: 'Nairobi National Park Area',
      duration: '1 Day | 8:00 AM - 5:00 PM',
      price: {
        individual: 'N/A',
        corporate: 'KSh 8,000 per person (min. 10 pax)',
      },
      image: 'https://images.unsplash.com/flagged/photo-1568187113326-974ff6d0c6b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwYnVpbGRpbmclMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzYyMDE2ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      seats: 'Group bookings only',
      status: 'open',
      type: 'event' as const,
      details: `An engaging full-day team building experience designed to strengthen relationships and boost collaboration!

Activities Include:
• Ice-breaking and trust-building exercises
• Problem-solving challenges
• Team sports and outdoor games
• Communication workshops
• Leadership rotation activities
• Reflective group discussions

Benefits:
• Improved team communication
• Enhanced trust and collaboration
• Better conflict resolution skills
• Increased employee engagement
• Stronger workplace relationships

Package Includes: Transportation, breakfast, lunch, refreshments, all activity materials, professional facilitators, and certificates of participation.

Minimum 10 participants required. Perfect for departments, project teams, or entire organizations.`,
    },
    {
      title: 'Leadership Development Retreat',
      date: 'December 14-15, 2025',
      description: 'Intensive leadership development program in a serene environment',
      location: 'Great Rift Valley Lodge',
      duration: '2 Days | Residential',
      price: {
        individual: 'KSh 75,000',
        corporate: 'KSh 280,000 (up to 5 pax)',
      },
      originalPrice: {
        individual: 'KSh 95,000',
        corporate: 'KSh 350,000',
      },
      discount: 'LIMITED TIME OFFER - 20% OFF',
      image: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwd29ya3Nob3AlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjIwMTcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      seats: '15 seats available',
      status: 'open',
      type: 'workshop' as const,
      details: `An immersive 2-day residential retreat for emerging and established leaders.

Program Highlights:
• Strategic thinking and vision development
• Emotional intelligence for leaders
• Leading through change and uncertainty
• Building high-performance teams
• Executive presence and communication
• Personal leadership philosophy

Format:
Mix of interactive workshops, case studies, peer coaching, individual reflection time, and networking sessions in a tranquil environment away from office distractions.

Includes: All meals, accommodation, course materials, leadership assessment tools, one-on-one coaching session, and certificate.`,
    },
    {
      title: 'End-of-Year Networking Mixer',
      date: 'December 20, 2025',
      description: 'Connect with fellow professionals and celebrate the year\'s achievements',
      location: 'Radisson Blu Hotel, Nairobi',
      duration: '6:00 PM - 10:00 PM',
      price: {
        individual: 'KSh 5,000',
        corporate: 'KSh 20,000 (up to 5 pax)',
      },
      image: 'https://images.unsplash.com/photo-1675716921224-e087a0cca69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JraW5nJTIwZXZlbnQlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjE5OTcyODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      seats: '50 seats available',
      status: 'open',
      type: 'event' as const,
      details: `Join us for an evening of professional networking, celebration, and connection!

Event Features:
• Welcome cocktails and canapés
• Speed networking sessions
• Success story sharing
• Industry insights panel
• Prize draws and giveaways
• Live entertainment
• Year-in-review presentation

Who Should Attend:
Past participants, corporate partners, trainers, HR professionals, and business leaders looking to expand their professional network.

Dress Code: Smart Business Casual

Includes: Food, drinks, networking materials, and access to exclusive 2026 training previews and early-bird discounts.`,
    },
  ];

  // Q4 2025 Events
  const q4Events = [
    {
      id: 'fm-nov',
      title: 'Financial Modeling with Excel',
      date: new Date(2025, 10, 19),
      endDate: new Date(2025, 10, 21),
      duration: '3 Days',
      location: 'Ibis Styles Hotel Nairobi',
      description: 'Master advanced Excel techniques for financial analysis and comprehensive modeling. Comprehensive training covering advanced functions, financial statement analysis, building dynamic models, scenario planning, and data visualization.',
      price: {
        individual: 'KSh 45,000',
        corporate: 'KSh 120,000',
      },
      seats: '10 seats remaining',
      type: 'course' as const,
    },
    {
      id: 'survey-nov',
      title: 'Market + Product Research Survey',
      date: new Date(2025, 10, 1),
      endDate: new Date(2025, 11, 31),
      duration: '10-15 Minutes',
      location: 'Online Survey',
      description: 'Help us shape the future of corporate training! Participate in our survey and get a 15% discount voucher plus a chance to win FREE team training.',
      price: {
        individual: 'FREE',
        corporate: 'FREE',
      },
      seats: '50 participants needed',
      type: 'event' as const,
    },
    {
      id: 'team-building-dec',
      title: 'Corporate Team Building Workshop',
      date: new Date(2025, 11, 10),
      duration: '1 Day',
      location: 'Nairobi National Park Area',
      description: 'Strengthen team bonds and improve collaboration through engaging outdoor activities, trust-building exercises, and team sports. Minimum 10 participants required.',
      price: {
        individual: 'N/A',
        corporate: 'KSh 8,000 per person',
      },
      seats: 'Group bookings only',
      type: 'event' as const,
    },
    {
      id: 'leadership-retreat-dec',
      title: 'Leadership Development Retreat',
      date: new Date(2025, 11, 14),
      endDate: new Date(2025, 11, 15),
      duration: '2 Days Residential',
      location: 'Great Rift Valley Lodge',
      description: 'Intensive leadership development program focusing on strategic thinking, emotional intelligence, and building high-performance teams. Includes accommodation and all meals.',
      price: {
        individual: 'KSh 75,000',
        corporate: 'KSh 280,000',
      },
      seats: '15 seats available',
      type: 'workshop' as const,
    },
    {
      id: 'powerbi-dec',
      title: 'Power BI Masterclass',
      date: new Date(2025, 11, 16),
      endDate: new Date(2025, 11, 18),
      duration: '3 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Transform data into actionable insights with Microsoft Power BI. Learn data modeling, DAX formulas, creating interactive dashboards, and advanced visualization techniques.',
      price: {
        individual: 'KSh 48,000',
        corporate: 'KSh 135,000',
      },
      seats: '15 seats available',
      type: 'course' as const,
    },
    {
      id: 'networking-dec',
      title: 'End-of-Year Networking Mixer',
      date: new Date(2025, 11, 20),
      duration: '4 Hours',
      location: 'Radisson Blu Hotel, Nairobi',
      description: 'Connect with fellow professionals and celebrate the year\'s achievements. Includes cocktails, speed networking, industry insights panel, and exclusive 2026 training previews.',
      price: {
        individual: 'KSh 5,000',
        corporate: 'KSh 20,000',
      },
      seats: '50 seats available',
      type: 'event' as const,
    },
  ];

  // 2026 Training Calendar
  const year2026Events = [
    // January 2026
    {
      id: 'leadership-jan',
      title: 'Strategic Leadership Excellence',
      date: new Date(2026, 0, 13),
      endDate: new Date(2026, 0, 15),
      duration: '3 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Develop strategic thinking and leadership skills to drive organizational success',
      price: {
        individual: 'KSh 50,000',
        corporate: 'KSh 140,000',
      },
      type: 'course' as const,
    },
    {
      id: 'excel-jan',
      title: 'Advanced Excel for Business',
      date: new Date(2026, 0, 27),
      endDate: new Date(2026, 0, 28),
      duration: '2 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Master advanced Excel features to boost productivity and analysis',
      price: {
        individual: 'KSh 38,000',
        corporate: 'KSh 105,000',
      },
      type: 'course' as const,
    },
    // February 2026
    {
      id: 'fm-feb',
      title: 'Financial Modeling with Excel',
      date: new Date(2026, 1, 10),
      endDate: new Date(2026, 1, 12),
      duration: '3 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Master advanced Excel techniques for financial analysis and comprehensive modeling',
      price: {
        individual: 'KSh 45,000',
        corporate: 'KSh 120,000',
      },
      type: 'course' as const,
    },
    {
      id: 'wellness-feb',
      title: 'Workplace Wellness & Mental Health',
      date: new Date(2026, 1, 18),
      duration: '1 Day',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Promote employee wellbeing and create a mentally healthy workplace. Covers stress management, work-life balance, and building resilient teams.',
      price: {
        individual: 'KSh 15,000',
        corporate: 'KSh 60,000',
      },
      type: 'workshop' as const,
    },
    {
      id: 'ei-feb',
      title: 'Emotional Intelligence for Leaders',
      date: new Date(2026, 1, 24),
      endDate: new Date(2026, 1, 25),
      duration: '2 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Enhance your leadership effectiveness through emotional intelligence',
      price: {
        individual: 'KSh 42,000',
        corporate: 'KSh 115,000',
      },
      type: 'course' as const,
    },
    // March 2026
    {
      id: 'powerbi-mar',
      title: 'Power BI Masterclass',
      date: new Date(2026, 2, 9),
      endDate: new Date(2026, 2, 11),
      duration: '3 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Transform data into actionable insights with Microsoft Power BI',
      price: {
        individual: 'KSh 48,000',
        corporate: 'KSh 135,000',
      },
      type: 'course' as const,
    },
    {
      id: 'budget-mar',
      title: 'Budgeting & Forecasting Excellence',
      date: new Date(2026, 2, 23),
      endDate: new Date(2026, 2, 24),
      duration: '2 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Master the art and science of budgeting and financial forecasting',
      price: {
        individual: 'KSh 40,000',
        corporate: 'KSh 110,000',
      },
      type: 'course' as const,
    },
    // April 2026
    {
      id: 'sql-apr',
      title: 'SQL for Data Analysis',
      date: new Date(2026, 3, 6),
      endDate: new Date(2026, 3, 8),
      duration: '3 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Query and analyze databases effectively using SQL',
      price: {
        individual: 'KSh 45,000',
        corporate: 'KSh 125,000',
      },
      type: 'course' as const,
    },
    {
      id: 'team-apr',
      title: 'Team Building & Collaboration',
      date: new Date(2026, 3, 20),
      endDate: new Date(2026, 3, 21),
      duration: '2 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Build cohesive, high-performing teams through effective collaboration strategies',
      price: {
        individual: 'KSh 38,000',
        corporate: 'KSh 100,000',
      },
      type: 'workshop' as const,
    },
    // May 2026
    {
      id: 'fm-may',
      title: 'Financial Modeling with Excel',
      date: new Date(2026, 4, 11),
      endDate: new Date(2026, 4, 13),
      duration: '3 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Master advanced Excel techniques for financial analysis and comprehensive modeling',
      price: {
        individual: 'KSh 45,000',
        corporate: 'KSh 120,000',
      },
      type: 'course' as const,
    },
    {
      id: 'team-building-may',
      title: 'Outdoor Team Building Adventure',
      date: new Date(2026, 4, 16),
      duration: '1 Day',
      location: 'Lake Naivasha',
      description: 'Outdoor adventure focusing on trust-building, communication, and problem-solving through activities like hiking, boat rides, and team challenges.',
      price: {
        individual: 'N/A',
        corporate: 'KSh 9,500 per person',
      },
      type: 'event' as const,
    },
    {
      id: 'ai-finance-may',
      title: 'Financial Analysis with AI Tools',
      date: new Date(2026, 4, 25),
      endDate: new Date(2026, 4, 26),
      duration: '2 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Leverage artificial intelligence and machine learning for advanced financial analysis',
      price: {
        individual: 'KSh 55,000',
        corporate: 'KSh 150,000',
      },
      type: 'course' as const,
    },
    // June 2026
    {
      id: 'python-jun',
      title: 'Python for Data Analytics',
      date: new Date(2026, 5, 8),
      endDate: new Date(2026, 5, 11),
      duration: '4 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Use Python programming for data analysis and automation',
      price: {
        individual: 'KSh 55,000',
        corporate: 'KSh 160,000',
      },
      type: 'course' as const,
    },
    {
      id: 'change-jun',
      title: 'Change Management Leadership',
      date: new Date(2026, 5, 22),
      endDate: new Date(2026, 5, 23),
      duration: '2 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Lead successful organizational change initiatives with confidence',
      price: {
        individual: 'KSh 45,000',
        corporate: 'KSh 125,000',
      },
      type: 'course' as const,
    },
    // July 2026
    {
      id: 'diversity-jul',
      title: 'Diversity & Inclusion in the Workplace',
      date: new Date(2026, 6, 7),
      duration: '1 Day',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Build inclusive workplaces that value diversity. Covers unconscious bias, inclusive leadership, and creating equitable work environments.',
      price: {
        individual: 'KSh 18,000',
        corporate: 'KSh 70,000',
      },
      type: 'workshop' as const,
    },
    {
      id: 'powerbi-jul',
      title: 'Power BI Masterclass',
      date: new Date(2026, 6, 13),
      endDate: new Date(2026, 6, 15),
      duration: '3 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Transform data into actionable insights with Microsoft Power BI',
      price: {
        individual: 'KSh 48,000',
        corporate: 'KSh 135,000',
      },
      type: 'course' as const,
    },
    {
      id: 'corp-finance-jul',
      title: 'Corporate Finance Fundamentals',
      date: new Date(2026, 6, 27),
      endDate: new Date(2026, 6, 28),
      duration: '2 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Essential corporate finance concepts for business professionals',
      price: {
        individual: 'KSh 35,000',
        corporate: 'KSh 90,000',
      },
      type: 'course' as const,
    },
    // August 2026
    {
      id: 'fm-aug',
      title: 'Financial Modeling with Excel',
      date: new Date(2026, 7, 10),
      endDate: new Date(2026, 7, 12),
      duration: '3 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Master advanced Excel techniques for financial analysis and comprehensive modeling',
      price: {
        individual: 'KSh 45,000',
        corporate: 'KSh 120,000',
      },
      type: 'course' as const,
    },
    {
      id: 'tableau-aug',
      title: 'Tableau Data Visualization',
      date: new Date(2026, 7, 24),
      endDate: new Date(2026, 7, 25),
      duration: '2 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Create compelling data visualizations and dashboards with Tableau',
      price: {
        individual: 'KSh 42,000',
        corporate: 'KSh 115,000',
      },
      type: 'course' as const,
    },
    // September 2026
    {
      id: 'leadership-sep',
      title: 'Strategic Leadership Excellence',
      date: new Date(2026, 8, 7),
      endDate: new Date(2026, 8, 9),
      duration: '3 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Develop strategic thinking and leadership skills to drive organizational success',
      price: {
        individual: 'KSh 50,000',
        corporate: 'KSh 140,000',
      },
      type: 'course' as const,
    },
    {
      id: 'innovation-sep',
      title: 'Innovation & Creative Thinking Workshop',
      date: new Date(2026, 8, 15),
      duration: '1 Day',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Foster innovation and creative problem-solving in your team. Hands-on workshop with design thinking, brainstorming techniques, and innovation frameworks.',
      price: {
        individual: 'KSh 20,000',
        corporate: 'KSh 75,000',
      },
      type: 'workshop' as const,
    },
    {
      id: 'excel-sep',
      title: 'Advanced Excel for Business',
      date: new Date(2026, 8, 21),
      endDate: new Date(2026, 8, 22),
      duration: '2 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Master advanced Excel features to boost productivity and analysis',
      price: {
        individual: 'KSh 38,000',
        corporate: 'KSh 105,000',
      },
      type: 'course' as const,
    },
    {
      id: 'team-building-sep',
      title: 'Mid-Quarter Team Building Retreat',
      date: new Date(2026, 8, 26),
      duration: '1 Day',
      location: 'Kiambu Area',
      description: 'Refresh and re-energize your team with outdoor activities, team challenges, and collaboration exercises.',
      price: {
        individual: 'N/A',
        corporate: 'KSh 7,500 per person',
      },
      type: 'event' as const,
    },
    // October 2026
    {
      id: 'fm-oct',
      title: 'Financial Modeling with Excel',
      date: new Date(2026, 9, 12),
      endDate: new Date(2026, 9, 14),
      duration: '3 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Master advanced Excel techniques for financial analysis and comprehensive modeling',
      price: {
        individual: 'KSh 45,000',
        corporate: 'KSh 120,000',
      },
      type: 'course' as const,
    },
    {
      id: 'sql-oct',
      title: 'SQL for Data Analysis',
      date: new Date(2026, 9, 26),
      endDate: new Date(2026, 9, 28),
      duration: '3 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Query and analyze databases effectively using SQL',
      price: {
        individual: 'KSh 45,000',
        corporate: 'KSh 125,000',
      },
      type: 'course' as const,
    },
    // November 2026
    {
      id: 'powerbi-nov',
      title: 'Power BI Masterclass',
      date: new Date(2026, 10, 9),
      endDate: new Date(2026, 10, 11),
      duration: '3 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Transform data into actionable insights with Microsoft Power BI',
      price: {
        individual: 'KSh 48,000',
        corporate: 'KSh 135,000',
      },
      type: 'course' as const,
    },
    {
      id: 'ei-nov',
      title: 'Emotional Intelligence for Leaders',
      date: new Date(2026, 10, 23),
      endDate: new Date(2026, 10, 24),
      duration: '2 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Enhance your leadership effectiveness through emotional intelligence',
      price: {
        individual: 'KSh 42,000',
        corporate: 'KSh 115,000',
      },
      type: 'course' as const,
    },
    // December 2026
    {
      id: 'fm-dec',
      title: 'Financial Modeling with Excel',
      date: new Date(2026, 11, 7),
      endDate: new Date(2026, 11, 9),
      duration: '3 Days',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Master advanced Excel techniques for financial analysis and comprehensive modeling',
      price: {
        individual: 'KSh 45,000',
        corporate: 'KSh 120,000',
      },
      type: 'course' as const,
    },
    {
      id: 'conflict-dec',
      title: 'Conflict Resolution & Mediation',
      date: new Date(2026, 11, 11),
      duration: '1 Day',
      location: 'JKUAT Towers, 17th Floor',
      description: 'Learn practical techniques for resolving workplace conflicts and facilitating constructive dialogue. Essential for managers and HR professionals.',
      price: {
        individual: 'KSh 22,000',
        corporate: 'KSh 80,000',
      },
      type: 'workshop' as const,
    },
    {
      id: 'year-end-celebration-dec',
      title: 'Year-End Celebration & Awards Gala',
      date: new Date(2026, 11, 18),
      duration: '5 Hours',
      location: 'Safari Park Hotel, Nairobi',
      description: 'Celebrate achievements, recognize outstanding participants, network with industry leaders, and get exclusive previews of 2027 programs. Includes dinner, entertainment, and awards ceremony.',
      price: {
        individual: 'KSh 6,000',
        corporate: 'KSh 25,000',
      },
      type: 'event' as const,
    },
  ];

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Custom training request submitted! Our team will contact you within 24 hours.');
    setRequestDialogOpen(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Booking request submitted! We will contact you shortly to confirm your registration.');
    setBookingDialogOpen(false);
    setSelectedBookingEvent(null);
  };

  const handleRegisterClick = (event: HighlightedEvent) => {
    setSelectedBookingEvent(event);
    setBookingDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#005a7c] to-[#003d54] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Events & Training Calendar</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our upcoming training events and plan your professional development journey
          </p>
        </div>
      </section>

      {/* Highlighted Upcoming Events */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl text-[#005a7c] mb-2">Upcoming Highlights</h2>
              <p className="text-gray-600">Don't miss these featured opportunities and events</p>
            </div>
            <Sparkles className="h-8 w-8 text-[#f57c00]" />
          </div>

          <div className="space-y-4">
            {highlightedEvents.map((event, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 hover:border-l-[#f57c00] border-l-transparent">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row gap-6 p-6">
                        {/* Image Section */}
                        <div className="relative md:w-64 h-40 md:h-auto flex-shrink-0 rounded-lg overflow-hidden">
                          <ImageWithFallback
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          {event.status === 'filling-fast' && (
                            <Badge className="absolute top-3 right-3 bg-red-500 text-white border-0">
                              Filling Fast!
                            </Badge>
                          )}
                          <Badge className={`absolute bottom-3 left-3 ${
                            event.type === 'course' ? 'bg-[#f57c00]' :
                            event.type === 'workshop' ? 'bg-[#005a7c]' :
                            event.type === 'survey' ? 'bg-green-600' :
                            'bg-purple-600'
                          } text-white border-0`}>
                            {event.type === 'course' ? 'Training Course' :
                             event.type === 'workshop' ? 'Workshop' :
                             event.type === 'survey' ? 'Survey - FREE' :
                             'Event'}
                          </Badge>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <h3 className="text-2xl text-[#005a7c] mb-2">{event.title}</h3>
                            <p className="text-gray-600 mb-4">{event.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-4">
                              <div className="flex items-center gap-2 text-gray-700">
                                <Calendar className="h-4 w-4 text-[#f57c00] flex-shrink-0" />
                                <span className="truncate">{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <Clock className="h-4 w-4 text-[#f57c00] flex-shrink-0" />
                                <span className="truncate">{event.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <MapPin className="h-4 w-4 text-[#f57c00] flex-shrink-0" />
                                <span className="truncate">{event.location}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700">
                                <Users className="h-4 w-4 text-[#f57c00] flex-shrink-0" />
                                <span className="truncate">{event.seats}</span>
                              </div>
                            </div>
                          </div>

                          {/* Pricing and CTA */}
                          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t">
                            <div className="flex-1">
                              {event.discount && (
                                <Badge className="mb-2 bg-red-600 text-white border-0">
                                  {event.discount}
                                </Badge>
                              )}
                              <div className="flex gap-6">
                                <div>
                                  <div className="text-xs text-gray-500">Individual</div>
                                  {event.originalPrice && (
                                    <div className="text-xs text-gray-400 line-through">{event.originalPrice.individual}</div>
                                  )}
                                  <div className="text-[#f57c00]">{event.price.individual}</div>
                                </div>
                                <div>
                                  <div className="text-xs text-gray-500">Corporate</div>
                                  {event.originalPrice && (
                                    <div className="text-xs text-gray-400 line-through">{event.originalPrice.corporate}</div>
                                  )}
                                  <div className="text-[#f57c00]">{event.price.corporate}</div>
                                </div>
                              </div>
                            </div>
                            <Button 
                              size="sm"
                              className="bg-[#005a7c] hover:bg-[#004a5c] text-white"
                            >
                              View Details →
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                {/* Event Details Dialog */}
                <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-[#005a7c] text-2xl mb-2">{event.title}</DialogTitle>
                    <DialogDescription>
                      <Badge className={
                        event.type === 'course' ? 'bg-[#f57c00]' :
                        event.type === 'workshop' ? 'bg-[#005a7c]' :
                        event.type === 'survey' ? 'bg-green-600' :
                        'bg-purple-600'
                      }>
                        {event.type === 'course' ? 'TRAINING COURSE' :
                         event.type === 'workshop' ? 'WORKSHOP' :
                         event.type === 'survey' ? 'SURVEY - FREE' :
                         'EVENT'}
                      </Badge>
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6 mt-4">
                    {/* Event Image */}
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Event Details */}
                    <div className="prose prose-sm max-w-none">
                      <p className="text-gray-700 whitespace-pre-line">{event.details}</p>
                    </div>

                    {/* Quick Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-[#f57c00] mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Date</div>
                          <div>{event.date}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-[#f57c00] mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Duration</div>
                          <div>{event.duration}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-[#f57c00] mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Location</div>
                          <div>{event.location}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-[#f57c00] mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Availability</div>
                          <div>{event.seats}</div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing */}
                    {event.type !== 'survey' && (
                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-[#005a7c]">Pricing</h4>
                          {event.discount && (
                            <Badge className="bg-red-600 text-white border-0">
                              {event.discount}
                            </Badge>
                          )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                            <div className="text-sm text-gray-600">Individual</div>
                            {event.originalPrice && (
                              <div className="text-sm text-gray-400 line-through mb-1">{event.originalPrice.individual}</div>
                            )}
                            <div className="text-2xl text-[#f57c00]">{event.price.individual}</div>
                          </div>
                          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                            <div className="text-sm text-gray-600">Corporate</div>
                            {event.originalPrice && (
                              <div className="text-sm text-gray-400 line-through mb-1">{event.originalPrice.corporate}</div>
                            )}
                            <div className="text-2xl text-[#f57c00]">{event.price.corporate}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      {event.type === 'survey' ? (
                        <Button 
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => {
                            window.open('https://forms.gle/cmZgJUiS7ekyf9FS9', '_blank');
                            toast.success('Thank you for your interest! Opening survey...');
                          }}
                        >
                          Take Survey & Get Discount
                        </Button>
                      ) : (
                        <Button 
                          className="flex-1 bg-[#f57c00] hover:bg-[#d66a00]"
                          onClick={() => handleRegisterClick(event)}
                        >
                          Register Now
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Training Calendars */}
      <section className="py-12 training-calendar-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="q4-2025" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="q4-2025">Q4 2025 Events</TabsTrigger>
              <TabsTrigger value="2026">2026 Training Calendar</TabsTrigger>
            </TabsList>

            <TabsContent value="q4-2025" className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="text-lg text-[#005a7c] mb-2">Finish 2025 Strong!</h3>
                <p className="text-gray-700">
                  Take advantage of our Q4 training opportunities to close the year with new skills and certifications.
                </p>
              </div>
              <EventCalendar events={q4Events} year={2025} />
            </TabsContent>

            <TabsContent value="2026" className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="text-lg text-[#005a7c] mb-2">Plan Your 2026 Learning Journey</h3>
                <p className="text-gray-700">
                  Browse our complete 2026 training calendar and reserve your spot early. All dates are subject to change based on demand.
                </p>
              </div>
              <EventCalendar events={year2026Events} year={2026} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Custom Training Request */}
      <section className="py-12 bg-gradient-to-br from-[#005a7c] to-[#003d54] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Need a Custom Training Schedule?</h2>
          <p className="text-xl text-gray-200 mb-8">
            We offer flexible in-house training for corporate teams and custom scheduling for individuals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="text-left">
              <CardHeader>
                <Building2 className="h-12 w-12 text-[#f57c00] mb-3" />
                <CardTitle className="text-[#005a7c]">In-House Corporate Training</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57c00] mt-1">•</span>
                    <span>Customized to your team's needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57c00] mt-1">•</span>
                    <span>Train at your preferred location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57c00] mt-1">•</span>
                    <span>Flexible scheduling to fit your calendar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57c00] mt-1">•</span>
                    <span>Special corporate rates available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardHeader>
                <User className="h-12 w-12 text-[#f57c00] mb-3" />
                <CardTitle className="text-[#005a7c]">Individual Custom Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57c00] mt-1">•</span>
                    <span>Can't make scheduled dates? Request alternatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57c00] mt-1">•</span>
                    <span>One-on-one coaching options available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57c00] mt-1">•</span>
                    <span>Online or in-person delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f57c00] mt-1">•</span>
                    <span>Personalized learning pace</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Dialog open={requestDialogOpen} onOpenChange={setRequestDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-[#f57c00] hover:bg-[#d66a00] text-white">
                Request Custom Training
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-[#005a7c]">Request Custom Training</DialogTitle>
                <DialogDescription>
                  Fill out this form and we'll contact you within 24 hours to discuss your training needs
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleRequestSubmit} className="space-y-6 mt-4">
                {/* Request Type */}
                <div className="space-y-3">
                  <Label>Request Type *</Label>
                  <RadioGroup value={requestType} onValueChange={(value: any) => setRequestType(value)}>
                    <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                      <RadioGroupItem value="corporate" id="req-corporate" />
                      <Label htmlFor="req-corporate" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-[#f57c00]" />
                          <div>
                            <div>In-House Corporate Training</div>
                            <div className="text-xs text-gray-500">For teams and organizations</div>
                          </div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                      <RadioGroupItem value="individual" id="req-individual" />
                      <Label htmlFor="req-individual" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-[#f57c00]" />
                          <div>
                            <div>Individual Custom Schedule</div>
                            <div className="text-xs text-gray-500">For personal training needs</div>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Course Selection */}
                <div className="space-y-2">
                  <Label htmlFor="course">Course/Training Interest *</Label>
                  <Select required>
                    <SelectTrigger id="course">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fm">Financial Modeling with Excel</SelectItem>
                      <SelectItem value="powerbi">Power BI Masterclass</SelectItem>
                      <SelectItem value="leadership">Strategic Leadership Excellence</SelectItem>
                      <SelectItem value="sql">SQL for Data Analysis</SelectItem>
                      <SelectItem value="python">Python for Data Analytics</SelectItem>
                      <SelectItem value="excel">Advanced Excel for Business</SelectItem>
                      <SelectItem value="ei">Emotional Intelligence for Leaders</SelectItem>
                      <SelectItem value="other">Other (specify in message)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="req-name">Full Name *</Label>
                    <Input id="req-name" required placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="req-email">Email Address *</Label>
                    <Input id="req-email" type="email" required placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="req-phone">Phone Number *</Label>
                    <Input id="req-phone" type="tel" required placeholder="+254 700 000 000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="req-participants">Number of Participants</Label>
                    <Input 
                      id="req-participants" 
                      type="number" 
                      min="1" 
                      defaultValue="1"
                      placeholder={requestType === 'corporate' ? '5' : '1'}
                    />
                  </div>
                </div>

                {/* Corporate Details */}
                {requestType === 'corporate' && (
                  <div className="space-y-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-[#005a7c]">Corporate Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="req-company">Company Name *</Label>
                        <Input id="req-company" required placeholder="Company Ltd" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="req-position">Your Position *</Label>
                        <Input id="req-position" required placeholder="HR Manager" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="req-location">Preferred Training Location</Label>
                      <Input id="req-location" placeholder="Your office address or preferred venue" />
                    </div>
                  </div>
                )}

                {/* Preferred Dates */}
                <div className="space-y-2">
                  <Label htmlFor="req-dates">Preferred Date(s)</Label>
                  <Input 
                    id="req-dates" 
                    placeholder="e.g., January 15-17, 2026 or Flexible"
                  />
                </div>

                {/* Additional Information */}
                <div className="space-y-2">
                  <Label htmlFor="req-message">Additional Information *</Label>
                  <Textarea
                    id="req-message"
                    rows={4}
                    required
                    placeholder="Tell us about your training needs, objectives, and any specific requirements..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    className="flex-1 bg-[#f57c00] hover:bg-[#d66a00] text-white"
                  >
                    Submit Request
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setRequestDialogOpen(false)}
                    className="sm:w-auto"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Scroll-triggered Survey Popup */}
      <MarketPlusSurveyPopup trigger="scroll" />

      {/* Event Booking Dialog */}
      <Dialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#005a7c]">Book Your Spot</DialogTitle>
            <DialogDescription>
              {selectedBookingEvent?.title}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleBookingSubmit} className="space-y-6 mt-4">
            {selectedBookingEvent?.type === 'course' || selectedBookingEvent?.type === 'workshop' ? (
              <>
                {/* Who Will Be Paying */}
                <div className="space-y-3">
                  <Label>Who will be paying for this event?</Label>
                  <RadioGroup value={payerType} onValueChange={(value) => setPayerType(value as 'self' | 'company')}>
                    <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                      <RadioGroupItem value="self" id="payer-self" />
                      <Label htmlFor="payer-self" className="flex items-center cursor-pointer flex-1">
                        <User className="h-4 w-4 mr-2 text-[#f57c00]" />
                        I will pay for myself
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                      <RadioGroupItem value="company" id="payer-company" />
                      <Label htmlFor="payer-company" className="flex items-center cursor-pointer flex-1">
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
                    <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                      <RadioGroupItem value="individual" id="participant-individual" />
                      <Label htmlFor="participant-individual" className="cursor-pointer flex-1">
                        Individual Professional
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                      <RadioGroupItem value="company" id="participant-company" />
                      <Label htmlFor="participant-company" className="cursor-pointer flex-1">
                        Company Representative
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </>
            ) : null}

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="booking-firstName">First Name *</Label>
                <Input id="booking-firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="booking-lastName">Last Name *</Label>
                <Input id="booking-lastName" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="booking-email">Email Address *</Label>
              <Input id="booking-email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="booking-phone">Phone Number *</Label>
              <Input id="booking-phone" type="tel" required />
            </div>

            {/* Company Information (if applicable) */}
            {(payerType === 'company' || participantType === 'company') && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="booking-companyName">Company Name *</Label>
                  <Input id="booking-companyName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="booking-jobTitle">Job Title *</Label>
                  <Input id="booking-jobTitle" required />
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="booking-participants">Number of Participants *</Label>
              <Input id="booking-participants" type="number" min="1" defaultValue="1" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="booking-specialRequests">Special Requirements or Questions</Label>
              <Textarea id="booking-specialRequests" rows={4} placeholder="Any dietary requirements, accessibility needs, or questions..." />
            </div>

            {/* Event Summary */}
            {selectedBookingEvent && (
              <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-medium text-[#005a7c] mb-3">Booking Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Event:</span>
                    <span className="font-medium">{selectedBookingEvent.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span>{selectedBookingEvent.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span>{selectedBookingEvent.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span>{selectedBookingEvent.duration}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Price:</span>
                      <div className="text-right">
                        {selectedBookingEvent.originalPrice && (
                          <div className="text-xs text-gray-400 line-through">
                            {participantType === 'company' || payerType === 'company' 
                              ? selectedBookingEvent.originalPrice.corporate 
                              : selectedBookingEvent.originalPrice.individual}
                          </div>
                        )}
                        <div className="text-lg font-medium text-[#f57c00]">
                          {participantType === 'company' || payerType === 'company' 
                            ? selectedBookingEvent.price.corporate 
                            : selectedBookingEvent.price.individual}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-[#f57c00] hover:bg-[#d66a00]">
                Submit Booking Request
              </Button>
              <Button type="button" variant="outline" onClick={() => setBookingDialogOpen(false)} className="sm:w-auto">
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
