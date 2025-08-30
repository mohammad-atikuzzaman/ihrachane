import dbConnect from "@/lib/mongodb";
import SocialLink from "@/models/SocialLink";
import { NextResponse } from "next/server";

// DELETE a Social Links
export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const deletedSocialLink = await SocialLink.findByIdAndDelete(params.id);

    if (!deletedSocialLink) {
      return NextResponse.json(
        { success: false, error: "SocialLink not found" },
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
