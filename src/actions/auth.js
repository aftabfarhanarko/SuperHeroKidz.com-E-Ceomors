"use server";

import { collection, dbConnect } from "@/lib/mopngodb";

import bcrypt from "bcryptjs";
export const postUser = async (payload) => {
  const { address, email, image, password, phone, name } = payload;
  // check payload
  if (!email || !password) return null;

  // check User

  const isExgised = await dbConnect(collection.USERS).findOne({ email });
  if (isExgised) {
    return null;
  }
  // creat User
  const addUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 11),
    address,
    phone,
    image,
    role: "customer",
    creatAt: new Date().toISOString(),
  };
  // inseart User

  const result = await dbConnect(collection.USERS).insertOne(addUser);
  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};
