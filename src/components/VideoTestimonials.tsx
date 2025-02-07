
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
  const [testimonials, setTestimonials] = useState<VideoTestimonial[]>(() => {
    return JSON.parse(localStorage.getItem('videoTestimonials') || '[]');
  });

  const handleMouseEnter = (id: number) => {
    setHoveredVideo(id);
    const videoElement = document.getElementById(`video-${id}`) as HTMLVideoElement;
    if (videoElement) {
      videoElement.play();
      videoElement.muted = false;
    }
  };

  const handleMouseLeave = (id: number) => {
    setHoveredVideo(null);
    const videoElement = document.getElementById(`video-${id}`) as HTMLVideoElement;
    if (videoElement) {
      videoElement.pause();
      videoElement.muted = true;
      videoElement.currentTime = 0;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sdblue mb-12">Video Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="aspect-[9/16] relative rounded-lg overflow-hidden shadow-lg"
              onMouseEnter={() => handleMouseEnter(testimonial.id)}
              onMouseLeave={() => handleMouseLeave(testimonial.id)}
            >
              <video
                id={`video-${testimonial.id}`}
                src={testimonial.url}
                className="w-full h-full object-cover"
                loop
                playsInline
                muted
              >
                Your browser does not support the video tag.
              </video>
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
