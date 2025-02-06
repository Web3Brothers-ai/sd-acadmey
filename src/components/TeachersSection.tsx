
import { useRef, useEffect, useState } from 'react';

interface Teacher {
  id: number;
  name: string;
  subject: string;
  degree: string;
  image: string;
}

export const TeachersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    const storedTeachers = JSON.parse(localStorage.getItem('teachers') || '[]');
    setTeachers(storedTeachers);
  }, []);

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
        {teachers.length > 0 ? (
          [...teachers, ...teachers].map((teacher, index) => (
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
                <p className="text-gray-400 text-sm text-center mt-1">{teacher.degree}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full text-center text-gray-500">No teachers available</div>
        )}
      </div>
    </section>
  );
};
