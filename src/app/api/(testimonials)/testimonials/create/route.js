import dbConnect from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";
import { NextResponse } from "next/server";

// POST a new testimonial
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const testimonial = await Testimonial.create(body);
    return NextResponse.json(
      { success: true,
          message: "Testimonial Create Successfully!", data: testimonial },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
