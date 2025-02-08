
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Notice {
  id: number;
  title: string;
  pdfUrl: string;
  isNew?: boolean;
  createdAt?: number;
}

export const Events = () => {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);
  const [notices, setNotices] = useState<Notice[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem('scrollingNotices') || '[]');
    console.log('Stored notices:', storedNotices);
    
    const updatedNotices = storedNotices.map((notice: Notice) => {
      const now = new Date().getTime();
      const twoDaysAgo = now - (2 * 24 * 60 * 60 * 1000);
      
      if (!notice.createdAt) {
        return { ...notice, isNew: false };
      }
      
      return {
        ...notice,
        isNew: notice.createdAt > twoDaysAgo
      };
    });

    setNotices(updatedNotices);
    localStorage.setItem('scrollingNotices', JSON.stringify(updatedNotices));
  }, []);

  const handleNoticeClick = (pdfUrl: string) => {
    console.log('Attempting to open PDF URL:', pdfUrl);
    
    if (!pdfUrl) {
      toast({
        title: "Error",
        description: "Invalid PDF URL",
        variant: "destructive"
      });
      return;
    }

    try {
      new URL(pdfUrl);
    } catch (error) {
      console.error('Invalid URL format:', error);
      toast({
        title: "Error",
        description: "Invalid PDF URL format",
        variant: "destructive"
      });
      return;
    }

    try {
      const newWindow = window.open(pdfUrl, '_blank');
      if (newWindow === null) {
        toast({
          title: "Error",
          description: "Popup blocked. Please allow popups for this site.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error opening PDF:', error);
      toast({
        title: "Error",
        description: "Failed to open PDF",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="absolute top-0 right-0 w-[250px] h-screen bg-gradient-to-br from-[#243949] to-[#517fa4] shadow-2xl">
      <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] border-b border-white/20">
        <Bell className="w-5 h-5 text-white animate-pulse" />
        <h2 className="text-lg font-bold text-white tracking-wide">NOTICE & CIRCULARS</h2>
      </div>
      
      <div 
        className="relative h-[calc(100vh-64px)] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className={`transform flex flex-col gap-0.5`}
          style={{
            animation: isPaused ? 'none' : 'scroll 20s linear infinite',
            willChange: 'transform'
          }}
        >
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="p-3 border-b border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer backdrop-blur-sm"
              onClick={() => handleNoticeClick(notice.pdfUrl)}
            >
              <div className="flex items-start gap-2">
                <span className="text-[#FEF7CD] mt-1">♦</span>
                <div className="flex-1">
                  <p className="text-[#E5DEFF] text-sm font-medium hover:text-white transition-colors">
                    {notice.title}
                    {notice.isNew && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 text-[10px] font-bold bg-gradient-to-r from-[#F97316] to-[#D946EF] text-white rounded-full animate-pulse">
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
