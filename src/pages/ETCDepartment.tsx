import React, { useEffect, useState } from 'react';
import DepartmentTemplate from '@/components/DepartmentTemplate';
import { supabase } from '@/integrations/supabase/client';

const ETCDepartment = () => {
  const [facultyMembers, setFacultyMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      setLoading(true);
      // Get ENTC department id
      const { data: deptData } = await supabase.from('departments').select('id').ilike('name', '%ENTC%').single();
      if (deptData) {
        const { data, error } = await supabase.from('teachers').select('*').eq('department', deptData.id).order('name');
        if (!error && data) setFacultyMembers(data);
      }
      setLoading(false);
    };
    fetchFaculty();
  }, []);

  const departmentData = {
    name: "Electronics & Telecommunication Engineering",
    vision: "Leading sustainable innovative development for inclusive growth in the field of Telecommunication and molding the students to become world leaders with excellence in technical domain.",
    mission: [
      "To impart Technical education, not limiting to classroom environment, but more of application oriented with practical interpretations.",
      "To infuse a sense of self motivation and urge to learn and experience new emerging trends in Telecommunication Engineering"
    ],
    programOutcomes: [
      { code: "PO1", title: "Engineering knowledge", code2: "PO7", title2: "Environment and sustainability" },
      { code: "PO2", title: "Problem analysis", code2: "PO8", title2: "Ethics" },
      { code: "PO3", title: "Design/development of solutions", code2: "PO9", title2: "Individual and team work" },
      { code: "PO4", title: "Conduct investigations of complex problems", code2: "PO10", title2: "Communication" },
      { code: "PO5", title: "Modern tool usage", code2: "PO11", title2: "Project management and finance" },
      { code: "PO6", title: "The engineer and society", code2: "PO12", title2: "Life-long learning" }
    ],
    programEducationOutcomes: [
      "To become a role model and source of knowledge to peers and the juniors in the society.",
      "To understand the current existing technologies and provide the most efficient solution to the problem.",
      "To excel in the technical domain thereby increasing their knowledge and symbiotically helping the organization they will work in.",
      "Ability to handle complex IT tools for simulation to produce the best outcomes.",
      "Not to confine the knowledge themselves but to share and spread in the society."
    ],
    programSpecificOutcomes: [
      "Professional Skills-The ability to understand, analyse and develop electronic systems in the areas related to design, manufacturing, communication, and automation for efficient design of electronic-based systems of varying complexities.",
      "Problem-Solving Skills- The ability to apply standard practices and strategies in electronic project development using open-ended environments to deliver a quality product for business success.",
      "Successful Career and Entrepreneurship- The ability to employ modern electronic tools, environments and platforms in creating innovative career paths to be an entrepreneur and to have a zest for higher studies."
    ],
    hod: {
      name: "Prof. Sitaram Longani",
      position: "HOD & Assistant Professor",
      qualification: "Ph.D* (Pursuing), M.E(Communication Network), B.E.(E&TC)",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      message: [
        "Welcome to the Department of Electronics & Telecommunication Engineering at ISBM College of Engineering, Nande, Pune.",
        "The department of ENTC is established in the academic year 2020-2021. This is a 4-year degree course approved by AICTE, New Delhi under Savitribai Phule Pune University (SPPU). The Department has experienced faculty members/staff and the state of art research laboratories. The curriculum of ENTC is prescribed by SPPU.",
        "This curriculum targets technical and design skills, knowledge, and competencies needed to master strategic analytical methods and tools, and data management, with the objective of creating innovative strategies to solve challenging real-world problems."
      ]
    },
    facultyMembers,
    activities: [
      { title: "Communication Lab", description: "Communication systems and networks", color: "from-blue-50 to-blue-100 text-blue-800" },
      { title: "VLSI Lab", description: "VLSI design and embedded systems", color: "from-green-50 to-green-100 text-green-800" },
      { title: "Automation Lab", description: "Automation and robotics", color: "from-purple-50 to-purple-100 text-purple-800" }
    ]
  };

  return <DepartmentTemplate data={departmentData} />;
};

export default ETCDepartment;
