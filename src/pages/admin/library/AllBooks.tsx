import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AllBooks = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">All Books</h1>
          <p className="text-gray-600">Library catalog of all books.</p>
        </div>
        <Button asChild>
          <a href="/admin/library/issue">Issue/Return Book</a>
        </Button>
      </div>
      <div className="flex gap-4 mb-4">
        <Input placeholder="Search by title, author, or ISBN..." className="w-1/2" />
      </div>
      <div className="overflow-x-auto rounded shadow bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Author</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">ISBN</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <td className="px-4 py-2">Introduction to Algorithms</td>
              <td className="px-4 py-2">Cormen et al.</td>
              <td className="px-4 py-2">Computer Science</td>
              <td className="px-4 py-2">9780262033848</td>
              <td className="px-4 py-2">Available</td>
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

export default AllBooks; 