"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight, Search, Users, Building2, Star,
  TrendingUp, ChefHat, BedDouble, UtensilsCrossed, Wine,
  Phone, Sparkles,
} from "lucide-react";
import { jobs, stats } from "@/lib/jobs";
import { services } from "@/lib/services";
import JobCard from "@/components/JobCard";
import JobModal from "@/components/JobModal";
import type { Job } from "@/lib/jobs";

// ── Animation variants ────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

// ── Static data ────────────────────────────────────────────
const categoryIcons = [
  { Icon: BedDouble,        label: "Hotels",         count: "80+",  color: "bg-blue-50 text-blue-600",    href: "/jobs" },
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
  { name: "Kigali Serena Hotel", initials: "KSH", color: "#1565C0" },
  { name: "Marriott Hotel",      initials: "MHK", color: "#C62828" },
  { name: "Radisson Blu",        initials: "RBK", color: "#1A237E" },
  { name: "Park Inn",            initials: "PIR", color: "#0D47A1" },
  { name: "One&Only",            initials: "ONH", color: "#00695C" },
  { name: "Bourbon Coffee",      initials: "BC",  color: "#5D4037" },
  { name: "Repub Lounge",        initials: "RL",  color: "#BF360C" },
  { name: "Heaven Restaurant",   initials: "HRB", color: "#E65100" },
  { name: "Bisate Lodge",        initials: "BL",  color: "#1B5E20" },
  { name: "KCC",                 initials: "KCC", color: "#283593" },
];

