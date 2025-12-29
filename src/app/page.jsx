import Banner from "@/components/Home/Banner";
import HeroKidsSection from "@/components/Home/NextPAge";
import HeroKidsNewSections2 from "@/components/Home/NextSections";
import Producats from "@/components/Home/Producats";

export default async function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner></Banner>
      </section>
      <section className="mb-5">
        <HeroKidsSection />
      </section>
      <section
        className="
  mx-auto
  max-w-11/12"
      >
        <Producats></Producats>
      </section>

      <section className="my-10">
        <HeroKidsNewSections2 />
      </section>
    </div>
  );
}
