import { getUserCart } from "@/actions/addcart";
import ClientCart from "@/components/card/ClientCart";
import React from "react";
import Link from "next/link";

const CartPagesadas = async () => {
  const itesaddmsData = await getUserCart();
  const itemsData = itesaddmsData.map((items) => ({
    ...items,
    _id: items._id.toString(),
  }));
  console.log("hjij", itemsData);

  // যদি কার্ট খালি থাকে
  if (itemsData.length === 0) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-md mx-auto">
          {/* Empty Cart Icon */}
          <div className="relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center">
              <span className="text-7xl">🛒</span>
            </div>
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-3xl">✨</span>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              আপনার কার্ট খালি আছে
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              এখনো কোনো পণ্য যোগ করা হয়নি।
              <br />
              পণ্য যোগ করুন এবং শপিং শুরু করুন!
            </p>
          </div>

          {/* CTA Button */}
          <Link href="/producat">
            <button className="mt-6 px-8 py-3 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
              পণ্য দেখুন 🛍️
            </button>
          </Link>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center gap-2 mt-8 opacity-50">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
            <span className="text-gray-400 text-sm">অথবা</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-11/12 mx-auto my-10">
      <div className="relative mb-8">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl -z-10" />

        <div className="text-center space-y-3 py-6">
          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
            আপনার কার্টের পণ্যসমূহ
          </h1>

          {/* Subtitle with icon */}
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300" />
            <p className="text-sm sm:text-base font-medium flex items-center gap-2">
              <span className="text-xl">🛒</span>
              Item Details
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300" />
          </div>
        </div>
        {/* Item Count Badge */}
      </div>
      <ClientCart itemsData={itemsData} />
    </div>
  );
};

export default CartPagesadas;
