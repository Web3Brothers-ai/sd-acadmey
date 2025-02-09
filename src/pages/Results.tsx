
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Results = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-sdblue mb-8">School Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-sdblue mb-4">Academic Results</h2>
            <p className="text-gray-600 mb-4">View our students' academic achievements and board examination results.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-sdblue mb-4">Olympiad Results</h2>
            <p className="text-gray-600 mb-4">Explore our students' performance in various Olympiad competitions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-sdblue mb-4">Competition Results</h2>
            <p className="text-gray-600 mb-4">Check out our students' achievements in various competitions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-sdblue mb-4">Entrance Results</h2>
            <p className="text-gray-600 mb-4">View our students' success in various entrance examinations.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;
