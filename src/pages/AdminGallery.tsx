
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";

interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  section: string;
}

export default function AdminGallery() {
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [section, setSection] = useState("");
  const [sections, setSections] = useState<string[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const { toast } = useToast();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const existingImages = JSON.parse(localStorage.getItem('gallery') || '[]') as GalleryImage[];
    setGalleryImages(existingImages);
    const uniqueSections = Array.from(new Set(existingImages.map((img: GalleryImage) => img.section)));
    setSections(uniqueSections as string[]);
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sectionExists = sections.some(s => s.toLowerCase() === section.toLowerCase());
    
    const newImage = {
      id: Date.now(),
      url: image ? URL.createObjectURL(image) : null,
      caption: caption,
      section: section
    };

    const updatedImages = [...galleryImages, newImage];
    setGalleryImages(updatedImages);
    
    if (!sectionExists) {
      setSections([...sections, section]);
    }
    
    localStorage.setItem('gallery', JSON.stringify(updatedImages));

    toast({
      title: "Image Added",
      description: "The image has been successfully added to the gallery.",
    });

    setImage(null);
    setCaption("");
    setSection("");
  };

  const handleDeleteImage = (imageId: number) => {
    const updatedImages = galleryImages.filter(img => img.id !== imageId);
    setGalleryImages(updatedImages);
    localStorage.setItem('gallery', JSON.stringify(updatedImages));

    const remainingSections = Array.from(new Set(updatedImages.map(img => img.section)));
    setSections(remainingSections);

    toast({
      title: "Image Deleted",
      description: "The image has been removed from the gallery.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white perspective-1000">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold text-sdblue mb-8 animate-fade-in">
          Manage Gallery
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50">
              <h2 className="text-xl font-semibold mb-4 text-sdblue">Add New Image</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Image</label>
                  <Input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full"
                    required
                  />
                  <Alert className="mt-2">
                    <AlertDescription>
                      Please upload images in 16:9 aspect ratio for optimal display
                    </AlertDescription>
                  </Alert>
                </div>
                
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <label className="block text-sm font-medium mb-2">Caption</label>
                  <Input
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Enter image caption"
                    required
                    className="hover:border-sdblue transition-colors duration-200"
                  />
                </div>

                <div className="transform hover:scale-105 transition-transform duration-200">
                  <label className="block text-sm font-medium mb-2">Section</label>
                  <Input
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    placeholder="Enter section name (e.g., Diwali, Christmas)"
                    required
                    className="hover:border-sdblue transition-colors duration-200"
                    list="sections"
                  />
                  <datalist id="sections">
                    {sections.map((s) => (
                      <option key={s} value={s} />
                    ))}
                  </datalist>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-sdblue hover:bg-sdblue/90 transform hover:scale-105 transition-all duration-300"
                >
                  Add Image to Gallery
                </Button>
              </form>
            </Card>
          </div>

          <div className="perspective-1000">
            <h2 className="text-xl font-semibold mb-4 text-sdblue">Manage Existing Images</h2>
            <Tabs defaultValue={sections[0]} className="w-full">
              <TabsList className="flex flex-wrap justify-start mb-8 bg-gradient-to-r from-gray-50 to-white p-1 rounded-lg">
                {sections.map((section) => (
                  <TabsTrigger 
                    key={section} 
                    value={section} 
                    className="px-4 py-2 transform hover:scale-105 transition-all duration-300"
                  >
                    {section}
                  </TabsTrigger>
                ))}
              </TabsList>

              {sections.map((section) => (
                <TabsContent key={section} value={section}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {galleryImages
                      .filter((img) => img.section === section)
                      .map((image) => (
                        <Card 
                          key={image.id} 
                          className={`
                            relative overflow-hidden transform transition-all duration-500
                            hover:scale-105 hover:shadow-2xl
                            ${hoveredCard === image.id ? 'rotate-y-180' : ''}
                          `}
                          onMouseEnter={() => setHoveredCard(image.id)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity transform hover:scale-110"
                            onClick={() => handleDeleteImage(image.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                          <div className="aspect-video">
                            <img 
                              src={image.url} 
                              alt={image.caption}
                              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                          <div className="p-4 bg-gradient-to-b from-transparent to-gray-50">
                            <p className="text-sm font-medium text-sdblue">{image.caption}</p>
                          </div>
                        </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
