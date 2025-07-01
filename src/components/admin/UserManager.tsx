
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, UserPlus, Settings } from 'lucide-react';

const UserManager = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            User Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-24 flex-col">
              <UserPlus className="h-8 w-8 mb-2" />
              <span>Add User</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col">
              <Users className="h-8 w-8 mb-2" />
              <span>View Users</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col">
              <Settings className="h-8 w-8 mb-2" />
              <span>User Settings</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManager;
