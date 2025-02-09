
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, ChevronDown } from 'lucide-react';
import { NavItem } from '@/types/nav';

interface DesktopNavProps {
  navItems: NavItem[];
  handleNavClick: (href: string) => void;
}

export const DesktopNav = ({ navItems, handleNavClick }: DesktopNavProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="hidden md:flex md:items-center md:space-x-4">
      {navItems.map((item) => (
        <div 
          key={item.label} 
          className="relative group"
          onMouseEnter={() => setHoveredItem(item.label)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button
            onClick={() => handleNavClick(item.href)}
            className={`flex items-center gap-2 text-gray-700 hover:text-sdblue px-3 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-md ${
              item.label === 'Admin Login' 
                ? 'bg-gradient-to-r from-sdblue to-blue-600 text-white hover:from-blue-600 hover:to-sdblue' 
                : ''
            }`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
            {item.subItems && <ChevronDown className="w-4 h-4 ml-1" />}
          </button>
          
          {item.subItems && (
            <div 
              className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                hoveredItem === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <div className="py-1">
                {item.subItems.map((subItem) => (
                  <button
                    key={subItem.label}
                    onClick={() => handleNavClick(subItem.href)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
