import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AlumniCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const alumni = [
    {
      id: 1,
      name: "Priya Sharma",
      batch: "2020",
      position: "Software Engineer",
      company: "Google",
      image: "/lovable-uploads/18fee38c-1acf-462a-825a-cda10c5e7381.png",
      testimonial: "ISBM COE provided me with the technical foundation and practical skills that helped me secure my dream job at Google. The faculty's mentorship was invaluable.",
      rating: 5
    },
    {
      id: 2,
      name: "Rahul Patel",
      batch: "2019",
      position: "Data Scientist",
      company: "Microsoft",
      image: "/lovable-uploads/30216b9d-1287-4b01-8ab1-8429e5f6f329.png",
      testimonial: "The AI and Machine Learning program at ISBM COE is world-class. The hands-on projects and industry exposure prepared me perfectly for my role at Microsoft.",
      rating: 5
    },
    {
      id: 3,
      name: "Anita Desai",
      batch: "2021",
      position: "Product Manager",
      company: "Amazon",
      image: "/lovable-uploads/a07dab32-a06d-4aa9-ab59-2d061f93201f.png",
      testimonial: "ISBM COE not only taught me technical skills but also leadership and communication skills that are essential in my current role as a Product Manager.",
      rating: 5
    },
    {
      id: 4,
      name: "Vikram Singh",
      batch: "2018",
      position: "Senior Developer",
      company: "Tesla",
      image: "/lovable-uploads/b592b170-56b4-4e52-b3ff-c4f500363b94.png",
      testimonial: "The practical approach to learning and the state-of-the-art labs at ISBM COE gave me a competitive edge in the industry.",
      rating: 5
    },
    {
      id: 5,
      name: "Sneha Reddy",
      batch: "2020",
      position: "AI Research Engineer",
      company: "NVIDIA",
      image: "/lovable-uploads/c63a8ec4-3adb-47a0-9e29-d081de2cff06.png",
      testimonial: "The research opportunities and mentorship at ISBM COE helped me develop innovative solutions and land my dream job in AI research.",
      rating: 5
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % alumni.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling, alumni.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % alumni.length);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000); // Resume after 10 seconds
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + alumni.length) % alumni.length);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000); // Resume after 10 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-college-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-college-dark mb-4">
            Our Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our distinguished alumni who are making their mark in leading 
            technology companies worldwide.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {alumni.map((alum) => (
                <div key={alum.id} className="w-full flex-shrink-0">
                  <Card className="mx-4 shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-college-accent/20 shadow-lg">
                            <img 
                              src={alum.image} 
                              alt={alum.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                          <div className="mb-4">
                            <Quote className="h-8 w-8 text-college-accent mx-auto md:mx-0 mb-4" />
                            <p className="text-gray-700 text-lg leading-relaxed italic">
                              "{alum.testimonial}"
                            </p>
                          </div>

                          {/* Rating */}
                          <div className="flex justify-center md:justify-start mb-4">
                            {[...Array(alum.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                          </div>

                          {/* Alumni Info */}
                          <div>
                            <h3 className="text-xl font-bold text-college-dark mb-1">
                              {alum.name}
                            </h3>
                            <p className="text-college-primary font-semibold mb-1">
                              {alum.position} at {alum.company}
                            </p>
                            <p className="text-gray-500">
                              Batch of {alum.batch}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronLeft className="h-6 w-6 text-college-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronRight className="h-6 w-6 text-college-primary" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {alumni.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-college-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniCarousel;
