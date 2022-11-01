// /middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session/edge";
export type User = {
  isLoggedIn: boolean;
  login: string;
  avatarUrl: string;
};

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  console.log(res)
  const session = await getIronSession(req, res, {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });

  // do anything with session here:
  const { user } = session;

  // like mutate user:
  // user.something = someOtherThing;
  // or:
  // session.user = someoneElse;

  // uncomment next line to commit changes:
  // await session.save();
  // or maybe you want to destroy session:
  // await session.destroy();

  console.log("from middleware", { user });
  // demo:
  // change the condition otherwise will not work
  if (user?.admin === "true") {
    // unauthorized to see pages inside admin/
    return NextResponse.redirect(new URL('/unauthorized', req.url)) // redirect to /unauthorized page
  }

  return res;
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!static|favicon.ico).*)',
  ],
}