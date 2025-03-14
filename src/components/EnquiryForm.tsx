
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail } from 'lucide-react';

export const EnquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    class: '',
    type: 'admission',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Enquiry Submitted",
      description: "We'll get back to you soon!",
    });
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      address: '', 
      class: '', 
      type: 'admission', 
      message: '' 
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sdblue mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12">Feel free to reach out to us for any queries</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">School Address</h3>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-sdblue mt-1" />
                <p className="text-gray-600">
                  Basharatpur, Gorakhpur, Uttar Pradesh 273004
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
            
            <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5956576869307!2d83.3814157752671!3d26.789155976721045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145015195c359%3A0x477ad60165759ca3!2sS%20D%20ACADEMY%20%26%20TENDERCARE%20PLAYWAY%20RAPTINAGAR%20GORAKHPUR!5e0!3m2!1sen!2sin!4v1738936171984!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Enquiry Type</label>
                <Select 
                  defaultValue={formData.type}
                  onValueChange={(value) => setFormData({ ...formData, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admission">Admission Enquiry</SelectItem>
                    <SelectItem value="general">General Enquiry</SelectItem>
                    <SelectItem value="fees">Fee Structure</SelectItem>
                    <SelectItem value="facilities">Facilities</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Input
                  placeholder="Full Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Input
                  placeholder="Class/Grade Interested In"
                  value={formData.class}
                  onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message or Query"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full h-32"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-sdblue hover:bg-sdblue/90">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
