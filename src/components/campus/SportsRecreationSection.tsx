
import React from 'react';
import { Trophy, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { sportsActivities } from '../../data/campusLifeData';

const SportsRecreationSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-college-primary">
          <Trophy className="mr-3 h-6 w-6" />
          Sports & Recreation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
          {sportsActivities.map((sport, index) => (
            <Badge key={index} variant="outline" className="text-center py-2">
              {sport}
            </Badge>
          ))}
        </div>
        <div className="mb-6 p-4 bg-college-primary/5 rounded-lg">
          <h4 className="font-semibold text-college-primary mb-2">Sports Facilities</h4>
          <p className="text-gray-600">
            Our campus features a modern sports complex with indoor and outdoor facilities, 
            including a gymnasium, swimming pool, tennis court, basketball courts, and a cricket ground. 
            Regular coaching sessions and tournaments are organized throughout the year.
          </p>
        </div>
        <div className="text-center">
          <Button 
            onClick={() => window.open('https://sportscell.netlify.app/', '_blank')}
            className="bg-college-primary hover:bg-college-primary/90 text-white"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit COE Sports Portal
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SportsRecreationSection;
