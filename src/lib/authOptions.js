import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "write your email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);

        return null;
      },
    }),
  ], // ...add more providers here],
};
