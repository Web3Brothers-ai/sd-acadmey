
import { useState } from 'react';

interface VideoTestimonial {
  id: number;
  url: string;
  type: 'parent' | 'teacher';
  name: string;
}

export const VideoTestimonials = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [testimonials, setTestimonials] = useState<VideoTestimonial[]>(() => {
    return JSON.parse(localStorage.getItem('videoTestimonials') || '[]');
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sdblue mb-12">Video Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="aspect-[9/16] relative rounded-lg overflow-hidden shadow-lg"
              onMouseEnter={() => setHoveredVideo(testimonial.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <video
                src={testimonial.url}
                className="w-full h-full object-cover"
                loop
                playsInline
                autoPlay={hoveredVideo === testimonial.id}
                muted={hoveredVideo !== testimonial.id}
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm capitalize">{testimonial.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
