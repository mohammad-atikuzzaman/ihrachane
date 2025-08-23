import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import generateRandomCode from "@/utils/generateOtp";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { mailOptions, transporter } from "@/lib/nodemailer";

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
    const hashedPassword = bcrypt.hashSync(password, 10);
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

    await Promise.all([
      user.save(),
      transporter.sendMail({
        ...mailOptions,
        to: email,
        subject: "Verify your account - IHRACHANE OTP",
        html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify your IHRACHANE Account</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto; max-width: 600px;">
        <tr>
            <td style="padding: 20px 0; text-align: center; background-color: #ffffff; border-top: 4px solid #ff7700;">
                <h1 style="margin: 0; color: #ff7700; font-size: 28px; font-weight: bold;">IHRACHANE</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 30px; background-color: #ffffff;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                        <td style="padding-bottom: 20px; color: #333333; font-size: 18px; line-height: 1.5;">
                            Hello ${name},
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-bottom: 20px; color: #333333; font-size: 16px; line-height: 1.5;">
                            Thank you for joining IHRACHANE! To complete your registration, please use the following One-Time Password (OTP) to verify your account.
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-bottom: 30px; text-align: center;">
                            <div style="display: inline-block; padding: 15px 30px; background-color: #fff4e6; border: 2px dashed #ff7700; border-radius: 8px; font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #ff7700;">
                                ${verificationToken}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-bottom: 20px; color: #ff7700; font-size: 16px; font-weight: bold; text-align: center;">
                            ⏱ This code will expire in 5 minutes
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-bottom: 20px; color: #666666; font-size: 14px; line-height: 1.5;">
                            For security reasons, please do not share this code with anyone. If you didn't request this verification, please ignore this email or contact our support team.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; text-align: center; background-color: #1a1a1a; color: #ffffff; font-size: 12px;">
                <p style="margin: 0 0 10px 0;">© ${new Date().getFullYear()} IHRACHANE. All rights reserved.</p>
                <p style="margin: 0; color: #cccccc;">
                    If you need assistance, please contact our support team
                </p>
            </td>
        </tr>
    </table>
</body>
</html>`,
      }),
    ]);

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
    // console.log(err);
    return new Error({ error: err }, { status: 404 });
  }
}
