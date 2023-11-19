import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
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
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        username: true,
        email: true,
        bio: true,
        links: true,
      },
    });

    return NextResponse.json({ ok: true, user }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
