"use client";
import { useState, useMemo } from "react";
import { Search, X, ChevronDown, Zap, TrendingUp, Building2, Users } from "lucide-react";
import { jobs, categories, jobTypes, provinces } from "@/lib/jobs";
import JobCard from "@/components/JobCard";
import JobModal from "@/components/JobModal";
import type { Job } from "@/lib/jobs";

const experienceLevels = [
  "Any Experience",
  "No experience required",
  "1+ year",
  "2+ years",
  "3+ years",
  "4+ years",
  "5+ years",
  "6+ years",
  "7+ years",
  "10+ years",
];

export default function JobsPage() {
  const [query, setQuery]       = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType]         = useState("All Types");
  const [province, setProvince] = useState("All Provinces");
  const [expLevel, setExpLevel] = useState("Any Experience");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const q = query.toLowerCase();
      const matchQ =
        !query ||
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q) ||
        j.skills.some((s) => s.toLowerCase().includes(q));
      const matchCat  = category === "All" || j.category === category;
      const matchType = type === "All Types" || j.type === type;
      const matchProv = province === "All Provinces" || j.province === province;
      const matchExp  = expLevel === "Any Experience" || j.experience === expLevel;
      return matchQ && matchCat && matchType && matchProv && matchExp;
    });
  }, [query, category, type, province, expLevel]);

  const featured = jobs.filter((j) => j.featured);
  const urgentCount = filtered.filter((j) => j.urgent).length;

  const resetFilters = () => {
    setQuery("");
    setCategory("All");
    setType("All Types");
    setProvince("All Provinces");
    setExpLevel("Any Experience");
  };

  const hasActiveFilters =
    query || category !== "All" || type !== "All Types" || province !== "All Provinces" || expLevel !== "Any Experience";

  return (
    <div className="min-h-screen" style={{ background: "#f4f5f7" }}>
      {/* ── PAGE HEADER ────────────────────────────────────── */}
      <div style={{ background: "#141719" }} className="pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#e9a83b" }}>
              Browse Opportunities
            </div>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-1">
              Hospitality Jobs in Rwanda
            </h1>
            <p className="text-gray-400 text-sm">
              {jobs.length} open positions · hotels, restaurants, bars, lodges &amp; more
            </p>
          </div>

          {/* Search bar */}
          <div className="flex gap-2 max-w-2xl">
            <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
              <Search className="w-4 h-4 text-gray-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Job title, company, skill..."
                className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
              />
              {query && (
                <button onClick={() => setQuery("")}>
                  <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="sm:hidden flex items-center gap-2 px-4 py-3 bg-white rounded-xl text-sm font-medium text-gray-700 shadow-sm"
            >
              Filters {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-[#e08f1f]" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── QUICK STATS BAR ──────────────────────────────── */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 py-3 overflow-x-auto">
            {[
              { icon: Building2, label: "Hotels & Resorts", count: jobs.filter(j => j.category === "Hotel").length },
              { icon: Users,     label: "Restaurants",     count: jobs.filter(j => j.category === "Restaurant").length },
              { icon: TrendingUp,label: "Bars & Lounges",  count: jobs.filter(j => ["Bar","Lounge"].includes(j.category)).length },
              { icon: Zap,       label: "Lodges & Camps",  count: jobs.filter(j => j.category === "Lodge").length },
            ].map(({ icon: Icon, label, count }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap">
                <Icon className="w-4 h-4 text-[#e08f1f]" />
                <span className="font-semibold text-[#141719]">{count}</span> {label}
              </div>
            ))}
            <div className="ml-auto flex items-center gap-1.5 text-xs text-red-500 font-semibold whitespace-nowrap">
              <Zap className="w-3 h-3" fill="currentColor" />
              {jobs.filter(j => j.urgent).length} urgent openings
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6 items-start">

          {/* ── SIDEBAR ────────────────────────────────────── */}
          <aside
            className={`w-64 shrink-0 space-y-4 ${sidebarOpen ? "block" : "hidden"} sm:block`}
          >
            {/* Category */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-semibold text-[#141719] text-sm mb-3 flex items-center gap-2">
                <ChevronDown className="w-4 h-4 text-[#e08f1f]" /> Category
              </h3>
              <div className="space-y-2">
                {categories.map((c) => (
                  <label key={c} className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={category === c}
                      onChange={() => setCategory(c)}
                      className="accent-[#e08f1f] w-3.5 h-3.5"
                    />
                    <span className={`text-sm transition-colors ${category === c ? "font-semibold text-[#c46e16]" : "text-gray-600 group-hover:text-[#141719]"}`}>
                      {c}
                    </span>
                    <span className="ml-auto text-xs text-gray-400">
                      {c === "All" ? jobs.length : jobs.filter(j => j.category === c).length}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Job Type */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-semibold text-[#141719] text-sm mb-3 flex items-center gap-2">
                <ChevronDown className="w-4 h-4 text-[#e08f1f]" /> Job Type
              </h3>
              <div className="space-y-2">
                {jobTypes.map((t) => (
                  <label key={t} className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="radio"
                      name="type"
                      checked={type === t}
                      onChange={() => setType(t)}
                      className="accent-[#e08f1f] w-3.5 h-3.5"
                    />
                    <span className={`text-sm transition-colors ${type === t ? "font-semibold text-[#c46e16]" : "text-gray-600 group-hover:text-[#141719]"}`}>
                      {t}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Province */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-semibold text-[#141719] text-sm mb-3 flex items-center gap-2">
                <ChevronDown className="w-4 h-4 text-[#e08f1f]" /> Province
              </h3>
              <div className="space-y-2">
                {provinces.map((p) => (
                  <label key={p} className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="radio"
                      name="province"
                      checked={province === p}
                      onChange={() => setProvince(p)}
                      className="accent-[#e08f1f] w-3.5 h-3.5"
                    />
                    <span className={`text-sm transition-colors ${province === p ? "font-semibold text-[#c46e16]" : "text-gray-600 group-hover:text-[#141719]"}`}>
                      {p}
                    </span>
                    {p !== "All Provinces" && (
                      <span className="ml-auto text-xs text-gray-400">
                        {jobs.filter(j => j.province === p).length}
                      </span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-semibold text-[#141719] text-sm mb-3 flex items-center gap-2">
                <ChevronDown className="w-4 h-4 text-[#e08f1f]" /> Experience
              </h3>
              <select
                value={expLevel}
                onChange={(e) => setExpLevel(e.target.value)}
                className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#e08f1f] bg-white"
              >
                {experienceLevels.map((l) => <option key={l}>{l}</option>)}
              </select>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="w-full py-2.5 text-sm font-semibold rounded-xl border border-[#e08f1f] text-[#e08f1f] hover:bg-[#fdf8ee] transition-colors"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* ── MAIN CONTENT ────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* Featured jobs banner */}
            {!hasActiveFilters && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-[#e08f1f]" fill="#e08f1f" />
                  <h2 className="font-semibold text-[#141719] text-sm">Featured &amp; Urgent Openings</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                  {featured.map((job) => (
                    <div
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      className="relative bg-white rounded-2xl border-2 border-[#eec163] shadow-md hover:shadow-lg cursor-pointer overflow-hidden group transition-all duration-200"
                      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                    >
                      <div className="h-28 relative overflow-hidden">
                        <img
                          src={job.image}
                          alt={job.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                        />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.6) 0%,transparent 60%)" }} />
                        <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded-full text-white text-xs font-bold flex items-center gap-1" style={{ background: "#e08f1f" }}>
                          <Zap style={{ width: 9, height: 9 }} fill="white" /> Featured
                        </span>
                      </div>
                      <div className="p-3">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0"
                            style={{ background: job.companyColor }}
                          >
                            {job.companyInitials}
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-[#141719] truncate group-hover:text-[#c46e16] transition-colors">{job.title}</p>
                            <p className="text-xs text-gray-500 truncate">{job.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold" style={{ color: "#2d6a38" }}>{job.salary.split(" – ")[0]}+</span>
                          <span className="text-xs text-gray-400 flex items-center gap-1"><Users style={{ width: 10, height: 10 }} /> {job.applicants}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results header */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-500">
                Showing <span className="font-semibold text-[#141719]">{filtered.length}</span> of {jobs.length} jobs
                {urgentCount > 0 && (
                  <span className="ml-2 font-medium" style={{ color: "#ef4444" }}>· {urgentCount} urgent</span>
                )}
              </div>
              <div className="text-xs text-gray-400">Sorted by: Latest</div>
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((job) => (
                  <JobCard key={job.id} job={job} onClick={setSelectedJob} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 text-center py-20 text-gray-400 shadow-sm">
                <div className="text-5xl mb-4">🔍</div>
                <p className="font-semibold text-[#141719] mb-1">No jobs match your filters</p>
                <p className="text-sm mb-4">Try broadening your search or clearing some filters</p>
                <button
                  onClick={resetFilters}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: "#e08f1f" }}
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination (decorative) */}
            {filtered.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
                      n === 1
                        ? "text-white shadow-sm"
                        : "text-gray-500 bg-white border border-gray-200 hover:border-[#e08f1f] hover:text-[#e08f1f]"
                    }`}
                    style={n === 1 ? { background: "#e08f1f" } : {}}
                  >
                    {n}
                  </button>
                ))}
                <span className="text-gray-400 text-sm px-1">…</span>
                <button className="w-9 h-9 rounded-lg text-sm font-semibold text-gray-500 bg-white border border-gray-200 hover:border-[#e08f1f] hover:text-[#e08f1f] transition-colors">
                  8
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
}
