
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AdminGallery() {
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [section, setSection] = useState("");
  const [sections, setSections] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const existingImages = JSON.parse(localStorage.getItem('gallery') || '[]');
    const uniqueSections = Array.from(new Set(existingImages.map((img: any) => img.section)));
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

    const existingImages = JSON.parse(localStorage.getItem('gallery') || '[]');
    
    // If section doesn't exist, add it to sections
    if (!sectionExists) {
      setSections([...sections, section]);
    }
    
    localStorage.setItem('gallery', JSON.stringify([...existingImages, newImage]));

    toast({
      title: "Image Added",
      description: "The image has been successfully added to the gallery.",
    });

    // Reset form
    setImage(null);
    setCaption("");
    setSection("");
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold text-sdblue mb-8">Manage Gallery</h1>
        
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
    </div>
  );
}
