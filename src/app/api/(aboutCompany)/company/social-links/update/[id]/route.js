import dbConnect from "@/lib/mongodb";
import SocialLink from "@/models/SocialLink";
import { NextResponse } from "next/server";

// PUT update a socialLink
export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const body = await request.json();
    const socialLink = await SocialLink.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });

    if (!socialLink) {
      return NextResponse.json(
        { success: false, error: "Social Link not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: socialLink });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
