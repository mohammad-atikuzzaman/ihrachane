import dbConnect from "../../../../../../lib/mongodb";
import SubCategory from "../../../../../../models/SubCategory";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const body = await request.json();
    const subCategory = await SubCategory.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });

    if (!category) {
      return NextResponse.json(
        { success: false, error: "Sub-Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: category });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
