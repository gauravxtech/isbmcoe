import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import AdminSetup from "./pages/AdminSetup";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import Administration from "./pages/Administration";
import ProgramsOffered from "./pages/ProgramsOffered";
import FeesStructure from "./pages/FeesStructure";
import FirstYearAdmission from "./pages/FirstYearAdmission";
import DirectSecondYearAdmission from "./pages/DirectSecondYearAdmission";
import Placements from "./pages/Placements";
import CareerServices from "./pages/CareerServices";
import TrainingPrograms from "./pages/TrainingPrograms";
import IndustryPartners from "./pages/IndustryPartners";
import AlumniNetwork from "./pages/AlumniNetwork";
import CampusLocation from "./pages/CampusLocation";
import Directions from "./pages/Directions";
import Hostel from "./pages/Hostel";
import LifeAtCampus from "./pages/LifeAtCampus";
import CulturalEvents from "./pages/CulturalEvents";
import VirtualTour from "./pages/VirtualTour";
import Helpdesk from "./pages/Helpdesk";
import ComputerEngineeringDepartment from "./pages/ComputerEngineeringDepartment";
import ETCDepartment from "./pages/ETCDepartment";
import MechanicalDepartment from "./pages/MechanicalDepartment";
import FirstYearDepartment from "./pages/FirstYearDepartment";
import BCADepartment from "./pages/BCADepartment";
import BBADepartment from "./pages/BBADepartment";
import AIDSDepartment from "./pages/AIDSDepartment";
import AIMLDepartment from "./pages/AIMLDepartment";
import CESA from "./pages/CESA";
import ETSA from "./pages/ETSA";
import MALSA from "./pages/MALSA";
import AISA from "./pages/AISA";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import PrincipalDashboard from "./pages/PrincipalDashboard";
import DeanDashboard from "./pages/DeanDashboard";
import HODDashboard from "./pages/HODDashboard";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import AccountantDashboard from "./pages/AccountantDashboard";
import ReceptionDashboard from "./pages/ReceptionDashboard";
import SecurityDashboard from "./pages/SecurityDashboard";
import HostelDashboard from "./pages/HostelDashboard";
import AdmissionInquiry from "./pages/AdmissionInquiry";
import VisitorsBook from "./pages/VisitorsBook";
import Complaints from "./pages/Complaints";
import AllTeachers from "./pages/AllTeachers";
import WebsiteManagement from "./pages/WebsiteManagement";
import NotFound from "./pages/NotFound";
import AllStudents from './pages/admin/students/AllStudents';
import AddStudent from './pages/admin/students/AddStudent';
import StudentAttendance from './pages/admin/students/StudentAttendance';
import AllCourses from './pages/admin/courses/AllCourses';
import AddCourse from './pages/admin/courses/AddCourse';
import AllBooks from './pages/admin/library/AllBooks';
import BookIssueReturn from './pages/admin/library/BookIssueReturn';
import LibraryMembers from './pages/admin/library/LibraryMembers';
import AllDepartments from './pages/admin/departments/AllDepartments';
import AddDepartment from './pages/admin/departments/AddDepartment';
import AdminAnnouncementManagerPage from './pages/admin/AnnouncementManager';
import AnnouncementManager from './components/admin/AnnouncementManager';
import { SessionTimeoutProvider } from '@/contexts/SessionTimeoutContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <SessionTimeoutProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/admin-setup" element={<AdminSetup />} />
                
                {/* About Pages */}
                <Route path="/about" element={<About />} />
                <Route path="/vision-mission" element={<VisionMission />} />
                <Route path="/administration" element={<Administration />} />
                
                {/* Admission Pages */}
                <Route path="/programs-offered" element={<ProgramsOffered />} />
                <Route path="/fees-structure" element={<FeesStructure />} />
                <Route path="/first-year-admission" element={<FirstYearAdmission />} />
                <Route path="/direct-second-year-admission" element={<DirectSecondYearAdmission />} />
                
                {/* Placement Pages */}
                <Route path="/placements" element={<Placements />} />
                <Route path="/career-services" element={<CareerServices />} />
                <Route path="/training-programs" element={<TrainingPrograms />} />
                <Route path="/industry-partners" element={<IndustryPartners />} />
                <Route path="/alumni-network" element={<AlumniNetwork />} />
                
                {/* Campus Pages */}
                <Route path="/campus-location" element={<CampusLocation />} />
                <Route path="/directions" element={<Directions />} />
                <Route path="/hostel" element={<Hostel />} />
                <Route path="/life-at-campus" element={<LifeAtCampus />} />
                <Route path="/cultural-events" element={<CulturalEvents />} />
                <Route path="/virtual-tour" element={<VirtualTour />} />
                <Route path="/helpdesk" element={<Helpdesk />} />
                
                {/* Department Pages */}
                <Route path="/departments/computer-engineering" element={<ComputerEngineeringDepartment />} />
                <Route path="/departments/electronics-telecommunication" element={<ETCDepartment />} />
                <Route path="/departments/mechanical-engineering" element={<MechanicalDepartment />} />
                <Route path="/departments/first-year" element={<FirstYearDepartment />} />
                <Route path="/departments/bca" element={<BCADepartment />} />
                <Route path="/departments/bba" element={<BBADepartment />} />
                <Route path="/departments/aids" element={<AIDSDepartment />} />
                <Route path="/departments/aiml" element={<AIMLDepartment />} />
                
                {/* Student Association Pages */}
                <Route path="/associations/cesa" element={<CESA />} />
                <Route path="/associations/etsa" element={<ETSA />} />
                <Route path="/associations/malsa" element={<MALSA />} />
                <Route path="/associations/aisa" element={<AISA />} />
                
                {/* Protected Dashboard Routes */}
                <Route path="/dashboard/student" element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/teacher" element={
                  <ProtectedRoute allowedRoles={['teacher']}>
                    <TeacherDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/parent" element={
                  <ProtectedRoute allowedRoles={['parent']}>
                    <ParentDashboard />
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
                <Route path="/dashboard/super-admin" element={
                  <ProtectedRoute allowedRoles={['super-admin']}>
                    <SuperAdminDashboard />
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
                
                {/* Website Management Route */}
                <Route path="/dashboard/website-management" element={
                  <ProtectedRoute allowedRoles={['super-admin', 'admin']}>
                    <WebsiteManagement />
                  </ProtectedRoute>
                } />
                
                {/* Admin Management Routes */}
                <Route path="/admin/admission-inquiry" element={
                  <ProtectedRoute allowedRoles={['admin', 'reception', 'super-admin']}>
                    <AdmissionInquiry />
                  </ProtectedRoute>
                } />
                <Route path="/admin/visitors" element={
                  <ProtectedRoute allowedRoles={['admin', 'reception', 'security', 'super-admin']}>
                    <VisitorsBook />
                  </ProtectedRoute>
                } />
                <Route path="/admin/complaints" element={
                  <ProtectedRoute allowedRoles={['admin', 'reception', 'super-admin']}>
                    <Complaints />
                  </ProtectedRoute>
                } />
                <Route path="/admin/teachers" element={
                  <ProtectedRoute allowedRoles={['admin', 'principal', 'hod', 'super-admin']}>
                    <AllTeachers />
                  </ProtectedRoute>
                } />
                <Route path="/admin/students" element={
                  <ProtectedRoute allowedRoles={['admin', 'principal', 'hod', 'super-admin']}>
                    <AllStudents />
                  </ProtectedRoute>
                } />
                <Route path="/admin/students/add" element={
                  <ProtectedRoute allowedRoles={['admin', 'principal', 'hod', 'super-admin']}>
                    <AddStudent />
                  </ProtectedRoute>
                } />
                <Route path="/admin/students/attendance" element={
                  <ProtectedRoute allowedRoles={['admin', 'principal', 'hod', 'super-admin']}>
                    <StudentAttendance />
                  </ProtectedRoute>
                } />
                <Route path="/admin/courses" element={
                  <ProtectedRoute allowedRoles={['admin', 'principal', 'hod', 'super-admin']}>
                    <AllCourses />
                  </ProtectedRoute>
                } />
                <Route path="/admin/courses/add" element={
                  <ProtectedRoute allowedRoles={['admin', 'principal', 'hod', 'super-admin']}>
                    <AddCourse />
                  </ProtectedRoute>
                } />
                <Route path="/admin/library/books" element={
                  <ProtectedRoute allowedRoles={['admin', 'principal', 'hod', 'super-admin', 'librarian']}>
                    <AllBooks />
                  </ProtectedRoute>
                } />
                <Route path="/admin/library/issue" element={
                  <ProtectedRoute allowedRoles={['admin', 'principal', 'hod', 'super-admin', 'librarian']}>
                    <BookIssueReturn />
                  </ProtectedRoute>
                } />
                <Route path="/admin/library/members" element={
                  <ProtectedRoute allowedRoles={['admin', 'principal', 'hod', 'super-admin', 'librarian']}>
                    <LibraryMembers />
                  </ProtectedRoute>
                } />
                <Route path="/admin/departments" element={
                  <ProtectedRoute allowedRoles={['admin', 'principal', 'hod', 'super-admin']}>
                    <AllDepartments />
                  </ProtectedRoute>
                } />
                <Route path="/admin/departments/add" element={
                  <ProtectedRoute allowedRoles={['admin', 'principal', 'hod', 'super-admin']}>
                    <AddDepartment />
                  </ProtectedRoute>
                } />
                <Route path="/admin/announcements" element={<AdminAnnouncementManagerPage />} />
                
                {/* Super Admin Announcements Route */}
                <Route path="/dashboard/super-admin/announcements" element={
                  <ProtectedRoute allowedRoles={['super-admin']}>
                    <AnnouncementManager />
                  </ProtectedRoute>
                } />
                
                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </TooltipProvider>
          </SessionTimeoutProvider>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
