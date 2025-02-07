
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
    <div className="min-h-screen perspective-1000">
      <Navigation />
      <Hero />
      
      <div ref={leadershipRef} className="preserve-3d transition-all duration-500 hover:translate-z-8">
        <div className="touch-scale">
          <LeadershipCards />
        </div>
      </div>
      
      <div ref={teachersRef} className="preserve-3d transition-all duration-500">
        <div className="touch-scale animate-scale-in">
          <TeachersSection />
        </div>
      </div>
      
      <div ref={achievementsRef} className="preserve-3d transition-all duration-500">
        <div className="touch-scale animate-float">
          <Achievements />
        </div>
      </div>
      
      <div ref={testimonialsRef} className="preserve-3d transition-all duration-500">
        <div className="touch-scale">
          <Testimonials />
        </div>
      </div>
      
      <div ref={videoTestimonialsRef} className="preserve-3d transition-all duration-500">
        <div className="touch-scale">
          <VideoTestimonials />
        </div>
      </div>
      
      <div ref={eventsRef} className="preserve-3d transition-all duration-500">
        <div className="touch-scale animate-scale-in">
          <Events />
        </div>
      </div>
      
      <div ref={galleryRef} className="preserve-3d transition-all duration-500">
        <div className="touch-scale">
          <Gallery />
        </div>
      </div>
      
      <div ref={facilitiesRef} className="preserve-3d transition-all duration-500">
        <div className="touch-scale">
          <Facilities />
        </div>
      </div>
      
      <div ref={enquiryRef} className="preserve-3d transition-all duration-500">
        <div className="touch-scale">
          <EnquiryForm />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
