"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  { Icon: MapPin, label: "Address", value: "KG 7 Ave, Kiyovu, Kigali, Rwanda" },
  { Icon: Phone,  label: "Phone",   value: "+250 788 000 000" },
  { Icon: Mail,   label: "Email",   value: "hello@rwandahospitalitybridge.rw" },
  { Icon: Clock,  label: "Hours",   value: "Mon – Fri: 8am – 6pm  |  Sat: 9am – 1pm" },
];

type Subject = "hiring" | "jobseeker" | "other";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "hiring" as Subject, message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#141719] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#e9a83b" }}>
            Get In Touch
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Whether you want to hire talent or find your next role — we&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-[#141719] text-xl mb-5">
                  Our Details
                </h2>
                <div className="space-y-4">
                  {contactInfo.map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "#fdf8ee" }}
                      >
                        <Icon className="w-5 h-5" style={{ color: "#e08f1f" }} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</div>
                        <div className="text-sm text-[#141719] mt-0.5">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6 text-white" style={{ background: "#204527" }}>
                <h3 className="font-semibold text-lg mb-2">Looking to Post a Job?</h3>
                <p className="text-green-200 text-sm leading-relaxed mb-4">
                  Tell us your staffing needs and we&apos;ll start sourcing candidates within 24 hours.
                </p>
                <div className="text-sm font-semibold" style={{ color: "#e9a83b" }}>
                  Typical response: &lt; 2 hours
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                {sent ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-14 h-14 mx-auto mb-4" style={{ color: "#3d8549" }} />
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-2xl text-[#141719] mb-3">
                      Message Received!
                    </h3>
                    <p className="text-gray-500 max-w-sm mx-auto">
                      Thank you, <strong>{form.name}</strong>! Our team will get back to you at{" "}
                      <strong>{form.email}</strong> within one business day.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "hiring", message: "" }); }}
                      className="mt-6 text-sm font-semibold hover:underline"
                      style={{ color: "#e08f1f" }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="font-[family-name:var(--font-heading)] font-bold text-[#141719] text-xl mb-6">
                      Send a Message
                    </h2>

                    {/* Subject tabs */}
                    <div className="mb-5">
                      <label className="block text-xs font-medium text-gray-700 mb-2">I am a...</label>
                      <div className="flex gap-2">
                        {([
                          { val: "hiring",    label: "Business / Employer" },
                          { val: "jobseeker", label: "Job Seeker"          },
                          { val: "other",     label: "Other"               },
                        ] as { val: Subject; label: string }[]).map(({ val, label }) => (
                          <button
                            key={val}
                            type="button"
                            onClick={() => setForm({ ...form, subject: val })}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${
                              form.subject === val
                                ? "text-white border-transparent"
                                : "border-gray-200 text-gray-600 hover:border-[#e9a83b]"
                            }`}
                            style={form.subject === val ? { background: "#e08f1f", borderColor: "#e08f1f" } : {}}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#e08f1f] focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1.5">Email *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#e08f1f] focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+250 7XX XXX XXX"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#e08f1f] focus:border-transparent transition"
                      />
                    </div>

                    <div className="mb-5">
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder={
                          form.subject === "hiring"
                            ? "Tell us about your establishment and what roles you need to fill..."
                            : form.subject === "jobseeker"
                            ? "Tell us about your background and the type of role you are looking for..."
                            : "How can we help you?"
                        }
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#e08f1f] focus:border-transparent transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 text-white font-semibold rounded-lg shadow-md transition-colors hover:opacity-90"
                      style={{ background: "#e08f1f" }}
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
