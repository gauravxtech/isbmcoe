
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Building, Handshake, TrendingUp, Users, Globe, Award } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const IndustryPartners = () => {
  const topRecruiters = [
    { name: "TCS", sector: "IT Services", packages: "3.5-7 LPA" },
    { name: "Infosys", sector: "IT Services", packages: "3.6-8 LPA" },
    { name: "Wipro", sector: "IT Services", packages: "3.5-7.5 LPA" },
    { name: "Cognizant", sector: "IT Services", packages: "4-8 LPA" },
    { name: "Accenture", sector: "Consulting", packages: "4.5-9 LPA" },
    { name: "Tech Mahindra", sector: "IT Services", packages: "3.8-7 LPA" },
    { name: "L&T Infotech", sector: "IT Services", packages: "4-8.5 LPA" },
    { name: "Persistent Systems", sector: "Software", packages: "5-10 LPA" },
    { name: "Capgemini", sector: "Consulting", packages: "4.2-8.8 LPA" },
    { name: "IBM", sector: "Technology", packages: "5.5-12 LPA" },
    { name: "Microsoft", sector: "Technology", packages: "12-25 LPA" },
    { name: "Amazon", sector: "E-commerce", packages: "15-45 LPA" }
  ];

  const partnerships = [
    {
      title: "Campus Recruitment Partners",
      description: "Companies that regularly visit our campus for hiring",
      icon: Building,
      count: "150+",
      companies: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "IBM"]
    },
    {
      title: "Industry Mentorship Program",
      description: "Senior professionals providing guidance to students",
      icon: Users,
      count: "50+",
      companies: ["Microsoft", "Google", "Amazon", "Oracle", "Adobe", "Salesforce"]
    },
    {
      title: "Internship Partners",
      description: "Organizations offering summer internship opportunities",
      icon: Handshake,
      count: "80+",
      companies: ["Flipkart", "Paytm", "Zomato", "Swiggy", "BYJU'S", "Unacademy"]
    },
    {
      title: "Research Collaborations",
      description: "Joint research projects and innovation initiatives",
      icon: Globe,
      count: "25+",
      companies: ["Intel", "NVIDIA", "Qualcomm", "Cisco", "HPE", "Dell"]
    }
  ];

  const sectorWisePartners = [
    {
      sector: "Information Technology",
      companies: ["TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", "Mindtree", "Mphasis", "L&T Infotech"]
    },
    {
      sector: "Product Companies",
      companies: ["Microsoft", "Google", "Amazon", "Adobe", "Oracle", "SAP", "Salesforce", "VMware"]
    },
    {
      sector: "Consulting",
      companies: ["Accenture", "Deloitte", "EY", "KPMG", "PwC", "Capgemini", "McKinsey", "BCG"]
    },
    {
      sector: "Banking & Finance",
      companies: ["JPMorgan Chase", "Goldman Sachs", "Morgan Stanley", "Barclays", "Deutsche Bank", "Citi"]
    },
    {
      sector: "Manufacturing",
      companies: ["Tata Motors", "Mahindra", "Bajaj Auto", "TVS Motors", "Hero MotoCorp", "Maruti Suzuki"]
    },
    {
      sector: "Startups",
      companies: ["Flipkart", "Paytm", "Zomato", "Swiggy", "BYJU'S", "Unacademy", "PhonePe", "Razorpay"]
    }
  ];

  const collaborationTypes = [
    { type: "On-Campus Recruitment", description: "Regular placement drives conducted on campus" },
    { type: "Industrial Training", description: "Hands-on training programs in industry environments" },
    { type: "Guest Lectures", description: "Expert sessions by industry professionals" },
    { type: "Project Collaboration", description: "Real-world projects with industry guidance" },
    { type: "Skill Development", description: "Industry-specific skill enhancement programs" },
    { type: "Research Partnerships", description: "Joint research and development initiatives" }
  ];

  return (
    <div className="min-h-screen bg-college-light">
      <Header />
      <Navbar />
      <Separator className="bg-gray-300" />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industry Partners
            </h1>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="hover:text-white cursor-pointer">Placements</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">Industry Partners</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Partnership Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary flex items-center">
                <Handshake className="h-6 w-6 mr-2" />
                Industry Partnership Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                ISBM College of Engineering has built strong partnerships with leading companies across various 
                industries. These collaborations ensure our students receive exposure to real-world challenges 
                and opportunities for professional growth.
              </p>
              <p className="text-gray-700">
                Our industry partners actively participate in curriculum development, provide internship opportunities, 
                conduct training programs, and offer excellent placement opportunities to our graduates.
              </p>
            </CardContent>
          </Card>

          {/* Partnership Types */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-college-primary mb-8 text-center">Partnership Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerships.map((partnership, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <partnership.icon className="h-12 w-12 text-college-primary mx-auto mb-4" />
                    <h3 className="font-bold text-college-primary mb-2">{partnership.title}</h3>
                    <p className="text-3xl font-bold text-college-accent mb-2">{partnership.count}</p>
                    <p className="text-gray-600 text-sm mb-4">{partnership.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {partnership.companies.slice(0, 3).map((company, idx) => (
                        <span key={idx} className="text-xs bg-college-primary/10 text-college-primary px-2 py-1 rounded">
                          {company}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Top Recruiters */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary">Top Recruiters</CardTitle>
              <p className="text-gray-600">Leading companies that regularly recruit from our campus</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-college-primary/10">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-college-primary">Company</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-college-primary">Sector</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-college-primary">Package Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topRecruiters.map((recruiter, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">{recruiter.name}</td>
                        <td className="border border-gray-300 px-4 py-3">{recruiter.sector}</td>
                        <td className="border border-gray-300 px-4 py-3 text-college-primary font-medium">{recruiter.packages}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Sector-wise Partners */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-college-primary mb-8 text-center">Sector-wise Industry Partners</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {sectorWisePartners.map((sector, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg text-college-primary">{sector.sector}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {sector.companies.map((company, idx) => (
                        <span key={idx} className="bg-gradient-to-r from-college-primary/10 to-college-accent/10 text-college-primary px-3 py-1 rounded-full text-sm font-medium border border-college-primary/20">
                          {company}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Collaboration Types */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary">Types of Collaboration</CardTitle>
              <p className="text-gray-600">Various ways we collaborate with our industry partners</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {collaborationTypes.map((collab, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
                    <h3 className="font-semibold text-college-primary mb-2">{collab.type}</h3>
                    <p className="text-gray-600 text-sm">{collab.description}</p>
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

export default IndustryPartners;
