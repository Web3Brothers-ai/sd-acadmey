import { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';

const images = [
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80', // Modern classroom
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80', // School library
  'https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80', // Lab
  'https://images.unsplash.com/photo-1598618443855-232ee0f819f6?q=80', // Sports
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80', // Assembly hall
  'https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?q=80', // Campus
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sdblue mb-12">School Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-square cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
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
            />
          )}
        </Dialog>
      </div>
    </section>
  );
};
