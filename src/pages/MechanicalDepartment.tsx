
import React from 'react';
import DepartmentTemplate from '@/components/DepartmentTemplate';

const MechanicalDepartment = () => {
  const departmentData = {
    name: "Mechanical Engineering",
    vision: "To be recognized professional destination in mechanical engineering through providing conductive environment for quality education and research aiming towards techno societal upgradations and technocrats with ethics",
    mission: [
      "To install fundamental knowledge of Mechanical engineering to students through effective teaching learning practices",
      "To develop the spirit of Innovation and Creativity through interdisciplinary research addressing concurrent societal challenges",
      "To promote higher education and enterprising abilities among the students with ethics"
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
      "To develop graduates with sound technical competency",
      "To inculcate life-long learning and high employability skills",
      "To establish research and development facilities to promote innovations",
      "To generate the spirit of entrepreneurship to create future employers.",
      "To promote leadership qualities so as to work and succeed in diverse domains."
    ],
    programSpecificOutcomes: [
      "Able to apply practical skill, knowledge in the areas of Thermal, Design, Manufacturing and Industrial Engineering",
      "To serve the needs of the society with ethics by pursuing higher studies, taking up the carrier in industries or Govt. Sector."
    ],
    hod: {
      name: "Dr. Vaibhav V. Edake",
      position: "Assistant Professor & HOD",
      qualification: "PhD (Mechanical Engineering) SJJT University, ME(Design Engineering) Savitribai Phule Pune University, MBA (Operation Management) Savitribai Phule Pune University",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      message: [
        "Welcome to the Department of Mechanical Engineering at ISBM College of Engineering, Pune. Over the past decade, we have grown our expertise and competence in the IT enabled Design and Manufacturing centered Mechanical Engineering curriculum and research.",
        "Our department offers IT enabled design and manufacturing-based engineering curriculum. The primary focus of our curriculum is to impart technical know-how to students, promote their problem solving skills and innovation of new technologies.",
        "Department offers large number of interdisciplinary courses for providing cross cutting knowledge to the students to pursue their interest. The course contents are periodically updated for introducing new scientific and technological developments. Undergraduate students are encouraged to undertake various research projects and encouraged to spend time in neighboring Industries.",
        "Our department has a distinguished record in both teaching and research. Faculty members have excellent academic credentials and are highly regarded.",
        "This website provides an overview of the academic programs, research activities of our department, research facilities, profiles of faculty members, and details of student activities. We hope that whether you are a prospective undergraduate or graduate student, or work in industry, or another university, or a visitor, you will find this website to be informative.",
        "If you have further questions after browsing this website, please do not hesitate to contact us. You may also correspond with individual faculty members, or contact them by email, using the addresses shown on the faculty pages. Our department looks forward to contribute in solving the technological challenges of the society with active participation from all sections of the society. Thank you for visiting us."
      ]
    },
    facultyMembers: [
      { name: "Dr. Vaibhav V. Edake", position: "Assistant Professor & HOD", qualification: "PhD (Mechanical Engineering) SJJT University, ME(Design Engineering), MBA (Operation Management)", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Dr. Sanjay Kumar", position: "Assistant Professor", qualification: "PhD (Mechanical Engineering) NIT Patna, M.Tech (Thermal Turbo Machines) NIT Patna, B.Tech (Mechanical Engineering)", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Chandrakant Khemkar", position: "Assistant Professor", qualification: "ME (Design Engineering) Savitribai Phule Pune University, BE (Mechanical Engineering) Shivaji University", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Tushar Edake", position: "Assistant Professor", qualification: "ME (Design Engineering) Savitribai Phule Pune University, MBA (Supply Chain & Business Analyst), BE (Mechanical Engineering)", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Niteen Bahiram", position: "Assistant Professor", qualification: "M Tech (CAD/CAM) NIT Surat, BE (Mechanical Engineering) Pune University", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Ravi Suryawanshi", position: "Assistant Professor", qualification: "Master Of Engineering (ME), Bachelor Of Engineering (BE)", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Sachin R Jadhav", position: "Assistant Professor", qualification: "ME Design, MBA operations (ICFAI), BE Mechanical Engineering", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Rahul S Nagmode", position: "Assistant Professor", qualification: "ME DESIGN, BE Mechanical Engineering (SPPU University)", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Ashish Z. Ramteke", position: "Assistant Professor", qualification: "M.Tech (Thermal Science), IIT Bhubaneswar, BE (Mechanical Engineering), Shivaji University, Kolhapur", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Prof. Ritesh Rakhonde", position: "Visiting Faculty", qualification: "M Tech (Design Engineering), IIT Delhi, BE (Mechanical Engineering), Solapur University", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Mr. N. T. Rathod", position: "Workshop Instructor", qualification: "ITI (Mechanical)", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Mr. Sagar D.Rathod", position: "Assistant to Instructor", qualification: "ITI (Mechanical)", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
      { name: "Mr. Ganesh Raut", position: "Assistant to Instructor", qualification: "ITI", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" }
    ],
    activities: [
      { title: "Fluid Mechanics Lab", description: "Hands-on experience in fluid dynamics and turbo-machinery", color: "from-blue-50 to-blue-100 text-blue-800" },
      { title: "HVAC Lab", description: "Heating, ventilation, air conditioning, and refrigeration systems", color: "from-green-50 to-green-100 text-green-800" },
      { title: "IC Engine Lab", description: "Internal combustion engines performance analysis", color: "from-purple-50 to-purple-100 text-purple-800" },
      { title: "Heat & Mass Transfer Lab", description: "Practical experiments on thermal conductivity and heat transfer", color: "from-orange-50 to-orange-100 text-orange-800" },
      { title: "Robotics Lab", description: "State-of-the-art robotics and automation facility", color: "from-pink-50 to-pink-100 text-pink-800" },
      { title: "CAD/CAM/CAE Lab", description: "Computer-aided design, manufacturing, and engineering", color: "from-indigo-50 to-indigo-100 text-indigo-800" }
    ]
  };

  return <DepartmentTemplate data={departmentData} />;
};

export default MechanicalDepartment;
