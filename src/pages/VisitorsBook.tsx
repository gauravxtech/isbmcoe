
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Clock, Plus, Search, Filter } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';

const VisitorsBook = () => {
  useSEO({
    title: "Visitors Book - ISBM College",
    description: "Manage visitor records and entries",
    canonical: "https://isbmcoe.edu.in/admin/visitors"
  });

  const visitorStats = [
    { label: "Today's Visitors", value: '24', icon: Users, color: 'text-blue-600' },
    { label: 'Currently Inside', value: '8', icon: Clock, color: 'text-green-600' },
    { label: 'This Week', value: '156', icon: BookOpen, color: 'text-purple-600' },
    { label: 'VIP Visits', value: '3', icon: Users, color: 'text-orange-600' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-green-500" />
              Visitors Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Track and manage campus visitors</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button className="bg-green-500 hover:bg-green-600">
              <Plus className="h-4 w-4 mr-2" />
              New Visitor
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visitorStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Visitor {item}</h3>
                    <p className="text-sm text-gray-600">Purpose: Official Meeting</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={item % 2 === 0 ? "default" : "secondary"}>
                      {item % 2 === 0 ? "Inside" : "Exited"}
                    </Badge>
                    <Button size="sm">Check Out</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default VisitorsBook;
