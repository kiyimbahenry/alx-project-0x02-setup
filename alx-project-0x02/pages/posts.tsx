import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type JsonPlaceholderPost, type PostProps } from '@/interfaces';

// This function runs at build time
export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    
    const data: JsonPlaceholderPost[] = await response.json();
    
    // Transform JSONPlaceholder data to match our PostProps interface
    const posts: PostProps[] = data.slice(0, 12).map(post => ({
      id: post.id,
      title: post.title,
      content: post.body,
      userId: post.userId
    }));
    
    return {
      props: {
        initialPosts: posts
      },
      // Re-generate the page at most once every 60 seconds
      revalidate: 60
    };
  } catch (error) {
    return {
      props: {
        initialPosts: [],
        error: error instanceof Error ? error.message : 'An error occurred'
      }
    };
  }
}

interface PostsPageProps {
  initialPosts: PostProps[];
  error?: string;
}

const PostsPage: React.FC<PostsPageProps> = ({ initialPosts, error: initialError }) => {
  const [posts, setPosts] = useState<PostProps[]>(initialPosts);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(initialError || null);

  // Client-side refresh function
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status}`);
      }
      
      const data: JsonPlaceholderPost[] = await response.json();
      
      // Transform JSONPlaceholder data to match our PostProps interface
      const transformedPosts: PostProps[] = data.slice(0, 12).map(post => ({
        id: post.id,
        title: post.title,
        content: post.body,
        userId: post.userId
      }));
      
      setPosts(transformedPosts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Handle refresh
  const handleRefresh = () => {
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Posts Page</h1>
          <p className="text-xl text-gray-600 mb-6">
            Explore posts fetched from JSONPlaceholder API
          </p>
          
          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Loading...' : 'Refresh Posts'}
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading posts from JSONPlaceholder...</p>
          </div>
        )}

        {/* Error State */}
        {(error || initialError) && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center mb-8">
            <h3 className="text-red-800 font-semibold text-lg mb-2">Error Loading Posts</h3>
            <p className="text-red-600 mb-4">{error || initialError}</p>
            <button
              onClick={handleRefresh}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Posts Grid */}
        {!loading && !error && !initialError && (
          <>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                Latest Posts ({posts.length})
              </h2>
              <span className="text-sm text-gray-500">
                Data from JSONPlaceholder
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  content={post.content}
                  userId={post.userId}
                />
              ))}
            </div>

            {/* API Information */}
            <div className="mt-12 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                About the Data
              </h3>
              <p className="text-blue-700 mb-2">
                This data is fetched from <strong>JSONPlaceholder</strong>, a free fake API for testing and prototyping.
              </p>
              <p className="text-blue-700 text-sm">
                The API provides 100 sample posts. We're displaying the first 12 posts for demonstration.
              </p>
              <p className="text-blue-700 text-sm mt-2">
                <strong>Note:</strong> This page uses getStaticProps for server-side data fetching at build time.
              </p>
            </div>
          </>
        )}

        {/* Empty State */}
        {!loading && !error && !initialError && posts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-4">
              No posts found
            </h3>
            <button
              onClick={handleRefresh}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Load Posts
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default PostsPage;
