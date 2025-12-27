"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function CartItem({ item }) {
    const itemsDelete = (id) => {
        toast.success(`Delete ${id}`);
    }
  return (
    <div className="group relative flex flex-col sm:flex-row gap-4 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-4 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative h-40 w-full sm:h-32 sm:w-32 flex-shrink-0 overflow-hidden rounded-xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors duration-200">
            {item.name}
          </h3>

          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-white font-semibold shadow-sm">
              <span className="text-sm">⭐</span> {item.ratings}
            </span>
            <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-xs">
              <span className="font-bold">{item.sold}</span> sold
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          {/* Quantity Control */}
          <div className="flex items-center gap-2 rounded-xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2 shadow-md hover:shadow-lg transition-all">
            <button
              onClick={() => onDecrease(item._id)}
              className="rounded-lg p-1.5 bg-white text-gray-700 transition-all hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 hover:text-white hover:scale-110 active:scale-95 shadow-sm"
            >
              <Minus size={16} strokeWidth={2.5} />
            </button>

            <span className="min-w-[32px] px-2 text-center text-base font-extrabold text-gray-900">
              {item.quantity}
            </span>

            <button
              onClick={() => onIncrease(item._id)}
              className="rounded-lg p-1.5 bg-white text-gray-700 transition-all hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-500 hover:text-white hover:scale-110 active:scale-95 shadow-sm"
            >
              <Plus size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Price & Remove */}
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-left sm:text-right">
              <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                ৳{(item.price * item.quantity).toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 font-medium">
                ৳{item.price.toLocaleString()} × {item.quantity}
              </p>
            </div>

            <button
              onClick={() => itemsDelete(item._id)}
              className="rounded-xl p-2.5 bg-gradient-to-br from-red-500 to-pink-600 text-white transition-all hover:from-red-600 hover:to-pink-700 hover:shadow-lg hover:scale-110 active:scale-95 shadow-md"
            >
              <Trash2 size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
