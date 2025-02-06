
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sdblue mb-4">About S.D. Academy</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Nurturing young minds and shaping futures since 1995</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="/lovable-uploads/74233a1b-ee7c-42d2-b3dc-5c32c52d8378.png" 
              alt="School Building" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-sdblue mb-6">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              At S.D. Academy, we believe in providing a nurturing environment where every child can discover their potential and develop into confident, responsible individuals.
            </p>
            <p className="text-gray-700 mb-4">
              Our commitment to excellence in education spans over two decades, during which we have consistently evolved our teaching methodologies to meet the changing needs of our students.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="text-2xl font-bold text-sdblue">500+</h3>
                <p className="text-gray-600">Students</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="text-2xl font-bold text-sdblue">25+</h3>
                <p className="text-gray-600">Expert Teachers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-sdblue mb-4">Our Mission</h3>
            <p className="text-gray-700">To provide quality education that empowers students with knowledge, skills, and values.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-sdblue mb-4">Core Values</h3>
            <p className="text-gray-700">Excellence, integrity, innovation, and respect form the foundation of our institution.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-sdblue mb-4">Our Approach</h3>
            <p className="text-gray-700">Holistic development through a blend of academic and co-curricular activities.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
