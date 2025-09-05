import dbConnect from "@/lib/mongodb";
import Category from "@/models/Category";
import SubCategory from "@/models/SubCategory";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { selectedCategory } = body;

    const category = await Category.findById(selectedCategory);
    if (!category) {
      return NextResponse.json(
        { success: false, error: "Category not found" },
        { status: 404 }
      );
    }

    const subCategory = await SubCategory.create(body);

    // More concise way to update the array
    category.subCategories = [
      ...(category.subCategories || []),
      subCategory._id,
    ];
    await category.save();

    return NextResponse.json(
      {
        success: true,
        message: "Sub-Category Created Successfully!",
        data: subCategory,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
