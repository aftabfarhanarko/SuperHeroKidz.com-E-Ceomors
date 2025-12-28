"use server";

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { cleradCart, getUserCart } from "./addcart";

const { dbConnect, collection } = require("@/lib/mopngodb");

const orderCollectios = dbConnect(collection.ORDER);

export const creatorder = async (payload) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    return { success: false };
  }
  console.log(payload);
  //   console.log(payload);

  const getCart = await getUserCart();
  if (getCart.length === 0) {
    return { success: false };
  }

  const insartOrder = {
    item: getCart,
    ...payload,
    orderTime: new Date().toISOString(),
  };

  const results = await orderCollectios.insertOne(insartOrder);
  //   console.log("Inseart Now", insartOrder);
  if (results.insertedId) {
    const result = await cleradCart();
  }

  return { success: Boolean(results.insertedId) };
};
