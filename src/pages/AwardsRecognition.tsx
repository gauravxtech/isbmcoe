import React from 'react';
import { Award, Trophy, Star, Medal, Users, BookOpen, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const AwardsRecognition = () => {
  useSEO({
    title: "Awards & Recognition - ISBM College of Engineering",
    description: "Awards, recognitions, and achievements of ISBM College of Engineering",
    canonical: "https://isbmcoe.netlify.app/awards-recognition"
  });

  const achievements = [
    {
      category: "Institutional Awards",
      icon: Trophy,
      awards: [
        {
          title: "NAAC B++ Accreditation",
          year: "2023",
          description: "Achieved B++ grade in NAAC assessment for quality education",
          issuer: "National Assessment and Accreditation Council"
        },
        {
          title: "Best Engineering College Award",
          year: "2023",
          description: "Recognized as one of the best engineering colleges in Maharashtra",
          issuer: "Maharashtra State Education Board"
        },
        {
          title: "Excellence in Technical Education",
          year: "2022",
          description: "Outstanding contribution to technical education in the region",
          issuer: "All India Council for Technical Education"
        },
        {
          title: "ISO 9001:2015 Certification",
          year: "2021",
          description: "Quality management system certification",
          issuer: "International Organization for Standardization"
        }
      ]
    },
    {
      category: "Student Achievements",
      icon: Medal,
      awards: [
        {
          title: "State Level Technical Fest Winner",
          year: "2024",
          description: "Students won first prize in state-level technical competition",
          issuer: "Technical University of Maharashtra"
        },
        {
          title: "Smart India Hackathon Winners",
          year: "2023",
          description: "Multiple teams qualified and won prizes in national hackathon",
          issuer: "Government of India"
        },
        {
          title: "Research Paper Awards",
          year: "2023",
          description: "Best paper awards in international conferences",
          issuer: "IEEE & ACM"
        },
        {
          title: "Innovation Challenge Winners",
          year: "2022",
          description: "Top performers in national innovation challenges",
          issuer: "Ministry of Education"
        }
      ]
    },
    {
      category: "Faculty Recognition",
      icon: Star,
      awards: [
        {
          title: "Best Teacher Awards",
          year: "2023",
          description: "Faculty members recognized for excellence in teaching",
          issuer: "University & Professional Bodies"
        },
        {
          title: "Research Excellence Awards",
          year: "2023",
          description: "Outstanding research contributions in engineering fields",
          issuer: "Various International Journals"
        },
        {
          title: "Industry Collaboration Awards",
          year: "2022",
          description: "Recognition for successful industry-academia partnerships",
          issuer: "Confederation of Indian Industry"
        },
        {
          title: "Innovation in Teaching",
          year: "2022",
          description: "Awards for innovative teaching methodologies",
          issuer: "National Board of Accreditation"
        }
      ]
    },
    {
      category: "Research & Innovation",
      icon: Lightbulb,
      awards: [
        {
          title: "Patent Publications",
          year: "2023",
          description: "Multiple patents filed and published by faculty and students",
          issuer: "Indian Patent Office"
        },
        {
          title: "Research Grants Awarded",
          year: "2023",
          description: "Significant research funding from government agencies",
          issuer: "DST, SERB, AICTE"
        },
        {
          title: "Innovation Hub Recognition",
          year: "2022",
          description: "Recognized as a center for innovation and entrepreneurship",
          issuer: "Startup India Initiative"
        },
        {
          title: "Technology Transfer Awards",
          year: "2022",
          description: "Successful transfer of research to industry applications",
          issuer: "Technology Business Incubators"
        }
      ]
    }
  ];

  const highlights = [
    { metric: "100+", label: "Awards & Recognitions", icon: Award },
    { metric: "25+", label: "Faculty Honors", icon: Users },
    { metric: "150+", label: "Student Achievements", icon: BookOpen },
    { metric: "20+", label: "Research Patents", icon: Lightbulb }
  ];

  const recentNews = [
    {
      title: "ISBM College Ranked Among Top 100 Engineering Colleges",
      date: "March 2024",
      description: "National ranking survey places ISBM in top tier of engineering institutions"
    },
    {
      title: "Faculty Member Receives National Science Award",
      date: "February 2024", 
      description: "Dr. Smith honored for groundbreaking research in AI applications"
    },
    {
      title: "Student Team Wins International Robotics Competition",
      date: "January 2024",
      description: "ISBM team secures first place in global robotics championship"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Awards & Recognition
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Celebrating excellence in education, research, and innovation. Our achievements reflect 
            our commitment to quality and our contribution to the engineering community.
          </p>
          
          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <highlight.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{highlight.metric}</div>
                <p className="text-muted-foreground">{highlight.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {achievements.map((category, index) => (
              <div key={index}>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {category.category}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {category.awards.map((award, awardIndex) => (
                    <Card key={awardIndex} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg pr-4">{award.title}</CardTitle>
                          <Badge variant="secondary">{award.year}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-3">{award.description}</p>
                        <p className="text-sm font-medium text-primary">{award.issuer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Recent Recognition
            </h2>
            <p className="text-xl text-muted-foreground">
              Latest awards and achievements from our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg pr-4">{news.title}</CardTitle>
                    <Badge variant="outline">{news.date}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Be Part of Our Success Story
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join ISBM College of Engineering and contribute to our legacy of excellence. 
            Together, we'll achieve even greater heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/first-year-admission" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Apply for Admission
            </a>
            <a href="/about" className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AwardsRecognition;