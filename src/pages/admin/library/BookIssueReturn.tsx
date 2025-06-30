import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const BookIssueReturn = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Book Issue/Return</h1>
      <p className="mb-4 text-gray-600">Manage book issues and returns for students and staff.</p>
      <form className="flex gap-4 mb-6">
        <Input placeholder="Book ISBN" className="w-1/3" />
        <Input placeholder="Member ID" className="w-1/3" />
        <Button type="submit">Issue Book</Button>
        <Button type="button" variant="outline">Return Book</Button>
      </form>
      <div className="overflow-x-auto rounded shadow bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Book</th>
              <th className="px-4 py-2 text-left">Member</th>
              <th className="px-4 py-2 text-left">Due Date</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <td className="px-4 py-2">Introduction to Algorithms</td>
              <td className="px-4 py-2">S12345</td>
              <td className="px-4 py-2">2024-07-01</td>
              <td className="px-4 py-2">Issued</td>
            </tr>
            {/* More rows will be dynamically loaded here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookIssueReturn; 