import React from 'react';

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        {/* Animated Circles */}
        <div className="relative h-48 mb-8">
           
        </div>

        {/* Content */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to PopX</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('signup')}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Create Account
          </button>
          <button
            onClick={() => onNavigate('login')}
            className="w-full bg-purple-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-purple-300 transition"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;