
import React from 'react';
import { Award, Users, BookOpen, Globe, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CollegeOverview = () => {
  const achievements = [
    { icon: <Award className="h-8 w-8" />, title: "NAAC B++ Accredited", description: "Highest quality standards achieved" },
    { icon: <Users className="h-8 w-8" />, title: "Expert Faculty", description: "Industry experienced professors" },
    { icon: <BookOpen className="h-8 w-8" />, title: "Extended Library Hours", description: "Pioneer in 24/7 library access" },
    { icon: <Globe className="h-8 w-8" />, title: "Industry Partnerships", description: "MOUs with leading companies" },
    { icon: <Target className="h-8 w-8" />, title: "Project Based Learning", description: "Live projects with industry" },
    { icon: <TrendingUp className="h-8 w-8" />, title: "Career Growth", description: "Comprehensive placement training" }
  ];

  const features = [
    "AICTE Approved Programs",
    "Affiliated to Savitribai Phule Pune University",
    "17 Acre Modern Campus at Nande, Pune",
    "Extended Library & Laboratory Access",
    "Live Projects & Industry Exposure",
    "MOUs with Leading MNCs",
    "Comprehensive Placement Training",
    "Value Addition with Graduation"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-college-dark mb-6">
              ISBM College of Engineering
            </h2>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-college-primary mb-4">
                Why Choose ISBM COE?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                ISBM College of Engineering, a constituent of People's Empowerment Group, was founded in 2010 
                by Dr. Pramod Kumar. Located in the beautiful 17-acre Nande campus in Pune, we have rapidly 
                grown to become a leading institution with a strong alumni base across India and worldwide.
              </p>
              <p className="text-gray-600 mb-6">
                We maintain the highest standards of education and continuously strive to create an inspiring 
                learning environment. Our Bachelor of Engineering programs are approved by AICTE Delhi, DTE Mumbai, 
                Maharashtra State Government, and affiliated to Savitribai Phule Pune University.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in reshaping student attitudes and providing opportunities for self-discovery and exploration. 
                Our holistic approach ensures students learn to work under demanding schedules while performing 
                in the most inspiring ways.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-college-accent rounded-full"></div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-college-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-college-primary group-hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-college-primary">
                      {achievement.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-college-dark mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-college-primary mb-2">14+</div>
            <div className="text-gray-600">Glorious Years</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-college-primary mb-2">1000+</div>
            <div className="text-gray-600">Alumni Network</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-college-primary mb-2">130+</div>
            <div className="text-gray-600">Recruiting Companies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-college-primary mb-2">75%</div>
            <div className="text-gray-600">Placement Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeOverview;
