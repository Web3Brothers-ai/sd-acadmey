import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    text: "S.D. Academy has provided my child with an exceptional learning environment. The teachers are dedicated and caring.",
    author: "Sarah Johnson",
    role: "Parent"
  },
  {
    text: "The academic standards here are outstanding. I've seen remarkable growth in my students.",
    author: "Michael Brown",
    role: "Teacher"
  },
  {
    text: "I love the diverse range of activities and the supportive atmosphere at S.D. Academy.",
    author: "Emily Chen",
    role: "Student"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sdblue mb-12">What People Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <Card className="p-8 bg-white shadow-lg">
            <Quote className="w-12 h-12 text-sdgold mb-6 mx-auto" />
            <p className="text-xl text-gray-700 text-center mb-6">{testimonials[currentIndex].text}</p>
            <div className="text-center">
              <p className="font-semibold text-sdblue">{testimonials[currentIndex].author}</p>
              <p className="text-gray-500">{testimonials[currentIndex].role}</p>
            </div>
          </Card>
          <div className="flex justify-center mt-6 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};