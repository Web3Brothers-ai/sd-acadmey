
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function AdminTestimonials() {
  const [video, setVideo] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [type, setType] = useState<"parent" | "student">("parent");
  const [studentClass, setStudentClass] = useState("");
  const { toast } = useToast();

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTestimonial = {
      id: Date.now(),
      url: video ? URL.createObjectURL(video) : null,
      type,
      name,
      ...(type === "student" && { class: studentClass })
    };

    const existingTestimonials = JSON.parse(localStorage.getItem('videoTestimonials') || '[]');
    localStorage.setItem('videoTestimonials', JSON.stringify([...existingTestimonials, newTestimonial]));

    toast({
      title: "Video Testimonial Added",
      description: "The video testimonial has been successfully added.",
    });

    setVideo(null);
    setName("");
    setType("parent");
    setStudentClass("");
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold text-sdblue mb-8">Manage Video Testimonials</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Video</label>
            <Input 
              type="file" 
              accept="video/*"
              onChange={handleVideoChange}
              className="w-full"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter person's name"
              required
            />
          </div>
          
          <div className="space-y-3">
            <label className="block text-sm font-medium">Type</label>
            <RadioGroup value={type} onValueChange={(value: "parent" | "student") => setType(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="parent" id="parent" />
                <Label htmlFor="parent">Parent</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student">Student</Label>
              </div>
            </RadioGroup>
          </div>

          {type === "student" && (
            <div>
              <label className="block text-sm font-medium mb-2">Class</label>
              <Select value={studentClass} onValueChange={setStudentClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(12)].map((_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      Class {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          <Button type="submit" className="w-full">Add Video Testimonial</Button>
        </form>
      </div>
    </div>
  );
}
