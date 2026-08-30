import Link from 'next/link'
import { TrendingUp, Calendar, BarChart3, MapPin, Lightbulb } from 'lucide-react'
import { generateArticleSchema, generatePageGraph } from '@/lib/structured-data'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import { siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'

export const metadata = buildMetadata({
  title: 'Las Vegas 55+ Real Estate Trends | Google Trends Insights | Dr. Jan Duffy',
  description:
    'Search-interest insights for Las Vegas 55+ communities including Sun City Summerlin and Del Webb Lake Las Vegas. Dated market context for homebuyers.',
  path: '/blog/google-trends-insights',
  image: siteImages.golf,
  keywords: ['Las Vegas 55+ trends', 'Sun City Summerlin search interest'],
})

export default function GoogleTrendsInsightsPage() {
  const trendingTerms = [
    {
      term: 'Las Vegas 55+ communities',
      interest: 'High',
      trend: 'Rising',
      description: 'Consistently high search interest with seasonal peaks in Q1 and Q4',
      insights: 'Peak interest in January (relocation planning) and October (year-end planning)',
    },
    {
      term: 'Del Webb Lake Las Vegas',
      interest: 'High',
      trend: 'Stable',
      description: 'Strong, consistent search interest year-round',
      insights: 'Interest highest in Nevada, California, and Arizona',
    },
    {
      term: 'Sun City Summerlin',
      interest: 'High',
      trend: 'Rising',
      description: 'Growing search interest, particularly from out-of-state buyers',
      insights: 'Strong interest from California relocators seeking active adult communities',
    },
    {
      term: 'Henderson 55+ homes',
      interest: 'Moderate',
      trend: 'Rising',
      description: 'Increasing search interest as Henderson gains recognition',
      insights: 'Interest peaks during spring and fall buying seasons',
    },
    {
      term: 'Las Vegas retirement communities',
      interest: 'Moderate',
      trend: 'Stable',
      description: 'Consistent search interest with slight seasonal variations',
      insights: 'Related searches often include "tax benefits" and "cost of living"',
    },
  ]

  const seasonalInsights = [
    {
      quarter: 'Q1 (Jan-Mar)',
      focus: 'Relocation Planning',
      topics: ['Moving to Las Vegas', 'Nevada tax benefits', 'Best time to relocate'],
      publishTiming: 'Publish in December/January',
    },
    {
      quarter: 'Q2 (Apr-Jun)',
      focus: 'Home Buying Season',
      topics: ['Community comparisons', 'Amenities guide', 'Summerlin vs Henderson'],
      publishTiming: 'Publish in March/April',
    },
    {
      quarter: 'Q3 (Jul-Sep)',
      focus: 'Tour Planning',
      topics: ['Virtual tours', 'Community visits', 'Las Vegas climate'],
      publishTiming: 'Publish in July/August',
    },
    {
      quarter: 'Q4 (Oct-Dec)',
      focus: 'Year-End Planning',
      topics: ['Year-end strategies', 'New Year relocation', 'Market updates'],
      publishTiming: 'Publish in October/November',
    },
  ]

  return (
    <div>
      <JsonLd
        id="trends-page-graph"
        data={generatePageGraph({
          pageType: 'WebPage',
          name: 'Las Vegas 55+ Real Estate Trends',
          description:
            'Search-interest insights for Las Vegas 55+ communities including Sun City Summerlin and Del Webb Lake Las Vegas.',
          path: '/blog/google-trends-insights',
          image: siteImages.golf,
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: 'Google Trends Insights', url: '/blog/google-trends-insights' },
          ],
          extra: [
            generateArticleSchema({
              headline: 'Las Vegas 55+ Real Estate Trends | Google Trends Insights',
              description:
                'Discover trending search terms and insights for Las Vegas 55+ real estate communities.',
              datePublished: '2025-10-30',
              url: '/blog/google-trends-insights',
              image: siteImages.golf,
            }),
          ],
        })}
      />
      <PageHero
        image={siteImages.golf}
        title="Las Vegas 55+ Real Estate Trends"
        subtitle="Search-interest patterns for Sun City Summerlin, Del Webb Lake Las Vegas, and Henderson 55+ communities."
        breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Trends' }]}
      />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Understanding search trends helps us create content that resonates with your interests. This page shares insights from Google Trends analysis to help you understand market interest in Las Vegas 55+ communities and real estate.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          By monitoring search trends, we can identify emerging interests, seasonal patterns, and topics that matter most to active adults seeking Las Vegas 55+ communities. This data informs our content strategy and ensures we're addressing the questions and topics you're actively searching for.
        </p>
      </div>

      <div className="max-w-6xl space-y-12 mb-12">
        {/* Trending Terms */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Key Search Terms & Trends</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            These are the primary search terms related to Las Vegas 55+ communities and real estate. Monitoring these trends helps us understand what information you're seeking and when interest peaks throughout the year.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trendingTerms.map((term, index) => (
              <div key={index} className="rounded-lg border bg-card p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{term.term}</h3>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      term.interest === 'High' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {term.interest}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      term.trend === 'Rising' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                    }`}>
                      {term.trend}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">{term.description}</p>
                <div className="flex items-start gap-2 text-sm">
                  <Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{term.insights}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seasonal Patterns */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Seasonal Search Patterns</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Search interest in Las Vegas 55+ communities follows predictable seasonal patterns. Understanding these patterns helps us publish relevant content at the right time, ensuring information is available when you need it most.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalInsights.map((season, index) => (
              <div key={index} className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-3">{season.quarter}</h3>
                <p className="font-medium text-primary mb-3">{season.focus}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium text-foreground">Popular Topics:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {season.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <BarChart3 className="h-4 w-4" />
                  <span className="font-medium">{season.publishTiming}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regional Interest */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Regional Search Interest</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Search interest in Las Vegas 55+ communities varies by region. Understanding where interest comes from helps us create content that addresses location-specific questions and concerns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-2">California</h3>
              <p className="text-sm text-muted-foreground mb-3">Very High Interest</p>
              <p className="text-sm text-muted-foreground">
                Many Californians search for Las Vegas 55+ communities as a more affordable retirement option. Interest peaks during tax season and relocation planning periods.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-2">Nevada (Local)</h3>
              <p className="text-sm text-muted-foreground mb-3">High Interest</p>
              <p className="text-sm text-muted-foreground">
                Local Nevadans show strong interest in Las Vegas 55+ communities, particularly in Henderson and Summerlin areas. Consistent year-round interest.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-2">Arizona</h3>
              <p className="text-sm text-muted-foreground mb-3">Moderate-High Interest</p>
              <p className="text-sm text-muted-foreground">
                Arizonans often compare Las Vegas 55+ communities with Arizona options. Interest in Del Webb communities particularly strong.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-2">Texas</h3>
              <p className="text-sm text-muted-foreground mb-3">Moderate Interest</p>
              <p className="text-sm text-muted-foreground">
                Growing interest from Texas as Las Vegas gains recognition as a retirement destination. Interest often related to tax benefits.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-2">Utah</h3>
              <p className="text-sm text-muted-foreground mb-3">Moderate Interest</p>
              <p className="text-sm text-muted-foreground">
                Mountain state residents show interest in Las Vegas for retirement, particularly during winter months. Interest in active adult lifestyle communities.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-2">Other States</h3>
              <p className="text-sm text-muted-foreground mb-3">Variable Interest</p>
              <p className="text-sm text-muted-foreground">
                Interest from other states varies seasonally and often correlates with relocation planning periods and retirement decision-making timelines.
              </p>
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Related Topics & Content Opportunities</h2>
          <p className="text-lg text-muted-foreground mb-6">
            When people search for Las Vegas 55+ communities, they often also search for related topics. Understanding these connections helps us create comprehensive content that addresses all aspects of your search journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3">Top Related Topics</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <BarChart3 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>Tax benefits of Nevada retirement</span>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>Cost of living Las Vegas vs other cities</span>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>Las Vegas 55+ community amenities</span>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>Healthcare in Las Vegas</span>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>Gated 55+ communities</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3">Rising Related Topics</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>Pickleball communities Las Vegas</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>New construction 55+ homes</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>Buyer's agent for new construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>Virtual tours 55+ communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>Del Webb Lake Las Vegas floor plans</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use This Data */}
        <section>
          <h2 className="text-3xl font-bold mb-6">How We Use Trends Data</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Google Trends data informs our content strategy in several important ways. By understanding what you're searching for and when, we can create content that's both timely and relevant to your interests.
            </p>
            <p>
              When we identify rising search terms, we develop content to address those topics before they become highly competitive. This positions us as a resource for emerging questions and interests in the Las Vegas 55+ community space.
            </p>
            <p>
              Seasonal patterns help us time our content publication. If we know interest in "moving to Las Vegas" peaks in January, we'll publish comprehensive relocation guides in December so they're ready when you start searching.
            </p>
            <p>
              Regional interest data helps us create location-specific content. If we see high interest from California, we might create content addressing common questions Californians have about relocating to Las Vegas, such as tax differences, climate comparisons, and cost of living comparisons.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3">Content Planning</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We use trends data to plan our content calendar, ensuring we publish relevant topics at the right time.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Identify emerging topics before they peak</li>
                <li>• Time seasonal content for maximum impact</li>
                <li>• Address questions as they arise in searches</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold mb-3">Content Enhancement</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We enhance existing content based on related topics and rising queries.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Update pages with trending related topics</li>
                <li>• Add sections addressing rising questions</li>
                <li>• Improve content based on search patterns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Google Trends Resources</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Interested in exploring trends yourself? Google Trends provides free tools to analyze search interest and discover insights relevant to your interests.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-3">Google Trends Explore</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Compare search terms, analyze regional interest, and discover related topics and queries.
              </p>
              <a
                href="https://trends.google.com/trends/explore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                Visit Google Trends Explore →
              </a>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-3">Trending Now</h3>
              <p className="text-sm text-muted-foreground mb-4">
                See what's trending right now on Google Search, filtered by category and location.
              </p>
              <a
                href="https://trends.google.com/trending"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                View Trending Now →
              </a>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-3">YouTube Trends</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore trending searches on YouTube to discover video content trends.
              </p>
              <a
                href="https://trends.google.com/trends/youtube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                Check YouTube Trends →
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-lg border bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Explore Las Vegas 55+ Communities</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Ready to learn more about Las Vegas 55+ communities? Browse our comprehensive guides and community information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/communities"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              View All Communities
            </Link>
            <Link
              href="/las-vegas-55-guide"
              className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
            >
              Las Vegas 55+ Guide
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}

