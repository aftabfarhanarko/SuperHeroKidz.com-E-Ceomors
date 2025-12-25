import React from 'react';

const HerokidzLoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Spinner Container */}
      <div className="relative w-34 h-34">
        {/* Outer Ring */}
        <div className="w-full h-full rounded-full border-8 border-gray-200 flex items-center justify-center relative">
          {/* Spinning Ring */}
          <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-orange-400 border-r-orange-500 animate-spin"></div>
          
          {/* Inner Logo */}
          <div className="text-center z-10">
            <div className="text-3xl md:text-5xl animate-pulse">🦸</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerokidzLoadingSpinner;