// src/components/Navbar.tsx
import { Building2, Users, Mail } from 'lucide-react';

// Menu structure
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

// ✅ Named export of Navbar
export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold text-[#005a7c]">Kaizari L&D International</div>
      <ul className="flex space-x-6">
        {menuStructure.map((menu) => (
          <li key={menu.id} className="relative group cursor-pointer">
            <span className="text-gray-700 hover:text-[#005a7c] transition">
              {menu.label}
            </span>
            {menu.type === 'dropdown' && (
              <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg py-2 w-56">
                {menu.items.map((item) => (
                  <li
                    key={item.id}
                    className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <item.icon size={16} color={item.color} />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
