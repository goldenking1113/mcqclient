import React, { useEffect, useState } from 'react';
import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Coding() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://mcqbackend-suar.onrender.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

// Find two or more spaces and replace them with three spaces
const processCode1 = (code) => {
    return code.replace(/ {2,}/g, '   ');
  };

  const processCode = (processCode1) => {
    return processCode1.split('   ').join('\n');
  };

  return (
    <div className="flex flex-wrap gap-4 p-6 justify-center text-lg font-serif">
      {data
        .filter(item => item.question.includes('Coding Question:'))
        .map(item => (
          <div
            key={item._id}
            className="bg-gray-100 text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full"
          >
            <SyntaxHighlighter
              language="cpp"
              style={dracula}
              customStyle={{
                whiteSpace: 'pre-wrap',
                overflowWrap: 'break-word',
              }}
            >
              {processCode(item.answer)}
            </SyntaxHighlighter>
          </div>
        ))}
    </div>
  );
}
