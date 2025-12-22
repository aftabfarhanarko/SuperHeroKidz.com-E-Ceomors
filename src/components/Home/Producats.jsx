import React from "react";
// import product from "@/data/toys.json";
import Cards from "../card/Cards";
import { getDataDB } from "@/actions/server/getData";

const Producats = async () => {
    const product = (await  getDataDB()) || [] ;
  return (
    <div className="">
      <h1 className="text-4xl font-semibold text-center mb-15">
        Our <span className="text-primary">Product</span>
      </h1>
      <div
        className="grid gap-6
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4
                      xl:grid-cols-4
                    justify-center"
      >
        {product.map((one) => (
          <Cards one={one} key={one._id} />
        ))}
      </div>
    </div>
  );
};

export default Producats;
