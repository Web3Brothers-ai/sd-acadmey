import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  useEffect(() => {
    // Demo notices
    const demoNotices = [
      {
        id: 1,
        title: "Result declared of admission test",
        date: "5th January 2025",
        description: "Results for the admission test held on January 5th, 2025 have been declared. Congratulations to all successful candidates!",
        category: "Admission"
      },
      {
        id: 2,
        title: "Annual Sports Day",
        date: "15th February 2025",
        description: "Join us for our Annual Sports Day celebration. Various competitions and activities planned for students.",
        category: "Event"
      },
      {
        id: 3,
        title: "Parent-Teacher Meeting",
        date: "20th January 2025",
        description: "Important meeting to discuss student progress and academic performance.",
        category: "Notice"
      },
      {
        id: 4,
        title: "Science Exhibition",
        date: "10th March 2025",
        description: "Annual Science Exhibition showcasing student projects and innovations.",
        category: "Event"
      },
      {
        id: 5,
        title: "Holiday Notice",
        date: "26th January 2025",
        description: "School will remain closed on account of Republic Day celebrations.",
        category: "Holiday"
      }
    ];
    
    localStorage.setItem('notices', JSON.stringify(demoNotices));
    setNotices(demoNotices);
  }, []);

  const nextNotice = () => {
    setCurrentNoticeIndex((prev) => (prev + 1) % notices.length);
  };

  const prevNotice = () => {
    setCurrentNoticeIndex((prev) => (prev - 1 + notices.length) % notices.length);
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 max-w-md w-full transform transition-transform duration-300 hover:translate-x-0 translate-x-[calc(100%-3rem)]">
      <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-l-2xl border-l border-t border-b border-gray-200">
        <div className="flex items-center gap-2 p-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-sdblue">Notice & Circulars</h2>
          <span className="px-2 py-1 text-xs font-semibold bg-red-500 text-white rounded-full animate-pulse">
            NEW
          </span>
        </div>
        
        <div className="relative h-[400px] overflow-hidden">
          {notices.map((notice, index) => (
            <div
              key={notice.id}
              className={`absolute inset-0 p-4 transition-all duration-500 ease-in-out ${
                index === currentNoticeIndex 
                  ? 'translate-x-0 opacity-100' 
                  : index < currentNoticeIndex 
                    ? '-translate-x-full opacity-0' 
                    : 'translate-x-full opacity-0'
              }`}
            >
              <div className="bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-sdblue">{notice.title}</h3>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                    {notice.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{notice.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{notice.date}</span>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/notices')}
                    className="text-sdblue hover:bg-sdblue/10"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between p-4 border-t border-gray-200">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevNotice}
            className="text-gray-600 hover:text-sdblue"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextNotice}
            className="text-gray-600 hover:text-sdblue"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};