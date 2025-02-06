
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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-sdblue mb-8">Notices & Announcements</h1>
        
        <div className="grid gap-6">
          {notices.map((notice) => (
            <div 
              key={notice.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              {notice.imageUrl && (
                <div className="mb-4">
                  <img 
                    src={notice.imageUrl} 
                    alt={notice.title}
                    className={getImageClassName(notice.aspectRatio)}
                  />
                </div>
              )}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-sdblue">{notice.title}</h2>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {notice.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{notice.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="font-semibold mr-2">Date:</span>
                  {notice.date}
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-semibold mr-2">Time:</span>
                  {notice.time}
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-semibold mr-2">Venue:</span>
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
