
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useActiveMarqueeTexts, usePublishedNews, useBanners } from '@/hooks/useData';
import { supabase } from '@/integrations/supabase/client';
import { Bug, Database, User, Settings, RefreshCw } from 'lucide-react';

const DebugPanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [testResults, setTestResults] = useState<any>({});
  const { user, userRole, isAuthenticated, loading } = useAuth();
  const { data: marqueeTexts, isLoading: marqueeLoading } = useActiveMarqueeTexts();
  const { data: news, isLoading: newsLoading } = usePublishedNews();
  const { data: banners, isLoading: bannersLoading } = useBanners();

  const runDatabaseTests = async () => {
    const results: any = {};

    try {
      // Test Supabase connection
      const { data: connectionTest, error: connectionError } = await supabase
        .from('profiles')
        .select('count', { count: 'exact', head: true });
      
      results.connection = { 
        status: connectionError ? 'error' : 'success', 
        error: connectionError?.message,
        count: connectionTest 
      };

      // Test each table
      const tables = ['banners', 'news_events', 'announcements', 'marquee_texts', 'profiles'];
      
      for (const table of tables) {
        try {
          const { data, error } = await supabase
            .from(table)
            .select('*', { count: 'exact', head: true });
          
          results[table] = {
            status: error ? 'error' : 'success',
            error: error?.message,
            count: data || 0
          };
        } catch (err: any) {
          results[table] = {
            status: 'error',
            error: err.message
          };
        }
      }

      // Test storage
      try {
        const { data: buckets, error: storageError } = await supabase.storage.listBuckets();
        results.storage = {
          status: storageError ? 'error' : 'success',
          error: storageError?.message,
          buckets: buckets?.map(b => b.name) || []
        };
      } catch (err: any) {
        results.storage = {
          status: 'error',
          error: err.message
        };
      }

    } catch (error: any) {
      results.general_error = error.message;
    }

    setTestResults(results);
  };

  if (!isVisible) {
    return (
      <Button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 bg-red-600 hover:bg-red-700"
        size="sm"
      >
        <Bug className="h-4 w-4 mr-2" />
        Debug
      </Button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 max-h-96 overflow-y-auto">
      <Card className="shadow-xl border-2 border-red-200">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bug className="h-5 w-5" />
              Debug Panel
            </CardTitle>
            <Button 
              onClick={() => setIsVisible(false)} 
              variant="ghost" 
              size="sm"
            >
              ×
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          {/* Auth Status */}
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <User className="h-4 w-4" />
              Authentication
            </h4>
            <div className="space-y-1">
              <div>Loading: <Badge variant={loading ? "destructive" : "secondary"}>{loading.toString()}</Badge></div>
              <div>Authenticated: <Badge variant={isAuthenticated ? "default" : "destructive"}>{isAuthenticated.toString()}</Badge></div>
              <div>User Role: <Badge>{userRole || 'null'}</Badge></div>
              <div>User ID: <code className="text-xs">{user?.id?.slice(0, 8) || 'null'}</code></div>
            </div>
          </div>

          {/* Data Loading Status */}
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <Database className="h-4 w-4" />
              Data Status
            </h4>
            <div className="space-y-1">
              <div>Marquee: <Badge variant={marqueeLoading ? "destructive" : "default"}>
                {marqueeLoading ? 'Loading' : `${marqueeTexts?.length || 0} items`}
              </Badge></div>
              <div>News: <Badge variant={newsLoading ? "destructive" : "default"}>
                {newsLoading ? 'Loading' : `${news?.length || 0} items`}
              </Badge></div>
              <div>Banners: <Badge variant={bannersLoading ? "destructive" : "default"}>
                {bannersLoading ? 'Loading' : `${banners?.length || 0} items`}
              </Badge></div>
            </div>
          </div>

          {/* Database Tests */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Database Tests
              </h4>
              <Button onClick={runDatabaseTests} size="sm" variant="outline">
                <RefreshCw className="h-3 w-3 mr-1" />
                Test
              </Button>
            </div>
            
            {Object.keys(testResults).length > 0 && (
              <div className="space-y-1 text-xs">
                {Object.entries(testResults).map(([key, result]: [string, any]) => (
                  <div key={key} className="flex justify-between">
                    <span>{key}:</span>
                    <Badge variant={result.status === 'success' ? 'default' : 'destructive'}>
                      {result.status === 'success' ? '✓' : '✗'}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <h4 className="font-semibold">Quick Actions</h4>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => window.location.href = '/admin-setup'}
              >
                Admin Setup
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => window.location.href = '/login'}
              >
                Login
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DebugPanel;
