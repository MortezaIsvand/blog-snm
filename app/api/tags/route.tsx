import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tags = await prisma.tag.findMany();
    return NextResponse.json(tags, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could not fetch tags" },
      { status: 500 }
    );
  }
}
