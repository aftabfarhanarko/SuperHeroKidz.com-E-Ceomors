// "use client";
import { fontBangla } from "@/app/layout";
import { Eye, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddButtons from "../Button/AddButtons";
// import React, { useEffect } from "react";
// import AOS from "aos"; // AOS library নিজে
// import "aos/dist/aos.css";

const Cards = ({ one }) => {
  const {
    title,
    bangla,
    image,
    price,
    percentage,
    ratings,
    sold,
    reviews,
    _id,
  } = one;

  const discountedPrice = (price * (100 - percentage)) / 100;

  return (
    <>
      <div
        key={_id}
        // data-aos="zoom-in"
        className="group relative max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100"
      >
        {/* Product Image */}
        <div className="relative w-full h-72 overflow-hidden">
          <Image
            src={image}
            alt={bangla}
            width={400}
            height={400}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          {/* Discount Badge */}
          {percentage > 0 && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-xl">
              -{percentage}%
            </div>
          )}

          {/* Quick View Icon on Hover Only */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  // strokeLinecap="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  // strokeLinecap="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Title */}
          <h2
            className={` ${fontBangla.className} text-lg font-semibold text-gray-800 mb-3 line-clamp-2 leading-relaxed`}
            title={title}
          >
            {bangla}
          </h2>

          {/* Price */}
          <div className="mb-5">
            {percentage > 0 ? (
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-rose-600">
                  ৳{discountedPrice.toFixed(0)}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ৳{price}
                </span>
              </div>
            ) : (
              <div className="flex gap-3 items-center">
                <span className="text-xl font-bold text-rose-600">
                  ৳{price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ৳{price}
                </span>
              </div>
            )}
          </div>

          {/* Ratings & Sold */}
          <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">⭐</span>
              <span className="font-medium">{ratings.toFixed(1)}</span>
              <span className={`${fontBangla.className} text-gray-500`}>
                ({reviews} রিভিউ)
              </span>
            </div>
            <div className={` ${fontBangla.className} font-medium `}>
              {sold} বিক্রীত
            </div>
          </div>

          {/* Action Buttons - Always Visible, Premium Style */}
          <div className="flex gap-3">
            {/* Add to Cart */}
            <AddButtons producat={{ ...one, _id: _id.toString() }} />

            {/* View Details */}
            <Link href={`/producat/${_id}`} className="flex-1">
              <button
                className="w-full border border-primary text-primary
      flex items-center justify-center gap-2
      py-2.5 rounded-xl font-semibold shadow-sm
      hover:bg-primary hover:text-white hover:shadow-md
      transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Eye className="w-5 h-5" />
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
