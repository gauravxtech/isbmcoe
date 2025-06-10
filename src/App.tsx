import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
// Dashboard Pages
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
// Admin Management Pages
import AdmissionInquiry from "./pages/AdmissionInquiry";
import VisitorsBook from "./pages/VisitorsBook";
import Complaints from "./pages/Complaints";
import AllTeachers from "./pages/AllTeachers";
// Public Pages
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
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/programs-offered" element={<ProgramsOffered />} />
            <Route path="/fees-structure" element={<FeesStructure />} />
            <Route path="/first-year-admission" element={<FirstYearAdmission />} />
            <Route path="/direct-second-year-admission" element={<DirectSecondYearAdmission />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/industry-partners" element={<IndustryPartners />} />
            <Route path="/career-services" element={<CareerServices />} />
            <Route path="/training-programs" element={<TrainingPrograms />} />
            <Route path="/alumni-network" element={<AlumniNetwork />} />
            <Route path="/life-at-campus" element={<LifeAtCampus />} />
            <Route path="/cultural-events" element={<CulturalEvents />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/campus-location" element={<CampusLocation />} />
            <Route path="/directions" element={<Directions />} />
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/helpdesk" element={<Helpdesk />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Department Routes */}
            <Route path="/first-year-department" element={<FirstYearDepartment />} />
            <Route path="/computer-engineering" element={<ComputerEngineeringDepartment />} />
            <Route path="/mechanical-department" element={<MechanicalDepartment />} />
            <Route path="/aids-department" element={<AIDSDepartment />} />
            <Route path="/aiml-department" element={<AIMLDepartment />} />
            <Route path="/etc-department" element={<ETCDepartment />} />
            <Route path="/bca-department" element={<BCADepartment />} />
            <Route path="/bba-department" element={<BBADepartment />} />

            {/* Student Association Routes */}
            <Route path="/cesa" element={<CESA />} />
            <Route path="/etsa" element={<ETSA />} />
            <Route path="/aisa" element={<AISA />} />
            <Route path="/malsa" element={<MALSA />} />

            {/* Dashboard Routes - Protected */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Navigate to="/dashboard/student" replace />
              </ProtectedRoute>
            } />
            
            <Route path="/dashboard/super-admin" element={
              <ProtectedRoute allowedRoles={['super-admin']}>
                <SuperAdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/admin" element={
              <ProtectedRoute allowedRoles={['super-admin', 'admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/principal" element={
              <ProtectedRoute allowedRoles={['super-admin', 'admin', 'principal']}>
                <PrincipalDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/dean" element={
              <ProtectedRoute allowedRoles={['super-admin', 'admin', 'dean']}>
                <DeanDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/hod" element={
              <ProtectedRoute allowedRoles={['super-admin', 'admin', 'hod']}>
                <HODDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/teacher" element={
              <ProtectedRoute allowedRoles={['super-admin', 'admin', 'teacher']}>
                <TeacherDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/student" element={
              <ProtectedRoute allowedRoles={['super-admin', 'admin', 'student']}>
                <StudentDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/parent" element={
              <ProtectedRoute allowedRoles={['super-admin', 'admin', 'parent']}>
                <ParentDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/accountant" element={
              <ProtectedRoute allowedRoles={['super-admin', 'admin', 'accountant']}>
                <AccountantDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/reception" element={
              <ProtectedRoute allowedRoles={['super-admin', 'admin', 'reception']}>
                <ReceptionDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/security" element={
              <ProtectedRoute allowedRoles={['super-admin', 'admin', 'security']}>
                <SecurityDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/hostel" element={
              <ProtectedRoute allowedRoles={['super-admin', 'admin', 'hostel']}>
                <HostelDashboard />
              </ProtectedRoute>
            } />

            {/* Admin Management Routes */}
            <Route path="/admission-inquiry" element={
              <ProtectedRoute allowedRoles={['super-admin', 'admin', 'reception']}>
                <AdmissionInquiry />
              </ProtectedRoute>
            } />
            <Route path="/visitors-book" element={
              <ProtectedRoute allowedRoles={['super-admin', 'admin', 'reception', 'security']}>
                <VisitorsBook />
              </ProtectedRoute>
            } />
            <Route path="/complaints" element={
              <ProtectedRoute>
                <Complaints />
              </ProtectedRoute>
            } />
            <Route path="/all-teachers" element={
              <ProtectedRoute allowedRoles={['super-admin', 'admin', 'principal', 'dean', 'hod']}>
                <AllTeachers />
              </ProtectedRoute>
            } />

            {/* Catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
