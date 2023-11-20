import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { updateThreadSchema } from "@/lib/zod";
import { getServerSession } from "next-auth";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Params }) {
  const { id } = params;
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
  }

  try {
    const thread = await prisma.thread.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        title: true,
        category: true,
        content: true,
        createdAt: true,
        author: {
          select: {
            id: true,
            username: true,
            bio: true,
            email: true,
            links: true,
          },
        },
      },
    });

    return NextResponse.json({ ok: true, thread }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Something went wrong", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, { params }: { params: Params }) {
  const { id } = params;
  console.log(id);
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
  }

  try {
    await prisma.thread.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { ok: true, message: "Thread deleted" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Something went wrong", error },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request, { params }: { params: Params }) {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
  // }

  try {
    const { id } = params;
    const body = await req.json();

    const { title, category, content } = updateThreadSchema.parse(body);
    await prisma.thread.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        category,
        content,
      },
    });

    return NextResponse.json(
      { ok: true, message: "Thread updated" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
