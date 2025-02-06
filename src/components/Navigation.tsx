
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Notices', href: '#notices' },
  { label: 'Contact', href: '#contact' }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginClick = () => {
    if (isAdmin) {
      navigate('/admin/dashboard');
    } else {
      navigate('/login');
    }
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (href === '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else if (href.startsWith('#')) {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const navHeight = 80; // Height of the navigation bar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      navigate(href);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('/')} 
              className="flex-shrink-0 flex items-center gap-3"
            >
              <img 
                src="/lovable-uploads/74233a1b-ee7c-42d2-b3dc-5c32c52d8378.png"
                alt="S.D. Academy Logo" 
                className="h-16 w-16 object-contain transition-transform duration-300 hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-sdblue">S.D. Academy</span>
                <span className="text-sm text-gray-600">& Tendercare Playway</span>
              </div>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-sdblue px-3 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="bg-sdblue hover:bg-sdblue/90 transition-all duration-300 hover:-translate-y-1"
              onClick={handleLoginClick}
            >
              {isAdmin ? 'Dashboard' : 'Admin Login'}
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
      <div 
        className={`md:hidden transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-sdblue hover:bg-gray-50 rounded-md transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button 
            className="w-full mt-4 bg-sdblue hover:bg-sdblue/90"
            onClick={() => {
              handleLoginClick();
              setIsOpen(false);
            }}
          >
            {isAdmin ? 'Dashboard' : 'Admin Login'}
          </Button>
        </div>
      </div>
    </nav>
  );
};
