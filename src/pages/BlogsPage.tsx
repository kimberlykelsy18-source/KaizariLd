import { useState } from 'react';
import { Calendar, User, Clock, ChevronDown, ChevronUp, Search, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MarketPlusSurveyPopup } from '../components/MarketPlusSurveyPopup';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string[];
  image: string;
}

export function BlogsPage() {
  const [expandedBlog, setExpandedBlog] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Sample blog posts - In production, these would come from Supabase
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Financial Modeling: AI Integration in Corporate Finance',
      author: 'David Omondi',
      authorRole: 'Senior Financial Analyst & Trainer',
      date: 'October 25, 2025',
      readTime: '8 min read',
      category: 'Finance',
      tags: ['AI', 'Financial Modeling', 'Technology'],
      excerpt: 'Discover how artificial intelligence is revolutionizing financial modeling and what it means for finance professionals in East Africa.',
      content: [
        'The landscape of financial modeling is undergoing a dramatic transformation with the integration of artificial intelligence. As organizations across East Africa embrace digital transformation, finance professionals must adapt to stay relevant in an AI-augmented world.',
        'Traditional financial modeling techniques, while still valuable, are being enhanced by machine learning algorithms that can process vast amounts of data in seconds. Tools like Power BI with AI capabilities, Python-based modeling, and automated forecasting systems are becoming standard in modern finance departments.',
        'At Kaizari L&D International, we\'ve observed a 300% increase in demand for training programs that combine traditional financial analysis with AI and data science skills. Organizations recognize that the future belongs to finance professionals who can bridge the gap between classic modeling techniques and cutting-edge technology.',
        'Key areas where AI is making the biggest impact include: Automated variance analysis and anomaly detection, Predictive analytics for revenue forecasting, Real-time scenario modeling and sensitivity analysis, Natural language processing for financial report generation.',
        'For finance professionals looking to future-proof their careers, we recommend starting with advanced Excel automation, then progressing to Power BI and Python. The goal isn\'t to replace human judgment but to augment it with powerful analytical tools that free up time for strategic thinking and decision-making.',
        'The organizations that will thrive in the next decade are those investing in upskilling their finance teams today. Whether you\'re a CFO, financial analyst, or accounting professional, now is the time to embrace these technologies and lead your organization\'s financial transformation.'
      ],
      image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2MjAwNzI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      title: 'Mastering Excel: 10 Advanced Techniques Every Professional Should Know',
      author: 'Grace Wanjiru',
      authorRole: 'Excel Specialist & Corporate Trainer',
      date: 'October 18, 2025',
      readTime: '6 min read',
      category: 'Tools',
      tags: ['Excel', 'Productivity', 'Skills Development'],
      excerpt: 'Unlock the full potential of Excel with these advanced techniques that will transform how you work with data and boost your productivity.',
      content: [
        'Microsoft Excel remains the most widely used business tool globally, yet most professionals use only 10% of its capabilities. After training over 500 corporate professionals across Kenya, I\'ve identified the advanced techniques that deliver the highest return on learning investment.',
        '1. Power Query for Data Transformation: Stop copying and pasting data manually. Power Query allows you to connect to multiple data sources, transform data with a few clicks, and create automated refresh workflows. This single feature can save hours of work weekly.',
        '2. Advanced PivotTable Techniques: Beyond basic PivotTables, learn to use calculated fields, grouped date hierarchies, and PivotTable data models. These features turn Excel into a powerful business intelligence tool capable of analyzing millions of rows.',
        '3. Dynamic Arrays and XLOOKUP: The new dynamic array functions (FILTER, SORT, UNIQUE) and XLOOKUP have revolutionized Excel formulas. These functions eliminate the need for complex nested formulas and make your spreadsheets more maintainable.',
        '4. Conditional Formatting with Custom Rules: Create visual dashboards using data bars, color scales, and icon sets. Advanced conditional formatting can transform a plain spreadsheet into an executive-ready dashboard.',
        '5. VBA Macros for Automation: Even basic VBA knowledge can automate repetitive tasks. Start with recording macros, then learn to edit them. Common use cases include automated report generation, data validation, and custom user forms.',
        'At Kaizari L&D, our Advanced Excel course covers all these techniques and more, with hands-on practice using real business scenarios. The investment in Excel mastery pays dividends throughout your entire career, regardless of your industry or role.'
      ],
      image: 'https://images.unsplash.com/photo-1584472666879-7d92db132958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNlbCUyMHNwcmVhZHNoZWV0JTIwZGF0YXxlbnwxfHx8fDE3NjIwMTk2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      title: 'Emotional Intelligence: The Secret Weapon of Effective Leaders',
      author: 'James Kamau',
      authorRole: 'Leadership Development Consultant',
      date: 'October 11, 2025',
      readTime: '7 min read',
      category: 'Leadership',
      tags: ['Leadership', 'Emotional Intelligence', 'Management'],
      excerpt: 'Why emotional intelligence (EQ) matters more than IQ in modern leadership, and how to develop it in yourself and your team.',
      content: [
        'In today\'s rapidly changing business environment, technical skills and IQ are no longer sufficient for leadership success. Research consistently shows that emotional intelligence (EQ) is the strongest predictor of leadership effectiveness and team performance.',
        'Emotional intelligence comprises five key components: Self-awareness (understanding your emotions and their impact), Self-regulation (managing disruptive emotions), Motivation (passion for work beyond money and status), Empathy (understanding others\' emotional makeup), and Social skills (managing relationships and building networks).',
        'During the COVID-19 pandemic and subsequent economic challenges, we observed that organizations with emotionally intelligent leaders weathered the storm significantly better. These leaders could navigate uncertainty, maintain team morale, and make difficult decisions while preserving organizational culture.',
        'In our leadership training programs across East Africa, we\'ve worked with over 200 managers and executives. The most impactful transformation occurs when leaders realize that their emotional state directly affects team performance. A leader\'s mood is contagious - for better or worse.',
        'Practical steps to develop emotional intelligence: Start each day with a brief self-check-in about your emotional state. Practice active listening without planning your response while others speak. Seek feedback regularly and respond non-defensively. Observe how your emotions affect your decisions and behavior. Develop empathy by considering situations from others\' perspectives.',
        'Organizations investing in EQ development see measurable results: higher employee engagement, reduced turnover, improved team collaboration, better conflict resolution, and stronger customer relationships. The ROI of emotional intelligence training far exceeds traditional technical training.',
        'At Kaizari L&D International, our Emotional Intelligence for Leaders program combines assessment tools, interactive workshops, and ongoing coaching to create lasting behavioral change. Because in the end, people don\'t leave companies - they leave managers. Make sure you\'re the kind of leader people want to work for.'
      ],
      image: 'https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxOTk3Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      title: 'Budget Planning 2026: Strategic Approaches for Kenyan Organizations',
      author: 'Sarah Achieng',
      authorRole: 'CFO & Financial Strategy Advisor',
      date: 'October 4, 2025',
      readTime: '9 min read',
      category: 'Finance',
      tags: ['Budgeting', 'Strategic Planning', 'Finance'],
      excerpt: 'A comprehensive guide to strategic budget planning for 2026, including forecasting techniques, resource allocation, and performance monitoring.',
      content: [
        'As Q4 2025 approaches, finance teams across Kenya are deep in budget planning for 2026. This year presents unique challenges: economic uncertainty, exchange rate volatility, and evolving regulatory requirements. Strategic budget planning has never been more critical.',
        'The traditional incremental budgeting approach - taking last year\'s budget and adding a percentage - no longer works in today\'s dynamic environment. Organizations need flexible, scenario-based budgeting that can adapt to changing conditions while maintaining strategic alignment.',
        'Key principles for effective 2026 budget planning: Start with strategy, not spreadsheets. Your budget should reflect strategic priorities, not historical spending patterns. Use zero-based budgeting for non-essential areas to challenge assumptions and eliminate waste. Implement rolling forecasts instead of static annual budgets to maintain agility. Build multiple scenarios (conservative, moderate, aggressive) to prepare for uncertainty. Link budgets to KPIs and accountability to ensure execution.',
        'Technology plays a crucial role in modern budgeting. Cloud-based budgeting tools, automated data consolidation, and real-time reporting capabilities have transformed the budgeting process from a once-a-year exercise to continuous performance management.',
        'Common budgeting mistakes to avoid: Underestimating inflation and currency fluctuations (critical in Kenya\'s current economic climate). Failing to involve operational managers in budget creation. Creating budgets disconnected from strategic objectives. Neglecting working capital requirements. Not building contingency reserves for unexpected events.',
        'The most successful organizations treat budgeting as a strategic conversation, not just a financial exercise. They use the budgeting process to align stakeholders, clarify priorities, and create accountability for results.',
        'Our Financial Planning & Budgeting workshop at Kaizari L&D equips finance professionals with advanced techniques, practical templates, and best practices for creating strategic budgets that drive organizational performance. With economic headwinds expected in 2026, now is the time to sharpen your budgeting skills.'
      ],
      image: 'https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhbmFseXNpcyUyMGNoYXJ0c3xlbnwxfHx8fDE3NjIwMTU3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 5,
      title: 'Building High-Performance Teams in a Hybrid Work Environment',
      author: 'Michael Otieno',
      authorRole: 'Organizational Development Specialist',
      date: 'September 27, 2025',
      readTime: '7 min read',
      category: 'Leadership',
      tags: ['Team Building', 'Remote Work', 'Leadership'],
      excerpt: 'Practical strategies for creating engaged, productive teams when some members work remotely and others are in the office.',
      content: [
        'The hybrid work model is here to stay. After two years of remote work experiments across East Africa, most organizations have settled into a hybrid arrangement. However, building high-performance teams in this environment requires intentional strategies and new leadership approaches.',
        'The hybrid paradox: While flexibility increases employee satisfaction, it can decrease team cohesion, communication quality, and organizational culture if not managed properly. The key is intentional design, not hoping things work out naturally.',
        'Creating psychological safety in hybrid teams: Establish clear communication norms about when to use email, chat, video calls, or in-person meetings. Implement "camera-on" policies for team meetings to maintain connection. Create virtual social spaces that replicate office water cooler conversations. Ensure remote workers have equal voice in meetings and decisions. Document decisions and discussions for asynchronous access.',
        'Performance management shifts from measuring time to measuring outcomes. Focus on deliverables, impact, and results rather than hours logged or physical presence. Use OKRs (Objectives and Key Results) to create alignment and accountability across distributed teams.',
        'Technology is the foundation of hybrid success: Invest in collaboration tools (Teams, Slack, Miro), project management platforms (Asana, Monday.com), and video conferencing with quality audio. Ensure all team members have equivalent technology access to prevent a two-tier system.',
        'Leadership behaviors that create high-performing hybrid teams: Over-communicate vision, strategy, and priorities. Schedule regular one-on-ones with each team member. Create rituals and routines that build team identity. Be intentionally inclusive of remote participants. Model the behavior you want to see (work-life balance, communication style).',
        'At Kaizari L&D, our Team Building & Collaboration workshop includes specific modules on hybrid team dynamics, with practical tools and frameworks that managers can implement immediately. Because in the hybrid world, teams don\'t perform by accident - they perform by design.'
      ],
      image: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MjAxOTY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 6,
      title: 'Data Visualization Best Practices: Telling Stories with Numbers',
      author: 'Linda Muthoni',
      authorRole: 'Data Analytics Trainer & BI Consultant',
      date: 'September 20, 2025',
      readTime: '6 min read',
      category: 'Tools',
      tags: ['Data Visualization', 'Power BI', 'Analytics'],
      excerpt: 'Learn how to create compelling data visualizations that drive decisions, using Power BI, Tableau, and Excel.',
      content: [
        'In the age of big data, the ability to visualize information effectively is a critical business skill. Yet most professionals create charts that confuse rather than clarify. The difference between good and great data visualization is understanding that your goal isn\'t to show data - it\'s to tell a story.',
        'The fundamental principle of data visualization: Less is more. Every element in your chart should serve a purpose. Remove chart junk, unnecessary gridlines, redundant labels, and decorative elements. Your audience should understand the key insight within 5 seconds.',
        'Choosing the right chart type: Line charts for trends over time. Bar charts for comparing categories. Scatter plots for showing relationships between variables. Heat maps for showing patterns across two dimensions. Avoid: 3D charts (they distort perception), pie charts with more than 3 slices, dual-axis charts that mislead.',
        'Color psychology matters: Use color purposefully, not decoratively. Stick to your brand colors or a consistent palette. Use color to highlight what matters, leaving the rest in neutral tones. Ensure accessibility for colorblind viewers (8% of men have color vision deficiency). Red typically signals negative, green positive - be consistent with these conventions.',
        'Context is everything: Always include axis labels, legends, and data sources. Provide comparison points (vs. target, vs. previous period). Add annotations to explain anomalies or significant events. Include the "So what?" - tell viewers what action to take based on the data.',
        'Dashboard design principles from Power BI experts: Place the most important metric top-left (where eyes land first). Group related information visually. Create a clear visual hierarchy using size and placement. Enable drill-down capabilities for those who want details. Optimize for your delivery medium (screen presentation vs. printed report).',
        'At Kaizari L&D, our Power BI and Data Visualization workshops combine design principles with technical training. Participants learn both the software skills and the analytical thinking required to create dashboards that drive business decisions. Because data without insight is just noise - and insight without clarity is missed opportunity.'
      ],
      image: 'https://images.unsplash.com/photo-1686628269259-84b867e8c036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjB3cml0aW5nfGVufDF8fHx8MTc2MjAxOTY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const categories = ['All', 'Finance', 'Leadership', 'Tools'];

  const filteredBlogs = blogPosts.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleBlog = (id: number) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#005a7c] to-[#f57c00] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6">
              Insights & Knowledge Hub
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Expert perspectives on finance, leadership, and professional development
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <Card className="shadow-xl">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? 'bg-[#f57c00] hover:bg-[#d66a00]' 
                      : 'hover:bg-[#f57c00]/10'}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredBlogs.map((blog) => (
              <Card 
                key={blog.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#f57c00]"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Blog Image */}
                  <div className="md:col-span-1">
                    <div className="relative h-64 md:h-full">
                      <ImageWithFallback
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#f57c00] hover:bg-[#d66a00]">
                          {blog.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="md:col-span-2 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-[#005a7c] mb-3 hover:text-[#f57c00] transition-colors cursor-pointer">
                        {blog.title}
                      </CardTitle>
                      
                      {/* Author and Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <div>
                            <span className="font-medium text-[#005a7c]">{blog.author}</span>
                            <span className="text-xs block text-gray-500">{blog.authorRole}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      <CardDescription className="mt-3 text-base">
                        {blog.excerpt}
                      </CardDescription>
                    </CardHeader>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="flex items-center gap-1">
                          <Tag className="h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Expandable Content */}
                    {expandedBlog === blog.id && (
                      <CardContent className="p-0 mt-6 space-y-4 text-gray-700">
                        {blog.content.map((paragraph, index) => (
                          <p key={index} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </CardContent>
                    )}

                    {/* Read More Button */}
                    <Button
                      onClick={() => toggleBlog(blog.id)}
                      variant="outline"
                      className="mt-4 border-[#f57c00] text-[#f57c00] hover:bg-[#f57c00] hover:text-white"
                    >
                      {expandedBlog === blog.id ? (
                        <>
                          Show Less <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Read Full Article <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#005a7c] to-[#f57c00] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">
            Want to Learn More?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our training programs and gain practical skills from industry experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.hash = 'courses'}
              className="bg-white text-[#005a7c] hover:bg-gray-100 px-8 py-6 text-lg shadow-lg"
            >
              Browse Courses
            </Button>
            <Button
              onClick={() => window.location.hash = 'events'}
              className="bg-white text-[#f57c00] hover:bg-gray-100 border-2 border-white px-8 py-6 text-lg shadow-lg"
            >
              View Upcoming Events
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll-triggered Survey Popup */}
      <MarketPlusSurveyPopup trigger="scroll" />
    </div>
  );
}
