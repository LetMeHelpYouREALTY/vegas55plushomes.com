import Link from 'next/link'
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react'
import { fetchRSSFeed, formatRSSDate, type RSSFeedItem } from '@/lib/rss-feed'

interface RSSFeedProps {
  limit?: number
  title?: string
  showTitle?: boolean
  className?: string
}

export default async function RSSFeed({ limit = 5, title = 'Latest News & Market Insights', showTitle = true, className = '' }: RSSFeedProps) {
  let feedData: Awaited<ReturnType<typeof fetchRSSFeed>> = null
  
  try {
    feedData = await fetchRSSFeed(limit)
  } catch (error) {
    console.error('RSS Feed Component Error:', error)
  }

  if (!feedData || !feedData.items || feedData.items.length === 0) {
    // In development, show a helpful message
    if (process.env.NODE_ENV === 'development') {
      return (
        <div className={`rounded-lg border bg-card p-6 ${className}`}>
          <p className="text-muted-foreground text-center mb-2">
            RSS Feed: No articles available at this time.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Check console for errors. Feed URL: https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18
          </p>
        </div>
      )
    }
    
    // In production, return null to not show anything
    return null
  }

  return (
    <div className={className}>
      {showTitle && title && (
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
      )}
      <p className="mb-6 text-sm text-muted-foreground">
        Headlines below are syndicated from Simplifying the Market and open on that publisher&apos;s
        site. Dr. Jan Duffy does not republish full third-party articles on vegas55plushomes.com.
      </p>
      <div className="space-y-6">
        {feedData.items.map((item, index) => (
          <RSSFeedItem key={item.guid || item.link || index} item={item} />
        ))}
      </div>
    </div>
  )
}

function RSSFeedItem({ item }: { item: RSSFeedItem }) {
  const formattedDate = formatRSSDate(item.pubDate)
  const excerpt = item.contentSnippet || item.content?.substring(0, 200) || ''

  return (
    <Link
      href={item.link}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="block rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow group"
    >
      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
        <Calendar className="h-4 w-4" />
        <span>{formattedDate}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
        {item.title}
      </h3>
      {excerpt && (
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
          {excerpt.length >= 200 && '...'}
        </p>
      )}
      <div className="flex items-center text-primary font-medium text-sm">
        Read Full Article
        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}

