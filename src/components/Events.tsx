
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar, Trophy, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const events = [
  {
    title: "Annual Sports Day",
    date: "March 15, 2024",
    description: "Join us for a day of athletic excellence and team spirit.",
    icon: Trophy,
    category: "Event"
  },
  {
    title: "Science Fair",
    date: "April 5, 2024",
    description: "Showcasing innovative projects from our brilliant students.",
    icon: Bell,
    category: "Academic"
  },
  {
    title: "Parent-Teacher Meeting",
    date: "April 20, 2024",
    description: "Discussing student progress and academic achievements.",
    icon: Calendar,
    category: "Meeting"
  }
];

export const Events = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white" id="notices">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-sdblue">Events & Announcements</h2>
          <Button 
            variant="outline"
            onClick={() => navigate('/notices')}
            className="text-sdblue hover:bg-sdblue/10"
          >
            View All Notices
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className="transform transition-all hover:scale-105 cursor-pointer shadow-md hover:shadow-xl"
              onClick={() => navigate('/notices')}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-sdblue rounded-full flex items-center justify-center mb-4">
                  <event.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-sdblue">{event.title}</CardTitle>
                <p className="text-gray-500">{event.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {event.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
