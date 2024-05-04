import React, { useState, useEffect } from 'react';

interface Props {}

// Mock API function to simulate fetching data
const fetchData = async (query: string, signal: AbortSignal): Promise<string[]> => {
  if (query.length === 0) {
    return [];
  }
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      resolve([`${query} data 1`, `${query} data 2`, `${query} data 3`]);
    }, 1000 + Math.random() * 2000); // simulate network delay

    signal.addEventListener('abort', () => {
      clearTimeout(timeout);
      reject(new DOMException('The user aborted a request.', 'AbortError'));
    });
  });
};

const SearchManager: React.FC<Props> = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    setError(null);
    fetchData(query, signal)
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError('Failed to fetch data');
          setLoading(false);
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
        {data.map((item, index) => (
          <li key={index} className="list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchManager;