import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { stats } from "@/lib/jobs";
import { services } from "@/lib/services";

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
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            From a single hire to complete HR outsourcing — we support Rwanda&apos;s hospitality industry at every level.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-colors"
              style={{ background: "#e08f1f" }}
            >
              <Phone className="w-4 h-4" /> Get a Quote
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
            >
              Browse Jobs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden"
              >
                {/* Service image */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl">{service.emoji}</div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#e08f1f" }}>
                        {service.subtitle}
                      </div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#141719] text-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2 mb-5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#3d8549" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: "#e08f1f" }}
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
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
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-colors"
              style={{ background: "#e08f1f" }}
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
            >
              Browse Jobs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
