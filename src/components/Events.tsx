
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Trophy, Bell, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

interface Notice {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
}

export const Events = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem('notices') || '[]');
    // Get the 3 most recent notices
    const recentNotices = storedNotices
      .sort((a: Notice, b: Notice) => b.id - a.id)
      .slice(0, 3);
    setNotices(recentNotices);
  }, []);

  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'event':
        return Trophy;
      case 'notice':
        return Bell;
      default:
        return Calendar;
    }
  };

  return (
    <section className="py-20 bg-white" id="notices">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-sdblue">Events & Announcements</h2>
          <Button 
            variant="outline"
            onClick={() => navigate('/notices')}
            className="text-sdblue hover:bg-sdblue/10"
          >
            View All Notices
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {notices.length > 0 ? (
            notices.map((notice) => {
              const Icon = getIcon(notice.category);
              return (
                <Card 
                  key={notice.id} 
                  className="transform transition-all hover:scale-105 cursor-pointer shadow-md hover:shadow-xl"
                  onClick={() => navigate('/notices')}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-sdblue rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-sdblue">{notice.title}</CardTitle>
                    <p className="text-gray-500">{notice.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{notice.description}</p>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {notice.category}
                    </span>
                  </CardContent>
                </Card>
              )
            })
          ) : (
            <div className="col-span-3 text-center text-gray-500">
              No notices available
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
