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
              Main Landing Page
            </h2>
            <p className="text-gray-600 mb-4">
              This is the main index page. Use the navigation to visit:
            </p>
            <ul className="list-disc list-inside text-left text-gray-600 space-y-2">
              <li><strong>Home</strong> - Learn about Next.js features</li>
              <li><strong>About</strong> - Learn about our project and mission</li>
            </ul>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-700">
                <strong>Note:</strong> We're using Next.js Pages Router for file-based routing.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
