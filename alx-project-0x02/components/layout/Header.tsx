import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
            ALX Project
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-blue-200 transition-colors">
                  Main
                </Link>
              </li>
              <li>
                <Link href="/home" className="hover:text-blue-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-200 transition-colors">
                  About
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
