
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus } from 'lucide-react';

const AddStudent = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    class: '',
    section: '',
    roll: '',
    parent: '',
    contact: '',
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.from('students').insert([
        {
          full_name: form.name,
          email: form.email,
          enrollment_no: form.roll,
          department: form.class,
          status: 'active',
        }
      ]);
      
      if (!error) {
        toast({ title: 'Success', description: 'Student added successfully!' });
        setForm({ name: '', email: '', class: '', section: '', roll: '', parent: '', contact: '' });
      } else {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to add student', variant: 'destructive' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center gap-3 border-b">
          <UserPlus className="h-7 w-7 text-blue-600" />
          <div>
            <CardTitle className="text-2xl font-bold">Add Student</CardTitle>
            <p className="text-gray-500 text-sm">Register a new student below.</p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <Input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Class (e.g., FE)</label>
                <Input name="class" placeholder="Class" value={form.class} onChange={handleChange} required />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number</label>
                <Input name="roll" placeholder="Roll Number" value={form.roll} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
                <Input name="section" placeholder="Section" value={form.section} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <Input name="contact" placeholder="Contact Number" value={form.contact} onChange={handleChange} />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-end gap-3 mt-4">
              <Button type="reset" variant="outline" onClick={() => setForm({ name: '', email: '', class: '', section: '', roll: '', parent: '', contact: '' })}>Clear</Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Save Student</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddStudent;
