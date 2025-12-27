import React from "react";

const PremiumLoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Spinner Container */}
      <div className="relative z-10">
        {/* Outer Rotating Rings */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
          {/* Ring 1 - Outermost */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400 animate-spin"></div>

          {/* Ring 2 - Middle */}
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-500 border-l-purple-400 animate-spin-slow"></div>

          {/* Ring 3 - Inner */}
          <div className="absolute inset-4 rounded-full border-4 border-transparent border-b-pink-500 border-r-pink-400 animate-spin-reverse"></div>

          {/* Center Circle with Icon */}
          <div className="absolute inset-6 sm:inset-8 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-2xl flex items-center justify-center">
            {/* Pulsing Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-400/40 animate-ping"></div>

            {/* Hero Icon */}
            <div className="relative z-10 text-4xl sm:text-5xl md:text-6xl animate-bounce">
              🦸 
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-8 text-center space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Loading
          </h2>

          {/* Animated Dots */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500 animate-bounce"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-500 animate-bounce delay-200"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-pink-500 animate-bounce delay-400"></div>
          </div>

          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Please wait...
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumLoadingSpinner;
