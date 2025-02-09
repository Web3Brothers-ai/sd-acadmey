
import { Menu, X } from 'lucide-react';
import { NavItem } from '@/types/nav';
import { MobileMenuItem } from './MobileMenuItem';

interface MobileNavProps {
  navItems: NavItem[];
  handleNavClick: (href: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileNav = ({ navItems, handleNavClick, isOpen, setIsOpen }: MobileNavProps) => {
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
            <MobileMenuItem
              key={item.label}
              item={item}
              handleNavClick={handleNavClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};
