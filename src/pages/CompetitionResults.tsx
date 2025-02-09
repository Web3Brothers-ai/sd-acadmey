
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const CompetitionResults = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-sdblue mb-8">Competition Results</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Coding Competition" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">National Coding Challenge 2023</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  • First Place: Team CodeMasters
                </p>
                <p className="text-gray-600">
                  • Best Algorithm: Team Logic
                </p>
                <p className="text-gray-600">
                  • Innovation Award: Team NextGen
                </p>
                <p className="text-gray-600">
                  • Total Participating Teams: 15
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Quiz Competition" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Inter-School Quiz Competition</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  • Championship Trophy: S.D. Academy Team A
                </p>
                <p className="text-gray-600">
                  • Runner-up: Team Knowledge Warriors
                </p>
                <p className="text-gray-600">
                  • Best Quick Response: Team Intellectuals
                </p>
                <p className="text-gray-600">
                  • Participating Schools: 25
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

export default CompetitionResults;
