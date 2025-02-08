
import { Card, CardContent } from '@/components/ui/card';
import { Library, Monitor, Microscope, Trophy, Bus } from 'lucide-react';

const facilities = [
  {
    title: "Library",
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
    icon: Microscope
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
    <section className="py-20 bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-text-shimmer bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent">
          Our Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card 
              key={index}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm bg-white/80 border-none"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-4 mx-auto transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <facility.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent">{facility.title}</h3>
                <p className="text-gray-600 text-center">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
