import React from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ 
  id, 
  name, 
  email, 
  phone, 
  website, 
  address, 
  company 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
      {/* Header with ID and Company */}
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
          ID: {id}
        </span>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {company.name}
        </span>
      </div>

      {/* User Name */}
      <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
        {name}
      </h3>

      {/* Contact Information */}
      <div className="space-y-3 mb-4">
        {/* Email */}
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a 
            href={`mailto:${email}`} 
            className="text-blue-600 hover:text-blue-800 text-sm transition-colors break-all"
          >
            {email}
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a 
            href={`tel:${phone}`} 
            className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
          >
            {phone}
          </a>
        </div>

        {/* Website */}
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
          </svg>
          <a 
            href={`http://${website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 text-sm transition-colors"
          >
            {website}
          </a>
        </div>
      </div>

      {/* Address */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="text-xs text-gray-600">
            <div className="font-medium">{address.street}, {address.suite}</div>
            <div>{address.city}, {address.zipcode}</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
          View Profile
        </button>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-blue-500 transition-colors p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
