"use server";

import { collection, dbConnect } from "@/lib/mopngodb";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { name, email, password, address, image, phone } = payload;
  // console.log("This is Register data Saved DB", image,payload);
  

  if (!email || !password) {
    return {
      success: false,
      message: "Email এবং password আবশ্যক",
    };
  }

  const existingUser = await dbConnect(collection.USERS).findOne({ email });

  if (existingUser) {
    return {
      success: false,
      message:
        "এই ইমেইল দিয়ে ইতিমধ্যে রেজিস্টার করা আছে। অনুগ্রহ করে লগইন করুন।",
    };
  }

  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 11),
    address,
    phone,
    image,
    role: "customer",
    createdAt: new Date(),
  };

  const result = await dbConnect(collection.USERS).insertOne(newUser);

  if (result.acknowledged) {
    return {
      success: true,
      insertedId: result.insertedId.toString(),
    };
  }

  return {
    success: false,
    message: "User create failed",
  };
};
