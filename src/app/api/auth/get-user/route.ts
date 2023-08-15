import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const user = JSON.parse(request.headers.get("user") as string);
  console.log("from GET:", user);
  return NextResponse.json({ email: user });
};
