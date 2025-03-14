
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Events } from "./Events";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const backgroundImages = [
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1598618443855-232ee0f819f6?auto=format&fit=crop&w=1920&q=80',
];

export const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Preload images
    backgroundImages.forEach((url) => {
      const img = new Image();
      img.src = url;
    });

    // Show elements with animation
    setTimeout(() => setShowTitle(true), 500);
    setTimeout(() => setShowSubtitle(true), 1500);
    setTimeout(() => setShowButton(true), 2000);

    // Auto slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {backgroundImages.map((url, index) => (
        <div
          key={url}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={url}
            alt={`School Environment ${index + 1}`}
            className="w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-linear"
            style={{
              transform: index === currentImageIndex ? 'scale(1.1)' : 'scale(1)',
            }}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center">
        <div className="text-center space-y-6 px-4 max-w-4xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              showTitle ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wider drop-shadow-2xl">
              <span className="inline-block hover:scale-110 transition-transform duration-300 animate-text-shimmer bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent">S.</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300 animate-text-shimmer bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent ml-2">D.</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300 animate-text-shimmer bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent ml-2">Academy</span>
            </h1>
          </div>

          <div
            className={`transform transition-all duration-1000 ${
              showSubtitle ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <p className="text-2xl md:text-3xl text-[#FBBF24] font-light drop-shadow-lg">
              Shaping Tomorrow's Leaders Today
            </p>
          </div>

          <div
            className={`transform transition-all duration-1000 ${
              showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#0EA5E9] text-white text-xl px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                onClick={() => navigate('/school-details')}
              >
                Explore More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#FBBF24] text-[#FBBF24] hover:bg-[#FBBF24]/10 hover:text-[#FCD34D] text-xl px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                onClick={() => navigate('/admission')}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Notice Section */}
      <div className="absolute top-0 right-0 h-full">
        <Events />
      </div>
    </div>
  );
};

