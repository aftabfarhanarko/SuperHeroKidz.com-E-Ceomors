import { getUserCart } from "@/actions/addcart";
import PagesPayment from "@/components/Home/PagesPayment";
import Link from "next/link";
import React from "react";

const pageChackOut = async () => {
  const getCart = await getUserCart();
  // console.log(getCart);

  // Check if cart is empty
  if (!getCart || getCart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center max-w-md">
          {/* Empty Cart Icon */}
          <div className="mb-6 relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-16 h-16 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div className="absolute top-0 right-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-75"></div>
          </div>

          {/* Text Content */}
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            আপনার কার্ট খালি
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            পণ্য যোগ করুন তারপর checkout করুন
          </p>

          {/* CTA Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            শপিং চালিয়ে যান
          </Link>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center gap-2 opacity-50">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PagesPayment getCart={getCart} />
    </div>
  );
};

export default pageChackOut;
