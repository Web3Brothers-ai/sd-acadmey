
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
        <div className="max-w-2xl mx-auto">
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
    </section>
  );
};
