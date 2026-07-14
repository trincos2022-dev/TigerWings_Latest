import { useEffect } from "react";
import { PopupProvider, usePopup } from "./context/PopupContext";
import { useScrollReveal } from "./hooks/useScrollReveal";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Courses from "./components/Courses/Courses";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import SalaryPackages from "./components/SalaryPackages/SalaryPackages";
import PlacementPartners from "./components/PlacementPartners/PlacementPartners";
import CTABanner from "./components/CTABanner/CTABanner";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import AdmissionsBanner from "./components/AdmissionsBanner/AdmissionsBanner";
import Footer from "./components/Footer/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";
import ScholarshipPopup from "./components/ScholarshipPopup/ScholarshipPopup";
import { Route, Routes } from "react-router-dom";
import DemoSuccess from "./pages/DemoPage/DemoSuccess";
import ScholarshipSuccess from "./pages/ScholarshipPage/ScholarshipSuccess";

function AppContent() {
  const { scholarshipOpen, openScholarship, closeScholarship } = usePopup();
  useScrollReveal();

  // Auto-open the scholarship offer shortly after the app loads (entry popup).
  // useEffect(() => {
  //   const timer = setTimeout(() => openScholarship(), 10000);
  //   return () => clearTimeout(timer);
  // }, [openScholarship]);

  //  useEffect(() => {
  //   const POPUP_EXPIRY_DAYS = 2;
  //   const STORAGE_KEY = "scholarshipSubmittedAt";

  //   const submittedAt = localStorage.getItem(STORAGE_KEY);

  //   // Never submitted -> show popup after 10 seconds
  //   if (!submittedAt) {
  //     const timer = setTimeout(() => openScholarship(), 10000);
  //     return () => clearTimeout(timer);
  //   }

  //   // Check whether 30 days have passed
  //   const expiryTime =
  //     Number(submittedAt) +
  //     POPUP_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

  //   if (Date.now() >= expiryTime) {
  //     // Expired -> remove old value and show popup again
  //     localStorage.removeItem(STORAGE_KEY);

  //     const timer = setTimeout(() => openScholarship(), 10000);
  //     return () => clearTimeout(timer);
  //   }

  //   // Within 30 days -> don't show popup
  // }, [openScholarship]);
  useEffect(() => {
    const POPUP_EXPIRY_DAYS = 2;

    // Unique key for each landing page
    const STORAGE_KEY = `scholarshipSubmittedAt_${window.location.pathname}`;

    const submittedAt = localStorage.getItem(STORAGE_KEY);

    // If the user has never submitted on this page,
    // show the popup after 10 seconds.
    if (!submittedAt) {
      const timer = setTimeout(() => {
        openScholarship();
      }, 10000);

      return () => clearTimeout(timer);
    }

    // Check whether the expiry period has elapsed.
    const expiryTime =
      Number(submittedAt) + POPUP_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

    if (Date.now() >= expiryTime) {
      // Expired -> clear the old value and show the popup again.
      localStorage.removeItem(STORAGE_KEY);

      const timer = setTimeout(() => {
        openScholarship();
      }, 10000);

      return () => clearTimeout(timer);
    }

    // Within the expiry period -> don't show the popup.
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
        <Route
          path={`${import.meta.env.VITE_BASE_URL}`}
          element={<AppContent />}
        />
        <Route
          path={`${import.meta.env.VITE_BASE_URL}thank-you-page`}
          element={<DemoSuccess />}
        />
        <Route
          path={`${import.meta.env.VITE_BASE_URL}Scholarship-thank-you`}
          element={<ScholarshipSuccess />}
        />
      </Routes>
    </PopupProvider>
  );
}

export default App;
