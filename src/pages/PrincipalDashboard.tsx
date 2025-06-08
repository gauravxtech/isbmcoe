
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Users, GraduationCap, TrendingUp, FileText, Calendar, AlertCircle, CheckCircle } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useSEO } from '@/hooks/useSEO';

const PrincipalDashboard = () => {
  useSEO({
    title: "Principal Dashboard - ISBM College",
    description: "Principal administrative dashboard",
    canonical: "https://isbmcoe.edu.in/admin/principal-dashboard"
  });

  const collegeStats = [
    { label: 'Total Students', value: '2,547', icon: GraduationCap, change: '+8.2%', color: 'text-blue-600' },
    { label: 'Faculty Members', value: '186', icon: Users, change: '+5.1%', color: 'text-green-600' },
    { label: 'Departments', value: '12', icon: Building2, change: '0%', color: 'text-purple-600' },
    { label: 'Placement Rate', value: '94%', change: '+12%', color: 'text-orange-600' },
  ];

  const pendingApprovals = [
    { item: 'Faculty Leave Applications', count: 12, priority: 'medium' },
    { item: 'Student Transfer Requests', count: 8, priority: 'high' },
    { item: 'Budget Approvals', count: 3, priority: 'high' },
    { item: 'Infrastructure Proposals', count: 5, priority: 'low' },
  ];

  const departmentPerformance = [
    { name: 'Computer Engineering', students: 420, faculty: 28, performance: 92 },
    { name: 'Mechanical Engineering', students: 380, faculty: 25, performance: 88 },
    { name: 'Electronics & Telecom', students: 350, faculty: 22, performance: 90 },
    { name: 'Civil Engineering', students: 300, faculty: 20, performance: 85 },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Building2 className="h-8 w-8 text-purple-500" />
              Principal Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">ISBM College of Engineering - Administrative Overview</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
            <Button className="bg-purple-500 hover:bg-purple-600">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Meeting
            </Button>
          </div>
        </div>

        {/* College Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collegeStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className={`text-sm ${stat.color} flex items-center gap-1`}>
                      <TrendingUp className="h-3 w-3" />
                      {stat.change}
                    </p>
                  </div>
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pending Approvals & Department Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Pending Approvals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApprovals.map((approval, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{approval.item}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{approval.count} items pending</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={
                        approval.priority === 'high' ? 'destructive' :
                        approval.priority === 'medium' ? 'default' : 'secondary'
                      }>
                        {approval.priority}
                      </Badge>
                      <Button size="sm">Review</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Department Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentPerformance.map((dept, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{dept.name}</h4>
                      <Badge variant="outline">{dept.performance}%</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>Students: {dept.students}</span>
                      <span>Faculty: {dept.faculty}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Administrative Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <Users className="h-6 w-6 mb-2" />
                Faculty Management
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <GraduationCap className="h-6 w-6 mb-2" />
                Student Affairs
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <FileText className="h-6 w-6 mb-2" />
                Academic Reports
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Building2 className="h-6 w-6 mb-2" />
                Infrastructure
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default PrincipalDashboard;
