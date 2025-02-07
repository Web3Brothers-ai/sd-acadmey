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
    <div className="fixed top-0 right-0 w-1/4 h-screen bg-[#1A1F2C]/90 backdrop-blur-md shadow-2xl z-50">
      <div className="flex items-center gap-2 p-2 bg-[#7E69AB] border-b border-gray-700/50">
        <h2 className="text-base font-bold text-white">NOTICE & CIRCULARS</h2>
      </div>
      
      <div className="h-[calc(100vh-120px)] overflow-y-auto">
        {notices.map((notice, index) => (
          <div
            key={notice.id}
            className={`p-2 transition-all duration-500 ease-in-out ${
              index === currentNoticeIndex 
                ? 'translate-x-0 opacity-100' 
                : index < currentNoticeIndex 
                  ? '-translate-x-full opacity-0' 
                  : 'translate-x-full opacity-0'
            }`}
          >
            <div className="bg-[#1A1F2C]/50 backdrop-blur-sm rounded-xl p-2.5 shadow-lg border border-gray-700/50 hover:border-[#7E69AB]/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-1.5">
                <h3 className="text-sm font-semibold text-white pr-2 line-clamp-2">{notice.title}</h3>
                {notice.isNew && (
                  <span className="inline-block px-1.5 py-0.5 text-[9px] font-bold bg-red-500 text-white rounded shrink-0">
                    NEW
                  </span>
                )}
              </div>
              <p className="text-gray-300 mb-2 text-xs line-clamp-3">{notice.description}</p>
              <div className="flex justify-between items-center mt-auto pt-1.5">
                <span className="text-[10px] text-gray-400">{notice.date}</span>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/notices')}
                  className="text-white border-gray-600 hover:bg-gray-700 text-[10px] h-6 px-2"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between p-1 border-t border-gray-700/50">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevNotice}
          className="text-white hover:text-gray-300 hover:bg-gray-700 text-[10px] h-6"
        >
          <ChevronLeft className="w-3 h-3 mr-1" />
          Previous
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={nextNotice}
          className="text-white hover:text-gray-300 hover:bg-gray-700 text-[10px] h-6"
        >
          Next
          <ChevronRight className="w-3 h-3 ml-1" />
        </Button>
      </div>
    </div>
  );
};
