import Link from 'next/link'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import RSSFeed from '@/components/rss-feed'

export const metadata = {
  title: 'Blog | Las Vegas 55+ Real Estate News & Insights | Vegas 55 Plus Homes',
  description: 'Stay updated with the latest Las Vegas 55+ real estate news, market insights, community updates, and helpful tips for active adults seeking their perfect home.',
  keywords: ['Las Vegas 55+ real estate blog', 'active adult real estate news', 'Las Vegas 55+ market updates', 'retirement real estate insights'],
}

export default function BlogPage() {
  const posts = [
    {
      title: 'Top 10 Gated 55+ Communities in Las Vegas',
      date: 'October 28, 2025',
      excerpt: 'Las Vegas is an attractive destination for retirees. Discover the top 10 gated 55+ communities offering enhanced security, privacy, exclusivity, and exceptional amenities for active adults seeking secure retirement living.',
      category: 'Las Vegas 55+ Communities',
      href: '/las-vegas-55-guide/top-10-gated',
    },
    {
      title: 'Top 10 Las Vegas 55+ Communities with Pickleball Courts',
      date: 'August 15, 2025',
      excerpt: 'Pickleball has rapidly grown in popularity among active adults. Discover Las Vegas 55+ communities featuring pickleball courts and learn why this sport has become so popular in active adult communities across the valley.',
      category: 'Community Amenities',
      href: '/las-vegas-55-guide/top-10-pickleball',
    },
    {
      title: 'Las Vegas 55+ Real Estate Market Update - October 2025',
      date: 'October 11, 2025',
      excerpt: 'Current market conditions and trends in Las Vegas 55+ communities. Stay informed about pricing trends, inventory levels, and what to expect when buying or selling in the Las Vegas active adult real estate market.',
      category: 'Market Updates',
      href: '/blog/market-update-october-2025',
    },
    {
      title: 'Complete Guide to Choosing Your Las Vegas 55+ Community',
      date: 'September 20, 2025',
      excerpt: 'Learn how to evaluate Las Vegas 55+ communities and choose the one that best matches your lifestyle, budget, and preferences. This comprehensive guide covers everything from amenities to location to community culture.',
      category: 'Buying Guide',
      href: '/blog/choosing-55-community-guide',
    },
    {
      title: 'Understanding Homeowner Association Fees in Las Vegas 55+ Communities',
      date: 'August 30, 2025',
      excerpt: 'Homeowner association fees vary significantly between communities. Learn what to expect, what fees typically cover, and how to evaluate whether HOA fees represent good value for the amenities and services provided.',
      category: 'Buying Guide',
      href: '/blog/hoa-fees-guide',
    },
    {
      title: 'Moving to Las Vegas: What Active Adults Need to Know',
      date: 'July 15, 2025',
      excerpt: 'Relocating to Las Vegas from another state? This guide covers everything active adults need to know about Nevada tax benefits, climate adjustments, healthcare access, and lifestyle considerations when moving to Las Vegas.',
      category: 'Relocation Guide',
      href: '/blog/moving-to-las-vegas-guide',
    },
    {
      title: 'Las Vegas 55+ Real Estate Trends | Google Trends Insights',
      date: 'October 30, 2025',
      excerpt: 'Discover trending search terms and insights for Las Vegas 55+ real estate communities. Use Google Trends data to understand market interest, seasonal patterns, and regional search behavior.',
      category: 'Market Insights',
      href: '/blog/google-trends-insights',
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Las Vegas 55+ Real Estate Blog | News, Insights & Market Updates</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Stay updated with the latest Las Vegas 55+ real estate news, market insights, community updates, and helpful tips for active adults. Our blog provides comprehensive information to help you make informed decisions about Las Vegas active adult living.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Whether you're researching communities, preparing to move to Las Vegas, or staying current on market trends, our blog offers valuable insights from Las Vegas 55+ real estate specialists who understand the unique aspects of active adult community living.
        </p>
      </div>

      <div className="max-w-4xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Latest Articles and Insights</h2>
          
          {/* RSS Feed Integration */}
          <div className="mb-12">
            <RSSFeed limit={5} title="" showTitle={false} className="mb-8" />
          </div>
          
          <h3 className="text-2xl font-bold mb-6 mt-12">Featured Community Guides</h3>
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={post.href || '#'}
                className="block rounded-lg border bg-card p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <Tag className="h-4 w-4 text-primary" />
                  <span className="text-primary font-medium">{post.category}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center text-primary font-medium">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Blog Topics We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Community Guides</h3>
              <p className="text-muted-foreground">
                In-depth guides to Las Vegas 55+ communities, including amenities, lifestyles, home options, and what makes each community unique. Learn about featured communities and discover which might be your perfect match.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Market Updates</h3>
              <p className="text-muted-foreground">
                Stay current with Las Vegas 55+ real estate market trends, pricing information, inventory levels, and market forecasts. Our market updates help you understand current conditions and make informed timing decisions.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Buying Guides</h3>
              <p className="text-muted-foreground">
                Comprehensive guides covering everything from choosing a community to understanding homeowner association structures to navigating the buying process specifically for 55+ communities in Las Vegas.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Lifestyle Tips</h3>
              <p className="text-muted-foreground">
                Insights about active adult living, community amenities, social opportunities, and tips for maximizing your retirement lifestyle in Las Vegas 55+ communities.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Why Follow Our Las Vegas 55+ Real Estate Blog?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Our blog provides specialized insights focused specifically on Las Vegas 55+ real estate and active adult community living. Unlike general real estate blogs, we focus exclusively on the unique aspects of 55+ community transactions, lifestyle considerations, and market dynamics specific to active adult communities.
            </p>
            <p>
              We understand that buying in a 55+ community is fundamentally different from traditional real estate purchases. Our content addresses these unique considerations, from understanding age restrictions and homeowner association structures to evaluating amenity packages and community cultures. This specialized focus ensures you receive information that's directly relevant to your Las Vegas 55+ home search.
            </p>
            <p>
              Our team of Las Vegas 55+ real estate specialists shares their expertise through blog articles that help you navigate your home buying journey with confidence. Whether you're in the early research phase or actively looking at homes, our blog provides valuable information to support your decision-making process.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Subscribe to our blog updates to receive the latest articles about Las Vegas 55+ communities, market insights, and helpful tips for active adults. Stay informed about new community developments, market changes, and resources that can help you in your home search journey.
            </p>
            <p>
              Have specific questions about Las Vegas 55+ communities or topics you'd like us to cover? Contact us to suggest blog topics or schedule a consultation to discuss your specific questions and needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Our Team
            </Link>
            <Link
              href="/communities"
              className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
            >
              Explore Communities
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
