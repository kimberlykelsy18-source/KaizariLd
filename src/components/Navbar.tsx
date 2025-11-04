import { useState } from 'react';
import { Menu, X, Building2, FileText, Users, Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Logo } from './Logo';

interface NavbarProps {
  activePage?: string;
  onNavigate?: (page: string) => void;
}

export function Navbar({ activePage = 'home', onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  const menuStructure = [
    {
      label: 'Home',
      id: 'home',
      type: 'single' as const,
    },
    {
      label: 'Courses',
      id: 'courses',
      type: 'single' as const,
    },
    {
      label: 'Events',
      id: 'events',
      type: 'single' as const,
    },
    {
      label: 'Learning Hub',
      id: 'lms',
      type: 'single' as const,
      isExternal: false,
    },
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
          label: 'Blogs',
          id: 'blogs',
          description: 'Expert insights and industry thought leadership',
          icon: FileText,
          color: '#f57c00',
        },
        {
          label: 'Partner Portal',
          id: 'portal',
          description: 'Collaboration opportunities for partners and trainers',
          icon: Users,
          color: '#005a7c',
        },
        {
          label: 'Contact Us',
          id: 'contact',
          description: 'Connect with our team for inquiries and support',
          icon: Mail,
          color: '#f57c00',
        },
      ],
    },
  ];

  const handleNavClick = (e: React.MouseEvent, itemId: string, isExternal?: boolean, url?: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setOpenMobileMenu(null);
    setHoveredMenu(null);
    
    // Handle external links
    if (isExternal && url) {
      window.open(url, '_blank');
      return;
    }
    
    if (onNavigate) {
      onNavigate(itemId);
    } else {
      // Fallback to hash navigation for items on the same page
      const element = document.getElementById(itemId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isItemActive = (menuId: string, items?: any[]) => {
    if (items) {
      return items.some(item => activePage === item.id);
    }
    return activePage === menuId;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={(e) => handleNavClick(e, 'home')}>
            <Logo className="h-[55px] w-auto" variant="navbar" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuStructure.map((menu) => (
              <div
                key={menu.id}
                className="relative"
                onMouseEnter={() => menu.type === 'dropdown' && setHoveredMenu(menu.id)}
                onMouseLeave={() => menu.type === 'dropdown' && setHoveredMenu(null)}
              >
                {menu.type === 'single' ? (
                  <a
                    href={menu.isExternal ? menu.url : `#${menu.id}`}
                    onClick={(e) => handleNavClick(e, menu.id, menu.isExternal, menu.url)}
                    target={menu.isExternal ? '_blank' : undefined}
                    rel={menu.isExternal ? 'noopener noreferrer' : undefined}
                    className={`relative pb-1 transition-all duration-300 group ${
                      isItemActive(menu.id)
                        ? 'text-[#f57c00]'
                        : 'text-gray-700 hover:text-[#f57c00]'
                    }`}
                  >
                    {menu.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#f57c00] transition-all duration-300 ${
                      isItemActive(menu.id) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </a>
                ) : (
                  <>
                    <button
                      className={`relative pb-1 transition-all duration-300 group ${
                        isItemActive(menu.id, menu.items) || hoveredMenu === menu.id
                          ? 'text-[#f57c00]'
                          : 'text-gray-700 hover:text-[#f57c00]'
                      }`}
                    >
                      {menu.label}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-[#f57c00] transition-all duration-300 ${
                        isItemActive(menu.id, menu.items) || hoveredMenu === menu.id ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </button>
                    
                    {/* Mega Menu Dropdown */}
                    {hoveredMenu === menu.id && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-screen max-w-md">
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                          {/* Header */}
                          <div className="bg-gradient-to-r from-[#005a7c] to-[#00789e] px-6 py-4">
                            <h3 className="text-white font-semibold">Company Information</h3>
                            <p className="text-white/80 text-sm mt-0.5">Learn more about Kaizari L&D International</p>
                          </div>
                          
                          {/* Menu Items */}
                          <div className="p-3">
                            {menu.items?.map((item, index) => {
                              const Icon = item.icon;
                              return (
                                <a
                                  key={item.id}
                                  href={item.isExternal ? item.url : `#${item.id}`}
                                  onClick={(e) => handleNavClick(e, item.id, item.isExternal, item.url)}
                                  target={item.isExternal ? '_blank' : undefined}
                                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                                  className={`group flex items-start gap-4 p-4 rounded-lg transition-all duration-300 border-l-4 border-transparent ${
                                    activePage === item.id
                                      ? 'bg-[#f57c00]/5 border-l-[#f57c00]'
                                      : 'hover:bg-gray-50 hover:border-l-[#f57c00]'
                                  }`}
                                >
                                  {Icon && (
                                    <div 
                                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                                      style={{ 
                                        backgroundColor: activePage === item.id ? item.color : 'transparent',
                                        border: activePage === item.id ? 'none' : `2px solid ${item.color}20`
                                      }}
                                    >
                                      <Icon 
                                        className="h-5 w-5 transition-all duration-300" 
                                        style={{ 
                                          color: activePage === item.id ? 'white' : item.color 
                                        }}
                                      />
                                    </div>
                                  )}
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="font-semibold text-gray-900 group-hover:text-[#f57c00] transition-colors duration-300">
                                        {item.label}
                                      </span>
                                      <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1">
            {menuStructure.map((menu) => (
              <div key={menu.id}>
                {menu.type === 'single' ? (
                  <a
                    href={menu.isExternal ? menu.url : `#${menu.id}`}
                    onClick={(e) => handleNavClick(e, menu.id, menu.isExternal, menu.url)}
                    target={menu.isExternal ? '_blank' : undefined}
                    rel={menu.isExternal ? 'noopener noreferrer' : undefined}
                    className={`block py-3 px-4 transition-colors cursor-pointer rounded-md border-l-4 ${
                      activePage === menu.id
                        ? 'text-[#f57c00] bg-[#f57c00]/5 border-l-[#f57c00]'
                        : 'text-gray-700 hover:text-[#f57c00] hover:bg-gray-50 border-l-transparent'
                    }`}
                  >
                    {menu.label}
                  </a>
                ) : (
                  <div>
                    <button
                      onClick={() => setOpenMobileMenu(openMobileMenu === menu.id ? null : menu.id)}
                      className={`w-full text-left py-3 px-4 transition-colors rounded-md border-l-4 ${
                        isItemActive(menu.id, menu.items)
                          ? 'text-[#f57c00] bg-[#f57c00]/5 border-l-[#f57c00]'
                          : 'text-gray-700 hover:text-[#f57c00] hover:bg-gray-50 border-l-transparent'
                      }`}
                    >
                      {menu.label}
                    </button>
                    {openMobileMenu === menu.id && (
                      <div className="mt-1 space-y-1 bg-gray-50/50 rounded-md p-2 ml-2">
                        {menu.items?.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.id}
                              href={item.isExternal ? item.url : `#${item.id}`}
                              onClick={(e) => handleNavClick(e, item.id, item.isExternal, item.url)}
                              target={item.isExternal ? '_blank' : undefined}
                              rel={item.isExternal ? 'noopener noreferrer' : undefined}
                              className={`flex items-start gap-3 py-3 px-3 rounded-md transition-colors border-l-4 ${
                                activePage === item.id
                                  ? 'text-[#f57c00] bg-white border-l-[#f57c00]'
                                  : 'text-gray-600 hover:text-[#f57c00] hover:bg-white border-l-transparent'
                              }`}
                            >
                              {Icon && (
                                <div 
                                  className="flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center"
                                  style={{ 
                                    backgroundColor: `${item.color}15`
                                  }}
                                >
                                  <Icon className="h-4 w-4" style={{ color: item.color }} />
                                </div>
                              )}
                              <div className="flex-1">
                                <div className="text-sm font-medium mb-0.5">{item.label}</div>
                                <div className="text-xs text-gray-500">{item.description}</div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
