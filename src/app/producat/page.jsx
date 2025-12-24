import { getDataDB } from "@/actions/server/getData";
import Cards from "@/components/card/Cards";
import Producats from "@/components/Home/Producats";
import React from "react";

const Producat = async () => {
  const product2 = (await getDataDB()) || [];
  return (
    <div className="py-15 max-w-11/12 mx-auto">
      <div
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
      </div>
    </div>
  );
};

export default Producat;
