
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Smartphone,
  Clock,
  ArrowUp,
  ArrowDown,
  Download
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const AnalyticsPanel = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const trafficData = [
    { date: '2024-01-01', visitors: 1200, pageViews: 3400, bounceRate: 45 },
    { date: '2024-01-02', visitors: 1100, pageViews: 3100, bounceRate: 42 },
    { date: '2024-01-03', visitors: 1300, pageViews: 3600, bounceRate: 38 },
    { date: '2024-01-04', visitors: 1400, pageViews: 3900, bounceRate: 41 },
    { date: '2024-01-05', visitors: 1250, pageViews: 3500, bounceRate: 44 },
    { date: '2024-01-06', visitors: 1600, pageViews: 4200, bounceRate: 36 },
    { date: '2024-01-07', visitors: 1800, pageViews: 4800, bounceRate: 33 },
  ];

  const topPages = [
    { page: '/home', views: 12450, percentage: 35 },
    { page: '/admissions', views: 8230, percentage: 23 },
    { page: '/programs', views: 6120, percentage: 17 },
    { page: '/placements', views: 4890, percentage: 14 },
    { page: '/about', views: 3980, percentage: 11 },
  ];

  const deviceData = [
    { name: 'Desktop', value: 2340, color: '#3B82F6' },
    { name: 'Mobile', value: 1890, color: '#10B981' },
    { name: 'Tablet', value: 560, color: '#F59E0B' },
  ];

  const trafficSources = [
    { source: 'Organic Search', visitors: 3240, percentage: 45, trend: 'up' },
    { source: 'Direct', visitors: 2100, percentage: 29, trend: 'up' },
    { source: 'Social Media', visitors: 980, percentage: 14, trend: 'down' },
    { source: 'Referrals', visitors: 560, percentage: 8, trend: 'up' },
    { source: 'Email', visitors: 290, percentage: 4, trend: 'neutral' },
  ];

  const metrics = [
    {
      title: 'Total Visitors',
      value: '15,248',
      change: '+12.5%',
      changeType: 'positive',
      icon: Users
    },
    {
      title: 'Page Views',
      value: '45,320',
      change: '+8.2%',
      changeType: 'positive',
      icon: Globe
    },
    {
      title: 'Avg. Session Duration',
      value: '3m 42s',
      change: '+5.1%',
      changeType: 'positive',
      icon: Clock
    },
    {
      title: 'Bounce Rate',
      value: '38.5%',
      change: '-2.3%',
      changeType: 'positive',
      icon: TrendingUp
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
          <p className="text-gray-600">Track website performance and user engagement</p>
        </div>
        <div className="flex items-center space-x-4">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <div className="flex items-center mt-1">
                    {metric.changeType === 'positive' ? (
                      <ArrowUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDown className="h-4 w-4 text-red-500" />
                    )}
                    <span className={`text-sm ml-1 ${
                      metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <metric.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="traffic" className="space-y-6">
        <TabsList>
          <TabsTrigger value="traffic">Traffic Overview</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="content">Content Performance</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
        </TabsList>

        <TabsContent value="traffic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Visitors & Page Views</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Area type="monotone" dataKey="visitors" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="pageViews" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trafficSources.map((source, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="font-medium">{source.source}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{source.visitors}</span>
                        <Badge variant="outline">{source.percentage}%</Badge>
                        {source.trend === 'up' && <ArrowUp className="h-4 w-4 text-green-500" />}
                        {source.trend === 'down' && <ArrowDown className="h-4 w-4 text-red-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audience">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['India', 'United States', 'United Kingdom', 'Canada', 'Australia'].map((country, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium">{country}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${80 - index * 15}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{1200 - index * 200}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-gray-400">#{index + 1}</div>
                      <div>
                        <p className="font-medium">{page.page}</p>
                        <p className="text-sm text-gray-600">{page.views} views</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-blue-600">{page.percentage}%</p>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${page.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversions">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Admission Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Bar dataKey="visitors" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Funnel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Visitors</span>
                    <span className="font-semibold">15,248</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Brochure Downloads</span>
                    <span className="font-semibold">2,340 (15.3%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Inquiry Form Submissions</span>
                    <span className="font-semibold">890 (5.8%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Application Submissions</span>
                    <span className="font-semibold">234 (1.5%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsPanel;
