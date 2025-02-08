
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Bell, ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

interface Notice {
  id: number;
  title: string;
  pdfUrl: string;
  isNew?: boolean;
  createdAt?: number;
}

export const Events = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem('scrollingNotices') || '[]');
    
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
  }, []);

  const handleNoticeClick = (pdfUrl: string) => {
    if (!pdfUrl) {
      toast({
        title: "Error",
        description: "Invalid PDF URL",
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

  const handleBack = () => {
    setIsOpen(false);
  };

  if (!isMobile) {
    return (
      <div className="absolute top-0 right-0 w-[250px] h-screen bg-gradient-to-br from-[#243949] to-[#517fa4] shadow-2xl">
        <div className="bg-[#8B1D47] p-4 border-b border-white/20">
          <h2 className="text-xl font-bold text-white tracking-wide text-center">
            NOTICE & CIRCULARS
          </h2>
        </div>
        
        <div className="h-[calc(100vh-64px)] overflow-y-auto">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="relative border-b border-white/10 transition-all duration-300"
              onClick={() => handleNoticeClick(notice.pdfUrl)}
            >
              <div className="p-4 hover:bg-white/5 cursor-pointer">
                <div className="flex items-start gap-3">
                  <span className="text-white mt-1">♦</span>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">
                      {notice.title}
                      {notice.isNew && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 text-[10px] font-bold bg-red-600 text-white rounded-sm">
                          NEW
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Mobile Notice Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 bg-[#ea384c] text-white px-4 py-2 rounded-md font-bold shadow-lg hover:bg-red-600 transition-colors"
      >
        NOTICE
      </button>

      {/* Mobile Notice Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-[#1a2942] to-[#2c4562] z-50">
          <div className="flex items-center gap-4 bg-[#8B1D47] p-4 border-b border-white/20">
            <button
              onClick={handleBack}
              className="text-white hover:text-gray-200"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold text-white tracking-wide">
              NOTICE & CIRCULARS
            </h2>
          </div>
          
          <div className="h-[calc(100vh-64px)] overflow-y-auto">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="relative border-b border-white/10 transition-all duration-300"
                onClick={() => handleNoticeClick(notice.pdfUrl)}
              >
                <div className="p-4 hover:bg-white/5 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <span className="text-white mt-1">♦</span>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">
                        {notice.title}
                        {notice.isNew && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 text-[10px] font-bold bg-red-600 text-white rounded-sm">
                            NEW
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
