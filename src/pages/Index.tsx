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
import DebugPanel from '@/components/DebugPanel';
import { useSEO } from '@/hooks/useSEO';

const Index = () => {
  useSEO({
    title: "ISBM College of Engineering - Best Engineering College in Pune | NAAC B++ Accredited",
    description: "ISBM College of Engineering, Pune - Premier engineering institution affiliated to Savitribai Phule Pune University. NAAC B++ Accredited, AICTE Approved. Offering B.E. programs in CSE, AI/ML, Mechanical, Electronics. 95% placement record with top companies.",
    keywords: "ISBM College Engineering, Pune Engineering College, NAAC B++, AICTE Approved, Computer Science Engineering, Artificial Intelligence, Machine Learning, Mechanical Engineering, Electronics Engineering, Engineering Admissions Pune, Best Engineering College Maharashtra",
    canonical: "https://isbmcoe.edu.in",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "ISBM College of Engineering",
      "alternateName": "ISBM COE",
      "url": "https://isbmcoe.edu.in",
      "logo": "/lovable-uploads/18fee38c-1acf-462a-825a-cda10c5e7381.png",
      "image": "/lovable-uploads/18fee38c-1acf-462a-825a-cda10c5e7381.png",
      "description": "Premier engineering institution affiliated to Savitribai Phule Pune University with NAAC B++ accreditation",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "S.No 44/1, 44/1/2, Nande Village, Ahead of Pashan Sus Road",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "412115",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7410769206",
        "contactType": "Admissions",
        "email": "admissionscoe@isbm.ac.in"
      },
      "foundingDate": "2010",
      "accreditingBody": "NAAC",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "B++ Grade",
          "recognizedBy": {
            "@type": "Organization",
            "name": "National Assessment and Accreditation Council"
          }
        }
      ]
    }
  });

  useEffect(() => {
    // Add additional breadcrumb structured data for homepage
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
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript && existingScript.textContent === JSON.stringify(breadcrumbData)) {
        document.head.removeChild(existingScript);
      }
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
      <DebugPanel />
    </div>
  );
};

export default Index;
