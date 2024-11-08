import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt-ts';
import db from 'prisma/db';
import { authConfig } from '@/app/auth.config';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize({ email, password }: any) {
        const user = await db.user.findUnique({ where: { email } });
        if (!user) return null;

        const passwordsMatch = await compare(password, user.password);
        if (passwordsMatch) return user as any;
        else return null;
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
});
