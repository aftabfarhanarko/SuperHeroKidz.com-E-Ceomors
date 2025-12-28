"use client";
import { creatorder } from "@/actions/order";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const PagesPayment = ({ getCart }) => {
  const session = useSession();
  const router = useRouter();
  const userData = session?.data?.user;

  // Calculate totals from getCart prop
  const cartItems = getCart || [];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );
  const totalItems = useMemo(
    () => getCart.reduce((acm, item) => acm + item.quantity, 0),
    [getCart]
  );
  const deliveryCharge = 80;
  const total = subtotal + deliveryCharge;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const orderData = {
      fullName: formData.fullName.value,
      phone: formData.phone.value,
      email: formData.email.value,
      address: formData.address.value,
      city: formData.city.value,
      area: formData.area.value,
      paymentMethod: "cash",
      subtotal,
      deliveryCharge,
      total,
    };
    // console.log("Order submitted:", orderData);

    try {
      const result = await creatorder(orderData);
    //   console.log(result);
      toast.success("অর্ডার সফলভাবে সম্পন্ন হয়েছে! 🎉");
      router.push("/")
    } catch (error) {
    //   console.error("Order error:", error);
      toast.warning("অর্ডার সম্পন্ন করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  };
  if (session.status === "loading") {
    return (
      <div class="flex items-center justify-center min-h-screen">
        <div class="text-center">
          <div class="spinner w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full mx-auto mb-3"></div>
          <p class="text-gray-700 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>

      <div className=" max-w-11/12 md:max-w-10/12 mx-auto relative z-10">
        {/* Header */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 rounded-3xl blur-2xl" />

          <div className="text-center space-y-4 py-8 relative">
            <div className="inline-block">
              <h1 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight animate-gradient">
                আপনার অর্ডার পণ্যসমূহ
              </h1>
              <div className="h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full mt-2 animate-pulse"></div>
            </div>

            <div className="flex items-center justify-center gap-3 text-gray-700">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-400 to-purple-400" />
              <p className="text-base sm:text-md font-semibold flex items-center gap-1 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <span className="text-2xl animate-bounce">🛒</span>
                Checkout Details
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-400 to-purple-400" />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-lg rounded-xl  md:rounded-2xl shadow-2xl p-6 md:p-10 border border-white/20 hover:shadow-purple-200/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-gradient-to-r from-purple-200 to-pink-200">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-2xl shadow-lg">
                  <span className="text-3xl">📋</span>
                </div>
                <h2 className="text-3xl font-black bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                  ডেলিভারি তথ্য
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-purple-600">👤</span>
                    সম্পূর্ণ নাম *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    defaultValue={userData?.name}
                    readOnly
                    className="w-full px-5 py-4 rounded-xl outline-none border-2 border-gray-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:border-purple-300 group-hover:shadow-lg"
                    placeholder="আপনার নাম লিখুন"
                  />
                </div>

                {/* Phone & Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="text-green-600">📱</span>
                      মোবাইল নম্বর *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-5 py-4 rounded-xl outline-none border-2 border-gray-200 focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:border-green-300 group-hover:shadow-lg"
                      placeholder="০১XXXXXXXXX"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="text-blue-600">📧</span>
                      ইমেইল (ঐচ্ছিক)
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={userData?.email}
                      readOnly
                      className="w-full px-5 py-4 rounded-xl outline-none border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:border-blue-300 group-hover:shadow-lg"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-red-600">📍</span>
                    সম্পূর্ণ ঠিকানা *
                  </label>
                  <textarea
                    name="address"
                    required
                    rows="3"
                    className="w-full px-5 py-4 outline-none rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm hover:border-red-300 group-hover:shadow-lg"
                    placeholder="বাড়ি নং, রোড নং, এলাকা"
                  />
                </div>

                {/* City & Area */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="text-indigo-600">🏙️</span>
                      শহর *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      className="w-full px-5 outline-none py-4 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:border-indigo-300 group-hover:shadow-lg"
                      placeholder="ঢাকা"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="text-pink-600">🗺️</span>
                      এলাকা *
                    </label>
                    <input
                      type="text"
                      name="area"
                      required
                      className="w-full px-5 outline-none py-4 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:border-pink-300 group-hover:shadow-lg"
                      placeholder="মিরপুর"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-yellow-600">💳</span>
                    পেমেন্ট পদ্ধতি *
                  </label>
                  <div className="space-y-4">
                    <label className="flex items-center gap-4 p-5 border-3 border-gray-200 rounded-2xl cursor-pointer hover:border-purple-500 hover:bg-purple-50/50 transition-all duration-300 group hover:shadow-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        className="w-5 outline-none h-5 "
                      />
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl">💵</span>
                      </div>
                      <div className="flex-1">
                        <span className="font-bold text-gray-800 text-lg">
                          ক্যাশ অন ডেলিভারি
                        </span>
                        <p className="text-xs text-gray-500 mt-1">
                          পণ্য হাতে পেয়ে টাকা দিন
                        </p>
                      </div>
                    </label>

                    <label className="flex items-center gap-4 p-5 border-3 border-gray-200 rounded-2xl cursor-pointer hover:border-pink-500 hover:bg-pink-50/50 transition-all duration-300 group hover:shadow-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        className="w-5 h-5 "
                      />
                      <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl">💳</span>
                      </div>
                      <div className="flex-1">
                        <span className="font-bold text-gray-800 text-lg">
                          অনলাইন পেমেন্ট
                        </span>
                        <p className="text-xs text-gray-500 mt-1">
                          bKash, Nagad, Rocket
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={cartItems.length === 0}
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-black text-lg py-3 rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0"
                >
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    অর্ডার কনফার্ম করুন
                    <span className="text-2xl animate-bounce">🚀</span>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-1 ">
            <div className="bg-white/80 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-2xl p-8 sticky top-4 border border-white/20 hover:shadow-pink-200/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gradient-to-r from-pink-200 to-purple-200">
                <div className="bg-gradient-to-br from-pink-600 to-purple-600 p-3 rounded-2xl shadow-lg animate-pulse">
                  <span className="text-3xl">📦</span>
                </div>
                <h2 className="text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">
                  অর্ডার সামারি
                </h2>
              </div>

              {/* Cart Items */}
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-600 font-semibold">
                    আপনার কার্ট খালি
                  </p>
                  <p className="text-sm text-gray-500 mt-2">পণ্য যোগ করুন</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 mb-6">
                    {cartItems.map((item, index) => (
                      <div
                        key={item.producatId || index}
                        className="flex items-center justify-between p-3 border-b border-gray-100 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-lg transition-all duration-300 group"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 text-sm line-clamp-1 group-hover:text-purple-700 transition-colors">
                            {item.name}
                          </h3>

                          <span className="text-xs  text-purple-600 px-2 py-1 rounded-full mt-1 inline-block font-medium  transition-colors group-hover:scale-110 ">
                            পরিমাণ: {item.quantity}
                          </span>
                        </div>
                        <p className="text-base font-bold text-purple-600 ml-4 group-hover:scale-110 transition-transform">
                          ৳{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-4 mb-6 bg-gradient-to-br from-gray-50 to-purple-50 p-5 rounded-2xl">
                    <div className="flex justify-between text-sm items-center">
                      <span className="text-gray-600 font-semibold flex items-center gap-2">
                        <span className="text-lg">🛍️</span>
                        সাবটোটাল (<span className="text-purple-500">{totalItems}</span> টি পণ্য)
                      </span>
                      <span className="font-bold text-gray-800 text-lg">
                        ৳{subtotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm items-center">
                      <span className="text-gray-600 font-semibold flex items-center gap-2">
                        <span className="text-lg">🚚</span>
                        ডেলিভারি চার্জ
                      </span>
                      <span className="font-bold text-green-600 text-lg">
                        ৳{deliveryCharge}
                      </span>
                    </div>
                    <div className="border-t-2 border-dashed border-purple-300 pt-4 flex justify-between items-center bg-white p-4 rounded-xl shadow-md">
                      <span className="font-black text-gray-800 text-lg">
                        মোট মূল্য
                      </span>
                      <span className="font-black text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 animate-pulse">
                        ৳{total.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-2xl p-5 border-2 border-green-200/50 shadow-lg">
                    <div className="grid grid-cols-2 gap-3 text-xs text-center">
                      <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-2xl block mb-1">✓</span>
                        <span className="text-gray-700 font-bold">
                          নিরাপদ পেমেন্ট
                        </span>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-2xl block mb-1">⚡</span>
                        <span className="text-gray-700 font-bold">
                          দ্রুত ডেলিভারি
                        </span>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-2xl block mb-1">🔄</span>
                        <span className="text-gray-700 font-bold">
                          সহজ রিটার্ন
                        </span>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-2xl block mb-1">🎁</span>
                        <span className="text-gray-700 font-bold">
                          বিশেষ অফার
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesPayment;
