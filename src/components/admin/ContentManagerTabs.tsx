
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BannerManager from './BannerManager';
import NewsEventManager from './NewsEventManager';
import DepartmentContentManager from './DepartmentContentManager';
import MarqueeManager from './MarqueeManager';
import PlaceholderTabContent from './PlaceholderTabContent';
import { 
  Image as ImageIcon, 
  Newspaper, 
  Building, 
  Type,
  FileText,
  Megaphone
} from 'lucide-react';

const ContentManagerTabs = () => {
  return (
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
        <PlaceholderTabContent 
          icon={FileText}
          title="Page Content Manager"
          description="Manage static pages like About, Vision & Mission, Contact, etc."
        />
      </TabsContent>

      <TabsContent value="announcements">
        <PlaceholderTabContent 
          icon={Megaphone}
          title="Announcement Manager"
          description="Manage urgent announcements and notifications"
        />
      </TabsContent>
    </Tabs>
  );
};

export default ContentManagerTabs;
