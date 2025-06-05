
import React from 'react';
import DepartmentTemplate from '@/components/DepartmentTemplate';

const ComputerEngineeringDepartment = () => {
  const departmentData = {
    name: "Computer Engineering",
    vision: "Development of all round, innovative computer professional, socially responsible and researchers leading to empowerment, to make them globally compatible",
    mission: [
      "To establish state-of-art facilities and resources to facilitate world class education.",
      "Expose to recent technological advancements and industrial professional practices.",
      "Integrating qualities like soft skill enhancement, social values, ethics and leadership in order to encourage contribution to society.",
      "To impart quality technical and scientific education and produce engineers, technologists, scientists and citizens who will contribute meaningfully to the growth and development of country and excel in various disciplines of knowledge."
    ],
    programOutcomes: [
      { code: "PO1", title: "Engineering knowledge", code2: "PO7", title2: "Environment and sustainability" },
      { code: "PO2", title: "Problem analysis", code2: "PO8", title2: "Ethics" },
      { code: "PO3", title: "Design / development of solutions", code2: "PO9", title2: "Individual and team work" },
      { code: "PO4", title: "Conduct investigations of complex problems", code2: "PO10", title2: "Communication" },
      { code: "PO5", title: "Modern tool usage", code2: "PO11", title2: "Project management and finance" },
      { code: "PO6", title: "The engineer and society", code2: "PO12", title2: "Life-long learning" }
    ],
    programEducationOutcomes: [
      "Industry-ready and Skilled Engineers: To prepare graduates to acquire a fulfilling profession for employment in industry or academia, and postgraduate study in engineering.",
      "Core Competence: Develop competence in applying knowledge of mathematics, science, and engineering; enabling graduates to solve engineering problems in a modern technological society as valuable productive engineers.",
      "Multifaceted Professionals: To provide opportunity for students to work as part of teams on multidisciplinary project. To develop ethics, team work abilities and communication skills in the students",
      "Learning Environment: To provide lifelong learning environment for students. Make them familiar with recent trends and emerging technologies in Computer and IT world.",
      "Ethical Professionals: To instill a sense of social, professional-ethical responsibility and an ability to communicate effectively."
    ],
    programSpecificOutcomes: [
      "To promote the advancement and exchange of knowledge in both the technical and research",
      "To model software systems and applications in various domain including networks, embedded systems, advanced storage management software and web technologies."
    ],
    hod: {
      name: "Dr. Kailash N. Tripathi",
      position: "Associate Professor & Head of Department",
      qualification: "Ph.D(CSE),M.Tech(CSE),B.Tech(CS), BSc(Maths,Stats)",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      message: [
        "Welcome to the Department of Computer Engineering at ISBM College of Engineering, Nande, Pune.",
        "Computer Engineering is one of the most progressive and in-demand fields in today's technology-driven world. Our department is committed to nurturing technically sound, industry-ready professionals equipped to face real-world challenges with confidence and innovation.",
        "Affiliated with Savitribai Phule Pune University, we strictly follow the latest university-prescribed curriculum. In addition, we regularly conduct guest lectures, workshops, and hands-on training sessions to expose students to emerging technologies and industry trends, ensuring they stay ahead in the rapidly evolving tech landscape.",
        "Our curriculum spans across core and advanced areas such as Data Structures, Design & Analysis of Algorithm, Programming in different languages like C, C++, Java, and Python, Computer Architecture, Software Engineering ,DBMS, Cloud Computing, Cybersecurity, Artificial Intelligence, Data Science, and Machine Learning.",
        "The department comprises a dedicated team of experienced faculty and technical staff, focused on the holistic development of students academically, professionally, and personally. We emphasize teamwork, ethical practices, communication skills, and continuous learning through interdisciplinary projects and industry engagement.",
        "We strive to create a vibrant academic environment that fosters innovation, critical thinking, and leadership preparing our graduates to succeed globally in both industry and higher education."
      ]
    },
    facultyMembers: [
      { name: "Dr. K.N. Tripathi", position: "Associate Professor & Head", qualification: "BSc(Maths, Stats), B.Tech (CS), M.Tech (CSE), Ph.D (CSE)", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Dr. Ashok M. Sapkal", position: "Adjunct Professor", qualification: "BE, ME, Ph.D.", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
      { name: "Dr.Vilas R. Joshi", position: "Associate Professor", qualification: "BE,ME, Ph.D", photo: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face" },
      { name: "Dr. Amit Asthana", position: "Associate Professor", qualification: "BE,ME, Ph.D", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Shobha Bamane", position: "Assistant Professor", qualification: "BE(CE), ME(CE)", photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Sonali Parab", position: "Assistant Professor", qualification: "BE(CE), ME(CE)", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Shital Shripad Nalgirkar", position: "Assistant Professor", qualification: "BE(CSE), ME(CS), PhD(CE) Pursuing", photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Shiv Shankar", position: "Assistant Professor", qualification: "BE, ME", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Trupti Sonkusare", position: "Assistant Professor", qualification: "BE, ME", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Reshma Naiknawre", position: "Assistant Professor", qualification: "BE(CSE), ME(CE)", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Dipali Umrikar", position: "Assistant Professor", qualification: "BE, ME", photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Dipti Jaisinghani", position: "Assistant Professor", qualification: "BE, ME", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
      { name: "Dr. Azhar Inamdar", position: "Assistant Professor", qualification: "B.Tech(Comp, M.Tech (IT), Ph.D (IT)", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Samruddhi Sapkal", position: "Assistant Professor", qualification: "BE(CE) , M.Tech (AIML), PhD(CE) Pursuing", photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" },
      { name: "Mr.Prabhakar. A. Mane", position: "Lab Technician", qualification: "B.E.(Computer Engineering)", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face" },
      { name: "Mr. Aditya Yadav", position: "Technical Assistant", qualification: "Diploma Computer Engineering", photo: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face" }
    ],
    activities: [
      { title: "Technical Workshops", description: "Hands-on workshops on latest technologies like AI, ML, Cloud Computing", color: "from-blue-50 to-blue-100 text-blue-800" },
      { title: "Industry Lectures", description: "Guest lectures by industry experts and alumni", color: "from-green-50 to-green-100 text-green-800" },
      { title: "Coding Competitions", description: "Programming contests and hackathons", color: "from-purple-50 to-purple-100 text-purple-800" },
      { title: "Project Exhibitions", description: "Annual project showcase and demonstrations", color: "from-orange-50 to-orange-100 text-orange-800" },
      { title: "Research Activities", description: "Student research projects and publications", color: "from-pink-50 to-pink-100 text-pink-800" },
      { title: "Industry Collaborations", description: "Internships and industry partnerships", color: "from-indigo-50 to-indigo-100 text-indigo-800" }
    ]
  };

  return <DepartmentTemplate data={departmentData} />;
};

export default ComputerEngineeringDepartment;
