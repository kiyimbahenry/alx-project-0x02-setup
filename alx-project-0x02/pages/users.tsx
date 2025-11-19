import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type JsonPlaceholderUser, type UserProps } from '@/interfaces';

// This function runs at build time
export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.status}`);
    }
    
    const data: JsonPlaceholderUser[] = await response.json();
    
    // Transform JSONPlaceholder data to match our UserProps interface
    const users: UserProps[] = data.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
      address: {
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode
      },
      company: {
        name: user.company.name
      }
    }));
    
    return {
      props: {
        initialUsers: users
      },
      // Re-generate the page at most once every 60 seconds
      // if there are incoming requests
      revalidate: 60
    };
  } catch (error) {
    return {
      props: {
        initialUsers: [],
        error: error instanceof Error ? error.message : 'An error occurred'
      }
    };
  }
}

interface UsersPageProps {
  initialUsers: UserProps[];
  error?: string;
}

const UsersPage: React.FC<UsersPageProps> = ({ initialUsers, error: initialError }) => {
  const [users, setUsers] = useState<UserProps[]>(initialUsers);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(initialError || null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Client-side refresh function
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status}`);
      }
      
      const data: JsonPlaceholderUser[] = await response.json();
      
      // Transform JSONPlaceholder data to match our UserProps interface
      const transformedUsers: UserProps[] = data.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
        address: {
          street: user.address.street,
          suite: user.address.suite,
          city: user.address.city,
          zipcode: user.address.zipcode
        },
        company: {
          name: user.company.name
        }
      }));
      
      setUsers(transformedUsers);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle refresh
  const handleRefresh = () => {
    fetchUsers();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Users Directory</h1>
          <p className="text-xl text-gray-600 mb-6">
            Browse our community of users from JSONPlaceholder API
          </p>
        </div>

        {/* Search and Controls */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="flex-1 w-full sm:max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search users by name, email, or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Refresh Button */}
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Refresh</span>
                </>
              )}
            </button>
          </div>

          {/* Results Count */}
          {!loading && (
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredUsers.length} of {users.length} users
              {searchTerm && (
                <span> for "<strong>{searchTerm}</strong>"</span>
              )}
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading users from JSONPlaceholder...</p>
          </div>
        )}

        {/* Error State */}
        {(error || initialError) && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center mb-8">
            <h3 className="text-red-800 font-semibold text-lg mb-2">Error Loading Users</h3>
            <p className="text-red-600 mb-4">{error || initialError}</p>
            <button
              onClick={handleRefresh}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Users Grid */}
        {!loading && !error && !initialError && (
          <>
            {filteredUsers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredUsers.map((user) => (
                  <UserCard
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    website={user.website}
                    address={user.address}
                    company={user.company}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-600 mb-4">
                  No users found
                </h3>
                <p className="text-gray-500 mb-4">
                  {searchTerm ? 'Try adjusting your search terms' : 'No users available'}
                </p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            )}

            {/* API Information */}
            <div className="mt-12 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                About the Data
              </h3>
              <p className="text-blue-700 mb-2">
                User data is fetched from <strong>JSONPlaceholder</strong>, a free fake API for testing and prototyping.
              </p>
              <p className="text-blue-700 text-sm">
                The API provides 10 sample users with complete profile information including contact details and addresses.
              </p>
              <p className="text-blue-700 text-sm mt-2">
                <strong>Note:</strong> This page uses getStaticProps for server-side data fetching at build time.
              </p>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default UsersPage;
