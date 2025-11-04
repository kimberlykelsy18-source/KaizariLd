import { useState } from 'react';
import { BookOpen, TrendingUp, Briefcase, Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { CourseCard } from '../components/CourseCard';
import { MarketPlusSurveyPopup } from '../components/MarketPlusSurveyPopup';

export function CourseCatalog() {
  const [searchQuery, setSearchQuery] = useState('');

  const financeCourses = [
    {
      title: 'Financial Modeling with Excel',
      description: 'Master advanced Excel techniques for financial analysis and comprehensive modeling',
      duration: '3 Days Intensive',
      level: 'Intermediate',
      price: {
        individual: 'KSh 45,000',
        corporate: 'KSh 120,000 (up to 5 pax)',
      },
      image: 'https://images.unsplash.com/photo-1650784855038-9f4d5ed154a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGZpbmFuY2lhbCUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjAxODQzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: `Comprehensive training program covering advanced financial modeling techniques using Microsoft Excel.

This hands-on course combines theory with practical application, ensuring you can immediately apply what you learn in real-world scenarios.

Topics Covered:
• Advanced Excel Functions & Formulas
• Financial Statement Analysis
• Building Dynamic Financial Models
• Scenario Planning & Sensitivity Analysis
• Data Visualization & Dashboard Creation
• Best Practices in Financial Modeling
• Valuation Techniques

Perfect for finance professionals, analysts, and managers looking to enhance their Excel skills and financial modeling capabilities.`,
      outcomes: [
        'Build comprehensive financial models from scratch',
        'Perform advanced financial analysis using Excel',
        'Create dynamic dashboards for financial reporting',
        'Apply scenario and sensitivity analysis techniques',
        'Master complex Excel functions and formulas',
        'Understand financial statement modeling',
      ],
      hasUpcomingEvent: true,
      upcomingEventDate: 'Nov 19-21',
    },
    {
      title: 'Financial Analysis with AI Tools',
      description: 'Leverage artificial intelligence and machine learning for advanced financial analysis',
      duration: '2 Days',
      level: 'Advanced',
      price: {
        individual: 'KSh 55,000',
        corporate: 'KSh 150,000 (up to 5 pax)',
      },
      image: 'https://images.unsplash.com/photo-1653566031489-78ae0fa0872c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHByb2Zlc3Npb25hbHMlMjBkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MjAxODQzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: `Discover how AI is revolutionizing financial analysis and forecasting.

Learn to leverage cutting-edge AI tools and techniques to enhance your financial analysis capabilities, automate routine tasks, and gain deeper insights from financial data.

Topics Covered:
• Introduction to AI in Finance
• Machine Learning for Financial Forecasting
• Automated Financial Analysis Tools
• AI-Powered Risk Assessment
• Natural Language Processing for Financial Data
• Predictive Analytics in Finance
• Ethics and Limitations of AI in Finance

Ideal for finance professionals looking to stay ahead of the curve and leverage AI technologies.`,
      outcomes: [
        'Understand AI applications in financial analysis',
        'Use AI tools for financial forecasting',
        'Automate financial analysis workflows',
        'Apply machine learning to financial data',
        'Evaluate AI-powered financial tools',
        'Make data-driven decisions using AI insights',
      ],
    },
    {
      title: 'Corporate Finance Fundamentals',
      description: 'Essential corporate finance concepts for business professionals',
      duration: '2 Days',
      level: 'Beginner',
      price: {
        individual: 'KSh 35,000',
        corporate: 'KSh 90,000 (up to 5 pax)',
      },
      image: 'https://images.unsplash.com/photo-1650784855038-9f4d5ed154a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGZpbmFuY2lhbCUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjAxODQzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: `Build a solid foundation in corporate finance principles and practices.

This course covers essential concepts that every business professional should understand, from financial statements to capital budgeting and beyond.

Topics Covered:
• Understanding Financial Statements
• Time Value of Money
• Capital Budgeting Basics
• Working Capital Management
• Cost of Capital
• Financial Planning and Forecasting
• Corporate Valuation Fundamentals

Perfect for managers, entrepreneurs, and professionals who need to understand corporate finance.`,
      outcomes: [
        'Read and interpret financial statements',
        'Understand key financial metrics and ratios',
        'Make informed investment decisions',
        'Evaluate capital budgeting projects',
        'Manage working capital effectively',
        'Apply time value of money concepts',
      ],
    },
    {
      title: 'Budgeting & Forecasting Excellence',
      description: 'Master the art and science of budgeting and financial forecasting',
      duration: '2 Days',
      level: 'Intermediate',
      price: {
        individual: 'KSh 40,000',
        corporate: 'KSh 110,000 (up to 5 pax)',
      },
      image: 'https://images.unsplash.com/photo-1650784855038-9f4d5ed154a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGZpbmFuY2lhbCUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjAxODQzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: `Learn to create accurate budgets and forecasts that drive business success.

This practical course teaches you how to develop comprehensive budgets, create reliable forecasts, and use them as strategic tools for business planning.

Topics Covered:
• Budget Development Process
• Forecasting Methods and Techniques
• Rolling Forecasts vs Traditional Budgets
• Variance Analysis
• Zero-Based Budgeting
• Driver-Based Forecasting
• Budget Performance Monitoring

Designed for finance professionals, managers, and business leaders.`,
      outcomes: [
        'Develop comprehensive budgets for your organization',
        'Create accurate financial forecasts',
        'Perform meaningful variance analysis',
        'Implement rolling forecast processes',
        'Use budgets as strategic planning tools',
        'Monitor and report on budget performance',
      ],
    },
  ];

  const leadershipCourses = [
    {
      title: 'Strategic Leadership Excellence',
      description: 'Develop strategic thinking and leadership skills to drive organizational success',
      duration: '3 Days',
      level: 'Advanced',
      price: {
        individual: 'KSh 50,000',
        corporate: 'KSh 140,000 (up to 5 pax)',
      },
      image: 'https://images.unsplash.com/photo-1638275559239-82bfdb0d68c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbGVhZGVyc2hpcCUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzYyMDE4NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: `Transform your leadership approach with strategic thinking and advanced management techniques.

This comprehensive program equips leaders with the tools and frameworks needed to navigate complex business environments and drive organizational transformation.

Topics Covered:
• Strategic Planning and Execution
• Leading Through Change
• Executive Decision Making
• Building High-Performance Teams
• Stakeholder Management
• Innovation and Transformation Leadership
• Strategic Communication

Ideal for senior managers, executives, and emerging leaders.`,
      outcomes: [
        'Develop and execute strategic initiatives',
        'Lead organizational change effectively',
        'Make sound strategic decisions',
        'Build and motivate high-performing teams',
        'Communicate vision and strategy effectively',
        'Drive innovation and transformation',
      ],
    },
    {
      title: 'Emotional Intelligence for Leaders',
      description: 'Enhance your leadership effectiveness through emotional intelligence',
      duration: '2 Days',
      level: 'Intermediate',
      price: {
        individual: 'KSh 42,000',
        corporate: 'KSh 115,000 (up to 5 pax)',
      },
      image: 'https://images.unsplash.com/photo-1742996111692-2d924f12a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVhbSUyMHBsYW5uaW5nJTIwbWVldGluZ3xlbnwxfHx8fDE3NjIwMTg0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: `Unlock your leadership potential through enhanced emotional intelligence.

Learn how to leverage emotional intelligence to build stronger relationships, manage conflicts, and create positive work environments.

Topics Covered:
• Understanding Emotional Intelligence
• Self-Awareness and Self-Management
• Social Awareness and Empathy
• Relationship Management
• Managing Emotions Under Pressure
• Building Trust and Influence
• Creating Psychologically Safe Teams

Perfect for leaders at all levels looking to enhance their people skills.`,
      outcomes: [
        'Develop greater self-awareness',
        'Manage emotions effectively',
        'Build stronger workplace relationships',
        'Demonstrate empathy in leadership',
        'Handle conflicts constructively',
        'Create inclusive team environments',
      ],
    },
    {
      title: 'Team Building & Collaboration',
      description: 'Build cohesive, high-performing teams through effective collaboration strategies',
      duration: '2 Days',
      level: 'Beginner',
      price: {
        individual: 'KSh 38,000',
        corporate: 'KSh 100,000 (up to 5 pax)',
      },
      image: 'https://images.unsplash.com/photo-1742996111692-2d924f12a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVhbSUyMHBsYW5uaW5nJTIwbWVldGluZ3xlbnwxfHx8fDE3NjIwMTg0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: `Learn to build and lead teams that achieve extraordinary results.

This interactive course focuses on practical strategies for creating collaborative team environments and fostering teamwork.

Topics Covered:
• Team Development Stages
• Building Team Trust
• Effective Communication in Teams
• Conflict Resolution Strategies
• Collaborative Decision Making
• Team Motivation Techniques
• Remote and Hybrid Team Management

Designed for team leaders, supervisors, and managers.`,
      outcomes: [
        'Build cohesive, high-performing teams',
        'Foster collaboration and teamwork',
        'Resolve team conflicts effectively',
        'Motivate and engage team members',
        'Facilitate productive team meetings',
        'Lead diverse and distributed teams',
      ],
    },
    {
      title: 'Change Management Leadership',
      description: 'Lead successful organizational change initiatives with confidence',
      duration: '2 Days',
      level: 'Intermediate',
      price: {
        individual: 'KSh 45,000',
        corporate: 'KSh 125,000 (up to 5 pax)',
      },
      image: 'https://images.unsplash.com/photo-1638275559239-82bfdb0d68c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbGVhZGVyc2hpcCUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzYyMDE4NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: `Master the art of leading organizational change and transformation.

Learn proven frameworks and strategies for planning, implementing, and sustaining successful change initiatives.

Topics Covered:
• Change Management Models
• Stakeholder Analysis and Engagement
• Overcoming Resistance to Change
• Change Communication Strategies
• Building Change Readiness
• Sustaining Change Over Time
• Measuring Change Success

Essential for leaders managing organizational transitions.`,
      outcomes: [
        'Plan and execute change initiatives',
        'Engage stakeholders effectively',
        'Overcome resistance to change',
        'Communicate change vision clearly',
        'Build organizational change capacity',
        'Measure and sustain change outcomes',
      ],
    },
  ];

  const toolsCourses = [
    {
      title: 'Power BI Masterclass',
      description: 'Transform data into actionable insights with Microsoft Power BI',
      duration: '3 Days',
      level: 'Beginner to Intermediate',
      price: {
        individual: 'KSh 48,000',
        corporate: 'KSh 135,000 (up to 5 pax)',
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTk1NzAyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: `Master Power BI from basics to advanced features and become a data visualization expert.

This comprehensive hands-on course covers everything you need to create stunning, interactive dashboards and reports.

Topics Covered:
• Power BI Desktop Fundamentals
• Data Modeling and Relationships
• DAX (Data Analysis Expressions)
• Creating Interactive Visualizations
• Power Query for Data Transformation
• Publishing and Sharing Reports
• Advanced Analytics Features
• Best Practices in Dashboard Design

Perfect for analysts, managers, and anyone working with data.`,
      outcomes: [
        'Create professional Power BI dashboards',
        'Model and transform data effectively',
        'Write DAX formulas for analysis',
        'Design interactive visualizations',
        'Publish and share insights',
        'Apply data visualization best practices',
      ],
    },
    {
      title: 'Advanced Excel for Business',
      description: 'Master advanced Excel features to boost productivity and analysis',
      duration: '2 Days',
      level: 'Intermediate',
      price: {
        individual: 'KSh 38,000',
        corporate: 'KSh 105,000 (up to 5 pax)',
      },
      image: 'https://images.unsplash.com/photo-1691057117716-2fc49700ba47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlcmJpJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MjAxNjA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: `Take your Excel skills to the next level with advanced techniques and automation.

Learn powerful Excel features that will transform how you work with data and increase your productivity.

Topics Covered:
• Advanced Formulas and Functions
• Pivot Tables and Charts
• Data Validation and Protection
• Conditional Formatting Mastery
• Macro Recording and VBA Basics
• Power Query Integration
• Advanced Data Analysis Tools
• Excel Automation Techniques

Ideal for professionals who use Excel extensively in their work.`,
      outcomes: [
        'Use advanced Excel functions proficiently',
        'Create dynamic pivot tables and charts',
        'Automate tasks with macros',
        'Perform complex data analysis',
        'Build interactive spreadsheets',
        'Increase productivity with Excel shortcuts',
      ],
    },
    {
      title: 'SQL for Data Analysis',
      description: 'Query and analyze databases effectively using SQL',
      duration: '3 Days',
      level: 'Beginner to Intermediate',
      price: {
        individual: 'KSh 45,000',
        corporate: 'KSh 125,000 (up to 5 pax)',
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTk1NzAyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: `Learn SQL from scratch and master database querying for data analysis.

This practical course teaches you how to extract, manipulate, and analyze data from databases using SQL.

Topics Covered:
• SQL Fundamentals
• Writing SELECT Queries
• Filtering and Sorting Data
• Joins and Relationships
• Aggregate Functions and Grouping
• Subqueries and CTEs
• Window Functions
• Query Optimization

Perfect for analysts, business intelligence professionals, and data enthusiasts.`,
      outcomes: [
        'Write effective SQL queries',
        'Extract and analyze database data',
        'Perform complex joins and aggregations',
        'Use advanced SQL functions',
        'Optimize query performance',
        'Transform data for analysis',
      ],
    },
    {
      title: 'Tableau Data Visualization',
      description: 'Create compelling data visualizations and dashboards with Tableau',
      duration: '2 Days',
      level: 'Beginner',
      price: {
        individual: 'KSh 42,000',
        corporate: 'KSh 115,000 (up to 5 pax)',
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTk1NzAyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: `Discover the power of Tableau for data visualization and storytelling.

Learn to create beautiful, interactive visualizations that communicate insights effectively.

Topics Covered:
• Tableau Interface and Navigation
• Connecting to Data Sources
• Building Basic Visualizations
• Creating Interactive Dashboards
• Calculated Fields and Parameters
• Mapping and Geographic Visualization
• Table Calculations
• Storytelling with Data

Designed for business analysts and data professionals.`,
      outcomes: [
        'Create professional Tableau visualizations',
        'Build interactive dashboards',
        'Connect to various data sources',
        'Use calculated fields effectively',
        'Tell stories with data',
        'Apply visualization best practices',
      ],
    },
    {
      title: 'Python for Data Analytics',
      description: 'Use Python programming for data analysis and automation',
      duration: '4 Days',
      level: 'Intermediate',
      price: {
        individual: 'KSh 55,000',
        corporate: 'KSh 160,000 (up to 5 pax)',
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTk1NzAyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: `Learn Python programming specifically for data analysis and business intelligence.

This practical course covers Python libraries and techniques essential for modern data analytics.

Topics Covered:
• Python Programming Basics
• NumPy for Numerical Computing
• Pandas for Data Manipulation
• Data Cleaning and Preparation
• Exploratory Data Analysis
• Data Visualization with Matplotlib/Seaborn
• Working with APIs and Web Data
• Automation and Scripting

Ideal for analysts looking to enhance their technical skills.`,
      outcomes: [
        'Write Python code for data analysis',
        'Manipulate data using Pandas',
        'Create visualizations with Python',
        'Clean and prepare data efficiently',
        'Automate repetitive tasks',
        'Perform exploratory data analysis',
      ],
    },
  ];

  const allCourses = [...financeCourses, ...leadershipCourses, ...toolsCourses];

  const filterCourses = (courses: typeof allCourses) => {
    if (!searchQuery) return courses;
    return courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#005a7c] to-[#003d54] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl mb-4">Course Catalog</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our comprehensive range of professional development courses designed to elevate your skills and career
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg bg-white text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="finance" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
              <TabsTrigger value="finance" className="flex items-center gap-2 py-3">
                <TrendingUp className="h-5 w-5" />
                <span>Finance</span>
                <Badge className="ml-2 bg-[#f57c00]">{financeCourses.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="leadership" className="flex items-center gap-2 py-3">
                <Briefcase className="h-5 w-5" />
                <span>Leadership</span>
                <Badge className="ml-2 bg-[#f57c00]">{leadershipCourses.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center gap-2 py-3">
                <BookOpen className="h-5 w-5" />
                <span>Tools</span>
                <Badge className="ml-2 bg-[#f57c00]">{toolsCourses.length}</Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="finance" className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl text-[#005a7c] mb-2">Finance Courses</h2>
                <p className="text-gray-600">
                  Master financial analysis, modeling, and business finance skills
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterCourses(financeCourses).map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
              {filterCourses(financeCourses).length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No courses found matching your search.
                </div>
              )}
            </TabsContent>

            <TabsContent value="leadership" className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl text-[#005a7c] mb-2">Leadership Courses</h2>
                <p className="text-gray-600">
                  Develop essential leadership and management capabilities
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterCourses(leadershipCourses).map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
              {filterCourses(leadershipCourses).length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No courses found matching your search.
                </div>
              )}
            </TabsContent>

            <TabsContent value="tools" className="space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl text-[#005a7c] mb-2">Tools & Technology Courses</h2>
                <p className="text-gray-600">
                  Learn essential business tools and data analytics platforms
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterCourses(toolsCourses).map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
              {filterCourses(toolsCourses).length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No courses found matching your search.
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Scroll-triggered Survey Popup */}
      <MarketPlusSurveyPopup trigger="scroll" />
    </div>
  );
}
