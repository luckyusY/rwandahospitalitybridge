"use client";
import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { jobs, categories, jobTypes } from "@/lib/jobs";
import JobCard from "@/components/JobCard";
import JobModal from "@/components/JobModal";
import type { Job } from "@/lib/jobs";

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All Types");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const q = query.toLowerCase();
      const matchQ =
        !query ||
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q);
      const matchCat = category === "All" || j.category === category;
      const matchType = type === "All Types" || j.type === type;
      return matchQ && matchCat && matchType;
    });
  }, [query, category, type]);

  const urgentCount = filtered.filter((j) => j.urgent).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#141719] pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-2">
            Hospitality Jobs in Rwanda
          </h1>
          <p className="text-gray-400 text-base">
            {jobs.length} open positions across hotels, restaurants, bars, lodges &amp; more
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex items-center gap-3 px-4 py-2.5 border border-gray-200 rounded-xl focus-within:ring-2 focus-within:ring-[#e08f1f] focus-within:border-transparent transition">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jobs, companies, locations..."
              className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
            {query && (
              <button onClick={() => setQuery("")}>
                <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#e08f1f] bg-white"
          >
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#e08f1f] bg-white"
          >
            {jobTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>

        {/* Result count */}
        <div className="flex items-center justify-between mb-5">
          <div className="text-sm text-gray-500">
            Showing <span className="font-semibold text-[#141719]">{filtered.length}</span> jobs
            {urgentCount > 0 && (
              <span className="ml-2 text-red-600 font-medium">· {urgentCount} urgent</span>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <SlidersHorizontal className="w-4 h-4" />
            Sorted by: Latest
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} onClick={setSelectedJob} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-semibold text-[#141719] mb-1">No jobs found</p>
            <p className="text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
}
