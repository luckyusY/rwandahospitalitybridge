"use client";
import { useState } from "react";
import { X, MapPin, Briefcase, Clock, CheckCircle, Zap, Users, Eye, Calendar } from "lucide-react";
import type { Job } from "@/lib/jobs";

interface Props {
  job: Job | null;
  onClose: () => void;
}

const categoryColors: Record<string, string> = {
  Hotel:      "bg-blue-100 text-blue-700",
  Restaurant: "bg-orange-100 text-orange-700",
  Bar:        "bg-purple-100 text-purple-700",
  Lodge:      "bg-green-100 text-green-700",
  Lounge:     "bg-pink-100 text-pink-700",
};

export default function JobModal({ job, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", cover: "" });

  if (!job) return null;

  const thousands = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">

        {/* Hero image */}
        <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
          <img
            src={job.image}
            alt={job.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%)" }}
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          {job.urgent && (
            <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "#ef4444", color: "#fff" }}>
              <Zap className="w-3 h-3" fill="white" /> Urgent Hire
            </span>
          )}

          {/* Company identity bar */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg border-2 border-white/30"
              style={{ background: job.companyColor }}
            >
              {job.companyInitials}
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-white text-xl leading-tight">{job.title}</h2>
              <p className="text-gray-200 text-sm">{job.company}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Meta row */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryColors[job.category] ?? "bg-gray-100 text-gray-600"}`}>
              {job.category}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
              <MapPin className="w-3 h-3" /> {job.location}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
              <Briefcase className="w-3 h-3" /> {job.type}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
              {job.salary}
            </span>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-6 bg-gray-50 rounded-xl p-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-gray-400 text-xs mb-1">
                <Users className="w-3.5 h-3.5" /> Applicants
              </div>
              <div className="font-bold text-[#141719] text-lg">{job.applicants}</div>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="flex items-center justify-center gap-1 text-gray-400 text-xs mb-1">
                <Eye className="w-3.5 h-3.5" /> Views
              </div>
              <div className="font-bold text-[#141719] text-lg">{thousands(job.views)}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-gray-400 text-xs mb-1">
                <Calendar className="w-3.5 h-3.5" /> Deadline
              </div>
              <div className="font-bold text-[#141719] text-sm">{job.deadline}</div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-5">
            <h3 className="font-semibold text-[#141719] text-sm mb-2">Key Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#fdf8ee] border border-[#f0d9a8] text-[#c46e16] text-xs font-medium rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <h3 className="font-semibold text-[#141719] text-sm mb-2">About the Role</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">{job.description}</p>

          <h3 className="font-semibold text-[#141719] text-sm mb-3">Requirements</h3>
          <ul className="space-y-2 mb-6">
            {job.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#3d8549" }} />
                {req}
              </li>
            ))}
          </ul>

          {/* Additional info */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-6 p-4 bg-gray-50 rounded-xl">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#e08f1f]" /> Posted: {job.posted}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#e08f1f]" /> Deadline: {job.deadline}</span>
            <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-[#e08f1f]" /> Experience: {job.experience}</span>
          </div>

          {submitted ? (
            <div className="bg-[#f0f7f1] border border-[#bbdbbf] rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#204527] text-xl mb-2">Application Sent!</h3>
              <p className="text-sm text-[#25552f]">
                Thank you, <strong>{form.name}</strong>! We&apos;ve received your application for <strong>{job.title}</strong> at {job.company}. Our team will be in touch within 2–3 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border-t border-gray-100 pt-6">
              <h3 className="font-semibold text-[#141719] mb-4">Apply for this Position</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#e08f1f] focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#e08f1f] focus:border-transparent transition"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+250 7XX XXX XXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#e08f1f] focus:border-transparent transition"
                />
              </div>
              <div className="mb-5">
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Cover Letter / Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us why you're the perfect fit for this role..."
                  value={form.cover}
                  onChange={(e) => setForm({ ...form, cover: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#e08f1f] focus:border-transparent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white font-semibold rounded-lg transition-colors shadow-md hover:opacity-90"
                style={{ background: "#e08f1f" }}
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
