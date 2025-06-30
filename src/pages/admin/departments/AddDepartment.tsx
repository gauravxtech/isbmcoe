import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AddDepartment = () => {
  const [form, setForm] = useState({
    name: '',
    hod: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add Supabase integration here
    alert('Department added!');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-2">Add Department</h1>
      <p className="mb-4 text-gray-600">Create a new department below.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" placeholder="Department Name" value={form.name} onChange={handleChange} required />
        <Input name="hod" placeholder="Head of Department (HOD)" value={form.hod} onChange={handleChange} required />
        <Input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <Button type="submit">Save Department</Button>
      </form>
    </div>
  );
};

export default AddDepartment; 