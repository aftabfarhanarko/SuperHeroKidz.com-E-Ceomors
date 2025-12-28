"use client";
import React, { useMemo, useState } from "react";
import CartItem from "./Cart.";

const ClientCart = ({ itemsData }) => {
  const [items, setItemms] = useState(itemsData);
  const totalItems = useMemo(
    // items er valu ke memo kore rekha page reload hoilou count agen hoy na
    () => items.reduce((acm, item) => acm + item.quantity, 0),
    [items]
  );

  const removedItems = (id) => {
    console.log(id);
    setItemms((prev) => prev.filter((ite) => ite._id != id));
  };

  const updeatQuintitey = async (quantity, id) => {
    console.log("Updeat Now", { quantity, id });
    setItemms((prve) =>
      prve.map((item) =>
        item._id == id ? { ...item, quantity: quantity } : item
      )
    );
  };
  const decrimetQuitity = async (quantity, id) => {
    console.log("Updeat Now", { quantity, id });
    setItemms((prve) =>
      prve.map((item) =>
        item._id == id ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <div>
      <div className="flex mx-auto -mt-10 max-w-[150px] items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold shadow-lg">
        <span className="animate-pulse">●</span>
        <span>{items.length} Items in Cart</span>
      </div>
      <p className="text-4xl text-primary font-bold">
        Total Items {totalItems}
      </p>
      <div className="mt-15">
        {items.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            removedItems={removedItems}
            updeatQuintitey={updeatQuintitey}
            decrimetQuitity={decrimetQuitity}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientCart;
