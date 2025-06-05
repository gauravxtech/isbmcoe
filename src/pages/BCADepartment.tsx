
import React from 'react';
import DepartmentTemplate from '@/components/DepartmentTemplate';

const BCADepartment = () => {
  const departmentData = {
    name: "Bachelor of Computer Application (BCA)",
    vision: "To develop globally competent professionals in the field of computer applications empowered through research, innovative practices, and holistic development.",
    mission: [
      "Providing high quality education focused on the overall development of the student.",
      "Acquiring knowledge through practical experience with advanced tools and technologies in the field of computer applications.",
      "Develop adaptable IT professionals through continuous learning, integrity, and social responsibility."
    ],
    programOutcomes: [
      { code: "PO1", title: "Fundamental computing concepts", code2: "PO8", title2: "Technical communication" },
      { code: "PO2", title: "Computer-based application design", code2: "PO9", title2: "Team collaboration" },
      { code: "PO3", title: "Research analysis skills", code2: "PO10", title2: "Integrity and social responsibility" },
      { code: "PO4", title: "Research problem solving", code2: "PO11", title2: "Self and lifelong learning" },
      { code: "PO5", title: "Efficient code creation", code2: "PO12", title2: "Innovative problem solving" },
      { code: "PO6", title: "Domain understanding", code2: "PO13", title2: "Real-world applications" }
    ],
    programEducationOutcomes: [
      "Understand the core concepts like programming, data structures, algorithms, databases, and Application.",
      "Students learn to use various programming languages, software tools, and technologies.",
      "The program aims to equip students with the skills to analyze problems, design solutions, and implement them effectively using programming languages.",
      "This program typically focuses on experiential learning through the integration of projects, internships, and case studies, which provide students the opportunity to apply their theoretical knowledge into practical.",
      "Communication, teamwork, and ethical knowledge are often integrated into the curriculum.",
      "A BCA degree can serve as a foundation for pursuing advanced degrees like MCA (Master of Computer Applications) or specialized master's programs in computer science."
    ],
    programSpecificOutcomes: [
      "Analyze and develop computer programs using different programming language, which will enhance the efficient design of computer-based systems.",
      "Inspire students to turn their new ideas into real projects by giving them hands-on experience.",
      "Build coding, networking, and software skills, including learning programming languages, to create better projects.",
      "Students will identify startup opportunities in the software industry."
    ],
    hod: {
      name: "Prof. Nikhil Kumthekar",
      position: "Assistant Professor & HOD (Department of BCA)",
      qualification: "MCA (Savitribai Phule Pune University, Pune.)",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      message: [
        "Welcome to the Department of BCA at ISBM College of Engineering, Nande, Pune. The Bachelor of Computer Application (BCA) department was established for the academic year 2024-2025 with the aim of delivering high-quality technical education and fostering excellence in the continually evolving field of technical education. This is a 4-year degree course approved by AICTE under Savitribai Phule Pune University (SPPU).",
        "Our department is supported by experienced faculty and a well-equipped computer lab with advanced software for student use. The Bachelor of Computer Applications (BCA) department plays a crucial role in providing students with the foundational knowledge and practical skills needed for a successful career in the field of IT industry. We have come together to tackle the difficulties related to providing students with quality educational opportunities."
      ]
    },
    facultyMembers: [
      { name: "Prof. Nikhil Kumthekar", position: "Assistant Professor & HOD (Department of BCA)", qualification: "MCA (Savitribai Phule Pune University, Pune.)", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" }
    ],
    activities: [
      { title: "Programming Lab", description: "Hands-on coding experience with multiple languages", color: "from-blue-50 to-blue-100 text-blue-800" },
      { title: "Software Development Projects", description: "Real-world application development", color: "from-green-50 to-green-100 text-green-800" },
      { title: "Database Management", description: "Data structures and database design", color: "from-purple-50 to-purple-100 text-purple-800" },
      { title: "Web Development", description: "Frontend and backend web technologies", color: "from-orange-50 to-orange-100 text-orange-800" },
      { title: "Industry Internships", description: "Practical experience in IT companies", color: "from-pink-50 to-pink-100 text-pink-800" },
      { title: "Startup Incubation", description: "Entrepreneurship opportunities in software industry", color: "from-indigo-50 to-indigo-100 text-indigo-800" }
    ]
  };

  return <DepartmentTemplate data={departmentData} />;
};

export default BCADepartment;
