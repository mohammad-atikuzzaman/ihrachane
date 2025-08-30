import dbConnect from "@/lib/mongodb";
import SocialLink from "@/models/SocialLink";
import { NextResponse } from "next/server";

// GET a specific socialLink
export async function GET(request, { params }) {
  try {
    await dbConnect();
    const socialLink = await SocialLink.findById(params.id);

    if (!socialLink) {
      return NextResponse.json(
        { success: false, error: "SocialLink not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: socialLink });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
