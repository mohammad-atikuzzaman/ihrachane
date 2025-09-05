import dbConnect from "@/lib/mongodb";
import Client from "@/models/Client";
import { NextResponse } from "next/server";

// POST a new client
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const client = await Client.create(body);
    return NextResponse.json({ success: true,
      message: "Client Create Successfully!", data: client }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
