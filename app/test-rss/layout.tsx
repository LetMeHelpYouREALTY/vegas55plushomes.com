import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'RSS Feed Test',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${SITE_URL}/test-rss`,
  },
}

export default function TestRssLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
