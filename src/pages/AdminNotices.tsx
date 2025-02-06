
import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AdminNotices() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('event');
  const [image, setImage] = useState<File | null>(null);
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const getAspectRatioDescription = () => {
    switch (aspectRatio) {
      case '16:9':
        return 'Landscape (1920x1080)';
      case '4:3':
        return 'Standard (1600x1200)';
      case '1:1':
        return 'Square (1000x1000)';
      case '9:16':
        return 'Portrait (1080x1920)';
      case '21:9':
        return 'Ultra-wide (2560x1080)';
      default:
        return '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newNotice = {
      id: Date.now(),
      title,
      date,
      description,
      time,
      venue,
      category,
      imageUrl: image ? URL.createObjectURL(image) : null,
      aspectRatio
    };

    const existingNotices = JSON.parse(localStorage.getItem('notices') || '[]');
    localStorage.setItem('notices', JSON.stringify([...existingNotices, newNotice]));

    toast({
      title: "Notice Added",
      description: "The notice has been successfully added.",
    });
    navigate('/notices');
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold text-sdblue mb-8">Add New Notice/Event</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Type</label>
            <Select defaultValue={category} onValueChange={(value) => setCategory(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="event">Event</SelectItem>
                <SelectItem value="function">Function</SelectItem>
                <SelectItem value="holiday">Holiday</SelectItem>
                <SelectItem value="notice">Notice</SelectItem>
                <SelectItem value="activity">Activity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Image Aspect Ratio</label>
              <Select defaultValue={aspectRatio} onValueChange={(value) => setAspectRatio(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select aspect ratio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="16:9">16:9 - Landscape</SelectItem>
                  <SelectItem value="4:3">4:3 - Standard</SelectItem>
                  <SelectItem value="1:1">1:1 - Square</SelectItem>
                  <SelectItem value="9:16">9:16 - Portrait</SelectItem>
                  <SelectItem value="21:9">21:9 - Ultra-wide</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Cover Image</label>
              <Input 
                type="file" 
                accept="image/*"
                onChange={handleImageChange}
                className="w-full"
              />
              <Alert className="mt-2">
                <AlertDescription>
                  Please upload an image with {getAspectRatioDescription()} aspect ratio for the best display
                </AlertDescription>
              </Alert>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Time</label>
              <Input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="e.g., 2:00 PM onwards"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Venue</label>
            <Input
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              placeholder="Enter venue"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter detailed description"
              className="h-32"
              required
            />
          </div>
          
          <Button type="submit" className="w-full">Add {category.charAt(0).toUpperCase() + category.slice(1)}</Button>
        </form>
      </div>
    </div>
  );
}
