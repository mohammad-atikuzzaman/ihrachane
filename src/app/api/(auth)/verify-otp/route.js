import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { email, otp } = body;

    // Validate input
    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP are required." },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await User.findOne({ email: email.toLowerCase() });
    
    if (!user) {
      return NextResponse.json(
        { error: "User not found." },
        { status: 404 }
      );
    }

    // Check if user is already verified
    if (user.verified) {
      return NextResponse.json(
        { error: "Email is already verified." },
        { status: 400 }
      );
    }

    // Check if OTP exists
    if (!user.OTP) {
      return NextResponse.json(
        { error: "No OTP found. Please request a new one." },
        { status: 400 }
      );
    }

    // Check if OTP is expired
    const currentTime = new Date();
    const expiryTime = new Date(user.expire);
    
    if (currentTime > expiryTime) {
      // Clear expired OTP
      await User.findByIdAndUpdate(user._id, {
        $unset: { OTP: "", expire: "" }
      });
      
      return NextResponse.json(
        { error: "OTP has expired. Please request a new one." },
        { status: 400 }
      );
    }

    // Verify OTP
    if (user.OTP !== otp) {
      return NextResponse.json(
        { error: "Invalid OTP. Please try again." },
        { status: 400 }
      );
    }

    // Update user as verified and clear OTP fields
    await User.findByIdAndUpdate(user._id, {
      verified: true,
      $unset: { OTP: "", expire: "" }
    });

    return NextResponse.json(
      { message: "Email verified successfully. You can now login." },
      { status: 200 }
    );

  } catch (err) {
    console.error("OTP Verification Error:", err);
    return NextResponse.json(
      { error: "OTP verification failed. Please try again." },
      { status: 500 }
    );
  }
}