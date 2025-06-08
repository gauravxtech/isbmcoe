
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  GraduationCap, 
  TrendingUp, 
  DollarSign,
  UserCheck,
  BookOpen,
  Calendar,
  Award,
  Clock,
  AlertCircle,
  CheckCircle,
  TrendingDown
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const SchoolDashboardOverview = () => {
  const mainStats = [
    {
      title: 'Total Sales',
      value: '$1,500',
      change: '+12%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'bg-green-500',
      trend: 'up'
    },
    {
      title: 'Total Courses',
      value: '125',
      change: '-5%',
      changeType: 'negative',
      icon: BookOpen,
      color: 'bg-blue-500',
      trend: 'down'
    },
    {
      title: 'Total Teachers',
      value: '89',
      change: '+12%',
      changeType: 'positive',
      icon: UserCheck,
      color: 'bg-purple-500',
      trend: 'up'
    },
    {
      title: 'Fees Collected',
      value: '$48,697',
      change: '-22%',
      changeType: 'negative',
      icon: DollarSign,
      color: 'bg-orange-500',
      trend: 'down'
    }
  ];

  const secondaryStats = [
    { title: 'Total Students', value: '2,847', icon: GraduationCap, color: 'bg-indigo-500' },
    { title: 'Present Today', value: '2,654', icon: CheckCircle, color: 'bg-green-500' },
    { title: 'Absent Today', value: '193', icon: AlertCircle, color: 'bg-red-500' },
    { title: 'Active Staff', value: '156', icon: Users, color: 'bg-blue-500' },
  ];

  const admissionData = [
    { year: '2019', admissions: 480 },
    { year: '2020', admissions: 520 },
    { year: '2021', admissions: 590 },
    { year: '2022', admissions: 650 },
    { year: '2023', admissions: 720 },
  ];

  const attendanceData = [
    { department: 'Computer Engg', present: 450, absent: 50 },
    { department: 'Mechanical', present: 380, absent: 70 },
    { department: 'AI/ML', present: 320, absent: 30 },
    { department: 'Electronics', present: 280, absent: 40 },
    { department: 'BBA', present: 250, absent: 25 },
  ];

  const upcomingEvents = [
    { event: 'Science Fair', date: 'Dec 15, 2024', type: 'Academic', status: 'upcoming' },
    { event: 'Guest Speaker Session', date: 'Dec 18, 2024', type: 'Educational', status: 'confirmed' },
    { event: 'Sports Day', date: 'Dec 22, 2024', type: 'Sports', status: 'planning' },
    { event: 'Cultural Fest', date: 'Jan 5, 2025', type: 'Cultural', status: 'upcoming' },
    { event: 'Alumni Meet', date: 'Jan 12, 2025', type: 'Networking', status: 'confirmed' },
  ];

  const examSchedule = [
    { subject: 'Mathematics', date: 'Dec 20', time: '10:00 AM', class: 'First Year' },
    { subject: 'Physics', date: 'Dec 21', time: '2:00 PM', class: 'First Year' },
    { subject: 'Programming', date: 'Dec 23', time: '10:00 AM', class: 'Second Year' },
    { subject: 'Electronics', date: 'Dec 24', time: '2:00 PM', class: 'Third Year' },
  ];

  const newStudents = [
    { name: 'Rahul Sharma', course: 'Computer Engineering', date: 'Dec 10, 2024' },
    { name: 'Priya Patel', course: 'AI/ML', date: 'Dec 11, 2024' },
    { name: 'Amit Kumar', course: 'Mechanical', date: 'Dec 12, 2024' },
    { name: 'Sneha Singh', course: 'Electronics', date: 'Dec 13, 2024' },
  ];

  const sportsAchievements = [
    { sport: 'Cricket', achievement: 'Inter-College Tournament - Winners', date: 'Nov 2024' },
    { sport: 'Football', achievement: 'State Championship - Runners Up', date: 'Oct 2024' },
    { sport: 'Basketball', achievement: 'Regional Competition - 3rd Place', date: 'Sep 2024' },
  ];

  return (
    <div className="space-y-6">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mainStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <Badge 
                      variant={stat.changeType === 'positive' ? 'default' : 'destructive'}
                      className="text-xs"
                    >
                      {stat.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                      {stat.change}
                    </Badge>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {secondaryStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* New Admission Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              New Admissions (5 Years)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={admissionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Line type="monotone" dataKey="admissions" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Student Attendance Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Student Attendance by Department
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis />
                <Bar dataKey="present" fill="#10B981" name="Present" />
                <Bar dataKey="absent" fill="#EF4444" name="Absent" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{event.event}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{event.date} • {event.type}</p>
                </div>
                <Badge 
                  variant={event.status === 'confirmed' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {event.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Exam Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Exam Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {examSchedule.map((exam, index) => (
              <div key={index} className="p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{exam.subject}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exam.class}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{exam.date}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{exam.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Teacher Availability & New Students */}
        <div className="space-y-6">
          {/* New Student List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-sm">
                <GraduationCap className="h-4 w-4 mr-2" />
                New Students
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {newStudents.map((student, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="w-8 h-8 bg-college-primary rounded-full flex items-center justify-center text-white text-xs font-semibold">
                    {student.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{student.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{student.course}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Sport Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-sm">
                <Award className="h-4 w-4 mr-2" />
                Sports Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {sportsAchievements.map((achievement, index) => (
                <div key={index} className="p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">{achievement.sport}</p>
                  <p className="text-xs text-yellow-600 dark:text-yellow-300">{achievement.achievement}</p>
                  <p className="text-xs text-yellow-500 dark:text-yellow-400">{achievement.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 transition-colors text-left">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <div className="font-medium text-blue-900 dark:text-blue-100">Add New Student</div>
              <div className="text-sm text-blue-600 dark:text-blue-400">Register new admission</div>
            </button>
            <button className="p-4 rounded-lg bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30 transition-colors text-left">
              <UserCheck className="h-6 w-6 text-green-600 dark:text-green-400 mb-2" />
              <div className="font-medium text-green-900 dark:text-green-100">Add Teacher</div>
              <div className="text-sm text-green-600 dark:text-green-400">Register new faculty</div>
            </button>
            <button className="p-4 rounded-lg bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 transition-colors text-left">
              <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <div className="font-medium text-purple-900 dark:text-purple-100">Create Course</div>
              <div className="text-sm text-purple-600 dark:text-purple-400">Add new course</div>
            </button>
            <button className="p-4 rounded-lg bg-orange-50 hover:bg-orange-100 dark:bg-orange-900/20 dark:hover:bg-orange-900/30 transition-colors text-left">
              <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400 mb-2" />
              <div className="font-medium text-orange-900 dark:text-orange-100">Schedule Event</div>
              <div className="text-sm text-orange-600 dark:text-orange-400">Plan new event</div>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchoolDashboardOverview;
