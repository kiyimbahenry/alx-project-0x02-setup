import React from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Home Page</h1>
          <p className="text-xl text-gray-600">
            Welcome to the Home page featuring reusable Card components!
          </p>
        </div>

        {/* Card Grid */}
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

          <Card
            title="Component Reusability"
            content="Creating reusable components promotes consistency and reduces code duplication."
            className="transform hover:scale-105"
          />

          <Card
            title="ALX Project Goals"
            content="This project helps us master modern web development practices."
          />

          <Card
            title="Future Enhancements"
            content="We can extend this Card component with more props for various use cases."
            variant="primary"
          />
        </div>

        {/* Additional Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Key Technologies
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card
              title="React Ecosystem"
              content="React's component-based architecture is ideal for building complex user interfaces."
              variant="primary"
            />
            <Card
              title="Modern JavaScript"
              content="ES6+ features enhance code readability and developer productivity."
              variant="secondary"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
