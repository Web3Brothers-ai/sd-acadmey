
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AcademicResults = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-sdblue mb-8">Academic Results</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Academic Excellence" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Class X Results 2023</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  • School Average: 92.5%
                </p>
                <p className="text-gray-600">
                  • Number of Students: 120
                </p>
                <p className="text-gray-600">
                  • Students Scoring Above 90%: 45
                </p>
                <p className="text-gray-600">
                  • Top Scorer: Rahul Kumar (98.6%)
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Academic Achievement" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Class XII Results 2023</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  • School Average: 89.2%
                </p>
                <p className="text-gray-600">
                  • Number of Students: 98
                </p>
                <p className="text-gray-600">
                  • Students Scoring Above 90%: 32
                </p>
                <p className="text-gray-600">
                  • Top Scorer: Priya Singh (97.8%)
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

export default AcademicResults;
