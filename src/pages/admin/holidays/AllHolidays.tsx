import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar, Plus, Edit, Trash2 } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const AllHolidays = () => {
  const holidays = [
    { id: 1, name: 'New Year', date: '2024-01-01', type: 'National', description: 'New Year Day' },
    { id: 2, name: 'Republic Day', date: '2024-01-26', type: 'National', description: 'Republic Day of India' },
    { id: 3, name: 'Holi', date: '2024-03-13', type: 'Religious', description: 'Festival of Colors' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-blue-600" />
              All Holidays
            </h1>
            <p className="text-gray-600">Manage holiday calendar</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Holiday
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Holiday List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Holiday Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {holidays.map((holiday) => (
                  <TableRow key={holiday.id}>
                    <TableCell className="font-medium">{holiday.name}</TableCell>
                    <TableCell>{new Date(holiday.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge variant={holiday.type === 'National' ? 'default' : 'secondary'}>
                        {holiday.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{holiday.description}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AllHolidays;