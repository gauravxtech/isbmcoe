
import React, { useState } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NewsEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsEvents = [
    {
      id: 1,
      type: "Achievement",
      title: "ISBM College Of Engineering Pune Received B++ Accreditation By NAAC",
      excerpt: "Our institution has achieved NAAC B++ grade, recognizing our commitment to quality education and infrastructure...",
      date: "2024-03-15",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
      category: "Accreditation"
    },
    {
      id: 2,
      type: "Event",
      title: "International Conference on Multidisciplinary Emerging Trends in Engineering and Technology (ICMETET 2024)",
      excerpt: "Join researchers and industry experts for cutting-edge discussions on emerging technologies and innovations...",
      date: "2024-06-20",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      category: "Conference"
    },
    {
      id: 3,
      type: "Recruitment",
      title: "Faculty Appointments - Professor, Associate Professor, Assistant Professor",
      excerpt: "ISBM COE invites applications for various faculty positions. Interested candidates should send resume to Careercoe@isbm.ac.in...",
      date: "2024-05-10",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "Recruitment"
    },
    {
      id: 4,
      type: "Admission",
      title: "Admissions Open for First Year & Direct Second Year Engineering",
      excerpt: "Apply now for various engineering programs. Direct second year admissions also available for diploma holders...",
      date: "2024-06-01",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      category: "Admission"
    },
    {
      id: 5,
      type: "Achievement",
      title: "Outstanding Placement Results - 16 Lakhs Highest Package",
      excerpt: "Record placement achievements with highest package of ₹16 lakhs and 75% overall placement rate...",
      date: "2024-04-25",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop",
      category: "Placement"
    },
    {
      id: 6,
      type: "Infrastructure",
      title: "Extended Library and Laboratory Access - Pioneer in Pune",
      excerpt: "ISBM COE continues to be the pioneer in providing extended library hours and laboratory access in Pune...",
      date: "2024-07-15",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      category: "Infrastructure"
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, newsEvents.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Accreditation': 'bg-green-600',
      'Conference': 'bg-blue-600',
      'Recruitment': 'bg-purple-600',
      'Admission': 'bg-orange-600',
      'Placement': 'bg-emerald-600',
      'Infrastructure': 'bg-indigo-600'
    };
    return colors[category] || 'bg-gray-600';
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-college-dark mb-4">
            Latest News & Events
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest achievements, events, and announcements 
            from ISBM College of Engineering, Pune.
          </p>
        </div>

        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {newsEvents.map((item) => (
                  <div key={item.id} className="w-1/3 flex-shrink-0 px-3">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(item.category)}`}>
                            {item.type}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-white text-college-dark px-2 py-1 rounded text-xs font-medium">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          {formatDate(item.date)}
                        </div>
                        <h3 className="text-xl font-bold text-college-dark mb-3 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {item.excerpt}
                        </p>
                        <Button 
                          variant="outline" 
                          className="w-full group border-college-primary text-college-primary hover:bg-college-primary hover:text-white"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-6 w-6 text-college-primary" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-6 w-6 text-college-primary" />
            </button>
          </div>

          {/* Mobile View - Show all items stacked */}
          <div className="md:hidden space-y-6">
            {newsEvents.slice(0, 4).map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(item.category)}`}>
                      {item.type}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(item.date)}
                  </div>
                  <h3 className="text-xl font-bold text-college-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.excerpt}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group border-college-primary text-college-primary hover:bg-college-primary hover:text-white"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <Button 
            className="bg-college-primary hover:bg-blue-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Read All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
