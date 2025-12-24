import { singelProducat } from "@/actions/server/getData";
import ProductDetails from "@/components/card/ProductDetails";
import React from "react";

const Page = async ({ params }) => {
  const { id } = await params; 
  console.log(id);
  const product = await singelProducat(id);
//   console.log(product);
  
  return (
    <div className=" mx-auto ">
      {/* Details Page for ID: {id} */}
      <div>
        <ProductDetails product={product}></ProductDetails>
      </div>
    </div>
  );
};

export default Page;
