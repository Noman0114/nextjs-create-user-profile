import React from 'react';

// Fetch blogs from the API on the server-side
async function fetchBlogs() {
  const res = await fetch('https://nextjs-create-user-profile.vercel.app/api/blogs/getBlogs',{ cache: 'no-store',} );
  if (!res.ok) {
    throw new Error('Failed to fetch blog data');
  }
  return res.json();
}

export default async function BlogsPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Blog Posts</h1>
      {blogs.length > 0 ? (
        <ul className="space-y-6">
          {blogs.map((blog) => (
            <li 
              key={blog._id} 
              className="p-6 bg-gray-800 shadow-md rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:max-w-[98%] overflow-hidden opacity-100 animate-fadeIn"
            >
              <h2 className="text-2xl font-semibold mb-2 text-white capitalize">
                {blog.blogTitle}
              </h2>
              <p className="text-gray-400">{blog.blogValue}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-400">No blogs available</p>
      )}
    </div>
  );
}
