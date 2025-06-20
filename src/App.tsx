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
    <div className="min-h-screen bg-gray-100 font-sans pb-5 m-2 mb-3">
  <header className="mb-8 bg-emerald-700">
  {/* Mobile background */}
  <img
    src="images/bg-header-mobile.svg"
    alt=""
    className="block md:hidden w-full"
  />
  
  {/* Desktop background */}
  <img
    src="images/bg-header-desktop.svg"
    alt=""
    className="hidden md:block w-full"
  />
</header>

      {filters.length > 0 && (
        <div className="relative z-10 -mt-14 mb-8 mx-auto w-11/12 max-w-5xl bg-white shadow-lg rounded-lg flex flex-wrap items-center px-6 py-4">
          <div className="flex flex-wrap gap-4 flex-1">
            {filters.map((filter) => (
              <span key={filter} className="flex items-center bg-cyan-200 text-emerald-800 font-semibold rounded overflow-hidden">
                <span className="px-3 py-1">{filter}</span>
                <button
                  className="bg-emerald-700 hover:bg-black text-emerald-900 px-2 py-2"
                  onClick={() => removeFilter(filter)}
                  aria-label={`Remove ${filter}`}
                >
                  <img src="images/icon-remove.svg" alt="" />
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
