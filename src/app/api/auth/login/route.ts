import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import { cookies } from "next/headers";

export const POST = async (request: NextRequest) => {
  // const body = await request.json().catch(() => null);
  const body = await request.json();

  if (body.email === "admin@admin.com" && body.password === "admin") {

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    console.log("login route SECRET: ", secret);
    
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

    console.log(`login route JWT : `, jwt);
    console.log(`login route cookies : `,cookies().get("JWT")?.value );

    return NextResponse.json({ message: "Login success" });
  }

  return NextResponse.json({ message: "Required Input Not Provided" });
};



 