
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";

const Enquiry = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <EnquiryForm />
      </div>
      <Footer />
    </div>
  );
};

export default Enquiry;
