import React from 'react';
import { Button } from '@/components/ui/button';

const AllDepartments = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">All Departments</h1>
          <p className="text-gray-600">List of all academic and administrative departments.</p>
        </div>
        <Button asChild>
          <a href="/admin/departments/add">Add Department</a>
        </Button>
      </div>
      <div className="overflow-x-auto rounded shadow bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Department Name</th>
              <th className="px-4 py-2 text-left">HOD</th>
              <th className="px-4 py-2 text-left">Staff Count</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <td className="px-4 py-2">Computer Engineering</td>
              <td className="px-4 py-2">Dr. S. Sharma</td>
              <td className="px-4 py-2">18</td>
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

export default AllDepartments; 