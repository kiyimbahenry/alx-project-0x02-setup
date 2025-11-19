import React from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

const PostsPage: React.FC = () => {
  const samplePosts = [
    {
      title: "Getting Started with Next.js",
      content: "Learn how to set up your first Next.js project with TypeScript and Tailwind CSS for optimal development experience.",
    },
    {
      title: "React Components Best Practices",
      content: "Discover how to create reusable, maintainable React components with proper TypeScript typing and composition.",
    },
    {
      title: "Tailwind CSS Tips",
      content: "Master Tailwind CSS with these practical tips for responsive design and efficient styling workflows.",
    },
    {
      title: "TypeScript for React Developers",
      content: "Understand how TypeScript enhances your React development with better autocomplete and error detection.",
    },
    {
      title: "Next.js Routing Explained",
      content: "Deep dive into Next.js routing system including dynamic routes, nested routes, and route protection.",
    },
    {
      title: "State Management Strategies",
      content: "Explore different state management approaches in React applications from local state to global state solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Posts Page</h1>
          <p className="text-xl text-gray-600">
            Explore our collection of articles and tutorials about web development.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samplePosts.map((post, index) => (
            <Card
              key={index}
              title={post.title}
              content={post.content}
              variant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'default'}
              className="h-full flex flex-col"
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Want to contribute?
          </h2>
          <p className="text-gray-600 mb-4">
            Share your knowledge and write a post for our community.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Write a Post
          </button>
        </div>
      </main>
    </div>
  );
};

export default PostsPage;
