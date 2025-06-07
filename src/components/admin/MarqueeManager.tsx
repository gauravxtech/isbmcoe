
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';

const MarqueeManager = () => {
  const [marqueeItems, setMarqueeItems] = useState([
    {
      id: 1,
      text: "🎉 ISBM College receives NAAC B++ Accreditation - A milestone achievement!",
      link: "/news/naac-accreditation",
      priority: 1,
      status: "Active",
      type: "Achievement"
    },
    {
      id: 2,
      text: "📢 Admissions Open for First Year & Direct Second Year Engineering Programs 2024-25",
      link: "/admissions/first-year",
      priority: 2,
      status: "Active", 
      type: "Admission"
    },
    {
      id: 3,
      text: "🏆 Record Placement: ₹16 Lakhs Highest Package achieved by our students",
      link: "/placements",
      priority: 3,
      status: "Active",
      type: "Placement"
    },
    {
      id: 4,
      text: "🔬 International Conference ICMETET 2024 - Registration Open",
      link: "/events/icmetet-2024",
      priority: 4,
      status: "Inactive",
      type: "Event"
    }
  ]);

  const [editingItem, setEditingItem] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const toggleStatus = (id) => {
    setMarqueeItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, status: item.status === 'Active' ? 'Inactive' : 'Active' }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setMarqueeItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Marquee Text Management</h3>
          <p className="text-gray-600">Manage scrolling announcements and important messages</p>
        </div>
        <Button onClick={() => setShowForm(true)} className="bg-college-primary">
          <Plus className="h-4 w-4 mr-2" />
          Add Marquee Text
        </Button>
      </div>

      {/* Active Marquee Preview */}
      <Card className="bg-gradient-to-r from-college-primary to-college-secondary">
        <CardHeader>
          <CardTitle className="text-white">Live Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-lg p-4 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {marqueeItems
                .filter(item => item.status === 'Active')
                .sort((a, b) => a.priority - b.priority)
                .map((item, index) => (
                  <span key={item.id} className="mr-12 text-college-primary font-medium">
                    {item.text}
                    {index < marqueeItems.filter(i => i.status === 'Active').length - 1 && ' • '}
                  </span>
                ))
              }
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Marquee Items List */}
      <div className="space-y-3">
        {marqueeItems
          .sort((a, b) => a.priority - b.priority)
          .map((item) => (
          <Card key={item.id} className={item.status === 'Active' ? 'border-green-200 bg-green-50' : 'border-gray-200'}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={item.status === 'Active' ? 'default' : 'secondary'}>
                      {item.status}
                    </Badge>
                    <Badge variant="outline">{item.type}</Badge>
                    <Badge variant="outline">Priority: {item.priority}</Badge>
                  </div>
                  <p className="text-sm font-medium mb-1">{item.text}</p>
                  {item.link && (
                    <p className="text-xs text-gray-500">Link: {item.link}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => toggleStatus(item.id)}
                    className={item.status === 'Active' ? 'text-green-600' : 'text-gray-400'}
                  >
                    {item.status === 'Active' ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setEditingItem(item)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-red-600"
                    onClick={() => deleteItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
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
            <CardTitle>{editingItem ? 'Edit Marquee Text' : 'Add New Marquee Text'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="text">Marquee Text</Label>
              <Input 
                id="text" 
                placeholder="Enter announcement text (emojis encouraged!)"
                defaultValue={editingItem?.text || ''}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="type">Type</Label>
                <select 
                  id="type" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  defaultValue={editingItem?.type || 'Announcement'}
                >
                  <option value="Achievement">Achievement</option>
                  <option value="Admission">Admission</option>
                  <option value="Placement">Placement</option>
                  <option value="Event">Event</option>
                  <option value="Announcement">Announcement</option>
                  <option value="Alert">Alert</option>
                </select>
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Input 
                  id="priority" 
                  type="number" 
                  min="1" 
                  placeholder="1" 
                  defaultValue={editingItem?.priority || ''}
                />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <select 
                  id="status" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  defaultValue={editingItem?.status || 'Active'}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="link">Link (optional)</Label>
              <Input 
                id="link" 
                placeholder="/news/announcement" 
                defaultValue={editingItem?.link || ''}
              />
            </div>
            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={() => {setShowForm(false); setEditingItem(null);}}>
                Cancel
              </Button>
              <Button className="bg-college-primary">
                {editingItem ? 'Update' : 'Add'} Marquee Text
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MarqueeManager;
