import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import SchoolDashboardOverview from '@/components/admin/SchoolDashboardOverview';
import ContentManager from '@/components/admin/ContentManager';
import AnalyticsPanel from '@/components/admin/AnalyticsPanel';
import UserManager from '@/components/admin/UserManager';
import SettingsPanel from '@/components/admin/SettingsPanel';
import { useSEO } from '@/hooks/useSEO';

const AdminDashboard = () => {
  useSEO({
    title: "Admin Dashboard - ISBM College of Engineering",
    description: "Administrative control panel for ISBM College website management",
    canonical: "https://isbmcoe.edu.in/dashboard/admin"
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">College Management System</h1>
          <p className="text-gray-600 dark:text-gray-400">Administrative Control Panel</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <TabsTrigger value="overview" className="data-[state=active]:bg-college-primary data-[state=active]:text-white">Dashboard Overview</TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-college-primary data-[state=active]:text-white">Content Management</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-college-primary data-[state=active]:text-white">Analytics & Reports</TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-college-primary data-[state=active]:text-white">User Management</TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-college-primary data-[state=active]:text-white">System Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <SchoolDashboardOverview />
          </TabsContent>

          <TabsContent value="content">
            <ContentManager />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsPanel />
          </TabsContent>

          <TabsContent value="users">
            <UserManager />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsPanel />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
