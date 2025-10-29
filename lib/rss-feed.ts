import Parser from 'rss-parser'

const RSS_FEED_URL = 'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18'

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
    item: ['content:encoded', 'dc:creator'],
  },
  timeout: 10000, // 10 second timeout
})

/**
 * Fetches and parses the RSS feed with caching
 * Uses Next.js fetch cache with revalidation
 */
export async function fetchRSSFeed(limit: number = 10): Promise<RSSFeedData | null> {
  try {
    // Use Next.js fetch with caching - revalidates every hour
    const response = await fetch(RSS_FEED_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour (3600 seconds)
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Feed Reader)',
      },
    })

    if (!response.ok) {
      console.error(`RSS feed fetch failed: ${response.status} ${response.statusText}`)
      return null
    }

    const xml = await response.text()
    const feed = await parser.parseString(xml)

    // Transform the feed to our interface
    const feedData: RSSFeedData = {
      title: feed.title || undefined,
      description: feed.description || undefined,
      link: feed.link || undefined,
      items: (feed.items || [])
        .slice(0, limit)
        .map((item) => ({
          title: item.title || 'Untitled',
          link: item.link || '#',
          pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
          contentSnippet: item.contentSnippet || undefined,
          content: item.content || item['content:encoded'] || undefined,
          categories: item.categories || undefined,
          guid: item.guid || undefined,
          isoDate: item.isoDate || undefined,
        })),
    }

    return feedData
  } catch (error) {
    console.error('Error fetching RSS feed:', error)
    return null
  }
}

/**
 * Format date from RSS feed for display
 */
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

