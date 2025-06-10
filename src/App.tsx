
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
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
            {/* Protected Dashboard Routes */}
            <Route path="/dashboard/super-admin" element={
              <ProtectedRoute allowedRoles={['super-admin']}>
                <SuperAdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/principal" element={
              <ProtectedRoute allowedRoles={['principal']}>
                <PrincipalDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/dean" element={
              <ProtectedRoute allowedRoles={['dean']}>
                <DeanDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/hod" element={
              <ProtectedRoute allowedRoles={['hod']}>
                <HODDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/teacher" element={
              <ProtectedRoute allowedRoles={['teacher']}>
                <TeacherDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/student" element={
              <ProtectedRoute allowedRoles={['student']}>
                <StudentDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/parent" element={
              <ProtectedRoute allowedRoles={['parent']}>
                <ParentDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/accountant" element={
              <ProtectedRoute allowedRoles={['accountant']}>
                <AccountantDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/reception" element={
              <ProtectedRoute allowedRoles={['reception']}>
                <ReceptionDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/security" element={
              <ProtectedRoute allowedRoles={['security']}>
                <SecurityDashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/hostel" element={
              <ProtectedRoute allowedRoles={['hostel']}>
                <HostelDashboard />
              </ProtectedRoute>
            } />
            
            {/* Protected Admin Management Routes */}
            <Route path="/admin/admission-inquiry" element={
              <ProtectedRoute>
                <AdmissionInquiry />
              </ProtectedRoute>
            } />
            <Route path="/admin/visitors" element={
              <ProtectedRoute>
                <VisitorsBook />
              </ProtectedRoute>
            } />
            <Route path="/admin/complaints" element={
              <ProtectedRoute>
                <Complaints />
              </ProtectedRoute>
            } />
            <Route path="/admin/teachers" element={
              <ProtectedRoute>
                <AllTeachers />
              </ProtectedRoute>
            } />
            
            {/* Legacy Route Redirects */}
            <Route path="/admin/dashboard" element={<Navigate to="/dashboard/admin" replace />} />
            <Route path="/admin/super-admin-dashboard" element={<Navigate to="/dashboard/super-admin" replace />} />
            <Route path="/admin/principal-dashboard" element={<Navigate to="/dashboard/principal" replace />} />
            <Route path="/admin/dean-dashboard" element={<Navigate to="/dashboard/dean" replace />} />
            <Route path="/admin/hod-dashboard" element={<Navigate to="/dashboard/hod" replace />} />
            <Route path="/admin/teacher-dashboard" element={<Navigate to="/dashboard/teacher" replace />} />
            <Route path="/admin/student-dashboard" element={<Navigate to="/dashboard/student" replace />} />
            <Route path="/admin/parent-dashboard" element={<Navigate to="/dashboard/parent" replace />} />
            <Route path="/admin/accountant-dashboard" element={<Navigate to="/dashboard/accountant" replace />} />
            <Route path="/admin/reception-dashboard" element={<Navigate to="/dashboard/reception" replace />} />
            <Route path="/admin/security-dashboard" element={<Navigate to="/dashboard/security" replace />} />
            <Route path="/admin/hostel-dashboard" element={<Navigate to="/dashboard/hostel" replace />} />
            
            {/* Public Department and Information Routes */}
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
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
