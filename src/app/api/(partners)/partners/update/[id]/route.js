import dbConnect from "@/lib/mongodb";
import Partner from "@/models/Partner";
import { NextResponse } from "next/server";

// PUT update a partner
export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const body = await request.json();
    const partner = await Partner.findByIdAndUpdate(params.id, body, { new: true, runValidators: true });
    
    if (!partner) {
      return NextResponse.json({ success: false, error: 'Partner not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true,
      message: "Partner Update Successfully!", data: partner });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
