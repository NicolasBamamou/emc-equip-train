import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import SpecializationPage from "./pages/SpecializationPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/specialization/:specializationId" element={<SpecializationPage />} />
            <Route path="/specialization/:specializationId/course/:courseId" element={<CourseDetailPage />} />
            <Route path="/course/:courseId" element={<CourseDetailPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
