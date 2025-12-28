"use client";
import React, { useMemo, useState } from "react";
import CartItem from "./Cart.";
import Link from "next/link";

const ClientCart = ({ itemsData }) => {
  const [items, setItemms] = useState(itemsData);

  const totalItems = useMemo(
    () => items.reduce((acm, item) => acm + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + Number(item.price) * Number(item.quantity),
        0
      ),
    [items]
  );

  const removedItems = (id) => {
    console.log(id);
    setItemms((prev) => prev.filter((ite) => ite._id != id));
  };

  const updeatQuintitey = async (quantity, id) => {
    console.log("Updeat Now", { quantity, id });
    setItemms((prve) =>
      prve.map((item) =>
        item._id == id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const decrimetQuitity = async (quantity, id) => {
    console.log("Updeat Now", { quantity, id });
    setItemms((prve) =>
      prve.map((item) =>
        item._id == id ? { ...item, quantity: quantity } : item
      )
    );
  };

  console.log("Length", items.length);

  return (
    <div>
      <div className="flex mx-auto -mt-10 max-w-[200px] items-center gap-2 px-4 text-lg py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg">
        <span className="animate-pulse">●</span>
        <span>সর্বমোট পণ্য : {totalItems}</span>
      </div>

      <div className=" mx-auto px-4 mt-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Cart Items - Left on large, top on mobile */}
          <div className="lg:w-2/3 order-1 lg:order-1">
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                  removedItems={removedItems}
                  updeatQuintitey={updeatQuintitey}
                  decrimetQuitity={decrimetQuitity}
                  totalPrice={totalPrice}
                />
              ))}
            </div>
          </div>

          {/* Summary Card - Right on large, bottom on mobile */}
          <div className="lg:w-1/3 order-2 lg:order-2">
            <div className="bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 rounded-3xl shadow-md hover:shadow-xl p-3 md:p-8  sticky top-6 border border-indigo-100/50 backdrop-blur-sm relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  অর্ডার সারাংশ
                </h2>
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">
                    {totalItems}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-6 pr-2 scrollbar-hide">
                {items.map((item, index) => (
                  <div
                    key={item._id}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-indigo-100/50 hover:border-indigo-300"
                    style={{
                      animation: `slideIn 0.3s ease-out ${
                        index * 0.05
                      }s backwards`,
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <p className="font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors">
                          {item.name}
                        </p>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold">
                            ৳{item.price}
                          </span>
                          <span className="text-gray-500">×</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-semibold">
                            {item.quantity}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                          ৳
                          {(Number(item.price) * Number(item.quantity)).toFixed(
                            2
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 space-y-4 shadow-inner">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 font-medium">সাবটোটাল:</span>
                  <span className="font-bold text-gray-900 text-lg">
                    ৳{totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 font-medium">
                    ডেলিভারি চার্জ:
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="line-through text-gray-400 text-xs">
                      ৳৫০
                    </span>
                    <span className="font-bold text-green-600 text-lg">
                      ফ্রি
                    </span>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent my-3" />

                <div className="flex justify-between items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg px-4  py-2.5 md:py-3  shadow-lg">
                  <span className="font-black text-lg">মোট মূল্য:</span>
                  <span className="font-black text-xl">
                    ৳{totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <Link
                href={items.length === 0 ? "#" : "/checkOut"}
                onClick={(e) => {
                  if (items.length === 0) {
                    e.preventDefault();
                  }
                }}
                className={`relative w-full mt-8 font-black py-5  max-w-[500px] rounded-xl shadow-lg md:shadow-2xl transition-all duration-300 overflow-hidden group ${
                  items.length === 0
                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                    : "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white hover:shadow-emerald-500/50 hover:-translate-y-1 active:translate-y-0"
                }`}
              >
                <span className="relative w-full z-10 text-lg tracking-wide leading-relaxed">
                  অর্ডার কনফার্ম করুন
                </span>
                {items.length > 0 && (
                  <>
                    <div className="absolute w-full inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-active:opacity-100 transition-opacity" />
                  </>
                )}
              </Link>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-sm font-semibold text-gray-700">
                    মোট পণ্য:{" "}
                    <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                      {totalItems} টি
                    </span>
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-400/10 to-purple-400/10 rounded-full blur-3xl -z-10" />
            </div>

            <style jsx>{`
              @keyframes slideIn {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }

              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCart;
