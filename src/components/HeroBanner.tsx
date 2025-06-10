
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Bell, FileText, Phone, Download, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: "Excellence in Engineering Education",
      subtitle: "Shaping Future Engineers with Innovation and Technology",
      image: "/lovable-uploads/a07dab32-a06d-4aa9-ab59-2d061f93201f.png",
      cta: "Explore Programs",
      highlight: "NAAC B++ Accredited"
    },
    {
      id: 2,
      title: "World-Class Infrastructure", 
      subtitle: "State-of-the-art Labs and Modern Campus Facilities",
      image: "/lovable-uploads/b592b170-56b4-4e52-b3ff-c4f500363b94.png",
      cta: "Campus Tour",
      highlight: "17 Acre Campus"
    },
    {
      id: 3,
      title: "Industry Recognition",
      subtitle: "Approved by AICTE, Affiliated to SPPU & Promoted by IIT-ians",
      image: "/lovable-uploads/c63a8ec4-3adb-47a0-9e29-d081de2cff06.png",
      cta: "Our Accreditations",
      highlight: "Promoted by IIT-ians"
    },
    {
      id: 4,
      title: "Industry-Ready Graduates",
      subtitle: "75% Placement Rate with Top Companies",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80",
      cta: "Placement Records",
      highlight: "₹16 Lakhs Highest Package"
    },
    {
      id: 5,
      title: "Research & Innovation",
      subtitle: "Pioneering Technology Solutions for Tomorrow",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80",
      cta: "Research Programs",
      highlight: "Leading Innovation"
    }
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
    <div className="relative">
      {/* Main Banner */}
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-college-primary/80 via-college-secondary/60 to-transparent" />
              <div className="relative z-10 flex items-center h-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl text-white">
                    <div className="inline-flex items-center bg-college-accent/90 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 animate-fade-in">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      <span className="font-semibold text-sm sm:text-base">{banner.highlight}</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 animate-slide-up leading-tight">
                      {banner.title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 animate-slide-up opacity-90 leading-relaxed">
                      {banner.subtitle}
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-college-accent to-college-warning hover:from-orange-600 hover:to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transform transition-all duration-300 hover:scale-105 shadow-2xl animate-slide-up"
                    >
                      {banner.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Affiliation Badges - Responsive */}
      <div className="bg-white py-4 sm:py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-12">
            <div className="flex items-center justify-center space-x-3 group hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-college-primary to-college-secondary rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white font-bold text-xs sm:text-sm">SPPU</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-college-primary font-bold text-sm sm:text-base block">Affiliated to</span>
                <p className="text-xs sm:text-sm text-college-muted">Savitribai Phule Pune University</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 group hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-college-accent to-college-warning rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white font-bold text-xs sm:text-sm">AICTE</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-college-primary font-bold text-sm sm:text-base block">Approved by</span>
                <p className="text-xs sm:text-sm text-college-muted">All India Council for Technical Education</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 group hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-college-success to-college-teal rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white font-bold text-xs sm:text-sm">B++</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-college-primary font-bold text-sm sm:text-base block">NAAC Accredited</span>
                <p className="text-xs sm:text-sm text-college-muted">Grade B++ (2024)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Vertical Action Buttons - Hidden on mobile to prevent overlap */}
      <div className="hidden lg:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex-col space-y-4">
        <div className="group">
          <Button className="bg-gradient-to-br from-college-primary to-college-secondary hover:scale-110 p-4 rounded-full shadow-xl transition-all duration-300 relative">
            <FileText className="h-6 w-6 text-white" />
            <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Download Documents
            </span>
          </Button>
        </div>
        
        <div className="group">
          <Button className="bg-gradient-to-br from-college-accent to-college-warning hover:scale-110 p-4 rounded-full shadow-xl transition-all duration-300 relative">
            <Phone className="h-6 w-6 text-white" />
            <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Call Now
            </span>
          </Button>
        </div>
        
        <div className="group">
          <Button className="bg-gradient-to-br from-college-success to-college-teal hover:scale-110 p-4 rounded-full shadow-xl transition-all duration-300 relative">
            <Download className="h-6 w-6 text-white" />
            <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Download Brochure
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
