
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Code, Users, Briefcase, FileText, TrendingUp, Award, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TrainingPrograms = () => {
  const trainingPrograms = [
    {
      title: "Technical Skills Development",
      description: "Comprehensive training in programming languages, frameworks, and emerging technologies",
      icon: Code,
      duration: "6 months",
      modules: ["Data Structures & Algorithms", "Web Development", "Database Management", "Cloud Computing"]
    },
    {
      title: "Soft Skills Training",
      description: "Communication, leadership, teamwork, and interpersonal skills development",
      icon: Users,
      duration: "3 months",
      modules: ["Communication Skills", "Leadership Development", "Team Building", "Presentation Skills"]
    },
    {
      title: "Interview Preparation",
      description: "Mock interviews, group discussions, aptitude tests, and HR round preparation",
      icon: Briefcase,
      duration: "2 months",
      modules: ["Technical Interviews", "HR Interviews", "Group Discussions", "Aptitude Tests"]
    },
    {
      title: "Industry Exposure",
      description: "Guest lectures, industrial visits, internships, and real-world project experience",
      icon: TrendingUp,
      duration: "Ongoing",
      modules: ["Guest Lectures", "Industrial Visits", "Live Projects", "Industry Mentorship"]
    },
    {
      title: "Resume Building",
      description: "Professional resume writing, portfolio development, and LinkedIn optimization",
      icon: FileText,
      duration: "1 month",
      modules: ["Resume Writing", "Portfolio Creation", "LinkedIn Profile", "Cover Letters"]
    },
    {
      title: "Career Guidance",
      description: "Personalized career counseling and placement assistance",
      icon: Award,
      duration: "Continuous",
      modules: ["Career Counseling", "Goal Setting", "Skill Assessment", "Job Market Analysis"]
    }
  ];

  const certifications = [
    "Microsoft Certified Solutions Associate (MCSA)",
    "Oracle Certified Associate Java Programmer",
    "AWS Certified Cloud Practitioner",
    "Google Analytics Individual Qualification",
    "Cisco Certified Network Associate (CCNA)",
    "CompTIA Security+"
  ];

  const workshops = [
    { title: "Machine Learning Fundamentals", date: "Monthly", duration: "2 days" },
    { title: "Full Stack Web Development", date: "Quarterly", duration: "5 days" },
    { title: "Digital Marketing & SEO", date: "Bi-monthly", duration: "3 days" },
    { title: "Data Science with Python", date: "Monthly", duration: "4 days" },
    { title: "Mobile App Development", date: "Quarterly", duration: "6 days" },
    { title: "Cybersecurity Essentials", date: "Bi-monthly", duration: "3 days" }
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
              Training Programs
            </h1>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="hover:text-white cursor-pointer">Placements</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">Training Programs</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary flex items-center">
                <BookOpen className="h-6 w-6 mr-2" />
                Training & Development Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Our comprehensive training programs are designed to bridge the gap between academic learning 
                and industry requirements. We focus on developing both technical competencies and soft skills 
                to create industry-ready professionals.
              </p>
              <p className="text-gray-700">
                With experienced trainers, modern infrastructure, and industry-aligned curriculum, we ensure 
                our students are well-prepared for the challenges of the professional world.
              </p>
            </CardContent>
          </Card>

          {/* Training Programs Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-college-primary mb-8 text-center">Core Training Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingPrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <program.icon className="h-8 w-8 text-college-primary mr-3" />
                      <div>
                        <CardTitle className="text-lg text-college-primary">{program.title}</CardTitle>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Clock className="h-4 w-4 mr-1" />
                          {program.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div>
                      <h4 className="font-semibold text-college-primary mb-2">Key Modules:</h4>
                      <ul className="space-y-1">
                        {program.modules.map((module, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-college-accent font-bold mr-2">•</span>
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Industry Certifications</CardTitle>
                <p className="text-gray-600">Professional certifications offered to enhance employability</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center p-3 bg-gradient-to-r from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
                      <Award className="h-5 w-5 text-college-primary mr-3" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Specialized Workshops</CardTitle>
                <p className="text-gray-600">Regular workshops on emerging technologies and trends</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workshops.map((workshop, index) => (
                    <div key={index} className="p-3 bg-gradient-to-r from-college-secondary/5 to-college-primary/5 rounded-lg border border-college-secondary/20">
                      <h4 className="font-semibold text-college-primary">{workshop.title}</h4>
                      <div className="flex justify-between text-sm text-gray-600 mt-1">
                        <span>Schedule: {workshop.date}</span>
                        <span>Duration: {workshop.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingPrograms;
