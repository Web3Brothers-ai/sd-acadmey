import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LeadershipCards } from "@/components/LeadershipCards";
import { TeachersSection } from "@/components/TeachersSection";
import { Gallery } from "@/components/Gallery";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Testimonials } from "@/components/Testimonials";
import { Events } from "@/components/Events";
import { Facilities } from "@/components/Facilities";
import { Achievements } from "@/components/Achievements";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/utils/useScrollAnimation";

const Index = () => {
  const leadershipRef = useScrollAnimation();
  const teachersRef = useScrollAnimation();
  const achievementsRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  const eventsRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();
  const facilitiesRef = useScrollAnimation();
  const enquiryRef = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <div ref={leadershipRef} className="transition-all duration-500">
        <LeadershipCards />
      </div>
      
      <div ref={teachersRef} className="transition-all duration-500">
        <TeachersSection />
      </div>
      
      <div ref={achievementsRef} className="transition-all duration-500">
        <Achievements />
      </div>
      
      <div ref={testimonialsRef} className="transition-all duration-500">
        <Testimonials />
      </div>
      
      <div ref={eventsRef} className="transition-all duration-500">
        <Events />
      </div>
      
      <div ref={galleryRef} className="transition-all duration-500">
        <Gallery />
      </div>
      
      <div ref={facilitiesRef} className="transition-all duration-500">
        <Facilities />
      </div>
      
      <div ref={enquiryRef} className="transition-all duration-500">
        <EnquiryForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;