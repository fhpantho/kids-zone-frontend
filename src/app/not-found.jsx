'use client'

import React from 'react';

const Error404 = () => {
    return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="text-center p-6">
        
        {/* Big 404 Text */}
        <h1 className="text-[120px] font-extrabold drop-shadow-lg animate-pulse">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Oops! Page Not Found
        </h2>
        <p className="text-sm md:text-base opacity-80 mb-6">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:scale-105 transition transform duration-300"
        >
          Go Back Home
        </a>

        {/* Decorative Elements */}
        <div className="mt-10 flex justify-center gap-4">
          <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-150"></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-300"></div>
        </div>

      </div>
    </div>
  );
};

export default Error404;