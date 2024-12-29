import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.split("/");
  const userAgent = request.headers.get("user-agent") || "";
  console.log({ userAgent });
  const isBot = /bot|crawler|spider|crawling|Twitterbot/i.test(userAgent);

  if (request.nextUrl.pathname.startsWith("/profile") && !isBot) {
    return NextResponse.rewrite(
      new URL(`https://testing.com/referral?ref=${pathname.at(-1)}`)
    );
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    // "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    "/profile/:path*",
  ],
};
