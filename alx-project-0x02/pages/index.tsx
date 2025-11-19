import React from 'react';
import Header from '@/components/layout/Header'; // Add Header import
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Add Header component */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to ALX Project 2
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Next.js Project with TypeScript and Tailwind CSS
          </p>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Main Landing Page
            </h2>
            <p className="text-gray-600 mb-4">
              Welcome to our Next.js project! Use the navigation to explore different pages:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Link href="/home" className="bg-blue-100 p-4 rounded-lg text-blue-700 hover:bg-blue-200 transition-colors">
                <h3 className="font-semibold mb-2">🏠 Home</h3>
                <p className="text-sm">View card components and create posts</p>
              </Link>
              <Link href="/about" className="bg-green-100 p-4 rounded-lg text-green-700 hover:bg-green-200 transition-colors">
                <h3 className="font-semibold mb-2">ℹ️ About</h3>
                <p className="text-sm">Explore button component variations</p>
              </Link>
              <Link href="/posts" className="bg-purple-100 p-4 rounded-lg text-purple-700 hover:bg-purple-200 transition-colors">
                <h3 className="font-semibold mb-2">📝 Posts</h3>
                <p className="text-sm">Browse our collection of articles</p>
              </Link>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-700">
                <strong>Note:</strong> We're using Next.js Pages Router with reusable components and proper navigation.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
