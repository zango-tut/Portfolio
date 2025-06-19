import React from 'react';

const Error = ({ message = "Something went wrong..." }) => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
        <div className="text-center space-y-4 max-w-md">
          <div className="text-5xl md:text-6xl text-red-500 animate-bounce">⚠️</div>
          <h2 className="text-2xl md:text-3xl font-bold">Oops!</h2>
          <p className="text-gray-400 text-sm md:text-base">
            {message}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Retry
          </button>
        </div>
      </div>
    );
  };
  
  export default Error;
  