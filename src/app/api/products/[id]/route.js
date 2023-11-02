import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export async function GET(request, { params }) {
  const prodId = await prisma.products.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(prodId);
}
export async function PUT(request, { params }) {
  const data = await request.json();
  const modifyProd = await prisma.products.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json(modifyProd);
}

export async function DELETE(request, { params }) {
  try {
    const productId = Number(params.id);

    // Find the product by ID, including associated categories.
    const product = await prisma.products.findUnique({
      where: {
        id: productId,
      },
      include: {
        category: true,
      },
    });

    if (!product) {
      return NextResponse.json("Product not found");
    }

    // Dissociate the product from categories by updating the relation.
    await prisma.products.update({
      where: {
        id: productId,
      },
      data: {
        category: {
          disconnect: product.category.map((cat) => ({ id: cat.id })),
        },
      },
    });

    // Delete the product itself.
    await prisma.products.delete({
      where: {
        id: productId,
      },
    });

    return NextResponse.json("Product deleted successfully");
  } catch (error) {
    console.error(error);
    return NextResponse.error(
      "Cannot delete product due to associated records",
      400
    );
  }
}
