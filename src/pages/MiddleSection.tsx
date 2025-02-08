
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MiddleSection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-4xl font-bold text-sdblue">Middle Section</h1>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto">Grades 6-8: Emphasizing analytical thinking and subject specialization</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/319008bf-cf23-450b-9ba4-2460eaaf8736.png"
              alt="Middle Section" 
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-sdblue mb-6">Academic Focus</h2>
            <p className="text-gray-700 mb-6">
              Our middle section curriculum is designed to develop critical thinking skills and prepare students for higher academic challenges. We encourage independent learning while providing necessary guidance.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-sdblue rounded-full"></span>
                <span className="text-gray-700">Advanced subject specialization</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-sdblue rounded-full"></span>
                <span className="text-gray-700">Project-based learning</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-sdblue rounded-full"></span>
                <span className="text-gray-700">Scientific temperament development</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-sdblue rounded-full"></span>
                <span className="text-gray-700">Critical thinking workshops</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-sdblue mb-4">Academic Excellence</h3>
            <p className="text-gray-700">Focus on in-depth understanding of subjects with specialized faculty for each subject.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-sdblue mb-4">Skill Development</h3>
            <p className="text-gray-700">Regular workshops and activities to develop practical skills and analytical thinking.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-sdblue mb-4">Personal Growth</h3>
            <p className="text-gray-700">Emphasis on personality development and leadership qualities through various activities.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MiddleSection;
