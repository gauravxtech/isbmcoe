
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, Users, Award, Cpu, Zap, Trophy, Star } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AISA = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const aisaStats = [
    { label: "Active Members", value: "100+", icon: Users, color: "text-cyan-600" },
    { label: "AI Projects", value: "25+", icon: Cpu, color: "text-purple-600" },
    { label: "Research Sessions", value: "16+", icon: Calendar, color: "text-green-600" },
    { label: "Innovation Awards", value: "8+", icon: Award, color: "text-orange-600" }
  ];

  const events = [
    { name: "AI Summit", description: "Annual artificial intelligence conference and exhibition", participants: "150+" },
    { name: "Neural Network Workshop", description: "Deep learning and neural network implementation sessions", participants: "80+" },
    { name: "AI Ethics Symposium", description: "Discussions on responsible AI and ethical considerations", participants: "120+" },
    { name: "Robotics Challenge", description: "AI-powered robotics competition and demonstrations", participants: "60+" },
    { name: "Computer Vision Lab", description: "Hands-on training in image processing and computer vision", participants: "70+" },
    { name: "AI Startup Pitch", description: "Platform for students to pitch AI-based startup ideas", participants: "50+" }
  ];

  const achievements = [
    { event: "International AI Competition", position: "3rd Place", year: "2024" },
    { event: "AI Innovation Challenge", position: "Winner", year: "2024" },
    { event: "Best AI Society Award", position: "National Level", year: "2023" },
    { event: "Computer Vision Contest", position: "2nd Place", year: "2023" },
    { event: "AI Research Symposium", position: "Best Paper Award", year: "2023" }
  ];

  const subNavItems = [
    { id: 'overview', label: 'Overview', icon: Star },
    { id: 'events', label: 'Events & Activities', icon: Calendar },
    { id: 'achievements', label: 'Achievements', icon: Award }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aisaStats.map((stat, index) => (
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

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">About AISA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The Artificial Intelligence Students Association (AISA) is committed to advancing the field 
                  of artificial intelligence among students at ISBM College of Engineering. We focus on exploring 
                  cutting-edge AI technologies, promoting research, and fostering innovation in intelligent systems.
                </p>
                <p className="text-gray-700">
                  AISA provides a platform for students to learn about various AI domains including machine learning, 
                  deep learning, computer vision, natural language processing, and robotics. Through workshops, 
                  competitions, and collaborative projects, we prepare students for the future of AI-driven technology 
                  and encourage ethical AI development.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case 'events':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Events & Activities</CardTitle>
                <p className="text-gray-600">AI and intelligent systems focused events</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {events.map((event, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
                      <h3 className="font-semibold text-college-primary mb-2 text-lg">{event.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                      <div className="text-college-accent font-medium text-sm">
                        Participants: {event.participants}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'achievements':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">AISA Achievements</CardTitle>
                <p className="text-gray-600">Recognition in AI and intelligent systems</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
                      <div className="flex items-center space-x-4">
                        <Trophy className="h-8 w-8 text-college-accent" />
                        <div>
                          <h4 className="font-semibold text-college-primary">{achievement.event}</h4>
                          <p className="text-sm text-gray-600">{achievement.position}</p>
                        </div>
                      </div>
                      <div className="text-college-secondary font-medium">
                        {achievement.year}
                      </div>
                    </div>
                  ))}
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

      <div className="bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AISA
            </h1>
            <p className="text-xl text-white/90 mb-4">Artificial Intelligence Students Association</p>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="hover:text-white cursor-pointer">Life @ COE</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">AISA</span>
            </nav>
          </div>
        </div>
      </div>

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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISA;
