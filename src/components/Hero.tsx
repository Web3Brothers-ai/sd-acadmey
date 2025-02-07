
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Stagger the animations
    setTimeout(() => setShowTitle(true), 500);
    setTimeout(() => setShowSubtitle(true), 1500);
    setTimeout(() => setShowButton(true), 2000);
  }, []);

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000 hover:scale-105"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80)', 
          filter: 'brightness(0.6)'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 perspective-1000">
          <div className={`transform transition-all duration-1000 ${showTitle ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
              <span className="inline-block transform hover:scale-110 transition-transform duration-300">S.</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 ml-2">D.</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 ml-2">Academy</span>
            </h1>
          </div>
          
          <div className={`transform transition-all duration-1000 ${showSubtitle ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <p className="text-2xl md:text-3xl text-white mb-8 drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
              Tender Care and Excellence in Education
            </p>
          </div>

          <div className={`transform transition-all duration-1000 ${showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <Button 
              size="lg"
              className="relative bg-sdblue hover:bg-sdblue/90 text-white overflow-hidden group"
              onClick={() => document.getElementById('notices')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Discover More</span>
              <div className="absolute inset-0 border-2 border-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
