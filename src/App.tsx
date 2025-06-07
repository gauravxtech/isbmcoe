import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import FirstYearDepartment from "./pages/FirstYearDepartment";
import ComputerEngineeringDepartment from "./pages/ComputerEngineeringDepartment";
import AIMLDepartment from "./pages/AIMLDepartment";
import AIDSDepartment from "./pages/AIDSDepartment";
import MechanicalDepartment from "./pages/MechanicalDepartment";
import ETCDepartment from "./pages/ETCDepartment";
import BBADepartment from "./pages/BBADepartment";
import BCADepartment from "./pages/BCADepartment";
import ProgramsOffered from "./pages/ProgramsOffered";
import FirstYearAdmission from "./pages/FirstYearAdmission";
import DirectSecondYearAdmission from "./pages/DirectSecondYearAdmission";
import FeesStructure from "./pages/FeesStructure";
import Placements from "./pages/Placements";
import TrainingPrograms from "./pages/TrainingPrograms";
import IndustryPartners from "./pages/IndustryPartners";
import CareerServices from "./pages/CareerServices";
import AlumniNetwork from "./pages/AlumniNetwork";
import CampusLocation from "./pages/CampusLocation";
import Administration from "./pages/Administration";
import Helpdesk from "./pages/Helpdesk";
import Directions from "./pages/Directions";
import VirtualTour from "./pages/VirtualTour";
import LifeAtCampus from "./pages/LifeAtCampus";
import CulturalEvents from "./pages/CulturalEvents";
import Hostel from "./pages/Hostel";
import CESA from "./pages/CESA";
import MALSA from "./pages/MALSA";
import AISA from "./pages/AISA";
import ETSA from "./pages/ETSA";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/programs-offered" element={<ProgramsOffered />} />
          <Route path="/first-year-department" element={<FirstYearDepartment />} />
          <Route path="/computer-engineering-department" element={<ComputerEngineeringDepartment />} />
          <Route path="/aiml-department" element={<AIMLDepartment />} />
          <Route path="/aids-department" element={<AIDSDepartment />} />
          <Route path="/mechanical-department" element={<MechanicalDepartment />} />
          <Route path="/etc-department" element={<ETCDepartment />} />
          <Route path="/bba-department" element={<BBADepartment />} />
          <Route path="/bca-department" element={<BCADepartment />} />
          <Route path="/admissions/first-year" element={<FirstYearAdmission />} />
          <Route path="/admissions/direct-second-year" element={<DirectSecondYearAdmission />} />
          <Route path="/admissions/fees-structure" element={<FeesStructure />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/placements/training-programs" element={<TrainingPrograms />} />
          <Route path="/placements/industry-partners" element={<IndustryPartners />} />
          <Route path="/placements/career-services" element={<CareerServices />} />
          <Route path="/placements/alumni-network" element={<AlumniNetwork />} />
          <Route path="/contact/campus-location" element={<CampusLocation />} />
          <Route path="/contact/administration" element={<Administration />} />
          <Route path="/contact/helpdesk" element={<Helpdesk />} />
          <Route path="/contact/directions" element={<Directions />} />
          <Route path="/contact/virtual-tour" element={<VirtualTour />} />
          <Route path="/life-at-campus" element={<LifeAtCampus />} />
          <Route path="/cultural-events" element={<CulturalEvents />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/cesa" element={<CESA />} />
          <Route path="/malsa" element={<MALSA />} />
          <Route path="/aisa" element={<AISA />} />
          <Route path="/etsa" element={<ETSA />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
