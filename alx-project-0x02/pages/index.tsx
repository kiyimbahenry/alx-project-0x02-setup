import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
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
              Project Setup Complete! 🎉
            </h2>
            <p className="text-gray-600 mb-4">
              This project includes:
            </p>
            <ul className="list-disc list-inside text-left text-gray-600 space-y-2">
              <li>Next.js with TypeScript</li>
              <li>Tailwind CSS for styling</li>
              <li>ESLint for code quality</li>
              <li>Component-based architecture</li>
              <li>Responsive design</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
