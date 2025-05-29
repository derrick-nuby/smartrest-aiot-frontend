import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the user roles
type UserRole = "patient" | "customer" | "admin" | "doctor";

// Helper function to get user data from cookies
function getUserDataFromCookies(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const userRole = request.cookies.get("userRole")?.value as UserRole;
  const userData = request.cookies.get("userData")?.value;

  return {
    token,
    userRole,
    userData: userData ? JSON.parse(userData) : null,
    isAuthenticated: !!token && !!userRole,
  };
}

// Helper function to get the correct portal path based on role
function getPortalPath(role: UserRole): string {
  switch (role) {
    case "patient":
      return "/portal/patient";
    case "admin":
      return "/portal/admin";
    case "customer":
      return "/portal/customer";
    case "doctor":
      return "/portal/doctor";
    default:
      return "/portal/user";
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { token, userRole, isAuthenticated } = getUserDataFromCookies(request);

  // 1. Allow access to homepage
  if (pathname === "/") {
    return NextResponse.next();
  }

  // 2. Handle portal routes - require authentication and role-based access
  if (pathname.startsWith("/portal")) {
    // Check if user is authenticated
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    // Get the expected portal path for the user's role
    const expectedPortalPath = getPortalPath(userRole);

    console.log(`User role: ${userRole}, Expected portal path: ${expectedPortalPath} for token: ${token}`);


    // Check if user is trying to access their correct portal
    if (!pathname.startsWith(expectedPortalPath)) {
      // Redirect to their correct portal
      return NextResponse.redirect(new URL(expectedPortalPath, request.url));
    }

    // Allow access to their own portal
    return NextResponse.next();
  }

  // 3. Handle auth routes - prevent access if already logged in
  if (pathname.startsWith("/auth")) {
    if (isAuthenticated) {
      // Redirect authenticated users to their portal
      const portalPath = getPortalPath(userRole);
      return NextResponse.redirect(new URL(portalPath, request.url));
    }

    // Allow access to auth routes for non-authenticated users
    return NextResponse.next();
  }

  // 4. Allow everything else to be accessible
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
