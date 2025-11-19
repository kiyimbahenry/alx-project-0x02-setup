import React from 'react';
import Header from '../components/layout/Header';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Home Page</h1>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-4">
              Welcome to the Home page of our ALX Next.js project!
            </p>
            <div className="text-left space-y-3">
              <h2 className="text-2xl font-semibold text-gray-700">What is Next.js?</h2>
              <p className="text-gray-600">
                Next.js is a React framework that enables server-side rendering and 
                static site generation for React applications.
              </p>
              <h2 className="text-2xl font-semibold text-gray-700">Features:</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Server-side rendering</li>
                <li>Static site generation</li>
                <li>File-based routing</li>
                <li>API routes</li>
                <li>Built-in CSS support</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
