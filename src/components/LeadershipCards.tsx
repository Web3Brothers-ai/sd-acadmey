import { useState } from 'react';
import { Card } from '@/components/ui/card';

const leaders = [
  {
    title: 'Principal',
    name: 'Dr. Sarah Johnson',
    message: 'At S.D. Academy, we believe in nurturing not just academic excellence, but character and creativity.',
    image: '/placeholder.svg'
  },
  {
    title: 'Founder',
    name: 'Mr. David Smith',
    message: 'Our vision is to create a learning environment that inspires innovation and leadership.',
    image: '/placeholder.svg'
  },
  {
    title: 'Director',
    name: 'Mrs. Emily Brown',
    message: 'We are committed to providing world-class education while maintaining our cultural values.',
    image: '/placeholder.svg'
  }
];

export const LeadershipCards = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sdblue mb-12">Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card 
              key={index}
              className={`p-6 cursor-pointer transform transition-all duration-500 hover:shadow-xl
                ${activeCard === index ? 'scale-105' : 'scale-100'}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-sdblue mb-2">{leader.title}</h3>
              <h4 className="text-lg text-gray-600 mb-4">{leader.name}</h4>
              <p className="text-gray-500">{leader.message}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};