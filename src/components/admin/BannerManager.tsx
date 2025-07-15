import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit, Trash2, Upload, Eye, Save, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import FileUploadDialog from './FileUploadDialog';

interface Banner {
  id: string;
  title: string;
  subtitle: string | null;
  image_url: string | null;
  cta_text: string | null;
  cta_link: string | null;
  highlight_text: string | null;
  status: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

const BannerManager = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    image_url: '',
    cta_text: '',
    cta_link: '',
    highlight_text: '',
    status: 'active',
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

      if (error) {
        console.error('Error fetching banners:', error);
        throw error;
      }
      
      setBanners(data || []);
    } catch (error: any) {
      console.error('Error fetching banners:', error);
      toast({
        title: "Error",
        description: `Failed to fetch banners: ${error.message}`,
        variant: "destructive"
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
          .update({
            ...formData,
            display_order: Number(formData.display_order),
            updated_at: new Date().toISOString()
          })
          .eq('id', editingBanner.id);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Banner updated successfully"
        });
      } else {
        const { error } = await supabase
          .from('banners')
          .insert([{
            ...formData,
            display_order: Number(formData.display_order)
          }]);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Banner created successfully"
        });
      }

      resetForm();
      fetchBanners();
    } catch (error: any) {
      console.error('Error saving banner:', error);
      toast({
        title: "Error",
        description: `Failed to save banner: ${error.message}`,
        variant: "destructive"
      });
    }
  };

  const handleEdit = (banner: Banner) => {
    setEditingBanner(banner);
    setFormData({
      title: banner.title,
      subtitle: banner.subtitle || '',
      image_url: banner.image_url || '',
      cta_text: banner.cta_text || '',
      cta_link: banner.cta_link || '',
      highlight_text: banner.highlight_text || '',
      status: banner.status,
      display_order: banner.display_order
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this banner?')) return;

    try {
      const { error } = await supabase
        .from('banners')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Banner deleted successfully"
      });
      
      fetchBanners();
    } catch (error: any) {
      console.error('Error deleting banner:', error);
      toast({
        title: "Error",
        description: `Failed to delete banner: ${error.message}`,
        variant: "destructive"
      });
    }
  };

  const handleImageUpload = (url: string) => {
    setFormData({ ...formData, image_url: url });
    toast({
      title: "Success",
      description: "Image uploaded successfully"
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      image_url: '',
      cta_text: '',
      cta_link: '',
      highlight_text: '',
      status: 'active',
      display_order: (banners.length + 1)
    });
    setEditingBanner(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-lg">Loading banners...</div>
      </div>
    );
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
      {banners.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center text-gray-500">
            <p className="text-lg mb-2">No banners found</p>
            <p className="text-sm">Click "Add Banner" to create your first banner.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {banners.map((banner) => (
            <Card key={banner.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="w-48 h-32 bg-gray-100 flex-shrink-0">
                {banner.image_url ? (
                      <img 
                        src={banner.image_url} 
                        alt={banner.title}
                        className="w-full h-full object-cover"
                        onLoad={() => console.log('Image loaded successfully:', banner.image_url)}
                        onError={(e) => {
                          console.error('Image failed to load:', banner.image_url);
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const nextElement = target.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <div className="w-full h-full flex items-center justify-center text-gray-400" style={{display: banner.image_url ? 'none' : 'flex'}}>
                      {banner.image_url ? (
                        <div className="text-center p-2">
                          <div className="text-red-500 text-xs mb-1">Image load failed</div>
                          <div className="text-xs text-gray-500 break-all max-w-full overflow-hidden">
                            URL: {banner.image_url.length > 50 ? banner.image_url.substring(0, 50) + '...' : banner.image_url}
                          </div>
                          <div className="text-xs text-blue-500 mt-1">Check if image URL is accessible</div>
                        </div>
                      ) : (
                        'No Image'
                      )}
                    </div>
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
                        {banner.subtitle && (
                          <p className="text-sm text-gray-600 mb-2">{banner.subtitle}</p>
                        )}
                        <div className="flex items-center gap-4 text-sm">
                          {banner.cta_text && <span><strong>CTA:</strong> {banner.cta_text}</span>}
                          {banner.highlight_text && <span><strong>Highlight:</strong> {banner.highlight_text}</span>}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {banner.image_url && (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={banner.image_url} target="_blank" rel="noopener noreferrer">
                              <Eye className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
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
      )}

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
                  <Label htmlFor="title">Banner Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    placeholder="Enter banner title"
                  />
                </div>
                <div>
                  <Label htmlFor="highlight_text">Highlight Text</Label>
                  <Input
                    id="highlight_text"
                    value={formData.highlight_text}
                    onChange={(e) => setFormData({ ...formData, highlight_text: e.target.value })}
                    placeholder="e.g., NAAC B++ Accredited"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subtitle">Subtitle</Label>
                <Textarea
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Enter banner subtitle"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cta_text">Call to Action Text</Label>
                  <Input
                    id="cta_text"
                    value={formData.cta_text}
                    onChange={(e) => setFormData({ ...formData, cta_text: e.target.value })}
                    placeholder="e.g., Explore Programs"
                  />
                </div>
                <div>
                  <Label htmlFor="cta_link">Call to Action Link</Label>
                  <Input
                    id="cta_link"
                    type="url"
                    value={formData.cta_link}
                    onChange={(e) => setFormData({ ...formData, cta_link: e.target.value })}
                    placeholder="https://... or /page-path"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="image_url">Banner Image</Label>
                <div className="flex gap-2">
                  <Input
                    id="image_url"
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://... or upload new image"
                    className="flex-1"
                  />
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setShowUploadDialog(true)}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </Button>
                </div>
                {formData.image_url && (
                  <div className="mt-2 border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-2 text-sm font-medium">Preview:</div>
                    <div className="relative h-32 bg-gray-100">
                      <img 
                        src={formData.image_url} 
                        alt="Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const nextElement = target.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-red-500 text-sm" style={{display: 'none'}}>
                        Failed to load image
                      </div>
                    </div>
                  </div>
                )}
                <p className="text-sm text-gray-500 mt-1">
                  Enter URL directly or use the upload button to add a new image
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <div>
                  <Label htmlFor="display_order">Display Order</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 1 })}
                    min="1"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={resetForm}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button type="submit" className="bg-college-primary">
                  <Save className="h-4 w-4 mr-2" />
                  {editingBanner ? 'Update Banner' : 'Create Banner'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <FileUploadDialog 
        open={showUploadDialog}
        onClose={() => setShowUploadDialog(false)}
        onUploadComplete={handleImageUpload}
        folder="banner"
      />
    </div>
  );
};

export default BannerManager;
