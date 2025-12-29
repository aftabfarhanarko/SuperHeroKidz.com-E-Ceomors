"use client";
import React, { useState, useEffect } from "react";
import {
  Heart,
  Star,
  ShoppingCart,
  Users,
  Gift,
  Award,
  TrendingUp,
  Truck,
  Shield,
  CheckCircle,
  Play,
  ArrowRight,
} from "lucide-react";

export default function HeroKidsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    const animateCounter = (setter, target, duration = 2000) => {
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, duration / steps);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounter(setCustomerCount, 5000);
        animateCounter(setProductCount, 2500);
        animateCounter(setSatisfactionCount, 98);
        observer.disconnect();
      }
    });

    const statsElement = document.getElementById("stats-counter");
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  const categories = [
    { name: "শিক্ষামূলক খেলনা", icon: "📚", color: "bg-blue-500" },
    { name: "ক্রিয়েটিভ টয়", icon: "🎨", color: "bg-purple-500" },
    { name: "আউটডোর গেমস", icon: "⚽", color: "bg-green-500" },
    { name: "বেবি প্রোডাক্ট", icon: "🍼", color: "bg-pink-500" },
  ];

  const features = [
    {
      icon: Truck,
      title: "ফ্রি ডেলিভারি",
      desc: "১০০০ টাকার উপরে অর্ডারে",
      color: "text-orange-500",
    },
    {
      icon: Shield,
      title: "১০০% নিরাপদ",
      desc: "সেফটি সার্টিফাইড",
      color: "text-green-500",
    },
    {
      icon: Award,
      title: "সেরা মান",
      desc: "কোয়ালিটি গ্যারান্টি",
      color: "text-blue-500",
    },
    {
      icon: Users,
      title: "৫০০০+ গ্রাহক",
      desc: "সন্তুষ্ট কাস্টমার",
      color: "text-purple-500",
    },
  ];

  const testimonials = [
    {
      name: "সাবিনা আক্তার",
      location: "ঢাকা",
      text: "অসাধারণ খেলনা! আমার বাচ্চা খুব খুশি।",
      rating: 5,
      avatar: "👩",
    },
    {
      name: "রফিক উদ্দিন",
      location: "চট্টগ্রাম",
      text: "দাম এবং কোয়ালিটি দুটোই চমৎকার।",
      rating: 5,
      avatar: "👨",
    },
    {
      name: "নাজমা বেগম",
      location: "সিলেট",
      text: "দ্রুত ডেলিভারি পেয়েছি। ধন্যবাদ!",
      rating: 5,
      avatar: "👩",
    },
  ];

  const offers = [
    {
      title: "নতুন কালেকশন",
      discount: "৩০% ছাড়",
      bg: "from-pink-400 to-rose-500",
    },
    {
      title: "স্পেশাল অফার",
      discount: "কিনুন ১ পান ১",
      bg: "from-blue-400 to-indigo-500",
    },
    {
      title: "সীমিত সময়",
      discount: "৫০% পর্যন্ত",
      bg: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 via-white to-blue-50">
      {/* Category Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              আমাদের <span className="text-orange-500">ক্যাটাগরি</span>
            </h2>
            <p className="text-gray-600">আপনার পছন্দের খেলনা খুঁজে নিন</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`group cursor-pointer bg-white rounded-3xl p-6 md:p-8 text-center shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 ${
                  activeCategory === idx
                    ? "border-orange-500"
                    : "border-transparent"
                }`}
              >
                <div className="text-5xl md:text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-sm md:text-base">
                  {cat.name}
                </h3>
                <div
                  className={`w-12 h-1 ${cat.color} mx-auto mt-3 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
              >
                <div
                  className={`w-16 h-16 ${feature.color} bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
                >
                  <feature.icon size={32} className={feature.color} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-orange-500 to-rose-500 rounded-3xl p-8 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                <div className="relative z-10">
                  <div className="text-white/80 font-semibold mb-2">
                    {offer.title}
                  </div>
                  <div className="text-3xl font-bold text-white mb-4">
                    {offer.discount}
                  </div>
                  <button className="bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-orange-50 transition-colors inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    কিনুন এখনই <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section
        id="stats-counter"
        className="py-16 px-4 bg-gradient-to-r from-orange-500 to-rose-500"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">
                {customerCount.toLocaleString()}+
              </div>
              <div className="text-xl text-white/90">সন্তুষ্ট গ্রাহক</div>
              <div className="w-20 h-1 bg-white mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">
                {productCount.toLocaleString()}+
              </div>
              <div className="text-xl text-white/90">প্রোডাক্ট সংগ্রহ</div>
              <div className="w-20 h-1 bg-white mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">
                {satisfactionCount}%
              </div>
              <div className="text-xl text-white/90">সন্তুষ্টির হার</div>
              <div className="w-20 h-1 bg-white mx-auto mt-3 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              গ্রাহকদের <span className="text-orange-500">মতামত</span>
            </h2>
            <p className="text-gray-600">তারা কী বলছেন আমাদের সম্পর্কে</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-rose-500 rounded-full flex items-center justify-center text-2xl mr-3">
                    {test.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{test.name}</div>
                    <div className="text-sm text-gray-500">{test.location}</div>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic">"{test.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                কেন <span className="text-orange-500">Hero Kids</span> বেছে
                নিবেন?
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: CheckCircle,
                    text: "শিশুদের জন্য সম্পূর্ণ নিরাপদ খেলনা",
                  },
                  { icon: CheckCircle, text: "আন্তর্জাতিক মানের পণ্য" },
                  { icon: CheckCircle, text: "সাশ্রয়ী মূল্যে সেরা কোয়ালিটি" },
                  { icon: CheckCircle, text: "দ্রুত এবং নির্ভরযোগ্য ডেলিভারি" },
                  { icon: CheckCircle, text: "শিক্ষামূলক এবং মজাদার খেলনা" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                      <item.icon
                        size={20}
                        className="text-orange-500 group-hover:text-white transition-colors"
                      />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2">
                আরও জানুন <ArrowRight size={20} />
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-200 to-pink-200 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/30 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/30 rounded-full -ml-16 -mb-16"></div>

                <div className="relative z-10 text-center">
                  <div className="text-7xl mb-4">🎁</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    স্পেশাল গিফট
                  </h3>
                  <p className="text-gray-700 mb-6">
                    প্রতিটি অর্ডারে পাচ্ছেন সারপ্রাইজ গিফট!
                  </p>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-4xl font-bold text-orange-500 mb-2">
                      ৩০% ছাড়
                    </div>
                    <div className="text-gray-600">প্রথম অর্ডারে</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
