
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AdminNotices from "./pages/AdminNotices";
import NotFound from "./pages/NotFound";
import Notices from "./pages/Notices";
import AboutUs from "./pages/AboutUs";
import Academic from "./pages/Academic";
import PrimarySection from "./pages/PrimarySection";
import MiddleSection from "./pages/MiddleSection";
import SeniorSection from "./pages/SeniorSection";
import Admission from "./pages/Admission";
import Enquiry from "./pages/Enquiry";
import AdminGallery from "./pages/AdminGallery";
import AdminTeachers from "./pages/AdminTeachers";
import AdminTestimonials from "./pages/AdminTestimonials";
import DetailedAchievements from "./pages/DetailedAchievements";
import DetailedGallery from "./pages/DetailedGallery";
import SchoolDetails from "./pages/SchoolDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/notices" element={<AdminNotices />} />
          <Route path="/admin/gallery" element={<AdminGallery />} />
          <Route path="/admin/teachers" element={<AdminTeachers />} />
          <Route path="/admin/testimonials" element={<AdminTestimonials />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/academic/primary" element={<PrimarySection />} />
          <Route path="/academic/middle" element={<MiddleSection />} />
          <Route path="/academic/senior" element={<SeniorSection />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/achievements" element={<DetailedAchievements />} />
          <Route path="/gallery" element={<DetailedGallery />} />
          <Route path="/school-details" element={<SchoolDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
