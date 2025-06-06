
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { campusFacilities } from '../../data/campusLifeData';

const CampusFacilitiesSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-college-primary">Campus Facilities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {campusFacilities.map((facility, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center mb-3">
                <facility.icon className="h-6 w-6 text-college-accent mr-3" />
                <h3 className="font-semibold text-college-secondary">{facility.title}</h3>
              </div>
              <p className="text-gray-600 mb-3">{facility.description}</p>
              <div className="flex flex-wrap gap-2">
                {facility.features.map((feature, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CampusFacilitiesSection;
