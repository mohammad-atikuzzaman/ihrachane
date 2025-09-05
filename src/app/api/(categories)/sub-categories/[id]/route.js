import dbConnect from "@/lib/mongodb";
import SubCategory from "@/models/SubCategory";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const subCategory = await SubCategory.findById(params.id).populate("subCategoryServices");

    if (!subCategory) {
      return NextResponse.json(
        { success: false, error: "Sub-Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: subCategory });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
