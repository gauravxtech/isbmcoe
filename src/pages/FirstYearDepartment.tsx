
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { GraduationCap, Users, BookOpen, Award, Target, Eye } from 'lucide-react';

const FirstYearDepartment = () => {
  const programOutcomes = [
    { code: "PO1", title: "Engineering knowledge", code2: "PO7", title2: "Environment and sustainability" },
    { code: "PO2", title: "Problem analysis", code2: "PO8", title2: "Ethics" },
    { code: "PO3", title: "Design / development of solutions", code2: "PO9", title2: "Individual and team work" },
    { code: "PO4", title: "Conduct investigations of complex problems", code2: "PO10", title2: "Communication" },
    { code: "PO5", title: "Modern tool usage", code2: "PO11", title2: "Project management and finance" },
    { code: "PO6", title: "The engineer and society", code2: "PO12", title2: "Life-long learning" }
  ];

  const facultyMembers = [
    { name: "Prof. Krishna Kr. Yadav", position: "Assistant Professor (HOD-First Year Engineering)", qualification: "M.Tech.(Hydro Power Engg), Ph.D* (ME)" },
    { name: "Dr. M. P Yadav", position: "Dean, Professor", qualification: "M.Sc.(Physics), Ph.D.(Physics)" },
    { name: "Dr. Deepak Kulshreshtha", position: "Associate Professor", qualification: "M.Sc.(Physics), Ph.D.(Physics)" },
    { name: "Dr. Radhey Shyam Baghel", position: "Associate Professor", qualification: "M.Sc.(Physics), Ph.D.(Physics)" },
    { name: "Prof. Arjun Singh Katiyar", position: "Associate Professor", qualification: "PhD* ,M.Tech (ECE)" },
    { name: "Dr. Rakhee Bhosale", position: "Assistant Professor", qualification: "Ph. D. (Chemistry), M. Sc (Chemistry)" },
    { name: "Prof. Abdul kadir", position: "Assistant Professor", qualification: "MTech (Control System), BTech (EEE)" },
    { name: "Prof. Dhanashri Vedpathak", position: "Assistant Professor", qualification: "Msc.Tech(IMCA), PhD*" },
    { name: "Prof. Navnath Lakde", position: "Assistant Professor", qualification: "NET Qualified, M.SC. (Applied Mathematics)" },
    { name: "Prof. Archana Prayag", position: "Assistant Professor", qualification: "M.E. (Civil Environmental Engineering)" },
    { name: "Dr. Suman Mishra", position: "Assistant Professor", qualification: "Ph. D. (English)" },
    { name: "Sapana Dhabarde", position: "Assistant Professor", qualification: "SET Qualified, M.Sc. (Physics )" },
    { name: "Prof. Ajay Prakash", position: "Assistant Professor", qualification: "M.Tech (CSE), B.Tech (IT)" },
    { name: "Rahul Shivram Nagmode", position: "Assistant Professor", qualification: "BE (Mechanical), ME (Design)" },
    { name: "Dr. Ashatai Shashikant Jadhav", position: "Assistant Professor", qualification: "Ph. D (Material Science), M. Sc (Applied Chemistry)" },
    { name: "Prof. Prakash Mani Badal", position: "Assistant Professor", qualification: "M.Tech (IT) , B.Tech (CSE)" },
    { name: "Dr. Prem Nandan Pandey", position: "Assistant Professor", qualification: "M.Sc. (Biotechnology) Ph.D. (Material Science)" },
    { name: "Prof. Sharvan Deo Prakash", position: "Assistant Professor", qualification: "MTech (Control System) BTech (EEE)" },
    { name: "Prof. Rajabhau Shivaji Sherkar", position: "Assistant Professor", qualification: "M.Sc Mathematics SET" },
    { name: "Prof. Vandana Gorde", position: "Assistant Professor", qualification: "M.Sc Mathematics, B.Ed." },
    { name: "Dr. Sujaya Das Gupta", position: "Assistant Professor", qualification: "M. Sc.(Electronics) , M.Tech Ph. D ,NET & SET" },
    { name: "Prof. Avi vinayak", position: "Assistant Professor", qualification: "Mtech (CSE), B.Tech( CSE)" },
    { name: "Dr.Bhagwan Kr. Mishra", position: "Assistant Professor", qualification: "PhD, M.Tech (Production Technology)" },
    { name: "Prof. Divya Gaur", position: "Assistant Professor", qualification: "B.Tech (Bio-Technology), M.Tech (Chemical), PhD* (Chemical)" },
    { name: "Prof. Kishor Rajaram Kute", position: "Assistant Professor", qualification: "MSc (Mathematics)" },
    { name: "Dr. Niva Devi Sarma", position: "Assistant Professor", qualification: "M.A (English)" }
  ];

  return (
    <div className="min-h-screen bg-college-light">
      <Header />
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm text-gray-600">
            <span className="hover:text-college-primary cursor-pointer">Home</span>
            <span className="mx-2">|</span>
            <span className="hover:text-college-primary cursor-pointer">Department</span>
            <span className="mx-2">|</span>
            <span className="text-college-primary font-semibold">First Year Engineering Department</span>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-college-dark mb-4">
            First Year Engineering Department
          </h1>
          <div className="w-24 h-1 bg-college-accent mx-auto"></div>
        </div>

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
                    To induce strong foundation of basic knowledge amongst the budding Engineers by developing interest in technology with a blend of human values.
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
                    <li>• To cater our students to pursue intellectual growth and professional development.</li>
                    <li>• Balance depth and breadth in learning experience, practice thoughtful reflection with active application incorporating Human Values & Ethics.</li>
                    <li>• Developing Technically Professional & Modern Engineers having Innovative mind and Social Awareness.</li>
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
                  {programOutcomes.map((outcome, index) => (
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
                  <li>• Delivering and administering a pioneering first year engineering program that undergoes continuous assessment and revision.</li>
                  <li>• To understand the current existing technologies and provide the most efficient solution to the problem.</li>
                  <li>• Committed to teach students to question critically, think logically, communicate clearly and live ethically.</li>
                  <li>• To induce lifelong learning ability in students.</li>
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
                  <li>• Provide students with comprehensive knowledge and Principles of engineering with a multi-disciplinary approach that is challenging</li>
                  <li>• Advising first year students and supporting them in selection of curriculum of their choice</li>
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
                      <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Users className="h-24 w-24 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-bold text-college-primary mb-2">Prof Krishna Kr. Yadav</h3>
                      <p className="text-gray-600 mb-1">Assistant Professor & Head</p>
                      <p className="text-gray-600 mb-1">Department Of First Year Engineering</p>
                      <p className="text-sm text-college-accent">Ph.D*, M.Tech (Hydro Power Engineering) MANIT, Bhopal</p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-semibold text-college-primary mb-4">MESSAGE FROM HOD DESK</h4>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        ISBM College of Engineering, Pune (formerly known as ISBM School of Technology) takes pride in having a department full of highly qualified & experienced faculty to mentor students in every domain of technical education making them familiar with the different aspects of engineering. ISBM COE, Pune emphasizes on team work and gives students opportunities to benefit from the ideas and intelligence of their peers. We strive to fulfill our mission to provide the students a multidisciplinary foundation on which they can build their career as technocrats who are a blessing to themselves and the society.
                      </p>
                      <p>
                        First Year Engineering is an important stepping stone in the life of an aspiring engineer. We aim to nurture & mold the young minds to enter the race of the advancing & ever changing technology and yet have the sensitivity necessary towards the society. The teaching learning methodology implemented by the staff boosts the student's potential and improves their critical analyzing skills. As most of the students hail from different social environments, it is the motto of the department that they are mentored by the staff with whom they can share their thoughts, expectations, express themselves and would feel comfortable away from home.
                      </p>
                      <p>
                        The department is equipped with highly qualified and experienced staff who are always on their toes. The faculty members have impeccable academic record and are highly regarded among students. We motivate our students to dream big and ensure to equip them with the right spirit and necessary talent to realize their objectives. We also constantly strive to instill ethical values in them so that they become responsible citizens of tomorrow.
                      </p>
                      <p>
                        The Institute ensures that our students would be asset to the organization through their technical and managerial capabilities. We at ISBM COEP, aim to actively assist students in attracting and identifying the individuals best suited to their needs and developing a successful recruitment relationship right from the beginning. That are the above reason that we are now known as among of the Top Engineering Colleges of Pune, Maharashtra.
                      </p>
                      <p>
                        The activities like Expert Lectures, Site Visits, Technical Events, Sports and Cultural Events, Soft Skills etc widens their horizon and avert them from being monotonous with academics. To conclude, the department catalyzes and assures a very healthy, amicable but a competitive ambience for our future engineer.
                      </p>
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
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Qualification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {facultyMembers.map((faculty, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{faculty.name}</TableCell>
                        <TableCell>{faculty.position}</TableCell>
                        <TableCell>{faculty.qualification}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Expert Lectures</h4>
                    <p className="text-blue-700 text-sm">Industry experts share their knowledge and experience with students.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Site Visits</h4>
                    <p className="text-green-700 text-sm">Educational visits to industries and technical facilities.</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Technical Events</h4>
                    <p className="text-purple-700 text-sm">Workshops, seminars, and technical competitions.</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Sports Events</h4>
                    <p className="text-orange-700 text-sm">Inter-departmental sports competitions and recreational activities.</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                    <h4 className="font-semibold text-pink-800 mb-2">Cultural Events</h4>
                    <p className="text-pink-700 text-sm">Cultural programs and festivals to showcase talent.</p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg">
                    <h4 className="font-semibold text-indigo-800 mb-2">Soft Skills Training</h4>
                    <p className="text-indigo-700 text-sm">Communication and personality development programs.</p>
                  </div>
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

export default FirstYearDepartment;
