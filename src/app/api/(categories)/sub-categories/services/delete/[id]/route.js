import dbConnect from "@/lib/mongodb";
import SubCategoryService from "@/models/SubCategoryService";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const deletedSubCategoryService = await SubCategoryService.findByIdAndDelete(params.id);

    if (!deletedSubCategoryService) {
      return NextResponse.json(
        { success: false, error: "Sub Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true,
      message: "Sub-Category Service Delete Successfully!", data: {} });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
