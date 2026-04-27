"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, Search, Users, Building2, Star,
  TrendingUp, ChefHat, BedDouble, UtensilsCrossed, Wine,
  CheckCircle, Phone, Briefcase, Sparkles,
} from "lucide-react";
import { jobs, stats } from "@/lib/jobs";
import { services } from "@/lib/services";
import JobCard from "@/components/JobCard";
import JobModal from "@/components/JobModal";
import type { Job } from "@/lib/jobs";

const categoryIcons = [
  { Icon: BedDouble,        label: "Hotels",         count: "80+",  color: "bg-blue-50 text-blue-600",   href: "/jobs" },
  { Icon: UtensilsCrossed,  label: "Restaurants",    count: "120+", color: "bg-orange-50 text-orange-600", href: "/jobs" },
  { Icon: Wine,             label: "Bars & Lounges", count: "60+",  color: "bg-purple-50 text-purple-600", href: "/jobs" },
  { Icon: ChefHat,          label: "Lodges",         count: "45+",  color: "bg-green-50 text-green-600",   href: "/jobs" },
];

const testimonials = [
  {
    name: "Claudine Uwimana",
    role: "Executive Chef, Kigali Marriott",
    quote: "Rwanda Hospitality Bridge found me my dream role within two weeks. The team truly understands the industry.",
    avatar: "👩‍🍳",
  },
  {
    name: "Jean-Paul Nkurunziza",
    role: "HR Manager, Serena Hotel",
    quote: "We have hired 12 staff through RHB. The quality of candidates and speed of placement is unmatched.",
    avatar: "👨‍💼",
  },
  {
    name: "Amina Muhire",
    role: "Lodge Manager, Sabyinyo Lodge",
    quote: "Professional, fast and they truly get hospitality. They matched us with staff who share our values.",
    avatar: "👩‍💼",
  },
];

const partnerLogos = [
  "Kigali Serena", "Marriott Hotel", "Radisson Blu", "Park Inn",
  "One&Only", "Bourbon Coffee", "Repub Lounge", "Heaven Restaurant",
];

