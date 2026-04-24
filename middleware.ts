import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  const realEstateDomain = "gtsland.vn";

  if (hostname.includes(realEstateDomain)) {
    return NextResponse.redirect(new URL("/real-estate", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
