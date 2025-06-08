
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  Users, 
  Settings, 
  Menu, 
  X,
  Bell,
  Search,
  LogOut,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  UserCheck,
  BookOpen,
  Building2,
  UsersRound,
  Calendar,
  DollarSign,
  GraduationCap,
  Home,
  Briefcase,
  CalendarDays,
  CheckSquare,
  Mail,
  Sun,
  Moon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState<string[]>(['dashboard']);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationSections = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: LayoutDashboard,
      items: [
        { name: 'Overview', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Teacher Dashboard', href: '/admin/teacher-dashboard', icon: UserCheck },
        { name: 'Student Dashboard', href: '/admin/student-dashboard', icon: GraduationCap },
      ]
    },
    {
      id: 'front-office',
      name: 'Front Office',
      icon: Building2,
      items: [
        { name: 'Admission Inquiry', href: '/admin/admission-inquiry', icon: FileText },
        { name: 'Visitors Book', href: '/admin/visitors', icon: BookOpen },
        { name: 'Complaints', href: '/admin/complaints', icon: MessageSquare },
      ]
    },
    {
      id: 'teachers',
      name: 'Teachers',
      icon: UserCheck,
      items: [
        { name: 'All Teachers', href: '/admin/teachers', icon: Users },
        { name: 'Add Teacher', href: '/admin/teachers/add', icon: UserCheck },
        { name: 'Assign Class Teacher', href: '/admin/teachers/assign', icon: GraduationCap },
        { name: 'Teacher Timetable', href: '/admin/teachers/timetable', icon: Calendar },
      ]
    },
    {
      id: 'students',
      name: 'Students',
      icon: GraduationCap,
      items: [
        { name: 'All Students', href: '/admin/students', icon: Users },
        { name: 'Add Student', href: '/admin/students/add', icon: GraduationCap },
        { name: 'Student Attendance', href: '/admin/students/attendance', icon: CheckSquare },
        { name: 'Student Information', href: '/admin/students/info', icon: FileText },
      ]
    },
    {
      id: 'courses',
      name: 'Courses',
      icon: BookOpen,
      items: [
        { name: 'All Courses', href: '/admin/courses', icon: BookOpen },
        { name: 'Add Course', href: '/admin/courses/add', icon: FileText },
      ]
    },
    {
      id: 'library',
      name: 'Library',
      icon: BookOpen,
      items: [
        { name: 'All Books', href: '/admin/library/books', icon: BookOpen },
        { name: 'Book Issue/Return', href: '/admin/library/issue', icon: FileText },
        { name: 'Library Members', href: '/admin/library/members', icon: Users },
      ]
    },
    {
      id: 'departments',
      name: 'Departments',
      icon: Building2,
      items: [
        { name: 'All Departments', href: '/admin/departments', icon: Building2 },
        { name: 'Add Department', href: '/admin/departments/add', icon: FileText },
      ]
    },
    {
      id: 'staff',
      name: 'Staff',
      icon: UsersRound,
      items: [
        { name: 'All Staff', href: '/admin/staff', icon: Users },
        { name: 'Add Staff', href: '/admin/staff/add', icon: UserCheck },
        { name: 'Staff Attendance', href: '/admin/staff/attendance', icon: CheckSquare },
      ]
    },
    {
      id: 'holiday',
      name: 'Holiday',
      icon: Calendar,
      items: [
        { name: 'All Holidays', href: '/admin/holidays', icon: Calendar },
        { name: 'Add Holiday', href: '/admin/holidays/add', icon: CalendarDays },
      ]
    },
    {
      id: 'fees',
      name: 'Fees',
      icon: DollarSign,
      items: [
        { name: 'All Fees', href: '/admin/fees', icon: DollarSign },
        { name: 'Fee Collection', href: '/admin/fees/collection', icon: FileText },
        { name: 'Fee Receipt', href: '/admin/fees/receipt', icon: FileText },
        { name: 'Fee Structure', href: '/admin/fees/structure', icon: DollarSign },
      ]
    },
    {
      id: 'classes',
      name: 'Classes',
      icon: GraduationCap,
      items: [
        { name: 'All Classes', href: '/admin/classes', icon: GraduationCap },
        { name: 'Class Timetable', href: '/admin/classes/timetable', icon: Calendar },
      ]
    },
    {
      id: 'hostel',
      name: 'Hostel',
      icon: Home,
      items: [
        { name: 'Room Management', href: '/admin/hostel/rooms', icon: Home },
        { name: 'Hostel Fees', href: '/admin/hostel/fees', icon: DollarSign },
      ]
    },
    {
      id: 'hr',
      name: 'HR Management',
      icon: Briefcase,
      items: [
        { name: 'Leave Management', href: '/admin/hr/leave', icon: Calendar },
        { name: 'Payroll', href: '/admin/hr/payroll', icon: DollarSign },
        { name: 'Employee Records', href: '/admin/hr/employees', icon: Users },
      ]
    },
  ];

  const appsSection = {
    id: 'apps',
    name: 'Apps',
    icon: LayoutDashboard,
    items: [
      { name: 'Calendar', href: '/admin/apps/calendar', icon: Calendar },
      { name: 'Task Manager', href: '/admin/apps/tasks', icon: CheckSquare },
      { name: 'Chat', href: '/admin/apps/chat', icon: MessageSquare },
      { name: 'Email', href: '/admin/apps/email', icon: Mail },
    ]
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-50 dark:bg-gray-900 flex`}>
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 flex flex-col border-r border-gray-200 dark:border-gray-700`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/18fee38c-1acf-462a-825a-cda10c5e7381.png" 
                  alt="ISBM Logo" 
                  className="w-8 h-8"
                />
                <div>
                  <h2 className="text-lg font-bold text-college-primary dark:text-white">Admin Panel</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">ISBM College</p>
                </div>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-500 dark:text-gray-400"
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
          {navigationSections.map((section) => (
            <Collapsible 
              key={section.id}
              open={expandedSections.includes(section.id)}
              onOpenChange={() => toggleSection(section.id)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <section.icon className={`${sidebarOpen ? 'mr-3' : ''} h-5 w-5`} />
                  {sidebarOpen && (
                    <>
                      <span className="flex-1">{section.name}</span>
                      {expandedSections.includes(section.id) ? 
                        <ChevronDown className="h-4 w-4" /> : 
                        <ChevronRight className="h-4 w-4" />
                      }
                    </>
                  )}
                </Button>
              </CollapsibleTrigger>
              {sidebarOpen && (
                <CollapsibleContent className="space-y-1 ml-4">
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                        location.pathname === item.href
                          ? 'bg-college-primary text-white'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200'
                      }`}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              )}
            </Collapsible>
          ))}

          {/* Apps Section */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <Collapsible 
              open={expandedSections.includes('apps')}
              onOpenChange={() => toggleSection('apps')}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <appsSection.icon className={`${sidebarOpen ? 'mr-3' : ''} h-5 w-5`} />
                  {sidebarOpen && (
                    <>
                      <span className="flex-1">{appsSection.name}</span>
                      {expandedSections.includes('apps') ? 
                        <ChevronDown className="h-4 w-4" /> : 
                        <ChevronRight className="h-4 w-4" />
                      }
                    </>
                  )}
                </Button>
              </CollapsibleTrigger>
              {sidebarOpen && (
                <CollapsibleContent className="space-y-1 ml-4">
                  {appsSection.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              )}
            </Collapsible>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <LogOut className={`${sidebarOpen ? 'mr-3' : ''} h-5 w-5`} />
            {sidebarOpen && 'Sign Out'}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Logo + College Name */}
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/18fee38c-1acf-462a-825a-cda10c5e7381.png" 
                alt="ISBM Logo" 
                className="w-8 h-8"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">ISBM College of Engineering</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Admin Dashboard</p>
              </div>
            </div>

            {/* Center: Search */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search students, teachers, courses..."
                  className="pl-10 w-full dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>
            
            {/* Right: Notifications, Messages, Profile */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="text-gray-500 dark:text-gray-400"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative text-gray-500 dark:text-gray-400">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-red-500">
                  5
                </Badge>
              </Button>

              {/* Messages */}
              <Button variant="ghost" size="sm" className="relative text-gray-500 dark:text-gray-400">
                <MessageSquare className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-blue-500">
                  3
                </Badge>
              </Button>
              
              {/* Profile Dropdown */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Dr. Admin</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Super Administrator</p>
                </div>
                <div className="w-10 h-10 bg-college-primary rounded-full flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
