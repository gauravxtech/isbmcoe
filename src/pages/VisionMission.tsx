
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const VisionMission = () => {
  useSEO({
    title: "Vision & Mission - ISBM College of Engineering",
    description: "Discover our vision and mission to create world-class engineers and contribute to technological advancement.",
    canonical: "https://isbmcoe.edu.in/vision-mission"
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Vision & Mission</h1>
            <p className="text-xl text-gray-600">
              Guiding principles that shape our educational excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-college-primary to-college-secondary text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To be a premier institution of technical education, recognized globally for 
                excellence in engineering education, research, and innovation, while fostering 
                ethical values and social responsibility among our students.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-college-accent to-college-warning text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To provide quality technical education through innovative teaching methods, 
                industry collaboration, and research activities that prepare competent engineers 
                to meet global challenges and contribute to society's technological advancement.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-college-primary mb-3">Excellence</h4>
                <p className="text-gray-700">
                  Striving for the highest standards in education, research, and service.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-college-primary mb-3">Innovation</h4>
                <p className="text-gray-700">
                  Fostering creativity and encouraging new ideas in learning and research.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-college-primary mb-3">Integrity</h4>
                <p className="text-gray-700">
                  Maintaining ethical standards and honesty in all our endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VisionMission;
