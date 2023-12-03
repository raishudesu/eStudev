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
    const result = await prisma.thread.findMany({
      where: {
        title: {
          search: keywords.trim().replace(/\s+/g, " | "),
        },
        content: {
          search: keywords.trim().replace(/\s+/g, " | "),
        },
      },
    });

    return NextResponse.json({ ok: true, result: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}
