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
        className="group relative max-w-sm rounded-3xl bg-white overflow-hidden
  shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100"
      >
        {/* Image Section */}
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          <Image
            src={image}
            alt={bangla}
            width={200}
            height={200}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Discount badge */}
          {percentage > 0 && (
            <span className="absolute top-4 left-4 bg-rose-600 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
              -{percentage}%
            </span>
          )}

          {/* Quick view */}
          <button
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100
      translate-y-2 group-hover:translate-y-0 transition-all duration-500
      bg-white p-3 rounded-full shadow-xl hover:bg-rose-600 hover:text-white"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h2
            className={`${fontBangla.className} text-lg font-bold text-gray-900 line-clamp-2 mb-3`}
            title={title}
          >
            {bangla}
          </h2>

          {/* Price */}
          <div className="mb-4">
            {percentage > 0 ? (
              <div className="flex items-end gap-3">
                <span className="text-2xl font-extrabold text-rose-600">
                  ৳{discountedPrice.toFixed(0)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ৳{price}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-extrabold text-rose-600">
                ৳{price}
              </span>
            )}
          </div>

          {/* Rating & Sold */}
          <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">★</span>
              <span className="font-semibold">{ratings.toFixed(1)}</span>
              <span className={`${fontBangla.className}`}>
                ({reviews} রিভিউ)
              </span>
            </div>
            <span className={`${fontBangla.className} font-medium`}>
              {sold} বিক্রীত
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <AddButtons producat={{ ...one, _id: _id.toString() }} />

            <Link href={`/producat/${_id}`}>
              <button
                className="w-full flex items-center justify-center gap-2
          bg-gradient-to-r from-rose-600 to-pink-600 text-white
          py-3 rounded-xl font-bold shadow-md
          hover:from-rose-700 hover:to-pink-700 hover:shadow-xl
          transition-all duration-300"
              >
                <Eye className="w-5 h-5" />
                View Details
              </button>
            </Link>
          </div>
        </div>

        {/* Shine Effect */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </>
  );
};

export default Cards;
