import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  BarChart2, 
  PieChart, 
  TrendingUp, 
  Calendar, 
  Download, 
  Printer, 
  Mail, 
  Users, 
  GraduationCap, 
  DollarSign 
} from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';
import { useToast } from '@/hooks/use-toast';

const ReportGenerator = () => {
  const [selectedReport, setSelectedReport] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  useSEO({
    title: "Report Generator - ISBM College",
    description: "Generate various reports and analytics",
    canonical: "https://isbmcoe.edu.in/admin/reports"
  });

  const reportTypes = [
    {
      category: 'Academic',
      reports: [
        { id: 'student-performance', name: 'Student Performance Report', icon: TrendingUp },
        { id: 'attendance', name: 'Attendance Report', icon: Calendar },
        { id: 'course-completion', name: 'Course Completion Report', icon: FileText },
        { id: 'faculty-workload', name: 'Faculty Workload Report', icon: Users }
      ]
    },
    {
      category: 'Administrative',
      reports: [
        { id: 'admission-stats', name: 'Admission Statistics', icon: BarChart2 },
        { id: 'department-summary', name: 'Department Summary', icon: PieChart },
        { id: 'infrastructure-usage', name: 'Infrastructure Usage', icon: FileText },
        { id: 'staff-attendance', name: 'Staff Attendance Report', icon: Calendar }
      ]
    },
    {
      category: 'Financial',
      reports: [
        { id: 'fee-collection', name: 'Fee Collection Report', icon: DollarSign },
        { id: 'expense-summary', name: 'Expense Summary', icon: BarChart2 },
        { id: 'scholarship-disbursement', name: 'Scholarship Disbursement', icon: GraduationCap },
        { id: 'budget-utilization', name: 'Budget Utilization Report', icon: PieChart }
      ]
    }
  ];

  const handleGenerateReport = () => {
    if (!selectedReport) {
      toast({
        title: "Error",
        description: "Please select a report to generate",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Report Generated",
        description: "Your report has been generated successfully",
      });
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <FileText className="h-8 w-8 text-green-500" />
              Report Generator
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Generate comprehensive reports and analytics</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" disabled={!selectedReport || isGenerating}>
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button 
              className="bg-green-500 hover:bg-green-600" 
              disabled={!selectedReport || isGenerating}
              onClick={handleGenerateReport}
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generating...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Generate Report
                </>
              )}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="academic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="academic" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Academic
            </TabsTrigger>
            <TabsTrigger value="administrative" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Administrative
            </TabsTrigger>
            <TabsTrigger value="financial" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Financial
            </TabsTrigger>
          </TabsList>

          {reportTypes.map((category) => (
            <TabsContent key={category.category.toLowerCase()} value={category.category.toLowerCase()} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Select {category.category} Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.reports.map((report) => (
                      <Button
                        key={report.id}
                        variant={selectedReport === report.id ? "default" : "outline"}
                        className={`h-24 flex-col ${selectedReport === report.id ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => setSelectedReport(report.id)}
                      >
                        <report.icon className={`h-8 w-8 mb-2 ${selectedReport === report.id ? 'text-white' : 'text-blue-500'}`} />
                        <span className="text-xs">{report.name}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Report Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Date Range</label>
                        <div className="flex gap-2">
                          <input 
                            type="date" 
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                          />
                          <span className="flex items-center">to</span>
                          <input 
                            type="date" 
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Format</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                          <option>PDF</option>
                          <option>Excel</option>
                          <option>CSV</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Additional Options</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center">
                          <input type="checkbox" id="include-charts" className="mr-2" />
                          <label htmlFor="include-charts">Include Charts</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="include-summary" className="mr-2" />
                          <label htmlFor="include-summary">Include Summary</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="detailed-view" className="mr-2" />
                          <label htmlFor="detailed-view">Detailed View</label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Delivery Method</label>
                      <div className="flex gap-4">
                        <Button variant="outline" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Printer className="h-4 w-4 mr-2" />
                          Print
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ReportGenerator;