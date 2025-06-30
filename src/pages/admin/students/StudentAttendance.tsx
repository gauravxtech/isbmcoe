import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const StudentAttendance = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Student Attendance</h1>
      <p className="mb-4 text-gray-600">Mark and review student attendance records.</p>
      <div className="flex gap-4 mb-4">
        <Input type="date" className="w-1/4" />
        <Input placeholder="Class" className="w-1/4" />
        <Input placeholder="Section" className="w-1/4" />
        <Button>Filter</Button>
      </div>
      <div className="overflow-x-auto rounded shadow bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Roll No.</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">12</td>
              <td className="px-4 py-2">Present</td>
              <td className="px-4 py-2">
                <Button size="sm" variant="outline">Edit</Button>
              </td>
            </tr>
            {/* More rows will be dynamically loaded here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentAttendance; 