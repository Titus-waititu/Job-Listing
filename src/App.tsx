import { useState } from 'react';
import './index.css';
import JobList from './components/JobList';
import type { JobData, FilterType } from './types';
import { Data } from './data/data';

function App() {
  const [jobs] = useState<JobData[]>(Data);
  const [filters, setFilters] = useState<FilterType[]>([]);

  const addFilter = (filter: FilterType) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filter: FilterType) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const clearFilters = () => setFilters([]);

  const handleJobTagClick = (tag: FilterType) => {
    addFilter(tag);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans m-2">
   
      {filters.length > 0 && (
        <div className="relative z-10 -mt-8 mb-8 mx-auto w-11/12 max-w-5xl bg-white shadow-lg rounded-lg flex flex-wrap items-center px-6 py-4">
          <div className="flex flex-wrap gap-4 flex-1">
            {filters.map((filter) => (
              <span key={filter} className="flex items-center bg-cyan-200 text-emerald-800 font-semibold rounded overflow-hidden">
                <span className="px-3 py-1">{filter}</span>
                <button
                  className="bg-cyan-200 hover:bg-black text-emerald-900 px-2 py-1"
                  onClick={() => removeFilter(filter)}
                  aria-label={`Remove ${filter}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <button
            className="ml-6 text-emerald-600 hover:underline font-bold"
            onClick={clearFilters}
          >
            Clear
          </button>
        </div>
      )}
      {/* Job List */}
      <main className="mx-auto w-11/12 max-w-5xl">
        <JobList jobs={jobs} filters={filters} onJobClick={handleJobTagClick} />
      </main>
    </div>
  );
}

export default App;
