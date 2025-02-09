
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { NavItem } from '@/types/nav';

interface MobileNavProps {
  navItems: NavItem[];
  handleNavClick: (href: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileNav = ({ navItems, handleNavClick, isOpen, setIsOpen }: MobileNavProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const isMobile = useIsMobile();

  return (
    <>
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sdblue"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div 
        className={`md:hidden transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navItems.map((item) => (
            <div key={item.label}>
              <div
                className="relative"
                onMouseEnter={() => !isMobile && setHoveredItem(item.label)}
                onMouseLeave={() => !isMobile && setHoveredItem(null)}
                onClick={() => isMobile && setHoveredItem(hoveredItem === item.label ? null : item.label)}
              >
                <button
                  onClick={() => {
                    if (!item.subItems) {
                      handleNavClick(item.href);
                    }
                  }}
                  className={`flex items-center justify-between w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-sdblue hover:bg-gray-50 rounded-md transition-colors ${
                    item.label === 'Admin Login' 
                      ? 'bg-gradient-to-r from-sdblue to-blue-600 text-white hover:from-blue-600 hover:to-sdblue' 
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </div>
                  {item.subItems && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {item.subItems && hoveredItem === item.label && (
                  <div className="pl-4 space-y-1 bg-gray-50 rounded-md mt-1">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => handleNavClick(subItem.href)}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
