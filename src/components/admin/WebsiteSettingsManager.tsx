
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, Plus, Edit, Trash2, Settings, Globe, Phone, Mail, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface WebsiteSetting {
  id: string;
  setting_key: string;
  setting_value: string | null;
  setting_type: string;
  description: string | null;
  category: string;
  is_public: boolean;
}

const WebsiteSettingsManager = () => {
  const [settings, setSettings] = useState<WebsiteSetting[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingSettings, setEditingSettings] = useState<Record<string, string>>({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSetting, setNewSetting] = useState({
    setting_key: '',
    setting_value: '',
    setting_type: 'text',
    description: '',
    category: 'general',
    is_public: false
  });
  const { toast } = useToast();

  const categories = [
    { value: 'general', label: 'General', icon: Settings },
    { value: 'contact', label: 'Contact', icon: Phone },
    { value: 'social', label: 'Social Media', icon: Globe },
    { value: 'academic', label: 'Academic', icon: Users },
    { value: 'admission', label: 'Admission', icon: Mail }
  ];

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('website_settings')
        .select('*')
        .order('category', { ascending: true })
        .order('setting_key', { ascending: true });

      if (error) throw error;
      
      setSettings(data || []);
      
      // Initialize editing settings
      const initialEditingSettings: Record<string, string> = {};
      data?.forEach(setting => {
        initialEditingSettings[setting.id] = setting.setting_value || '';
      });
      setEditingSettings(initialEditingSettings);
    } catch (error) {
      console.error('Error fetching settings:', error);
      toast({
        title: "Error",
        description: "Failed to fetch settings",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSetting = async (settingId: string) => {
    try {
      const { error } = await supabase
        .from('website_settings')
        .update({
          setting_value: editingSettings[settingId],
          updated_at: new Date().toISOString()
        })
        .eq('id', settingId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Setting updated successfully"
      });

      fetchSettings();
    } catch (error) {
      console.error('Error updating setting:', error);
      toast({
        title: "Error",
        description: "Failed to update setting",
        variant: "destructive"
      });
    }
  };

  const handleAddSetting = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('website_settings')
        .insert([newSetting]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Setting added successfully"
      });

      setNewSetting({
        setting_key: '',
        setting_value: '',
        setting_type: 'text',
        description: '',
        category: 'general',
        is_public: false
      });
      setShowAddForm(false);
      fetchSettings();
    } catch (error) {
      console.error('Error adding setting:', error);
      toast({
        title: "Error",
        description: "Failed to add setting",
        variant: "destructive"
      });
    }
  };

  const handleDeleteSetting = async (settingId: string) => {
    if (!confirm('Are you sure you want to delete this setting?')) return;

    try {
      const { error } = await supabase
        .from('website_settings')
        .delete()
        .eq('id', settingId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Setting deleted successfully"
      });

      fetchSettings();
    } catch (error) {
      console.error('Error deleting setting:', error);
      toast({
        title: "Error",
        description: "Failed to delete setting",
        variant: "destructive"
      });
    }
  };

  const renderSettingInput = (setting: WebsiteSetting) => {
    const value = editingSettings[setting.id] || '';
    
    switch (setting.setting_type) {
      case 'boolean':
        return (
          <Select 
            value={value} 
            onValueChange={(newValue) => setEditingSettings({
              ...editingSettings,
              [setting.id]: newValue
            })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Yes</SelectItem>
              <SelectItem value="false">No</SelectItem>
            </SelectContent>
          </Select>
        );
      case 'number':
        return (
          <Input
            type="number"
            value={value}
            onChange={(e) => setEditingSettings({
              ...editingSettings,
              [setting.id]: e.target.value
            })}
          />
        );
      case 'email':
        return (
          <Input
            type="email"
            value={value}
            onChange={(e) => setEditingSettings({
              ...editingSettings,
              [setting.id]: e.target.value
            })}
          />
        );
      case 'url':
        return (
          <Input
            type="url"
            value={value}
            onChange={(e) => setEditingSettings({
              ...editingSettings,
              [setting.id]: e.target.value
            })}
          />
        );
      default:
        return value && value.length > 100 ? (
          <Textarea
            value={value}
            onChange={(e) => setEditingSettings({
              ...editingSettings,
              [setting.id]: e.target.value
            })}
            rows={3}
          />
        ) : (
          <Input
            value={value}
            onChange={(e) => setEditingSettings({
              ...editingSettings,
              [setting.id]: e.target.value
            })}
          />
        );
    }
  };

  const getSettingsByCategory = (category: string) => {
    return settings.filter(setting => setting.category === category);
  };

  if (loading) {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Website Settings</h3>
          <p className="text-gray-600">Manage global website configuration and settings</p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="bg-college-primary">
          <Plus className="h-4 w-4 mr-2" />
          Add Setting
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          {categories.map((category) => (
            <TabsTrigger key={category.value} value={category.value} className="flex items-center gap-2">
              <category.icon className="h-4 w-4" />
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.value} value={category.value}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-5 w-5" />
                  {category.label} Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {getSettingsByCategory(category.value).map((setting) => (
                  <div key={setting.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Label className="font-medium">{setting.setting_key}</Label>
                          <Badge variant="outline" className="text-xs">
                            {setting.setting_type}
                          </Badge>
                          {setting.is_public && (
                            <Badge variant="secondary" className="text-xs">
                              Public
                            </Badge>
                          )}
                        </div>
                        {setting.description && (
                          <p className="text-sm text-gray-600 mb-3">{setting.description}</p>
                        )}
                        <div className="flex items-center gap-2">
                          <div className="flex-1">
                            {renderSettingInput(setting)}
                          </div>
                          <Button
                            size="sm"
                            onClick={() => handleUpdateSetting(setting.id)}
                            disabled={editingSettings[setting.id] === setting.setting_value}
                          >
                            <Save className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 ml-2"
                        onClick={() => handleDeleteSetting(setting.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Add New Setting Form */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Setting</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddSetting} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="setting_key">Setting Key</Label>
                  <Input
                    id="setting_key"
                    value={newSetting.setting_key}
                    onChange={(e) => setNewSetting({ ...newSetting, setting_key: e.target.value })}
                    placeholder="e.g., contact_phone"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="setting_type">Type</Label>
                  <Select 
                    value={newSetting.setting_type} 
                    onValueChange={(value) => setNewSetting({ ...newSetting, setting_type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Text</SelectItem>
                      <SelectItem value="number">Number</SelectItem>
                      <SelectItem value="boolean">Boolean</SelectItem>
                      <SelectItem value="url">URL</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="json">JSON</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="setting_value">Value</Label>
                <Input
                  id="setting_value"
                  value={newSetting.setting_value}
                  onChange={(e) => setNewSetting({ ...newSetting, setting_value: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newSetting.description}
                  onChange={(e) => setNewSetting({ ...newSetting, description: e.target.value })}
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={newSetting.category} 
                    onValueChange={(value) => setNewSetting({ ...newSetting, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="is_public">Visibility</Label>
                  <Select 
                    value={newSetting.is_public.toString()} 
                    onValueChange={(value) => setNewSetting({ ...newSetting, is_public: value === 'true' })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="false">Private</SelectItem>
                      <SelectItem value="true">Public</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-college-primary">
                  <Save className="h-4 w-4 mr-2" />
                  Add Setting
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WebsiteSettingsManager;
