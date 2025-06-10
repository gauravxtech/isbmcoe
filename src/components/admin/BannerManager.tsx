
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Upload, Eye } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image_url: string;
  cta_text: string;
  cta_link?: string;
  highlight_text: string;
  status: string;
  display_order: number;
}

const BannerManager = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    image_url: '',
    cta_text: '',
    cta_link: '',
    highlight_text: '',
    display_order: 1
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const { data, error } = await supabase
        .from('banners')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setBanners(data || []);
    } catch (error) {
      console.error('Error fetching banners:', error);
      toast({
        title: "Error",
        description: "Failed to load banners",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingBanner) {
        const { error } = await supabase
          .from('banners')
          .update(formData)
          .eq('id', editingBanner.id);

        if (error) throw error;
        toast({ title: "Success", description: "Banner updated successfully" });
      } else {
        const { error } = await supabase
          .from('banners')
          .insert([formData]);

        if (error) throw error;
        toast({ title: "Success", description: "Banner created successfully" });
      }

      resetForm();
      fetchBanners();
    } catch (error) {
      console.error('Error saving banner:', error);
      toast({
        title: "Error",
        description: "Failed to save banner",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('banners')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Success", description: "Banner deleted successfully" });
      fetchBanners();
    } catch (error) {
      console.error('Error deleting banner:', error);
      toast({
        title: "Error",
        description: "Failed to delete banner",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      image_url: '',
      cta_text: '',
      cta_link: '',
      highlight_text: '',
      display_order: 1
    });
    setEditingBanner(null);
    setShowForm(false);
  };

  const handleEdit = (banner: Banner) => {
    setFormData({
      title: banner.title,
      subtitle: banner.subtitle,
      image_url: banner.image_url,
      cta_text: banner.cta_text,
      cta_link: banner.cta_link || '',
      highlight_text: banner.highlight_text,
      display_order: banner.display_order
    });
    setEditingBanner(banner);
    setShowForm(true);
  };

  if (loading) {
    return <div className="p-6">Loading banners...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Banner Management</h3>
          <p className="text-gray-600">Manage homepage banner slides and hero content</p>
        </div>
        <Button onClick={() => setShowForm(true)} className="bg-college-primary">
          <Plus className="h-4 w-4 mr-2" />
          Add Banner
        </Button>
      </div>

      {/* Banner List */}
      <div className="grid gap-4">
        {banners.map((banner) => (
          <Card key={banner.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex">
                <div className="w-48 h-32 bg-gray-100 flex-shrink-0">
                  <img 
                    src={banner.image_url} 
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{banner.title}</h4>
                        <Badge variant={banner.status === 'active' ? 'default' : 'secondary'}>
                          {banner.status}
                        </Badge>
                        <Badge variant="outline">Order: {banner.display_order}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{banner.subtitle}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span><strong>CTA:</strong> {banner.cta_text}</span>
                        <span><strong>Highlight:</strong> {banner.highlight_text}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(banner)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600" onClick={() => handleDelete(banner.id)}>
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
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingBanner ? 'Edit Banner' : 'Add New Banner'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Banner Title</Label>
                  <Input 
                    id="title" 
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter banner title" 
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="highlight">Highlight Text</Label>
                  <Input 
                    id="highlight" 
                    value={formData.highlight_text}
                    onChange={(e) => setFormData(prev => ({ ...prev, highlight_text: e.target.value }))}
                    placeholder="e.g., NAAC B++ Accredited" 
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subtitle">Subtitle</Label>
                <Textarea 
                  id="subtitle" 
                  value={formData.subtitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                  placeholder="Enter banner subtitle" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cta">Call to Action Text</Label>
                  <Input 
                    id="cta" 
                    value={formData.cta_text}
                    onChange={(e) => setFormData(prev => ({ ...prev, cta_text: e.target.value }))}
                    placeholder="e.g., Explore Programs" 
                  />
                </div>
                <div>
                  <Label htmlFor="order">Display Order</Label>
                  <Input 
                    id="order" 
                    type="number" 
                    value={formData.display_order}
                    onChange={(e) => setFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) }))}
                    placeholder="1" 
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="image_url">Image URL</Label>
                <Input 
                  id="image_url" 
                  value={formData.image_url}
                  onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                  placeholder="Enter image URL" 
                />
              </div>
              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-college-primary">
                  {editingBanner ? 'Update Banner' : 'Add Banner'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BannerManager;
