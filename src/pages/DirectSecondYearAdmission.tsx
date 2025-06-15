
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const DirectSecondYearAdmission = () => {
  useSEO({
    title: "Direct Second Year Admission - ISBM College of Engineering",
    description: "Apply for direct second year engineering admission for diploma holders at ISBM College of Engineering.",
    canonical: "https://isbmcoe.edu.in/direct-second-year-admission"
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Direct Second Year Admission</h1>
            <p className="text-xl text-gray-600">
              Fast-track your engineering degree - Direct admission to Second Year for Diploma holders
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
                      <li>• Diploma in Engineering (3 years) from AICTE approved institution</li>
                      <li>• Minimum 45% aggregate marks (40% for reserved categories)</li>
                      <li>• Diploma branch should be relevant to the Engineering branch</li>
                      <li>• Valid domicile certificate (for state quota)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-college-primary mb-2">Branch Mapping</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      <div>
                        <p className="font-semibold">Computer Engineering</p>
                        <ul className="text-sm space-y-1">
                          <li>• Computer Engineering</li>
                          <li>• Information Technology</li>
                          <li>• Computer Science</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Mechanical Engineering</p>
                        <ul className="text-sm space-y-1">
                          <li>• Mechanical Engineering</li>
                          <li>• Production Engineering</li>
                          <li>• Automobile Engineering</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Admission Process</h2>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Online Application", desc: "Apply through DTE Maharashtra portal" },
                    { step: "2", title: "Document Verification", desc: "Submit all required documents" },
                    { step: "3", title: "Merit List", desc: "Based on diploma marks" },
                    { step: "4", title: "Counseling", desc: "Attend counseling session" },
                    { step: "5", title: "Seat Allocation", desc: "Seat allotment as per merit" },
                    { step: "6", title: "Admission", desc: "Complete admission formalities" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-college-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
              <div className="bg-gradient-to-br from-college-accent to-college-warning text-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Advantages</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Complete B.E. in 3 years instead of 4</li>
                  <li>• Industry-relevant curriculum</li>
                  <li>• Modern laboratories</li>
                  <li>• Placement assistance</li>
                  <li>• Experienced faculty</li>
                  <li>• Industry partnerships</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Required Documents</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Diploma Certificate & Marksheets</li>
                  <li>• 10th & 12th Certificates</li>
                  <li>• Domicile Certificate</li>
                  <li>• Caste Certificate (if applicable)</li>
                  <li>• Gap Certificate (if any)</li>
                  <li>• Passport size photographs</li>
                  <li>• Aadhar Card</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-700">
                  <p>📞 <strong>Phone:</strong> 7410769206</p>
                  <p>📧 <strong>Email:</strong> admissionscoe@isbm.ac.in</p>
                  <p>🕒 <strong>Timing:</strong> 9 AM - 5 PM</p>
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

export default DirectSecondYearAdmission;
