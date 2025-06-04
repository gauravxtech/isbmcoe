
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import ProgramsCarousel from '@/components/ProgramsCarousel';
import CollegeOverview from '@/components/CollegeOverview';
import AlumniCarousel from '@/components/AlumniCarousel';
import PlacementMetrics from '@/components/PlacementMetrics';
import NewsEvents from '@/components/NewsEvents';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <ProgramsCarousel />
      <CollegeOverview />
      <AlumniCarousel />
      <PlacementMetrics />
      <NewsEvents />
      <Footer />
    </div>
  );
};

export default Index;
