import React from 'react';
import { Input } from '@/components/ui/input';

const LibraryMembers = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Library Members</h1>
      <p className="mb-4 text-gray-600">View and manage all library members.</p>
      <Input placeholder="Search by name or member ID..." className="w-1/2 mb-4" />
      <div className="overflow-x-auto rounded shadow bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Member ID</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Books Issued</th>
              <th className="px-4 py-2 text-left">Fines</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <td className="px-4 py-2">Alice Johnson</td>
              <td className="px-4 py-2">M1001</td>
              <td className="px-4 py-2">Student</td>
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">₹0</td>
              <td className="px-4 py-2">Active</td>
            </tr>
            {/* More rows will be dynamically loaded here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LibraryMembers; 