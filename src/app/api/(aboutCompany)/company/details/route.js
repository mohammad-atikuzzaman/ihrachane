import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import CompanyDetails from "@/models/CompanyDetails";

// GET about company
export async function GET() {
  try {
    await dbConnect();
    const companyDetails = await CompanyDetails.findOne({});
    return NextResponse.json({ success: true, data: companyDetails });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST create or update about company
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();

    // Check if about company already exists
    let companyDetails = await CompanyDetails.findOne({});

    if (companyDetails) {
      // Update existing
      companyDetails = await CompanyDetails.findByIdAndUpdate(
        companyDetails?._id,
        body,
        { new: true, runValidators: true }
      );
    } else {
      // Create new
      companyDetails = await CompanyDetails.create(body);
    }

    return NextResponse.json(
      { success: true, data: companyDetails },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
