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
import Admission from "./pages/Admission";
import Enquiry from "./pages/Enquiry";
import AdminGallery from "./pages/AdminGallery";

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
          <Route path="/notices" element={<Notices />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
