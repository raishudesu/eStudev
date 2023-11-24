import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { threadSchema } from "@/lib/zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

//POST A THREAD
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();

    const { title, category, content, authorId, authorName } =
      threadSchema.parse(body); // VALIDATE BODY THRU ZOD SCHEMA

    await prisma.thread.create({
      data: {
        authorId,
        title,
        category,
        content,
        authorName,
      },
    });

    return NextResponse.json(
      { ok: true, message: "Thread posted" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Something went wrong", error },
      { status: 500 }
    );
  }
}

// GET ALL THREADS
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
  }
  try {
    const allThreads = await prisma.thread.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    });

    return NextResponse.json(
      { ok: true, threads: allThreads },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
