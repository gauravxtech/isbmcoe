
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { useContent } from '@/hooks/useContent';

const NewsEvents = () => {
  const { newsEvents, loading } = useContent();

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded mb-4 mx-auto w-64"></div>
              <div className="h-4 bg-gray-300 rounded mx-auto w-96"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white rounded-lg h-64"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming events at ISBM College
          </p>
        </div>

        {newsEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {newsEvents.slice(0, 6).map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image_url || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop'}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={item.type === 'achievement' ? 'default' : 'secondary'}>
                      {item.type}
                    </Badge>
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-500">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-college-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(item.event_date || item.created_at).toLocaleDateString()}
                    </div>
                    <Button variant="ghost" size="sm" className="text-college-primary">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No news or events available at the moment.</p>
          </div>
        )}

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-college-primary text-college-primary hover:bg-college-primary hover:text-white"
          >
            View All News & Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
