import { useEffect } from 'react';
import { PopupProvider, usePopup } from './context/PopupContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Courses from './components/Courses/Courses';
import WhyChoose from './components/WhyChoose/WhyChoose';
import SalaryPackages from './components/SalaryPackages/SalaryPackages';
import PlacementPartners from './components/PlacementPartners/PlacementPartners';
import CTABanner from './components/CTABanner/CTABanner';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import AdmissionsBanner from './components/AdmissionsBanner/AdmissionsBanner';
import Footer from './components/Footer/Footer';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';
import ScholarshipPopup from './components/ScholarshipPopup/ScholarshipPopup';
import { Route, Routes } from 'react-router-dom';
import DemoSuccess from "./pages/DemoPage/DemoSuccess";
import ScholarshipSuccess from "./pages/ScholarshipPage/ScholarshipSuccess";

function AppContent() {
  const { scholarshipOpen, openScholarship, closeScholarship } = usePopup();
  useScrollReveal();

  // Auto-open the scholarship offer shortly after the app loads (entry popup).
  useEffect(() => {
    const timer = setTimeout(() => openScholarship(), 10000);
    return () => clearTimeout(timer);
  }, [openScholarship]);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <WhyChoose />
        <SalaryPackages />
        <PlacementPartners />
        <CTABanner />
        <Testimonials />
        <FAQ />
        <AdmissionsBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
      {scholarshipOpen && <ScholarshipPopup onClose={closeScholarship} />}
    </div>
  );
}

function App() {
  return (
     <PopupProvider>
      <Routes>
        <Route path={`${import.meta.env.VITE_BASE_URL}`} element={<AppContent />} />
        <Route  path={`${import.meta.env.VITE_BASE_URL}demo-success`} element={<DemoSuccess />} />
         <Route  path={`${import.meta.env.VITE_BASE_URL}scholarship-success`} element={<ScholarshipSuccess/>} />
      </Routes>
    </PopupProvider>
  );
}

export default App;
