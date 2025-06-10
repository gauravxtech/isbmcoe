
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageSquare, AlertTriangle, CheckCircle, Plus, Search, Filter } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';

const Complaints = () => {
  useSEO({
    title: "Complaints Management - ISBM College",
    description: "Handle student and staff complaints",
    canonical: "https://isbmcoe.edu.in/admin/complaints"
  });

  const complaintStats = [
    { label: 'Total Complaints', value: '45', icon: MessageSquare, color: 'text-blue-600' },
    { label: 'Pending', value: '12', icon: AlertTriangle, color: 'text-orange-600' },
    { label: 'Resolved', value: '33', icon: CheckCircle, color: 'text-green-600' },
    { label: 'High Priority', value: '3', icon: AlertTriangle, color: 'text-red-600' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-orange-500" />
              Complaints Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Handle and resolve student & staff grievances</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="h-4 w-4 mr-2" />
              Add Complaint
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complaintStats.map((stat, index) => (
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
            <CardTitle>Recent Complaints</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Complaint #{item}</h3>
                    <p className="text-sm text-gray-600">Category: Infrastructure</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={item % 3 === 0 ? "destructive" : item % 2 === 0 ? "default" : "secondary"}>
                      {item % 3 === 0 ? "High" : item % 2 === 0 ? "Pending" : "Resolved"}
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

export default Complaints;
