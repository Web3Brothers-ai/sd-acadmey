
import { Navigation } from "@/components/Navigation";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  count: string;
}

export default function DetailedAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    const storedAchievements = JSON.parse(localStorage.getItem('achievements') || '[]');
    setAchievements(storedAchievements);
  }, []);

  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center text-sdblue mb-12 animate-fade-in">Our Achievements</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{achievement.count}</h3>
                  <h4 className="text-lg font-semibold">{achievement.title}</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
