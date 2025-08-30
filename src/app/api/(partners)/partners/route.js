import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Partner from "@/models/Partner";

// GET all partners
export async function GET() {
  try {
    await dbConnect();
    const partners = await Partner.find({});
    return NextResponse.json({ success: true, data: partners });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
