// pages/api/signup.ts
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10); // Adjust salt rounds as needed

    const newUser = new User({ email, password: hashedPassword });

    await dbConnect();
    const exists = await User.findOne({ email });
    if (exists) {
      return NextResponse.json(
        {
          status: false,
          message: "This email already belongs to a registered user.",
        },
        { status: 500 }
      );
    }
    await newUser.save();

    return NextResponse.json(
      {
        status: true,
        message: "Your account has been created successfully!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: false, message: "Error creating user" });
  }
}
