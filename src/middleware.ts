// MIDDLEWARE FOR APP ROUTES

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/create-thread",
    "/threads",
    "/threads/view/(.*)",
  ],
}; // INCLUDE PROTECTED ROUTES HERE
