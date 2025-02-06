
import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

export default function AdminNotices() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
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
        <h1 className="text-3xl font-bold text-sdblue mb-8">Add New Notice</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Notice Image</label>
            <Input 
              type="file" 
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter notice title"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <Input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g., Event, Academic, Activity"
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
          
          <Button type="submit" className="w-full">Add Notice</Button>
        </form>
      </div>
    </div>
  );
}
