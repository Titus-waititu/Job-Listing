import type { JobData, FilterType } from "../types";

interface JobCardProps {
  job: JobData;
  onTagClick: (tag: FilterType) => void;
}

const JobCard = ({ job, onTagClick }: JobCardProps) => {
  const tags: FilterType[] = [
    job.role as FilterType,
    job.level as FilterType,
    ...(job.languages as FilterType[]),
    ...(job.tools as FilterType[]),
  ];

  return (
    <div
  className={`relative bg-white shadow-md rounded-lg p-4 flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-center border-l-4 ${
    job.featured ? "border-emerald-700" : "border-transparent"
  } transition-shadow duration-300 mt-6 sm:mt-0`}
>
      <img
        src={job.logo}
        alt={job.company}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 -mt-12 sm:mt-0 sm:mr-6 md:mr-8 rounded-full bg-amber-500 shadow-md border"
        style={{ objectFit: "contain" }}
      />
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <h3 className="text-emerald-800 font-bold text-lg">
            {job.company}
          </h3>
          <div className="flex gap-2">
            {job.new && (
              <span className="uppercase text-xs bg-emerald-800 text-white rounded-full px-2 py-1 font-bold">
                New!
              </span>
            )}
            {job.featured && (
              <span className="uppercase text-xs bg-gray-900 text-white rounded-full px-2 py-1 font-bold">
                Featured
              </span>
            )}
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-900 hover:text-emerald-600 cursor-pointer">
          {job.position}
        </h2>
        <div className="flex flex-wrap gap-2 text-gray-500 text-sm">
          <span>{job.postedAt}</span>
          <span>•</span>
          <span>{job.contract}</span>
          <span>•</span>
          <span>{job.location}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 sm:ml-auto">
        {tags.map((tag) => (
          <button
            key={tag}
            className="bg-emerald-200 text-emerald-900 font-semibold px-3 py-1 rounded hover:bg-emerald-800 hover:text-white transition"
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobCard;