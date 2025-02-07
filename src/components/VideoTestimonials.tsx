
import { useState } from 'react';

interface VideoTestimonial {
  id: number;
  url: string;
  type: 'parent' | 'student';
  name: string;
  class?: string;
}

export const VideoTestimonials = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const demoTestimonials: VideoTestimonial[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      type: "parent",
      name: "Jane Smith"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      type: "student",
      name: "Tom Brown",
      class: "10"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      type: "parent",
      name: "Robert Wilson"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demoTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="aspect-[9/16] relative rounded-lg overflow-hidden shadow-lg"
              onMouseEnter={() => handleMouseEnter(testimonial.id)}
              onMouseLeave={() => handleMouseLeave(testimonial.id)}
            >
              <img
                src={testimonial.url}
                alt={`${testimonial.name}'s testimonial`}
                className="w-full h-full object-cover"
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
