import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
       <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-12">
      <div className="text-center max-w-md">
        
        <p className="text-base font-semibold text-green-600">404</p>
        
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        
        <p className="mt-4 text-base text-gray-600">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
        </p>

        {/* Action Button */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-colors duration-200"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
    );
};

export default NotFound;