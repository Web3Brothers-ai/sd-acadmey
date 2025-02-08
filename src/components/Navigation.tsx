
import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Book, Users, Phone, LogIn, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
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
  { label: 'Admission', href: '/admission', icon: Users },
  { label: 'Gallery', href: '#gallery', icon: Users },
  { label: 'Contact', href: '/enquiry', icon: Phone },
  { label: 'Admin Login', href: '/login', icon: LogIn }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    setActiveDropdown(null);
    
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
              className="flex items-center gap-3 group"
            >
              <img 
                src="/lovable-uploads/74233a1b-ee7c-42d2-b3dc-5c32c52d8378.png"
                alt="S.D. Academy Logo" 
                className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-sdblue to-blue-600 bg-clip-text text-transparent transform transition-all duration-300 group-hover:translate-x-2">
                  S.D. Academy
                </span>
                <span className="text-sm text-gray-600 transform transition-all duration-300 group-hover:translate-x-1">
                  & Tendercare Playway
                </span>
              </div>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item, index) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => {
                    if (!item.subItems) {
                      handleNavClick(item.href);
                    } else {
                      setActiveDropdown(activeDropdown === item.label ? null : item.label);
                    }
                  }}
                  className={`flex items-center gap-2 text-gray-700 hover:text-sdblue px-3 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-md ${
                    item.label === 'Admin Login' 
                      ? 'bg-gradient-to-r from-sdblue to-blue-600 text-white hover:from-blue-600 hover:to-sdblue' 
                      : ''
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fade-in 0.5s ease-out forwards'
                  }}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                  {item.subItems && <ChevronDown className="w-4 h-4 ml-1" />}
                </button>
                
                {item.subItems && (
                  <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                    activeDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}>
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

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sdblue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
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
            <div key={item.label}>
              <button
                onClick={() => {
                  if (!item.subItems) {
                    handleNavClick(item.href);
                  } else {
                    setActiveDropdown(activeDropdown === item.label ? null : item.label);
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
              
              {item.subItems && activeDropdown === item.label && (
                <div className="pl-4 space-y-1">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.label}
                      onClick={() => handleNavClick(subItem.href)}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
