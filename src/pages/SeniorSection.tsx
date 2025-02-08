
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const SeniorSection = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sdblue mb-4">Senior Section</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Grades 9-12: Preparing students for board exams and higher education</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-sdblue mb-6">Academic Excellence</h2>
            <p className="text-gray-700 mb-6">
              Our senior section focuses on comprehensive preparation for board examinations while ensuring students are well-prepared for higher education and future careers. We provide specialized guidance for various competitive examinations.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-sdblue rounded-full"></span>
                <span className="text-gray-700">Specialized board exam preparation</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-sdblue rounded-full"></span>
                <span className="text-gray-700">Career counseling sessions</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-sdblue rounded-full"></span>
                <span className="text-gray-700">Competitive exam guidance</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-sdblue rounded-full"></span>
                <span className="text-gray-700">Regular mock tests and assessments</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/319008bf-cf23-450b-9ba4-2460eaaf8736.png"
              alt="Senior Section" 
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-sdblue mb-4">Stream Options</h3>
            <p className="text-gray-700">Choice of Science, Commerce, and Humanities streams with experienced faculty guidance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-sdblue mb-4">Career Guidance</h3>
            <p className="text-gray-700">Regular career counseling sessions and exposure to various career options.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-sdblue mb-4">Exam Preparation</h3>
            <p className="text-gray-700">Comprehensive preparation for board exams and competitive entrance tests.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SeniorSection;
