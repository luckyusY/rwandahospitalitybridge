export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  salary: string;
  experience: string;
  posted: string;
  urgent: boolean;
  description: string;
  requirements: string[];
  logo: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Executive Chef",
    company: "Kigali Serena Hotel",
    location: "Kigali, Rwanda",
    type: "Full-time",
    category: "Hotel",
    salary: "RWF 800,000 – 1,200,000 /mo",
    experience: "5+ years",
    posted: "2 days ago",
    urgent: true,
    description:
      "Lead the culinary team at one of Kigali's premier luxury hotels. Oversee kitchen operations, menu creation, and ensure exceptional dining experiences across all outlets.",
    requirements: [
      "Culinary degree or equivalent",
      "5+ years in a senior kitchen role",
      "Experience with international cuisine",
      "Strong leadership and team management",
    ],
    logo: "🏨",
  },
  {
    id: 2,
    title: "Front Desk Manager",
    company: "Gorilla's Nest Lodge",
    location: "Kinigi, Musanze",
    type: "Full-time",
    category: "Lodge",
    salary: "RWF 450,000 – 600,000 /mo",
    experience: "3+ years",
    posted: "1 week ago",
    urgent: false,
    description:
      "Manage front office operations for an eco-luxury lodge near Volcanoes National Park. Supervise guest check-in/out, reservations, and concierge services.",
    requirements: [
      "Hospitality management degree",
      "Fluent in English and French",
      "Experience with PMS software",
      "Excellent customer service skills",
    ],
    logo: "🌿",
  },
  {
    id: 3,
    title: "Head Bartender",
    company: "Sky Bar Kigali",
    location: "Kigali, Rwanda",
    type: "Full-time",
    category: "Bar",
    salary: "RWF 350,000 – 500,000 /mo",
    experience: "3+ years",
    posted: "3 days ago",
    urgent: true,
    description:
      "Create and manage cocktail menus for Kigali's most iconic rooftop bar. Train junior staff and ensure top-tier beverage service standards.",
    requirements: [
      "Advanced bartending certification",
      "Creative mixology skills",
      "Knowledge of wines and spirits",
      "Evening/weekend availability",
    ],
    logo: "🍸",
  },
  {
    id: 4,
    title: "Restaurant Manager",
    company: "Repub Lounge",
    location: "Kigali, Rwanda",
    type: "Full-time",
    category: "Restaurant",
    salary: "RWF 500,000 – 700,000 /mo",
    experience: "4+ years",
    posted: "5 days ago",
    urgent: false,
    description:
      "Oversee daily restaurant operations, manage staff scheduling, ensure quality standards, and drive revenue growth for one of Kigali's most beloved dining spots.",
    requirements: [
      "Restaurant management experience",
      "Financial acumen & budgeting",
      "Team leadership skills",
      "Food safety certification",
    ],
    logo: "🍽️",
  },
  {
    id: 5,
    title: "Guest Relations Officer",
    company: "One&Only Nyungwe House",
    location: "Nyamasheke, Western Province",
    type: "Full-time",
    category: "Lodge",
    salary: "RWF 380,000 – 520,000 /mo",
    experience: "2+ years",
    posted: "1 day ago",
    urgent: false,
    description:
      "Deliver world-class guest experiences at an ultra-luxury lodge on the edge of Nyungwe Forest. Coordinate activities, transfers, and personalized itineraries.",
    requirements: [
      "Hospitality background",
      "Excellent communication skills",
      "Multi-lingual (English, French preferred)",
      "Passion for eco-tourism",
    ],
    logo: "🌲",
  },
  {
    id: 6,
    title: "Housekeeping Supervisor",
    company: "Marriott Hotel Kigali",
    location: "Kigali, Rwanda",
    type: "Full-time",
    category: "Hotel",
    salary: "RWF 320,000 – 420,000 /mo",
    experience: "2+ years",
    posted: "2 weeks ago",
    urgent: false,
    description:
      "Supervise housekeeping team to maintain Marriott brand standards across all rooms and public areas. Schedule staff, conduct inspections and manage supply inventory.",
    requirements: [
      "Housekeeping or hospitality diploma",
      "Supervisory experience",
      "Attention to detail",
      "Physical stamina",
    ],
    logo: "🏩",
  },
  {
    id: 7,
    title: "Sous Chef",
    company: "Heaven Restaurant & Boutique Hotel",
    location: "Kigali, Rwanda",
    type: "Full-time",
    category: "Restaurant",
    salary: "RWF 480,000 – 650,000 /mo",
    experience: "3+ years",
    posted: "4 days ago",
    urgent: true,
    description:
      "Support the Executive Chef in running the kitchen of a celebrated Kigali institution. Focus on Rwandan and fusion cuisine, staff training, and prep management.",
    requirements: [
      "Culinary training required",
      "Proficiency in African & international cuisines",
      "Team player with leadership potential",
      "HACCP knowledge",
    ],
    logo: "👨‍🍳",
  },
  {
    id: 8,
    title: "Barista & Coffee Specialist",
    company: "Bourbon Coffee",
    location: "Multiple Locations, Kigali",
    type: "Full-time",
    category: "Bar",
    salary: "RWF 200,000 – 320,000 /mo",
    experience: "1+ year",
    posted: "1 week ago",
    urgent: false,
    description:
      "Prepare exceptional Rwandan specialty coffee and educate customers on Rwanda's coffee heritage. Ideal for passionate baristas who love the story behind the cup.",
    requirements: [
      "Barista certification preferred",
      "Knowledge of coffee origins",
      "Customer-facing experience",
      "Positive attitude",
    ],
    logo: "☕",
  },
  {
    id: 9,
    title: "Events Coordinator",
    company: "Kigali Convention Centre",
    location: "Kigali, Rwanda",
    type: "Full-time",
    category: "Lounge",
    salary: "RWF 420,000 – 580,000 /mo",
    experience: "3+ years",
    posted: "6 days ago",
    urgent: false,
    description:
      "Plan and execute corporate events, conferences, and banquets at Rwanda's premier convention centre. Liaise with clients, vendors and AV teams.",
    requirements: [
      "Event management degree/diploma",
      "Project management skills",
      "Vendor negotiation experience",
      "Bilingual (English/French)",
    ],
    logo: "🎪",
  },
];

export const categories = ["All", "Hotel", "Restaurant", "Bar", "Lodge", "Lounge"];
export const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Internship"];

export const stats = [
  { value: "500+", label: "Jobs Placed" },
  { value: "150+", label: "Partner Businesses" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5", label: "Provinces Covered" },
];
