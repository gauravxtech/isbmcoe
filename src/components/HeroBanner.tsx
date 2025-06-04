
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Bell, FileText, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: "Excellence in Engineering Education",
      subtitle: "NAAC B++ Accredited | Affiliated to Savitribai Phule Pune University",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80",
      cta: "Explore Programs"
    },
    {
      id: 2,
      title: "World-Class Infrastructure in Pune",
      subtitle: "17 Acre Campus at Nande Village with Modern Facilities",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
      cta: "Campus Tour"
    },
    {
      id: 3,
      title: "Outstanding Placement Record",
      subtitle: "16 Lakhs Highest Package | 75% Placement Rate | 130+ Companies",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80",
      cta: "Placement Records"
    }
  ];

  const announcements = [
    "Admissions are open for first year & Direct second year Engineering",
    "International Conference on Multidisciplinary Emerging Trends in Engineering and Technology (ICMETET 2024)",
    "NAAC B++ Accredited Institution | AICTE Approved | DTE Code: EN6622"
  ];

  const affiliations = [
    { name: "SPPU", logo: "SPPU", fullName: "Savitribai Phule Pune University" },
    { name: "AICTE", logo: "AICTE", fullName: "All India Council for Technical Education" },
    { name: "NAAC B++", logo: "NAAC", fullName: "National Assessment and Accreditation Council" },
    { name: "DTE", logo: "DTE", fullName: "Directorate of Technical Education" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative mt-16">
      {/* Announcement Bar */}
      <div className="bg-red-600 text-white py-2 px-4 overflow-hidden">
        <div className="flex animate-slide-in">
          <div className="flex items-center space-x-8 whitespace-nowrap">
            <Bell className="h-4 w-4 flex-shrink-0" />
            {announcements.map((announcement, index) => (
              <span key={index} className="font-medium">
                {announcement}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Banner */}
      <div className="relative h-[600px] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white max-w-4xl px-4">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                    {banner.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 animate-fade-in">
                    {banner.subtitle}
                  </p>
                  <Button 
                    className="bg-college-accent hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full transform transition-all duration-300 hover:scale-105"
                  >
                    {banner.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Affiliation Badges */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center space-x-8">
          {affiliations.map((affiliation, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-college-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">{affiliation.logo}</span>
              </div>
              <div className="text-center">
                <span className="text-college-dark font-semibold text-sm block">{affiliation.name}</span>
                <span className="text-gray-500 text-xs">{affiliation.fullName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Side Buttons */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        <Button className="bg-college-primary hover:bg-blue-800 p-3 rounded-full shadow-lg" title="RTI">
          <FileText className="h-5 w-5 text-white" />
        </Button>
        <Button className="bg-college-secondary hover:bg-blue-600 p-3 rounded-full shadow-lg" title="Request Callback">
          <Phone className="h-5 w-5 text-white" />
        </Button>
        <Button className="bg-college-accent hover:bg-orange-600 p-3 rounded-full shadow-lg" title="Get Brochure">
          <Download className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
