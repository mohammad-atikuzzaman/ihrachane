import dbConnect from '@/lib/mongodb';
import Client from '@/models/Client';
import { NextResponse } from 'next/server';

// GET all clients
export async function GET() {
  try {
    await dbConnect();
    const clients = await Client.find({});
    return NextResponse.json({ success: true, data: clients });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
