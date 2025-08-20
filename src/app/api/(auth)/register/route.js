import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import generateRandomCode from "../../../../../utils/generateOtp";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { name, email, password } = body;
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    const hashedPassword = bcrypt.hashSync(password, 10)
    const verificationToken = generateRandomCode(6);
    const verificationExpires = new Date(Date.now() + 300000); //expire in 5 minutes
    // return console.log(verificationExpires);

    const user = new User({
      email: email.toLowerCase(),
      password: hashedPassword,
      name,
      OTP: verificationToken,
      expire: verificationExpires,
    });
    await user.save();
    return NextResponse.json(
      {
        message:
          "User created successfully. Please check your email for verification.",
      },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Registration failed." }), {
      status: 500,
    });
  }
}

// find all of the users for testing

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find();
    return NextResponse.json(users);
  } catch (err) {
    console.log(err);
    return new Error({ error: err }, { status: 404 });
  }
}
