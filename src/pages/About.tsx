
import React from 'react';
import { Award, Users, BookOpen, Globe, Target, TrendingUp, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const milestones = [
    { year: "2000", event: "Establishment of ISB&M Group" },
    { year: "2002", event: "First PGDM Batch Successfully Graduated" },
    { year: "2004", event: "Establishment of Kolkata Campus" },
    { year: "2005", event: "Establishment of Bangalore Campus" },
    { year: "2009", event: "Shifting to 17 acre Nande Campus" },
    { year: "2009", event: "Establishment of ISB&M College of Commerce" },
    { year: "2010", event: "Establishment of ISB&M Mulshi Campus" },
    { year: "2010", event: "Establishment of ISB&M College of Engineering" }
  ];

  const achievements = [
    { icon: <Award className="h-8 w-8" />, title: "12 Lakhs", subtitle: "Highest Offer", color: "text-green-600" },
    { icon: <TrendingUp className="h-8 w-8" />, title: "6 Lakhs", subtitle: "Average Offer", color: "text-blue-600" },
    { icon: <Users className="h-8 w-8" />, title: "130+", subtitle: "Esteemed Companies", color: "text-purple-600" },
    { icon: <Calendar className="h-8 w-8" />, title: "14+", subtitle: "Glorious Years", color: "text-orange-600" }
  ];

  const affiliations = [
    "Affiliated to Savitribai Phule Pune University (ID No. PU/PN/Engg/401 {2010})",
    "Accredited by NAAC: Grade B++",
    "Approved by AICTE F. No: West/1-4351941/2010/New",
    "Recognised by Maharashtra State Government 2010/(165/2010)/TANSHI-4",
    "Approved by Directorate of Technical Education (DTE) 6622, Mumbai"
  ];

  const learningObjectives = [
    "Be informed over issues & research to build your conceptual and information capabilities",
    "Develop intellectual and professional competence through intellectually engaging processes",
    "Communication & Articulation - Overcome your hesitation & express your thoughts",
    "Action Orientation learning programme",
    "Personal proficiency development through workshops, adventure sports, debates & business strategy plans"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <Separator className="bg-gray-300" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About ISBM College of Engineering
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pioneering Excellence in Engineering Education Since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-college-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  ISBM College of Engineering (Accredited by NAAC grade of B++) is a constituent of People's Empowerment Group, 
                  founded in 2010 by Dr. Pramod Kumar. ISBM COE has grown rapidly in the last 14 years, building a strong 
                  alumni base spread all over the country as well as in different parts of the world.
                </p>
                <p>
                  At ISBM COE, we maintain a high standard of education and continuously strive to create a learning environment 
                  to promote great careers. We offer Bachelor of Engineering (BE) programs approved by AICTE Delhi, DTE Mumbai, 
                  Maharashtra State Government & affiliated to Savitribai Phule Pune University.
                </p>
                <p>
                  We believe in reshaping student attitudes and giving them opportunities to explore and rediscover themselves. 
                  As a holistic approach, ISBM COE students learn to work under demanding schedules and perform in the most inspiring way.
                </p>
                <div className="bg-college-accent bg-opacity-10 p-4 rounded-lg border-l-4 border-college-accent">
                  <p className="font-semibold text-college-primary">
                    Pioneers of extended library hours & laboratory access in Pune!
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${achievement.color} bg-opacity-10`}>
                      <div className={achievement.color}>
                        {achievement.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-college-dark mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-college-dark mb-4">Learning with Objective</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {learningObjectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-6 h-6 bg-college-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Moments */}
      <section className="py-16 bg-college-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Milestone Moments</h2>
            <p className="text-blue-100">
              Established in 2000, ISB&M has made rapid strides over the last 24 years.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-college-accent mb-2">{milestone.year}</div>
                  <p className="text-sm">{milestone.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations & Accreditations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-college-dark mb-4">Affiliations & Accreditations</h2>
          </div>
          <div className="grid gap-4">
            {affiliations.map((affiliation, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border-l-4 border-college-accent">
                <Award className="h-5 w-5 text-college-accent flex-shrink-0" />
                <p className="text-gray-700">{affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
