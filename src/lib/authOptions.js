import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collection, dbConnect } from "./mopngodb";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "write your email",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return { message: "ইমেইল এবং পাসওয়ার্ড উভয়ই দিতে হবে।" };
        }

        const { email, password } = credentials;
        try {
          const result = await dbConnect(collection.USERS).findOne({ email });
          const isPasswordValid = await bcrypt.compare(
            password,
            result.password
          );
          // return result;
          if (!isPasswordValid) {
            return { message: "পাসওয়ার্ড ভুল হয়েছে। আবার চেষ্টা করুন।।" };
          }

          return { message: " সফল হলে  লগইন হয়েছে।" };
        } catch (error) {
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
