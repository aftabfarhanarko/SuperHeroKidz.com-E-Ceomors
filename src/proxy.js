import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const privetRoute = ["/cart", "/checkOut", "/contact"];

export async function proxy(req) {
  const token = await getToken({ req });
  const reqPath = req.nextUrl.pathname;
  const isAuthorized = Boolean(token);
  const isPrivetRoute = privetRoute.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  console.log({ token, reqPath, isAuthorized, isPrivetRoute });
  if (!isAuthorized && isPrivetRoute) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${reqPath}`, req.url)
    );
  }
  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/cart/:path*", "/checkOut/:path*", "/contact/:path*"],
};
