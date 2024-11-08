import { Prisma } from '@prisma/client';
import db from 'prisma/db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);
  const user = await db.user.findUnique({
    where: { id },
  });
  return Response.json(user);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);
  const data: Prisma.UserUpdateInput = await request.json();
  const user = await db.user.update({
    where: { id },
    data,
  });
  return Response.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);
  const user = await db.user.delete({
    where: { id },
  });
  return Response.json(user);
}
