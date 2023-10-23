import { NextResponse } from "next/server";
import { prisma } from "../../libs/prisma";
export async function GET() {
  const categories = await prisma.categories.findMany();
  return NextResponse.json(categories);
}
export async function POST(request) {
  const { name, image } = await request.json();
  const createCat = await prisma.categories.create({
    data: {
      name,
      image,
    },
  });
  return NextResponse.json(createCat);
}
