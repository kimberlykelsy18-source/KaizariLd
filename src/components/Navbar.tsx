// src/components/Navbar.tsx
import { Building2, Users, Mail, Menu, X, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

// Import the logo image
const getLogo = () => {
  try {
    return new URL(`../assets/kaizari-logo.png`, import.meta.url).href;
  } catch {
    return '';
  }
};

// Navigation menu structure
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
      {
        label: 'About Us',
        id: 'company',
        description: 'Discover our mission, vision, and core values',
        icon: Building2,
        color: '#005a7c',
      },
      {
        label: 'Partner Portal',
        id: 'portal',
        description:
          'Collaboration opportunities for partners and trainers',
        icon: Users,
        color: '#005a7c',
      },
      {
        label: 'Contact Us',
        id: 'contact',
        description:
          'Connect with our team for inquiries and support',
        icon: Mail,
        color: '#f57c00',
      },
    ],
  },
];

// Named export of the Navbar component
export const Navbar = ({
  activePage,
  onNavigate,
}: {
  activePage?: string;
  onNavigate?: (page: string) => void;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavigate = (id: string) => {
    onNavigate?.(id);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigate('home')}
          >
            <img
              src={getLogo()}
              alt="Kaizari L&D International"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            {menuStructure.map((menu) => (
              <li key={menu.id} className="relative group">
                {menu.type === 'single' ? (
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activePage === menu.id
                        ? 'text-[#005a7c] bg-[#005a7c]/10'
                        : 'text-gray-600 hover:text-[#005a7c] hover:bg-gray-50'
                    }`}
                    onClick={() => handleNavigate(menu.id)}
                  >
                    {menu.label}
                  </button>
                ) : (
                  <div className="relative">
                    <button
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                        ['company', 'portal', 'contact'].includes(activePage || '')
                          ? 'text-[#005a7c] bg-[#005a7c]/10'
                          : 'text-gray-600 hover:text-[#005a7c] hover:bg-gray-50'
                      }`}
                    >
                      {menu.label}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Dropdown menu */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <ul className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 w-72 overflow-hidden">
                        {menu.items.map((item) => (
                          <li
                            key={item.id}
                            className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                            onClick={() => handleNavigate(item.id)}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className="p-2 rounded-lg"
                                style={{ backgroundColor: `${item.color}15` }}
                              >
                                <item.icon size={18} color={item.color} />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">
                                  {item.label}
                                </div>
                                <div className="text-xs text-gray-500 mt-0.5">
                                  {item.description}
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <ul className="space-y-1">
              {menuStructure.map((menu) =>
                menu.type === 'single' ? (
                  <li key={menu.id}>
                    <button
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        activePage === menu.id
                          ? 'text-[#005a7c] bg-[#005a7c]/10'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => handleNavigate(menu.id)}
                    >
                      {menu.label}
                    </button>
                  </li>
                ) : (
                  <li key={menu.id}>
                    <button
                      className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 flex items-center justify-between"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {menu.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          dropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {dropdownOpen && (
                      <ul className="mt-1 ml-4 space-y-1">
                        {menu.items.map((item) => (
                          <li key={item.id}>
                            <button
                              className="w-full text-left px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                              onClick={() => handleNavigate(item.id)}
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
