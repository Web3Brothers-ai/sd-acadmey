
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/ui/card';

interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState<EnquiryData[]>([]);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/login');
    }
    
    const storedEnquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
    setEnquiries(storedEnquiries);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-sdblue">Admin Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">Logout</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Button 
            className="h-32 text-lg"
            onClick={() => navigate('/admin/gallery')}
          >
            Manage Gallery
          </Button>
          <Button 
            className="h-32 text-lg"
            onClick={() => navigate('/admin/notices')}
          >
            Manage Notices
          </Button>
          <Button 
            className="h-32 text-lg"
            onClick={() => navigate('/admin/teachers')}
          >
            Manage Teachers
          </Button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-sdblue mb-6">Recent Enquiries</h2>
          <div className="space-y-4">
            {enquiries.map((enquiry, index) => (
              <Card key={index} className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">{enquiry.name}</h3>
                    <p className="text-gray-500">{enquiry.email}</p>
                    <p className="text-gray-500">{enquiry.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-700">{enquiry.message}</p>
                    <p className="text-gray-400 text-sm mt-2">{enquiry.date}</p>
                  </div>
                </div>
              </Card>
            ))}
            {enquiries.length === 0 && (
              <p className="text-center text-gray-500">No enquiries received yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
