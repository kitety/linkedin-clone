import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  if (req.nextUrl.pathname === "/") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    if (!session) {
      console.log("session: ", session);
      const url = req.nextUrl.clone();
      url.pathname = "/home";
      return NextResponse.redirect(url);
    }
    // If user is authenticated, continue.
  }
}
