
import React from 'react';
import { TrendingUp, Users, Building, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PlacementMetrics = () => {
  const metrics = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "₹16 Lakhs",
      label: "Highest Package",
      subtext: "Record Achievement",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "75%",
      label: "Placement Rate",
      subtext: "Consistent Performance",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Building className="h-8 w-8" />,
      value: "130+",
      label: "Esteemed Companies",
      subtext: "Industry Partners",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "₹5.5 Lakhs",
      label: "Average Package",
      subtext: "Competitive Offers",
      color: "from-orange-500 to-red-600"
    }
  ];

  const topRecruiters = [
    "TATA Technologies", "TATA Consultancy", "TATA Communications", "TATA Motors",
    "Accenture", "Capgemini", "IBM", "Microsoft", "Infosys", "Wipro",
    "Tech Mahindra", "HCL", "Cognizant", "Mastercard", "Qualcomm", "Cummins India",
    "Thermax", "Atlas Copco", "Panasonic", "Zensar", "Force Motors", "Endurance"
  ];

  return (
    <section className="py-16 bg-college-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Outstanding Placement Record
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Our strong industry partnerships and comprehensive training programs ensure 
            excellent placement opportunities with leading companies across various sectors.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-blue-200 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-blue-300">
                  {metric.subtext}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Why Companies Choose ISBM Graduates
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-college-accent rounded-full"></div>
                <span className="text-blue-200">Industry-Ready Skills with Live Projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-college-accent rounded-full"></div>
                <span className="text-blue-200">Strong Technical & Soft Skills Training</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-college-accent rounded-full"></div>
                <span className="text-blue-200">Excellent Communication & Leadership</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-college-accent rounded-full"></div>
                <span className="text-blue-200">Project-Based Learning Approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-college-accent rounded-full"></div>
                <span className="text-blue-200">Value Addition with Graduation</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Our Recruiting Partners
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {topRecruiters.slice(0, 12).map((company, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20">
                  <span className="text-white font-semibold text-sm">{company}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <span className="text-blue-200 text-sm">And many more leading companies...</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Launch Your Career?
            </h3>
            <p className="text-blue-200 mb-6">
              Join our comprehensive placement preparation programs with aptitude training, 
              technical skills development, and communication enhancement.
            </p>
            <button className="bg-college-accent hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Learn More About Placements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementMetrics;
