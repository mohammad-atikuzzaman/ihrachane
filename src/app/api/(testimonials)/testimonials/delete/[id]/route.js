import dbConnect from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";
import { NextResponse } from "next/server";

// DELETE a testimonial
export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const deletedTestimonial = await Testimonial.findByIdAndDelete(params.id);

    if (!deletedTestimonial) {
      return NextResponse.json(
        { success: false, error: "Testimonial not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Testimonial Delete Successfully!",
      data: {},
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
