
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const Placements = () => {
  useSEO({
    title: "Placements - ISBM College of Engineering",
    description: "Excellent placement records with top companies. Join our successful alumni working in leading organizations.",
    canonical: "https://isbmcoe.edu.in/placements"
  });

  const companies = [
    "TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "HCL", "Tech Mahindra", "IBM",
    "Microsoft", "Google", "Amazon", "Flipkart", "Zomato", "Paytm", "BYJU'S", "Swiggy"
  ];

  const stats = [
    { label: "Highest Package", value: "₹16 LPA", icon: "🎯" },
    { label: "Average Package", value: "₹4.5 LPA", icon: "📊" },
    { label: "Placement Rate", value: "75%", icon: "📈" },
    { label: "Companies Visited", value: "150+", icon: "🏢" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Placements</h1>
            <p className="text-xl text-gray-600">
              Empowering careers with exceptional placement opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-college-primary mb-1">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Recruiting Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {companies.map((company, index) => (
                <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-700">{company}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Placement Process</h3>
              <div className="space-y-4">
                {[
                  { step: "Pre-placement Training", desc: "Comprehensive training on aptitude, technical skills, and soft skills" },
                  { step: "Resume Building", desc: "Professional resume creation and review sessions" },
                  { step: "Mock Interviews", desc: "Practice sessions with industry experts and alumni" },
                  { step: "Company Visits", desc: "Regular campus recruitment drives by top companies" },
                  { step: "Final Placements", desc: "Multiple job offers and career guidance" }
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-college-primary pl-4">
                    <h4 className="font-semibold text-gray-900">{item.step}</h4>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Success Stories</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-college-accent pl-4">
                  <h4 className="font-semibold text-college-primary">Rahul Sharma - TCS</h4>
                  <p className="text-gray-700 text-sm mb-2">Computer Engineering, 2023</p>
                  <p className="text-gray-600 text-sm">"The placement training at ISBM helped me secure my dream job at TCS with a great package."</p>
                </div>
                
                <div className="border-l-4 border-college-accent pl-4">
                  <h4 className="font-semibold text-college-primary">Priya Patel - Microsoft</h4>
                  <p className="text-gray-700 text-sm mb-2">AI & ML Engineering, 2023</p>
                  <p className="text-gray-600 text-sm">"The technical skills and project experience gained here opened doors to Microsoft."</p>
                </div>
                
                <div className="border-l-4 border-college-accent pl-4">
                  <h4 className="font-semibold text-college-primary">Amit Kumar - Amazon</h4>
                  <p className="text-gray-700 text-sm mb-2">Computer Engineering, 2022</p>
                  <p className="text-gray-600 text-sm">"ISBM's industry connections and alumni network helped me land at Amazon."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Placements;
