'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Page = () => {
  const router = useRouter();

  const onLogout = async () => {
    try {
      await axios.get('/api/users/logout');
      router.push(`/login`);
      console.log('logut successful');
      
    } catch (error) {
      console.log(error);
    }
  };

  // Sample data
  const sampleData = [
    { id: 1, title: 'Sample Blog 1', summary: 'This is a brief summary of the first sample blog.' },
    { id: 2, title: 'Sample Blog 2', summary: 'This is a brief summary of the second sample blog.' },
    { id: 3, title: 'Sample Blog 3', summary: 'This is a brief summary of the third sample blog.' },
  ];

  return (
    <div className="flex flex-col gap-6 justify-center items-center p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-100 mb-6">Dashboard</h1>
      
      <div className="w-full bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Recent Blogs</h2>
        <ul className="space-y-4">
          {sampleData.map(blog => (
            <li key={blog.id} className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-gray-100">{blog.title}</h3>
              <p className="text-gray-400">{blog.summary}</p>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onLogout}
        className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Page;
