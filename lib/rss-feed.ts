import Parser from 'rss-parser'

const RSS_FEED_URL = 'https://www.simplifyingthemarket.com/en/feed/'

export interface RSSFeedItem {
  title: string
  link: string
  pubDate: string
  contentSnippet?: string
  content?: string
  categories?: string[]
  guid?: string
  isoDate?: string
}

export interface RSSFeedData {
  title?: string
  description?: string
  link?: string
  items: RSSFeedItem[]
}

const parser = new Parser({
  customFields: {
    item: ['content:encoded', 'dc:creator', 'description'],
  },
  timeout: 10000, // 10 second timeout
})

/**
 * Fetches and parses the RSS feed with caching
 * Uses Next.js fetch cache with revalidation
 */
// The Keeping Current Matters articles were removed on 2026-11-14: their terms
// allow them on a website only during a paid membership, which has ended.
export async function fetchRSSFeed(_limit: number = 10): Promise<RSSFeedData | null> {
  return null
}

export function formatRSSDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateString
  }
}

