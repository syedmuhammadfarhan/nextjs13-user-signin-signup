import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  let jwt = request.cookies.get("token")?.value;

  console.log("middleware JWT : ", jwt);

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  if (!jwt) {
    // const url = request.nextUrl.clone();
    // url.pathname = '/'
    // return NextResponse.rewrite(url);
    return NextResponse.rewrite(new URL("/signin", request.url));
    // return NextResponse.redirect("/login");
  } else {
    const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret);
    const headers = new Headers(request.headers);
    headers.set("user", JSON.stringify(payload.email));

    console.log("middleware protectedHeader: ", protectedHeader);
    console.log("middleware payload: ", payload);
    return NextResponse.next({
      request: {
        headers: headers,
      },
    });
  }
}

// See "Matching Paths" below to learn more

// export const config = {
//   matcher: ["/api*"],
// };

//from NEXT docs
// const config = {
//   matcher: "/feedback/((?!general).*)",
// };
