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
      async authorize(credentials) {
        // console.log("This is Credentials", credentials);

        if (!credentials?.email || !credentials?.password) {
          return null; // ফেল, কোনো message দরকার নেই
        }
        const { email, password } = credentials;

        try {
          const user = await dbConnect(collection.USERS).findOne({ email });
          // console.log("Thise is User Data", user);

          if (!user) {
            return null; // ইমেইল পাওয়া যায়নি
          }

          const isPasswordValid = await bcrypt.compare(password, user.password);

          if (!isPasswordValid) {
            return null; // পাসওয়ার্ড ভুল
          }

          // সফল হলে শুধু user object রিটার্ন করো (যাতে অন্তত id বা _id থাকে)
          return {
            id: user._id.toString(), // খুব গুরুত্বপূর্ণ! MongoDB _id কে string করো
            email: user.email,
            name: user.name || null, // যদি name থাকে
            // অন্যান্য ফিল্ড যা session এ চাও
          };
        } catch (error) {
          // console.error("Login error:", error);
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log({ user, account, profile, email, credentials });

      const isExgised = await dbConnect(collection.USERS).findOne({
        email: user.email,
        provider: account?.provider,
      });
      if (isExgised) {
        return {
          success: false,
          message:
            "এই ইমেইল দিয়ে ইতিমধ্যে রেজিস্টার করা আছে। লগইন করুন অথবা অন্য একটি ইমেইল ব্যবহার করুন।",
        };
      }

      // creat User
      const addUser = {
        provider: account.provider,
        providerAccountId: account.providerAccountId,
        name: user.name,
        email: user.email,
        image: user.image,
        role: "customer",
        creatAt: new Date().toISOString(),
      };
      // console.log(addUser);
      const result = await dbConnect(collection.USERS).insertOne(addUser);

      return result.acknowledged;
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    // async session({ session, token, user }) {
    //   return session;
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token;
    // },
  },
};
