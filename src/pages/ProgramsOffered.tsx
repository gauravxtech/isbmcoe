
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Clock, Users, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const ProgramsOffered = () => {
  useSEO({
    title: "Engineering Programs at ISBM College - B.E., BBA, BCA Courses in Pune",
    description: "Explore undergraduate engineering programs at ISBM College of Engineering, Pune. B.E. in Computer Science, AI/ML, Mechanical, Electronics, BBA & BCA courses. AICTE approved, SPPU affiliated.",
    keywords: "ISBM engineering programs, B.E. Computer Science Pune, AI ML engineering course, Mechanical engineering Pune, Electronics engineering, BBA BCA courses, AICTE approved programs, SPPU affiliated courses",
    canonical: "https://isbmcoe.edu.in/programs-offered",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "ISBM College of Engineering"
      },
      "courseCode": "UG Programs",
      "description": "Undergraduate engineering and management programs",
      "educationalLevel": "Undergraduate"
    }
  });

  const programs = [
    {
      title: "Computer Engineering",
      duration: "4 Years",
      seats: 120,
      level: "Undergraduate",
      description: "Comprehensive program covering software development, programming, algorithms, and computer systems.",
      highlights: ["Software Development", "Data Structures", "Web Technologies", "Database Management"]
    },
    {
      title: "Computer Science Engineering",
      duration: "4 Years",
      seats: 60,
      level: "Undergraduate",
      description: "Focus on theoretical foundations of computing and practical software engineering skills.",
      highlights: ["Programming Languages", "Software Engineering", "Computer Networks", "Operating Systems"]
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      duration: "4 Years",
      seats: 120,
      level: "Undergraduate",
      description: "Cutting-edge program in AI, ML, deep learning, and intelligent systems development.",
      highlights: ["Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision"]
    },
    {
      title: "Artificial Intelligence & Data Science",
      duration: "4 Years",
      seats: 120,
      level: "Undergraduate",
      description: "Specialized program combining AI techniques with data science and analytics.",
      highlights: ["Data Analytics", "Big Data", "AI Algorithms", "Statistical Learning"]
    },
    {
      title: "Electronics & Telecommunication Engineering",
      duration: "4 Years",
      seats: 30,
      level: "Undergraduate",
      description: "Comprehensive study of electronic systems, communication technologies, and signal processing.",
      highlights: ["Digital Electronics", "Communication Systems", "Signal Processing", "Embedded Systems"]
    },
    {
      title: "Electronics Engineering (VLSI & Design Technology)",
      duration: "4 Years",
      seats: 60,
      level: "Undergraduate",
      description: "Specialized program in VLSI design, chip development, and advanced electronics.",
      highlights: ["VLSI Design", "Chip Architecture", "Digital Design", "Semiconductor Technology"]
    },
    {
      title: "Mechanical Engineering",
      duration: "4 Years",
      seats: 60,
      level: "Undergraduate",
      description: "Traditional engineering discipline covering design, manufacturing, and mechanical systems.",
      highlights: ["CAD/CAM", "Thermodynamics", "Manufacturing", "Automotive Engineering"]
    },
    {
      title: "Bachelor of Business Administration (BBA)",
      duration: "4 Years",
      seats: 120,
      level: "Undergraduate",
      description: "Comprehensive business management program with focus on leadership and entrepreneurship.",
      highlights: ["Business Management", "Marketing", "Finance", "Entrepreneurship"]
    },
    {
      title: "Bachelor of Computer Application (BCA)",
      duration: "4 Years",
      seats: 120,
      level: "Undergraduate",
      description: "Computer applications program with emphasis on programming and software development.",
      highlights: ["Programming", "Software Development", "Database Management", "Web Technologies"]
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
              Programs Offered
            </h1>
            <p className="text-xl text-white/90 mb-4">Explore our comprehensive range of undergraduate programs</p>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80" aria-label="Breadcrumb">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">Programs Offered</span>
            </nav>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-college-primary mb-4">Undergraduate Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse range of AICTE approved undergraduate programs, 
              designed to prepare you for successful careers in engineering, technology, and business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-college-primary/10 text-college-primary">
                      {program.level}
                    </Badge>
                    <GraduationCap className="h-6 w-6 text-college-accent" />
                  </div>
                  <CardTitle className="text-xl text-college-primary mb-2">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 flex-1">{program.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-college-accent" />
                      Duration: {program.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-college-accent" />
                      Intake: {program.seats} seats
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h4 className="font-semibold text-college-secondary mb-2 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Key Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {program.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-college-primary/5 to-college-accent/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-college-primary mb-4">Why Choose ISBM COE?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-college-accent mb-2">14+</div>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-college-accent mb-2">95%</div>
                <p className="text-gray-600">Placement Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-college-accent mb-2">50+</div>
                <p className="text-gray-600">Industry Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsOffered;
