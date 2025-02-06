
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80)', 
          filter: 'brightness(0.6)'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            S.D. Academy
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 drop-shadow-md">
            Tender Care and Excellence in Education
          </p>
          <Button 
            size="lg"
            className="bg-sdblue hover:bg-sdblue/90 text-white"
            onClick={() => document.getElementById('notices')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover More
          </Button>
        </div>
      </div>
    </div>
  );
};
