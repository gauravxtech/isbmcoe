
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GraduationCap, Users, BookOpen, Award, Target, Eye } from 'lucide-react';

interface FacultyMember {
  name: string;
  position: string;
  qualification: string;
  photo?: string;
}

interface ProgramOutcome {
  code: string;
  title: string;
  code2: string;
  title2: string;
}

interface HODInfo {
  name: string;
  position: string;
  qualification: string;
  photo?: string;
  message: string[];
}

interface DepartmentData {
  name: string;
  vision: string;
  mission: string[];
  programOutcomes: ProgramOutcome[];
  programEducationOutcomes: string[];
  programSpecificOutcomes: string[];
  facultyMembers: FacultyMember[];
  hod: HODInfo;
  activities: Array<{
    title: string;
    description: string;
    color: string;
  }>;
}

interface DepartmentTemplateProps {
  data: DepartmentData;
}

const DepartmentTemplate: React.FC<DepartmentTemplateProps> = ({ data }) => {
  return (
    <div className="min-h-screen bg-college-light">
      <Header />
      <Navbar />
      <Separator className="bg-gray-300" />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-college-primary to-college-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {data.name}
            </h1>
            <div className="w-24 h-1 bg-college-accent mx-auto mb-4"></div>
            <nav className="text-sm text-white/80">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="mx-2">|</span>
              <span className="hover:text-white cursor-pointer">Department</span>
              <span className="mx-2">|</span>
              <span className="text-white font-semibold">{data.name}</span>
            </nav>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="about" className="space-y-8">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="hod-message">HOD Message</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
            <TabsTrigger value="course-outcome">Course Outcome</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-8">
            {/* Vision and Mission */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-college-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-6 w-6 text-college-primary" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {data.vision}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-college-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-college-accent" />
                    Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    {data.mission.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Program Outcomes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-college-primary" />
                  Program Outcome
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {data.programOutcomes.map((outcome, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-4">
                      <div className="flex gap-3">
                        <span className="bg-college-primary text-white px-2 py-1 rounded text-sm font-semibold">
                          {outcome.code}
                        </span>
                        <span className="text-gray-700">{outcome.title}</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="bg-college-accent text-white px-2 py-1 rounded text-sm font-semibold">
                          {outcome.code2}
                        </span>
                        <span className="text-gray-700">{outcome.title2}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Program Education Outcome */}
            <Card>
              <CardHeader>
                <CardTitle>Program Education Outcome</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2">
                  {data.programEducationOutcomes.map((outcome, index) => (
                    <li key={index}>• {outcome}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Program Specific Outcome */}
            <Card>
              <CardHeader>
                <CardTitle>Program Specific Outcome</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2">
                  {data.programSpecificOutcomes.map((outcome, index) => (
                    <li key={index}>• {outcome}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hod-message">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-college-primary" />
                  Message from HOD
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="text-center">
                      <Avatar className="w-48 h-48 mx-auto mb-4">
                        <AvatarImage src={data.hod.photo} alt={data.hod.name} />
                        <AvatarFallback>
                          <Users className="h-24 w-24 text-gray-400" />
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold text-college-primary mb-2">{data.hod.name}</h3>
                      <p className="text-gray-600 mb-1">{data.hod.position}</p>
                      <p className="text-gray-600 mb-1">{data.name}</p>
                      <p className="text-sm text-college-accent">{data.hod.qualification}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-semibold text-college-primary mb-4">MESSAGE FROM HOD DESK</h4>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      {data.hod.message.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faculty">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-college-primary" />
                  Faculty Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                  {data.facultyMembers.map((faculty, index) => (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <Avatar className="w-24 h-24 mx-auto mb-4">
                          <AvatarImage src={faculty.photo} alt={faculty.name} />
                          <AvatarFallback className="text-lg">
                            {faculty.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-college-primary mb-2 text-sm">{faculty.name}</h3>
                        <p className="text-gray-600 text-xs mb-2">{faculty.position}</p>
                        <p className="text-gray-500 text-xs">{faculty.qualification}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Separator className="my-8" />
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Qualification</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.facultyMembers.map((faculty, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{faculty.name}</TableCell>
                          <TableCell>{faculty.position}</TableCell>
                          <TableCell>{faculty.qualification}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="syllabus">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-college-primary" />
                  Syllabus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Syllabus information will be available soon.</p>
                  <p className="text-sm text-gray-500">Please contact the department for detailed syllabus information.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="course-outcome">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-college-primary" />
                  Course Outcome
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Course outcome information will be available soon.</p>
                  <p className="text-sm text-gray-500">Please contact the department for detailed course outcome information.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities">
            <Card>
              <CardHeader>
                <CardTitle>Departmental Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.activities.map((activity, index) => (
                    <div key={index} className={`bg-gradient-to-br ${activity.color} p-6 rounded-lg`}>
                      <h4 className="font-semibold mb-2">{activity.title}</h4>
                      <p className="text-sm">{activity.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default DepartmentTemplate;
