
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
import FirstYearDepartment from "./pages/FirstYearDepartment";
import ComputerEngineeringDepartment from "./pages/ComputerEngineeringDepartment";
import AIMLDepartment from "./pages/AIMLDepartment";
import AIDSDepartment from "./pages/AIDSDepartment";
import MechanicalDepartment from "./pages/MechanicalDepartment";
import ETCDepartment from "./pages/ETCDepartment";
import BBADepartment from "./pages/BBADepartment";
import BCADepartment from "./pages/BCADepartment";
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
          <Route path="/first-year-department" element={<FirstYearDepartment />} />
          <Route path="/computer-engineering-department" element={<ComputerEngineeringDepartment />} />
          <Route path="/aiml-department" element={<AIMLDepartment />} />
          <Route path="/aids-department" element={<AIDSDepartment />} />
          <Route path="/mechanical-department" element={<MechanicalDepartment />} />
          <Route path="/etc-department" element={<ETCDepartment />} />
          <Route path="/bba-department" element={<BBADepartment />} />
          <Route path="/bca-department" element={<BCADepartment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
