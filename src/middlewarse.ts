import { NextResponse } from "next/server";

// const isHomeRoute = createRouteMatcher(["/"]);

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};