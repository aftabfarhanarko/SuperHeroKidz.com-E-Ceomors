import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-72 bg-gray-200 rounded-t-2xl"></div>

      {/* Content Skeleton */}
      <div className="p-3 space-y-4">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>

        {/* Price Skeleton */}
        <div className="flex gap-3 items-center">
          <div className="h-6 w-20 bg-gray-300 rounded"></div>
          <div className="h-6 w-14 bg-gray-200 rounded"></div>
        </div>

        {/* Ratings & Sold Skeleton */}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
            <div className="h-5 w-12 bg-gray-300 rounded"></div>
            <div className="h-5 w-20 bg-gray-200 rounded"></div>
          </div>
          <div className="h-5 w-20 bg-gray-300 rounded"></div>
        </div>

        {/* Button Skeleton */}
        <div className="h-12 bg-gray-300 rounded-xl"></div>
      </div>
    </div>
  );
};
export default ProductSkeleton;
