import React, { useEffect, useState } from 'react';
import DepartmentTemplate from '@/components/DepartmentTemplate';
import { supabase } from '@/integrations/supabase/client';

const AIMLDepartment = () => {
  const [facultyMembers, setFacultyMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      setLoading(true);
      // Get AIML department id
      const { data: deptData } = await supabase.from('departments').select('id').ilike('name', '%AI/ML%').single();
      if (deptData) {
        const { data, error } = await supabase.from('teachers').select('*').eq('department', deptData.id).order('name');
        if (!error && data) setFacultyMembers(data);
      }
      setLoading(false);
    };
    fetchFaculty();
  }, []);

  const departmentData = {
    name: "Artificial Intelligence & Machine Learning Engineering",
    vision: "To develop globally competent and ethical professionals in the field of Artificial Intelligence and Machine Learning for noteworthy contribution in research, innovation and sustainable development.",
    mission: [
      "Impart rigorous training to generate knowledge through the hands on experience on latest tools and technologies in Artificial Intelligence and Machine Learning.",
      "Inculcate problem solving and team building skills and promote lifelong learning with a sense of societal and ethical responsibilities.",
      "Mould students to be technically competent through innovation and leadership with collaboration of industry experts.",
      "Provide a conducive environment for faculty to engage in and train students in progressive and convergent research themes by establishing Center of Excellence."
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
      "Impart rigorous training to generate knowledge through the hands on experience on latest tools and technologies in Artificial Intelligence and Machine Learning.",
      "Inculcate problem solving and team building skills and promote lifelong learning with a sense of societal and ethical responsibilities.",
      "Mould students to be technically competent through innovation and leadership with collaboration of industry experts."
    ],
    programSpecificOutcomes: [
      "Professional Skills-The ability to understand, analyse and develop computer programs in the areas related to algorithms, system software, multimedia, web design, networking, artificial intelligence and data science for efficient design of computer-based systems of varying complexities.",
      "Problem-Solving Skills- The ability to apply standard practices and strategies in software project development using open-ended programming environments to deliver a quality product for business success.",
      "Successful Career and Entrepreneurship- The ability to employ modern computer languages, environments and platforms in creating innovative career paths to be an entrepreneur and to have a zest for higher studies."
    ],
    hod: {
      name: "Prof. Kirti Randhe",
      position: "HOD(Artificial Intelligence and Machine Learning)& Assistant Professor",
      qualification: "ME(Comp), BE(Comp)",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      message: [
        "Welcome to the Department of Artificial Intelligence and Machine Learning at ISBM College of Engineering, Nande , Pune.",
        "The department of Artificial Intelligence & Machine Learning (AI & ML) is established in the academic year 2020-2021. This is a 4-year degree course approved by AICTE, New Delhi under Savitribai Phule Pune University (SPPU). The Department has experienced faculty members/staff and the state of art research laboratories. The curriculum of AI & ML is prescribed by SPPU.",
        "Artificial Intelligence and Machine Learning is the most flourishing discipline with advanced learning solutions imparting knowledge of advanced innovations. Artificial intelligence (AI) is the science and engineering of making intelligent machines, including intelligent computer programs. It is related to the concepts of computer science and cognitive science, but it can be considered as an autonomous field because it incorporates elements from all of these areas, plus many more.",
        "This specialization is designed to enable students to build intelligent machines, software, or applications with a cutting-edge combination of machine learning, analytics and visualization technologies. The main goal of artificial intelligence (AI) and machine learning (ML) is to program computers to use example data or experience to solve a given problem.",
        "The Department emphasizes on all round development of the students, to make them competent engineers. The Department has well qualified and experienced faculty members and technically competent supporting staff. We motivate the students to achieve not only excellence in academics but also on their overall personality development."
      ]
    },
    facultyMembers,
    activities: [
      { title: "AI Research Lab", description: "Research and innovation in AI", color: "from-blue-50 to-blue-100 text-blue-800" },
      { title: "Machine Learning Center", description: "Hands-on ML projects", color: "from-green-50 to-green-100 text-green-800" },
      { title: "Data Science Lab", description: "Data analytics and visualization", color: "from-purple-50 to-purple-100 text-purple-800" }
    ]
  };

  return <DepartmentTemplate data={departmentData} />;
};

export default AIMLDepartment;
