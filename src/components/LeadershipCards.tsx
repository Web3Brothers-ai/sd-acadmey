
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const leaders = [
  {
    title: 'Principal',
    name: 'Mrs. Shruti Singh',
    message: 'At S.D. Academy, we believe in nurturing not just academic excellence, but character and creativity.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
  },
  {
    title: 'Founder',
    name: 'Dr. HN Singh',
    message: 'Our vision is to create a learning environment that inspires innovation and leadership.',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952'
  },
  {
    title: 'Director',
    name: 'Mr. S Rajesh Singh',
    message: 'We are committed to providing world-class education while maintaining our cultural values.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
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
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-sdblue shadow-lg">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </div>
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-sdblue">{leader.title}</h3>
                <h4 className="text-xl font-semibold text-gray-700">{leader.name}</h4>
                <p className="text-gray-600 leading-relaxed">{leader.message}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
