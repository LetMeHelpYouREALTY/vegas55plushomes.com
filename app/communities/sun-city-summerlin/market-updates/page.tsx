export const metadata = {
  title: 'Sun City Summerlin Real Estate Market Updates | Las Vegas 55+',
  description: 'Stay informed with the latest Sun City Summerlin real estate market updates, trends, and statistics.',
}

export default function SunCitySummerlinMarketUpdatesPage() {
  const updates = [
    { date: 'October 2025', title: 'October 2025 – Sun City Summerlin Real Estate Market Update', excerpt: 'Current market conditions and trends in Sun City Summerlin...' },
    { date: 'September 2025', title: 'September 2025 – Sun City Summerlin Real Estate Market Update', excerpt: 'September market analysis and inventory levels...' },
    { date: 'August 2025', title: 'August 2025 – Sun City Summerlin Real Estate Market Update', excerpt: 'Summer market activity and price trends...' },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a> / <a href="/communities" className="hover:text-foreground">Communities</a> / <a href="/communities/sun-city-summerlin" className="hover:text-foreground">Sun City Summerlin</a> / Market Updates
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sun City Summerlin Real Estate Market Updates</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Stay informed with the latest real estate market updates, trends, and statistics for Sun City Summerlin.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl">
        {updates.map((update) => (
          <article key={update.title} className="rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow">
            <div className="text-sm text-muted-foreground mb-2">{update.date}</div>
            <h2 className="text-2xl font-semibold mb-2">{update.title}</h2>
            <p className="text-muted-foreground">{update.excerpt}</p>
            <a href="#" className="text-primary hover:underline text-sm font-medium mt-4 inline-block">
              Read More →
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}

