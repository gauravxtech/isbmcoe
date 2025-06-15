
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const About = () => {
  useSEO({
    title: "About ISBM College of Engineering - Premier Engineering Institution",
    description: "Learn about ISBM College of Engineering, a premier institution offering quality technical education with NAAC B++ accreditation.",
    canonical: "https://isbmcoe.edu.in/about"
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About ISBM College of Engineering</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering excellence in technical education with a commitment to innovation, quality, and student success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Legacy</h2>
              <p className="text-gray-700 mb-4">
                ISBM College of Engineering stands as a beacon of excellence in technical education. 
                Established with a vision to create competent engineers and technologists, we have 
                consistently delivered quality education that meets industry standards.
              </p>
              <p className="text-gray-700 mb-4">
                Our institution is proud to be NAAC B++ accredited, reflecting our commitment to 
                maintaining the highest standards in education, infrastructure, and student development.
              </p>
              <p className="text-gray-700">
                With state-of-the-art facilities, experienced faculty, and strong industry connections, 
                we prepare our students for successful careers in engineering and technology.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-college-primary mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-accent rounded-full mr-3"></span>
                  NAAC B++ Accredited Institution
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-accent rounded-full mr-3"></span>
                  Extended Library & Lab Access
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-accent rounded-full mr-3"></span>
                  Industry-Oriented Curriculum
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-accent rounded-full mr-3"></span>
                  Experienced Faculty
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-accent rounded-full mr-3"></span>
                  Strong Placement Record
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-accent rounded-full mr-3"></span>
                  Modern Infrastructure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
