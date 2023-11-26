import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { commentSchema } from "@/lib/zod";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  try {
    const body = await req.json();
    const { authorId, authorName, threadId, content } =
      commentSchema.parse(body);

    await prisma.comment.create({
      data: {
        authorId,
        authorName,
        threadId,
        content,
      },
    });

    return NextResponse.json(
      { ok: true, message: "Comment posted successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
