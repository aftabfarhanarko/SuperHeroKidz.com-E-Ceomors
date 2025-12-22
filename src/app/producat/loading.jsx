import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import React from "react";

const loading = () => {
  return (
    <div
      className="grid gap-6
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4
                      xl:grid-cols-4"
    >
      {[...Array(9)].map((_, index) => (
        <ProductSkeleton key={index}></ProductSkeleton>
      ))}
    </div>
  );
};

export default loading;
