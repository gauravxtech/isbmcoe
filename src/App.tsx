
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
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import PrincipalDashboard from "./pages/PrincipalDashboard";
import DeanDashboard from "./pages/DeanDashboard";
import HODDashboard from "./pages/HODDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import AccountantDashboard from "./pages/AccountantDashboard";
import ReceptionDashboard from "./pages/ReceptionDashboard";
import SecurityDashboard from "./pages/SecurityDashboard";
import HostelDashboard from "./pages/HostelDashboard";
import AdmissionInquiry from "./pages/AdmissionInquiry";
import VisitorsBook from "./pages/VisitorsBook";
import Complaints from "./pages/Complaints";
import AllTeachers from "./pages/AllTeachers";
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
          
          {/* Role-based Dashboard Routes */}
          <Route path="/admin/super-admin-dashboard" element={<SuperAdminDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/principal-dashboard" element={<PrincipalDashboard />} />
          <Route path="/admin/dean-dashboard" element={<DeanDashboard />} />
          <Route path="/admin/hod-dashboard" element={<HODDashboard />} />
          <Route path="/admin/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/admin/student-dashboard" element={<StudentDashboard />} />
          <Route path="/admin/parent-dashboard" element={<ParentDashboard />} />
          <Route path="/admin/accountant-dashboard" element={<AccountantDashboard />} />
          <Route path="/admin/reception-dashboard" element={<ReceptionDashboard />} />
          <Route path="/admin/security-dashboard" element={<SecurityDashboard />} />
          <Route path="/admin/hostel-dashboard" element={<HostelDashboard />} />
          
          {/* Admin Management Routes */}
          <Route path="/admin/content" element={<AdminDashboard />} />
          <Route path="/admin/analytics" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminDashboard />} />
          <Route path="/admin/settings" element={<AdminDashboard />} />
          
          {/* Admin Front Office Routes */}
          <Route path="/admin/admission-inquiry" element={<AdmissionInquiry />} />
          <Route path="/admin/visitors" element={<VisitorsBook />} />
          <Route path="/admin/complaints" element={<Complaints />} />
          
          {/* Admin Teacher Routes */}
          <Route path="/admin/teachers" element={<AllTeachers />} />
          <Route path="/admin/teachers/add" element={<AllTeachers />} />
          <Route path="/admin/teachers/assign" element={<AllTeachers />} />
          <Route path="/admin/teachers/timetable" element={<AllTeachers />} />
          
          {/* Admin Student Routes */}
          <Route path="/admin/students" element={<AdminDashboard />} />
          <Route path="/admin/students/add" element={<AdminDashboard />} />
          <Route path="/admin/students/attendance" element={<AdminDashboard />} />
          <Route path="/admin/students/info" element={<AdminDashboard />} />
          
          {/* Admin Course Routes */}
          <Route path="/admin/courses" element={<AdminDashboard />} />
          <Route path="/admin/courses/add" element={<AdminDashboard />} />
          
          {/* Admin Library Routes */}
          <Route path="/admin/library/books" element={<AdminDashboard />} />
          <Route path="/admin/library/issue" element={<AdminDashboard />} />
          <Route path="/admin/library/members" element={<AdminDashboard />} />
          
          {/* Admin Department Routes */}
          <Route path="/admin/departments" element={<AdminDashboard />} />
          <Route path="/admin/departments/add" element={<AdminDashboard />} />
          
          {/* Admin Staff Routes */}
          <Route path="/admin/staff" element={<AdminDashboard />} />
          <Route path="/admin/staff/add" element={<AdminDashboard />} />
          <Route path="/admin/staff/attendance" element={<AdminDashboard />} />
          
          {/* Admin Holiday Routes */}
          <Route path="/admin/holidays" element={<AdminDashboard />} />
          <Route path="/admin/holidays/add" element={<AdminDashboard />} />
          
          {/* Admin Fees Routes */}
          <Route path="/admin/fees" element={<AdminDashboard />} />
          <Route path="/admin/fees/collection" element={<AdminDashboard />} />
          <Route path="/admin/fees/receipt" element={<AdminDashboard />} />
          <Route path="/admin/fees/structure" element={<AdminDashboard />} />
          
          {/* Admin Classes Routes */}
          <Route path="/admin/classes" element={<AdminDashboard />} />
          <Route path="/admin/classes/timetable" element={<AdminDashboard />} />
          
          {/* Admin Hostel Routes */}
          <Route path="/admin/hostel/rooms" element={<AdminDashboard />} />
          <Route path="/admin/hostel/fees" element={<AdminDashboard />} />
          
          {/* Admin HR Routes */}
          <Route path="/admin/hr/leave" element={<AdminDashboard />} />
          <Route path="/admin/hr/payroll" element={<AdminDashboard />} />
          <Route path="/admin/hr/employees" element={<AdminDashboard />} />
          
          {/* Admin Apps Routes */}
          <Route path="/admin/apps/calendar" element={<AdminDashboard />} />
          <Route path="/admin/apps/tasks" element={<AdminDashboard />} />
          <Route path="/admin/apps/chat" element={<AdminDashboard />} />
          <Route path="/admin/apps/email" element={<AdminDashboard />} />
          
          {/* Public Routes */}
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
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
