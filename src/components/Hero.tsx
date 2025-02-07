import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const backgroundImages = [
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1598618443855-232ee0f819f6?auto=format&fit=crop&w=1920&q=80',
];

export const Hero = () => {
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

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative h-screen ml-[25%] w-[75%]">
      {/* Background Images */}
      {backgroundImages.map((url, index) => (
        <div
          key={url}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={url}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={index === 0 ? "high" : "low"}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/80 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/80 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center space-y-6 px-4">
          <div
            className={`transform transition-all duration-1000 ${
              showTitle ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#F1F0FB] mb-4 tracking-wider drop-shadow-2xl">
              <span className="inline-block hover:scale-110 transition-transform duration-300 animate-text-shimmer">S.</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300 animate-text-shimmer ml-2">D.</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300 animate-text-shimmer ml-2">Academy</span>
            </h1>
          </div>

          <div
            className={`transform transition-all duration-1000 ${
              showSubtitle ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <p className="text-xl md:text-2xl text-[#E5DEFF] font-light drop-shadow-lg">
              Shaping Tomorrow's Leaders Today
            </p>
          </div>

          <div
            className={`transform transition-all duration-1000 ${
              showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <Button
              size="lg"
              className="bg-sdblue/80 hover:bg-sdblue text-white text-lg px-6 py-5 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              onClick={() => document.getElementById('notices')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
