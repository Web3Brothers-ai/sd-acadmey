import { Card, CardContent } from '@/components/ui/card';
import { Library, Monitor, Flask, Trophy, Bus } from 'lucide-react';

const facilities = [
  {
    title: "Modern Library",
    description: "Extensive collection of books and digital resources",
    icon: Library
  },
  {
    title: "Computer Lab",
    description: "State-of-the-art computers with high-speed internet",
    icon: Monitor
  },
  {
    title: "Science Lab",
    description: "Well-equipped laboratories for practical learning",
    icon: Flask
  },
  {
    title: "Sports Complex",
    description: "Multiple sports facilities and trained coaches",
    icon: Trophy
  },
  {
    title: "Transport",
    description: "Safe and comfortable transportation service",
    icon: Bus
  }
];

export const Facilities = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sdblue mb-12">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card 
              key={index}
              className="transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-sdblue rounded-full flex items-center justify-center mb-4 mx-auto">
                  <facility.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-sdblue text-center mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-center">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};