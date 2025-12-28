"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { deleteCart, incritemintDB } from "@/actions/addcart";
import Swal from "sweetalert2";
import { toast } from "sonner";

export default function CartItem({ item, removedItems, updeatQuintitey }) {
  const itemsDelete = async (id) => {
    Swal.fire({
      title: "🗑️ Delete Item?",
      html: `
    <div class="space-y-3 mt-4">
      <p class="text-gray-700 text-base font-medium">This action cannot be undone!</p>
      <div class="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 border-2 border-red-200 rounded-xl">
        <svg class="text-red-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        <span class="text-red-700 font-semibold text-sm">Permanent deletion warning</span>
      </div>
    </div>
  `,
      icon: "warning",
      iconColor: "#f59e0b",
      showCancelButton: true,
      confirmButtonText: "✓ Yes, Delete",
      cancelButtonText: "✕ Cancel",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#64748b",
      background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
      customClass: {
        popup: "rounded-3xl shadow-2xl border-4 border-gray-200 p-6",
        title: "text-3xl font-black text-gray-900",
        htmlContainer: "text-gray-600",
        confirmButton:
          "rounded-2xl px-8 py-4 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1",
        cancelButton:
          "rounded-2xl px-8 py-4 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1",
        actions: "gap-4 mt-8",
      },
      showClass: {
        popup: "animate__animated animate__zoomIn animate__faster",
      },
      hideClass: {
        popup: "animate__animated animate__zoomOut animate__faster",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteResult = await deleteCart(id);
        removedItems(id);
        Swal.fire({
          title: "✅ Successfully Deleted!",
          html: `
        <div class="space-y-3 mt-4">
          <p class="text-gray-700 text-base">Your item has been permanently removed.</p>
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border-2 border-green-200 rounded-xl">
            <svg class="text-green-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span class="text-green-700 font-semibold text-sm">Action completed</span>
          </div>
        </div>
      `,
          icon: "success",
          iconColor: "#10b981",
          confirmButtonText: "Perfect! 🎉",
          confirmButtonColor: "#10b981",
          background: "linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)",
          customClass: {
            popup: "rounded-3xl shadow-2xl border-4 border-green-200 p-6",
            title:
              "text-3xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent",
            confirmButton:
              "rounded-2xl px-10 py-4 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110",
          },
          showClass: {
            popup: "animate__animated animate__jackInTheBox",
          },
          timer: 3000,
          timerProgressBar: true,
        });
      }
    });
  };
  const { _id, quantity } = item;

  const incriget = async () => {
    const result = await incritemintDB(quantity, _id);
    console.log("Updeat Now", quantity, _id, result);
    if (result.success) {
      updeatQuintitey(quantity + 1, _id);
      toast.success("Updeat Your quantity");
    }
  };

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
            <button className="rounded-lg p-1.5 bg-white text-gray-700 transition-all hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 hover:text-white hover:scale-110 active:scale-95 shadow-sm">
              <Minus size={16} strokeWidth={2.5} />
            </button>

            <span className="min-w-[32px] px-2 text-center text-base font-extrabold text-gray-900">
              {item.quantity}
            </span>

            <button
              onClick={incriget}
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
