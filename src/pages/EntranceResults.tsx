
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const EntranceResults = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-sdblue mb-8">Entrance Results</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="JEE Results" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">JEE Results 2023</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  • Students Qualified: 85
                </p>
                <p className="text-gray-600">
                  • AIR Under 1000: 12 students
                </p>
                <p className="text-gray-600">
                  • AIR Under 5000: 35 students
                </p>
                <p className="text-gray-600">
                  • Top Rank: AIR 245
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="NEET Results" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">NEET Results 2023</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  • Students Qualified: 92
                </p>
                <p className="text-gray-600">
                  • AIR Under 1000: 8 students
                </p>
                <p className="text-gray-600">
                  • AIR Under 5000: 28 students
                </p>
                <p className="text-gray-600">
                  • Top Rank: AIR 567
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

export default EntranceResults;
