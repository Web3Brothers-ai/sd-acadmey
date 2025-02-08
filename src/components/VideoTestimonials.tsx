
import { useState, useEffect } from 'react';

interface VideoTestimonial {
  id: number;
  youtubeUrl: string;
  type: 'parent' | 'student';
  name: string;
  class?: string;
}

const sampleTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    youtubeUrl: "https://www.youtube.com/embed/YE7VzlLtp-4",
    type: "parent",
    name: "Priya Sharma"
  },
  {
    id: 2,
    youtubeUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    type: "student",
    name: "Rahul Kumar",
    class: "10"
  },
  {
    id: 3,
    youtubeUrl: "https://www.youtube.com/embed/YE7VzlLtp-4",
    type: "parent",
    name: "Amit Patel"
  }
];

export const VideoTestimonials = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [testimonials, setTestimonials] = useState<VideoTestimonial[]>([]);
  
  useEffect(() => {
    // Get testimonials from localStorage or use sample data
    const storedTestimonials = localStorage.getItem('videoTestimonials');
    if (!storedTestimonials) {
      localStorage.setItem('videoTestimonials', JSON.stringify(sampleTestimonials));
      setTestimonials(sampleTestimonials);
    } else {
      setTestimonials(JSON.parse(storedTestimonials));
    }
  }, []);

  const handleMouseEnter = (id: number) => {
    setHoveredVideo(id);
  };

  const handleMouseLeave = () => {
    setHoveredVideo(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sdblue mb-12 animate-text-shimmer">Video Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="group aspect-[16/9] relative rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onMouseEnter={() => handleMouseEnter(testimonial.id)}
              onMouseLeave={handleMouseLeave}
            >
              <iframe
                src={testimonial.youtubeUrl}
                title={`${testimonial.name}'s testimonial`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm capitalize">
                  {testimonial.type}
                  {testimonial.class && ` - Class ${testimonial.class}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
