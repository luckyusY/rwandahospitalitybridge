"use client";
import { useState } from "react";
import { X, MapPin, Briefcase, DollarSign, CheckCircle, Zap } from "lucide-react";
import type { Job } from "@/lib/jobs";

interface Props {
  job: Job | null;
  onClose: () => void;
}

export default function JobModal({ job, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", cover: "" });

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-xl">
              {job.logo}
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-[#141719] text-lg leading-tight">{job.title}</h2>
              <p className="text-sm text-gray-500">{job.company}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {job.urgent && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-medium">
                <Zap className="w-3 h-3" /> Urgent Hire
              </span>
            )}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
              <MapPin className="w-3 h-3" /> {job.location}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
              <Briefcase className="w-3 h-3" /> {job.type}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
              <DollarSign className="w-3 h-3" /> {job.salary}
            </span>
          </div>

          <h3 className="font-semibold text-[#141719] mb-2">About the Role</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">{job.description}</p>

          <h3 className="font-semibold text-[#141719] mb-3">Requirements</h3>
          <ul className="space-y-2 mb-6">
            {job.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-[#3d8549] mt-0.5 shrink-0" />
                {req}
              </li>
            ))}
          </ul>

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
                className="w-full py-3 bg-[#e08f1f] hover:bg-[#c46e16] text-white font-semibold rounded-lg transition-colors shadow-md"
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
