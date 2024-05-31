import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const haveCookie = cookies().get("token");

  if (haveCookie) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/auth", request.url));
}

export const config = {
  matcher: "/dashboard",
};
