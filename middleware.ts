import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/test_middleware")) {
        console.log("call middle ware!");

        return NextResponse.redirect(new URL("/fruits", request.url));
    }

    if (request.nextUrl.pathname.startsWith("/welcome")) {
        return withAuth;
    }
}

export const config = {
    matcher: "/test_middleware/:path*",
};
