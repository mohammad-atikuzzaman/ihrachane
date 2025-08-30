import dbConnect from "@/lib/mongodb";
import Category from "@/models/Category";
import { NextResponse } from "next/server";

// GET a specific category
export async function GET(request, { params }) {
  try {
    await dbConnect();
    const category = await Category.findById(params.id).populate(
      "SubCategories.SubCategoryServices.Sub_category_select"
    );

    if (!category) {
      return NextResponse.json(
        { success: false, error: "Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: category });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
