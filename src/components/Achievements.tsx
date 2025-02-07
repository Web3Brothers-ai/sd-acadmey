
import { Trophy, Award, GraduationCap, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const achievements = [
  {
    title: "Academic Excellence",
    description: "90% students scored above 90% in board exams",
    icon: GraduationCap,
    count: "500+",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff"
  },
  {
    title: "Sports Champions",
    description: "State level winners in multiple sports",
    icon: Trophy,
    count: "50+",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
  },
  {
    title: "Competition Winners",
    description: "National & International competition achievements",
    icon: Award,
    count: "200+",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed"
  },
  {
    title: "Star Performers",
    description: "Students excelling in extra-curricular activities",
    icon: Star,
    count: "300+",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
  }
];

export const Achievements = () => {
  const navigate = useNavigate();
  const autoplayOptions = {
    delay: 3000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);

  useEffect(() => {
    // Store achievements in localStorage for the detailed page
    localStorage.setItem('achievements', JSON.stringify(achievements));
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sdblue mb-12 animate-fade-in">Our Achievements</h2>
        <Carousel
          ref={emblaRef}
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {achievements.map((achievement, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative h-[400px] overflow-hidden rounded-lg cursor-pointer group"
                     onClick={() => navigate('/achievements')}>
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-sdblue/90 rounded-full flex items-center justify-center">
                          <achievement.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{achievement.count}</h3>
                      <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                      <p className="text-gray-200">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="text-center mt-8">
          <Button 
            onClick={() => navigate('/achievements')}
            className="bg-sdblue hover:bg-sdblue/90"
          >
            View All Achievements
          </Button>
        </div>
      </div>
    </section>
  );
};
