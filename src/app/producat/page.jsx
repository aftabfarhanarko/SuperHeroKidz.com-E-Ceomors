import { getDataDB } from "@/actions/server/getData";
import Cards from "@/components/card/Cards";
import Producats from "@/components/Home/Producats";
import React from "react";
import { fontBangla } from "../layout";

const Producat = async () => {
  const product2 = (await getDataDB()) || [];
  return (
    <div className="py-15 max-w-11/12 mx-auto">
      <h1 className={`${fontBangla.className} text-4xl font-semibold text-center mb-15`}>
             আমাদের <span className="text-primary">পণ্য </span>
            </h1>
      <divsdsa
        className="grid gap-6
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4
                      xl:grid-cols-4
                    justify-center"
      >
        {product2.map((one) => (
          <Cards one={one} key={one.price} />
        ))}
      </divsdsa>
    </div>
  );
};

export default Producat;
