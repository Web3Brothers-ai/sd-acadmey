
import { Navigation } from "@/components/Navigation";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  section: string;
}

const demoImages: GalleryImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    caption: "School Diwali Celebration",
    section: "Diwali"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    caption: "Diwali Lights",
    section: "Diwali"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    caption: "Christmas Celebration",
    section: "Christmas"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    caption: "Eid Celebration",
    section: "Eid"
  }
];

export default function DetailedGallery() {
  const navigate = useNavigate();
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [sections, setSections] = useState<string[]>([]);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('gallery') || '[]') as GalleryImage[];
    const combinedImages = storedImages.length > 0 ? storedImages : demoImages;
    setGalleryImages(combinedImages);
    
    const uniqueSections = Array.from(
      new Set(combinedImages.map((img) => img.section))
    );
    setSections(uniqueSections);
  }, []);

  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-4xl font-bold text-sdblue">School Gallery</h1>
        </div>
        
        {sections.map((section) => (
          <div 
            key={section}
            className="mb-16 rounded-lg p-8 bg-gradient-to-r from-white to-gray-50 shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-8 text-sdblue border-b pb-2">
              {section} Celebrations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages
                .filter((img) => img.section === section)
                .map((image) => (
                  <Card 
                    key={image.id} 
                    className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                  >
                    <div className="aspect-video relative">
                      <img 
                        src={image.url} 
                        alt={image.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <p className="text-sm font-medium">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
