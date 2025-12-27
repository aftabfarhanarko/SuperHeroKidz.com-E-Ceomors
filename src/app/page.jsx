import Banner from "@/components/Home/Banner";
import Producats from "@/components/Home/Producats";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  console.log(session);

  return (
    <div className="space-y-25">
      {JSON.stringify(session)}
      <section>
        <Banner></Banner>
      </section>
      <section
        className="
  mx-auto
  max-w-11/12

"
      >
        <Producats></Producats>
      </section>
    </div>
  );
}
// 3f7RFEqS9l4Nvlcq
// HeroKidz
