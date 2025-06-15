
import React, { useState } from 'react';
import { Bug, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DebugPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { user, userRole, isAuthenticated, loading } = useAuth();

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <>
      {/* Debug Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white shadow-lg"
        size="sm"
      >
        <Bug className="h-4 w-4 mr-2" />
        Debug
      </Button>

      {/* Debug Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">Debug Information</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Authentication Status */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Authentication Status</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Loading: <span className={loading ? 'text-yellow-600' : 'text-green-600'}>{loading.toString()}</span></div>
                  <div>Authenticated: <span className={isAuthenticated ? 'text-green-600' : 'text-red-600'}>{isAuthenticated.toString()}</span></div>
                  <div>User Role: <span className="font-mono">{userRole || 'null'}</span></div>
                  <div>User ID: <span className="font-mono text-xs">{user?.id ? user.id.substring(0, 8) + '...' : 'null'}</span></div>
                </div>
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="space-y-4 border-t pt-4">
                  <div>
                    <h4 className="font-semibold mb-2">User Object</h4>
                    <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto max-h-32">
                      {JSON.stringify(user, null, 2)}
                    </pre>
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              <div className="space-y-2 border-t pt-4">
                <h3 className="font-semibold">Quick Actions</h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={() => window.location.href = '/login'}>
                    Go to Login
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => window.location.href = '/admin-setup'}>
                    Admin Setup
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => console.log('Auth State:', { user, userRole, isAuthenticated, loading })}>
                    Log Auth State
                  </Button>
                </div>
              </div>

              {/* Environment Info */}
              <div className="space-y-2 border-t pt-4">
                <h3 className="font-semibold">Environment</h3>
                <div className="text-sm">
                  <div>Mode: {process.env.NODE_ENV}</div>
                  <div>Current URL: {window.location.href}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default DebugPanel;
