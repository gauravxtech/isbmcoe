
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
      <div className="relative h-[70vh] overflow-hidden">
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
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/70 to-transparent" />
              <div className="relative z-10 flex items-center h-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl text-white">
                    <div className="inline-flex items-center bg-gradient-to-r from-blue-500/90 to-indigo-500/90 px-6 py-3 rounded-full mb-6 animate-fade-in backdrop-blur-sm">
                      <Star className="h-5 w-5 mr-2 text-yellow-300" />
                      <span className="font-semibold text-sm md:text-base">{banner.highlight}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text">
                      {banner.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 animate-slide-up opacity-90 leading-relaxed">
                      {banner.subtitle}
                    </p>
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg rounded-full transform transition-all duration-300 hover:scale-105 shadow-2xl animate-slide-up font-semibold">
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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Affiliation Badges */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 py-8 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Mobile Layout */}
          <div className="block md:hidden space-y-6">
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">SPPU</span>
              </div>
              <div className="text-center">
                <span className="text-slate-800 font-bold text-lg block">Affiliated to</span>
                <p className="text-sm text-slate-600 mt-1">Savitribai Phule Pune University</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">AICTE</span>
              </div>
              <div className="text-center">
                <span className="text-slate-800 font-bold text-lg block">Approved by</span>
                <p className="text-sm text-slate-600 mt-1">All India Council for Technical Education</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">B++</span>
              </div>
              <div className="text-center">
                <span className="text-slate-800 font-bold text-lg block">NAAC Accredited</span>
                <p className="text-sm text-slate-600 mt-1">Grade B++ (2024)</p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-center items-center space-x-12">
            <div className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300 p-4 rounded-2xl hover:bg-white/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-lg">SPPU</span>
              </div>
              <div>
                <span className="text-slate-800 font-bold text-lg">Affiliated to</span>
                <p className="text-sm text-slate-600">Savitribai Phule Pune University</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300 p-4 rounded-2xl hover:bg-white/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-lg">AICTE</span>
              </div>
              <div>
                <span className="text-slate-800 font-bold text-lg">Approved by</span>
                <p className="text-sm text-slate-600">All India Council for Technical Education</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300 p-4 rounded-2xl hover:bg-white/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-lg">B++</span>
              </div>
              <div>
                <span className="text-slate-800 font-bold text-lg">NAAC Accredited</span>
                <p className="text-sm text-slate-600">Grade B++ (2024)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Vertical Action Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
        <div className="group">
          <Button className="bg-gradient-to-br from-slate-800 to-blue-800 hover:scale-110 p-4 rounded-full shadow-xl transition-all duration-300 relative">
            <FileText className="h-6 w-6 text-white" />
            <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Download Documents
            </span>
          </Button>
        </div>
        
        <div className="group">
          <Button className="bg-gradient-to-br from-blue-600 to-indigo-600 hover:scale-110 p-4 rounded-full shadow-xl transition-all duration-300 relative">
            <Phone className="h-6 w-6 text-white" />
            <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Call Now
            </span>
          </Button>
        </div>
        
        <div className="group">
          <Button className="bg-gradient-to-br from-green-500 to-emerald-500 hover:scale-110 p-4 rounded-full shadow-xl transition-all duration-300 relative">
            <Download className="h-6 w-6 text-white" />
            <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Download Brochure
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
