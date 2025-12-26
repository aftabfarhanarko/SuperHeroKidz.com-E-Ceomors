"use client";
import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-8 px-4 animate-pulse">
      <div className="max-w-7xl mx-auto">
        {/* Main Product Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Image Section Skeleton */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 overflow-hidden">
                <div className="w-full h-96 bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl"></div>
                {/* Discount Badge Skeleton */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-300 to-amber-300 px-4 py-2 rounded-full w-24 h-10"></div>
              </div>
            </div>

            {/* Product Info Section Skeleton */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Title Skeleton */}
                <div className="h-10 bg-gradient-to-r from-orange-200 to-amber-200 rounded-lg mb-2 w-3/4"></div>
                <div className="h-8 bg-gradient-to-r from-orange-200 to-amber-200 rounded-lg mb-4 w-2/3"></div>

                {/* Rating & Reviews Skeleton */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 bg-orange-200 rounded"
                      ></div>
                    ))}
                    <div className="ml-2 w-8 h-6 bg-orange-200 rounded"></div>
                  </div>
                  <div className="w-24 h-6 bg-orange-200 rounded"></div>
                  <div className="w-20 h-6 bg-orange-200 rounded"></div>
                </div>

                {/* Price Section Skeleton */}
                <div className="mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 bg-gradient-to-r from-orange-300 to-amber-300 rounded-lg w-40"></div>
                    <div className="h-8 bg-orange-200 rounded-lg w-24"></div>
                  </div>
                  <div className="mt-2 h-6 bg-orange-200 rounded w-32"></div>
                </div>

                {/* Key Features Skeleton */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 mb-6">
                  <div className="h-7 bg-orange-200 rounded-lg mb-4 w-32"></div>
                  <div className="space-y-3">
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-5 h-5 bg-orange-200 rounded mt-1"></div>
                        <div className="flex-1 h-5 bg-orange-200 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity & Actions Skeleton */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="w-32 h-12 bg-orange-200 rounded-full"></div>
                  <div className="flex-1 h-12 bg-gradient-to-r from-orange-300 to-amber-300 rounded-full"></div>
                  <div className="w-12 h-12 bg-orange-200 rounded-full"></div>
                  <div className="w-12 h-12 bg-orange-200 rounded-full"></div>
                </div>

                {/* Delivery Info Skeleton */}
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 bg-orange-50 rounded-xl"
                    >
                      <div className="w-8 h-8 bg-orange-200 rounded-full mb-2"></div>
                      <div className="w-20 h-4 bg-orange-200 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section Skeleton */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex border-b border-gray-200">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex-1 py-4 px-6">
                <div className="h-6 bg-orange-200 rounded mx-auto w-40"></div>
              </div>
            ))}
          </div>

          <div className="p-8">
            {/* Description Skeleton */}
            <div className="space-y-4">
              <div className="h-5 bg-orange-200 rounded w-full"></div>
              <div className="h-5 bg-orange-200 rounded w-11/12"></div>
              <div className="h-5 bg-orange-200 rounded w-full"></div>
              <div className="h-5 bg-orange-200 rounded w-10/12"></div>
              <div className="h-5 bg-orange-200 rounded w-full"></div>
              <div className="h-5 bg-orange-200 rounded w-9/12"></div>
              <div className="h-5 bg-orange-200 rounded w-full"></div>
              <div className="h-5 bg-orange-200 rounded w-11/12"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetailsSkeleton;
