import React, { useState } from 'react';
import Header from '@/components/layout/Header'; // Ensure this import exists
import Card from '@/components/common/Card';
import PostModal, { PostData } from '@/components/common/PostModal';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostData[]>([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitPost = (post: PostData) => {
    setPosts(prevPosts => [post, ...prevPosts]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Ensure Header component is used */}
      <main className="container mx-auto px-4 py-8">
        {/* ... rest of the home page content remains the same ... */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Home Page</h1>
          <p className="text-xl text-gray-600 mb-6">
            Welcome to the Home page featuring reusable Card components!
          </p>
          
          <button
            onClick={handleOpenModal}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
          >
            + Create New Post
          </button>
        </div>

        {/* User Created Posts */}
        {posts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              User Created Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  title={post.title}
                  content={post.content}
                  variant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'default'}
                  className="animate-fade-in"
                />
              ))}
            </div>
          </div>
        )}

        {/* Static Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Next.js Features"
            content="Next.js offers server-side rendering, static site generation, and file-based routing out of the box."
          />

          <Card
            title="TypeScript Benefits"
            content="TypeScript provides static typing, better IntelliSense, and early error detection."
            variant="primary"
          />

          <Card
            title="Tailwind CSS"
            content="Tailwind CSS is a utility-first CSS framework for rapid UI development."
            variant="secondary"
          />
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitPost}
        />
      </main>
    </div>
  );
};

export default HomePage;
