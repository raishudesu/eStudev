import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) return null;

          const existingUser = await prisma.user.findUnique({
            where: { email: credentials?.email },
          });

          if (!existingUser)
            throw new Error(
              "Either email is incorrect or the account doesn't exist"
            );

          const passwordMatched = await compare(
            credentials?.password,
            existingUser?.password
          );

          if (!passwordMatched) throw new Error("Incorrect password");

          return {
            id: `${existingUser.id}`,
            username: existingUser.username,
            email: existingUser.email,
            bio: existingUser.bio,
            links: existingUser.links,
            error: null,
          };
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        return {
          ...token,
          username: user.username,
          id: user.id,
          bio: user.bio,
          links: user.links,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
          id: token.id,
          bio: token.bio,
          links: token.links,
        },
      };
    },
  },
};
