
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const AssignClassTeacher = () => {
  const [formData, setFormData] = useState({
    teacherId: '',
    className: '',
    section: '',
    academicYear: new Date().getFullYear().toString()
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.teacherId || !formData.className || !formData.section) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate assignment
    toast({
      title: "Success",
      description: "Class teacher assigned successfully",
    });

    // Reset form
    setFormData({
      teacherId: '',
      className: '',
      section: '',
      academicYear: new Date().getFullYear().toString()
    });
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Assign Class Teacher</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="teacherId">Teacher ID</Label>
              <Input
                id="teacherId"
                value={formData.teacherId}
                onChange={(e) => setFormData({ ...formData, teacherId: e.target.value })}
                placeholder="Enter teacher ID"
                required
              />
            </div>

            <div>
              <Label htmlFor="className">Class</Label>
              <Select
                value={formData.className}
                onValueChange={(value) => setFormData({ ...formData, className: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1st-year">1st Year</SelectItem>
                  <SelectItem value="2nd-year">2nd Year</SelectItem>
                  <SelectItem value="3rd-year">3rd Year</SelectItem>
                  <SelectItem value="4th-year">4th Year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="section">Section</Label>
              <Select
                value={formData.section}
                onValueChange={(value) => setFormData({ ...formData, section: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select section" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">Section A</SelectItem>
                  <SelectItem value="B">Section B</SelectItem>
                  <SelectItem value="C">Section C</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="academicYear">Academic Year</Label>
              <Input
                id="academicYear"
                value={formData.academicYear}
                onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                placeholder="Enter academic year"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Assign Class Teacher
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssignClassTeacher;
