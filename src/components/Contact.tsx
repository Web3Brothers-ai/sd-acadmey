
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Map from './Map';

export const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sdblue mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12">Get in touch with us</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">School Address</h3>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-sdblue mt-1" />
                <p className="text-gray-600">
                  Ashok Rajpath Road, Patna, Bihar 800004
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-sdblue" />
                  <p className="text-gray-600">+91 123-456-7890</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-sdblue" />
                  <p className="text-gray-600">info@school.com</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">School Hours</h3>
              <div className="space-y-2">
                <p className="text-gray-600">Monday - Saturday: 7:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};
