import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useToast } from '@/hooks/use-toast';

const AddHoliday = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    type: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Holiday added successfully!"
    });
    setFormData({
      name: '',
      date: '',
      type: '',
      description: ''
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <CalendarDays className="h-8 w-8 text-blue-600" />
            Add Holiday
          </h1>
          <p className="text-gray-600">Add a new holiday to the calendar</p>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Holiday Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Holiday Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter holiday name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="date">Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="type">Holiday Type *</Label>
                <Select value={formData.type} onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select holiday type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="national">National Holiday</SelectItem>
                    <SelectItem value="religious">Religious Holiday</SelectItem>
                    <SelectItem value="college">College Holiday</SelectItem>
                    <SelectItem value="festival">Festival</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Enter holiday description"
                  rows={3}
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Add Holiday
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AddHoliday;