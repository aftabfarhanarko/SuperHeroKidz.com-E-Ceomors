import { getUserCart } from "@/actions/addcart";
import PagesPayment from "@/components/Home/PagesPayment";
import React from "react";

const pageChackOut = async () => {
  const getCart = await getUserCart();

  return (
    <div>
      <PagesPayment getCart={getCart} />
    </div>
  );
};

export default pageChackOut;
