import React from 'react';
import { Trophy, Users, Calendar, MapPin, Clock, Star, Target, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const SportsRecreation = () => {
  useSEO({
    title: "Sports & Recreation - ISBM College of Engineering",
    description: "Sports facilities, recreation activities, and fitness programs at ISBM College of Engineering",
    canonical: "https://isbmcoe.edu.in/sports-recreation"
  });

  const sportsCategories = [
    {
      category: "Outdoor Sports",
      icon: Trophy,
      sports: [
        { name: "Cricket", facility: "Full-size Cricket Ground", level: "State Level" },
        { name: "Football", facility: "FIFA Standard Field", level: "University Level" },
        { name: "Basketball", facility: "2 Courts", level: "District Level" },
        { name: "Volleyball", facility: "4 Courts", level: "University Level" },
        { name: "Badminton", facility: "6 Courts", level: "State Level" },
        { name: "Tennis", facility: "2 Courts", level: "District Level" },
        { name: "Athletics", facility: "400m Track", level: "State Level" },
        { name: "Kabaddi", facility: "Competition Court", level: "University Level" }
      ]
    },
    {
      category: "Indoor Sports",
      icon: Target,
      sports: [
        { name: "Table Tennis", facility: "8 Tables", level: "State Level" },
        { name: "Chess", facility: "Dedicated Hall", level: "National Level" },
        { name: "Carrom", facility: "12 Boards", level: "University Level" },
        { name: "Gymnasium", facility: "Modern Equipment", level: "Fitness Center" },
        { name: "Yoga & Meditation", facility: "Specialized Hall", level: "Wellness Center" },
        { name: "Indoor Basketball", facility: "Air-conditioned Court", level: "District Level" }
      ]
    }
  ];

  const facilities = [
    {
      name: "Sports Complex",
      description: "Modern 50,000 sq ft complex with multiple sports facilities",
      features: ["Changing Rooms", "Equipment Storage", "First Aid Center", "Spectator Seating"]
    },
    {
      name: "Fitness Center",
      description: "Fully equipped gymnasium with modern workout equipment",
      features: ["Cardio Machines", "Weight Training", "Personal Trainers", "Fitness Programs"]
    },
    {
      name: "Swimming Pool",
      description: "Olympic-size swimming pool with coaching facilities",
      features: ["25m Pool", "Diving Section", "Swimming Coaching", "Water Sports"]
    },
    {
      name: "Sports Medicine Center",
      description: "Comprehensive sports medicine and physiotherapy facility",
      features: ["Injury Treatment", "Physiotherapy", "Sports Psychology", "Nutrition Counseling"]
    }
  ];

  const achievements = [
    {
      sport: "Cricket",
      achievement: "Inter-University Championship Winners",
      year: "2023",
      level: "State Level"
    },
    {
      sport: "Basketball",
      achievement: "Best Team Performance Award",
      year: "2023",
      level: "University Level"
    },
    {
      sport: "Athletics",
      achievement: "Individual Gold Medals",
      year: "2023",
      level: "State Level"
    },
    {
      sport: "Chess",
      achievement: "National Championship Qualification",
      year: "2023",
      level: "National Level"
    },
    {
      sport: "Football",
      achievement: "Regional Tournament Runners-up",
      year: "2022",
      level: "Regional Level"
    },
    {
      sport: "Volleyball",
      achievement: "University League Champions",
      year: "2022",
      level: "University Level"
    }
  ];

  const events = [
    {
      name: "Annual Sports Meet",
      date: "February 2024",
      description: "College-wide sports competition with all departments participating",
      participants: "1500+"
    },
    {
      name: "Inter-Collegiate Tournament",
      date: "March 2024",
      description: "Regional competition hosting 20+ engineering colleges",
      participants: "2000+"
    },
    {
      name: "Fitness Challenge Week",
      date: "January 2024",
      description: "Health and fitness awareness program with various activities",
      participants: "800+"
    },
    {
      name: "Adventure Sports Camp",
      date: "December 2023",
      description: "Outdoor adventure activities including trekking and rock climbing",
      participants: "150+"
    }
  ];

  const programs = [
    {
      name: "Daily Fitness Classes",
      time: "6:00 AM - 8:00 AM & 5:00 PM - 7:00 PM",
      description: "Regular fitness sessions led by certified trainers"
    },
    {
      name: "Sports Coaching",
      time: "4:00 PM - 6:00 PM",
      description: "Professional coaching for various sports by qualified coaches"
    },
    {
      name: "Yoga & Meditation",
      time: "7:00 AM - 8:00 AM",
      description: "Morning yoga sessions for mental and physical wellness"
    },
    {
      name: "Weekend Tournaments",
      time: "Saturdays & Sundays",
      description: "Regular tournaments and friendly matches among students"
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
            Sports & Recreation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Promoting physical fitness, sportsmanship, and recreational activities for holistic development 
            of our students. Experience world-class sports facilities and professional coaching.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Join Sports Activities
          </Button>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Sports Facilities
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional-grade facilities for all types of sports and fitness activities
            </p>
          </div>
          
          <div className="space-y-12">
            {sportsCategories.map((category, index) => (
              <div key={index}>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.sports.map((sport, sportIndex) => (
                    <Card key={sportIndex} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center">
                        <CardTitle className="text-lg">{sport.name}</CardTitle>
                        <Badge variant="secondary">{sport.level}</Badge>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground">{sport.facility}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              World-Class Facilities
            </h2>
            <p className="text-xl text-muted-foreground">
              Modern infrastructure supporting all aspects of sports and recreation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{facility.name}</CardTitle>
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Recent Achievements
            </h2>
            <p className="text-xl text-muted-foreground">
              Celebrating our students' success in various sports competitions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{achievement.sport}</CardTitle>
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary">{achievement.level}</Badge>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">{achievement.achievement}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Programs */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Upcoming Events */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Sports Events
                </h2>
                <p className="text-muted-foreground">
                  Annual sports calendar and competitions
                </p>
              </div>
              
              <div className="space-y-6">
                {events.map((event, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{event.name}</CardTitle>
                        <Badge variant="outline">{event.date}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-2">{event.description}</p>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{event.participants} participants</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Regular Programs */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Regular Programs
                </h2>
                <p className="text-muted-foreground">
                  Daily and weekly sports and fitness activities
                </p>
              </div>
              
              <div className="space-y-6">
                {programs.map((program, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{program.name}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{program.time}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{program.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Sports Statistics
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p className="text-muted-foreground">Sports Disciplines</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1500+</div>
              <p className="text-muted-foreground">Active Athletes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Annual Tournaments</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SportsRecreation;