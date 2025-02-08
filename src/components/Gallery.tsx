
import { useEffect, useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    caption: 'Modern Classroom'
  },
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    caption: 'School Library'
  },
  {
    url: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80',
    caption: 'Laboratory'
  },
  {
    url: 'https://images.unsplash.com/photo-1598618443855-232ee0f819f6?auto=format&fit=crop&w=800&q=80',
    caption: 'Sports Facilities'
  },
  {
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    caption: 'Assembly Hall'
  },
  {
    url: 'https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?auto=format&fit=crop&w=800&q=80',
    caption: 'Campus View'
  },
];

export const Gallery = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [homeImages, setHomeImages] = useState<any[]>([]);

  useEffect(() => {
    const allImages = JSON.parse(localStorage.getItem('gallery') || '[]');
    const selectedHomeImages = allImages.filter((img: any) => img.showOnHome);
    
    // If no images are selected for home, use default images
    setHomeImages(selectedHomeImages.length > 0 ? selectedHomeImages : images);
  }, []);

  useEffect(() => {
    // Preload next image
    if (homeImages.length > 0) {
      const nextIndex = (currentIndex + 1) % homeImages.length;
      const img = new Image();
      img.src = homeImages[nextIndex].url;
    }
  }, [currentIndex, homeImages]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % homeImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + homeImages.length) % homeImages.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0EA5E9]/10 to-[#8B5CF6]/10" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-text-shimmer bg-gradient-to-r from-[#0EA5E9] via-[#8B5CF6] to-[#0EA5E9] bg-clip-text text-transparent">
          School Gallery
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-[16/9] relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={homeImages[currentIndex]?.url} 
              alt={homeImages[currentIndex]?.caption}
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm text-white p-6">
              <p className="text-center text-lg font-medium">{homeImages[currentIndex]?.caption}</p>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-gradient-to-r hover:from-[#0EA5E9] hover:to-[#8B5CF6] hover:text-white rounded-full transition-all duration-300"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-gradient-to-r hover:from-[#0EA5E9] hover:to-[#8B5CF6] hover:text-white rounded-full transition-all duration-300"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8">
          {homeImages.map((image, index) => (
            <div 
              key={index}
              className={`aspect-square cursor-pointer overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105 ${
                currentIndex === index ? 'ring-2 ring-[#8B5CF6]' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img 
                src={image.url} 
                alt={image.caption}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            onClick={() => navigate('/gallery')}
            className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#0EA5E9] text-white font-semibold py-2 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View All Photos
          </Button>
        </div>

        <Dialog 
          open={!!selectedImage} 
          onOpenChange={() => setSelectedImage(null)}
        >
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Selected gallery image"
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          )}
        </Dialog>
      </div>
    </section>
  );
};
