
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const leaders = [
  {
    title: 'Founder',
    name: 'Dr. HN Singh',
    message: 'Our vision is to create a learning environment that inspires innovation and leadership.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80'
  },
  {
    title: 'Principal',
    name: 'Mrs. Shruti Singh',
    message: 'At S.D. Academy, we believe in nurturing not just academic excellence, but character and creativity.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  {
    title: 'Director',
    name: 'Mr. S Rajesh Singh',
    message: 'We are committed to providing world-class education while maintaining our cultural values.',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=300&q=80'
  },
  {
    title: 'Manager',
    name: 'Mr. Rajesh Singh',
    message: 'Ensuring smooth operations and maintaining high standards in all aspects of our institution.',
    image: 'https://images.unsplash.com/photo-1542190891-2093d38760f2?auto=format&fit=crop&w=300&q=80'
  }
];

export const LeadershipCards = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-[#E5DEFF] to-[#FDE1D3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Our Leadership
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <Card 
              key={index}
              className={`overflow-hidden transform transition-all duration-500 hover:shadow-2xl
                ${activeCard === index ? 'scale-105' : 'scale-100'}
                bg-gradient-to-br from-white to-[#F1F0FB] backdrop-blur-sm`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="p-6">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-purple-500 shadow-lg transform transition-transform duration-500 hover:rotate-6">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                    />
                  </div>
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                    {leader.title}
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-700">{leader.name}</h4>
                  <p className="text-gray-600 leading-relaxed">{leader.message}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
