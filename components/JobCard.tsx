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
      className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#eec163] transition-all duration-200 p-5 cursor-pointer group"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl shrink-0">
          {job.logo}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-[#141719] group-hover:text-[#c46e16] transition-colors leading-tight">
              {job.title}
            </h3>
            {job.urgent && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-medium shrink-0">
                <Zap className="w-3 h-3" /> Urgent
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 font-medium mb-3">{job.company}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[job.category] ?? "bg-gray-100 text-gray-600"}`}>
              {job.category}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
              <Briefcase className="w-3 h-3" /> {job.type}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
              <MapPin className="w-3 h-3" /> {job.location}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[#2d6a38]">{job.salary}</span>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="w-3 h-3" /> {job.posted}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
        <span className="text-xs text-gray-400">{job.experience} experience</span>
        <span className="text-xs font-semibold text-[#e08f1f] flex items-center gap-1 group-hover:gap-2 transition-all">
          Apply Now <ChevronRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
}
