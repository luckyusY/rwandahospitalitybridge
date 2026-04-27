import Image from "next/image";
import { MapPin, Clock, Briefcase, ChevronRight, Zap } from "lucide-react";
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
  return (
    <div
      onClick={() => onClick(job)}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#eec163] transition-all duration-200 cursor-pointer group overflow-hidden"
      style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
    >
      {/* Job image */}
      <div className="relative h-36 w-full overflow-hidden bg-gray-100">
        <img
          src={job.image}
          alt={job.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
          loading="lazy"
        />
        {job.urgent && (
          <span
            className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
            style={{ background: "#ef4444", color: "#fff" }}
          >
            <Zap style={{ width: 10, height: 10 }} /> Urgent
          </span>
        )}
        {/* Category pill overlaid */}
        <span
          className={`absolute bottom-2 left-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[job.category] ?? "bg-gray-100 text-gray-600"}`}
        >
          {job.category}
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-start gap-3 mb-2">
          {/* Logo Badge */}
          <div
            className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-xl shrink-0"
            style={{ fontSize: 20 }}
          >
            {job.logo}
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="font-semibold text-sm leading-tight mb-0.5 group-hover:text-[#c46e16] transition-colors"
              style={{ color: "#141719" }}
            >
              {job.title}
            </h3>
            <p className="text-xs font-medium" style={{ color: "#4b5563" }}>{job.company}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
            <Briefcase style={{ width: 10, height: 10 }} /> {job.type}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
            <MapPin style={{ width: 10, height: 10 }} /> {job.location}
          </span>
        </div>

        <div
          className="flex items-center justify-between pt-3 border-t border-gray-50"
        >
          <div>
            <div className="text-xs font-bold" style={{ color: "#2d6a38" }}>{job.salary}</div>
            <div className="flex items-center gap-1 text-xs mt-0.5" style={{ color: "#9ca3af" }}>
              <Clock style={{ width: 10, height: 10 }} /> {job.posted}
            </div>
          </div>
          <span
            className="text-xs font-semibold flex items-center gap-1"
            style={{ color: "#e08f1f", transition: "gap 0.2s" }}
          >
            Apply <ChevronRight style={{ width: 14, height: 14 }} />
          </span>
        </div>
      </div>
    </div>
  );
}
