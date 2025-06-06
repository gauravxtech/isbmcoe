
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Calendar, Music, Users, Award, Camera, Star, Trophy, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CulturalEvents = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const culturalStats = [
    { label: "Annual Events", value: "25+", icon: Calendar, color: "text-purple-600" },
    { label: "Student Participation", value: "90%", icon: Users, color: "text-blue-600" },
    { label: "Cultural Clubs", value: "12", icon: Music, color: "text-green-600" },
    { label: "Awards Won", value: "50+", icon: Trophy, color: "text-orange-600" }
  ];

  const majorEvents = [
    { name: "ISBM Fiesta", description: "Annual cultural festival with competitions, performances, and exhibitions", duration: "3 Days", participants: "2000+" },
    { name: "Freshers Welcome", description: "Grand welcome ceremony for new students with cultural programs", duration: "1 Day", participants: "500+" },
    { name: "Farewell Party", description: "Memorable send-off for graduating students with entertainment", duration: "1 Day", participants: "400+" },
    { name: "Navratri Celebration", description: "Traditional dance and cultural celebration", duration: "9 Days", participants: "1500+" },
    { name: "Inter-College Fest", description: "Cultural competitions with other engineering colleges", duration: "2 Days", participants: "1000+" },
    { name: "Technical & Cultural Fest", description: "Combined technical and cultural event showcasing talents", duration: "2 Days", participants: "800+" }
  ];

  const culturalClubs = [
    { name: "Dance Club", description: "Various dance forms including classical, western, and folk", members: "120+" },
    { name: "Music Club", description: "Vocal and instrumental music performances", members: "80+" },
    { name: "Drama Club", description: "Theatre performances and street plays", members: "60+" },
    { name: "Art & Craft Club", description: "Painting, sketching, and creative artwork", members: "70+" },
    { name: "Photography Club", description: "Capturing memories and artistic photography", members: "90+" },
    { name: "Literary Club", description: "Poetry, storytelling, and creative writing", members: "50+" }
  ];

  const achievements = [
    { event: "Inter-University Dance Competition", position: "1st Place", year: "2024" },
    { event: "State Level Drama Festival", position: "Best Performance", year: "2024" },
    { event: "Regional Music Competition", position: "2nd Place", year: "2023" },
    { event: "Photography Contest", position: "Winner", year: "2023" },
    { event: "Cultural Fest Championship", position: "Overall Champions", year: "2023" },
    { event: "Folk Dance Competition", position: "1st Runner Up", year: "2022" }
  ];

  const subNavItems = [
    { id: 'overview', label: 'Overview', icon: Star },
    { id: 'events', label: 'Major Events', icon: Calendar },
    { id: 'clubs', label: 'Cultural Clubs', icon: Music },
    { id: 'achievements', label: 'Achievements', icon: Award }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {culturalStats.map((stat, index) => (
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

            {/* About Cultural Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Cultural Events at ISBM COE</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The Cultural Committee at ISBM College of Engineering is dedicated to fostering creativity, 
                  artistic expression, and cultural diversity among students. Our vibrant cultural scene provides 
                  numerous opportunities for students to showcase their talents, learn new skills, and celebrate 
                  various traditions and festivals.
                </p>
                <p className="text-gray-700">
                  From grand annual festivals to intimate cultural gatherings, we organize events that bring 
                  together students from all backgrounds. Our cultural activities not only provide entertainment 
                  but also help in personality development, confidence building, and creating lasting memories 
                  during the college journey.
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
                <CardTitle className="text-2xl text-college-primary">Major Cultural Events</CardTitle>
                <p className="text-gray-600">Annual celebrations and festivals at ISBM COE</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {majorEvents.map((event, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
                      <h3 className="font-semibold text-college-primary mb-2 text-lg">{event.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-college-accent font-medium">Duration: {event.duration}</span>
                        <span className="text-college-secondary font-medium">Participants: {event.participants}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'clubs':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-primary">Cultural Clubs & Societies</CardTitle>
                <p className="text-gray-600">Join our vibrant cultural community</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {culturalClubs.map((club, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-medium text-college-primary mb-2">{club.name}</h4>
                      <p className="text-gray-600 text-sm mb-3">{club.description}</p>
                      <div className="text-college-accent font-medium text-sm">
                        Members: {club.members}
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
                <CardTitle className="text-2xl text-college-primary">Cultural Achievements</CardTitle>
                <p className="text-gray-600">Recent awards and recognitions</p>
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

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cultural Events
            </h1>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">Cultural Events</span>
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

export default CulturalEvents;
