import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, { params }: Props) {
  try {
    const post = await prisma.post.update({
      where: {
        id: params.id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
      select: {
        id: true,
        title: true,
        content: true,
        tag: true,
        views: true,
        likes: true,
        comment: true,
        User: true,
      },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could not fecth the post" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest, { params }: Props) {
  try {
    const body = await req.json();
    const post = await prisma.post.update({
      where: {
        id: params.id,
      },
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could not update the post" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: Props) {
  try {
    await prisma.post.delete({
      where: {
        id: params.id,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: "could not delete the post" },
      { status: 500 }
    );
  }
}
