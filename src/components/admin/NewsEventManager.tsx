
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Calendar, Eye, Filter } from 'lucide-react';

const NewsEventManager = () => {
  const [newsEvents, setNewsEvents] = useState([
    {
      id: 1,
      type: "Achievement",
      title: "ISBM College Received B++ Accreditation By NAAC",
      excerpt: "Our institution has achieved NAAC B++ grade, recognizing our commitment to quality education and infrastructure...",
      content: "Full content here...",
      date: "2024-03-15",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
      category: "Accreditation",
      status: "Published",
      featured: true
    },
    {
      id: 2,
      type: "Event",
      title: "International Conference on Emerging Technologies (ICMETET 2024)",
      excerpt: "Join researchers and industry experts for cutting-edge discussions on emerging technologies...",
      content: "Full content here...",
      date: "2024-06-20",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      category: "Conference",
      status: "Published",
      featured: false
    }
  ]);

  const [editingItem, setEditingItem] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all');

  const categories = ['Achievement', 'Event', 'Admission', 'Placement', 'Infrastructure', 'Conference'];
  const types = ['News', 'Event', 'Achievement', 'Announcement'];

  const filteredItems = newsEvents.filter(item => 
    filter === 'all' || item.category.toLowerCase() === filter.toLowerCase()
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">News & Events Management</h3>
          <p className="text-gray-600">Manage latest news, events, and announcements</p>
        </div>
        <Button onClick={() => setShowForm(true)} className="bg-college-primary">
          <Plus className="h-4 w-4 mr-2" />
          Add News/Event
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat.toLowerCase()}>{cat}</option>
            ))}
          </select>
        </div>
        <Badge variant="outline">{filteredItems.length} items</Badge>
      </div>

      {/* News/Events List */}
      <div className="grid gap-4">
        {filteredItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="w-32 h-20 bg-gray-100 rounded-lg flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{item.type}</Badge>
                        <Badge variant="outline">{item.category}</Badge>
                        {item.featured && <Badge className="bg-yellow-500">Featured</Badge>}
                        <Badge variant={item.status === 'Published' ? 'default' : 'secondary'}>
                          {item.status}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-sm mb-1 line-clamp-1">{item.title}</h4>
                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">{item.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setEditingItem(item)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add/Edit Form */}
      {(showForm || editingItem) && (
        <Card>
          <CardHeader>
            <CardTitle>{editingItem ? 'Edit News/Event' : 'Add New News/Event'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="type">Type</Label>
                <select id="type" className="w-full border border-gray-300 rounded-md px-3 py-2">
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <select id="category" className="w-full border border-gray-300 rounded-md px-3 py-2">
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
            </div>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter news/event title" />
            </div>
            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea id="excerpt" placeholder="Brief description for preview" />
            </div>
            <div>
              <Label htmlFor="content">Full Content</Label>
              <Textarea id="content" placeholder="Full news/event content" className="min-h-[200px]" />
            </div>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Featured Item
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                Published
              </label>
            </div>
            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={() => {setShowForm(false); setEditingItem(null);}}>
                Cancel
              </Button>
              <Button className="bg-college-primary">
                {editingItem ? 'Update' : 'Add'} News/Event
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NewsEventManager;
