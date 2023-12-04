import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { searchSchema } from "@/lib/zod";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const { keywords } = searchSchema.parse(body);
    const words = keywords.trim().replace(/\s+/g, " | ");

    const threads = await prisma.thread.findMany({
      where: {
        title: {
          search: words,
        },
        content: {
          search: words,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ ok: true, threads }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}
