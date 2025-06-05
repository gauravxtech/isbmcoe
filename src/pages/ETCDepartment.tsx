
import React from 'react';
import DepartmentTemplate from '@/components/DepartmentTemplate';

const ETCDepartment = () => {
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
      "Analyze the knowledge of product design, electronic circuits, embedded & communication systems, Microcontroller, control systems and signal processing to solve Engineering/societal issues",
      "Implement ideas for new concept, design and verify using skill to realize the outcomes of ideas implemented",
      "Apply logical skills in programming to attain results and its outcome",
      "Build the team to manage the project and experiment it with the conceptual support to Contribute to self and the society"
    ],
    hod: {
      name: "Prof. Sitaram Longani",
      position: "HOD & Assistant Professor",
      qualification: "Ph.D.* M.Tech.(CN)",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      message: [
        "Greetings and welcome to the department of Electronics & Telecommunication Engineering at ISBM College of Engineering, Pune. The department was established with the inception of the institute in the year 2010. The department aims of providing leadership in the field of Electronics & Telecommunication Engineering and pioneering in research with latest Technology.",
        "The department strives to train and empower our students who will make the world a better place by making use of engineering principles, techniques and systems. To that end, considerable initiative have been taken to establish good laboratories in the areas of Electronics, Communication, Microwave, Digital Signal Processing, Microcomputer, VLSI and Embedded System Design with required hardware and simulation softwares.",
        "Along with these, we have an exclusive 'Innovation & Skill Development Centre' for the students and staff to develop and implement their ideas in the advanced fields like IoT(Internet of Things), Artificial Intelligence, Machine Learning, Data science and Robotics. Also, the department has very good connect with industries as well.",
        "The department has a well-qualified and experienced staff that is always on their toes. The faculties have excellent academic records and are highly regarded amongst students. We motivate our students to dream big and guarantee that we include the right spirit and the necessary talent to realize their objective. We also continuously strive to instill ethical values in our wards so that they become responsible citizen of tomorrow.",
        "The Institute ensures that our students would be asset to the organization through their technical and managerial capabilities. We at ISBM COEP, aim to actively assist students in attracting and identifying the individuals best suited to their needs and developing a successful recruitment relationship right from the beginning. That are the above reason that we are now known as among of the Top Engineering Colleges of Pune, Maharashtra.",
        "The activities like Expert Lectures, Site Visits, Technical Events, Sports and Cultural Events, Soft Skills etc widens their horizon and avert them from being monotonous with academics. To conclude, the department catalyzes and assures a very healthy, amicable but a competitive ambience for our future engineer."
      ]
    },
    facultyMembers: [
      { name: "Prof. Sitaram Longani", position: "HOD & Assistant Professor", qualification: "Ph.D* (Pursuing), M.E(Communication Network), B.E.(E&TC)", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Dr. Brijesh Kumar Yadav", position: "Assistant Professor", qualification: "Ph.D (Electronics Engineering), M.E(Digital Communication), B.E.(Electronics Communication)", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Neha Singh", position: "Assistant Professor", qualification: "Ph.D (Pursuing in Electrical Engineering), M.tech (Power Systems), B.E.(EEE)", photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Pooja Kolhe", position: "Assistant Professor", qualification: "ME (E&TC), BE (Electronics)", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Geetanjali Ligade", position: "Assistant Professor", qualification: "ME (VLSI & Embedded System), BE (E&TC)", photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Pritee Timande", position: "Assistant Professor", qualification: "M.Tech (VLSI Design), BE (Electronics)", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Varsha Pawara", position: "Assistant Professor", qualification: "M.Tech (Digital Systems), B.Tech (E&TC)", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face" }
    ],
    activities: [
      { title: "Electronics Lab", description: "Hands-on experience with electronic circuits and components", color: "from-blue-50 to-blue-100 text-blue-800" },
      { title: "Communication Lab", description: "Digital and analog communication systems", color: "from-green-50 to-green-100 text-green-800" },
      { title: "VLSI Design Lab", description: "Very Large Scale Integration design and implementation", color: "from-purple-50 to-purple-100 text-purple-800" },
      { title: "Embedded Systems Lab", description: "Microcontroller and embedded system development", color: "from-orange-50 to-orange-100 text-orange-800" },
      { title: "Innovation & Skill Development Centre", description: "IoT, AI, ML, Data Science and Robotics projects", color: "from-pink-50 to-pink-100 text-pink-800" },
      { title: "Signal Processing Lab", description: "Digital signal processing and analysis", color: "from-indigo-50 to-indigo-100 text-indigo-800" }
    ]
  };

  return <DepartmentTemplate data={departmentData} />;
};

export default ETCDepartment;
