import { useRef, useEffect } from 'react';

const teachers = [
  { 
    name: 'John Doe', 
    subject: 'Mathematics', 
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80' 
  },
  { 
    name: 'Jane Smith', 
    subject: 'Science', 
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80' 
  },
  { 
    name: 'Mike Johnson', 
    subject: 'English', 
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80' 
  },
  { 
    name: 'Sarah Wilson', 
    subject: 'History', 
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80' 
  },
  { 
    name: 'Robert Brown', 
    subject: 'Physics', 
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80' 
  },
  { 
    name: 'Emma Davis', 
    subject: 'Chemistry', 
    image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80' 
  },
];

export const TeachersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-sdblue mb-12">Our Teachers</h2>
      <div 
        ref={scrollRef}
        className="flex space-x-8 overflow-x-hidden"
      >
        {[...teachers, ...teachers].map((teacher, index) => (
          <div 
            key={index}
            className="flex-none w-64 p-4"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <img 
                src={teacher.image} 
                alt={teacher.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-sdblue text-center">{teacher.name}</h3>
              <p className="text-gray-500 text-center">{teacher.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
