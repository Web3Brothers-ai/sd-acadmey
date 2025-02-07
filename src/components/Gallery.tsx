
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

  useEffect(() => {
    // Preload next image
    const nextIndex = (currentIndex + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex].url;
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sdblue mb-12">School Gallery</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
            <img 
              src={images[currentIndex].url} 
              alt={images[currentIndex].caption}
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <p className="text-center">{images[currentIndex].caption}</p>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`aspect-square cursor-pointer transition-all duration-300 ${
                currentIndex === index ? 'ring-2 ring-sdblue' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img 
                src={image.url} 
                alt={image.caption}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            onClick={() => navigate('/gallery')}
            className="bg-sdblue hover:bg-sdblue/90"
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

