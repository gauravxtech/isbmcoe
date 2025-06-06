
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { studentClubs } from '../../data/campusLifeData';

const StudentClubsSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-college-primary">Student Clubs & Societies</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {studentClubs.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-college-secondary mb-4">{category.category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.clubs.map((club, clubIndex) => (
                  <div key={clubIndex} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-medium text-college-primary mb-2">{club.name}</h4>
                    <p className="text-gray-600 text-sm">{club.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentClubsSection;
