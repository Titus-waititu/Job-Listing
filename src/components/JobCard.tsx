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
      className={`relative bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row md:items-center border-l-4 ${
        job.featured ? "border-blue-700" : "border-transparent"
      } transition-shadow duration-300`}
    >
      <img
        src={job.logo}
        alt={job.company}
        className="w-16 h-16 md:w-24 md:h-24 -mt-12 md:mt-0 md:mr-8 rounded-full bg-amber-500 shadow-md border"
        style={{ objectFit: "contain" }}
      />
      <div className="flex-1 flex flex-col gap-2 mt-4 md:mt-0">
        <div className="flex items-center gap-4">
          <h3 className="text-blue-700 font-bold text-lg mr-2">
            {job.company}
          </h3>
          {job.new && (
            <span className="uppercase text-xs bg-blue-700 text-white rounded-full px-2 py-1 font-bold">
              New!
            </span>
          )}
          {job.featured && (
            <span className="uppercase text-xs bg-gray-900 text-white rounded-full px-2 py-1 font-bold">
              Featured
            </span>
          )}
        </div>
        <h2 className="text-xl font-bold text-gray-900 hover:text-blue-700 cursor-pointer">
          {job.position}
        </h2>
        <div className="flex gap-2 text-gray-500 text-sm">
          <span>{job.postedAt}</span>
          <span>•</span>
          <span>{job.contract}</span>
          <span>•</span>
          <span>{job.location}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-4 md:mt-0 md:ml-auto">
        {tags.map((tag) => (
          <button
            key={tag}
            className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full hover:bg-blue-700 hover:text-white transition"
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
