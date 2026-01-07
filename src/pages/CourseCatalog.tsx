import { useState } from 'react';
import { Input } from '../components/ui/input';
import { CourseCard } from '../components/CourseCard';
import { Button } from '../components/ui/button';

export function CourseCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState<'Finance' | 'Sales' | 'Marketing' | 'Tools'>('Finance');

  // Finance courses available this first quarter (Q1)
  const financeCourses = [
    {
      title: 'Core Excel',
      description: 'Foundations of Excel for data entry, formatting, basic formulas and productivity shortcuts.',
      duration: '1 Day',
      level: 'Beginner',
      price: { individual: 'Contact for pricing', corporate: 'Contact for pricing' },
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
      details: `A practical course that ensures solid Excel basics: formulas, formatting, tables, basic charts, and productivity tips. Ideal for professionals starting with Excel.`,
      outcomes: ['Use Excel confidently', 'Create tables and basic charts', 'Use formulas for everyday tasks'],
      hasUpcomingEvent: false,
    },
    {
      title: 'Intermediate → Advanced Excel',
      description: 'From lookup formulas to dynamic arrays and advanced problem solving in Excel.',
      duration: '2 Days',
      level: 'Intermediate',
      price: { individual: 'Contact for pricing', corporate: 'Contact for pricing' },
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
      details: `Build advanced formula skills including INDEX/MATCH, XLOOKUP, dynamic arrays, and practical problem-solving patterns used in finance and operations.`,
      outcomes: ['Solve complex spreadsheet problems', 'Build robust models', 'Use dynamic arrays and lookups'],
      hasUpcomingEvent: false,
    },
    {
      title: 'Core Financial Modeling',
      description: 'Hands-on introduction to financial model structure, cash flows, and simple projections.',
      duration: '2 Days',
      level: 'Intermediate',
      price: { individual: 'Contact for pricing', corporate: 'Contact for pricing' },
      image: 'https://images.unsplash.com/photo-1526378723388-8b7f4f30f79f?q=80&w=1200&auto=format&fit=crop',
      details: `Learn to build a basic three-statement financial model with clear assumptions, drivers, and simple valuation techniques.`,
      outcomes: ['Build a 3-statement model', 'Link assumptions to outputs', 'Produce basic valuation outputs'],
      hasUpcomingEvent: true,
      upcomingEventDate: 'March (TBD), 2026',
    },
    {
      title: 'Advanced Financial Modeling',
      description: 'Advanced model architecture, scenario analysis, sensitivity testing and valuation techniques.',
      duration: '3 Days',
      level: 'Advanced',
      price: { individual: 'Contact for pricing', corporate: 'Contact for pricing' },
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
      details: `Advanced instruction on model structuring, robust checks, scenario manager, and integration with dashboards for decision support.`,
      outcomes: ['Advanced scenario modelling', 'Valuation and sensitivity analyses', 'Robust error-proofing techniques'],
      hasUpcomingEvent: true,
      upcomingEventDate: 'March (TBD), 2026',
    },
    {
      title: 'Core Data Analysis & Power Query',
      description: 'Clean and transform datasets using Power Query — bring real-world data into usable tables.',
      duration: '2 Days',
      level: 'Intermediate',
      price: { individual: 'Contact for pricing', corporate: 'Contact for pricing' },
      image: 'https://images.unsplash.com/photo-1508921236327-3c4b2d6f6fa9?q=80&w=1200&auto=format&fit=crop',
      details: `Power Query fundamentals: extract, transform and load patterns, common transformations, merging and appending data sets.`,
      outcomes: ['Clean data quickly', 'Automate repeated transformations', 'Prepare data for modeling/visualization'],
      hasUpcomingEvent: false,
    },
    {
      title: 'Advanced Data Analysis & Power Query',
      description: 'Advanced data shaping, functions, parameterization and integration with Power BI/Excel reports.',
      duration: '3 Days',
      level: 'Advanced',
      price: { individual: 'Contact for pricing', corporate: 'Contact for pricing' },
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
      details: `Deep-dive into Power Query M language techniques, parameter-driven refresh workflows and connecting complex sources.`,
      outcomes: ['Advanced ETL flows', 'Parameterize transformations', 'Integrate with reporting tools'],
      hasUpcomingEvent: false,
    },
  ];

  const categories = ['Finance', 'Sales', 'Marketing', 'Tools'];

  const filtered = category === 'Finance' ? financeCourses : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl text-[#005a7c]">Courses</h1>
          <div className="flex items-center gap-3">
            <Input placeholder="Search courses..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
        </div>

        <div className="flex gap-3 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={category === (cat as any) ? 'default' : 'outline'}
              onClick={() => setCategory(cat as any)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {category !== 'Finance' ? (
          <div className="p-8 bg-white border rounded-lg text-center">
            <h3 className="text-xl font-semibold">Not available for this quarter</h3>
            <p className="mt-2 text-gray-600">Courses in this category will be displayed soon. Check back for Q2/Q3 availability.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map((course, i) => (
              <CourseCard key={i} {...course} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All finance courses are available online via our LMS or in-person with a trainer. Available for individuals and corporate groups.</p>
          <a
            href="https://wa.me/254713664234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-md shadow-md"
          >
            Contact for pricing / Book via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
