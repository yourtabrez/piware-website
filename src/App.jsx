import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import TrustStrip from './components/sections/TrustStrip';
import CapabilitiesSection from './components/sections/CapabilitiesSection';
import TimelineSection from './components/sections/TimelineSection';
import ProcessSection from './components/sections/ProcessSection';
import IndustriesSection from './components/sections/IndustriesSection';
import WhyPiwareSection from './components/sections/WhyPiwareSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import TechStackSection from './components/sections/TechStackSection';
import ConsultationSection from './components/sections/ConsultationSection';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/scroll-to-top';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white relative">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <CapabilitiesSection />
        <TimelineSection />
        <ProcessSection />
        <IndustriesSection />
        <WhyPiwareSection />
        <TestimonialsSection />
        <TechStackSection />
        <ConsultationSection />
      </main>
      <Footer />
      {/* Floating Dynamic Circular Scroll Progress Tracker */}
      <ScrollToTop />
    </div>
  );
}
