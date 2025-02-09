
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { NavItem, SubNavItem } from '@/types/nav';

interface MobileMenuItemProps {
  item: NavItem;
  handleNavClick: (href: string) => void;
}

export const MobileMenuItem = ({ item, handleNavClick }: MobileMenuItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  const handleItemClick = () => {
    if (item.subItems) {
      setIsExpanded(!isExpanded);
    } else {
      handleNavClick(item.href);
    }
  };

  return (
    <div key={item.label}>
      <div className="relative">
        <button
          onClick={handleItemClick}
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
          {item.subItems && <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />}
        </button>

        {item.subItems && isExpanded && (
          <div className="pl-4 space-y-1 bg-gray-50 rounded-md mt-1">
            {item.subItems.map((subItem: SubNavItem) => (
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
  );
};
