
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CreditCard, DollarSign, TrendingUp, FileText, Calculator, Receipt, Wallet, BarChart3 } from 'lucide-react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useSEO } from '@/hooks/useSEO';

const AccountantDashboard = () => {
  useSEO({
    title: "Accountant Dashboard - ISBM College",
    description: "Finance department dashboard",
    canonical: "https://isbmcoe.edu.in/dashboard/accountant"
  });

  const financeStats = [
    { label: 'Total Revenue', value: '₹2.4Cr', icon: DollarSign, color: 'text-green-600' },
    { label: 'Pending Fees', value: '₹12L', icon: CreditCard, color: 'text-orange-600' },
    { label: 'Expenses', value: '₹85L', icon: Wallet, color: 'text-red-600' },
    { label: 'Net Profit', value: '₹1.55Cr', icon: TrendingUp, color: 'text-purple-600' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Calculator className="h-8 w-8 text-yellow-500" />
              Finance Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Financial Operations & Accounting</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Receipt className="h-4 w-4 mr-2" />
              Generate Receipt
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-600">
              <BarChart3 className="h-4 w-4 mr-2" />
              Financial Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {financeStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AccountantDashboard;
