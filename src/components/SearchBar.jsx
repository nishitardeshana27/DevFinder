import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search GitHub username..."
        className="flex-1 px-4 py-2 rounded-lg shadow border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
