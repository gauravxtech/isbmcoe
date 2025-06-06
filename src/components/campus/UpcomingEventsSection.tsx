
import React from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { upcomingEvents } from '../../data/campusLifeData';

const UpcomingEventsSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-college-primary">
          <Calendar className="mr-3 h-6 w-6" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="border-l-4 border-college-accent pl-4 py-2">
              <h4 className="font-semibold text-college-secondary">{event.event}</h4>
              <p className="text-college-accent font-medium text-sm">{event.date}</p>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingEventsSection;
