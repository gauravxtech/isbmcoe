
import React from 'react';
import DepartmentTemplate from '@/components/DepartmentTemplate';

const BBADepartment = () => {
  const departmentData = {
    name: "Bachelor of Business Administration (BBA)",
    vision: "To be a leading center of excellence in management, fostering knowledge creation and conducting groundbreaking research while cultivating insightful and globally relevant leadership.",
    mission: [
      "To ameliorate management structure about entrepreneurship, business, industry, and public services through the pursuit of excellence in the field of management education, research, consultancy, and training."
    ],
    programOutcomes: [
      { code: "PO1", title: "Fundamental business principles", code2: "PO7", title2: "Ethical standards in business" },
      { code: "PO2", title: "Strategic analysis and decision making", code2: "PO8", title2: "Interdisciplinary knowledge integration" },
      { code: "PO3", title: "Practical application skills", code2: "PO9", title2: "Career preparation" },
      { code: "PO4", title: "Communication skills", code2: "PO10", title2: "Continuous learning commitment" },
      { code: "PO5", title: "Leadership and teamwork", code2: "PO11", title2: "Entrepreneurial skills" },
      { code: "PO6", title: "Modern business technology", code2: "PO12", title2: "Critical thinking abilities" }
    ],
    programEducationOutcomes: [
      "To equip students with a comprehensive understanding of core business principles, including management, finance, marketing, human resource management, and operations.",
      "To foster the ability to analyze business problems, develop strategic solutions, and make informed decisions using critical thinking and analytical skills.",
      "To provide hands-on experience through practical sessions, projects, internships, and case studies to apply theoretical knowledge in real-world business scenarios.",
      "To improve written and verbal communication skills essential for professional business environments, including report writing, presentations, and interpersonal communication.",
      "To instill leadership qualities and teamwork skills, preparing students to lead and collaborate effectively in diverse business settings.",
      "To incorporate modern technological tools and practices in business operations, including computer applications, IT for business, and AI/ML for business.",
      "To promote ethical business practices, corporate social responsibility, and environmental awareness to ensure graduates act with integrity and social responsibility.",
      "To offer a range of elective courses to provide a broad perspective on business issues, integrating knowledge from various disciplines like economics, law, and management.",
      "To equip students with the skills and knowledge required for successful careers in management, entrepreneurship, finance, marketing, and other business-related areas.",
      "To lay a strong foundation for those who wish to pursue higher studies in business and management.",
      "To encourage a mindset of continuous learning and adaptability to stay current with business trends, technological advancements, and evolving market conditions.",
      "To nurture entrepreneurial thinking and skills, preparing students to identify opportunities, develop business plans, and launch and manage their own ventures.",
      "To foster critical thinking skills to identify, analyze, and solve complex business problems innovatively and efficiently."
    ],
    programSpecificOutcomes: [
      "The program enables students to apply reflective thinking and research skills using latest technology tools.",
      "To acquire and integrate technical and functional knowledge of business operations for effective organizational management.",
      "Demonstrate strategic and proactive thinking towards business decision making through Case Studies.",
      "The program fosters strong industry links, offering students real-world exposure, practical insights and opportunities for collaboration to develop industry-relevant skills."
    ],
    hod: {
      name: "Dr. Santosh Kumar Yadav",
      position: "HOD, Department of BBA",
      qualification: "PhD",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      message: [
        "It gives me great pleasure to welcome you all to the Department of Business Administration (BBA), at ISBM College of Engineering Pune. ISBM College of Engineering is Affiliated to Savitribai Phule Pune University (SPPU), Recognized by AICTE New Delhi and Accredited B ++ by NAAC. The Department of BBA is a highly acclaimed, dynamic and forward-looking department. It is committed to staying at the forefront of developments in research, education and entrepreneurship.",
        "As the business administration department, we aim to provide to contemporary knowledge and skills that are necessary for business administration, a universal discipline, to our students. Our BBA program is designed to educate future business professionals and entrepreneurs in line with the needs of local and global job markets.",
        "Our department is built on the strength of well experienced and qualified faculty, who are devoted to teaching in the forever evolving environment. With increased demand in industry, we aim to groom our students, not just academically, but also in various co-curricular activities such as Industry Visits, Guest Lectures, Internships and other skill building activities like personality development etc. This we believe will help the students to cope with industry standards and avail the best placement opportunities",
        "Today our alumni are in leading / strong position in various organisations both Govt. and private and are our biggest ambassadors. We believe that our students are well accepted and our program has been successful in meeting the expectations of the industry.",
        "On behalf of the department of BBA, I assure you of a great learning experience and wish you the very best for your future"
      ]
    },
    facultyMembers: [
      { name: "Dr. Santosh Kumar Yadav", position: "HOD, Department of BBA", qualification: "PhD", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" }
    ],
    activities: [
      { title: "Business Case Studies", description: "Practical analysis of real business scenarios", color: "from-blue-50 to-blue-100 text-blue-800" },
      { title: "Industry Visits", description: "Exposure to real business environments", color: "from-green-50 to-green-100 text-green-800" },
      { title: "Guest Lectures", description: "Industry experts sharing insights", color: "from-purple-50 to-purple-100 text-purple-800" },
      { title: "Internships", description: "Hands-on professional experience", color: "from-orange-50 to-orange-100 text-orange-800" },
      { title: "Entrepreneurship Development", description: "Business plan development and startup guidance", color: "from-pink-50 to-pink-100 text-pink-800" },
      { title: "Personality Development", description: "Professional skills and communication training", color: "from-indigo-50 to-indigo-100 text-indigo-800" }
    ]
  };

  return <DepartmentTemplate data={departmentData} />;
};

export default BBADepartment;
