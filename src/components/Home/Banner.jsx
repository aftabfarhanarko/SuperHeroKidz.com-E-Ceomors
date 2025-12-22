import { fontBangla } from "@/app/layout";
import Image from "next/image";
const Banner = () => {

  return (
    <section className="w-full bg-gradient-to-r from-pink-50 to-blue-50">
      <div className="max-w-11/12 mx-auto container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className={`${fontBangla.className} text-3xl md:text-5xl font-bold text-gray-900 leading-tight`}>
            আপনার শিশুকে দিন একটি <span className="text-primary">সুন্দর ভবিষ্যত</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Buy every toy with up to{" "}
            <span className="font-semibold text-primary">15% discount</span>
          </p>

          <button className="mt-6 inline-block rounded-xl bg-primary px-8 py-3 text-white font-medium transition hover:bg-pink-700">
            Explore Products
          </button>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/hero.png"
            width={600}
            height={500}
            priority
            alt="Buy every toy with up to 15% discount"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
