
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Book, Users, Phone, LogIn, Award, School, Info } from 'lucide-react';
import { NavItem } from '@/types/nav';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: Users },
  { label: 'About Us', href: '/about', icon: Users },
  {
    label: 'Academic',
    href: '/academic',
    icon: Book,
    subItems: [
      { label: 'Primary Section', href: '/academic/primary' },
      { label: 'Middle Section', href: '/academic/middle' },
      { label: 'Senior Section', href: '/academic/senior' }
    ]
  },
  {
    label: 'Results',
    href: '/results',
    icon: Award,
    subItems: [
      { label: 'Academic Results', href: '/results/academic' },
      { label: 'Olympiad Results', href: '/results/olympiad' },
      { label: 'Competition Results', href: '/results/competition' },
      { label: 'Entrance Results', href: '/results/entrance' }
    ]
  },
  {
    label: 'Beyond Academic',
    href: '/beyond-academic',
    icon: Award,
    subItems: [
      { label: 'Sports & Games', href: '/beyond-academic#sports' },
      { label: 'Dance & Music', href: '/beyond-academic#arts' },
      { label: 'Art & Craft', href: '/beyond-academic#craft' },
      { label: 'Yoga & Meditation', href: '/beyond-academic#yoga' }
    ]
  },
  {
    label: 'Essential Info',
    href: '/essential-info',
    icon: Info,
    subItems: [
      { label: 'School Uniform', href: '/essential-info#uniform' },
      { label: 'School Timing', href: '/essential-info#timing' },
      { label: 'Transport', href: '/essential-info#transport' },
      { label: 'Code of Conduct', href: '/essential-info#conduct' },
      { label: 'SDA in Newspaper', href: '/essential-info#news' },
      { label: 'Online Registration', href: '/essential-info#registration' },
      { label: 'Job Entrance', href: '/essential-info#careers' }
    ]
  },
  { label: 'Admission', href: '/admission', icon: Users },
  { label: 'Gallery', href: '#gallery', icon: Users },
  { label: 'Contact', href: '/enquiry', icon: Phone },
  { label: 'Admin Login', href: '/login', icon: LogIn }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('/')) {
      navigate(href);
    } else if (href.startsWith('#') && location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (href.startsWith('#')) {
      navigate('/', { state: { scrollTo: href } });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-gradient-to-r from-white/95 to-blue-50/95 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center flex-shrink-0">
            <button 
              onClick={() => handleNavClick('/')} 
              className="flex items-center gap-2 sm:gap-3 group"
            >
              <img 
                src="/lovable-uploads/74233a1b-ee7c-42d2-b3dc-5c32c52d8378.png"
                alt="S.D. Academy Logo" 
                className="h-12 w-12 sm:h-16 sm:w-16 object-contain transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-sdblue to-blue-600 bg-clip-text text-transparent transform transition-all duration-300 group-hover:translate-x-2">
                  S.D. Academy
                </span>
                <span className="text-xs sm:text-sm text-gray-600 transform transition-all duration-300 group-hover:translate-x-1">
                  & Tendercare Playway
                </span>
              </div>
            </button>
          </div>

          <DesktopNav navItems={navItems} handleNavClick={handleNavClick} />
          <MobileNav 
            navItems={navItems} 
            handleNavClick={handleNavClick}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
    </nav>
  );
};
