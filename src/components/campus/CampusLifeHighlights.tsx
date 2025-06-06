
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { campusLifeHighlights } from '../../data/campusLifeData';

const CampusLifeHighlights = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-college-primary">Campus Life Highlights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campusLifeHighlights.map((highlight, index) => (
            <div key={index} className="text-center p-4 bg-gradient-to-br from-college-primary/5 to-college-accent/5 rounded-lg border border-college-primary/20">
              <highlight.icon className="h-12 w-12 text-college-accent mx-auto mb-3" />
              <h3 className="font-semibold text-college-secondary mb-2">{highlight.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{highlight.description}</p>
              <Badge variant="secondary">{highlight.count}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CampusLifeHighlights;
