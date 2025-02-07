
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  isNew?: boolean;
}

export const Events = () => {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);

  const notices: Notice[] = [
    {
      id: 1,
      title: "Result declared of admission test held on 5th January 2025",
      isNew: true
    },
    {
      id: 2,
      title: "Registrations Open For Class- NUR to VI, IX & XI (Science & Commerce), For 2025-26 ,Admission Test Date- 09th Feb 2025 (Sunday)",
      isNew: true
    },
    {
      id: 3,
      title: "CBSE EXAM DATE SHEET 2024-25 OF CLASS XII",
      isNew: true
    },
    {
      id: 4,
      title: "CBSE EXAM DATE SHEET 2024-25 OF CLASS X",
      isNew: true
    },
    {
      id: 5,
      title: "Change of School Timings",
      isNew: true
    },
    {
      id: 6,
      title: "COMMENCING OF NEW ACADEMIC SESSION : 2024-25",
      isNew: true
    },
    {
      id: 7,
      title: "CBSE Advisory to the Schools, Parents and Students",
      isNew: true
    }
  ];

  // Double the notices array to ensure smooth continuous scroll
  const allNotices = [...notices, ...notices];

  return (
    <div className="absolute top-0 right-0 w-[300px] h-screen bg-[#1A1F2C] shadow-2xl">
      <div className="flex items-center gap-2 p-4 bg-[#7E69AB] border-b border-white/10">
        <Bell className="w-5 h-5 text-white animate-pulse" />
        <h2 className="text-xl font-bold text-white tracking-wide">NOTICE & CIRCULARS</h2>
      </div>
      
      <div 
        className="relative h-[calc(100vh-64px)] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className={`transform transition-all duration-500 flex flex-col gap-0.5 ${
            isPaused ? 'animate-none' : 'animate-scroll'
          }`}
          style={{
            animation: isPaused ? 'none' : 'scroll 30s linear infinite'
          }}
        >
          {allNotices.map((notice) => (
            <div
              key={notice.id}
              className="p-4 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
              onClick={() => navigate('/notices')}
            >
              <div className="flex items-start gap-2">
                <span className="text-white mt-1">♦</span>
                <div className="flex-1">
                  <p className="text-white text-sm">
                    {notice.title}
                    {notice.isNew && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 text-[10px] font-bold bg-[#F97316] text-white rounded-full">
                        NEW
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};
