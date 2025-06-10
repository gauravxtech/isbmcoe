
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Upload, Eye } from 'lucide-react';

const BannerManager = () => {
  const [banners, setBanners] = useState([
    {
      id: 1,
      title: "Excellence in Engineering Education",
      subtitle: "Shaping Future Engineers with Innovation and Technology",
      image: "/lovable-uploads/a07dab32-a06d-4aa9-ab59-2d061f93201f.png",
      cta: "Explore Programs",
      highlight: "NAAC B++ Accredited",
      status: "Active",
      order: 1
    },
    {
      id: 2,
      title: "World-Class Infrastructure",
      subtitle: "State-of-the-art Labs and Modern Campus Facilities", 
      image: "/lovable-uploads/b592b170-56b4-4e52-b3ff-c4f500363b94.png",
      cta: "Campus Tour",
      highlight: "17 Acre Campus",
      status: "Active",
      order: 2
    }
  ]);

  const [editingBanner, setEditingBanner] = useState(null);
  const [showForm, setShowForm] = useState(false);

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
                    src={banner.image} 
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{banner.title}</h4>
                        <Badge variant={banner.status === 'Active' ? 'default' : 'secondary'}>
                          {banner.status}
                        </Badge>
                        <Badge variant="outline">Order: {banner.order}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{banner.subtitle}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span><strong>CTA:</strong> {banner.cta}</span>
                        <span><strong>Highlight:</strong> {banner.highlight}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setEditingBanner(banner)}>
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
      {(showForm || editingBanner) && (
        <Card>
          <CardHeader>
            <CardTitle>{editingBanner ? 'Edit Banner' : 'Add New Banner'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Banner Title</Label>
                <Input id="title" placeholder="Enter banner title" />
              </div>
              <div>
                <Label htmlFor="highlight">Highlight Text</Label>
                <Input id="highlight" placeholder="e.g., NAAC B++ Accredited" />
              </div>
            </div>
            <div>
              <Label htmlFor="subtitle">Subtitle</Label>
              <Textarea id="subtitle" placeholder="Enter banner subtitle" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cta">Call to Action Text</Label>
                <Input id="cta" placeholder="e.g., Explore Programs" />
              </div>
              <div>
                <Label htmlFor="order">Display Order</Label>
                <Input id="order" type="number" placeholder="1" />
              </div>
            </div>
            <div>
              <Label htmlFor="image">Banner Image</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Upload banner image (1920x800 recommended)</p>
                <Button variant="outline" className="mt-2">
                  Choose File
                </Button>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={() => {setShowForm(false); setEditingBanner(null);}}>
                Cancel
              </Button>
              <Button className="bg-college-primary">
                {editingBanner ? 'Update Banner' : 'Add Banner'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BannerManager;
