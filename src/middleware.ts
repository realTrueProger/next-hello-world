import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // return NextResponse.redirect(new URL("/", request.url));

    if (request.nextUrl.pathname === "/profile") {
        return NextResponse.redirect(new URL("/about", request.nextUrl));
    }
}

// export const config = {
//     matcher: "/profile",
// };