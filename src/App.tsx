
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AdminNotices from "./pages/AdminNotices";
import AdminTeachers from "./pages/AdminTeachers";
import AdminGallery from "./pages/AdminGallery";
import AdminTestimonials from "./pages/AdminTestimonials";
import NotFound from "./pages/NotFound";
import Academic from "./pages/Academic";
import PrimarySection from "./pages/PrimarySection";
import MiddleSection from "./pages/MiddleSection";
import SeniorSection from "./pages/SeniorSection";
import Results from "./pages/Results";
import AcademicResults from "./pages/AcademicResults";
import OlympiadResults from "./pages/OlympiadResults";
import CompetitionResults from "./pages/CompetitionResults";
import EntranceResults from "./pages/EntranceResults";
import BeyondAcademicPage from "./pages/BeyondAcademicPage";
import SportsAndGames from "./pages/beyond-academic/SportsAndGames";
import DanceAndMusic from "./pages/beyond-academic/DanceAndMusic";
import ArtAndCraft from "./pages/beyond-academic/ArtAndCraft";
import YogaAndMeditation from "./pages/beyond-academic/YogaAndMeditation";
import EssentialInfoPage from "./pages/EssentialInfoPage";
import EssentialInfoDetailPage from "./pages/EssentialInfoDetailPage";
import DetailedGallery from "./pages/DetailedGallery";
import DetailedAchievements from "./pages/DetailedAchievements";
import Admission from "./pages/Admission";
import Enquiry from "./pages/Enquiry";
import Notices from "./pages/Notices";
import SchoolDetails from "./pages/SchoolDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/notices" element={<AdminNotices />} />
        <Route path="/admin/teachers" element={<AdminTeachers />} />
        <Route path="/admin/gallery" element={<AdminGallery />} />
        <Route path="/admin/testimonials" element={<AdminTestimonials />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/academic/primary" element={<PrimarySection />} />
        <Route path="/academic/middle" element={<MiddleSection />} />
        <Route path="/academic/senior" element={<SeniorSection />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/academic" element={<AcademicResults />} />
        <Route path="/results/olympiad" element={<OlympiadResults />} />
        <Route path="/results/competition" element={<CompetitionResults />} />
        <Route path="/results/entrance" element={<EntranceResults />} />
        <Route path="/beyond-academic" element={<BeyondAcademicPage />} />
        <Route path="/beyond-academic/sports-and-games" element={<SportsAndGames />} />
        <Route path="/beyond-academic/dance-and-music" element={<DanceAndMusic />} />
        <Route path="/beyond-academic/art-and-craft" element={<ArtAndCraft />} />
        <Route path="/beyond-academic/yoga-and-meditation" element={<YogaAndMeditation />} />
        <Route path="/essential-info" element={<EssentialInfoPage />} />
        <Route path="/essential-info/:slug" element={<EssentialInfoDetailPage />} />
        <Route path="/gallery" element={<DetailedGallery />} />
        <Route path="/achievements" element={<DetailedAchievements />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/school-details" element={<SchoolDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
