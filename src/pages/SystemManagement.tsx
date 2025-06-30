import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Database, 
  Server, 
  Shield, 
  Activity, 
  AlertTriangle, 
  Settings, 
  RefreshCw, 
  HardDrive, 
  Trash2, 
  Download, 
  Upload 
} from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const SystemManagement = () => {
  const [activeTab, setActiveTab] = useState('database');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useSEO({
    title: "System Management - ISBM College",
    description: "System administration and maintenance",
    canonical: "https://isbmcoe.edu.in/admin/system-management"
  });

  const handleSystemAction = async (action: string) => {
    setIsLoading(true);
    try {
      // Log the action in the system_activities table
      await supabase
        .from('system_activities')
        .insert({
          activity_name: action,
          activity_type: 'info',
          user_name: 'Super Admin',
          description: `${action} initiated by super admin`
        });

      toast({
        title: "Action Initiated",
        description: `${action} has been started successfully`,
      });
    } catch (error) {
      console.error('Error performing action:', error);
      toast({
        title: "Action Failed",
        description: `Failed to perform ${action}. Please try again.`,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Server className="h-8 w-8 text-purple-500" />
              System Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Database, Security, and System Maintenance</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => handleSystemAction('System Health Check')}>
              <Activity className="h-4 w-4 mr-2" />
              Health Check
            </Button>
            <Button className="bg-purple-500 hover:bg-purple-600">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
          </div>
        </div>

        <Tabs defaultValue="database" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="database" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Database
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="maintenance" className="flex items-center gap-2">
              <Server className="h-4 w-4" />
              Maintenance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="database" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-blue-500" />
                  Database Management
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Database Backup')}
                  disabled={isLoading}
                >
                  <Download className="h-8 w-8 mb-2 text-blue-500" />
                  <span>Backup Database</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Database Restore')}
                  disabled={isLoading}
                >
                  <Upload className="h-8 w-8 mb-2 text-green-500" />
                  <span>Restore Database</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Database Optimization')}
                  disabled={isLoading}
                >
                  <RefreshCw className="h-8 w-8 mb-2 text-purple-500" />
                  <span>Optimize Database</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Database Cleanup')}
                  disabled={isLoading}
                >
                  <Trash2 className="h-8 w-8 mb-2 text-red-500" />
                  <span>Clean Unused Data</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Database Export')}
                  disabled={isLoading}
                >
                  <Download className="h-8 w-8 mb-2 text-orange-500" />
                  <span>Export Data</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Database Import')}
                  disabled={isLoading}
                >
                  <Upload className="h-8 w-8 mb-2 text-indigo-500" />
                  <span>Import Data</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-500" />
                  Security Management
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Security Audit')}
                  disabled={isLoading}
                >
                  <Shield className="h-8 w-8 mb-2 text-red-500" />
                  <span>Security Audit</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('User Permissions Review')}
                  disabled={isLoading}
                >
                  <Users className="h-8 w-8 mb-2 text-blue-500" />
                  <span>User Permissions</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Security Logs')}
                  disabled={isLoading}
                >
                  <FileText className="h-8 w-8 mb-2 text-green-500" />
                  <span>Security Logs</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Vulnerability Scan')}
                  disabled={isLoading}
                >
                  <AlertTriangle className="h-8 w-8 mb-2 text-yellow-500" />
                  <span>Vulnerability Scan</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Password Policy')}
                  disabled={isLoading}
                >
                  <Lock className="h-8 w-8 mb-2 text-purple-500" />
                  <span>Password Policy</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Security Report')}
                  disabled={isLoading}
                >
                  <FileText className="h-8 w-8 mb-2 text-indigo-500" />
                  <span>Security Report</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-green-500" />
                  System Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Clear Cache')}
                  disabled={isLoading}
                >
                  <Trash2 className="h-8 w-8 mb-2 text-red-500" />
                  <span>Clear Cache</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('System Update')}
                  disabled={isLoading}
                >
                  <RefreshCw className="h-8 w-8 mb-2 text-blue-500" />
                  <span>System Update</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Storage Cleanup')}
                  disabled={isLoading}
                >
                  <HardDrive className="h-8 w-8 mb-2 text-orange-500" />
                  <span>Storage Cleanup</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Log Rotation')}
                  disabled={isLoading}
                >
                  <FileText className="h-8 w-8 mb-2 text-green-500" />
                  <span>Log Rotation</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('Performance Optimization')}
                  disabled={isLoading}
                >
                  <Activity className="h-8 w-8 mb-2 text-purple-500" />
                  <span>Performance Tuning</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col"
                  onClick={() => handleSystemAction('System Restart')}
                  disabled={isLoading}
                >
                  <RefreshCw className="h-8 w-8 mb-2 text-red-500" />
                  <span>System Restart</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SystemManagement;