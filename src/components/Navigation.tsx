
import { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center gap-3">
              <img 
                src="/lovable-uploads/319008bf-cf23-450b-9ba4-2460eaaf8736.png"
                alt="S.D. Academy & Tendercare Playway Logo" 
                className="h-16 w-16 transition-transform duration-300 hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-sdblue">S.D. Academy</span>
                <span className="text-sm text-gray-600">& Tendercare Playway</span>
              </div>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-sdblue px-3 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1"
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="bg-sdblue hover:bg-sdblue/90 transition-all duration-300 hover:-translate-y-1"
            >
              Apply Now
            </Button>
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
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sdblue hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button 
            className="w-full mt-4 bg-sdblue hover:bg-sdblue/90"
            onClick={() => setIsOpen(false)}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </nav>
  );
};
