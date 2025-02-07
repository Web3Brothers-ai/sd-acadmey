
import { Navigation } from "@/components/Navigation";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  section: string;
}

export default function DetailedGallery() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [sections, setSections] = useState<string[]>([]);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('gallery') || '[]') as GalleryImage[];
    setGalleryImages(storedImages);
    
    // Get unique sections and explicitly type as string[]
    const uniqueSections = Array.from(
      new Set(storedImages.map((img: GalleryImage) => img.section))
    ) as string[];
    setSections(uniqueSections);
  }, []);

  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center text-sdblue mb-12 animate-fade-in">School Gallery</h1>
        
        <Tabs defaultValue={sections[0]} className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {sections.map((section) => (
              <TabsTrigger key={section} value={section} className="px-4 py-2">
                {section}
              </TabsTrigger>
            ))}
          </TabsList>

          {sections.map((section) => (
            <TabsContent key={section} value={section}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryImages
                  .filter((img) => img.section === section)
                  .map((image) => (
                    <Card key={image.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                      <div className="aspect-video relative">
                        <img 
                          src={image.url} 
                          alt={image.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <p className="text-sm">{image.caption}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
