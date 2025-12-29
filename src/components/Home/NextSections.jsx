"use client";
import React, { useState, useEffect } from "react";
import {
  Gift,
  Package,
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ShoppingBag,
  Heart,
  Zap,
  TrendingUp,
  Users2,
  Sparkles,
  BadgeCheck,
  Truck,
  RefreshCw,
} from "lucide-react";

export default function HeroKidsNewSections2() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Age-based product categories
  const ageGroups = [
    {
      age: "০-২ বছর",
      icon: "👶",
      products: 4,
      color: "from-pink-400 to-rose-400",
    },
    {
      age: "৩-৫ বছর",
      icon: "🧒",
      products: 8,
      color: "from-blue-400 to-cyan-400",
    },
    {
      age: "৬-৮ বছর",
      icon: "👧",
      products: 6,
      color: "from-purple-400 to-pink-400",
    },
    {
      age: "৯+ বছর",
      icon: "🧑",
      products: 5,
      color: "from-orange-400 to-yellow-400",
    },
  ];

  // Brand showcase
  const brands = [
    { name: "Fisher Price", logo: "🎪" },
    { name: "LEGO", logo: "🧱" },
    { name: "Hot Wheels", logo: "🏎️" },
    { name: "Barbie", logo: "👗" },
    { name: "Nerf", logo: "🎯" },
    { name: "Play-Doh", logo: "🎨" },
  ];

  // Featured collections
  const collections = [
    {
      title: "শিক্ষামূলক খেলনা",
      subtitle: "শিশুর মেধা বিকাশে",
      image: "📚",
      count: "50+ পণ্য",
      badge: "জনপ্রিয়",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "রোল প্লে সেট",
      subtitle: "ডাক্তার, শেফ, পুলিশ",
      image: "🎭",
      count: "30+ পণ্য",
      badge: "নতুন",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "আউটডোর টয়",
      subtitle: "বাইরে খেলার জন্য",
      image: "⚽",
      count: "40+ পণ্য",
      badge: "ট্রেন্ডিং",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "পাজল ও গেমস",
      subtitle: "মজা ও বুদ্ধির খেলা",
      image: "🧩",
      count: "60+ পণ্য",
      badge: "বেস্ট সেলার",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  // How to order steps
  const orderSteps = [
    {
      step: "১",
      icon: ShoppingBag,
      title: "পণ্য বাছাই করুন",
      desc: "পছন্দের খেলনা কার্টে যোগ করুন",
    },
    {
      step: "২",
      icon: Phone,
      title: "অর্ডার কনফার্ম",
      desc: "ফোন বা অনলাইনে অর্ডার দিন",
    },
    {
      step: "৩",
      icon: Package,
      title: "প্যাকেজিং",
      desc: "সুন্দরভাবে প্যাক করা হবে",
    },
    {
      step: "৪",
      icon: Truck,
      title: "ডেলিভারি",
      desc: "দ্রুত আপনার দোরগোড়ায়",
    },
  ];

  // Shop benefits
  const benefits = [
    {
      icon: BadgeCheck,
      title: "অরিজিনাল পণ্য",
      desc: "১০০% খাঁটি গ্যারান্টি",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: RefreshCw,
      title: "সহজ রিটার্ন",
      desc: "৭ দিনের রিটার্ন পলিসি",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Truck,
      title: "দ্রুত ডেলিভারি",
      desc: "২-৩ দিনে সারাদেশে",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Gift,
      title: "গিফট র্যাপিং",
      desc: "ফ্রি গিফট প্যাকেজিং",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Heart,
      title: "কাস্টমার কেয়ার",
      desc: "২৪/৭ সাপোর্ট",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Sparkles,
      title: "স্পেশাল অফার",
      desc: "নিয়মিত ছাড় ও উপহার",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-pink-50 to-white">
      {/* Section 1: Shop by Age Group */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              বয়স অনুযায়ী
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              শিশুর <span className="text-orange-500">বয়স অনুযায়ী</span> খেলনা
            </h2>
            <p className="text-gray-600">
              সঠিক বয়সের জন্য সঠিক খেলনা বেছে নিন
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {ageGroups.map((group, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                ></div>

                <div className="relative z-10">
                  <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {group.icon}
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2">
                    {group.age}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      {group.products} টি পণ্য
                    </span>
                    <span className="text-orange-500 font-semibold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${group.color} transform scale-x-0 group-hover:scale-x-100 transition-transform`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Featured Collections */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ফিচার্ড কালেকশন
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              বিশেষ <span className="text-orange-500">সংগ্রহ</span>
            </h2>
            <p className="text-gray-600">আমাদের সেরা কালেকশন দেখুন</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredProduct(idx)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`relative h-48 bg-gradient-to-br ${collection.gradient} flex items-center justify-center`}
                >
                  <div className="text-8xl group-hover:scale-125 transition-transform duration-500">
                    {collection.image}
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-xs font-bold px-3 py-1.5 rounded-full text-orange-600 shadow-lg">
                      {collection.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {collection.subtitle}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">
                      {collection.count}
                    </span>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors transform group-hover:scale-105">
                      দেখুন
                    </button>
                  </div>
                </div>

                <div
                  className={`absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r ${
                    collection.gradient
                  } transform ${
                    hoveredProduct === idx ? "scale-x-100" : "scale-x-0"
                  } transition-transform`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How to Order */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              সহজ প্রক্রিয়া
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              কীভাবে <span className="text-orange-500">অর্ডার করবেন</span>
            </h2>
            <p className="text-gray-600">
              মাত্র ৪টি সহজ ধাপে পেয়ে যান আপনার পছন্দের খেলনা
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {orderSteps.map((step, idx) => (
                <div key={idx} className="text-center group">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-rose-500 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <step.icon size={40} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center font-bold text-orange-600 text-lg shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="font-bold text-xl text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Shop With Us / Benefits Grid */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              আমাদের সুবিধা
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              কেন <span className="text-orange-500">Hero Kids</span> থেকে কিনবেন
            </h2>
            <p className="text-gray-600">আমরা দিচ্ছি সেরা সেবা এবং সুবিধা</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-orange-200"
              >
                <div
                  className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <benefit.icon size={32} />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Brand Partners */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              বিশ্বস্ত ব্র্যান্ড
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              আমাদের <span className="text-orange-500">পার্টনার ব্র্যান্ড</span>
            </h2>
            <p className="text-gray-600">
              বিশ্বখ্যাত ব্র্যান্ডের অরিজিনাল পণ্য
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {brands.map((brand, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {brand.logo}
                    </div>
                    <div className="font-bold text-sm text-gray-700">
                      {brand.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-4">
                আরও অনেক আন্তর্জাতিক ব্র্যান্ড পাবেন আমাদের কাছে
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105">
                সব ব্র্যান্ড দেখুন
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
