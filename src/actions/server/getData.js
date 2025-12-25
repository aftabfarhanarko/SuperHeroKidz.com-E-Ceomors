"use server";
import { collection, dbConnect } from "@/lib/mopngodb";
import { ObjectId } from "mongodb";

export const getDataDB = async () => {
  const producat = await dbConnect(collection.PRODUCTS).find().toArray();
  return producat;
};

export const singelProducat = async (id) => {
  if (id.length != 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };
  const producat = await dbConnect(collection.PRODUCTS).findOne();
  return { ...producat, _id: producat._id.toString() } || {};
};
