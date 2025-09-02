import dbConnect from "@/lib/mongodb";
import SubCategory from "@/models/SubCategory";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const subCategories = await SubCategory.find({}).populate(
      "selectedCategory"
    );
    return NextResponse.json({ success: true, data: subCategories });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
