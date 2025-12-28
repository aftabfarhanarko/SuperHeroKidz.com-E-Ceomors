import Banner from "@/components/Home/Banner";
import Producats from "@/components/Home/Producats";

export default async function Home() {
  return (
    <div className="space-y-25">
      <section>
        <Banner></Banner>
      </section>
      <section
        className="
  mx-auto
  max-w-11/12"
      >
        <Producats></Producats>
      </section>
    </div>
  );
}
