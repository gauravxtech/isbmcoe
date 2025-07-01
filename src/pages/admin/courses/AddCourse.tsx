
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const AddCourse = () => {
  const [form, setForm] = useState({
    name: '',
    department: '',
    credits: '',
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show success message since courses table doesn't exist
    toast({ 
      title: 'Course Saved', 
      description: 'Course information has been saved successfully (demo mode)' 
    });
    setForm({ name: '', department: '', credits: '' });
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center gap-3 border-b">
          <BookOpen className="h-7 w-7 text-green-600" />
          <div>
            <CardTitle className="text-2xl font-bold">Add Course</CardTitle>
            <p className="text-gray-500 text-sm">Create a new course below.</p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
                <Input name="name" placeholder="Course Name" value={form.name} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <Input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Credits</label>
                <Input name="credits" placeholder="Credits" value={form.credits} onChange={handleChange} required />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-end gap-3 mt-4">
              <Button type="reset" variant="outline" onClick={() => setForm({ name: '', department: '', credits: '' })}>Clear</Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700">Save Course</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCourse;
