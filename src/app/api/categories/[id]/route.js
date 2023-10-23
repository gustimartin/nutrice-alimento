import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export async function GET(request, { params }) {
  const catId = await prisma.categories.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(catId);
}
export async function PUT(request, { params }) {
  const data = await request.json();
  const modifyCat = await prisma.categories.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json(modifyCat);
}
export async function DELETE(request, { params }) {
  try {
    const deleteCat = await prisma.categories.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json("delete id task");
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
