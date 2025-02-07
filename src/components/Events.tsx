
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
  isNew?: boolean;
}

export const Events = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const demoNotices = [
      {
        id: 1,
        title: "Result declared of admission test held on 5th January 2025",
        date: "5th January 2025",
        description: "Results for the admission test have been declared. Check your results in the student portal.",
        category: "Admission",
        isNew: true
      },
      {
        id: 2,
        title: "Registrations Open For Class- NUR to VI, IX & XI (Science & Commerce)",
        date: "9th February 2025",
        description: "For 2025-26 Admission Test Date- 09th Feb 2025 (Sunday)",
        category: "Registration",
        isNew: true
      },
      {
        id: 3,
        title: "CBSE EXAM DATE SHEET 2024-25 OF CLASS XII",
        date: "15th January 2025",
        description: "CBSE has released the date sheet for Class XII board examinations 2024-25.",
        category: "Examination",
        isNew: false
      },
      {
        id: 4,
        title: "Annual Sports Day 2025",
        date: "20th February 2025",
        description: "Join us for an exciting day of sports and athletics. All students are encouraged to participate.",
        category: "Events",
        isNew: true
      },
      {
        id: 5,
        title: "Parent-Teacher Meeting Schedule",
        date: "1st March 2025",
        description: "PTM for all classes will be held online. Schedule and meeting links will be shared via email.",
        category: "Meeting",
        isNew: true
      }
    ];
    
    setNotices(demoNotices);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentNoticeIndex((prev) => (prev + 1) % notices.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPaused, notices.length]);

  return (
    <div className="absolute top-0 right-0 w-[400px] h-screen bg-gradient-to-b from-[#9b87f5] to-[#1A1F2C] shadow-2xl">
      <div className="flex items-center gap-2 p-4 bg-[#7E69AB] border-b border-white/10">
        <Bell className="w-5 h-5 text-white animate-pulse" />
        <h2 className="text-xl font-bold text-white tracking-wide">NOTICE & CIRCULARS</h2>
      </div>
      
      <div className="h-[calc(100vh-64px)] overflow-hidden">
        {notices.map((notice, index) => (
          <div
            key={notice.id}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`p-3 transition-all duration-500 ease-in-out ${
              index === currentNoticeIndex 
                ? 'translate-x-0 opacity-100' 
                : index < currentNoticeIndex 
                  ? '-translate-x-full opacity-0' 
                  : 'translate-x-full opacity-0'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 hover:border-white/30 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base font-semibold text-white/90 pr-2 line-clamp-2 group-hover:text-white transition-colors">
                  {notice.title}
                </h3>
                {notice.isNew && (
                  <span className="inline-flex items-center px-2 py-1 text-[10px] font-bold bg-[#F97316] text-white rounded-full animate-pulse">
                    NEW
                  </span>
                )}
              </div>
              <p className="text-[#F2FCE2] mb-3 text-sm line-clamp-3 group-hover:text-white transition-colors">
                {notice.description}
              </p>
              <div className="flex justify-between items-center mt-auto pt-2 border-t border-white/20">
                <span className="text-xs text-[#D6BCFA] group-hover:text-white transition-colors">
                  {notice.date}
                </span>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/notices')}
                  className="text-white border-white/20 hover:bg-white/10 hover:text-white text-xs h-7 px-3 transition-all duration-300"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
