import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = (buttonName: string) => {
    setClickCount(prev => prev + 1);
    console.log(`${buttonName} clicked! Total clicks: ${clickCount + 1}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
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
          <p className="text-gray-600 text-center mb-8">
            Total button clicks: <span className="font-bold text-blue-600">{clickCount}</span>
          </p>

          {/* Size Variations */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Size Variations</h3>
            <div className="flex flex-wrap gap-4 items-center justify-center">
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

          {/* Shape Variations */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Shape Variations</h3>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Button
                shape="rounded-sm"
                variant="secondary"
                onClick={() => handleButtonClick('Slightly Rounded Button')}
              >
                Slightly Rounded
              </Button>
              <Button
                shape="rounded-md"
                variant="secondary"
                onClick={() => handleButtonClick('Medium Rounded Button')}
              >
                Medium Rounded
              </Button>
              <Button
                shape="rounded-full"
                variant="secondary"
                onClick={() => handleButtonClick('Fully Rounded Button')}
              >
                Fully Rounded
              </Button>
            </div>
          </div>

          {/* Variant Combinations */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Variant Combinations</h3>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Button
                variant="primary"
                size="medium"
                shape="rounded-md"
                onClick={() => handleButtonClick('Primary Variant')}
              >
                Primary
              </Button>
              <Button
                variant="secondary"
                size="medium"
                shape="rounded-md"
                onClick={() => handleButtonClick('Secondary Variant')}
              >
                Secondary
              </Button>
              <Button
                variant="outline"
                size="medium"
                shape="rounded-md"
                onClick={() => handleButtonClick('Outline Variant')}
              >
                Outline
              </Button>
              <Button
                variant="danger"
                size="medium"
                shape="rounded-md"
                onClick={() => handleButtonClick('Danger Variant')}
              >
                Danger
              </Button>
            </div>
          </div>

          {/* Mixed Examples */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Mixed Examples</h3>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Button
                size="small"
                shape="rounded-full"
                variant="outline"
                onClick={() => handleButtonClick('Small Full Outline')}
              >
                Small & Full
              </Button>
              <Button
                size="large"
                shape="rounded-sm"
                variant="danger"
                onClick={() => handleButtonClick('Large Square Danger')}
              >
                Large & Square
              </Button>
              <Button
                size="medium"
                shape="rounded-full"
                variant="primary"
                onClick={() => handleButtonClick('Medium Full Primary')}
              >
                Medium & Round
              </Button>
              <Button
                size="small"
                shape="rounded-md"
                variant="secondary"
                disabled
                onClick={() => handleButtonClick('Disabled Button')}
              >
                Disabled
              </Button>
            </div>
          </div>
        </div>

        {/* Usage Examples Section */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Button Component Usage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Props Available:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li><code>size</code>: small, medium, large</li>
                <li><code>shape</code>: rounded-sm, rounded-md, rounded-full</li>
                <li><code>variant</code>: primary, secondary, outline, danger</li>
                <li><code>onClick</code>: Click handler function</li>
                <li><code>disabled</code>: Boolean to disable button</li>
                <li><code>type</code>: button, submit, reset</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Features:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Fully accessible with focus states</li>
                <li>Hover and transition effects</li>
                <li>Disabled state styling</li>
                <li>TypeScript support</li>
                <li>Custom className prop for additional styling</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
