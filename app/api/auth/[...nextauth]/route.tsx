import NextAuth from "next-auth/next";
import { nextOpts } from "./options";

const handler = NextAuth(nextOpts);

export { handler as GET, handler as POST };
