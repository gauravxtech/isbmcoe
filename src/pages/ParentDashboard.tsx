
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Users, GraduationCap, Calendar, TrendingUp, FileText, Bell, MessageSquare, CreditCard } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useSEO } from '@/hooks/useSEO';

const ParentDashboard = () => {
  useSEO({
    title: "Parent Dashboard - ISBM College",
    description: "Parent portal for student monitoring",
    canonical: "https://isbmcoe.edu.in/admin/parent-dashboard"
  });

  const studentStats = [
    { label: 'Current CGPA', value: '8.4', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Attendance', value: '87%', icon: Calendar, color: 'text-blue-600' },
    { label: 'Assignments', value: '3 Due', icon: FileText, color: 'text-orange-600' },
    { label: 'Fees Status', value: 'Paid', icon: CreditCard, color: 'text-purple-600' },
  ];

  const recentActivity = [
    { action: 'Assignment submitted - Database Design', date: '2 days ago', type: 'success' },
    { action: 'Attended Computer Networks lecture', date: '3 days ago', type: 'info' },
    { action: 'Missed Software Engineering class', date: '5 days ago', type: 'warning' },
    { action: 'Scored 92% in Mathematics Quiz', date: '1 week ago', type: 'success' },
  ];

  const upcomingEvents = [
    { event: 'Parent-Teacher Meeting', date: 'Dec 30, 2024', time: '10:00 AM' },
    { event: 'Annual Sports Day', date: 'Jan 15, 2025', time: '9:00 AM' },
    { event: 'Cultural Fest', date: 'Feb 5, 2025', time: '6:00 PM' },
  ];

  const subjectPerformance = [
    { subject: 'Database Systems', grade: 'A-', percentage: 85 },
    { subject: 'Software Engineering', grade: 'B+', percentage: 78 },
    { subject: 'Computer Networks', grade: 'A', percentage: 88 },
    { subject: 'Web Development', grade: 'A+', percentage: 92 },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Users className="h-8 w-8 text-pink-500" />
              Parent Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Monitoring Sarah Johnson's Academic Progress</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <MessageSquare className="h-4 w-4 mr-2" />
              Contact Teacher
            </Button>
            <Button className="bg-pink-500 hover:bg-pink-600">
              <Bell className="h-4 w-4 mr-2" />
              View Notifications
            </Button>
          </div>
        </div>

        {/* Student Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentStats.map((stat, index) => (
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

        {/* Recent Activity & Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{event.event}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{event.date} at {event.time}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subject Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Academic Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjectPerformance.map((subject, index) => (
                <div key={index} className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{subject.subject}</span>
                    <Badge variant="outline">{subject.grade}</Badge>
                  </div>
                  <Progress value={subject.percentage} className="h-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">{subject.percentage}%</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default ParentDashboard;
