import CredentialsProvider from "next-auth/providers/credentials";

export const authoptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);

        return null;
      },
    }),
  ], // ...add more providers here],
};
