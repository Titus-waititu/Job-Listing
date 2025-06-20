import { useState } from 'react';
import './index.css';
import JobList from './components/JobList';
import type { JobData, FilterType } from './types';
import { Data } from './data/data';

function App() {
  const [jobs] = useState<JobData[]>(Data);
  const [filters, setFilters] = useState<FilterType[]>([]);

  // Add filter if not already present
  const addFilter = (filter: FilterType) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  // Remove a filter
  const removeFilter = (filter: FilterType) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  // Clear all filters
  const clearFilters = () => setFilters([]);

  // When a tag is clicked on a job card
  const handleJobTagClick = (tag: FilterType) => {
    addFilter(tag);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="w-full h-36 bg-desktop-header bg-cover bg-center md:h-48">
        {/* You can use bg-[url('/path/to/bg-header-desktop.svg')] if Tailwind config is extended */}
      </header>
      {/* Filter Bar */}
      {filters.length > 0 && (
        <div className="relative z-10 -mt-8 mb-8 mx-auto w-11/12 max-w-5xl bg-white shadow-lg rounded-lg flex flex-wrap items-center px-6 py-4">
          <div className="flex flex-wrap gap-4 flex-1">
            {filters.map((filter) => (
              <span key={filter} className="flex items-center bg-blue-100 text-blue-700 font-semibold rounded overflow-hidden">
                <span className="px-3 py-1">{filter}</span>
                <button
                  className="bg-blue-700 hover:bg-blue-900 text-white px-2 py-1"
                  onClick={() => removeFilter(filter)}
                  aria-label={`Remove ${filter}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <button
            className="ml-6 text-blue-700 hover:underline font-bold"
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
