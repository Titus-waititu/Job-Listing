import { useState } from "react";
import type { FilterType } from "../types";

const FilterData: FilterType[] = [
  "Frontend",
  "Backend",
  "Fullstack",
  "Junior",
  "Midweight",
  "Senior",
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "React",
  "Sass",
];

const FilterButtons = () => {
  const [filters, setFilters] = useState<FilterType[]>([]);

  const toggleFilter = (filter: FilterType) => {
    setFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );FilterData
  };

//   const clearFilters = () => {
//     setFilters([]);
//   };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Filter by:</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {FilterData.map((filter) => (
          <button
            key={filter}
            className={`px-3 py-1 rounded-full text-sm border ${
              filters.includes(filter)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
            onClick={() => toggleFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      {/* {filters.length > 0 && (
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Active Filters: {filters.join(", ")}
          </span>
          <button
            className="text-sm text-red-600 hover:underline"
            onClick={clearFilters}
          >
            Clear All
          </button>
        </div>
      )} */}
    </div>
  );
};

export default FilterButtons;
