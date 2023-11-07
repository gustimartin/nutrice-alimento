import { NextResponse } from "next/server";
import { prisma } from "../../libs/prisma";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import { writeFile } from "fs/promises";

export async function GET() {
  const categories = await prisma.categories.findMany();
  return NextResponse.json(categories);
}

cloudinary.config({
  cloud_name: "daxvmbmvs",
  api_key: "283589939712721",
  api_secret: "rTaaVEJZT03W8JI1z1510YlVkA4",
});

export async function POST(request) {
  try {
    const data = await request.formData();
    const image = await data.get("image");
    const name = await data.get("name");

    if (!image) {
      return NextResponse("no hay imagen");
    }
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(process.cwd(), "public", image.name);
    await writeFile(filePath, buffer);

    const response = await cloudinary.uploader.upload(filePath);

    const createCat = await prisma.categories.create({
      data: {
        name,
        image: response.secure_url,
      },
    });
    return NextResponse.json(createCat);
  } catch (error) {
    console.log(error);
    return NextResponse.error(
      "An error occurred while processing the request."
    );
  }
}
