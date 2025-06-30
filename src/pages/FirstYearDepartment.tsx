import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GraduationCap, Users, BookOpen, Award, Target, Eye } from 'lucide-react';
import DepartmentTemplate from '@/components/DepartmentTemplate';
import { supabase } from '@/integrations/supabase/client';

const FirstYearDepartment = () => {
  const [facultyMembers, setFacultyMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      setLoading(true);
      // Get Applied Science/First Year department id
      const { data: deptData } = await supabase.from('departments').select('id').ilike('name', '%Applied Science%').single();
      if (deptData) {
        const { data, error } = await supabase.from('teachers').select('*').eq('department', deptData.id).order('name');
        if (!error && data) setFacultyMembers(data);
      }
      setLoading(false);
    };
    fetchFaculty();
  }, []);

  const departmentData = {
    name: "First Year/Applied Science Department",
    vision: "To provide a strong foundation in basic sciences and engineering principles.",
    mission: [
      "To impart quality education in basic sciences and engineering.",
      "To prepare students for core engineering branches.",
      "To foster research and innovation in basic sciences."
    ],
    programOutcomes: [
      { code: "PO1", title: "Engineering knowledge", code2: "PO7", title2: "Environment and sustainability" },
      { code: "PO2", title: "Problem analysis", code2: "PO8", title2: "Ethics" },
      { code: "PO3", title: "Design/Development of Solutions", code2: "PO9", title2: "Individual and TeamWork" },
      { code: "PO4", title: "Conduct Investigation of Complex Problems", code2: "PO10", title2: "Communication Skills" },
      { code: "PO5", title: "Modern Tool Usage", code2: "PO11", title2: "Project Management and Finance" },
      { code: "PO6", title: "The Engineer and Society", code2: "PO12", title2: "Life-long Learning" }
    ],
    programEducationOutcomes: [
      "Graduates will have the capabilities to apply basic science knowledge to develop feasible systems.",
      "Graduates will be able to handle the challenges of rapidly changing technology.",
      "Equip the graduates with strong technical knowledge, competency in soft skills, lifelong learning skills that allow them to contribute ethically to the need of society."
    ],
    programSpecificOutcomes: [
      "Professional Skills-The ability to understand, analyse and develop solutions in the areas related to basic sciences and engineering for efficient design of systems of varying complexities.",
      "Problem-Solving Skills- The ability to apply standard practices and strategies in project development using open-ended environments to deliver a quality product for business success.",
      "Successful Career and Entrepreneurship- The ability to employ modern tools, environments and platforms in creating innovative career paths to be an entrepreneur and to have a zest for higher studies."
    ],
    hod: {
      name: "Prof. Krishna Kr. Yadav",
      position: "Assistant Professor (HOD-First Year Engineering)",
      qualification: "M.Tech.(Hydro Power Engg), Ph.D* (ME)",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      message: [
        "Welcome to the First Year/Applied Science Department at ISBM College of Engineering, Nande, Pune.",
        "The department of First Year/Applied Science is established in the academic year 2020-2021. The Department has experienced faculty members/staff and the state of art research laboratories. The curriculum is prescribed by SPPU.",
        "This curriculum targets technical and design skills, knowledge, and competencies needed to master strategic analytical methods and tools, and data management, with the objective of creating innovative strategies to solve challenging real-world problems."
      ]
    },
    facultyMembers,
    activities: [
      { title: "Physics Lab", description: "Physics experiments and research", color: "from-blue-50 to-blue-100 text-blue-800" },
      { title: "Chemistry Lab", description: "Chemistry experiments and research", color: "from-green-50 to-green-100 text-green-800" },
      { title: "Mathematics Lab", description: "Mathematics and computation", color: "from-purple-50 to-purple-100 text-purple-800" }
    ]
  };

  return <DepartmentTemplate data={departmentData} />;
};

export default FirstYearDepartment;
