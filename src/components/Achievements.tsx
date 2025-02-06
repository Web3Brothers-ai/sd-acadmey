
import { Trophy, Award, GraduationCap, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sdblue mb-12 animate-fade-in">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="opacity-0 translate-y-10 transition-all duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
              data-aos="fade-up"
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6 text-center relative">
                  <div className="w-16 h-16 bg-sdblue rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 relative z-10 border-4 border-white">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-sdblue mb-2">{achievement.count}</h3>
                  <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
