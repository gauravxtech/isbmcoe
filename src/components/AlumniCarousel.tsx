
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AlumniCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselType, setCarouselType] = useState('alumni');

  const alumni = [
    {
      id: 1,
      name: "Narayani Thakur",
      company: "TATA Technologies",
      role: "SAP Consultant",
      batch: "2014",
      branch: "IT",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face",
      testimonial: "ISBM gave me the foundation to excel in the tech industry."
    },
    {
      id: 2,
      name: "Ameya Deokar",
      company: "Ebara Corporation",
      role: "Corporate Strategy Specialist",
      batch: "2014",
      branch: "Mechanical",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial: "The practical approach to learning shaped my career."
    },
    {
      id: 3,
      name: "Swapnil Belorkar",
      company: "Mastercard",
      role: "Software Engineer II",
      batch: "2016",
      branch: "Computer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: "Best decision was choosing ISBM for my engineering."
    },
    {
      id: 4,
      name: "Komal Detake",
      company: "Tata Communications",
      role: "Associate Engineer",
      batch: "2021",
      branch: "Computer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial: "The faculty support and infrastructure are world-class."
    },
    {
      id: 5,
      name: "Prasad Bagul",
      company: "Cummins India",
      role: "Senior Design Engineer",
      batch: "2017",
      branch: "Mechanical",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      testimonial: "Excellent learning environment with industry exposure."
    },
    {
      id: 6,
      name: "Gourang Amrujkar",
      company: "Qualcomm",
      role: "Staff Demand Analyst",
      batch: "2016",
      branch: "Mechanical",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      testimonial: "Great platform for career growth and development."
    }
  ];

  const entrepreneurs = [
    {
      id: 1,
      name: "Hardik Patil",
      company: "Stackmint Pvt.Ltd",
      title: "Co-Founder",
      batch: "2010-14",
      branch: "Computer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      achievement: "Leading Tech Solutions Provider"
    },
    {
      id: 2,
      name: "Pratik Gokhale",
      company: "GypsyDays",
      title: "Founder",
      batch: "2011-15",
      branch: "Mechanical",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      achievement: "Travel & Tourism Pioneer"
    },
    {
      id: 3,
      name: "Rahul Jayaswal",
      company: "Stackmint Pvt.Ltd",
      title: "Founder",
      batch: "2011-15",
      branch: "Mechanical",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      achievement: "Innovation in Technology"
    },
    {
      id: 4,
      name: "Siddharth Paralikar",
      company: "Siddharth Solar Tech",
      title: "Founder",
      batch: "2010-14",
      branch: "Mechanical",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      achievement: "Renewable Energy Solutions"
    }
  ];

  const currentData = carouselType === 'alumni' ? alumni : entrepreneurs;
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, currentData.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Toggle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-college-dark mb-6">
            Our Success Stories
          </h2>
          
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => {
                  setCarouselType('alumni');
                  setCurrentIndex(0);
                }}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  carouselType === 'alumni'
                    ? 'bg-college-primary text-white'
                    : 'text-college-primary hover:bg-gray-100'
                }`}
              >
                Top Alumni
              </button>
              <button
                onClick={() => {
                  setCarouselType('entrepreneurs');
                  setCurrentIndex(0);
                }}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  carouselType === 'entrepreneurs'
                    ? 'bg-college-primary text-white'
                    : 'text-college-primary hover:bg-gray-100'
                }`}
              >
                Entrepreneurs
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {currentData.map((person) => (
                <div key={person.id} className="w-1/3 flex-shrink-0 px-3">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className="mb-6">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-bold text-college-dark mb-1">
                          {person.name}
                        </h3>
                        <p className="text-college-primary font-semibold mb-1">
                          {person.company}
                        </p>
                        <p className="text-gray-600 mb-3">
                          {carouselType === 'alumni' ? person.role : person.title}
                        </p>
                        <div className="flex justify-center space-x-4 text-sm text-gray-500 mb-4">
                          <span>Batch: {person.batch}</span>
                          <span>•</span>
                          <span>{person.branch}</span>
                        </div>
                      </div>
                      
                      {carouselType === 'alumni' ? (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-700 italic text-sm">
                            "{person.testimonial}"
                          </p>
                        </div>
                      ) : (
                        <div className="bg-college-primary bg-opacity-10 p-4 rounded-lg">
                          <p className="text-college-primary font-semibold">
                            {person.achievement}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-6 w-6 text-college-primary" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-6 w-6 text-college-primary" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-college-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniCarousel;
