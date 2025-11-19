import React from 'react';
import Header from '../components/layout/Header';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Page</h1>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-4">
              Learn more about our project and team.
            </p>
            <div className="text-left space-y-4">
              <section>
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">About This Project</h2>
                <p className="text-gray-600">
                  This is an ALX learning project focused on Next.js development. 
                  We're exploring routing, components, and modern web development practices.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Technologies Used</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Next.js with Pages Router</li>
                  <li>TypeScript for type safety</li>
                  <li>Tailwind CSS for styling</li>
                  <li>React for UI components</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h2>
                <p className="text-gray-600">
                  To build scalable, performant web applications using modern development 
                  practices and cutting-edge technologies.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
