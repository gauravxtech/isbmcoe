
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { FileText, Download, Users, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DirectSecondYearAdmission = () => {
  const admissionStages = [
    { stage: "Stage 1", title: "Online Registration", description: "(Most Important Step)" },
    { stage: "Stage 2", title: "Confirmation of form at Facility Centers in person", description: "(FC'S)" },
    { stage: "Stage 3", title: "Display of Provisional Merit List", description: "" },
    { stage: "Stage 4", title: "Online option forms for CAP Rounds", description: "" },
    { stage: "Stage 5", title: "Allotment and confirmation of seats by paying a DD of Rs 5000/- at Admission Receipt Centre", description: "" },
    { stage: "Stage 6", title: "Counseling Round", description: "" }
  ];

  const documentCategories = [
    {
      category: "All Candidate",
      documents: [
        "Diploma Passing Certificate",
        "College Leaving Certificate after passing H.S.C.",
        "Certificate of Indian Nationality",
        "Domicile certificate of candidate",
        "Proforma-I on paper",
        "Anti-ragging Affidavits"
      ]
    },
    {
      category: "SC/ST",
      documents: [
        "All above 1 to 6 documents &",
        "Caste certificate",
        "Caste/Tribe validity certificate (if not then Undertaking (Proforma H))"
      ]
    },
    {
      category: "VJ/DT/NT(A)/NT(B)/NT(C)/NT(D)/OBC/SBC",
      documents: [
        "All above 1 to 6 documents &",
        "Non creamy layer certificate"
      ]
    },
    {
      category: "TFWS",
      documents: [
        "All above 1 to 6 documents &",
        "Income certificate with parents annual income less than 4.5 Lakh"
      ]
    },
    {
      category: "Out of Maharashtra Students(OMS)",
      documents: [
        "All above 1 to 6 documents &",
        "Migration Certificate",
        "Domicile Certificate",
        "Passing Certificate"
      ]
    },
    {
      category: "For Defense persons",
      documents: [
        "All above 1 to 6 documents &",
        "Defense Service Certificate Pro forma – C",
        "Domicile certificate of father/mother who is an Ex service personnel is domiciled in the State of Maharashtra"
      ]
    },
    {
      category: "For Physically Handicapped persons",
      documents: [
        "All above 1 to 6 documents &",
        "Certificate in the pro forma–F/F-1 & Domicile certificate of candidate"
      ]
    },
    {
      category: "FOR J&K Migrant",
      documents: [
        "All above 1 to 6 documents &",
        "Certificate of posting in case of defence and Government servants in proforma – J",
        "Certificate for stay in refugee camp for those staying in refugee camp in proforma – K",
        "Certificate stating that the candidate belongs to displaced family in proforma – L"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <Separator className="bg-gray-300" />

      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-college-primary font-medium">Home</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-college-primary font-medium">Admissions</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-600">Direct Second Year</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Direct Second Year Admissions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Complete guide for Direct Second Year Engineering admissions for diploma holders
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="bg-college-primary hover:bg-college-primary/90 text-white">
              <CheckCircle className="h-4 w-4 mr-2" />
              Eligibility Criteria
            </Button>
            <Button variant="outline" className="border-college-primary text-college-primary hover:bg-college-primary hover:text-white">
              <FileText className="h-4 w-4 mr-2" />
              Documents Needed
            </Button>
            <Button variant="outline" className="border-college-primary text-college-primary hover:bg-college-primary hover:text-white">
              <Download className="h-4 w-4 mr-2" />
              Information Brochure
            </Button>
          </div>

          {/* Eligibility Criteria */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-college-accent" />
                Eligibility Criteria
              </CardTitle>
              <p className="text-gray-600">For Maharashtra State Candidate and Outside Maharashtra State Candidate</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-college-accent font-bold mr-2">•</span>
                    Candidate should be Indian national.
                  </li>
                  <li className="flex items-start">
                    <span className="text-college-accent font-bold mr-2">•</span>
                    Diploma in Engineering from recognized board / university with minimum 50% marks.
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
                Admission Process Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {admissionStages.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-college-primary/5 to-college-accent/5 p-4 rounded-lg border border-college-primary/20">
                    <div className="text-college-primary font-bold text-lg mb-2">{item.stage}</div>
                    <div className="text-gray-700 font-medium text-sm">{item.title}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-gray-700">
                  <strong>For further details, please visit:</strong>
                  <a href="http://www.dtemaharashtra.gov.in/" target="_blank" rel="noopener noreferrer" className="text-college-primary hover:text-college-accent ml-2 underline">
                    http://www.dtemaharashtra.gov.in/
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Documents Required */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary flex items-center">
                <FileText className="h-6 w-6 mr-3 text-college-accent" />
                Documents Needed
              </CardTitle>
              <p className="text-gray-600">Attested true copies (two sets) of documents required for different categories</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {documentCategories.map((category, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-college-primary mb-3">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.documents.map((doc, docIndex) => (
                        <li key={docIndex} className="flex items-start text-gray-700">
                          <span className="text-college-accent font-bold mr-2 mt-1">•</span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DirectSecondYearAdmission;
