  const menuStructure = [
    { label: 'Home', id: 'home', type: 'single' as const },
    { label: 'Courses', id: 'courses', type: 'single' as const },
    { label: 'Events', id: 'events', type: 'single' as const },
    { label: 'Learning Hub', id: 'lms', type: 'single' as const },
    {
      label: 'Company',
      id: 'company-menu',
      type: 'dropdown' as const,
      items: [
        { label: 'About Us', id: 'company', description: 'Discover our mission, vision, and core values', icon: Building2, color: '#005a7c' },
        { label: 'Partner Portal', id: 'portal', description: 'Collaboration opportunities for partners and trainers', icon: Users, color: '#005a7c' },
        { label: 'Contact Us', id: 'contact', description: 'Connect with our team for inquiries and support', icon: Mail, color: '#f57c00' },
      ],
    },
  ];
