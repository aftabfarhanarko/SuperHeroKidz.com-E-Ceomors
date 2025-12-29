import React from "react";
import {
  Calendar,
  Clock,
  TrendingUp,
  Award,
  Sparkles,
  ChevronRight,
  BookOpen,
  Heart,
  MessageCircle,
  Star,
  Palette,
  Zap,
  Tag,
} from "lucide-react";
import { fontBangla } from "../layout";

export const metadata = {
  title: "হিরো কিডজ ব্লগ",
  description: "শিশুদের খেলনা, বিকাশ এবং প্যারেন্টিং টিপস নিয়ে বাংলা ব্লগ",
};

const HeroKidzBlog = () => {
  const featuredPost = {
    title: "শিশুদের মানসিক বিকাশে খেলনার ভূমিকা",
    excerpt:
      "খেলনা শুধু বিনোদনের মাধ্যম নয়, এটি শিশুদের শারীরিক ও মানসিক বিকাশের একটি গুরুত্বপূর্ণ হাতিয়ার। গবেষণায় দেখা গেছে যে সঠিক খেলনা শিশুদের সৃজনশীলতা, সমস্যা সমাধান দক্ষতা এবং সামাজিক দক্ষতা বৃদ্ধি করে...",
    image:
      "https://images.stockcake.com/public/b/4/e/b4e0eb97-d1a6-4a6c-bb72-47053f3e4f31_large/children-playing-together-stockcake.jpg", // vibrant kids playing together
    author: "ডাঃ নাজিয়া রহমান",
    date: "১৫ ডিসেম্বর, ২০২৪",
    readTime: "৮ মিনিট",
    category: "শিশু বিকাশ",
    views: "২,৫৪৩",
    likes: "৪৫৬",
  };

  const blogPosts = [
    {
      title: "STEM খেলনা: ভবিষ্যৎ প্রজন্মের জন্য শিক্ষামূলক উপহার",
      excerpt:
        "বিজ্ঞান, প্রযুক্তি, ইঞ্জিনিয়ারিং এবং গণিতে শিশুদের আগ্রহ তৈরি করতে STEM খেলনার গুরুত্ব অপরিসীম। এই খেলনাগুলো শিশুদের যুক্তিযুক্ত চিন্তা করতে শেখায়...",
      image:
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/32216951-a384-42c4-8b70-5d6c442ed278.__CR0,0,1600,1200_PT0_SX800_V1___.jpg", // kids with STEM robotics
      author: "প্রফেসর আহমেদ করিম",
      date: "১২ ডিসেম্বর, ২০২৪",
      readTime: "৬ মিনিট",
      category: "শিক্ষামূলক",
      views: "১,৮৯২",
      likes: "৩২৮",
    },
    {
      title: "বয়স অনুযায়ী সঠিক খেলনা নির্বাচনের গাইড",
      excerpt:
        "প্রতিটি বয়সের শিশুদের জন্য আলাদা ধরনের খেলনা প্রয়োজন। ০-২ বছরের শিশুদের জন্য সেন্সরি খেলনা, ৩-৫ বছরের জন্য ইমাজিনেটিভ খেলনা উপযোগী...",
      image:
        "https://c8.alamy.com/comp/GETRKN/happy-preschool-age-children-play-with-colorful-plastic-toy-blocks-GETRKN.jpg", // kids building tower
      author: "সাবিহা আক্তার",
      date: "১০ ডিসেম্বর, ২০২৪",
      readTime: "৫ মিনিট",
      category: "প্যারেন্টিং টিপস",
      views: "৩,২১৫",
      likes: "৫৬৭",
    },
    {
      title: "নিরাপদ খেলনা কীভাবে চিনবেন?",
      excerpt:
        "শিশুদের খেলনা কেনার সময় নিরাপত্তা সবচেয়ে গুরুত্বপূর্ণ বিষয়। বিষমুক্ত প্লাস্টিক, ধারালো প্রান্তহীন ডিজাইন এবং বয়স-উপযোগী খেলনা নির্বাচন করুন...",
      image:
        "https://m.media-amazon.com/images/I/91tILaBUUTL._AC_UF894,1000_QL80_.jpg", // bright non-toxic crayons/toys
      author: "ইঞ্জিনিয়ার রাফি হোসেন",
      date: "০৮ ডিসেম্বর, ২০২৪",
      readTime: "৭ মিনিট",
      category: "নিরাপত্তা",
      views: "২,৭৬৮",
      likes: "৪৯৩",
    },
    {
      title: "খেলনার মাধ্যমে সৃজনশীলতা বৃদ্ধি",
      excerpt:
        "শিশুদের সৃজনশীল চিন্তাভাবনা উন্নত করতে ওপেন-এন্ডেড খেলনা যেমন ব্লক, আর্ট সেট, এবং বিল্ডিং টয় অত্যন্ত কার্যকর...",
      image:
        "https://thumbs.dreamstime.com/b/children-playing-together-building-blocks-educational-toys-preschool-kindergarten-kids-little-girls-build-toys-h-90711453.jpg", // cute girls with blocks
      author: "নুসরাত জাহান",
      date: "০৫ ডিসেম্বর, ২০২৪",
      readTime: "৬ মিনিট",
      category: "সৃজনশীলতা",
      views: "১,৬৫৪",
      likes: "২৯৮",
    },
    {
      title: "ইলেকট্রনিক vs ট্র্যাডিশনাল খেলনা: কোনটি ভালো?",
      excerpt:
        "আধুনিক ইলেকট্রনিক খেলনা এবং ঐতিহ্যবাহী খেলনা উভয়েরই নিজস্ব সুবিধা রয়েছে। সঠিক ব্যালেন্স বজায় রাখা জরুরি...",
      image:
        "https://static.vecteezy.com/system/resources/previews/071/543/656/large_2x/happy-child-learning-with-colorful-counting-beads-in-bright-modern-room-engaging-in-educational-playtime-developing-fine-motor-skills-and-creativity-photo.JPG", // child with beads
      author: "তানভীর ইসলাম",
      date: "০৩ ডিসেম্বর, ২০২৪",
      readTime: "৯ মিনিট",
      category: "তুলনামূলক বিশ্লেষণ",
      views: "৩,৮৯৪",
      likes: "৬৭২",
    },
    {
      title: "বাজেটের মধ্যে মানসম্পন্ন খেলনা কিনুন",
      excerpt:
        "দামি খেলনা মানেই সবসময় ভালো নয়। কম বাজেটেও শিক্ষামূলক এবং টেকসই খেলনা পাওয়া সম্ভব যা শিশুদের বিকাশে সহায়ক...",
      image:
        "https://static.vecteezy.com/system/resources/previews/048/505/924/large_2x/group-of-children-playing-with-wooden-toys-in-kindergarten-preschool-education-concept-photo.jpg", // group with wooden toys
      author: "ফারহানা খান",
      date: "০১ ডিসেম্বর, ২০২৪",
      readTime: "৫ মিনিট",
      category: "ক্রয় গাইড",
      views: "৪,২৩১",
      likes: "৭৮৯",
    },
  ];

  const categories = [
    { name: "শিশু বিকাশ", icon: Sparkles, color: "bg-purple-100 text-purple-600", hover: "hover:from-purple-400 hover:to-pink-400", count: 24 },
    { name: "শিক্ষামূলক", icon: Zap, color: "bg-blue-100 text-blue-600", hover: "hover:from-blue-400 hover:to-cyan-400", count: 18 },
    { name: "প্যারেন্টিং টিপস", icon: Heart, color: "bg-pink-100 text-pink-600", hover: "hover:from-pink-400 hover:to-red-400", count: 32 },
    { name: "নিরাপত্তা", icon: Award, color: "bg-green-100 text-green-600", hover: "hover:from-green-400 hover:to-teal-400", count: 15 },
    { name: "সৃজনশীলতা", icon: Palette, color: "bg-indigo-100 text-indigo-600", hover: "hover:from-indigo-400 hover:to-purple-400", count: 21 },
    { name: "ক্রয় গাইড", icon: Tag, color: "bg-yellow-100 text-yellow-600", hover: "hover:from-yellow-400 hover:to-orange-400", count: 12 },
  ];

  const trendingTopics = [
    "STEM খেলনা",
    "মন্টেসরি পদ্ধতি",
    "শিক্ষামূলক গেম",
    "নিরাপদ খেলনা",
    "বয়স-উপযোগী খেলনা",
    "ক্রিয়েটিভ টয়",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white py-16 px-6 md:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 animate-pulse" />
            <Star className="w-8 h-8 md:w-10 md:h-10 animate-spin-slow" />
            <Palette className="w-8 h-8 md:w-10 md:h-10 animate-pulse" />
          </div>
          <h1 className={`${fontBangla.className} text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg`}>
            হিরো কিডজ ব্লগ
          </h1>
          <p className={`${fontBangla.className} text-lg  lg:text-2xl text-white/90 max-w-4xl mx-auto`}>
            শিশুদের জন্য সেরা খেলনা, বিকাশের টিপস এবং মজার প্যারেন্টিং গাইড – সব এক জায়গায়!
          </p>
        </div>
      </div>
      

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Featured Post */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
              <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-sm text-purple-700 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold flex items-center gap-2 sm:gap-3 shadow-lg text-sm sm:text-base">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  ফিচারড পোস্ট
                </div>
              </div>
              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6 text-sm sm:text-base">
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 sm:px-5 sm:py-2 rounded-full font-bold">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className={`${fontBangla.className} text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-5`}>
                  {featuredPost.title}
                </h2>
                <p className={`${fontBangla.className} text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8`}>
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 sm:pt-6 border-t-2 border-purple-100 gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-md">
                      {featuredPost.author[0]}
                    </div>
                    <div>
                      <p className={`${fontBangla.className} font-bold text-gray-800 text-base sm:text-lg`}>
                        {featuredPost.author}
                      </p>
                      <p className="text-sm text-gray-500">লেখক</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6 text-base sm:text-lg">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 fill-pink-500" />
                      <span className="font-bold">{featuredPost.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                      <span className="font-bold">{featuredPost.views}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center gap-2 sm:gap-3">
                  সম্পূর্ণ পড়ুন
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Blog Grid */}
            <h3 className={`${fontBangla.className} text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4`}>
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
              সর্বশেষ পোস্টসমূহ
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-115 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur text-purple-700 px-3 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-md">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-5 sm:p-7">
                    <h4 className={`${fontBangla.className} text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 line-clamp-2`}>
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-5 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-5">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-gray-200">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold shadow-md text-xs sm:text-base">
                          {post.author[0]}
                        </div>
                        <span className="font-semibold text-gray-700 text-sm sm:text-base">
                          {post.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 text-pink-500 text-sm sm:text-base">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                        <span className="font-bold">{post.likes}</span>
                      </div>
                    </div>
                    <button className="w-full mt-5 sm:mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center gap-2">
                      পড়ুন
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12 sm:mt-16">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transform hover:scale-110 transition-all">
                আরও পোস্ট দেখুন
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 sm:space-y-10">
            {/* Newsletter */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-2xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                <h3 className={`${fontBangla.className} text-2xl sm:text-3xl font-bold`}>নিউজলেটার</h3>
              </div>
              <p className="mb-6 sm:mb-8 text-base sm:text-lg">
                প্রতি সপ্তাহে নতুন টিপস ও পোস্ট আপনার ইমেইলে পান
              </p>
              <input
                type="email"
                placeholder="আপনার ইমেইল লিখুন"
                className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-full mb-3 sm:mb-4 text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30 text-sm sm:text-base"
              />
              <button className="w-full bg-white text-purple-600 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-xl transform hover:scale-105 transition-all">
                সাবস্ক্রাইব করুন
              </button>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className={`${fontBangla.className} text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3`}>
                <Tag className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
                ক্যাটাগরিসমূহ
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={index}
                      className={`w-full flex items-center justify-between p-4 sm:p-5 ${category.color} hover:text-white rounded-2xl transition-all group ${category.hover}`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:animate-bounce" />
                        <span className="font-bold text-base sm:text-lg">{category.name}</span>
                      </div>
                      <span className="bg-white/30 group-hover:bg-white group-hover:text-purple-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-sm sm:text-base">
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className={`${fontBangla.className} text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3`}>
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
                ট্রেন্ডিং টপিক
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {trendingTopics.map((topic, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-purple-600 hover:text-white rounded-full font-bold shadow-md transition-all transform hover:scale-105 text-sm sm:text-base"
                  >
                    #{topic}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default HeroKidzBlog;