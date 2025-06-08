
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, BookOpen, Clock, Calendar, Users, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useSEO } from '@/hooks/useSEO';

const TeacherDashboard = () => {
  useSEO({
    title: "Teacher Dashboard - ISBM College",
    description: "Faculty dashboard for teaching management",
    canonical: "https://isbmcoe.edu.in/admin/teacher-dashboard"
  });

  const teachingStats = [
    { label: 'Classes Today', value: '6', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Total Students', value: '240', icon: Users, color: 'text-green-600' },
    { label: 'Pending Assignments', value: '12', icon: FileText, color: 'text-orange-600' },
    { label: 'Attendance Rate', value: '85%', icon: CheckCircle, color: 'text-purple-600' },
  ];

  const todaysClasses = [
    { subject: 'Mathematics', class: 'B.Tech CSE 2nd Year', time: '09:00 AM', duration: '1 hour', status: 'upcoming' },
    { subject: 'Data Structures', class: 'B.Tech CSE 2nd Year', time: '11:00 AM', duration: '1.5 hours', status: 'ongoing' },
    { subject: 'Algorithms', class: 'B.Tech CSE 3rd Year', time: '02:00 PM', duration: '1 hour', status: 'upcoming' },
    { subject: 'Database Systems', class: 'B.Tech CSE 3rd Year', time: '04:00 PM', duration: '1 hour', status: 'upcoming' },
  ];

  const pendingTasks = [
    { task: 'Grade Assignment - Data Structures', deadline: 'Today, 6:00 PM', priority: 'high' },
    { task: 'Prepare Quiz - Mathematics', deadline: 'Tomorrow, 10:00 AM', priority: 'medium' },
    { task: 'Submit Attendance Report', deadline: 'Dec 25, 2024', priority: 'low' },
    { task: 'Review Project Proposals', deadline: 'Dec 26, 2024', priority: 'medium' },
  ];

  const recentActivity = [
    { action: 'Updated grades for Mathematics Quiz', time: '2 hours ago' },
    { action: 'Posted new assignment in Data Structures', time: '1 day ago' },
    { action: 'Conducted online lecture', time: '2 days ago' },
    { action: 'Submitted monthly report', time: '3 days ago' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <User className="h-8 w-8 text-blue-500" />
              Teacher Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Welcome back, Prof. John Smith</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              My Schedule
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <FileText className="h-4 w-4 mr-2" />
              New Assignment
            </Button>
          </div>
        </div>

        {/* Teaching Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachingStats.map((stat, index) => (
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

        {/* Today's Classes & Pending Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Today's Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaysClasses.map((lecture, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{lecture.subject}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{lecture.class}</p>
                      <p className="text-sm text-gray-500">{lecture.time} • {lecture.duration}</p>
                    </div>
                    <Badge variant={lecture.status === 'ongoing' ? 'default' : 'secondary'}>
                      {lecture.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Pending Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{task.task}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{task.deadline}</p>
                    </div>
                    <Badge variant={
                      task.priority === 'high' ? 'destructive' :
                      task.priority === 'medium' ? 'default' : 'secondary'
                    }>
                      {task.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default TeacherDashboard;
