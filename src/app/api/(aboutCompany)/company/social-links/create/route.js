import dbConnect from "@/lib/mongodb";
import SocialLink from "@/models/SocialLink";
import { NextResponse } from "next/server";

// POST a new socialLink
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const socialLink = await SocialLink.create(body);
    return NextResponse.json(
      { success: true, data: socialLink },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
