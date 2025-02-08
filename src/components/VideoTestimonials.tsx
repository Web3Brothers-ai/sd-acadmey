
import { useState } from 'react';

interface VideoTestimonial {
  id: number;
  youtubeUrl: string;
  type: 'parent' | 'student';
  name: string;
  class?: string;
}

export const VideoTestimonials = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  
  // Get testimonials from localStorage or use demo data
  const storedTestimonials = localStorage.getItem('videoTestimonials');
  const testimonials: VideoTestimonial[] = storedTestimonials 
    ? JSON.parse(storedTestimonials)
    : [
        {
          id: 1,
          youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          type: "parent",
          name: "Jane Smith"
        },
        {
          id: 2,
          youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          type: "student",
          name: "Tom Brown",
          class: "10"
        }
      ];

  const handleMouseEnter = (id: number) => {
    setHoveredVideo(id);
  };

  const handleMouseLeave = (id: number) => {
    setHoveredVideo(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sdblue mb-12">Video Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="aspect-[16/9] relative rounded-lg overflow-hidden shadow-lg"
              onMouseEnter={() => handleMouseEnter(testimonial.id)}
              onMouseLeave={() => handleMouseLeave(testimonial.id)}
            >
              <iframe
                src={testimonial.youtubeUrl}
                title={`${testimonial.name}'s testimonial`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
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
