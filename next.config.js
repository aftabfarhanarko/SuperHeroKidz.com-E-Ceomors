/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "15mb",
    },
  },

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

  reactCompiler: true,

  api: {
    bodyParser: {
      sizeLimit: "15mb",
    },
  },
};

export default nextConfig;