export default function HomePage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const featuredJobs = jobs.filter((j) => j.urgent).slice(0, 6);
  const latestJobs = jobs.slice(0, 6);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#1b3921 0%,#25552f 40%,#1e2328 100%)" }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(224,143,31,0.06)" }}
        />
        <div
          className="absolute bottom-10 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(94,163,105,0.06)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-28 lg:py-32">
            {/* Left — Text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-white/20"
                style={{ background: "rgba(255,255,255,0.08)", color: "#e9a83b" }}
              >
                <TrendingUp className="w-4 h-4" />
                Rwanda&apos;s #1 Hospitality Talent Platform
              </div>

              <h1
                className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Duhuza Abakozi <br />
                <span style={{ color: "#e9a83b" }}>n&apos;Abakoresha</span>
              </h1>

              <p className="text-lg text-gray-300 max-w-xl mb-4">
                Connecting Rwanda&apos;s hospitality talent with the best hotels, restaurants, bars, lodges and lounges across the country.
              </p>
              <p className="text-base text-gray-400 max-w-lg mb-8">
                Tumanaginga ama hotel, bar, restaurant, lodge, lounge nibindi.
              </p>

              {/* Search bar */}
              <div className="max-w-lg bg-white rounded-2xl shadow-2xl p-2 flex gap-2 mb-8">
                <div className="flex-1 flex items-center gap-3 px-4">
                  <Search className="w-5 h-5 text-gray-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search jobs — chef, manager, bartender..."
                    className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                  />
                </div>
                <Link
                  href="/jobs"
                  className="px-6 py-3 text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap"
                  style={{ background: "#e08f1f" }}
                >
                  Find Jobs
                </Link>
              </div>

              {/* Quick service links */}
              <div className="flex flex-wrap gap-2 mb-8">
                <Link href="/services" className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition-colors">
                  🏨 Hotel Staffing
                </Link>
                <Link href="/services" className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition-colors">
                  🍽️ Restaurant Teams
                </Link>
                <Link href="/services" className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition-colors">
                  🎓 Training
                </Link>
                <Link href="/services" className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition-colors">
                  📋 HR Consulting
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl px-3 py-3 border border-white/15 text-center"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    <div
                      className="text-xl font-bold font-[family-name:var(--font-heading)]"
                      style={{ color: "#e9a83b" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-300 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Hero image grid */}
            <div className="hidden lg:block relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: 220 }}>
                    <img
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=350&fit=crop"
                      alt="Luxury hotel in Rwanda"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: 260 }}>
                    <img
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop"
                      alt="Fine dining restaurant"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: 280 }}>
                    <img
                      src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=450&fit=crop"
                      alt="Hotel lobby reception"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: 200 }}>
                    <img
                      src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=500&h=300&fit=crop"
                      alt="Bartender making cocktails"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Floating card */}
              <div
                className="absolute -bottom-4 -left-4 rounded-xl shadow-xl p-4 border border-white/20"
                style={{ background: "rgba(27,57,33,0.95)", backdropFilter: "blur(12px)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#e08f1f" }}>
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">32 New Jobs</div>
                    <div className="text-gray-400 text-xs">Added this week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY / PARTNER LOGOS ──────────────────── */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">
              Trusted by
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {partnerLogos.map((name) => (
                <span key={name} className="text-sm font-semibold text-gray-300 whitespace-nowrap">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES (Quick Links) ──────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#e08f1f" }}>
                What We Do
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#141719]">
                Our Services
              </h2>
              <p className="text-gray-500 mt-2 max-w-xl">
                Full-spectrum hospitality staffing, training, and consulting — everything you need under one roof.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: "#e08f1f" }}
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.slice(0, 8).map((service) => (
              <Link
                key={service.id}
                href="/services"
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 p-5 group transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{ background: "#fdf8ee" }}
                  >
                    {service.emoji}
                  </div>
                  <h3 className="font-semibold text-[#141719] text-sm group-hover:text-[#c46e16] transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">
                  {service.shortDesc}
                </p>
                <span className="text-xs font-semibold flex items-center gap-1" style={{ color: "#e08f1f" }}>
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile "View all" link */}
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: "#e08f1f" }}
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#141719] mb-3">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              From luxury hotels to eco-lodges, we cover every corner of Rwanda&apos;s hospitality industry.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {categoryIcons.map(({ Icon, label, count, color, href }) => (
              <Link
                key={label}
                href={href}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md p-6 text-center group hover:-translate-y-1 transition-all duration-200"
              >
                <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-[#141719] mb-1">{label}</h3>
                <p className="text-sm text-gray-400">{count} openings</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED JOBS (Urgent) ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#e08f1f" }}>
                Now Hiring
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#141719]">
                Urgent Openings
              </h2>
            </div>
            <Link
              href="/jobs"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: "#e08f1f" }}
            >
              View all jobs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} onClick={setSelectedJob} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: "#e08f1f" }}
            >
              View all jobs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LATEST JOBS ────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#2d6a38" }}>
                Fresh Opportunities
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#141719]">
                Latest Jobs
              </h2>
            </div>
            <Link
              href="/jobs"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: "#2d6a38" }}
            >
              Browse all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestJobs.map((job) => (
              <JobCard key={job.id} job={job} onClick={setSelectedJob} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#e08f1f" }}>
              Simple Process
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#141719] mb-3">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, Icon: Search,    title: "Browse & Search", desc: "Explore hundreds of verified hospitality jobs across Rwanda — filter by location, role, or establishment type." },
              { step: 2, Icon: Users,     title: "Apply Instantly",  desc: "Submit your application directly on our platform. No middlemen — your profile goes straight to the hiring manager." },
              { step: 3, Icon: Building2, title: "Get Hired",        desc: "Our team follows up, schedules interviews and supports you through to your first day on the job." },
            ].map(({ step, Icon, title, desc }) => (
              <div key={step} className="relative text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "#fdf8ee" }}
                >
                  <Icon className="w-7 h-7" style={{ color: "#e08f1f" }} />
                </div>
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: "#e08f1f" }}
                >
                  {step}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#141719] text-xl mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK CTA BANNER — For Employers ───────────────── */}
      <section className="py-16" style={{ background: "#204527" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-4">
                Need Staff for Your <span style={{ color: "#e9a83b" }}>Hotel, Restaurant or Lodge?</span>
              </h2>
              <p className="text-green-200 mb-6 leading-relaxed">
                Tell us your staffing needs and we&apos;ll start sourcing candidates within 24 hours. From a single hire to building your entire team — we&apos;ve got you covered.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-colors"
                  style={{ background: "#e08f1f" }}
                >
                  <Phone className="w-4 h-4" /> Hire Talent Now
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
                >
                  View Our Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-3">
              {services.slice(0, 4).map((s) => (
                <Link
                  key={s.id}
                  href="/services"
                  className="rounded-xl p-4 border border-white/15 hover:border-white/30 transition-colors"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <div className="text-2xl mb-2">{s.emoji}</div>
                  <div className="text-white text-sm font-semibold">{s.title}</div>
                  <div className="text-green-300 text-xs mt-1">{s.features[0]}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="py-20" style={{ background: "#1b3921" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#e9a83b" }}>
              Trusted By
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-3">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-6 border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" style={{ color: "#e9a83b", fill: "#e9a83b" }} />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#e08f1f" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Hospitality Career?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Join hundreds of professionals who found their perfect role through Rwanda Hospitality Bridge.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-[#c46e16] font-semibold rounded-lg transition-colors"
            >
              Browse Jobs <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white font-semibold rounded-lg shadow transition-colors hover:bg-orange-50"
              style={{ color: "#c46e16" }}
            >
              Hire Talent
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
}