export default function HomePage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const featuredJobs = jobs.filter((j) => j.urgent).slice(0, 6);
  const latestJobs   = jobs.slice(0, 6);

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#1b3921 0%,#25552f 40%,#1e2328 100%)" }}
      >
        {/* Decorative blobs */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(224,143,31,0.07)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(94,163,105,0.07)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-28 lg:py-32">

            {/* Left — Text */}
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-white/20"
                style={{ background: "rgba(255,255,255,0.08)", color: "#e9a83b" }}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <TrendingUp className="w-4 h-4" />
                Rwanda&apos;s #1 Hospitality Talent Platform
              </motion.div>

              <motion.h1
                className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                Duhuza Abakozi <br />
                <motion.span
                  style={{ color: "#e9a83b" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                >
                  n&apos;Abakoresha
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg text-gray-300 max-w-xl mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Connecting Rwanda&apos;s hospitality talent with the best hotels, restaurants, bars, lodges and lounges across the country.
              </motion.p>
              <motion.p
                className="text-base text-gray-400 max-w-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Tumanaginga ama hotel, bar, restaurant, lodge, lounge nibindi.
              </motion.p>

              {/* Search bar */}
              <motion.div
                className="max-w-lg bg-white rounded-2xl shadow-2xl p-2 flex gap-2 mb-8"
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
              >
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
              </motion.div>

              {/* Quick service links */}
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.75 }}
              >
                {["🏨 Hotel Staffing", "🍽️ Restaurant Teams", "🎓 Training", "📋 HR Consulting"].map((label) => (
                  <Link
                    key={label}
                    href="/services"
                    className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="rounded-xl px-3 py-3 border border-white/15 text-center"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                    variants={staggerItem}
                    custom={i}
                    whileHover={{ scale: 1.05, borderColor: "rgba(233,168,59,0.5)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="text-xl font-bold font-[family-name:var(--font-heading)]" style={{ color: "#e9a83b" }}>
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-300 mt-0.5">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right — Hero image grid */}
            <motion.div
              className="hidden lg:block relative"
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <motion.div
                    className="rounded-2xl overflow-hidden shadow-2xl"
                    style={{ height: 220 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=350&fit=crop"
                      alt="Luxury hotel in Rwanda"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="rounded-2xl overflow-hidden shadow-2xl"
                    style={{ height: 260 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop"
                      alt="Fine dining restaurant"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="space-y-4 pt-8">
                  <motion.div
                    className="rounded-2xl overflow-hidden shadow-2xl"
                    style={{ height: 280 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=450&fit=crop"
                      alt="Hotel lobby reception"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="rounded-2xl overflow-hidden shadow-2xl"
                    style={{ height: 200 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=500&h=300&fit=crop"
                      alt="Bartender making cocktails"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                className="absolute -bottom-4 -left-4 rounded-xl shadow-xl p-4 border border-white/20"
                style={{ background: "rgba(27,57,33,0.95)", backdropFilter: "blur(12px)" }}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.04 }}
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PARTNER LOGOS ────────────────────────────────── */}
      <section className="py-8 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap shrink-0">
              Trusted by
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {partnerLogos.map((p, i) => (
                <motion.div
                  key={p.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-100"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ borderColor: "#eec163", y: -2 }}
                >
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center text-white font-bold shrink-0"
                    style={{ background: p.color, fontSize: 9, letterSpacing: "0.04em" }}
                  >
                    {p.initials}
                  </div>
                  <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">{p.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES (Quick Links) ───────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#e08f1f" }}>
                What We Do
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#141719]">
                Our Services
              </h2>
              <p className="text-gray-500 mt-2 max-w-xl">
                Full-spectrum hospitality staffing, training, and consulting — everything under one roof.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/services"
                className="hidden sm:flex items-center gap-1 text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ color: "#e08f1f" }}
              >
                View all services <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {services.slice(0, 8).map((service) => (
              <motion.div key={service.id} variants={staggerItem}>
                <Link
                  href="/services"
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md p-5 group transition-shadow duration-200 block"
                >
                  <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: "#fdf8ee" }}>
                        {service.emoji}
                      </div>
                      <h3 className="font-semibold text-[#141719] text-sm group-hover:text-[#c46e16] transition-colors leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">{service.shortDesc}</p>
                    <span className="text-xs font-semibold flex items-center gap-1" style={{ color: "#e08f1f" }}>
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORIES ──────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#141719] mb-3">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              From luxury hotels to eco-lodges, we cover every corner of Rwanda&apos;s hospitality industry.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {categoryIcons.map(({ Icon, label, count, color, href }) => (
              <motion.div key={label} variants={staggerItem}>
                <Link
                  href={href}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md p-6 text-center group block"
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-semibold text-[#141719] mb-1">{label}</h3>
                    <p className="text-sm text-gray-400">{count} openings</p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── URGENT JOBS ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#e08f1f" }}>
                Now Hiring
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#141719]">
                Urgent Openings
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/jobs"
                className="hidden sm:flex items-center gap-1 text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ color: "#e08f1f" }}
              >
                View all jobs <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {featuredJobs.map((job) => (
              <motion.div key={job.id} variants={staggerItem}>
                <JobCard job={job} onClick={setSelectedJob} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/jobs" className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "#e08f1f" }}>
              View all jobs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LATEST JOBS ─────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#2d6a38" }}>
                Fresh Opportunities
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#141719]">
                Latest Jobs
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Link href="/jobs" className="hidden sm:flex items-center gap-1 text-sm font-semibold hover:opacity-80" style={{ color: "#2d6a38" }}>
                Browse all <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {latestJobs.map((job) => (
              <motion.div key={job.id} variants={staggerItem}>
                <JobCard job={job} onClick={setSelectedJob} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#e08f1f" }}>Simple Process</div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[#141719] mb-3">
              How It Works
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {[
              { step: 1, Icon: Search,    title: "Browse & Search",  desc: "Explore hundreds of verified hospitality jobs across Rwanda — filter by location, role, or establishment type." },
              { step: 2, Icon: Users,     title: "Apply Instantly",   desc: "Submit your application directly on our platform. No middlemen — your profile goes straight to the hiring manager." },
              { step: 3, Icon: Building2, title: "Get Hired",         desc: "Our team follows up, schedules interviews and supports you through to your first day on the job." },
            ].map(({ step, Icon, title, desc }) => (
              <motion.div key={step} className="relative text-center" variants={staggerItem}>
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "#fdf8ee" }}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Icon className="w-7 h-7" style={{ color: "#e08f1f" }} />
                </motion.div>
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: "#e08f1f" }}
                >
                  {step}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#141719] text-xl mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── EMPLOYER CTA BANNER ──────────────────────────── */}
      <section className="py-16 overflow-hidden" style={{ background: "#204527" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-4">
                Need Staff for Your <span style={{ color: "#e9a83b" }}>Hotel, Restaurant or Lodge?</span>
              </h2>
              <p className="text-green-200 mb-6 leading-relaxed">
                Tell us your staffing needs and we&apos;ll start sourcing candidates within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-colors"
                    style={{ background: "#e08f1f" }}
                  >
                    <Phone className="w-4 h-4" /> Hire Talent Now
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
                  >
                    View Our Services <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="hidden md:grid grid-cols-2 gap-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {services.slice(0, 4).map((s) => (
                <motion.div key={s.id} variants={staggerItem}>
                  <Link
                    href="/services"
                    className="rounded-xl p-4 border border-white/15 hover:border-white/30 transition-colors block"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                      <div className="text-2xl mb-2">{s.emoji}</div>
                      <div className="text-white text-sm font-semibold">{s.title}</div>
                      <div className="text-green-300 text-xs mt-1">{s.features[0]}</div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-20" style={{ background: "#1b3921" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#e9a83b" }}>Trusted By</div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-3">
              What Our Clients Say
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                className="rounded-2xl p-6 border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
                variants={staggerItem}
                whileHover={{ scale: 1.02, borderColor: "rgba(233,168,59,0.4)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" style={{ color: "#e9a83b", fill: "#e9a83b" }} />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ background: "rgba(255,255,255,0.15)" }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#e08f1f" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Hospitality Career?
            </h2>
            <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
              Join hundreds of professionals who found their perfect role through Rwanda Hospitality Bridge.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { href: "/jobs",     label: "Browse Jobs",    outline: true },
                { href: "/contact",  label: "Hire Talent",    outline: false },
                { href: "/services", label: "Our Services",   outline: true },
              ].map(({ href, label, outline }) => (
                <motion.div key={label} variants={staggerItem} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href={href}
                    className={`inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors ${
                      outline
                        ? "border-2 border-white text-white hover:bg-white hover:text-[#c46e16]"
                        : "bg-white shadow"
                    }`}
                    style={outline ? {} : { color: "#c46e16" }}
                  >
                    {label} {outline && <ArrowRight className="w-4 h-4" />}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
}
