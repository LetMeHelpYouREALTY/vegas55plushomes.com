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
  const feedData = await fetchRSSFeed(limit)

  if (!feedData || !feedData.items || feedData.items.length === 0) {
    return (
      <div className={`rounded-lg border bg-card p-6 ${className}`}>
        <p className="text-muted-foreground text-center">
          No articles available at this time. Please check back later.
        </p>
      </div>
    )
  }

  return (
    <div className={className}>
      {showTitle && title && (
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
      )}
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
      rel="noopener noreferrer"
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

