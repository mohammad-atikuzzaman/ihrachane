import dbConnect from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";
import { NextResponse } from "next/server";

// PUT update a testimonial
export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const body = await request.json();
    const testimonial = await Testimonial.findByIdAndUpdate(params.id, body, { new: true, runValidators: true });
    
    if (!testimonial) {
      return NextResponse.json({ success: false, error: 'Testimonial not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: testimonial });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}