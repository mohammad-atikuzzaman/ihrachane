import dbConnect from "@/lib/mongodb";
import Client from "@/models/Client";
import { NextResponse } from "next/server";

// DELETE a client
export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const deletedClient = await Client.findByIdAndDelete(params.id);

    if (!deletedClient) {
      return NextResponse.json(
        { success: false, error: "Client not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
