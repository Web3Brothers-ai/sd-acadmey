import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Bell } from 'lucide-react';

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
        isNew: true
      },
      {
        id: 4,
        title: "CBSE EXAM DATE SHEET 2024-25 OF CLASS X",
        date: "15th January 2025",
        description: "CBSE has released the date sheet for Class X board examinations 2024-25.",
        category: "Examination",
        isNew: true
      },
      {
        id: 5,
        title: "Change of School Timings",
        date: "1st February 2025",
        description: "New school timings will be effective from February 1st, 2025.",
        category: "General",
        isNew: true
      },
      {
        id: 6,
        title: "COMMENCING OF NEW ACADEMIC SESSION : 2024-25",
        date: "1st April 2025",
        description: "The new academic session will commence from April 1st, 2025.",
        category: "Academic",
        isNew: true
      }
    ];
    
    setNotices(demoNotices);
  }, []);

  const nextNotice = () => {
    setCurrentNoticeIndex((prev) => (prev + 1) % notices.length);
  };

  const prevNotice = () => {
    setCurrentNoticeIndex((prev) => (prev - 1 + notices.length) % notices.length);
  };

  return (
    <div className="fixed top-0 right-0 w-[400px] h-screen bg-gradient-to-b from-[#8B1650] to-[#1A1F2C] shadow-2xl z-50">
      <div className="flex items-center gap-2 p-4 bg-[#8B1650] border-b border-white/10">
        <Bell className="w-5 h-5 text-white" />
        <h2 className="text-xl font-bold text-white tracking-wide">NOTICE & CIRCULARS</h2>
      </div>
      
      <div className="h-[calc(100vh-120px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {notices.map((notice, index) => (
          <div
            key={notice.id}
            className={`p-3 transition-all duration-500 ease-in-out ${
              index === currentNoticeIndex 
                ? 'translate-x-0 opacity-100' 
                : index < currentNoticeIndex 
                  ? '-translate-x-full opacity-0' 
                  : 'translate-x-full opacity-0'
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base font-semibold text-white/90 pr-2 line-clamp-2 group-hover:text-white transition-colors">
                  {notice.title}
                </h3>
                {notice.isNew && (
                  <span className="inline-flex items-center px-2 py-1 text-[10px] font-bold bg-red-500 text-white rounded-full animate-pulse">
                    NEW
                  </span>
                )}
              </div>
              <p className="text-gray-300 mb-3 text-sm line-clamp-3 group-hover:text-gray-200 transition-colors">
                {notice.description}
              </p>
              <div className="flex justify-between items-center mt-auto pt-2 border-t border-white/10">
                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
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

      <div className="flex justify-between p-3 border-t border-white/10 bg-[#8B1650]/50">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevNotice}
          className="text-white hover:text-white hover:bg-white/10 text-xs h-7"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={nextNotice}
          className="text-white hover:text-white hover:bg-white/10 text-xs h-7"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};