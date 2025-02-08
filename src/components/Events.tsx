
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  pdfUrl: string;
  isNew?: boolean;
  createdAt?: number;  // Added this property to match the interface
}

export const Events = () => {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem('scrollingNotices') || '[]');
    
    // Check and update isNew status based on 2-day threshold
    const updatedNotices = storedNotices.map((notice: Notice) => {
      const now = new Date().getTime();
      const twoDaysAgo = now - (2 * 24 * 60 * 60 * 1000); // 2 days in milliseconds
      
      // If notice has no creation time, consider it old
      if (!notice.createdAt) {
        return { ...notice, isNew: false };
      }
      
      // Update isNew based on whether it's within 2 days
      return {
        ...notice,
        isNew: notice.createdAt > twoDaysAgo
      };
    });

    setNotices(updatedNotices);
    localStorage.setItem('scrollingNotices', JSON.stringify(updatedNotices));
  }, []);

  const handleNoticeClick = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="absolute top-0 right-0 w-[250px] h-screen bg-[#1A1F2C] shadow-2xl">
      <div className="flex items-center gap-2 p-4 bg-[#7E69AB] border-b border-white/10">
        <Bell className="w-5 h-5 text-white animate-pulse" />
        <h2 className="text-lg font-bold text-white tracking-wide">NOTICE & CIRCULARS</h2>
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
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="p-3 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
              onClick={() => handleNoticeClick(notice.pdfUrl)}
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
