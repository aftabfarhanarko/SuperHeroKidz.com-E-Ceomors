"use client";
import { fontBangla } from "@/app/layout";
import { Send } from "lucide-react";
import React from "react";

const Form = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault(); // page reload বন্ধ করবে
    alert("আপনার বার্তা সফলভাবে পাঠানো হয়েছে");
    e.target.reset(); // ফর্ম রিসেট করবে
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            <span className={`${fontBangla.className} `}>আপনার নাম *</span>
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all"
            placeholder="নাম লিখুন"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            <span className={`${fontBangla.className} `}>ইমেইল ঠিকানা *</span>
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            <span className={`${fontBangla.className} `}>ফোন নম্বর</span>
          </label>
          <input
            type="tel"
            className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all"
            placeholder="+880 1234-567890"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            <span className={`${fontBangla.className} `}>বিষয়</span>
          </label>
          <select className="w-full select px-4  h-13 border-2 border-orange-200 rounded-xl focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all">
            <option className={`${fontBangla.className} `}>
              সাধারণ জিজ্ঞাসা
            </option>
            <option className={`${fontBangla.className} `}>
              পণ্য সম্পর্কে
            </option>
            <option className={`${fontBangla.className} `}>
              অর্ডার স্ট্যাটাস
            </option>
            <option className={`${fontBangla.className} `}>
              রিটার্ন/রিফান্ড
            </option>
            <option className={`${fontBangla.className} `}>অন্যান্য</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            <span className={`${fontBangla.className} `}>আপনার বার্তা *</span>
          </label>
          <textarea
            rows={5}
            className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all resize-none"
            placeholder="এখানে আপনার বার্তা লিখুন..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-400 to-amber-400 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Send className="w-6 h-6" />
          <span className={`${fontBangla.className} `}>বার্তা পাঠান</span>
        </button>
      </form>
    </div>
  );
};

export default Form;
