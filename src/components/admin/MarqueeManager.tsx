
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit, Trash2, Eye, EyeOff, Save, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface MarqueeText {
  id: string;
  text: string;
  link: string | null;
  priority: number | null;
  status: string | null;
  type: string | null;
  created_at: string;
  updated_at: string;
}

const MarqueeManager = () => {
  const [marqueeItems, setMarqueeItems] = useState<MarqueeText[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<MarqueeText | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    text: '',
    link: '',
    priority: 1,
    status: 'active',
    type: 'announcement'
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchMarqueeItems();
  }, []);

  const fetchMarqueeItems = async () => {
    try {
      const { data, error } = await supabase
        .from('marquee_texts')
        .select('*')
        .order('priority', { ascending: true });

      if (error) throw error;
      setMarqueeItems(data || []);
    } catch (error) {
      console.error('Error fetching marquee items:', error);
      toast({
        title: "Error",
        description: "Failed to fetch marquee items",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingItem) {
        const { error } = await supabase
          .from('marquee_texts')
          .update({
            ...formData,
            priority: Number(formData.priority),
            updated_at: new Date().toISOString()
          })
          .eq('id', editingItem.id);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Marquee text updated successfully"
        });
      } else {
        const { error } = await supabase
          .from('marquee_texts')
          .insert([{
            ...formData,
            priority: Number(formData.priority)
          }]);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Marquee text created successfully"
        });
      }

      resetForm();
      fetchMarqueeItems();
    } catch (error) {
      console.error('Error saving marquee text:', error);
      toast({
        title: "Error",
        description: "Failed to save marquee text",
        variant: "destructive"
      });
    }
  };

  const handleEdit = (item: MarqueeText) => {
    setEditingItem(item);
    setFormData({
      text: item.text,
      link: item.link || '',
      priority: item.priority || 1,
      status: item.status || 'active',
      type: item.type || 'announcement'
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this marquee text?')) return;

    try {
      const { error } = await supabase
        .from('marquee_texts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Marquee text deleted successfully"
      });
      
      fetchMarqueeItems();
    } catch (error) {
      console.error('Error deleting marquee text:', error);
      toast({
        title: "Error",
        description: "Failed to delete marquee text",
        variant: "destructive"
      });
    }
  };

  const toggleStatus = async (id: string, currentStatus: string | null) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    
    try {
      const { error } = await supabase
        .from('marquee_texts')
        .update({ 
          status: newStatus,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) throw error;
      
      fetchMarqueeItems();
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive"
      });
    }
  };

  const resetForm = () => {
    setFormData({
      text: '',
      link: '',
      priority: 1,
      status: 'active',
      type: 'announcement'
    });
    setEditingItem(null);
    setShowForm(false);
  };

  if (loading) {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

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
                .filter(item => item.status === 'active')
                .sort((a, b) => (a.priority || 0) - (b.priority || 0))
                .map((item, index) => (
                  <span key={item.id} className="mr-12 text-college-primary font-medium">
                    {item.text}
                    {index < marqueeItems.filter(i => i.status === 'active').length - 1 && ' • '}
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
          .sort((a, b) => (a.priority || 0) - (b.priority || 0))
          .map((item) => (
          <Card key={item.id} className={item.status === 'active' ? 'border-green-200 bg-green-50' : 'border-gray-200'}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={item.status === 'active' ? 'default' : 'secondary'}>
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
                    onClick={() => toggleStatus(item.id, item.status)}
                    className={item.status === 'active' ? 'text-green-600' : 'text-gray-400'}
                  >
                    {item.status === 'active' ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleEdit(item)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-red-600"
                    onClick={() => handleDelete(item.id)}
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
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="text">Marquee Text</Label>
                <Input 
                  id="text" 
                  placeholder="Enter announcement text (emojis encouraged!)"
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="type">Type</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="announcement">Announcement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <Input 
                    id="priority" 
                    type="number" 
                    min="1" 
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: parseInt(e.target.value) || 1 })}
                  />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="link">Link (optional)</Label>
                <Input 
                  id="link" 
                  placeholder="/news/announcement" 
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={resetForm}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button type="submit" className="bg-college-primary">
                  <Save className="h-4 w-4 mr-2" />
                  {editingItem ? 'Update' : 'Add'} Marquee Text
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MarqueeManager;
