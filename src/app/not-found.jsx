import React from "react";
import {
  Home,
  Search,
  ArrowLeft,
  AlertCircle,
  Frown,
  MapPin,
  Compass,
} from "lucide-react";
import Link from "next/link";
import { fontBangla } from "./layout";

const Error404Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full">
        {/* Main Error Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 opacity-10"></div>

            <div className="relative p-8 md:p-12 text-center">
              {/* Animated Icon */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-orange-400 to-amber-500 rounded-full p-8 transform hover:scale-110 transition-transform duration-300">
                    <Frown className="w-15  h-15  text-white animate-bounce" />
                  </div>
                </div>
              </div>

              {/* 404 Text */}
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 mb-4 animate-pulse">
                  404
                </h1>
                <h2
                  className={`${fontBangla.className} text-2xl md:text-3xl font-bold text-gray-800 mb-4`}
                >
                  ওহ না! পেজটি খুঁজে পাওয়া যায়নি
                </h2>
                <p
                  className={`${fontBangla.className} text-md md:text-lg text-gray-600 max-w-2xl mx-auto`}
                >
                  আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে, নাম
                  পরিবর্তন করা হয়েছে, অথবা সাময়িকভাবে অনুপলব্ধ।
                </p>
              </div>

              {/* Action Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button
                  className={` group flex items-center gap-3 bg-gradient-to-r from-orange-400 to-amber-500 text-white px-6 py-3 rounded-full font-bold text-md  hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
                >
                  <Home className="w-6 h-6 group-hover:animate-bounce" />
                  হোম পেজে যান
                </button>

                <button className="group flex items-center gap-3 bg-white border-2 border-orange-400 text-orange-400 px-6 py-3 rounded-full font-bold text-mmd hover:bg-orange-400 hover:text-white transform hover:scale-105 transition-all duration-300">
                  <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                  পেছনে যান
                </button>
              </div> */}

              {/* Search Box */}
              <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="এখানে সার্চ করুন..."
                    className="w-full px-6 py-2.5 pr-12 rounded-full border-2 border-orange-200 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all text-gray-700"
                  />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-400 to-amber-400 text-white p-3 rounded-full hover:shadow-lg transform hover:scale-110 transition-all">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Helpful Links */}
              <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <Link
                  href="/"
                  className="group flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-orange-400 to-amber-400 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <h3
                      className={`${fontBangla.className} font-bold text-gray-800 mb-1`}
                    >
                      হোম পেজ
                    </h3>
                    <p
                      className={`${fontBangla.className} text-sm text-gray-600`}
                    >
                      মূল পেজে ফিরে যান
                    </p>
                  </div>
                </Link>

                <Link
                  href="/producat"
                  className="group flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-orange-400 to-amber-400 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Compass className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <h3
                      className={`${fontBangla.className} font-bold text-gray-800 mb-1`}
                    >
                      প্রোডাক্ট
                    </h3>
                    <p
                      className={`${fontBangla.className} text-sm text-gray-600`}
                    >
                      খেলনা দেখুন
                    </p>
                  </div>
                </Link>


                <Link
                  href="/contact"
                  className="group flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-orange-400 to-amber-400 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <h3
                      className={`${fontBangla.className} font-bold text-gray-800 mb-1`}
                    >
                      যোগাযোগ
                    </h3>
                    <p
                      className={`${fontBangla.className} text-sm text-gray-600`}
                    >
                      সাহায্য পান
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-r from-orange-400 to-amber-400 p-3 rounded-full flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3
                className={`${fontBangla.className} text-xl font-bold text-gray-800 mb-2`}
              >
                সাহায্য প্রয়োজন?
              </h3>
              <p className={`${fontBangla.className} text-gray-600 mb-4`}>
                যদি আপনি মনে করেন এটি একটি ভুল, তাহলে আমাদের সাপোর্ট টিমের সাথে
                যোগাযোগ করুন। আমরা সাহায্য করতে প্রস্তুত!
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:support@herokidz.com"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-500 font-semibold"
                >
                  📧 support@herokidz.com
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="tel:+8801234567890"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-500 font-semibold"
                >
                  📞 +880 1234-567890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Error Code: 404 | Hero Kidz © 2024
          </p>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="fixed top-10 left-10 w-20 h-20 bg-orange-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="fixed bottom-10 right-10 w-32 h-32 bg-amber-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="fixed top-1/2 right-20 w-16 h-16 bg-yellow-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
    </div>
  );
};

export default Error404Page;
