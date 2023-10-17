import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";
  try {
    const posts = await prisma.post.findMany({
      where: {
        title:
          search != undefined
            ? {
                contains: search,
                mode: "insensitive",
              }
            : undefined,
      },
      select: {
        id: true,
        title: true,
        content: true,
        tag: true,
      },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could not fetch posts" },
      { status: 500 }
    );
  }
}
