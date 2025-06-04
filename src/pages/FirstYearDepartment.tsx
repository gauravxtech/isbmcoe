
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FirstYearDepartment = () => {
  return (
    <div className="min-h-screen bg-college-light">
      <Header />
      <Navbar />
      <Separator className="bg-college-accent" />
      
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-college-primary mb-4">
              First Year Engineering Department
            </h1>
            <div className="flex items-center justify-center text-sm text-college-muted mb-6">
              <span>Home</span>
              <span className="mx-2">|</span>
              <span>Department</span>
              <span className="mx-2">|</span>
              <span className="text-college-accent">First Year Engineering Department</span>
            </div>
            <Separator className="max-w-24 mx-auto bg-college-accent h-1" />
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="hod">HOD Message</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
              <TabsTrigger value="course">Course Outcome</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-8">
              {/* Vision */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-college-primary mb-4">VISION</h2>
                <p className="text-gray-700 leading-relaxed">
                  To induce strong foundation of basic knowledge amongst the budding Engineers by developing interest in technology with a blend of human values
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-college-primary mb-4">Mission</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-college-accent mr-2">•</span>
                    To cater our students to pursue intellectual growth and professional development.
                  </li>
                  <li className="flex items-start">
                    <span className="text-college-accent mr-2">•</span>
                    Balance depth and breadth in learning experience, practice thoughtful reflection with active application incorporating Human Values & Ethics.
                  </li>
                  <li className="flex items-start">
                    <span className="text-college-accent mr-2">•</span>
                    Developing Technically Professional & Modern Engineers having Innovative mind and Social Awareness.
                  </li>
                </ul>
              </div>

              {/* Program Outcome */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-college-primary mb-4">Program Outcome</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-college-accent">PO1</span>
                      <span>Engineering knowledge</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-college-accent">PO2</span>
                      <span>Problem analysis</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-college-accent">PO3</span>
                      <span>Design / development of solutions</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-college-accent">PO4</span>
                      <span>Conduct investigations of complex problems</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-college-accent">PO5</span>
                      <span>Modern tool usage</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-college-accent">PO6</span>
                      <span>The engineer and society</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-college-accent">PO7</span>
                      <span>Environment and sustainability</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-college-accent">PO8</span>
                      <span>Ethics</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-college-accent">PO9</span>
                      <span>Individual and team work</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-college-accent">PO10</span>
                      <span>Communication</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-college-accent">PO11</span>
                      <span>Project management and finance</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-college-accent">PO12</span>
                      <span>Life-long learning</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Education Outcome */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-college-primary mb-4">Program Education Outcome</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-college-accent mr-2">•</span>
                    Delivering and administering a pioneering first year engineering program that undergoes continuous assessment and revision.
                  </li>
                  <li className="flex items-start">
                    <span className="text-college-accent mr-2">•</span>
                    To understand the current existing technologies and provide the most efficient solution to the problem.
                  </li>
                  <li className="flex items-start">
                    <span className="text-college-accent mr-2">•</span>
                    Committed to teach students to question critically, think logically, communicate clearly and live ethically.
                  </li>
                  <li className="flex items-start">
                    <span className="text-college-accent mr-2">•</span>
                    To induce lifelong learning ability in students.
                  </li>
                </ul>
              </div>

              {/* Program Specific Outcome */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-college-primary mb-4">Program Specific Outcome</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-college-accent mr-2">•</span>
                    Provide students with comprehensive knowledge and Principles of engineering with a multi-disciplinary approach that is challenging
                  </li>
                  <li className="flex items-start">
                    <span className="text-college-accent mr-2">•</span>
                    Advising first year students and supporting them in selection of curriculum of their choice
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="hod" className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Photo</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-college-primary">Prof Krishna Kr. Yadav</h3>
                    <p className="text-college-accent font-semibold">Assistant Professor & Head Department Of First Year Engineering Department</p>
                    <p className="text-gray-600 mt-2">Ph.D*, M.Tech (Hydro Power Engineering) MANIT, Bhopal</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-college-primary mb-4">MESSAGE FROM HOD DESK</h4>
                <div className="space-y-4 text-gray-700 leading-relaxed">
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
            </TabsContent>

            <TabsContent value="faculty" className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-college-primary mb-6">Faculty Members</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: "Prof. Krishna Kr. Yadav", designation: "Assistant Professor (HOD-First Year Engineering)", qualification: "M.Tech.(Hydro Power Engg), Ph.D* (ME)" },
                    { name: "Dr. M. P Yadav", designation: "Dean, Professor", qualification: "M.Sc.(Physics), Ph.D.(Physics)" },
                    { name: "Dr. Deepak Kulshreshtha", designation: "Associate Professor", qualification: "M.Sc.(Physics), Ph.D.(Physics)" },
                    { name: "Dr. Radhey Shyam Baghel", designation: "Associate Professor", qualification: "M.Sc.(Physics), Ph.D.(Physics)" },
                    { name: "Prof. Arjun Singh Katiyar", designation: "Associate Professor", qualification: "PhD* ,M.Tech (ECE)" },
                    { name: "Dr. Rakhee Bhosale", designation: "Assistant Professor", qualification: "Ph. D. (Chemistry), M. Sc (Chemistry)" },
                    { name: "Prof. Abdul kadir", designation: "Assistant Professor", qualification: "MTech (Control System), BTech (EEE)" },
                    { name: "Prof. Dhanashri Vedpathak", designation: "Assistant Professor", qualification: "Msc.Tech(IMCA), PhD*" },
                    { name: "Prof. Navnath Lakde", designation: "Assistant Professor", qualification: "NET Qualified, M.SC. (Applied Mathematics)" },
                    { name: "Prof. Archana Prayag", designation: "Assistant Professor", qualification: "M.E. (Civil Environmental Engineering)" },
                    { name: "Dr. Suman Mishra", designation: "Assistant Professor", qualification: "Ph. D. (English)" },
                    { name: "Sapana Dhabarde", designation: "Assistant Professor", qualification: "SET Qualified, M.Sc. (Physics )" },
                    { name: "Prof. Ajay Prakash", designation: "Assistant Professor", qualification: "M.Tech (CSE), B.Tech (IT)" },
                    { name: "Rahul Shivram Nagmode", designation: "Assistant Professor", qualification: "BE (Mechanical), ME (Design)" },
                    { name: "Dr. Ashatai Shashikant Jadhav", designation: "Assistant Professor", qualification: "Ph. D (Material Science), M. Sc (Applied Chemistry)" },
                    { name: "Prof. Prakash Mani Badal", designation: "Assistant Professor", qualification: "M.Tech (IT) , B.Tech (CSE)" },
                    { name: "Dr. Prem Nandan Pandey", designation: "Assistant Professor", qualification: "M.Sc. (Biotechnology) Ph.D. (Material Science)" },
                    { name: "Prof. Sharvan Deo Prakash", designation: "Assistant Professor", qualification: "MTech (Control System) BTech (EEE)" },
                    { name: "Prof. Rajabhau Shivaji Sherkar", designation: "Assistant Professor", qualification: "M.Sc Mathematics SET" },
                    { name: "Prof. Vandana Gorde", designation: "Assistant Professor", qualification: "M.Sc Mathematics, B.Ed." },
                    { name: "Dr. Sujaya Das Gupta", designation: "Assistant Professor", qualification: "M. Sc.(Electronics) , M.Tech Ph. D ,NET & SET" },
                    { name: "Prof. Avi vinayak", designation: "Assistant Professor", qualification: "Mtech (CSE), B.Tech( CSE)" },
                    { name: "Dr.Bhagwan Kr. Mishra", designation: "Assistant Professor", qualification: "PhD, M.Tech (Production Technology)" },
                    { name: "Prof. Divya Gaur", designation: "Assistant Professor", qualification: "B.Tech (Bio-Technology), M.Tech (Chemical), PhD* (Chemical)" },
                    { name: "Prof. Kishor Rajaram Kute", designation: "Assistant Professor", qualification: "MSc (Mathematics)" },
                    { name: "Dr. Niva Devi Sarma", designation: "Assistant Professor", qualification: "M.A (English)" }
                  ].map((faculty, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-bold text-college-primary">{faculty.name}</h3>
                      <p className="text-college-accent text-sm font-semibold mt-1">{faculty.designation}</p>
                      <p className="text-gray-600 text-sm mt-2">{faculty.qualification}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="syllabus" className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-college-primary mb-4">Syllabus</h2>
                <p className="text-gray-700">Syllabus content will be available soon.</p>
              </div>
            </TabsContent>

            <TabsContent value="course" className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-college-primary mb-4">Course Outcome</h2>
                <p className="text-gray-700">Course outcome details will be available soon.</p>
              </div>
            </TabsContent>

            <TabsContent value="activities" className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-college-primary mb-4">Departmental Activities</h2>
                <p className="text-gray-700">Departmental activities information will be available soon.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FirstYearDepartment;
