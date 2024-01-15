// components/BlogPost.js

import React from 'react';

const BlogPost = ({ title, content, date, author }:any) => {
  return (
    <div className="max-w-2xl mx-auto my-8 bg-white p-6 shadow-orange-600 rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-2">Published on {date} by {author}</p>
      <div className="prose">{content}</div>
    </div>
  );
};

export default BlogPost;
