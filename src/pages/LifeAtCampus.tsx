
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CampusLifeHighlights from '../components/campus/CampusLifeHighlights';
import StudentClubsSection from '../components/campus/StudentClubsSection';
import SportsRecreationSection from '../components/campus/SportsRecreationSection';
import CampusFacilitiesSection from '../components/campus/CampusFacilitiesSection';
import UpcomingEventsSection from '../components/campus/UpcomingEventsSection';

const LifeAtCampus = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Life @ Campus
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Experience vibrant campus life with diverse opportunities for learning, growth, and memorable experiences
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CampusLifeHighlights />
        <StudentClubsSection />
        <SportsRecreationSection />
        <CampusFacilitiesSection />
        <UpcomingEventsSection />
      </div>

      <Footer />
    </div>
  );
};

export default LifeAtCampus;
