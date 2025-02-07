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
    // Demo notices matching the image design
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
    <div className="fixed right-4 top-24 z-40 max-w-md w-full transform transition-transform duration-300 hover:translate-x-0 translate-x-[calc(100%-3rem)] md:w-[400px] lg:w-[450px]">
      <div className="bg-[#1A1F2C]/95 backdrop-blur-md shadow-2xl rounded-l-2xl border-l border-t border-b border-gray-700 overflow-hidden">
        <div className="flex items-center gap-2 p-3 bg-[#7E69AB] rounded-tl-2xl">
          <h2 className="text-xl font-bold text-white">NOTICE & CIRCULARS</h2>
        </div>
        
        <div className="relative h-[400px] md:h-[450px] overflow-hidden">
          {notices.map((notice, index) => (
            <div
              key={notice.id}
              className={`absolute inset-0 p-3 transition-all duration-500 ease-in-out ${
                index === currentNoticeIndex 
                  ? 'translate-x-0 opacity-100' 
                  : index < currentNoticeIndex 
                    ? '-translate-x-full opacity-0' 
                    : 'translate-x-full opacity-0'
              }`}
            >
              <div className="bg-[#1A1F2C]/50 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-700 h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-white pr-2">{notice.title}</h3>
                  {notice.isNew && (
                    <span className="inline-block px-2 py-0.5 text-xs font-bold bg-red-500 text-white rounded shrink-0">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-3 text-sm">{notice.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs text-gray-400">{notice.date}</span>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/notices')}
                    className="text-white border-gray-600 hover:bg-gray-700 text-xs"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between p-2 border-t border-gray-700">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevNotice}
            className="text-white hover:text-gray-300 hover:bg-gray-700 text-xs"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextNotice}
            className="text-white hover:text-gray-300 hover:bg-gray-700 text-xs"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};