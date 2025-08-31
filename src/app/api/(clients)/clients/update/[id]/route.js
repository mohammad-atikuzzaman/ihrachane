import dbConnect from "@/lib/mongodb";
import Client from "@/models/Client";
import { NextResponse } from "next/server";

// PUT update a client
export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const body = await request.json();
    const client = await Client.findByIdAndUpdate(params.id, body, { new: true, runValidators: true });
    
    if (!client) {
      return NextResponse.json({ success: false, error: 'Client not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: client });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
