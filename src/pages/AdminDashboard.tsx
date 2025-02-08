import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft } from 'lucide-react';

interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
}

interface Notice {
  id: number;
  title: string;
  pdfUrl: string;
  isNew?: boolean;
  createdAt?: number;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState<EnquiryData[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/login');
    }
    
    const storedEnquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
    setEnquiries(storedEnquiries);
    
    const storedNotices = JSON.parse(localStorage.getItem('scrollingNotices') || '[]');
    setNotices(storedNotices);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleAddNotice = async () => {
    if (!newNoticeTitle || !selectedFile) {
      toast({
        title: "Error",
        description: "Please provide both title and PDF file",
        variant: "destructive"
      });
      return;
    }

    // In a real application, you would upload the file to a server
    // For now, we'll create a temporary URL
    const pdfUrl = URL.createObjectURL(selectedFile);
    
    const newNotice: Notice = {
      id: Date.now(),
      title: newNoticeTitle,
      pdfUrl,
      isNew: true,
      createdAt: new Date().getTime()
    };

    const updatedNotices = [...notices, newNotice];
    localStorage.setItem('scrollingNotices', JSON.stringify(updatedNotices));
    setNotices(updatedNotices);
    setNewNoticeTitle('');
    setSelectedFile(null);

    toast({
      title: "Success",
      description: "Notice added successfully",
    });
  };

  const handleDeleteNotice = (id: number) => {
    const updatedNotices = notices.filter(notice => notice.id !== id);
    localStorage.setItem('scrollingNotices', JSON.stringify(updatedNotices));
    setNotices(updatedNotices);
    
    toast({
      title: "Success",
      description: "Notice deleted successfully",
    });
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold text-sdblue">Admin Dashboard</h1>
          <div className="ml-auto">
            <Button onClick={handleLogout} variant="outline">Logout</Button>
          </div>
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
            onClick={() => navigate('/admin/teachers')}
          >
            Manage Teachers
          </Button>
          <Button 
            className="h-32 text-lg"
            onClick={() => navigate('/admin/testimonials')}
          >
            Manage Video Testimonials
          </Button>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-sdblue mb-6">Manage Scrolling Notices</h2>
          <Card className="p-6">
            <div className="grid gap-4">
              <Input
                placeholder="Enter notice title"
                value={newNoticeTitle}
                onChange={(e) => setNewNoticeTitle(e.target.value)}
              />
              <Input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
              />
              <Button onClick={handleAddNotice}>Add Notice</Button>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-4">Current Notices</h3>
              <div className="space-y-2">
                {notices.map((notice) => (
                  <div key={notice.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>{notice.title}</span>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => handleDeleteNotice(notice.id)}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>
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
