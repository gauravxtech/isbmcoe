
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const Administration = () => {
  useSEO({
    title: "Administration - ISBM College of Engineering",
    description: "Meet our administrative team and leadership committed to educational excellence.",
    canonical: "https://isbmcoe.edu.in/administration"
  });

  const administrativeTeam = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal",
      qualification: "Ph.D. in Computer Science",
      experience: "25+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Prof. Sunita Sharma",
      position: "Vice Principal",
      qualification: "M.Tech in Electronics",
      experience: "20+ Years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9e6d45e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Amit Patel",
      position: "Dean Academics",
      qualification: "Ph.D. in Mechanical Engineering",
      experience: "22+ Years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Administration</h1>
            <p className="text-xl text-gray-600">
              Meet our dedicated leadership team committed to educational excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {administrativeTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-college-primary font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-700 mb-1">{member.qualification}</p>
                  <p className="text-gray-600">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Administration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-college-primary mb-3">Principal's Office</h3>
                <p className="text-gray-700 mb-2">📞 Phone: +91 20 1234 5678</p>
                <p className="text-gray-700 mb-2">📧 Email: principal@isbmcoe.edu.in</p>
                <p className="text-gray-700">🕒 Office Hours: 9:00 AM - 5:00 PM</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-college-primary mb-3">Academic Office</h3>
                <p className="text-gray-700 mb-2">📞 Phone: +91 20 1234 5679</p>
                <p className="text-gray-700 mb-2">📧 Email: academics@isbmcoe.edu.in</p>
                <p className="text-gray-700">🕒 Office Hours: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Administration;
