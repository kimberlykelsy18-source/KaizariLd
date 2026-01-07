// src/components/Footer.tsx
import React from 'react';

// Footer links
const footerLinks = {
  company: [
    { label: 'About Us', href: '#company' },
    { label: 'Our Team', href: '#company' },
    { label: 'Careers', href: '#company' },
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
  ],
};

// ✅ Named export of the Footer component
export const Footer = () => {
  return (
    <footer className="bg-[#005a7c] text-white py-10 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Kaizari L&D International</h3>
          <p className="text-sm text-gray-200">
            Empowering professionals and organizations through transformative
            learning and development solutions.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-200 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2">
            {footerLinks.services.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-200 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            {footerLinks.resources.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-200 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 mt-8">
        © {new Date().getFullYear()} Kaizari L&D International. All rights reserved.
      </div>
    </footer>
  );
};
