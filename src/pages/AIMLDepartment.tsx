
import React from 'react';
import DepartmentTemplate from '@/components/DepartmentTemplate';

const AIMLDepartment = () => {
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
      "Industry-ready and Skilled Engineers: To prepare graduates to acquire a fulfilling profession for employment in industry or academia, and postgraduate study in engineering.",
      "Core Competence: Develop competence in applying knowledge of mathematics, science, and engineering; enabling graduates to solve engineering problems in a modern technological society as valuable productive engineers.",
      "Multifaceted Professionals: To provide opportunity for students to work as part of teams on multidisciplinary project. To develop ethics, team work abilities and communication skills in the students",
      "Learning Environment: To provide lifelong learning environment for students. Make them familiar with recent trends and emerging technologies in AI and ML world.",
      "Ethical Professionals: To instill a sense of social, professional-ethical responsibility and an ability to communicate effectively."
    ],
    programSpecificOutcomes: [
      "An ability to apply the theoretical concepts and practical knowledge of Artificial Intelligence & Machine Learning in analysis, design, development and management of information processing systems and applications in the interdisciplinary domain.",
      "An ability to analyze a problem, and identify and define the computing infrastructure and operations requirements appropriate to its solution. AI & ML graduates should be able to work on large-scale computing systems.",
      "An understanding of professional, business and business processes, ethical, legal, security and social issues and responsibilities.",
      "Practice communication and decision-making skills through the use of appropriate technology and be ready for professional responsibilities."
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
    facultyMembers: [
      { name: "Prof.Kirti Randhe", position: "Assistant Professor and HOD, AI&ML Dept.", qualification: "BE (CSE), ME (CE)", photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Darshana A. Bhamare", position: "Assistant Professor", qualification: "M.E(Computer), Mumbai University", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Prajkta A. Puranik", position: "Assistant Professor", qualification: "ME(CS) From UVCE COE, Bangalore University", photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Shuchi Goplani", position: "Assistant Professor", qualification: "BE (CSE), MTech (CSE)", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Sangeeta Rajshekhar Alagi", position: "Assistant Professor", qualification: "B.E.(CSE), M.E.(CE)", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof.Vaibhav Srivastava", position: "Assistant Professor", qualification: "BE(CSE), ME(CS)", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Mrs. Aarti Katpulle Chitwar", position: "Technical Assistant", qualification: "MCA", photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face" }
    ],
    activities: [
      { title: "AI Research Projects", description: "Student research in artificial intelligence and machine learning", color: "from-blue-50 to-blue-100 text-blue-800" },
      { title: "Deep Learning Workshops", description: "Hands-on workshops on neural networks and deep learning", color: "from-green-50 to-green-100 text-green-800" },
      { title: "Data Science Competitions", description: "Kaggle competitions and data analysis challenges", color: "from-purple-50 to-purple-100 text-purple-800" },
      { title: "Industry Partnerships", description: "Collaborations with tech companies and startups", color: "from-orange-50 to-orange-100 text-orange-800" },
      { title: "Robotics Lab", description: "Hands-on experience with robotics and automation", color: "from-pink-50 to-pink-100 text-pink-800" },
      { title: "AI Ethics Seminars", description: "Discussions on ethical AI development and deployment", color: "from-indigo-50 to-indigo-100 text-indigo-800" }
    ]
  };

  return <DepartmentTemplate data={departmentData} />;
};

export default AIMLDepartment;
