"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, Search, Users, Building2, Star,
  TrendingUp, ChefHat, BedDouble, UtensilsCrossed, Wine,
} from "lucide-react";
import { jobs, stats } from "@/lib/jobs";
import JobCard from "@/components/JobCard";
import JobModal from "@/components/JobModal";
import type { Job } from "@/lib/jobs";

const categoryIcons = [
  { Icon: BedDouble,        label: "Hotels",         count: "80+",  color: "bg-blue-50 text-blue-600"   },
  { Icon: UtensilsCrossed,  label: "Restaurants",    count: "120+", color: "bg-orange-50 text-orange-600" },
  { Icon: Wine,             label: "Bars & Lounges", count: "60+",  color: "bg-purple-50 text-purple-600" },
  { Icon: ChefHat,          label: "Lodges",         count: "45+",  color: "bg-green-50 text-green-600"  },
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

export default function HomePage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const featuredJobs = jobs.filter((j) => j.urgent).slice(0, 3);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#1b3921" }}
      >
        {/* Hero background image */}
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&h=900&fit=crop"
          alt="Luxury hotel Rwanda"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center", opacity: 0.25,
          }}
          aria-hidden="true"
        />
        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg,rgba(27,57,33,0.92) 0%,rgba(37,85,47,0.88) 40%,rgba(30,35,40,0.92) 100%)",
          }}
        />
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(224,143,31,0.08)" }}
        />
        <div
          className="absolute bottom-10 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(94,163,105,0.08)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center w-full">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-white/20"
            style={{ background: "rgba(255,255,255,0.1)", color: "#e9a83b" }}
          >
            <TrendingUp className="w-4 h-4" />
            Rwanda&apos;s #1 Hospitality Talent Platform
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Duhuza Abakozi <br />
            <span style={{ color: "#e9a83b" }}>n&apos;Abakoresha</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4">
            Connecting Rwanda&apos;s hospitality talent with the best hotels, restaurants, bars, lodges and lounges across the country.
          </p>
          <p className="text-base text-gray-400 max-w-xl mx-auto mb-10">
            Tumanaginga ama hotel, bar, restaurant, lodge, lounge nibindi.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-2 flex gap-2 mb-12">
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl px-4 py-4 border border-white/15"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <div
                  className="text-2xl font-bold font-[family-name:var(--font-heading)]"
                  style={{ color: "#e9a83b" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-gray-300 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────── */}
      <section className="py-20 bg-white">
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
            {categoryIcons.map(({ Icon, label, count, color }) => (
              <Link
                key={label}
                href="/jobs"
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

      {/* ── FEATURED JOBS ─────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
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
          </div>
        </div>
      </section>

      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
}
