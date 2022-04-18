import { User } from "@types";
import { createFilePath, readFile } from "@utils";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const filePath = createFilePath("users");
        const users = readFile(filePath);

        const user = { email: req.body?.email, password: req.body?.password };
        const isUserRegistered = users.find(
          (user: User) => user.email === credentials?.email
        );

        if (isUserRegistered) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
