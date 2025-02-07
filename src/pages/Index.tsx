
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
import { useEffect, useCallback } from "react";
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

  const scrollToElement = useCallback((selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      requestAnimationFrame(() => {
        scrollToElement(location.state.scrollTo);
      });
    }
  }, [location.state, scrollToElement]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <div ref={leadershipRef} className="transition-transform duration-300 will-change-transform">
        <LeadershipCards />
      </div>
      
      <div ref={teachersRef} className="transition-transform duration-300 will-change-transform">
        <TeachersSection />
      </div>
      
      <div ref={achievementsRef} className="transition-transform duration-300 will-change-transform">
        <Achievements />
      </div>
      
      <div ref={testimonialsRef} className="transition-transform duration-300 will-change-transform">
        <Testimonials />
      </div>
      
      <div ref={videoTestimonialsRef} className="transition-transform duration-300 will-change-transform">
        <VideoTestimonials />
      </div>
      
      <div ref={eventsRef} className="transition-transform duration-300 will-change-transform">
        <Events />
      </div>
      
      <div ref={galleryRef} className="transition-transform duration-300 will-change-transform">
        <Gallery />
      </div>
      
      <div ref={facilitiesRef} className="transition-transform duration-300 will-change-transform">
        <Facilities />
      </div>
      
      <div ref={enquiryRef} className="transition-transform duration-300 will-change-transform">
        <EnquiryForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
