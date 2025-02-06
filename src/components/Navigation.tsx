import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Academics', href: '#' },
  { label: 'Admissions', href: '#' },
  { label: 'Gallery', href: '#' },
  { label: 'Contact', href: '#' }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <div className="flex items-center gap-2">
  <img src="/logo.svg" alt="S.D. Academy Logo" className="h-10 w-auto" />
  <span className="text-2xl font-bold text-sdblue">S.D. Academy</span>
</div>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-sdblue px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-sdblue hover:bg-sdblue/90">Apply Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sdblue hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full mt-4 bg-sdblue hover:bg-sdblue/90">Apply Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};