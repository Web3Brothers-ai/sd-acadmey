import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LeadershipCards } from "@/components/LeadershipCards";
import { TeachersSection } from "@/components/TeachersSection";
import { Gallery } from "@/components/Gallery";
import { EnquiryForm } from "@/components/EnquiryForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <LeadershipCards />
      <TeachersSection />
      <Gallery />
      <EnquiryForm />
    </div>
  );
};

export default Index;