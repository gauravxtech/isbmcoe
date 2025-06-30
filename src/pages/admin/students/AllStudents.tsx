import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AllStudents = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">All Students</h1>
          <p className="text-gray-600">View and manage all registered students.</p>
        </div>
        <Button asChild>
          <a href="/admin/students/add">Add Student</a>
        </Button>
      </div>
      <div className="flex gap-4 mb-4">
        <Input placeholder="Search by name, class, or section..." className="w-1/3" />
        <Input placeholder="Filter by gender..." className="w-1/4" />
      </div>
      <div className="overflow-x-auto rounded shadow bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Class</th>
              <th className="px-4 py-2 text-left">Section</th>
              <th className="px-4 py-2 text-left">Gender</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">FE</td>
              <td className="px-4 py-2">A</td>
              <td className="px-4 py-2">Male</td>
              <td className="px-4 py-2">
                <Button size="sm" variant="outline">View</Button>
              </td>
            </tr>
            {/* More rows will be dynamically loaded here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudents; 