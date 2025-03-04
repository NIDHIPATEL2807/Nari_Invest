import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbConnect";
import { User } from "@/models/User";

// ✅ Import bcryptjs correctly inside the server function
export async function POST(req: Request) {
  const bcrypt = (await import("bcryptjs")).default; // Dynamically import bcryptjs

  try {
    await connectToDB();
    const { name, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json({ message: "Signup successful" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error signing up", error }, { status: 500 });
  }
}
