import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import { cookies } from "next/headers";

export const POST = async (request: NextRequest) => {
  const body = await request.json().catch(() => null);

  if (body.email === "admin" && body.password === "admin") {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    console.log("secret: ", secret);
    const alg = "HS256";
    const typ = "JWT";

    const jwt = await new jose.SignJWT({
      name: body.name,
      email: body.email,
      password: body.password,
    })
      .setProtectedHeader({ alg, typ })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(secret);

    cookies().set("token", jwt, {
      httpOnly: true,
    });

    console.log(`jwt token`, jwt);
    return NextResponse.json({ message: "Login success" });
  }

  return NextResponse.json({ message: "Hello World!" });
};



 