
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';
import { Link } from 'react-router-dom';

const ProgramsOffered = () => {
  useSEO({
    title: "Programs Offered - ISBM College of Engineering",
    description: "Explore our comprehensive range of undergraduate and postgraduate engineering programs.",
    canonical: "https://isbmcoe.netlify.app/programs-offered"
  });

  const programs = [
    {
      name: "Computer Engineering",
      duration: "4 Years",
      seats: "60",
      type: "B.E.",
      link: "/departments/computer-engineering"
    },
    {
      name: "AI & Machine Learning",
      duration: "4 Years",
      seats: "60",
      type: "B.E.",
      link: "/departments/aiml"
    },
    {
      name: "AI & Data Science",
      duration: "4 Years",
      seats: "60",
      type: "B.E.",
      link: "/departments/aids"
    },
    {
      name: "Mechanical Engineering",
      duration: "4 Years",
      seats: "60",
      type: "B.E.",
      link: "/departments/mechanical-engineering"
    },
    {
      name: "Electronics Engineering (VLSI)",
      duration: "4 Years",
      seats: "60",
      type: "B.E.",
      link: "/departments/electronics-telecommunication"
    },
    {
      name: "Bachelor of Computer Application",
      duration: "3 Years",
      seats: "60",
      type: "BCA",
      link: "/departments/bca"
    },
    {
      name: "Bachelor of Business Administration",
      duration: "3 Years",
      seats: "60",
      type: "BBA",
      link: "/departments/bba"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Programs Offered</h1>
            <p className="text-xl text-gray-600">
              Choose from our comprehensive range of undergraduate programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <span className="inline-block bg-college-primary text-white text-sm px-3 py-1 rounded-full">
                    {program.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Duration:</span> {program.duration}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Seats:</span> {program.seats}
                  </p>
                </div>
                <Link 
                  to={program.link}
                  className="inline-block bg-college-accent hover:bg-college-warning text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admission Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-college-primary mb-3">Eligibility Criteria</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 10+2 with Physics, Chemistry, and Mathematics</li>
                  <li>• Minimum 45% aggregate marks (40% for reserved categories)</li>
                  <li>• Valid MHT-CET/JEE Main score</li>
                  <li>• Age limit as per university norms</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-college-primary mb-3">Application Process</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Online application through DTE Maharashtra</li>
                  <li>• Document verification</li>
                  <li>• Counseling and seat allocation</li>
                  <li>• Fee payment and admission confirmation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgramsOffered;
