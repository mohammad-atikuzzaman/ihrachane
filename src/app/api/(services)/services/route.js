import dbConnect from "@/lib/mongodb";
import Service from "@/models/Service";
import { NextResponse } from "next/server";

// GET all services
export async function GET() {
  try {
    await dbConnect();
    const services = await Service.find({});
    return NextResponse.json({ success: true, data: services });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
