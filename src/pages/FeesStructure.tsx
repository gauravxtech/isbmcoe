
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IndianRupee, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FeesStructure = () => {
  const feesData = [
    {
      course: "Computer Engineering",
      shift: "General",
      level: "UG",
      intake: 120,
      open: "88,000/-",
      obc: "57,136/-",
      nt: "26,272/-",
      sc: "18,000/-"
    },
    {
      course: "Artificial Intelligence & Machine Learning",
      shift: "General",
      level: "UG",
      intake: 120,
      open: "88,000/-",
      obc: "57,136/-",
      nt: "26,272/-",
      sc: "18,000/-"
    },
    {
      course: "Artificial Intelligence and Data Science",
      shift: "General",
      level: "UG",
      intake: 120,
      open: "88,000/-",
      obc: "57,136/-",
      nt: "26,272/-",
      sc: "18,000/-"
    },
    {
      course: "Electronics & Telecommunication Engineering",
      shift: "General",
      level: "UG",
      intake: 30,
      open: "88,000/-",
      obc: "57,136/-",
      nt: "26,272/-",
      sc: "18,000/-"
    },
    {
      course: "Mechanical Engineering",
      shift: "General",
      level: "UG",
      intake: 60,
      open: "88,000/-",
      obc: "57,136/-",
      nt: "26,272/-",
      sc: "18,000/-"
    },
    {
      course: "Computer Science Engineering",
      shift: "General",
      level: "UG",
      intake: 60,
      open: "88,000/-",
      obc: "57,136/-",
      nt: "26,272/-",
      sc: "18,000/-"
    },
    {
      course: "Electronics Engineering (VLSI & Design Technology)",
      shift: "General",
      level: "UG",
      intake: 60,
      open: "88,000/-",
      obc: "57,136/-",
      nt: "26,272/-",
      sc: "18,000/-"
    },
    {
      course: "BBA",
      shift: "General",
      level: "UG",
      intake: 120,
      open: "57,136/-",
      obc: "NO DISCOUNT",
      nt: "NO DISCOUNT",
      sc: "26,272/-"
    },
    {
      course: "BCA",
      shift: "General",
      level: "UG",
      intake: 120,
      open: "57,136/-",
      obc: "NO DISCOUNT",
      nt: "NO DISCOUNT",
      sc: "26,272/-"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <Separator className="bg-gray-300" />

      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-college-primary font-medium">Home</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-college-primary font-medium">Admissions</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-600">Fees Structure</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Fees Structure
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transparent fee structure for all undergraduate programs with category-wise details
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-college-primary flex items-center">
                <IndianRupee className="h-6 w-6 mr-3 text-college-accent" />
                Annual Fees Structure (2024-25)
              </CardTitle>
              <p className="text-gray-600">Category-wise fee structure for all undergraduate programs</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-college-primary/10">
                      <TableHead className="font-bold text-college-primary">Name of Course</TableHead>
                      <TableHead className="font-bold text-college-primary">Shift</TableHead>
                      <TableHead className="font-bold text-college-primary">Level</TableHead>
                      <TableHead className="font-bold text-college-primary">Intake</TableHead>
                      <TableHead className="font-bold text-college-primary">OPEN</TableHead>
                      <TableHead className="font-bold text-college-primary">OBC/EBC</TableHead>
                      <TableHead className="font-bold text-college-primary">NT/SBC/TFWS</TableHead>
                      <TableHead className="font-bold text-college-primary">SC/ST</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feesData.map((row, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{row.course}</TableCell>
                        <TableCell>{row.shift}</TableCell>
                        <TableCell>{row.level}</TableCell>
                        <TableCell>{row.intake}</TableCell>
                        <TableCell className="font-semibold text-college-primary">{row.open}</TableCell>
                        <TableCell className="font-semibold text-college-primary">{row.obc}</TableCell>
                        <TableCell className="font-semibold text-college-primary">{row.nt}</TableCell>
                        <TableCell className="font-semibold text-college-primary">{row.sc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Important Notes */}
              <div className="mt-8 space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-yellow-800 mb-2">Important Notes:</h3>
                      <ul className="space-y-2 text-yellow-700">
                        <li className="flex items-start">
                          <span className="font-bold mr-2">1.</span>
                          University Examination fees will be extra as per the university in each Semester.
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold mr-2">2.</span>
                          Caution Money (Refundable) - ₹15,000/-
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeesStructure;
