import { MapPin, Clock, Users, Eye, Zap, ChevronRight } from "lucide-react";
import type { Job } from "@/lib/jobs";

const categoryColors: Record<string, string> = {
  Hotel:      "bg-blue-100 text-blue-700",
  Restaurant: "bg-orange-100 text-orange-700",
  Bar:        "bg-purple-100 text-purple-700",
  Lodge:      "bg-green-100 text-green-700",
  Lounge:     "bg-pink-100 text-pink-700",
};

interface Props {
  job: Job;
  onClick: (job: Job) => void;
}

export default function JobCard({ job, onClick }: Props) {
  const thousands = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);

  return (
    <div
      onClick={() => onClick(job)}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#eec163] transition-all duration-200 cursor-pointer group overflow-hidden flex flex-col"
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
    >
      {/* Banner image */}
      <div className="relative h-40 w-full overflow-hidden bg-gray-100 shrink-0">
        <img
          src={job.image}
          alt={job.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
          loading="lazy"
        />
        {/* Dark gradient over bottom of image */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)" }}
        />

        {job.urgent && (
          <span
            className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold shadow"
            style={{ background: "#ef4444", color: "#fff" }}
          >
            <Zap style={{ width: 10, height: 10 }} fill="white" /> Urgent
          </span>
        )}

        {/* Category pill — bottom left */}
        <span className={`absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryColors[job.category] ?? "bg-gray-100 text-gray-600"}`}>
          {job.category}
        </span>

        {/* Views — bottom right */}
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 text-white text-xs opacity-80">
          <Eye style={{ width: 11, height: 11 }} /> {thousands(job.views)}
        </span>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        {/* Company logo + info */}
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-sm"
            style={{ background: job.companyColor, letterSpacing: "0.05em" }}
          >
            {job.companyInitials}
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="font-semibold text-sm leading-snug mb-0.5 group-hover:text-[#c46e16] transition-colors line-clamp-2"
              style={{ color: "#141719" }}
            >
              {job.title}
            </h3>
            <p className="text-xs text-gray-500 truncate">{job.company}</p>
          </div>
        </div>

        {/* Location + type */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <MapPin style={{ width: 11, height: 11 }} /> {job.location}
          </span>
          <span className="text-gray-300">·</span>
          <span>{job.type}</span>
          <span className="text-gray-300">·</span>
          <span>{job.experience}</span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">
              {skill}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="px-2 py-0.5 bg-gray-100 text-gray-400 text-xs rounded-full">
              +{job.skills.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-end justify-between gap-2">
          <div>
            <div className="text-xs font-bold mb-0.5" style={{ color: "#2d6a38" }}>{job.salary}</div>
            <div className="flex items-center gap-2.5 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Users style={{ width: 10, height: 10 }} /> {job.applicants} applied
              </span>
              <span className="text-gray-300">·</span>
              <span className="flex items-center gap-1">
                <Clock style={{ width: 10, height: 10 }} /> {job.deadline}
              </span>
            </div>
          </div>
          <span
            className="inline-flex items-center gap-0.5 text-xs font-semibold whitespace-nowrap shrink-0"
            style={{ color: "#e08f1f" }}
          >
            Apply <ChevronRight style={{ width: 13, height: 13 }} />
          </span>
        </div>
      </div>
    </div>
  );
}
