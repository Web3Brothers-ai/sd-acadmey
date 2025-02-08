
import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Notice {
  id: number;
  title: string;
  pdfUrl: string;
  createdAt: number;
  isNew?: boolean;
}

export default function AdminNotices() {
  const [title, setTitle] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!pdfFile) {
      toast({
        title: "Error",
        description: "Please select a PDF file",
        variant: "destructive"
      });
      return;
    }

    // Create object URL for the PDF
    const pdfUrl = URL.createObjectURL(pdfFile);

    const newNotice: Notice = {
      id: Date.now(),
      title,
      pdfUrl,
      createdAt: new Date().getTime(),
      isNew: true
    };

    const existingNotices = JSON.parse(localStorage.getItem('scrollingNotices') || '[]');
    localStorage.setItem('scrollingNotices', JSON.stringify([newNotice, ...existingNotices]));

    toast({
      title: "Notice Added",
      description: "The notice has been successfully added to the scrolling list.",
    });

    // Reset form
    setTitle('');
    setPdfFile(null);
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold text-sdblue mb-8">Add New Notice</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter notice title"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">PDF File</label>
            <Input 
              type="file" 
              accept=".pdf"
              onChange={handlePdfChange}
              className="w-full"
              required
            />
            <Alert className="mt-2">
              <AlertDescription>
                Upload PDF files for notices and circulars
              </AlertDescription>
            </Alert>
          </div>
          
          <Button type="submit" className="w-full">Add Notice</Button>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-sdblue mb-4">Existing Notices</h2>
          <div className="space-y-4">
            {JSON.parse(localStorage.getItem('scrollingNotices') || '[]').map((notice: Notice) => (
              <div key={notice.id} className="p-4 bg-white rounded-lg shadow">
                <p className="font-medium">{notice.title}</p>
                <div className="mt-2 flex justify-end">
                  <Button
                    variant="destructive"
                    onClick={() => {
                      const notices = JSON.parse(localStorage.getItem('scrollingNotices') || '[]');
                      const updatedNotices = notices.filter((n: Notice) => n.id !== notice.id);
                      localStorage.setItem('scrollingNotices', JSON.stringify(updatedNotices));
                      toast({
                        title: "Notice Deleted",
                        description: "The notice has been removed from the list.",
                      });
                      // Force re-render
                      navigate('/admin/notices');
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
