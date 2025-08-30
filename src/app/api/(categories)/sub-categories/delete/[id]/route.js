import dbConnect from "@/lib/mongodb";
import SubCategory from "@/models/SubCategory";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const deletedSubCategory = await SubCategory.findByIdAndDelete(params.id);

    if (!deletedSubCategory) {
      return NextResponse.json(
        { success: false, error: "Sub Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
