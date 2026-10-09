import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const COMMUNITY_SLUG = /^[a-z0-9-]+$/

/**
 * Query-string copies of /homes-for-sale are the same document with a
 * canonical pointing at the clean URL. Google lists them as alternates.
 * Send them to the page that matches the parameter instead.
 */
export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  if (pathname !== '/homes-for-sale' || searchParams.size === 0) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  const community = searchParams.get('community')
  const location = searchParams.get('location')
  url.search = ''

  if (community && COMMUNITY_SLUG.test(community)) {
    url.pathname = `/communities/${community}`
  } else if (location === 'summerlin') {
    url.pathname = '/summerlin-55-homes'
  } else if (location === 'henderson') {
    url.pathname = '/henderson-55-homes'
  }

  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: ['/homes-for-sale'],
}
