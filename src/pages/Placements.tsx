
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Building, Users, TrendingUp, Award, DollarSign, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const Placements = () => {
  useSEO({
    title: "Placements at ISBM College of Engineering - 95% Placement Record | Top Companies",
    description: "ISBM College of Engineering Pune achieves 95% placement record with top companies like TCS, Infosys, Wipro, Amazon. Highest package 12 LPA. Explore placement statistics and career opportunities.",
    keywords: "ISBM placement record, engineering placements Pune, TCS Infosys recruitment, highest placement package, campus placement statistics, engineering jobs placement, IT company recruitment",
    canonical: "https://isbmcoe.edu.in/placements",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "ISBM College of Engineering Placements",
      "description": "95% placement record with top companies",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Placement Statistics"
      }
    }
  });

  const placementStats = [
    { label: "Placement Rate", value: "95%", icon: TrendingUp, color: "text-green-600" },
    { label: "Companies Visited", value: "50+", icon: Building, color: "text-blue-600" },
    { label: "Students Placed", value: "300+", icon: Users, color: "text-purple-600" },
    { label: "Highest Package", value: "12 LPA", icon: DollarSign, color: "text-orange-600" }
  ];

  const topRecruiters = [
    { name: "TCS", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=60&fit=crop", packages: "3.5-7 LPA" },
    { name: "Infosys", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=60&fit=crop", packages: "4-8 LPA" },
    { name: "Wipro", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=60&fit=crop", packages: "3.5-6 LPA" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=60&fit=crop", packages: "8-12 LPA" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=60&fit=crop", packages: "10-15 LPA" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=60&fit=crop", packages: "12-20 LPA" }
  ];

  const placementTrends = [
    { year: "2024", placed: 290, companies: 48, highest: "12 LPA", average: "5.2 LPA" },
    { year: "2023", placed: 275, companies: 45, highest: "10 LPA", average: "4.8 LPA" },
    { year: "2022", placed: 260, companies: 42, highest: "9 LPA", average: "4.5 LPA" },
    { year: "2021", placed: 245, companies: 38, highest: "8 LPA", average: "4.2 LPA" }
  ];

  const placementServices = [
    {
      title: "Career Counseling",
      description: "Individual guidance for career planning and development",
      icon: Users
    },
    {
      title: "Skill Development",
      description: "Technical and soft skills training programs",
      icon: Award
    },
    {
      title: "Interview Preparation",
      description: "Mock interviews and personality development sessions",
      icon: Briefcase
    },
    {
      title: "Industry Connect",
      description: "Regular interaction with industry professionals",
      icon: Building
    }
  ];

  return (
    <div className="min-h-screen bg-college-light">
      <Header />
      <Navbar />
      <Separator className="bg-gray-300" />

      <div className="bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Placements
            </h1>
            <p className="text-xl text-white/90 mb-4">Empowering careers with exceptional placement opportunities</p>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80" aria-label="Breadcrumb">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">Placements</span>
            </nav>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Placement Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {placementStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-college-primary">{stat.value}</p>
                    </div>
                    <stat.icon className={`h-10 w-10 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Top Recruiters */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary">Top Recruiters</CardTitle>
              <p className="text-gray-600">Leading companies that regularly recruit from our campus</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {topRecruiters.map((company, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="h-12 w-20 object-contain mx-auto mb-3"
                    />
                    <h4 className="font-semibold text-college-primary mb-1">{company.name}</h4>
                    <Badge variant="outline" className="text-xs">{company.packages}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Placement Trends */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary">Placement Trends</CardTitle>
              <p className="text-gray-600">Year-wise placement statistics and growth</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold text-college-primary">Year</th>
                      <th className="text-left p-3 font-semibold text-college-primary">Students Placed</th>
                      <th className="text-left p-3 font-semibold text-college-primary">Companies</th>
                      <th className="text-left p-3 font-semibold text-college-primary">Highest Package</th>
                      <th className="text-left p-3 font-semibold text-college-primary">Average Package</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placementTrends.map((trend, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{trend.year}</td>
                        <td className="p-3">{trend.placed}</td>
                        <td className="p-3">{trend.companies}</td>
                        <td className="p-3 font-semibold text-college-accent">{trend.highest}</td>
                        <td className="p-3">{trend.average}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Placement Services */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary">Placement Services</CardTitle>
              <p className="text-gray-600">Comprehensive support for your career journey</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {placementServices.map((service, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-college-primary/5 to-college-accent/5 rounded-lg">
                    <service.icon className="h-12 w-12 text-college-accent mx-auto mb-4" />
                    <h4 className="font-semibold text-college-primary mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
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

export default Placements;
