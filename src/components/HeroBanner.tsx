
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useContent } from '@/hooks/useContent';

const HeroBanner = () => {
  const { banners, marqueeTexts, loading } = useContent();

  if (loading) {
    return (
      <div className="relative bg-gradient-to-r from-college-primary to-college-secondary text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-white/20 rounded mb-4"></div>
              <div className="h-12 bg-white/20 rounded mb-6"></div>
              <div className="h-6 bg-white/20 rounded mb-8"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen">
      {/* Marquee */}
      {marqueeTexts.length > 0 && (
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {marqueeTexts.map((item, index) => (
              <span key={item.id} className="mx-8 text-sm font-medium">
                {item.text}
                {index < marqueeTexts.length - 1 && ' • '}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Hero Carousel */}
      {banners.length > 0 ? (
        <Carousel className="w-full h-screen">
          <CarouselContent>
            {banners.map((banner) => (
              <CarouselItem key={banner.id}>
                <div className="relative h-screen w-full overflow-hidden">
                  <img
                    src={banner.image_url}
                    alt={banner.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center text-white max-w-4xl mx-auto px-4">
                      {banner.highlight_text && (
                        <Badge 
                          variant="secondary" 
                          className="mb-4 bg-white/20 text-white border-white/30 text-sm px-4 py-2"
                        >
                          {banner.highlight_text}
                        </Badge>
                      )}
                      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                        {banner.title}
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-gray-200">
                        {banner.subtitle}
                      </p>
                      {banner.cta_text && (
                        <Button 
                          size="lg" 
                          className="bg-college-primary hover:bg-college-secondary text-white px-8 py-3 text-lg"
                        >
                          {banner.cta_text}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {banners.length > 1 && (
            <>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </>
          )}
        </Carousel>
      ) : (
        <div className="relative bg-gradient-to-r from-college-primary to-college-secondary text-white min-h-screen flex items-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              ISBM College of Engineering
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Shaping Future Engineers with Innovation and Technology
            </p>
            <Button size="lg" className="bg-white text-college-primary hover:bg-gray-100">
              Explore Programs
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroBanner;
