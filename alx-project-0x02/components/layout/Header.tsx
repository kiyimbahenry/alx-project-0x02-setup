import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return currentPath === path ? 'text-blue-300 font-semibold' : 'text-white hover:text-blue-200';
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
            ALX Project
          </Link>
          
          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-6">
              <li>
                <Link 
                  href="/" 
                  className={`px-3 py-2 rounded-md transition-colors ${isActive('/')}`}
                >
                  Main
                </Link>
              </li>
              <li>
                <Link 
                  href="/home" 
                  className={`px-3 py-2 rounded-md transition-colors ${isActive('/home')}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`px-3 py-2 rounded-md transition-colors ${isActive('/about')}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/posts" 
                  className={`px-3 py-2 rounded-md transition-colors ${isActive('/posts')}`}
                >
                  Posts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
