
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

    // Check if section already exists (case insensitive)
    const sectionExists = sections.some(
      (s) => s.toLowerCase() === section.toLowerCase()
    );

    const newImage = {
      id: Date.now(),
      url: image ? URL.createObjectURL(image) : null,
      caption: caption,
      section: section
    };

    const updatedImages = [...galleryImages, newImage];
    setGalleryImages(updatedImages);
    
    // If section doesn't exist, add it to sections
    if (!sectionExists) {
      setSections([...sections, section]);
    }
    
    localStorage.setItem('gallery', JSON.stringify(updatedImages));

    toast({
      title: "Image Added",
      description: "The image has been successfully added to the gallery.",
    });

    // Reset form
    setImage(null);
    setCaption("");
    setSection("");
  };

  const handleDeleteImage = (imageId: number) => {
    const updatedImages = galleryImages.filter(img => img.id !== imageId);
    setGalleryImages(updatedImages);
    localStorage.setItem('gallery', JSON.stringify(updatedImages));

    // Update sections if no images remain for a section
    const remainingSections = Array.from(new Set(updatedImages.map(img => img.section)));
    setSections(remainingSections);

    toast({
      title: "Image Deleted",
      description: "The image has been removed from the gallery.",
    });
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold text-sdblue mb-8">Manage Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Add New Image</h2>
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
              
              <div>
                <label className="block text-sm font-medium mb-2">Caption</label>
                <Input
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Enter image caption"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Section</label>
                <Input
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                  placeholder="Enter section name (e.g., Diwali, Christmas)"
                  required
                  list="sections"
                />
                <datalist id="sections">
                  {sections.map((s) => (
                    <option key={s} value={s} />
                  ))}
                </datalist>
              </div>
              
              <Button type="submit" className="w-full">Add Image to Gallery</Button>
            </form>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Manage Existing Images</h2>
            <Tabs defaultValue={sections[0]} className="w-full">
              <TabsList className="flex flex-wrap justify-start mb-8">
                {sections.map((section) => (
                  <TabsTrigger key={section} value={section} className="px-4 py-2">
                    {section}
                  </TabsTrigger>
                ))}
              </TabsList>

              {sections.map((section) => (
                <TabsContent key={section} value={section}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {galleryImages
                      .filter((img) => img.section === section)
                      .map((image) => (
                        <Card key={image.id} className="relative overflow-hidden group">
                          <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => handleDeleteImage(image.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                          <div className="aspect-video">
                            <img 
                              src={image.url} 
                              alt={image.caption}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-2">
                            <p className="text-sm">{image.caption}</p>
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
