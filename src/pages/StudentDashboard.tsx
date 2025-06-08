
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { GraduationCap, BookOpen, Calendar, FileText, TrendingUp, Award, Clock, Users } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useSEO } from '@/hooks/useSEO';

const StudentDashboard = () => {
  useSEO({
    title: "Student Dashboard - ISBM College",
    description: "Student portal for academic management",
    canonical: "https://isbmcoe.edu.in/admin/student-dashboard"
  });

  const academicStats = [
    { label: 'Current CGPA', value: '8.4', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Attendance', value: '87%', icon: Calendar, color: 'text-blue-600' },
    { label: 'Assignments Due', value: '3', icon: FileText, color: 'text-orange-600' },
    { label: 'Credits Earned', value: '120', icon: Award, color: 'text-purple-600' },
  ];

  const upcomingClasses = [
    { subject: 'Database Systems', teacher: 'Prof. Smith', time: '09:00 AM', room: 'Room 101' },
    { subject: 'Software Engineering', teacher: 'Dr. Johnson', time: '11:00 AM', room: 'Room 205' },
    { subject: 'Computer Networks', teacher: 'Prof. Davis', time: '02:00 PM', room: 'Lab 3' },
    { subject: 'Web Development', teacher: 'Ms. Wilson', time: '04:00 PM', room: 'Lab 1' },
  ];

  const subjectProgress = [
    { subject: 'Database Systems', progress: 75, grade: 'A-' },
    { subject: 'Software Engineering', progress: 68, grade: 'B+' },
    { subject: 'Computer Networks', progress: 82, grade: 'A' },
    { subject: 'Web Development', progress: 90, grade: 'A+' },
    { subject: 'Data Structures', progress: 58, grade: 'B' },
  ];

  const assignments = [
    { title: 'Database Design Project', subject: 'Database Systems', dueDate: 'Dec 28, 2024', status: 'pending' },
    { title: 'Software Requirements Analysis', subject: 'Software Engineering', dueDate: 'Dec 30, 2024', status: 'in-progress' },
    { title: 'Network Security Report', subject: 'Computer Networks', dueDate: 'Jan 2, 2025', status: 'not-started' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-blue-500" />
              Student Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Welcome back, Sarah Johnson • B.Tech CSE 3rd Year</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              View Timetable
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <FileText className="h-4 w-4 mr-2" />
              Submit Assignment
            </Button>
          </div>
        </div>

        {/* Academic Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicStats.map((stat, index) => (
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

        {/* Today's Classes & Subject Progress */}
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
                {upcomingClasses.map((lecture, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{lecture.subject}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{lecture.teacher}</p>
                      <p className="text-sm text-gray-500">{lecture.time} • {lecture.room}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Join
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Subject Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjectProgress.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{subject.subject}</span>
                      <Badge variant="outline">{subject.grade}</Badge>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">{subject.progress}% Complete</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Pending Assignments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {assignments.map((assignment, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-semibold">{assignment.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.subject}</p>
                    <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={
                      assignment.status === 'pending' ? 'destructive' :
                      assignment.status === 'in-progress' ? 'default' : 'secondary'
                    }>
                      {assignment.status.replace('-', ' ')}
                    </Badge>
                    <Button size="sm">
                      {assignment.status === 'not-started' ? 'Start' : 'Continue'}
                    </Button>
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

export default StudentDashboard;
