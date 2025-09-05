import dbConnect from "@/lib/mongodb";
import SubCategoryService from "@/models/SubCategoryService";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const body = await request.json();
    const subCategoryService = await SubCategoryService.findByIdAndUpdate(
      params.id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!subCategoryService) {
      return NextResponse.json(
        { success: false, error: "Sub-Category Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true,
      message: "Sub-Category Service Update Successfully!", data: category });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
