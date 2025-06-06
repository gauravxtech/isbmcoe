
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { FileText, Download, Users, CheckCircle, Calendar, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FirstYearAdmission = () => {
  const admissionSteps = [
    { step: "Step 1", title: "Online Application", description: "Fill out the online application form with all required details" },
    { step: "Step 2", title: "Document Verification", description: "Submit all required documents for verification" },
    { step: "Step 3", title: "Merit List", description: "Check your name in the published merit list" },
    { step: "Step 4", title: "Counseling", description: "Attend counseling session as per scheduled date" },
    { step: "Step 5", title: "Seat Allotment", description: "Get seat allotted based on merit and preferences" },
    { step: "Step 6", title: "Fee Payment", description: "Pay the admission fees to confirm your seat" }
  ];

  const requiredDocuments = [
    "SSC (10th) Mark Sheet and Passing Certificate",
    "HSC (12th) Mark Sheet and Passing Certificate",
    "JEE Main Score Card (if applicable)",
    "MHT-CET Score Card",
    "Transfer Certificate from previous institution",
    "Migration Certificate (for students from other boards)",
    "Caste Certificate (if applicable)",
    "Non-Creamy Layer Certificate (for OBC candidates)",
    "Income Certificate (for EWS/TFWS)",
    "Domicile Certificate",
    "Aadhaar Card",
    "Passport size photographs",
    "Anti-ragging affidavit"
  ];

  const importantDates = [
    { event: "Online Application Starts", date: "June 1, 2024" },
    { event: "Last Date for Application", date: "June 30, 2024" },
    { event: "Merit List Declaration", date: "July 15, 2024" },
    { event: "Counseling Begins", date: "July 20, 2024" },
    { event: "Classes Commence", date: "August 15, 2024" }
  ];

  return (
    <div className="min-h-screen bg-college-light">
      <Header />
      <Navbar />
      <Separator className="bg-gray-300" />

      {/* Hero Section with consistent styling */}
      <div className="bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              First Year Admissions
            </h1>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="hover:text-white cursor-pointer">Admissions</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">First Year</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eligibility Criteria */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-college-accent" />
                Eligibility Criteria
              </CardTitle>
              <p className="text-gray-600">Minimum qualifications required for First Year Engineering admissions</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-college-accent font-bold mr-2">•</span>
                    Passed HSC (12th) examination with Physics, Chemistry, and Mathematics
                  </li>
                  <li className="flex items-start">
                    <span className="text-college-accent font-bold mr-2">•</span>
                    Minimum 50% marks in aggregate (45% for reserved categories)
                  </li>
                  <li className="flex items-start">
                    <span className="text-college-accent font-bold mr-2">•</span>
                    Valid MHT-CET or JEE Main score
                  </li>
                  <li className="flex items-start">
                    <span className="text-college-accent font-bold mr-2">•</span>
                    Age limit: 25 years (30 years for reserved categories)
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Admission Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary flex items-center">
                <Users className="h-6 w-6 mr-3 text-college-accent" />
                Admission Process
              </CardTitle>
              <p className="text-gray-600">Step-by-step guide to the admission process</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {admissionSteps.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-college-primary/5 to-college-accent/5 p-4 rounded-lg border border-college-primary/20">
                    <div className="text-college-primary font-bold text-lg mb-2">{item.step}</div>
                    <div className="text-gray-700 font-medium text-sm mb-2">{item.title}</div>
                    <div className="text-gray-600 text-xs">{item.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Important Dates */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary flex items-center">
                <Calendar className="h-6 w-6 mr-3 text-college-accent" />
                Important Dates
              </CardTitle>
              <p className="text-gray-600">Key dates for the admission process</p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {importantDates.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border">
                    <span className="font-medium text-gray-700">{item.event}</span>
                    <span className="text-college-primary font-semibold">{item.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Required Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary flex items-center">
                <FileText className="h-6 w-6 mr-3 text-college-accent" />
                Required Documents
              </CardTitle>
              <p className="text-gray-600">List of documents needed for admission</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <span className="text-college-accent font-bold mr-3 mt-1">•</span>
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-gray-700 font-medium">
                  <strong>Note:</strong> All documents should be original along with attested photocopies. 
                  Ensure all certificates are from recognized boards/universities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirstYearAdmission;
