import React, { useEffect, useState } from 'react';

export default function Status() {
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetch('https://mcqcrack.onrender.com')
      .then(response => {
        if (response.ok) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching API status:', error);
        setIsActive(false);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex justify-end p-4">
      {isLoading ? (
        <button
          aria-label="Loading..."
          role="status"
          className="flex items-center space-x-2 p-2 bg-gray-200 rounded"
        >
          <svg className="h-5 w-5 animate-spin stroke-gray-500" viewBox="0 0 256 256">
            <line
              x1={128}
              y1={32}
              x2={128}
              y2={64}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
            />
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
            />
            <line
              x1={224}
              y1={128}
              x2={192}
              y2={128}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
            />
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
            />
            <line
              x1={128}
              y1={224}
              x2={128}
              y2={192}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
            />
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
            />
            <line
              x1={32}
              y1={128}
              x2={64}
              y2={128}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
            />
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={16}
            />
          </svg>
          <span className="text-sm font-medium text-gray-500">Loading...</span>
        </button>
      ) : (
        <button
          aria-label="Active"
          role="status"
          className="flex items-center space-x-2 p-2 bg-green-200 rounded"
        >
          <svg className="h-5 w-5 stroke-green-500" viewBox="0 0 256 256">
            <circle cx="128" cy="128" r="96" stroke="currentColor" strokeWidth="16" fill="none" />
            <polyline
              points="96 128 128 160 192 96"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
          <span className="text-sm font-medium text-green-500">Active</span>
        </button>
      )}
    </div>
  );
}