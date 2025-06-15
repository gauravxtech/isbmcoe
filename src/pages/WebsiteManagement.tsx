
import React from 'react';
import { Globe, Settings, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import ContentManager from '@/components/admin/ContentManager';
import { useSEO } from '@/hooks/useSEO';

const WebsiteManagement = () => {
  useSEO({
    title: "Website Management - ISBM College",
    description: "Manage website content, banners, news, and events",
    canonical: "https://isbmcoe.edu.in/dashboard/website-management"
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="min-w-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Globe className="h-8 w-8 text-blue-500 flex-shrink-0" />
              <span className="truncate">Website Management</span>
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400 mt-1">
              Manage all website content, banners, news, events, and announcements
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Banners</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">News & Events</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+4 this week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Page Updates</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Last updated today</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Manager */}
        <ContentManager />
      </div>
    </DashboardLayout>
  );
};

export default WebsiteManagement;
