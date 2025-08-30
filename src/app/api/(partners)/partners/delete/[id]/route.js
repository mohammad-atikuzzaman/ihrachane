import dbConnect from "@/lib/mongodb";
import Partner from "@/models/Partner";
import { NextResponse } from "next/server";

// DELETE a partner
export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const deletedPartner = await Partner.findByIdAndDelete(params.id);

    if (!deletedPartner) {
      return NextResponse.json(
        { success: false, error: "Partner not found" },
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
