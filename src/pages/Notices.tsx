
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

interface Notice {
  id: number;
  title: string;
  date: string;
  description: string;
  time: string;
  venue: string;
  category: string;
  imageUrl?: string | null;
  aspectRatio?: string;
}

const Notices = () => {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem('notices') || '[]');
    setNotices(storedNotices);
  }, []);

  const getImageClassName = (aspectRatio?: string) => {
    const baseClasses = "w-full object-cover rounded-lg";
    switch (aspectRatio) {
      case '16:9':
        return `${baseClasses} h-[calc(9/16*100%)]`;
      case '4:3':
        return `${baseClasses} h-[calc(3/4*100%)]`;
      case '1:1':
        return `${baseClasses} aspect-square`;
      case '9:16':
        return `${baseClasses} h-[calc(16/9*100%)]`;
      case '21:9':
        return `${baseClasses} h-[calc(9/21*100%)]`;
      default:
        return `${baseClasses} h-64`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3]">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8 text-center animate-text-shimmer bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6]">
          Notices & Announcements
        </h1>
        
        <div className="grid gap-6">
          {notices.map((notice) => (
            <div 
              key={notice.id}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-purple-100 hover:border-purple-200 transform hover:-translate-y-1"
            >
              {notice.imageUrl && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={notice.imageUrl} 
                    alt={notice.title}
                    className={`${getImageClassName(notice.aspectRatio)} hover:scale-105 transition-transform duration-500`}
                  />
                </div>
              )}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent">
                  {notice.title}
                </h2>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#F97316] to-[#FBBF24] text-white rounded-full text-sm font-medium shadow-sm">
                  {notice.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{notice.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-purple-50/50 p-4 rounded-lg">
                <div className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2 text-purple-600">Date:</span>
                  {notice.date}
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2 text-purple-600">Time:</span>
                  {notice.time}
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2 text-purple-600">Venue:</span>
                  {notice.venue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notices;
