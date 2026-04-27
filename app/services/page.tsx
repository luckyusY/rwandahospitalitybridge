import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { stats } from "@/lib/jobs";

const services = [
  {
    icon: "🏨",
    subtitle: "Full-Service Hotel Solutions",
    title: "Hotel Management",
    description:
      "We connect skilled professionals with top hotels across Rwanda — from boutique guesthouses to international chains. Our talent pool covers every department: front office, F&B, housekeeping, spa, and executive management.",
    features: [
      "Executive & department head placement",
      "Seasonal and permanent staffing",
      "Operations consulting",
      "Brand standards training",
    ],
  },
  {
    icon: "🍽️",
    subtitle: "From Kitchen to Floor",
    title: "Restaurant Staffing",
    description:
      "Whether you are opening a fine-dining restaurant or scaling a casual eatery, we match you with chefs, servers, managers and back-of-house staff who understand Rwandan and international dining culture.",
    features: [
      "Chef & culinary team placement",
      "Service staff recruitment",
      "Restaurant manager search",
      "Pop-up & event staffing",
    ],
  },
  {
    icon: "🍸",
    subtitle: "Expert Beverage Professionals",
    title: "Bar & Nightlife",
    description:
      "Bars, rooftop lounges, and nightlife venues need the right talent. We source experienced bartenders, mixologists, baristas and beverage managers who elevate your brand and keep guests coming back.",
    features: [
      "Head bartender & mixologist recruitment",
      "Barista & coffee specialist placement",
      "Cellar & inventory management staff",
      "Event bar crew",
    ],
  },
  {
    icon: "🌿",
    subtitle: "Rwanda's Wild Side",
    title: "Lodge & Eco-Tourism",
    description:
      "Rwanda's lodges and eco-camps are world-class. We staff them with nature guides, guest relations officers, camp managers and chefs who share the same passion for Rwanda's incredible wildlife and landscapes.",
    features: [
      "Nature & safari guide placement",
      "Lodge manager recruitment",
      "Eco-tourism specialist staffing",
      "Gorilla trekking support staff",
    ],
  },
  {
    icon: "🎪",
    subtitle: "World-Class Event Professionals",
    title: "Events & Conferences",
    description:
      "Kigali is Africa's meetings capital. We supply event coordinators, AV technicians, hospitality hosts and corporate event managers for MICE events at convention centres and hotels across the country.",
    features: [
      "Event & conference coordinator placement",
      "Protocol & host staff",
      "Catering & banquet teams",
      "Technical crew & AV support",
    ],
  },
  {
    icon: "📋",
    subtitle: "People Management Made Easy",
    title: "HR & Compliance",
    description:
      "Beyond recruitment, we help hospitality businesses manage HR compliance, staff onboarding, payroll structuring and training programs aligned with Rwanda's labour laws and tourism standards.",
    features: [
      "Employment contract drafting",
      "Labour law compliance support",
      "Staff onboarding & orientation",
      "Performance management systems",
    ],
  },
];

const steps = [
  { n: "1", title: "Brief & Understand", desc: "We learn your venue, culture, team structure and exact staffing needs." },
  { n: "2", title: "Source & Screen", desc: "We tap our talent database and active job seekers, screening for skills and culture fit." },
  { n: "3", title: "Interview & Shortlist", desc: "Shortlisted candidates are assessed and presented with detailed profiles." },
  { n: "4", title: "Place & Follow Up", desc: "We support the onboarding and check in during the first 90 days." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#141719] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#e9a83b" }}>
            What We Do
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-4">
            Full-Spectrum Hospitality<br />
            <span style={{ color: "#e9a83b" }}>Staffing &amp; Management</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From a single hire to complete HR outsourcing — we support Rwanda&apos;s hospitality industry at every level.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: "#e08f1f" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-[family-name:var(--font-heading)] font-bold mb-1">{s.value}</div>
                <div className="text-orange-100 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-7"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#e08f1f" }}>
                  {service.subtitle}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#141719] text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#3d8549" }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#141719] mb-3">
              Our Recruitment Process
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Efficient, transparent and tailored to the hospitality industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ n, title, desc }) => (
              <div key={n}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
                  style={{ background: "#e08f1f" }}
                >
                  {n}
                </div>
                <h3 className="font-semibold text-[#141719] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ background: "#204527" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">Need to Hire? Let&apos;s Talk.</h2>
          <p className="text-green-200 mb-8">
            Tell us your requirements and we&apos;ll find the right hospitality professionals for your business — fast.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-colors"
            style={{ background: "#e08f1f" }}
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
