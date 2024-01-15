import React from 'react';
import BlogPost from './BlogPost';

const SampleBlogPage = () => {
  // Sample blog post data
  const blogPosts = [{
    title: 'Getting Started with Tailwind CSS',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    date: 'January 15, 2024',
    author: 'John Doe',
  }, {
    title: 'Another Blog Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    date: 'February 1, 2024',
    author: 'Jane Smith',
  }];

  return (
    <div>
      {blogPosts.map((blog, index) => (
        <BlogPost
          key={index} // Provide a unique key for each iteration
          title={blog.title}
          content={blog.content}
          date={blog.date}
          author={blog.author}
        />
      ))}
    </div>
  );
};

export default SampleBlogPage;
