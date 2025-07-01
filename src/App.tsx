
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { SessionTimeoutProvider } from '@/contexts/SessionTimeoutContext';
import ProtectedRoute from "@/components/ProtectedRoute";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingFallback from "@/components/LoadingFallback";
import { Suspense, lazy } from "react";

// Lazy load components to improve initial load time
const Index = lazy(() => import("./pages/Index"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const AdminSetup = lazy(() => import("./pages/AdminSetup"));
const About = lazy(() => import("./pages/About"));
const VisionMission = lazy(() => import("./pages/VisionMission"));
const Administration = lazy(() => import("./pages/Administration"));
const ProgramsOffered = lazy(() => import("./pages/ProgramsOffered"));
const FeesStructure = lazy(() => import("./pages/FeesStructure"));
const FirstYearAdmission = lazy(() => import("./pages/FirstYearAdmission"));
const DirectSecondYearAdmission = lazy(() => import("./pages/DirectSecondYearAdmission"));
const Placements = lazy(() => import("./pages/Placements"));
const CareerServices = lazy(() => import("./pages/CareerServices"));
const TrainingPrograms = lazy(() => import("./pages/TrainingPrograms"));
const IndustryPartners = lazy(() => import("./pages/IndustryPartners"));
const AlumniNetwork = lazy(() => import("./pages/AlumniNetwork"));
const CampusLocation = lazy(() => import("./pages/CampusLocation"));
const Directions = lazy(() => import("./pages/Directions"));
const Hostel = lazy(() => import("./pages/Hostel"));
const LifeAtCampus = lazy(() => import("./pages/LifeAtCampus"));
const CulturalEvents = lazy(() => import("./pages/CulturalEvents"));
const VirtualTour = lazy(() => import("./pages/VirtualTour"));
const Helpdesk = lazy(() => import("./pages/Helpdesk"));
const ComputerEngineeringDepartment = lazy(() => import("./pages/ComputerEngineeringDepartment"));
const ETCDepartment = lazy(() => import("./pages/ETCDepartment"));
const MechanicalDepartment = lazy(() => import("./pages/MechanicalDepartment"));
const FirstYearDepartment = lazy(() => import("./pages/FirstYearDepartment"));
const BCADepartment = lazy(() => import("./pages/BCADepartment"));
const BBADepartment = lazy(() => import("./pages/BBADepartment"));
const AIDSDepartment = lazy(() => import("./pages/AIDSDepartment"));
const AIMLDepartment = lazy(() => import("./pages/AIMLDepartment"));
const CESA = lazy(() => import("./pages/CESA"));
const ETSA = lazy(() => import("./pages/ETSA"));
const MALSA = lazy(() => import("./pages/MALSA"));
const AISA = lazy(() => import("./pages/AISA"));
const StudentDashboard = lazy(() => import("./pages/StudentDashboard"));
const TeacherDashboard = lazy(() => import("./pages/TeacherDashboard"));
const ParentDashboard = lazy(() => import("./pages/ParentDashboard"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const PrincipalDashboard = lazy(() => import("./pages/PrincipalDashboard"));
const DeanDashboard = lazy(() => import("./pages/DeanDashboard"));
const HODDashboard = lazy(() => import("./pages/HODDashboard"));
const SuperAdminDashboard = lazy(() => import("./pages/SuperAdminDashboard"));
const AccountantDashboard = lazy(() => import("./pages/AccountantDashboard"));
const ReceptionDashboard = lazy(() => import("./pages/ReceptionDashboard"));
const SecurityDashboard = lazy(() => import("./pages/SecurityDashboard"));
const HostelDashboard = lazy(() => import("./pages/HostelDashboard"));
const AdmissionInquiry = lazy(() => import("./pages/AdmissionInquiry"));
const VisitorsBook = lazy(() => import("./pages/VisitorsBook"));
const Complaints = lazy(() => import("./pages/Complaints"));
const AllTeachers = lazy(() => import("./pages/AllTeachers"));
const WebsiteManagement = lazy(() => import("./pages/WebsiteManagement"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AllStudents = lazy(() => import('./pages/admin/students/AllStudents'));
const AddStudent = lazy(() => import('./pages/admin/students/AddStudent'));
const StudentAttendance = lazy(() => import('./pages/admin/students/StudentAttendance'));
const AllCourses = lazy(() => import('./pages/admin/courses/AllCourses'));
const AddCourse = lazy(() => import('./pages/admin/courses/AddCourse'));
const AllBooks = lazy(() => import('./pages/admin/library/AllBooks'));
const BookIssueReturn = lazy(() => import('./pages/admin/library/BookIssueReturn'));
const LibraryMembers = lazy(() => import('./pages/admin/library/LibraryMembers'));
const AllDepartments = lazy(() => import('./pages/admin/departments/AllDepartments'));
const AddDepartment = lazy(() => import('./pages/admin/departments/AddDepartment'));
const AdminAnnouncementManagerPage = lazy(() => import('./pages/admin/AnnouncementManager'));
const AnnouncementManager = lazy(() => import('./components/admin/AnnouncementManager'));

// Create a more robust query client with better error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        // Don't retry on 4xx errors
        if (error && typeof error === 'object' && 'status' in error) {
          const status = (error as any).status;
          if (status >= 400 && status < 500) {
            return false;
          }
        }
        return failureCount < 3;
      },
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <SessionTimeoutProvider>
              <TooltipProvider>
                <Suspense fallback={<LoadingFallback />}>
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
                </Suspense>
                <Toaster />
                <Sonner />
              </TooltipProvider>
            </SessionTimeoutProvider>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
