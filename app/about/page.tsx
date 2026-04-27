import Link from "next/link";
import { ArrowRight, Target, Heart, Globe, Award } from "lucide-react";

const team = [
  { name: "Marie-Claire Ingabire", role: "CEO & Co-Founder",          emoji: "👩‍💼", bio: "10+ years in luxury hotel management across Africa and Europe." },
  { name: "Eric Habimana",         role: "Head of Talent Acquisition", emoji: "👨‍💼", bio: "Former HR Director at Kigali Serena Hotel with deep industry networks." },
  { name: "Aline Uwitonze",        role: "Client Relations Manager",   emoji: "👩‍🤝‍👩", bio: "Passionate about matching exceptional professionals with great employers." },
  { name: "Patrick Ntwari",        role: "Operations Lead",            emoji: "👨‍💻", bio: "Streamlines our processes to ensure fast, quality placements every time." },
];

const values = [
  { Icon: Target, title: "Precision Matching",  desc: "We don't just fill vacancies — we find the right person for the right role in the right establishment." },
  { Icon: Heart,  title: "People First",        desc: "Both candidates and clients deserve honesty, respect and genuine support throughout the process." },
  { Icon: Globe,  title: "Rwanda's Growth",     desc: "We are invested in Rwanda's hospitality boom and work to elevate the standard of the entire industry." },
  { Icon: Award,  title: "Excellence Always",   desc: "We maintain the highest standards in vetting, communication and follow-through — every single time." },
];

const numbers = [
  { label: "Hotels & Resorts",    n: "80+",  bg: "bg-blue-50"   },
  { label: "Restaurants & Bars",  n: "180+", bg: "bg-orange-50" },
  { label: "Lodges & Camps",      n: "45+",  bg: "bg-green-50"  },
  { label: "Placements Made",     n: "500+", bg: "bg-amber-50"  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#141719] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#e9a83b" }}>
              Our Story
            </div>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-6">
              Bridging Rwanda&apos;s Hospitality Talent Gap
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Rwanda Hospitality Bridge was founded on a simple belief: the right talent in the right role transforms a guest experience. We exist to make those connections — faster, better and more reliably than anyone else.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: "#e08f1f" }}>
                Our Mission
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#141719] mb-5">
                Duhuza abakozi n&apos;abakoresha
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                In Kinyarwanda, our tagline means simply: <em>&quot;Connecting employees and employers.&quot;</em> It&apos;s not just a slogan — it&apos;s what we do every day, for every client and every candidate.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                Rwanda&apos;s tourism and hospitality sector is growing fast. World-class lodges open near the gorilla parks, Kigali&apos;s dining scene rivals any African capital, and MICE tourism is booming. The industry needs skilled, professional, passionate people — and that&apos;s where we come in.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We combine deep industry knowledge with a personal approach. We know the market, we know the venues, and we know what it takes to succeed in Rwanda&apos;s hospitality industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {numbers.map(({ label, n, bg }) => (
                <div key={label} className={`${bg} rounded-2xl p-6`}>
                  <div className="text-3xl font-[family-name:var(--font-heading)] font-bold text-[#141719] mb-1">{n}</div>
                  <div className="text-sm text-gray-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#141719] mb-3">
              Our Values
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#fdf8ee" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#e08f1f" }} />
                </div>
                <h3 className="font-semibold text-[#141719] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#141719] mb-3">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Hospitality professionals who understand your world.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {member.emoji}
                </div>
                <h3 className="font-semibold text-[#141719]">{member.name}</h3>
                <p className="text-xs font-medium mt-0.5 mb-3" style={{ color: "#e08f1f" }}>{member.role}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ background: "#e08f1f" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-orange-100 mb-8">
            Whether you&apos;re looking for a job or looking to hire — we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-[#c46e16] font-semibold rounded-lg transition-colors"
            >
              Find Jobs <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white font-semibold rounded-lg shadow hover:bg-orange-50 transition-colors"
              style={{ color: "#c46e16" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
