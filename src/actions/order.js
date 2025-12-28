"use server";

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { cleradCart, getUserCart } from "./addcart";
import { sendEmail } from "@/lib/sendEmail";
import { orderInvoiceTemplate } from "@/lib/invoiceTemplate";
import { ObjectId } from "mongodb";

const { dbConnect, collection } = require("@/lib/mopngodb");

const orderCollectios = dbConnect(collection.ORDER);

export const creatorder = async (payload) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    return { success: false };
  }

  const getCart = await getUserCart();
  if (getCart.length === 0) {
    return { success: false };
  }

  // Kaj Baki SLode Updeat Korta hobe
  // const producatsold = getCart.map((item ) => ({_id: new ObjectId(payload.p)}))


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

  // 📧 Send Invoice Email
  const sendUserEmail = await sendEmail({
    to: user.email,
    subject: "Your Order Invoice - Hero Kidz",
    html: orderInvoiceTemplate({
      orderId: results.insertedId.toString(),
      items: getCart,
      totalPrice: payload.total,
    }),
  });
  // console.log(sendUserEmail);

  return { success: Boolean(results.insertedId) };
};
