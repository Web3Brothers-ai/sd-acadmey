
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface Notice {
  id: number;
  title: string;
  pdfUrl: string;
  isNew?: boolean;
  createdAt?: number;
}

export function NoticesSection() {
  const [notices, setNotices] = useState<Notice[]>(() => 
    JSON.parse(localStorage.getItem('scrollingNotices') || '[]')
  );
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  return (
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
  );
}
