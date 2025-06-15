
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const FirstYearAdmission = () => {
  useSEO({
    title: "First Year Admission - ISBM College of Engineering",
    description: "Apply for first year engineering admission at ISBM College of Engineering. Learn about eligibility, process, and important dates.",
    canonical: "https://isbmcoe.edu.in/first-year-admission"
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">First Year Admission</h1>
            <p className="text-xl text-gray-600">
              Start your engineering journey with us - Apply for First Year Engineering Programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-college-primary mb-2">Academic Qualification</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Passed 10+2 or equivalent with Physics, Chemistry, and Mathematics</li>
                      <li>• Minimum 45% aggregate marks (40% for reserved categories)</li>
                      <li>• Mathematics as a compulsory subject</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-college-primary mb-2">Entrance Exam</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Valid MHT-CET score (Maharashtra Common Entrance Test)</li>
                      <li>• JEE Main score also accepted</li>
                      <li>• Admission through CAP (Centralized Admission Process)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Admission Process</h2>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Online Registration", desc: "Register on DTE Maharashtra portal" },
                    { step: "2", title: "Document Upload", desc: "Upload all required documents" },
                    { step: "3", title: "Choice Filling", desc: "Fill college and course preferences" },
                    { step: "4", title: "Seat Allocation", desc: "CAP rounds for seat allotment" },
                    { step: "5", title: "Reporting", desc: "Report to allotted college" },
                    { step: "6", title: "Admission Confirmation", desc: "Pay fees and confirm admission" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-college-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-college-primary to-college-secondary text-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Important Dates 2024-25</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">MHT-CET Exam</p>
                    <p className="text-sm opacity-90">April - May 2024</p>
                  </div>
                  <div>
                    <p className="font-semibold">Registration Start</p>
                    <p className="text-sm opacity-90">June 15, 2024</p>
                  </div>
                  <div>
                    <p className="font-semibold">Last Date</p>
                    <p className="text-sm opacity-90">June 30, 2024</p>
                  </div>
                  <div>
                    <p className="font-semibold">CAP Rounds</p>
                    <p className="text-sm opacity-90">July 2024</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact for Admission</h3>
                <div className="space-y-3 text-gray-700">
                  <p>📞 <strong>Phone:</strong> 7410769206</p>
                  <p>📧 <strong>Email:</strong> admissionscoe@isbm.ac.in</p>
                  <p>🕒 <strong>Timing:</strong> 9 AM - 5 PM</p>
                  <p>📍 <strong>Address:</strong> ISBM College of Engineering, Pune</p>
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

export default FirstYearAdmission;
