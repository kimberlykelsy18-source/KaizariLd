// src/components/Footer.tsx
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

// Import the logo image
const getLogo = () => {
  try {
    return new URL(`../assets/kaizari-logo.png`, import.meta.url).href;
  } catch {
    return '';
  }
};

// Footer links
const footerLinks = {
  company: [
    { label: 'About Us', href: '#company' },
    { label: 'Our Team', href: '#company' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Corporate Training', href: '#courses' },
    { label: 'Individual Courses', href: '#courses' },
    { label: 'Upcoming Events', href: '#events' },
    { label: 'Custom Programs', href: '#contact' },
  ],
  resources: [
    { label: 'Partner Portal', href: '#portal' },
    { label: 'Trainer Portal', href: '#portal' },
    { label: 'Learning Hub (LMS)', href: '#lms' },
  ],
};

// Named export of the Footer component
export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#005a7c] to-[#003d54] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src={getLogo()}
              alt="Kaizari L&D International"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 max-w-sm">
              Empowering professionals and organizations through transformative
              learning and development solutions in finance, Excel, and data analysis.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:admin@kaizarildinternational.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-[#f57c00]" />
                <span>admin@kaizarildinternational.com</span>
              </a>
              <a href="tel:+254713664234" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-[#f57c00]" />
                <span>+254 713 664234</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-[#f57c00]" />
                <span>JKUAT Towers 17th floor, Kenyatta Avenue, Nairobi</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Kaizari L&D International. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
