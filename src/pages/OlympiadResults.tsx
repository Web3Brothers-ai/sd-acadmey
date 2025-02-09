
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const OlympiadResults = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-sdblue mb-8">Olympiad Results</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-4">Coming soon...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OlympiadResults;
