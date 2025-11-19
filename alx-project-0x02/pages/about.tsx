import React, { useState } from 'react';
import Header from '@/components/layout/Header'; // Ensure this import exists
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = (buttonName: string) => {
    setClickCount(prev => prev + 1);
    console.log(`${buttonName} clicked! Total clicks: ${clickCount + 1}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Ensure Header component is used */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Page</h1>
          <p className="text-xl text-gray-600">
            This page demonstrates our reusable Button component with different sizes and shapes.
          </p>
        </div>

        {/* Button Showcase Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Button Component Showcase
          </h2>
          
          {/* ... rest of the about page content remains the same ... */}
          <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
            <Button
              size="small"
              onClick={() => handleButtonClick('Small Primary Button')}
            >
              Small Button
            </Button>
            <Button
              size="medium"
              onClick={() => handleButtonClick('Medium Primary Button')}
            >
              Medium Button
            </Button>
            <Button
              size="large"
              onClick={() => handleButtonClick('Large Primary Button')}
            >
              Large Button
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
