"use client";
import React, { useState } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import AddButtons from "../Button/AddButtons";
// import { fontBangla } from '@/app/layout';

const ProductDetails = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const users = false;
  const session = useSession();
  const router = useRouter();
  const path = usePathname();

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  // Add to card now

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Product Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Image Section */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-96 object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
                {product.percentage > 0 && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {product.percentage}% OFF
                  </div>
                )}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className={`  text-4xl font-bold text-gray-800 mb-2`}>
                  {product.title}
                </h1>
                <h2 className="text-2xl text-gray-600 mb-4">
                  {product.bangla}
                </h2>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.ratings)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-lg font-semibold text-gray-700">
                      {product.ratings}
                    </span>
                  </div>
                  <span className="text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                  <span className="text-green-600 font-semibold">
                    {product.sold} sold
                  </span>
                </div>

                {/* Price Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-bold text-orange-600">
                      ৳{discountedPrice}
                    </span>
                    {product.percentage > 0 && (
                      <span className="text-2xl text-gray-400 line-through">
                        ৳{product.price}
                      </span>
                    )}
                  </div>
                  <p className="text-green-600 mt-2 font-semibold">
                    You save: ৳{product.price - discountedPrice}
                  </p>
                </div>

                {/* Key Features */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 mb-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.info.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantity & Actions */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <AddButtons
                    producat={{ ...product, _id: product._id.toString() }}
                  />
                  {/* ADd card Buttons  */}
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-3 rounded-full border-2 transition-all ${
                      isWishlisted
                        ? "bg-red-500 border-red-500 text-white"
                        : "border-gray-300 hover:border-red-500"
                    }`}
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        isWishlisted ? "fill-current" : ""
                      }`}
                    />
                  </button>

                  <button className="p-3 rounded-full border-2 border-gray-300 hover:border-purple-500 transition-all">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>

                {/* Delivery Info */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-xl">
                    <Truck className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-700">
                      Free Delivery
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-green-50 rounded-xl">
                    <Shield className="w-8 h-8 text-green-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-700">
                      Safe Material
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-purple-50 rounded-xl">
                    <RotateCcw className="w-8 h-8 text-purple-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-700">
                      Easy Returns
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex border-b border-gray-200">
            {["description", "qna"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 px-6 font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab === "description" ? "Product Description" : "Q&A"}
              </button>
            ))}
          </div>

          <div className="p-8">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                  {product.description}
                </div>
              </div>
            )}

            {activeTab === "qna" && (
              <div className="space-y-6">
                {product.qna.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6"
                  >
                    <h4 className="font-bold text-lg text-gray-800 mb-3">
                      প্রশ্ন: {item.question}
                    </h4>
                    <p className="text-gray-700 text-lg">
                      উত্তর: {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
