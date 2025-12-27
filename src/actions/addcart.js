"use server";

import { authOptions } from "@/lib/authOptions";
import { collection, dbConnect } from "@/lib/mopngodb";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { cache } from "react";

const cartCollection = dbConnect(collection.CART);
export const handleCart = async ({ producat, inc = true }) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    return { success: false };
  }

  try {
    //   Check producat all readey saved
    const query = { email: user?.email, producatId: producat._id };
    const isSaved = await cartCollection.findOne(query);

    if (isSaved) {
      // Updeat Now
      const updeatData = {
        $inc: {
          quantity: inc ? 1 : -1,
        },
      };
      const updeatResult = await cartCollection.updateOne(query, updeatData);
      return { success: Boolean(updeatResult.modifiedCount) };
      // return {
      //   success: false,
      //   message: "আপনি ইতোমধ্যেই পণ্যটি কার্টে যোগ করেছেন",
      // };
    } else {
      // Saved Data Base
      const newProducat = {
        producatId: producat._id,
        email: user?.email,
        name: producat.bangla,
        image: producat.image,
        price: producat.price - (producat.price * producat.discount) / 100,
        ratings: producat.ratings,
        sold: producat.sold,
        quantity: 1,
      };
      const result = await cartCollection.insertOne(newProducat);
      return { success: result.acknowledged };
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserCart = cache(async () => {
  try {
    const { user } = (await getServerSession(authOptions)) || {};
    if (!user) {
      return { success: false };
    }

    const query = { email: user?.email };
    const result = await cartCollection.find(query).toArray();
    // const count = await cartCollection.countDocuments(query);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deleteCart = async (id) => {
  try {
    const { user } = (await getServerSession(authOptions)) || {};
    // if (!user) {
    //   return { success: false };
    // }
    if (id.length !== 24) {
      return { success: false };
    }
    const query = { _id: new ObjectId(id) };
    const result = await cartCollection.deleteOne(query);
    if(result.modifiedCount){
      revalidatePath("/cart")
    }
    return { success: result.modifiedCount };
  } catch (error) {
    console.log(error);
  }
};
