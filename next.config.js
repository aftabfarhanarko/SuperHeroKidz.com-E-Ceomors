/** @type {import('next').NextConfig} */
const nextConfig = {
  // ইমেজ আপলোডের জন্য বড় ফাইল সাপোর্ট (Server Actions-এর ক্ষেত্রে এটা সবচেয়ে গুরুত্বপূর্ণ)
  experimental: {
    serverActions: {
      bodySizeLimit: "30mb", // 30MB পর্যন্ত ফাইল আপলোড করতে পারবে (দরকার হলে 50mbও করতে পারো)
    },
  },

  // রিমোট ইমেজের জন্য (তুমি ইতিমধ্যে ibb.co যোগ করেছো, আরও যদি লাগে যোগ করো)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      // যদি অন্য কোনো হোস্ট থেকে ইমেজ দেখাতে চাও তাহলে এখানে যোগ করো
      // উদাহরণ:
      // {
      //   protocol: "https",
      //   hostname: "res.cloudinary.com",
      // },
    ],
  },

  // React Compiler (Next.js 15+ এ আছে, তুমি রেখেছো ভালোই)
  reactCompiler: true,

  // যদি API routes ব্যবহার করো তাহলে এটাও যোগ করতে পারো (অতিরিক্ত সেফটি)
  api: {
    bodyParser: {
      sizeLimit: "30mb",
    },
  },
};

export default nextConfig;
