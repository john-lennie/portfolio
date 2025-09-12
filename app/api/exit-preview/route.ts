import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.redirect("/");
  res.cookies.delete("__next_preview_data");
  res.cookies.delete("__prerender_bypass");
  return res;
}
