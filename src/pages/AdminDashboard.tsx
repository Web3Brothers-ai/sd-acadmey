
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="beyond">Beyond Academic</TabsTrigger>
            <TabsTrigger value="essential">Essential Info</TabsTrigger>
            <TabsTrigger value="notices">Notices</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
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
          </TabsContent>

          <TabsContent value="beyond">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Manage Beyond Academic Content</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Sports & Games</h3>
                    <textarea 
                      className="w-full p-2 border rounded"
                      rows={4}
                      placeholder="Enter sports & games details"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Dance & Music</h3>
                    <textarea 
                      className="w-full p-2 border rounded"
                      rows={4}
                      placeholder="Enter dance & music details"
                    />
                  </div>
                </div>
                <Button>Save Changes</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="essential">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Manage Essential Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">School Uniform</h3>
                    <textarea 
                      className="w-full p-2 border rounded"
                      rows={4}
                      placeholder="Enter uniform details"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">School Timing</h3>
                    <textarea 
                      className="w-full p-2 border rounded"
                      rows={4}
                      placeholder="Enter school timing details"
                    />
                  </div>
                </div>
                <Button>Save Changes</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="notices">
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
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setSelectedFile(e.target.files[0]);
                    }
                  }}
                />
                <Button onClick={() => {
                  toast({
                    title: "Notice added",
                    description: "The notice has been added successfully"
                  });
                }}>Add Notice</Button>
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
                        onClick={() => {
                          const updatedNotices = notices.filter(n => n.id !== notice.id);
                          setNotices(updatedNotices);
                          localStorage.setItem('scrollingNotices', JSON.stringify(updatedNotices));
                          toast({
                            title: "Notice deleted",
                            description: "The notice has been deleted successfully"
                          });
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

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
