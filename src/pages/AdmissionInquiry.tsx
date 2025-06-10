
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Users, Calendar, Plus, Search, Filter } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';

const AdmissionInquiry = () => {
  useSEO({
    title: "Admission Inquiry - ISBM College",
    description: "Manage admission inquiries and applications",
    canonical: "https://isbmcoe.edu.in/admin/admission-inquiry"
  });

  const inquiryStats = [
    { label: 'Total Inquiries', value: '247', icon: FileText, color: 'text-blue-600' },
    { label: 'Pending Follow-up', value: '23', icon: Calendar, color: 'text-orange-600' },
    { label: 'Converted', value: '89', icon: Users, color: 'text-green-600' },
    { label: 'This Week', value: '18', icon: FileText, color: 'text-purple-600' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-500" />
              Admission Inquiry Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Track and manage prospective student inquiries</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Plus className="h-4 w-4 mr-2" />
              Add Inquiry
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inquiryStats.map((stat, index) => (
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
            <CardTitle>Recent Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Student Name {item}</h3>
                    <p className="text-sm text-gray-600">Computer Engineering</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={item % 2 === 0 ? "default" : "secondary"}>
                      {item % 2 === 0 ? "Pending" : "Contacted"}
                    </Badge>
                    <Button size="sm">View Details</Button>
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

export default AdmissionInquiry;
