
import { Users, Trophy, Music, Calendar, BookOpen, Coffee, Heart } from 'lucide-react';

export const campusLifeHighlights = [
  {
    title: "Student Clubs & Societies",
    description: "Over 25 active clubs covering technical, cultural, and social activities",
    icon: Users,
    count: "25+ Clubs"
  },
  {
    title: "Sports & Recreation",
    description: "State-of-the-art sports facilities and regular tournaments",
    icon: Trophy,
    count: "15+ Sports"
  },
  {
    title: "Cultural Events",
    description: "Annual festivals, competitions, and cultural celebrations",
    icon: Music,
    count: "50+ Events/Year"
  },
  {
    title: "Student Activities",
    description: "Regular workshops, seminars, and skill development programs",
    icon: Calendar,
    count: "100+ Activities"
  }
];

export const studentClubs = [
  {
    category: "Technical Clubs",
    clubs: [
      { name: "Coding Club", description: "Programming competitions and hackathons" },
      { name: "Robotics Club", description: "Robotics projects and competitions" },
      { name: "AI & ML Society", description: "Artificial Intelligence and Machine Learning projects" },
      { name: "Cybersecurity Club", description: "Ethical hacking and security awareness" },
      { name: "Web Development Club", description: "Frontend and backend development" }
    ]
  },
  {
    category: "Cultural Clubs",
    clubs: [
      { name: "Drama Society", description: "Theatre performances and stage productions" },
      { name: "Music Club", description: "Vocal and instrumental music performances" },
      { name: "Dance Troupe", description: "Traditional and contemporary dance forms" },
      { name: "Art & Craft Club", description: "Painting, sketching, and creative arts" },
      { name: "Photography Club", description: "Photography workshops and exhibitions" }
    ]
  },
  {
    category: "Social Clubs",
    clubs: [
      { name: "NSS (National Service Scheme)", description: "Community service and social work" },
      { name: "Environmental Club", description: "Sustainability and environmental awareness" },
      { name: "Debate Society", description: "Public speaking and debate competitions" },
      { name: "Literary Club", description: "Creative writing and literature appreciation" },
      { name: "Entrepreneurship Cell", description: "Startup incubation and business development" }
    ]
  }
];

export const sportsActivities = [
  "Cricket", "Football", "Basketball", "Volleyball", "Badminton", "Table Tennis",
  "Athletics", "Swimming", "Chess", "Carrom", "Kabaddi", "Tennis",
  "Hockey", "Handball", "Wrestling", "Boxing"
];

export const campusFacilities = [
  {
    title: "Modern Hostels",
    description: "Comfortable accommodation with all modern amenities",
    icon: BookOpen,
    features: ["Wi-Fi enabled", "24/7 Security", "Mess facilities", "Recreation rooms"]
  },
  {
    title: "Cafeteria & Food Courts",
    description: "Multiple dining options serving healthy and delicious food",
    icon: Coffee,
    features: ["Hygienic food", "Variety of cuisines", "Affordable pricing", "Extended hours"]
  },
  {
    title: "Medical Center",
    description: "On-campus healthcare facility with qualified medical staff",
    icon: Heart,
    features: ["First aid", "Regular checkups", "Emergency care", "Health awareness"]
  },
  {
    title: "Library & Study Areas",
    description: "Extensive library with digital resources and quiet study spaces",
    icon: BookOpen,
    features: ["Digital library", "Study rooms", "Research support", "24/7 access"]
  }
];

export const upcomingEvents = [
  {
    event: "Annual Tech Fest - INNOVATE 2024",
    date: "March 15-17, 2024",
    description: "Technical competitions, workshops, and industry exhibitions"
  },
  {
    event: "Cultural Festival - KALEIDOSCOPE",
    date: "February 20-22, 2024",
    description: "Dance, music, drama, and art competitions"
  },
  {
    event: "Sports Week",
    date: "January 25-31, 2024",
    description: "Inter-departmental sports competitions and tournaments"
  },
  {
    event: "Industry Interface Program",
    date: "April 10-12, 2024",
    description: "Guest lectures, workshops, and networking sessions"
  }
];
