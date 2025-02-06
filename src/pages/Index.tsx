
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LeadershipCards } from "@/components/LeadershipCards";
import { TeachersSection } from "@/components/TeachersSection";
import { Gallery } from "@/components/Gallery";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Testimonials } from "@/components/Testimonials";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { Events } from "@/components/Events";
import { Facilities } from "@/components/Facilities";
import { Achievements } from "@/components/Achievements";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/utils/useScrollAnimation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const leadershipRef = useScrollAnimation();
  const teachersRef = useScrollAnimation();
  const achievementsRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  const videoTestimonialsRef = useScrollAnimation();
  const eventsRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();
  const facilitiesRef = useScrollAnimation();
  const enquiryRef = useScrollAnimation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location.state]);

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
      
      <div ref={videoTestimonialsRef} className="transition-all duration-500">
        <VideoTestimonials />
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
