
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AdminGallery() {
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newImage = {
      id: Date.now(),
      url: image ? URL.createObjectURL(image) : null,
      caption: caption
    };

    const existingImages = JSON.parse(localStorage.getItem('gallery') || '[]');
    localStorage.setItem('gallery', JSON.stringify([...existingImages, newImage]));

    toast({
      title: "Image Added",
      description: "The image has been successfully added to the gallery.",
    });

    // Reset form
    setImage(null);
    setCaption("");
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
          
          <Button type="submit" className="w-full">Add Image to Gallery</Button>
        </form>
      </div>
    </div>
  );
}
