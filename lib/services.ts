import {
  Building2, UtensilsCrossed, Wine, TreePine, CalendarDays, ClipboardList,
  GraduationCap, Paintbrush,
} from "lucide-react";

export interface Service {
  id: string;
  icon: typeof Building2;
  emoji: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "hotel-management",
    icon: Building2,
    emoji: "🏨",
    subtitle: "Full-Service Hotel Solutions",
    title: "Hotel Management",
    shortDesc: "Executive & department head placement, seasonal and permanent staffing for hotels across Rwanda.",
    description:
      "We connect skilled professionals with top hotels across Rwanda — from boutique guesthouses to international chains. Our talent pool covers every department: front office, F&B, housekeeping, spa, and executive management.",
    features: [
      "Executive & department head placement",
      "Seasonal and permanent staffing",
      "Operations consulting",
      "Brand standards training",
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  },
  {
    id: "restaurant-staffing",
    icon: UtensilsCrossed,
    emoji: "🍽️",
    subtitle: "From Kitchen to Floor",
    title: "Restaurant Staffing",
    shortDesc: "Chef & culinary team placement, service staff recruitment, restaurant manager search.",
    description:
      "Whether you are opening a fine-dining restaurant or scaling a casual eatery, we match you with chefs, servers, managers and back-of-house staff who understand Rwandan and international dining culture.",
    features: [
      "Chef & culinary team placement",
      "Service staff recruitment",
      "Restaurant manager search",
      "Pop-up & event staffing",
    ],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
  },
  {
    id: "bar-nightlife",
    icon: Wine,
    emoji: "🍸",
    subtitle: "Expert Beverage Professionals",
    title: "Bar & Nightlife",
    shortDesc: "Head bartender & mixologist recruitment, barista placement, cellar & inventory staff.",
    description:
      "Bars, rooftop lounges, and nightlife venues need the right talent. We source experienced bartenders, mixologists, baristas and beverage managers who elevate your brand and keep guests coming back.",
    features: [
      "Head bartender & mixologist recruitment",
      "Barista & coffee specialist placement",
      "Cellar & inventory management staff",
      "Event bar crew",
    ],
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&h=400&fit=crop",
  },
  {
    id: "lodge-ecotourism",
    icon: TreePine,
    emoji: "🌿",
    subtitle: "Rwanda's Wild Side",
    title: "Lodge & Eco-Tourism",
    shortDesc: "Nature & safari guide placement, lodge manager recruitment, eco-tourism specialist staffing.",
    description:
      "Rwanda's lodges and eco-camps are world-class. We staff them with nature guides, guest relations officers, camp managers and chefs who share the same passion for Rwanda's incredible wildlife and landscapes.",
    features: [
      "Nature & safari guide placement",
      "Lodge manager recruitment",
      "Eco-tourism specialist staffing",
      "Gorilla trekking support staff",
    ],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
  },
  {
    id: "events-conferences",
    icon: CalendarDays,
    emoji: "🎪",
    subtitle: "World-Class Event Professionals",
    title: "Events & Conferences",
    shortDesc: "Event & conference coordinator placement, protocol & host staff, catering & banquet teams.",
    description:
      "Kigali is Africa's meetings capital. We supply event coordinators, AV technicians, hospitality hosts and corporate event managers for MICE events at convention centres and hotels across the country.",
    features: [
      "Event & conference coordinator placement",
      "Protocol & host staff",
      "Catering & banquet teams",
      "Technical crew & AV support",
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    id: "hr-compliance",
    icon: ClipboardList,
    emoji: "📋",
    subtitle: "People Management Made Easy",
    title: "HR & Compliance",
    shortDesc: "Employment contract drafting, labour law compliance, staff onboarding & orientation.",
    description:
      "Beyond recruitment, we help hospitality businesses manage HR compliance, staff onboarding, payroll structuring and training programs aligned with Rwanda's labour laws and tourism standards.",
    features: [
      "Employment contract drafting",
      "Labour law compliance support",
      "Staff onboarding & orientation",
      "Performance management systems",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    id: "training-development",
    icon: GraduationCap,
    emoji: "🎓",
    subtitle: "Build Industry-Ready Teams",
    title: "Training & Development",
    shortDesc: "Hospitality skills training, service excellence workshops, management development programs.",
    description:
      "We offer customised hospitality training programs to upskill your team — from service excellence and food safety to leadership development and guest experience management.",
    features: [
      "Service excellence workshops",
      "Food safety & hygiene training (HACCP)",
      "Management & leadership development",
      "Customer experience masterclasses",
    ],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
  },
  {
    id: "branding-consulting",
    icon: Paintbrush,
    emoji: "🎨",
    subtitle: "Stand Out in the Market",
    title: "Hospitality Branding",
    shortDesc: "Brand identity for hotels & restaurants, menu design, digital marketing & social media strategy.",
    description:
      "We help hospitality businesses develop their brand identity, from visual design and menu engineering to digital marketing strategy and social media management that attracts guests and builds loyalty.",
    features: [
      "Brand identity & visual design",
      "Menu engineering & photography",
      "Social media strategy & management",
      "Online reputation management",
    ],
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&h=400&fit=crop",
  },
];
