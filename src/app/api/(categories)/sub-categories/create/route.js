import dbConnect from "../../../../../lib/mongodb";
import SubCategory from "../../../../../models/SubCategory";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const subCategory = await SubCategory.create(body);
    return NextResponse.json(
      { success: true, data: subCategory },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
