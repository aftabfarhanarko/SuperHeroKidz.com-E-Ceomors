import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collection, dbConnect } from "./mopngodb";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await dbConnect(collection.USERS).findOne({
          email: credentials.email,
        });

        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) return null;

        // ✅ VERY IMPORTANT: image + role return
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image || null,
          role: user.role || "customer",
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    // ================= SIGN IN =================
    async signIn({ user, account }) {
      if (account.provider === "credentials") {
        // Credentials user already exists
        return true;
      }

      // Google Login
      const usersCollection = dbConnect(collection.USERS);

      const existingUser = await usersCollection.findOne({
        email: user.email,
      });

      if (!existingUser) {
        await usersCollection.insertOne({
          name: user.name,
          email: user.email,
          image: user.image,
          role: "customer",
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          createdAt: new Date(),
        });
      }

      return true; // ✅ MUST be boolean
    },

    // ================= SESSION =================
    async session({ session, token }) {
      if (token) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
        session.user.role = token.role;
      }
      console.log("SESSION USER", session);

      return session;
    },

    // ================= JWT =================
    async jwt({ token, user,account }) {
      // First time login

      if (user) {
        if (account.provider == "google") {
          const dbUser = await dbConnect(collection.USERS).findOne({
            email: user.email,
          });
          token.name = dbUser.name;
          token.role = dbUser?.role;
          token.email = dbUser?.email;
          token.image = dbUser.image;
        } else {
          token.name = user.name;
          token.email = user.email;
          token.image = user.image;
          token.role = user.role;
        }
      }
      console.log("JWT USER", user);

      // 🔥 Always sync from DB (important)
      // if (token?.email) {
      //   const dbUser = await dbConnect(collection.USERS).findOne({
      //     email: token.email,
      //   });

      //   if (dbUser) {
      //     token.image = dbUser.image || token.image;
      //     token.role = dbUser.role || token.role;
      //   }
      // }

      return token;
    },
  },

  // session: {
  //   strategy: "jwt",
  // },
};
