
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
          className="inline-flex items-center justify-center p-3 rounded-md text-gray-700 hover:text-sdblue focus:outline-none focus:ring-2 focus:ring-sdblue"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div 
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div 
          className={`fixed inset-y-0 left-0 w-3/4 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-semibold text-gray-900">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 rounded-md text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-2">
              {navItems.map((item) => (
                <MobileMenuItem
                  key={item.label}
                  item={item}
                  handleNavClick={handleNavClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
