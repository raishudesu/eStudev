import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

const searchSchema = z.object({
  keywords: z.string({ required_error: "Keywords are required" }),
});

export async function POST(req: Request) {
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
    });

    return NextResponse.json({ ok: true, threads }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}
