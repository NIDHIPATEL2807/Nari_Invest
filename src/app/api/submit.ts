import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import UserResponse from "@/models/User";

export async function POST(req: Request) {
  await dbConnect();
  const data = await req.json();

  // Save to database
  const response = await UserResponse.create(data);

  return NextResponse.json({ success: true, data: response });
}
