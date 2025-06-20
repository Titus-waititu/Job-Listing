import type { JobData, FilterType } from "../types";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: JobData[];
  filters: FilterType[];
  onJobClick: (tag: FilterType) => void;
}

export default function JobList({ jobs, filters, onJobClick }: JobListProps) {
  const filteredJobs = jobs.filter((job) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.length === 0 || filters.every((filter) => tags.includes(filter));
  });

  if (filteredJobs.length === 0) {
    return (
      <div className="text-center">
        <div className=" mb-4 rounded-full bg-gray-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No jobs found
        </h3>
        <p className="text-gray-500">
          {filters.length > 0
            ? "No job listings match the selected filters."
            : "No job listings available at the moment."}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} onTagClick={onJobClick} />
      ))}
    </div>
  );
}
