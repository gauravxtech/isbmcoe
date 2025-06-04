
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import ProgramsCarousel from '@/components/ProgramsCarousel';
import CollegeOverview from '@/components/CollegeOverview';
import AlumniCarousel from '@/components/AlumniCarousel';
import PlacementMetrics from '@/components/PlacementMetrics';
import NewsEvents from '@/components/NewsEvents';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  useEffect(() => {
    // Add structured data for better SEO
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://isbmcoe.edu.in"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-college-light">
      <Header />
      <Navbar />
      <main>
        <HeroBanner />
        <ProgramsCarousel />
        <CollegeOverview />
        <AlumniCarousel />
        <PlacementMetrics />
        <NewsEvents />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
