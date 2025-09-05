import dbConnect from "@/lib/mongodb";
import SubCategoryService from "@/models/SubCategoryService";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const subCategoryServices = await SubCategoryService.find({}).populate(
      "selectedSubCategory"
    );
    return NextResponse.json({ success: true,
      message: "Sub-Category Services Retrieved Successfully!", data: subCategoryServices });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
