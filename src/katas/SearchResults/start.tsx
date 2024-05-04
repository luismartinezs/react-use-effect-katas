import React, { useState, useEffect } from 'react';

interface Props {}

const fetchData = async (query: string, signal: AbortSignal): Promise<string[]> => {
  const response = await fetch(`https://api.example.com/search?q=${query}`, { signal });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const SearchResults: React.FC<Props> = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    setError(null);

    // TODO: Complete the fetchData call and handle the promise results
    fetchData(query, signal)
      .then(data => {
        // TODO: Update the state with the fetched data
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          // TODO: Handle errors that are not abort errors
        }
      });

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 w-full mb-4"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <ul>
        {results.map((result, index) => (
          <li key={index} className="list-disc">
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;