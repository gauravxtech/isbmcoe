import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  Moon,
  User,
  ChevronLeft,
  Globe,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import UserSettingsDialog from '@/components/UserSettingsDialog';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { supabase } from '@/integrations/supabase/client';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState<string[]>(['dashboard']);
  const [darkMode, setDarkMode] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut, userRole } = useAuth();
  const { toast } = useToast();
  const [notifications, setNotifications] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifOpen, setNotifOpen] = useState(false);

  useEffect(() => {
    if (user?.id) fetchNotifications();
    // Optionally, poll every 30s
    // const interval = setInterval(fetchNotifications, 30000);
    // return () => clearInterval(interval);
  }, [user]);

  const fetchNotifications = async () => {
    if (!user?.id) return;
    const { data } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    setNotifications(data || []);
    setUnreadCount((data || []).filter((n: any) => !n.read).length);
  };

  const markAllRead = async () => {
    if (!user?.id) return;
    await supabase.from('notifications').update({ read: true }).eq('user_id', user.id).eq('read', false);
    fetchNotifications();
  };

  const handleLogout = async () => {
    const { error } = await signOut();
    if (!error) {
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out."
      });
      navigate('/login');
    } else {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive"
      });
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      // If the section is already expanded, close it
      if (prev.includes(section)) {
        return prev.filter(s => s !== section);
      } else {
        // Close all other sections and open only the clicked one (auto-close functionality)
        return [section];
      }
    });
  };

  const getDashboardTitle = (role: string): string => {
    const titles: Record<string, string> = {
      'super-admin': 'Super Admin Control Center',
      'admin': 'Administrative Dashboard',
      'principal': 'Principal Office',
      'dean': 'Academic Dean Portal',
      'hod': 'Department Head Dashboard',
      'teacher': 'Faculty Portal',
      'student': 'Student Dashboard',
      'parent': 'Parent Portal',
      'accountant': 'Finance Department',
      'reception': 'Front Office',
      'security': 'Security Control',
      'hostel': 'Hostel Management'
    };
    return titles[role] || 'Dashboard';
  };

  // Generate breadcrumb from current path
  const generateBreadcrumb = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [];
    
    // Add home/dashboard as first item
    breadcrumbs.push({
      label: 'Dashboard',
      path: '/dashboard',
      isActive: false
    });

    // Process path segments
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Format segment label
      let label = segment.replace(/-/g, ' ');
      label = label.charAt(0).toUpperCase() + label.slice(1);
      
      // Special cases for role-based paths
      if (segment === 'super-admin') label = 'Super Admin';
      if (segment === 'admin') label = 'Admin';
      if (segment === 'website-management') label = 'Website Management';
      
      breadcrumbs.push({
        label,
        path: currentPath,
        isActive: isLast
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumb();

  const navigationSections = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: LayoutDashboard,
      items: [
        { name: 'Overview', href: `/dashboard/${userRole || 'student'}`, icon: LayoutDashboard },
        // Add Website Management option for super-admin and admin roles
        ...(userRole === 'super-admin' || userRole === 'admin' ? [
          { name: 'Website Management', href: '/dashboard/website-management', icon: Globe }
        ] : [])
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

  // Get user display name from email or user metadata
  const getUserDisplayName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name;
    }
    if (user?.email) {
      return user.email.split('@')[0];
    }
    return 'User';
  };

  const getUserInitial = () => {
    const displayName = getUserDisplayName();
    return displayName.charAt(0).toUpperCase();
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-50 dark:bg-gray-900 flex`}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`${
        sidebarOpen 
          ? 'fixed inset-y-0 left-0 z-50 w-64 lg:relative lg:translate-x-0' 
          : 'fixed inset-y-0 left-0 z-50 w-16 lg:relative lg:translate-x-0'
      } bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } flex flex-col border-r border-gray-200 dark:border-gray-700`}
        style={{ height: '100vh', maxHeight: '100vh', overflowY: 'auto' }}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center space-x-3">
                <img 
                  src="/assets/logo.png" 
                  alt="ISBM Logo" 
                  className="w-8 h-8"
                />
                <div>
                  <h2 className="text-lg font-bold text-college-primary dark:text-white">ISBM College</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Management System</p>
                </div>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-500 dark:text-gray-400 lg:hidden"
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
                      key={`${section.id}-${item.href}`}
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
                      key={`apps-${item.href}`}
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
            onClick={handleLogout}
          >
            <LogOut className={`${sidebarOpen ? 'mr-3' : ''} h-5 w-5`} />
            {sidebarOpen && 'Sign Out'}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden" style={{ height: '100vh', maxHeight: '100vh' }}>
        {/* Top Header - Simplified */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Left: Logo + College Name */}
            <div className="flex items-center space-x-4">
              <img 
                src="/assets/logo.png" 
                alt="ISBM Logo" 
                className="w-8 h-8"
              />
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">ISBM College of Engineering</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Management System</p>
              </div>
            </div>

            {/* Center: Search */}
            <div className="flex-1 max-w-md mx-8 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-full dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>
            
            {/* Right: User Controls */}
            <div className="flex items-center space-x-3">
              {/* Dark Mode Toggle */}
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="text-gray-500 dark:text-gray-400"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative text-gray-500 dark:text-gray-400" onClick={() => { setNotifOpen(!notifOpen); if (!notifOpen) markAllRead(); }}>
                <Bell className="h-4 w-4" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center text-xs bg-red-500">
                    {unreadCount}
                  </Badge>
                )}
              </Button>
              
              {/* User Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-8 h-8 bg-college-primary rounded-full flex items-center justify-center text-white font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-college-primary">
                    {getUserInitial()}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span className="font-medium">{getUserDisplayName()}</span>
                      <span className="text-xs text-gray-500">{user?.email}</span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setSettingsOpen(true)}>
                    <Settings className="h-4 w-4 mr-2" /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />} Theme
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => alert('Help coming soon!')}>
                    <HelpCircle className="h-4 w-4 mr-2" /> Help
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                  </DropdownMenuItem>
                  {/* Add more menu items as needed */}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Title Bar with Toggle and Breadcrumb */}
        <div className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Left: Toggle Button + Breadcrumb */}
            <div className="flex items-center space-x-4">
              {/* Desktop Sidebar Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Menu className="h-4 w-4" />
              </Button>

              {/* Breadcrumb Navigation */}
              <nav className="flex items-center space-x-1 text-sm">
                {breadcrumbs.map((crumb, index) => (
                  <div key={crumb.path} className="flex items-center">
                    {index > 0 && (
                      <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
                    )}
                    {crumb.isActive ? (
                      <span className="font-medium text-gray-900 dark:text-white">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        to={crumb.path}
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Right: Page Title */}
            <div className="text-right">
              <h2 className="font-semibold text-gray-900 dark:text-white">
                {getDashboardTitle(userRole || 'student')}
              </h2>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-gray-900" style={{ minHeight: 0 }}>
          {children}
        </main>
      </div>

      {/* User Settings Dialog */}
      <UserSettingsDialog 
        open={settingsOpen} 
        onOpenChange={setSettingsOpen}
      />

      {/* Notifications Dropdown */}
      {notifOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50 border">
          <div className="p-4 border-b flex items-center justify-between">
            <span className="font-semibold text-gray-900 dark:text-white">Notifications</span>
            <Button variant="ghost" size="sm" onClick={markAllRead}>Mark all read</Button>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-gray-500 text-center">No notifications</div>
            ) : notifications.slice(0, 10).map(n => (
              <div key={n.id} className={`px-4 py-3 border-b last:border-b-0 flex items-start gap-3 ${n.read ? 'bg-white dark:bg-gray-800' : 'bg-yellow-50 dark:bg-yellow-900/30'}`}>
                <div className="mt-1"><Bell className="h-4 w-4 text-yellow-500" /></div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">{n.title}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{n.message}</div>
                  <div className="text-xs text-gray-400 mt-1">{new Date(n.created_at).toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
