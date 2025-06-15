
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const FeesStructure = () => {
  useSEO({
    title: "Fee Structure - ISBM College of Engineering",
    description: "Detailed fee structure for all programs at ISBM College of Engineering with scholarship information.",
    canonical: "https://isbmcoe.edu.in/fees-structure"
  });

  const engineeringFees = [
    { particular: "Tuition Fee", amount: "₹85,000" },
    { particular: "Development Fee", amount: "₹15,000" },
    { particular: "Library Fee", amount: "₹2,000" },
    { particular: "Laboratory Fee", amount: "₹8,000" },
    { particular: "Sports & Cultural Fee", amount: "₹1,500" },
    { particular: "Examination Fee", amount: "₹2,500" },
    { particular: "Total Annual Fee", amount: "₹1,14,000" }
  ];

  const managementFees = [
    { particular: "Tuition Fee", amount: "₹65,000" },
    { particular: "Development Fee", amount: "₹10,000" },
    { particular: "Library Fee", amount: "₹2,000" },
    { particular: "Computer Lab Fee", amount: "₹5,000" },
    { particular: "Sports & Cultural Fee", amount: "₹1,500" },
    { particular: "Examination Fee", amount: "₹2,000" },
    { particular: "Total Annual Fee", amount: "₹85,500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Fee Structure</h1>
            <p className="text-xl text-gray-600">
              Transparent and affordable fee structure for quality education
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-college-primary text-white p-6">
                <h2 className="text-2xl font-bold">Engineering Programs</h2>
                <p className="opacity-90">B.E. Computer, AI&ML, AI&DS, Mechanical, Electronics</p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody>
                    {engineeringFees.map((fee, index) => (
                      <tr key={index} className={`border-b ${index === engineeringFees.length - 1 ? 'border-college-primary font-bold text-college-primary' : 'border-gray-200'}`}>
                        <td className="py-3 text-left">{fee.particular}</td>
                        <td className="py-3 text-right">{fee.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-college-accent text-white p-6">
                <h2 className="text-2xl font-bold">Management Programs</h2>
                <p className="opacity-90">BCA, BBA</p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody>
                    {managementFees.map((fee, index) => (
                      <tr key={index} className={`border-b ${index === managementFees.length - 1 ? 'border-college-accent font-bold text-college-accent' : 'border-gray-200'}`}>
                        <td className="py-3 text-left">{fee.particular}</td>
                        <td className="py-3 text-right">{fee.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Options</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-primary rounded-full mr-3"></span>
                  Annual payment with 5% discount
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-primary rounded-full mr-3"></span>
                  Semester-wise payment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-primary rounded-full mr-3"></span>
                  Installment facility available
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-primary rounded-full mr-3"></span>
                  Online payment gateway
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-primary rounded-full mr-3"></span>
                  DD/Cheque payment accepted
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Scholarships Available</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-accent rounded-full mr-3"></span>
                  Merit-based scholarships
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-accent rounded-full mr-3"></span>
                  Government scholarships
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-accent rounded-full mr-3"></span>
                  Reserved category benefits
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-accent rounded-full mr-3"></span>
                  Sports scholarship
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-college-accent rounded-full mr-3"></span>
                  Need-based financial aid
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

export default FeesStructure;
