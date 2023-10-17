import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || undefined;
  const page = parseInt(searchParams.get("page")!) || 1;
  let whereClause = {};
  if (search) {
    whereClause = {
      title: {
        contains: search,
        mode: "insensitive",
      },
    };
  }
  try {
    const posts = await prisma.post.findMany({
      where: whereClause,
      select: {
        id: true,
        title: true,
        content: true,
        tag: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
      take: 10,
      skip: (page - 1) * 10,
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could not fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      },
    });
    return NextResponse.json(
      { message: "the post was successfully sent." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "could not post the request " },
      { status: 500 }
    );
  }
}
