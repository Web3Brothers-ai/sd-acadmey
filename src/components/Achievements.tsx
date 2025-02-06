import { Trophy, Award, GraduationCap, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const achievements = [
  {
    title: "Academic Excellence",
    description: "90% students scored above 90% in board exams",
    icon: GraduationCap,
    count: "500+"
  },
  {
    title: "Sports Champions",
    description: "State level winners in multiple sports",
    icon: Trophy,
    count: "50+"
  },
  {
    title: "Competition Winners",
    description: "National & International competition achievements",
    icon: Award,
    count: "200+"
  },
  {
    title: "Star Performers",
    description: "Students excelling in extra-curricular activities",
    icon: Star,
    count: "300+"
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
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-sdblue rounded-full flex items-center justify-center mx-auto mb-4">
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