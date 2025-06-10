
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, UserCheck, BookOpen, Plus, Search, Filter } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';

const AllTeachers = () => {
  useSEO({
    title: "All Teachers - ISBM College",
    description: "Manage faculty members and teachers",
    canonical: "https://isbmcoe.edu.in/admin/teachers"
  });

  const teacherStats = [
    { label: 'Total Faculty', value: '186', icon: Users, color: 'text-blue-600' },
    { label: 'Active Teachers', value: '178', icon: UserCheck, color: 'text-green-600' },
    { label: 'Departments', value: '8', icon: BookOpen, color: 'text-purple-600' },
    { label: 'New Joinings', value: '5', icon: Users, color: 'text-orange-600' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-500" />
              Faculty Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Manage teachers and faculty members</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Plus className="h-4 w-4 mr-2" />
              Add Teacher
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teacherStats.map((stat, index) => (
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
            <CardTitle>Faculty Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      T{item}
                    </div>
                    <div>
                      <h3 className="font-semibold">Dr. Teacher {item}</h3>
                      <p className="text-sm text-gray-600">Computer Engineering Department</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Active</Badge>
                    <Button size="sm">View Profile</Button>
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

export default AllTeachers;
