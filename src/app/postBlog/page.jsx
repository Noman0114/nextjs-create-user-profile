'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Page = () => {
    const router = useRouter();
    const [blog, setBlog] = useState({
        blogTitle: '',
        blogValue: '',
    });

    const blogClick = async () => {
        try {
            const response = await axios.post('/api/blogs/postblog', blog);
            console.log(response.data);
            router.push(`/blog`);
        } catch (error) {
            console.log('Error: ' + error);
        }
    };

    return (
        <div className="flex flex-col gap-4 items-center p-6 bg-gray-900 min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-4">Upload Blog</h1>
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                <label htmlFor="blogTitle" className="block text-white text-lg font-medium mb-2">Title</label>
                <input
                    type="text"
                    id="blogTitle"
                    className="w-full border border-gray-700 bg-gray-900 text-white p-3 rounded-lg mb-4"
                    placeholder="Enter Title"
                    onChange={(e) => setBlog({ ...blog, blogTitle: e.target.value })}
                    required
                />

                <label htmlFor="blogValue" className="block text-white text-lg font-medium mb-2">Data</label>
                <textarea
                    id="blogValue"
                    placeholder="Enter Data"
                    className="w-full border border-gray-700 bg-gray-900 text-white p-3 rounded-lg h-48 resize-none mb-4"
                    onChange={(e) => setBlog({ ...blog, blogValue: e.target.value })}
                    required
                />

                <button
                    onClick={blogClick}
                    className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                    Upload
                </button>
            </div>
        </div>
    );
};

export default Page;
