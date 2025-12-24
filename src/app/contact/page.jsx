import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  CheckCircle,
} from "lucide-react";
import { fontBangla } from "../layout";

const ContactPage = () => {
//   const handleSubmit = () => {
//     // Form submission logic here
//     alert("আপনার বার্তা সফলভাবে পাঠানো হয়েছে!");
//   };

  const contactInfo = [
    {
      icon: Phone,
      title: "ফোন",
      details: ["+880 1234-567890", "+880 1987-654321"],
      link: "tel:+8801234567890",
    },
    {
      icon: Mail,
      title: "ইমেইল",
      details: ["support@herokidz.com", "info@herokidz.com"],
      link: "mailto:support@herokidz.com",
    },
    {
      icon: MapPin,
      title: "ঠিকানা",
      details: ["১২৩, গুলশান এভিনিউ", "ঢাকা - ১২১২, বাংলাদেশ"],
      link: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "কর্মঘণ্টা",
      details: ["সোম - শুক্র: ৯:০০ - ৬:০০", "শনি: ১০:০০ - ৪:০০"],
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", link: "#", color: "hover:bg-blue-600" },
    {
      icon: Instagram,
      name: "Instagram",
      link: "#",
      color: "hover:bg-pink-600",
    },
    { icon: Youtube, name: "YouTube", link: "#", color: "hover:bg-red-600" },
    { icon: Twitter, name: "Twitter", link: "#", color: "hover:bg-sky-600" },
  ];

  const faqs = [
    {
      question: "ডেলিভারি কত দিনে হয়?",
      answer:
        "সাধারণত ঢাকার ভিতরে ২-৩ দিন এবং ঢাকার বাইরে ৪-৫ দিনে ডেলিভারি সম্পন্ন হয়।",
    },
    {
      question: "রিটার্ন পলিসি কি?",
      answer:
        "পণ্য গ্রহণের ৭ দিনের মধ্যে রিটার্ন করা যাবে, তবে পণ্য অবশ্যই অব্যবহৃত থাকতে হবে।",
    },
    {
      question: "পেমেন্ট কিভাবে করবো?",
      answer:
        "আমরা ক্যাশ অন ডেলিভারি, বিকাশ, নগদ এবং রকেট সহ সকল পেমেন্ট মেথড গ্রহণ করি।",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-400 to-amber-500 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-10 h-10" />
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className={`${fontBangla.className} `}>যোগাযোগ করুন</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            <span className={`${fontBangla.className} `}>
              আমরা সবসময় আপনার সেবায় প্রস্তুত। যেকোনো প্রশ্ন বা সহায়তার জন্য
              আমাদের সাথে যোগাযোগ করুন
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-orange-400 to-amber-400 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <span className={`${fontBangla.className} `}>{info.title}</span>
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-1">
                    <span className={`${fontBangla.className} `}>{detail}</span>
                  </p>
                ))}
                {info.link && (
                  <a
                    href={info.link}
                    className="inline-block mt-3 text-orange-400 hover:text-orange-500 font-semibold"
                  >
                    <span className={`${fontBangla.className} `}>বিস্তারিত →</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Send className="w-8 h-8 text-orange-400" />
              <span className={`${fontBangla.className} `}>
                আমাদের বার্তা পাঠান
              </span>
            </h2>
            <div className="space-y-6">
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
                  <span className={`${fontBangla.className} `}>
                    ইমেইল ঠিকানা *
                  </span>
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
                  <span className={`${fontBangla.className} `}>
                    আপনার বার্তা *
                  </span>
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all resize-none"
                  placeholder="এখানে আপনার বার্তা লিখুন..."
                ></textarea>
              </div>

              <button
                // onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-orange-400 to-amber-400 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-6 h-6" />
                <span className={`${fontBangla.className} `}>বার্তা পাঠান</span>
              </button>
            </div>
          </div>

          {/* Map & Info */}
          <div className="space-y-8">
            {/* Google Map */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-orange-200 to-amber-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0977891954493!2d90.39728831498!3d23.780975384578425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1b6a0d6b9%3A0x4e73e9a6c2c6d4a8!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1629789123456!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-orange-400" />
                  <span className={`${fontBangla.className} `}>আমাদের লোকেশন</span>
                </h3>
                <p className="text-gray-600">
                  <span className={`${fontBangla.className} `}>
                    ১২৩, গুলশান এভিনিউ, ঢাকা - ১২১২, বাংলাদেশ
                  </span>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                <span className={`${fontBangla.className} `}>
                  সোশ্যাল মিডিয়ায় আমরা
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      className={`flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all group ${social.color}`}
                    >
                      <div className="bg-white p-3 rounded-full group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 transition-all">
                        <Icon className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-semibold text-gray-700">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Support */}
            <div className="bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl shadow-2xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-4 rounded-full">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    <span className={`${fontBangla.className} `}>
                      তাৎক্ষণিক সহায়তা
                    </span>
                  </h3>
                  <p className="text-orange-100 mb-4">
                    <span className={`${fontBangla.className} `}>
                      জরুরি সহায়তার জন্য আমাদের হটলাইনে কল করুন
                    </span>
                  </p>
                  <a
                    href="tel:+8801234567890"
                    className="inline-flex items-center gap-2 bg-white text-orange-400 px-6 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    <span className={`${fontBangla.className} `}>
                      এখনই কল করুন
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            <span className={`${fontBangla.className} `}>
              প্রায়শই জিজ্ঞাসিত প্রশ্ন
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:shadow-lg transition-all"
              >
                <h4 className="text-lg font-bold text-gray-800 mb-3">
                  <span className={`${fontBangla.className} `}>
                    {faq.question}
                  </span>
                </h4>
                <p className="text-gray-600">
                  <span className={`${fontBangla.className} `}>{faq.answer}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
