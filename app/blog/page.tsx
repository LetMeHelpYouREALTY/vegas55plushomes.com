export const metadata = {
  title: 'Blog | Las Vegas 55+ Real Estate News & Insights | Vegas 55 Plus Homes',
  description: 'Stay updated with the latest Las Vegas 55+ real estate news, market insights, and community updates.',
}

export default function BlogPage() {
  const posts = [
    {
      title: 'Top 10 Gated 55+ Communities in Las Vegas',
      date: 'October 28, 2025',
      excerpt: 'Las Vegas is an attractive destination for retirees. Discover the top 10 gated 55+ communities offering security and exclusivity.',
      category: 'Las Vegas 55+ Communities',
    },
    {
      title: 'Top 10 Las Vegas 55+ Communities with Pickleball Courts',
      date: 'August 15, 2025',
      excerpt: 'Pickleball has rapidly grown in popularity among active adults. Discover Las Vegas 55+ communities featuring pickleball courts.',
      category: 'Community Amenities',
    },
    {
      title: 'Las Vegas 55+ Real Estate Market Update - October 2025',
      date: 'October 11, 2025',
      excerpt: 'Current market conditions and trends in Las Vegas 55+ communities. Stay informed about the latest real estate developments.',
      category: 'Market Updates',
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Stay updated with the latest Las Vegas 55+ real estate news, market insights, community updates, and helpful tips for active adults.
        </p>
      </div>

      <div className="space-y-8 max-w-4xl">
        {posts.map((post) => (
          <article key={post.title} className="rounded-lg border bg-card p-8 hover:shadow-lg transition-shadow">
            <div className="text-sm text-primary mb-2">{post.category}</div>
            <div className="text-sm text-muted-foreground mb-4">{post.date}</div>
            <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <a href="#" className="text-primary hover:underline text-sm font-medium">
              Read More →
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}

