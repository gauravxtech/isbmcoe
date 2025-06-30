import React, { useEffect, useState } from 'react';
import DepartmentTemplate from '@/components/DepartmentTemplate';
import { supabase } from '@/integrations/supabase/client';

const MechanicalDepartment = () => {
  const [facultyMembers, setFacultyMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      setLoading(true);
      // Get Mechanical Engineering department id
      const { data: deptData } = await supabase.from('departments').select('id').ilike('name', '%Mechanical%').single();
      if (deptData) {
        const { data, error } = await supabase.from('teachers').select('*').eq('department', deptData.id).order('name');
        if (!error && data) setFacultyMembers(data);
      }
      setLoading(false);
    };
    fetchFaculty();
  }, []);

  const departmentData = {
    name: "Mechanical Engineering Department",
    vision: "To be a center of excellence in mechanical engineering education, research, and innovation.",
    mission: [
      "To provide quality education in mechanical engineering.",
      "To foster research and innovation in mechanical engineering.",
      "To prepare students for successful careers in mechanical engineering.",
      "To promote ethical and responsible use of technology."
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
      "Graduates will have the capabilities to apply mechanical engineering knowledge to develop feasible systems.",
      "Graduates will be able to handle the challenges of rapidly changing technology.",
      "Equip the graduates with strong technical knowledge, competency in soft skills, lifelong learning skills that allow them to contribute ethically to the need of society."
    ],
    programSpecificOutcomes: [
      "Professional Skills-The ability to understand, analyse and develop mechanical systems in the areas related to design, manufacturing, thermal, and automation for efficient design of mechanical-based systems of varying complexities.",
      "Problem-Solving Skills- The ability to apply standard practices and strategies in mechanical project development using open-ended environments to deliver a quality product for business success.",
      "Successful Career and Entrepreneurship- The ability to employ modern mechanical tools, environments and platforms in creating innovative career paths to be an entrepreneur and to have a zest for higher studies."
    ],
    hod: {
      name: "Prof. Sachin R Jadhav",
      position: "Assistant Professor",
      qualification: "ME Design, MBA operations (ICFAI), BE Mechanical Engineering",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      message: [
        "Welcome to the Department of Mechanical Engineering at ISBM College of Engineering, Nande, Pune.",
        "The department of Mechanical Engineering is established in the academic year 2020-2021. This is a 4-year degree course approved by AICTE, New Delhi under Savitribai Phule Pune University (SPPU). The Department has experienced faculty members/staff and the state of art research laboratories. The curriculum of Mechanical Engineering is prescribed by SPPU.",
        "This curriculum targets technical and design skills, knowledge, and competencies needed to master strategic analytical methods and tools, and data management, with the objective of creating innovative strategies to solve challenging real-world problems."
      ]
    },
    facultyMembers,
    activities: [
      { title: "Thermal Lab", description: "Thermal engineering and heat transfer", color: "from-blue-50 to-blue-100 text-blue-800" },
      { title: "Design Lab", description: "Mechanical design and CAD", color: "from-green-50 to-green-100 text-green-800" },
      { title: "Manufacturing Lab", description: "Manufacturing processes and automation", color: "from-purple-50 to-purple-100 text-purple-800" }
    ]
  };

  return <DepartmentTemplate data={departmentData} />;
};

export default MechanicalDepartment;
