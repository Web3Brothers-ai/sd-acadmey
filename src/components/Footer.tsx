import { Mail, Phone, Globe, Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-sdblue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">About S.D. Academy</h3>
            <p className="text-gray-300">
              Nurturing Tomorrow's Leaders through quality education and holistic development.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sdgold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-sdgold transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-sdgold transition-colors">Academics</a></li>
              <li><a href="#" className="hover:text-sdgold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                info@sdacademy.edu
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +1 234 567 890
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                www.sdacademy.edu
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sdgold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-sdgold transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-sdgold transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} S.D. Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};