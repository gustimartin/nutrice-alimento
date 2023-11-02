import { NextResponse } from "next/server";
import { prisma } from "../../libs/prisma";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import { writeFile } from "fs/promises";

export async function GET() {
  const products = await prisma.products.findMany();
  console.log(products);
  return NextResponse.json(products);
}

cloudinary.config({
  cloud_name: "daxvmbmvs",
  api_key: "283589939712721",
  api_secret: "rTaaVEJZT03W8JI1z1510YlVkA4",
});

export async function POST(request) {
  try {
    const data = await request.formData();
    console.log("data--", data);
    const image = await data.get("image");
    const description = await data.get("description");
    const stock = await Number(data.get("stock"));
    const price = await Number(data.get("price"));
    const amount = await Number(data.get("amount"));
    const nutrition = await data.get("nutrition");
    const name = await data.get("name");
    const category = await data.get("category");
    const brand = await data.get("brand");
    if (!image) {
      return NextResponse("no hay imagen");
    }
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(process.cwd(), "public", image.name);
    await writeFile(filePath, buffer);

    const response = await cloudinary.uploader.upload(filePath);
    console.log(response);

    const createProd = await prisma.products.create({
      data: {
        name,
        description,
        category,
        nutrition,
        price,
        brand,
        stock,
        enable: true,
        amount,
        image: response.secure_url,
      },
    });
    return NextResponse.json(createProd);
  } catch (error) {
    console.log(error);
    return NextResponse.error(
      "An error occurred while processing the request."
    );
  }
}
