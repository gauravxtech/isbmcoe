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
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80",
      cta: "Explore Programs",
      highlight: "NAAC B++ Accredited"
    },
    {
      id: 2,
      title: "World-Class Infrastructure",
      subtitle: "State-of-the-art Labs and Modern Campus Facilities",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1920&q=80",
      cta: "Campus Tour",
      highlight: "17 Acre Campus"
    },
    {
      id: 3,
      title: "Industry-Ready Graduates",
      subtitle: "95% Placement Rate with Top Companies",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80",
      cta: "Placement Records",
      highlight: "₹16 Lakhs Highest Package"
    }
  ];

  const announcements = [
    "🎓 Admissions Open for 2024-25 | Last Date: 30th June 2024",
    "🏆 International Conference on Multidisciplinary Emerging Trends in Engineering (ICMETET 2024)",
    "⭐ NAAC B++ Accredited Institution | Best Engineering College Award"
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
    <div className="relative">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-college-accent to-college-warning text-white py-3 px-4 overflow-hidden">
        <div className="flex animate-slide-in">
          <div className="flex items-center space-x-8 whitespace-nowrap">
            <Bell className="h-5 w-5 flex-shrink-0 animate-float" />
            {announcements.map((announcement, index) => (
              <span key={index} className="font-medium text-lg">
                {announcement}
              </span>
            ))}
          </div>
        </div>
      </div>

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
              <div className="absolute inset-0 bg-gradient-to-r from-college-primary/80 via-college-secondary/60 to-transparent" />
              <div className="relative z-10 flex items-center h-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl text-white">
                    <div className="inline-flex items-center bg-college-accent/90 px-4 py-2 rounded-full mb-6 animate-fade-in">
                      <Star className="h-4 w-4 mr-2" />
                      <span className="font-semibold">{banner.highlight}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up leading-tight">
                      {banner.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 animate-slide-up opacity-90 leading-relaxed">
                      {banner.subtitle}
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-college-accent to-college-warning hover:from-orange-600 hover:to-red-500 text-white px-8 py-4 text-lg rounded-full transform transition-all duration-300 hover:scale-105 shadow-2xl animate-slide-up"
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
      <div className="bg-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center space-x-12">
          <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-college-primary to-college-secondary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">SPPU</span>
            </div>
            <div>
              <span className="text-college-primary font-bold">Affiliated to</span>
              <p className="text-sm text-college-muted">Savitribai Phule Pune University</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-college-accent to-college-warning rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">AICTE</span>
            </div>
            <div>
              <span className="text-college-primary font-bold">Approved by</span>
              <p className="text-sm text-college-muted">All India Council for Technical Education</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-college-success to-college-teal rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">B++</span>
            </div>
            <div>
              <span className="text-college-primary font-bold">NAAC Accredited</span>
              <p className="text-sm text-college-muted">Grade B++ (2024)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Side Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        <Button className="bg-gradient-to-br from-college-primary to-college-secondary hover:scale-110 p-4 rounded-full shadow-xl transition-all duration-300 group">
          <FileText className="h-5 w-5 text-white group-hover:animate-pulse" />
        </Button>
        <Button className="bg-gradient-to-br from-college-accent to-college-warning hover:scale-110 p-4 rounded-full shadow-xl transition-all duration-300 group">
          <Phone className="h-5 w-5 text-white group-hover:animate-pulse" />
        </Button>
        <Button className="bg-gradient-to-br from-college-success to-college-teal hover:scale-110 p-4 rounded-full shadow-xl transition-all duration-300 group">
          <Download className="h-5 w-5 text-white group-hover:animate-pulse" />
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
