
import { Mail, Phone, Globe, Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">About S.D. Academy</h3>
            <p className="text-blue-50">
              Nurturing Tomorrow's Leaders through quality education and holistic development.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Academics</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <Mail className="w-5 h-5" />
                info@sdacademy.edu
              </p>
              <p className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <Phone className="w-5 h-5" />
                +1 234 567 890
              </p>
              <p className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <Globe className="w-5 h-5" />
                www.sdacademy.edu
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300 transition-colors transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-300/30 mt-8 pt-8 text-center">
          <p className="text-blue-50">&copy; {new Date().getFullYear()} S.D. Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
