import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from 'figma:asset/4ec4c6baa418ed98087b9743b5ede9ab00b3386d.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

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
      { label: 'Blogs', href: '#blogs' },
      { label: 'Case Studies', href: '#blogs' },
      { label: 'Partner Portal', href: '#portal' },
      { label: 'Trainer Portal', href: '#portal' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#005a7c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Kaizari L&D International" className="h-20 mb-4 brightness-0 invert" />
            <p className="text-gray-300 mb-6">
              Transforming organizations through world-class corporate training and professional development programs.
            </p>
            <div className="space-y-3">
              <a href="mailto:admin@kaizarildinternational.com" className="flex items-center gap-2 text-gray-300 hover:text-[#f57c00] transition-colors">
                <Mail className="h-4 w-4" />
                <span>admin@kaizarildinternational.com</span>
              </a>
              <a href="tel:+254713664234" className="flex items-center gap-2 text-gray-300 hover:text-[#f57c00] transition-colors">
                <Phone className="h-4 w-4" />
                <span>+254 713 664 234</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>JKUAT Towers 17th floor, Kenyatta Avenue</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#f57c00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#f57c00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#f57c00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              © {currentYear} Kaizari L&D International. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f57c00] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-[#f57c00] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f57c00] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
