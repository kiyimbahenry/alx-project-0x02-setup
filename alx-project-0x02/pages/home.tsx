import React from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';

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
          {/* Card 1 - Default Variant */}
          <Card
            title="Next.js Features"
            content="Next.js offers server-side rendering, static site generation, and file-based routing out of the box, making React development more powerful and efficient."
          />

          {/* Card 2 - Primary Variant */}
          <Card
            title="TypeScript Benefits"
            content="TypeScript provides static typing, better IntelliSense, and early error detection, leading to more robust and maintainable code."
            variant="primary"
          />

          {/* Card 3 - Secondary Variant */}
          <Card
            title="Tailwind CSS"
            content="Tailwind CSS is a utility-first CSS framework that enables rapid UI development with responsive design and consistent styling."
            variant="secondary"
          />

          {/* Card 4 - With Custom Class */}
          <Card
            title="Component Reusability"
            content="Creating reusable components like this Card promotes consistency, reduces code duplication, and speeds up development."
            className="transform hover:scale-105"
          />

          {/* Card 5 - Default Variant */}
          <Card
            title="ALX Project Goals"
            content="This project helps us master modern web development practices, including component architecture, TypeScript, and responsive design."
          />

          {/* Card 6 - Primary Variant */}
          <Card
            title="Future Enhancements"
            content="We can extend this Card component with more props like images, buttons, icons, and different layout options for various use cases."
            variant="primary"
          />
        </div>

        {/* Additional Section with Cards in a different layout */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Key Technologies
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card
              title="React Ecosystem"
              content="React's component-based architecture and rich ecosystem make it ideal for building complex user interfaces with reusable components."
              variant="primary"
            />
            <Card
              title="Modern JavaScript"
              content="ES6+ features like arrow functions, destructuring, and modules enhance code readability and developer productivity."
              variant="secondary"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
