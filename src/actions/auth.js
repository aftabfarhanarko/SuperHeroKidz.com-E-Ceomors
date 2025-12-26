"use server";

import { collection, dbConnect } from "@/lib/mopngodb";

import bcrypt from "bcryptjs";
export const postUser = async (payload) => {
  const { name, email, password, address, image, phone } = payload;
  // check payload
  if (!email || !password) return null;

  // check User

  // ইমেইল আগে থেকে আছে কি না চেক করা
  const isExgised = await dbConnect(collection.USERS).findOne({ email });
  if (isExgised) {
    return {
      success: false,
      message:
        "এই ইমেইল দিয়ে ইতিমধ্যে রেজিস্টার করা আছে। লগইন করুন অথবা অন্য একটি ইমেইল ব্যবহার করুন।",
    };
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
