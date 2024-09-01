import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Status from './Status';
import Buttons from './Buttons';

export default function MCQ() {
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

  return (
    <div className="flex flex-wrap gap-4 p-6 justify-center text-lg font-serif">
    {data
      .filter(item => !item.question.includes('Coding Question:'))
      .map((item, index) => (
        <p
          key={item._id}
          className="bg-gray-100 text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full"
        >
          {item.answer}
          <div className="text-gray-500 font-thin text-sm pt-1">
            <span>{item.question}</span>
          </div>
        </p>
      ))}
  </div>  )
}
