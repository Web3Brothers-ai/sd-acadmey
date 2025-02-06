
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const notices = [
  {
    id: 1,
    title: "Annual Day Celebration",
    date: "March 20, 2024",
    description: "Join us for our Annual Day celebration featuring cultural performances, awards ceremony, and special guest appearances. All parents are cordially invited to attend this grand event.",
    time: "4:00 PM onwards",
    venue: "School Auditorium",
    category: "Event"
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    date: "March 25, 2024",
    description: "The parent-teacher meeting for classes VI to XII will be held to discuss academic progress and address any concerns. Please ensure your attendance.",
    time: "9:00 AM - 2:00 PM",
    venue: "Respective Classrooms",
    category: "Academic"
  },
  {
    id: 3,
    title: "Summer Camp Registration",
    date: "April 1, 2024",
    description: "Registration for our annual summer camp is now open. Activities include sports, arts & crafts, music, dance, and educational workshops. Limited seats available.",
    time: "Registration deadline: March 31",
    venue: "School Office",
    category: "Activity"
  }
];

const Notices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-sdblue mb-8">Notices & Announcements</h1>
        
        <div className="grid gap-6">
          {notices.map((notice) => (
            <div 
              key={notice.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-sdblue">{notice.title}</h2>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {notice.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{notice.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="font-semibold mr-2">Date:</span>
                  {notice.date}
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-semibold mr-2">Time:</span>
                  {notice.time}
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-semibold mr-2">Venue:</span>
                  {notice.venue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notices;
