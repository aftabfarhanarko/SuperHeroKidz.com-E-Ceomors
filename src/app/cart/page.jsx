import { getUserCart } from "@/actions/addcart";
import CartItem from "@/components/card/Cart.";
import React from "react";

const CartPagesadas = async () => {
  const items = await getUserCart();
  console.log(items);

  return (
    <div className="max-w-10/12 mx-auto my-10">
      <div className="relative mb-8">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl -z-10" />

        <div className="text-center space-y-3 py-6">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl  font-black bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
            Your Selected Items
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

          {/* Item Count Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold shadow-lg">
            <span className="animate-pulse">●</span>
            <span>{items.length} Items in Cart</span>
          </div>
        </div>
      </div>
      {items.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default CartPagesadas;
