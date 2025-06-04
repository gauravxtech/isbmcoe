
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Cpu, Settings, Monitor, Zap, Brain, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProgramsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  const programs = [
    {
      id: 1,
      title: "Artificial Intelligence",
      subtitle: "& Machine Learning",
      icon: <Brain className="h-12 w-12" />,
      description: "Advanced AI and ML curriculum with hands-on projects and industry exposure",
      duration: "4 Years",
      seats: "60",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      subtitle: "& Data Science",
      icon: <Database className="h-12 w-12" />,
      description: "Comprehensive data science program with AI integration and analytics focus",
      duration: "4 Years",
      seats: "60",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 3,
      title: "Computer Science",
      subtitle: "Engineering",
      icon: <Monitor className="h-12 w-12" />,
      description: "Core computer science program with software development and programming",
      duration: "4 Years",
      seats: "120",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Computer",
      subtitle: "Engineering",
      icon: <Cpu className="h-12 w-12" />,
      description: "Hardware-software integration with computer systems and architecture",
      duration: "4 Years",
      seats: "60",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 5,
      title: "Mechanical",
      subtitle: "Engineering",
      icon: <Settings className="h-12 w-12" />,
      description: "Traditional engineering with modern manufacturing and automation",
      duration: "4 Years",
      seats: "120",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Electronics Engineering",
      subtitle: "(VLSI & Design)",
      icon: <Zap className="h-12 w-12" />,
      description: "Advanced electronics with VLSI design and embedded systems",
      duration: "4 Years",
      seats: "60",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoSliding) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % programs.length);
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoSliding, programs.length]);

  const nextProgram = () => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
    setIsAutoSliding(false); // Pause auto-slide when user manually navigates
    setTimeout(() => setIsAutoSliding(true), 8000); // Resume after 8 seconds
  };

  const prevProgram = () => {
    setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
    setIsAutoSliding(false); // Pause auto-slide when user manually navigates
    setTimeout(() => setIsAutoSliding(true), 8000); // Resume after 8 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoSliding(false);
    setTimeout(() => setIsAutoSliding(true), 8000);
  };

  return (
    <section className="py-16 bg-college-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-college-dark mb-4">
            Our Engineering Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of AICTE approved engineering programs designed to meet 
            industry demands and prepare you for a successful career in technology and innovation.
          </p>
        </div>

        <div className="relative">
          {/* Desktop View - Show 3 cards at a time */}
          <div className="hidden md:block">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {programs.map((program) => (
                  <div key={program.id} className="w-1/3 flex-shrink-0 px-3">
                    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                      <CardContent className="p-6">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          <div className="text-white">
                            {program.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2 text-college-dark">
                          {program.title}
                        </h3>
                        <p className="text-college-primary text-center font-semibold mb-4">
                          {program.subtitle}
                        </p>
                        <p className="text-gray-600 text-center mb-6">
                          {program.description}
                        </p>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Duration: {program.duration}</span>
                          <span>Seats: {program.seats}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevProgram}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
            >
              <ChevronLeft className="h-6 w-6 text-college-primary" />
            </button>
            <button
              onClick={nextProgram}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
            >
              <ChevronRight className="h-6 w-6 text-college-primary" />
            </button>

            {/* Desktop Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-college-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile View - Show 1 card at a time */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {programs.map((program) => (
                  <div key={program.id} className="w-full flex-shrink-0 px-4">
                    <Card className="shadow-lg">
                      <CardContent className="p-6">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center mb-6 mx-auto`}>
                          <div className="text-white">
                            {program.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2 text-college-dark">
                          {program.title}
                        </h3>
                        <p className="text-college-primary text-center font-semibold mb-4">
                          {program.subtitle}
                        </p>
                        <p className="text-gray-600 text-center mb-6">
                          {program.description}
                        </p>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Duration: {program.duration}</span>
                          <span>Seats: {program.seats}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <button
              onClick={prevProgram}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-college-primary" />
            </button>
            <button
              onClick={nextProgram}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6 text-college-primary" />
            </button>

            {/* Mobile Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-college-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsCarousel;
