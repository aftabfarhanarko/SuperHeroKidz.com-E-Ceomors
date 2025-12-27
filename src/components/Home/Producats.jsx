import React from "react";
// import product from "@/data/toys.json";
import Cards from "../card/Cards";
import { getDataDB } from "@/actions/server/getData";
import { fontBangla } from "@/app/layout";

const Producats = async () => {
  const product2 = (await getDataDB()) || [];
  // console.log(product2);

  return (
    <div className="">
      <h1
        className={`${fontBangla.className} text-4xl font-semibold text-center mb-15`}
      >
        আমাদের <span className="text-primary">পণ্য </span>
      </h1>
      <div
        className="grid gap-6
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4
                      xl:grid-cols-4
                    justify-center my-10"
      >
        {product2.map((one) => (
          <Cards one={one} key={one._id} />
        ))}
      </div>
    </div>
  );
};

export default Producats;
