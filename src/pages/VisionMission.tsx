import React from 'react';
import { Eye, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const VisionMission = () => {
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Vision & Mission
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering Future Technocrats with Global Competency
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-college-dark mb-4">Our Vision, Mission & Operating Philosophy</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              ISB&M's programs are AICTE approved and directed towards employment & career. Our placement cell 
              ensures all students graduate with good job offers from industry-recognized training courses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Vision */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-college-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  To Empower Efficient and Innovative Technocrats to fit into Global Competency.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-college-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Ensuring State Of The Art Outcome Based Engineering Educational Scenario</li>
                  <li>• Fostering Strong Industry-Institute Partnership for Life Long Career</li>
                  <li>• Linking Students with Societal Challenges Through Techno-Societal Arena</li>
                  <li>• Imparting Leadership Qualities Through Multi Dimensional Capacity Building</li>
                </ul>
              </CardContent>
            </Card>

            {/* Philosophy */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-college-primary">Operating Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Operate with Responsibility, Integrity, Professionalism and Partnership</li>
                  <li>• Think with Speed, Flexibility and an Open Mind</li>
                  <li>• Use Comprehensive Understanding of Global Education to Set Standards</li>
                </ul>
              </CardContent>
            </Card>
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

      <Footer />
    </div>
  );
};

export default VisionMission;
