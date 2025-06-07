
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Filter,
  Eye,
  Calendar,
  User,
  FileText,
  Image as ImageIcon
} from 'lucide-react';

const ContentManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: 'Welcome to ISBM College of Engineering',
      type: 'Hero Banner',
      status: 'Published',
      lastModified: '2024-01-15',
      author: 'Admin',
      category: 'homepage'
    },
    {
      id: 2,
      title: 'New AI/ML Program Launch',
      type: 'News',
      status: 'Draft',
      lastModified: '2024-01-14',
      author: 'Content Team',
      category: 'news'
    },
    {
      id: 3,
      title: 'Placement Drive 2024',
      type: 'Event',
      status: 'Published',
      lastModified: '2024-01-13',
      author: 'Placement Cell',
      category: 'events'
    },
    {
      id: 4,
      title: 'Computer Engineering Department',
      type: 'Department Page',
      status: 'Published',
      lastModified: '2024-01-12',
      author: 'HOD Computer',
      category: 'departments'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Content' },
    { value: 'homepage', label: 'Homepage' },
    { value: 'news', label: 'News & Announcements' },
    { value: 'events', label: 'Events' },
    { value: 'departments', label: 'Departments' },
    { value: 'admissions', label: 'Admissions' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Content Management</h2>
          <p className="text-gray-600">Manage website content, news, events, and pages</p>
        </div>
        <Button className="bg-college-primary hover:bg-blue-800">
          <Plus className="h-4 w-4 mr-2" />
          Add New Content
        </Button>
      </div>

      <Tabs defaultValue="content-list" className="space-y-6">
        <TabsList>
          <TabsTrigger value="content-list">Content List</TabsTrigger>
          <TabsTrigger value="create-content">Create Content</TabsTrigger>
          <TabsTrigger value="media-library">Media Library</TabsTrigger>
        </TabsList>

        <TabsContent value="content-list">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>All Content</CardTitle>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search content..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <select 
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredContent.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold text-gray-900">{item.title}</h3>
                          <Badge variant={item.status === 'Published' ? 'default' : 'secondary'}>
                            {item.status}
                          </Badge>
                          <Badge variant="outline">{item.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {item.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {item.lastModified}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create-content">
          <Card>
            <CardHeader>
              <CardTitle>Create New Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Enter content title" />
                  </div>
                  <div>
                    <Label htmlFor="type">Content Type</Label>
                    <select id="type" className="w-full border border-gray-300 rounded-md px-3 py-2">
                      <option>News Article</option>
                      <option>Event</option>
                      <option>Announcement</option>
                      <option>Department Page</option>
                      <option>Program Information</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select id="category" className="w-full border border-gray-300 rounded-md px-3 py-2">
                      <option>Homepage</option>
                      <option>News & Events</option>
                      <option>Academics</option>
                      <option>Admissions</option>
                      <option>Placements</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <select id="status" className="w-full border border-gray-300 rounded-md px-3 py-2">
                      <option>Draft</option>
                      <option>Published</option>
                      <option>Scheduled</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="featured-image">Featured Image</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <ImageIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">Upload featured image</p>
                    <Button variant="outline" className="mt-2">
                      Choose File
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea 
                  id="content" 
                  placeholder="Enter your content here..." 
                  className="min-h-[200px]"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <Button variant="outline">Save as Draft</Button>
                <Button className="bg-college-primary hover:bg-blue-800">Publish</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media-library">
          <Card>
            <CardHeader>
              <CardTitle>Media Library</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[1,2,3,4,5,6,7,8].map((item) => (
                  <div key={item} className="border border-gray-200 rounded-lg p-2 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center mb-2">
                      <ImageIcon className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-600 truncate">image-{item}.jpg</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Upload New Media
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentManager;
