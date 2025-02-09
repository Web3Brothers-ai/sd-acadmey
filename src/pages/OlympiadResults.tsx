
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const OlympiadResults = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-sdblue mb-8">Olympiad Results</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Math Olympiad" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">International Math Olympiad 2023</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  • Gold Medals: 3 students
                </p>
                <p className="text-gray-600">
                  • Silver Medals: 5 students
                </p>
                <p className="text-gray-600">
                  • Bronze Medals: 8 students
                </p>
                <p className="text-gray-600">
                  • International Rank 1: Arjun Patel
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Science Olympiad" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Science Olympiad 2023</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  • Gold Medals: 2 students
                </p>
                <p className="text-gray-600">
                  • Silver Medals: 4 students
                </p>
                <p className="text-gray-600">
                  • Bronze Medals: 6 students
                </p>
                <p className="text-gray-600">
                  • Best Innovation Award: Team Alpha
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OlympiadResults;
