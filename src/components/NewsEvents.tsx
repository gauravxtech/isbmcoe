
import React, { useState } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNewsEvents } from '@/hooks/useData';

const NewsEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: newsEvents = [], isLoading, error } = useNewsEvents();

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

  if (error) {
    console.error('Error in NewsEvents component:', error);
  }

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

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-college-primary"></div>
          </div>
        ) : (
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
        )}

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
