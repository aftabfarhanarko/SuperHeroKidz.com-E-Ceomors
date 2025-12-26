import { Bai_Jamjuree } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { Toaster } from "sonner";
import NextAuthProvider from "@/provider/NextAuthProvider";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400"],
});
export const fontBangla = localFont({
  src: "./../fonts/mayaboti-Italic.ttf",
});
export const metadata = {
  metadataBase: new URL(
    "https://hero-kidz-o0js8sd65-aftab-farhans-projects.vercel.app"
  ),

  applicationName: "Hero Kidz",

  title: {
    default: "Hero Kidz ",
    template: "%s | Hero Kidz",
  },

  description:
    "Discover high-quality products at affordable prices. Shop confidently with fast delivery and trusted service.",

  keywords: [
    "online shop",
    "ecommerce website",
    "buy products online",
    "premium products",
    "your brand name",
  ],

  authors: [{ name: "Your Brand Name" }],
  creator: "Your Brand Name",
  publisher: "Your Brand Name",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "https://i.ibb.co.com/6Rnd75hW/image.png",
    shortcut: "https://i.ibb.co.com/6Rnd75hW/image.png",
    apple: "https://i.ibb.co.com/6Rnd75hW/image.png",
  },

  manifest: "/manifest.json",

  themeColor: "#0f172a",

  alternates: {
    canonical: "https://yourdomain.com",
  },

  // ===============================
  // OPEN GRAPH (Social Sharing)
  // ===============================
  openGraph: {
    type: "website",
    siteName: "Hero Kidz",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Hero Kidz – Premium Products Online",
    description:
      "Explore our collection of premium products with secure checkout and fast delivery.",
    images: [
      {
        url: "https://i.ibb.co.com/sTNcPBP/image.png",
        width: 1200,
        height: 630,
        alt: "Your Website Home Page Preview",
      },
    ],
  },

  // ===============================
  // TWITTER / X
  // ===============================
  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz – Premium Products Online",
    description:
      "Shop premium products online with trusted service and fast delivery.",
    images: ["https://i.ibb.co.com/sTNcPBP/image.png"],
    creator: "@yourtwitterhandle",
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${baiJamjuree.className}  antialiased`}>
          <header>
            <Navbar></Navbar>
          </header>
          <div className=" h-[80px]"></div>
          <main className="min-h-[calc(100vh-302px)]">
            {children}
            <Toaster position="top-right" />
          </main>

          <footer>
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
