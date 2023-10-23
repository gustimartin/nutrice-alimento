import { NextResponse } from "next/server";
import { prisma } from "../../libs/prisma";

export async function GET() {
  const products = await prisma.products.findMany();
  console.log(products);
  return NextResponse.json(products);
}

export async function POST(request) {
  try {
    const {
      name,
      description,
      category,
      nutrition,
      price,
      brand,
      stock,
      enable,
      amount,
      image,
    } = await request.json();
    const createProd = await prisma.products.create({
      data: {
        name,
        description,
        category,
        nutrition,
        price,
        brand,
        stock,
        enable,
        amount,
        image,
      },
    });
    return NextResponse.json(createProd);
  } catch (error) {
    console.log(error);
  }
}
