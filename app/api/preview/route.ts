import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug') || '/';

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  const res = NextResponse.redirect(new URL(slug, req.url));
  res.cookies.set('__next_preview_data', '1', { path: '/' });
  res.cookies.set('__prerender_bypass', '1', { path: '/' });
  return res;
}
