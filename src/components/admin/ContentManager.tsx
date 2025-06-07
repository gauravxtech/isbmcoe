
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BannerManager from './BannerManager';
import NewsEventManager from './NewsEventManager';
import DepartmentContentManager from './DepartmentContentManager';
import MarqueeManager from './MarqueeManager';
import { 
  Image as ImageIcon, 
  Newspaper, 
  Building, 
  Type,
  FileText,
  Megaphone
} from 'lucide-react';

const ContentManager = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Content Management</h2>
          <p className="text-gray-600">Manage all website content dynamically</p>
        </div>
      </div>

      <Tabs defaultValue="banners" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="banners" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" />
            Banners
          </TabsTrigger>
          <TabsTrigger value="marquee" className="flex items-center gap-2">
            <Type className="h-4 w-4" />
            Marquee
          </TabsTrigger>
          <TabsTrigger value="news-events" className="flex items-center gap-2">
            <Newspaper className="h-4 w-4" />
            News & Events
          </TabsTrigger>
          <TabsTrigger value="departments" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            Departments
          </TabsTrigger>
          <TabsTrigger value="pages" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Pages
          </TabsTrigger>
          <TabsTrigger value="announcements" className="flex items-center gap-2">
            <Megaphone className="h-4 w-4" />
            Announcements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="banners">
          <BannerManager />
        </TabsContent>

        <TabsContent value="marquee">
          <MarqueeManager />
        </TabsContent>

        <TabsContent value="news-events">
          <NewsEventManager />
        </TabsContent>

        <TabsContent value="departments">
          <DepartmentContentManager />
        </TabsContent>

        <TabsContent value="pages">
          <div className="text-center py-16">
            <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Page Content Manager</h3>
            <p className="text-gray-600 mb-4">Manage static pages like About, Vision & Mission, Contact, etc.</p>
            <p className="text-sm text-gray-500">Coming soon...</p>
          </div>
        </TabsContent>

        <TabsContent value="announcements">
          <div className="text-center py-16">
            <Megaphone className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Announcement Manager</h3>
            <p className="text-gray-600 mb-4">Manage urgent announcements and notifications</p>
            <p className="text-sm text-gray-500">Coming soon...</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentManager;
