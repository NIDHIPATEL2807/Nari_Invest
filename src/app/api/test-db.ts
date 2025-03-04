import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbConnect";

export async function GET() {
  try {
    await connectToDB();
    return NextResponse.json({ message: "✅ MongoDB Connected Successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "❌ Failed to connect to MongoDB" });
  }
}
