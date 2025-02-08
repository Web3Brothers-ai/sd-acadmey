
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrimarySection = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sdblue mb-4">Primary Section</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Grades 1-5: Building strong foundations in core subjects while nurturing creativity</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-sdblue mb-6">Our Approach</h2>
            <p className="text-gray-700 mb-6">
              In our primary section, we focus on developing strong foundational skills while fostering creativity and curiosity. Our experienced teachers create an engaging learning environment where every child can thrive.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-sdblue rounded-full"></span>
                <span className="text-gray-700">Interactive learning methods</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-sdblue rounded-full"></span>
                <span className="text-gray-700">Regular parent-teacher interaction</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-sdblue rounded-full"></span>
                <span className="text-gray-700">Focus on holistic development</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-sdblue rounded-full"></span>
                <span className="text-gray-700">Emphasis on fundamental concepts</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/319008bf-cf23-450b-9ba4-2460eaaf8736.png"
              alt="Primary Section" 
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-sdblue mb-4">Core Subjects</h3>
            <p className="text-gray-700">Comprehensive coverage of English, Hindi, Mathematics, EVS, and General Knowledge.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-sdblue mb-4">Co-Curricular Activities</h3>
            <p className="text-gray-700">Regular art, music, dance, and physical education sessions to promote overall development.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-sdblue mb-4">Learning Support</h3>
            <p className="text-gray-700">Individual attention and remedial classes to ensure every child keeps pace with learning.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrimarySection;
