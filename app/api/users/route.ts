import { Prisma } from '@prisma/client';
import db from 'prisma/db';
import { genSaltSync, hashSync } from 'bcrypt-ts';

export async function POST(request: Request) {
  let data: Prisma.UserCreateInput = await request.json();
  const salt = genSaltSync(10);
  const hash = hashSync(data.password, salt);

  data = { ...data, password: hash };
  const user = await db.user.create({ data });
  return Response.json(user);
}
