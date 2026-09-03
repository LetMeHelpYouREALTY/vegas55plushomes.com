import type { Metadata } from 'next'
import RSSFeed from '@/components/rss-feed'

export const metadata: Metadata = {
  title: 'RSS Feed Test',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function TestRSSPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">RSS Feed Test Page</h1>
      <p className="text-lg text-muted-foreground mb-8">
        This page tests the RSS feed integration. If you see articles below, the RSS feed is working correctly.
      </p>
      <RSSFeed limit={10} title="RSS Feed Test" showTitle={true} />
    </div>
  )
}

