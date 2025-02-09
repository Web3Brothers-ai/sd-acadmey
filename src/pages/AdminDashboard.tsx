
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from '@/integrations/supabase/client';
import type { BeyondAcademicContent, EssentialInfoContent } from '@/types/content';

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
  const [beyondAcademicContent, setBeyondAcademicContent] = useState<BeyondAcademicContent[]>([]);
  const [essentialInfoContent, setEssentialInfoContent] = useState<EssentialInfoContent[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/login');
    }
    
    const fetchContent = async () => {
      const { data: beyondData, error: beyondError } = await supabase
        .from('beyond_academic_content')
        .select('*');
      
      if (beyondError) {
        console.error('Error fetching beyond academic content:', beyondError);
      } else {
        setBeyondAcademicContent(beyondData || []);
      }

      const { data: essentialData, error: essentialError } = await supabase
        .from('essential_info_content')
        .select('*');
      
      if (essentialError) {
        console.error('Error fetching essential info content:', essentialError);
      } else {
        setEssentialInfoContent(essentialData || []);
      }
    };

    fetchContent();
    
    const storedEnquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
    setEnquiries(storedEnquiries);
    
    const storedNotices = JSON.parse(localStorage.getItem('scrollingNotices') || '[]');
    setNotices(storedNotices);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  const handleImageUpload = async (file: File, section: string, contentId: string, contentType: 'beyond' | 'essential') => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `${section}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('section_images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('section_images')
        .getPublicUrl(filePath);

      const table = contentType === 'beyond' ? 'beyond_academic_content' : 'essential_info_content';
      const { error: updateError } = await supabase
        .from(table)
        .update({ image_url: publicUrl })
        .eq('id', contentId);

      if (updateError) {
        throw updateError;
      }

      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });

      // Refresh content
      const { data, error: fetchError } = await supabase
        .from(table)
        .select('*');
      
      if (fetchError) {
        throw fetchError;
      }

      if (contentType === 'beyond') {
        setBeyondAcademicContent(data || []);
      } else {
        setEssentialInfoContent(data || []);
      }

    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive",
      });
    }
  };

  const handleContentUpdate = async (id: string, content: string, type: 'beyond' | 'essential') => {
    const table = type === 'beyond' ? 'beyond_academic_content' : 'essential_info_content';
    try {
      const { error } = await supabase
        .from(table)
        .update({ content })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Content updated successfully",
      });

      // Refresh content
      const { data, error: fetchError } = await supabase
        .from(table)
        .select('*');
      
      if (fetchError) throw fetchError;

      if (type === 'beyond') {
        setBeyondAcademicContent(data || []);
      } else {
        setEssentialInfoContent(data || []);
      }

    } catch (error) {
      console.error('Error updating content:', error);
      toast({
        title: "Error",
        description: "Failed to update content",
        variant: "destructive",
      });
    }
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
              <div className="space-y-6">
                {beyondAcademicContent.map((content) => (
                  <div key={content.id} className="space-y-4">
                    <h3 className="font-semibold">{content.section_name}</h3>
                    {content.image_url && (
                      <img 
                        src={content.image_url} 
                        alt={content.section_name}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex gap-4">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleImageUpload(file, content.section_name, content.id, 'beyond');
                          }
                        }}
                      />
                    </div>
                    <textarea 
                      className="w-full p-2 border rounded"
                      rows={4}
                      value={content.content}
                      onChange={(e) => handleContentUpdate(content.id, e.target.value, 'beyond')}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="essential">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Manage Essential Information</h2>
              <div className="space-y-6">
                {essentialInfoContent.map((content) => (
                  <div key={content.id} className="space-y-4">
                    <h3 className="font-semibold">{content.section_name}</h3>
                    {content.image_url && (
                      <img 
                        src={content.image_url} 
                        alt={content.section_name}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex gap-4">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleImageUpload(file, content.section_name, content.id, 'essential');
                          }
                        }}
                      />
                    </div>
                    <textarea 
                      className="w-full p-2 border rounded"
                      rows={4}
                      value={content.content}
                      onChange={(e) => handleContentUpdate(content.id, e.target.value, 'essential')}
                    />
                  </div>
                ))}
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
