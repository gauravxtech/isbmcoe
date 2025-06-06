
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Building, Award, BookOpen, Download, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Placements = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const placementStats = [
    { label: "Highest Package", value: "45 LPA", icon: TrendingUp, color: "text-green-600" },
    { label: "Average Package", value: "8.5 LPA", icon: Users, color: "text-blue-600" },
    { label: "Placement Rate", value: "95%", icon: Award, color: "text-purple-600" },
    { label: "Companies Visited", value: "150+", icon: Building, color: "text-orange-600" }
  ];

  const topRecruiters = [
    "TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "Tech Mahindra", 
    "L&T Infotech", "Persistent Systems", "Capgemini", "IBM", "Microsoft", "Amazon"
  ];

  const placementRecords = [
    { year: "2023-24", placed: 420, totalStudents: 450, percentage: "93.3%" },
    { year: "2022-23", placed: 380, totalStudents: 400, percentage: "95%" },
    { year: "2021-22", placed: 350, totalStudents: 375, percentage: "93.3%" },
    { year: "2020-21", placed: 320, totalStudents: 350, percentage: "91.4%" }
  ];

  const trainingPrograms = [
    { title: "Technical Skills Development", description: "Programming languages, frameworks, and technologies" },
    { title: "Soft Skills Training", description: "Communication, leadership, and interpersonal skills" },
    { title: "Interview Preparation", description: "Mock interviews, group discussions, and aptitude tests" },
    { title: "Industry Exposure", description: "Guest lectures, industrial visits, and internships" },
    { title: "Resume Building", description: "Professional resume writing and portfolio development" },
    { title: "Career Guidance", description: "Career counseling and placement assistance" }
  ];

  const subNavItems = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'records', label: 'Placement Records', icon: Award },
    { id: 'training', label: 'Training Programs', icon: BookOpen },
    { id: 'partners', label: 'Industry Partners', icon: Building },
    { id: 'services', label: 'Career Services', icon: Users }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {placementStats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-college-primary">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* About Placements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Placement Cell</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The Training and Placement Cell at ISBM College of Engineering is dedicated to bridging the gap between 
                  academia and industry. Our mission is to provide comprehensive career guidance and placement assistance 
                  to students, ensuring they are well-prepared to meet the challenges of the professional world.
                </p>
                <p className="text-gray-700">
                  With a dedicated team of experienced professionals and strong industry connections, we have consistently 
                  achieved excellent placement records across all engineering disciplines. Our approach combines technical 
                  skill development with personality enhancement to create industry-ready professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case 'records':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Year-wise Placement Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-college-primary/10">
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold text-college-primary">Academic Year</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold text-college-primary">Students Placed</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold text-college-primary">Total Students</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold text-college-primary">Placement %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {placementRecords.map((record, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">{record.year}</td>
                          <td className="border border-gray-300 px-4 py-3">{record.placed}</td>
                          <td className="border border-gray-300 px-4 py-3">{record.totalStudents}</td>
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-college-primary">{record.percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'training':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Training & Development Programs</CardTitle>
                <p className="text-gray-600">Comprehensive training programs to enhance employability</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {trainingPrograms.map((program, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
                      <h3 className="font-semibold text-college-primary mb-2">{program.title}</h3>
                      <p className="text-gray-600 text-sm">{program.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'partners':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Top Recruiters</CardTitle>
                <p className="text-gray-600">Leading companies that regularly recruit from our campus</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {topRecruiters.map((company, index) => (
                    <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg text-center hover:shadow-md transition-shadow duration-200">
                      <p className="font-medium text-gray-700">{company}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'services':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Career Services</CardTitle>
                <p className="text-gray-600">Comprehensive support for student career development</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-college-primary">Pre-Placement Services</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-college-accent font-bold mr-2">•</span>
                        Career counseling and guidance
                      </li>
                      <li className="flex items-start">
                        <span className="text-college-accent font-bold mr-2">•</span>
                        Resume building workshops
                      </li>
                      <li className="flex items-start">
                        <span className="text-college-accent font-bold mr-2">•</span>
                        Interview preparation sessions
                      </li>
                      <li className="flex items-start">
                        <span className="text-college-accent font-bold mr-2">•</span>
                        Group discussion training
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-college-primary">Placement Support</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-college-accent font-bold mr-2">•</span>
                        On-campus recruitment drives
                      </li>
                      <li className="flex items-start">
                        <span className="text-college-accent font-bold mr-2">•</span>
                        Industry connect programs
                      </li>
                      <li className="flex items-start">
                        <span className="text-college-accent font-bold mr-2">•</span>
                        Internship opportunities
                      </li>
                      <li className="flex items-start">
                        <span className="text-college-accent font-bold mr-2">•</span>
                        Alumni mentorship program
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

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
              Placements
            </h1>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">Placements</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="bg-white border-b-2 border-college-accent/20 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-0 overflow-x-auto">
            {subNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center px-6 py-4 whitespace-nowrap font-medium transition-all duration-200 border-b-2 ${
                  activeTab === item.id
                    ? 'text-college-primary border-college-accent bg-college-accent/5'
                    : 'text-gray-600 border-transparent hover:text-college-primary hover:border-college-accent/50'
                }`}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Placements;
