import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LeadershipCards } from "@/components/LeadershipCards";
import { TeachersSection } from "@/components/TeachersSection";
import { Gallery } from "@/components/Gallery";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Testimonials } from "@/components/Testimonials";
import { Events } from "@/components/Events";
import { Facilities } from "@/components/Facilities";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <LeadershipCards />
      <TeachersSection />
      <Testimonials />
      <Events />
      <Gallery />
      <Facilities />
      <EnquiryForm />
    </div>
  );
};

export default Index;