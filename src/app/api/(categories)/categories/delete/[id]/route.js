import dbConnect from "../../../../../../lib/mongodb";
import Category from "../../../../../../models/Category";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const deletedCategory = await Category.findByIdAndDelete(params.id);

    if (!deletedCategory) {
      return NextResponse.json(
        { success: false, error: "Category not found" },
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
