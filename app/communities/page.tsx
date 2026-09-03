import Link from 'next/link'
import { Shield, Trophy, Heart, Users } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'
import CommunityCard from '@/components/community-card'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import FaqSection from '@/components/faq-section'
import { siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import { generateItemListSchema, generatePageGraph } from '@/lib/structured-data'
import { communityIndexFaqs } from '@/lib/page-faqs'

export const metadata = buildMetadata({
  title: 'Las Vegas 55+ Communities | Active Adult Neighborhoods | Dr. Jan Duffy',
  description:
    'Compare over-55 and active adult communities in Las Vegas, Henderson, and Summerlin: Sun City Summerlin, Sun City Anthem, Siena, and Del Webb Lake Las Vegas. Single-story homes, golf, pickleball, and HOA amenities.',
  path: '/communities',
  image: siteImages.heroHome,
  keywords: ['Las Vegas 55+ communities', 'active adult communities Las Vegas', 'Sun City Summerlin', 'Del Webb Lake Las Vegas'],
})

const featuredCommunities = lasVegasCommunities.filter(c => c.featured)
const allCommunities = lasVegasCommunities

export default function CommunitiesPage() {
  const pageGraph = generatePageGraph({
    pageType: 'CollectionPage',
    name: 'Las Vegas 55+ Communities',
    description:
      'Compare 55+ communities in Las Vegas, Henderson, and Summerlin, including Sun City Summerlin, Sun City Anthem, and Del Webb Lake Las Vegas.',
    path: '/communities',
    image: siteImages.heroHome,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Las Vegas 55+ Communities', url: '/communities' },
    ],
    faqs: communityIndexFaqs,
    extra: [
      generateItemListSchema({
        name: 'Las Vegas 55+ Communities',
        description: 'Active adult communities represented by Dr. Jan Duffy.',
        items: allCommunities.map((community) => ({
          name: community.name,
          url: `/communities/${community.slug}`,
        })),
      }),
    ],
  })

  return (
    <div>
      <JsonLd id="communities-page-graph" data={pageGraph} />
      <PageHero
        image={siteImages.heroHome}
        title="Las Vegas 55+ Communities"
        subtitle="Compare Sun City Summerlin, Sun City Anthem, Del Webb Lake Las Vegas, Siena, and 20+ active adult neighborhoods across Las Vegas, Henderson, and Summerlin."
        breadcrumbs={[{ label: 'Communities' }]}
        primaryCTA={{ text: 'Search Homes For Sale', href: '/homes-for-sale' }}
        secondaryCTA={{ text: 'Contact Dr. Jan Duffy', href: '/contact' }}
      />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Why Las Vegas 55+ Communities Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Choose a Las Vegas 55+ Community?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="p-6 rounded-lg border bg-card">
            <Trophy className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">World-Class Amenities</h3>
            <p className="text-muted-foreground">
              Las Vegas 55+ communities feature amenities that rival luxury resorts, including championship golf courses, state-of-the-art fitness centers, swimming pools, tennis and pickleball courts, and comprehensive clubhouses.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Users className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Active Social Scene</h3>
            <p className="text-muted-foreground">
              Each community hosts hundreds of clubs and organizations based on diverse interests, from book clubs and gardening groups to travel clubs and volunteer organizations, ensuring you'll find like-minded neighbors.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Heart className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Low-Maintenance Living</h3>
            <p className="text-muted-foreground">
              Most communities handle landscaping, exterior maintenance, and common area upkeep, allowing you to focus on enjoying your retirement rather than maintaining a property.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Shield className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Security & Peace of Mind</h3>
            <p className="text-muted-foreground">
              Gated communities provide 24/7 security, controlled access, and a sense of safety that allows you to travel worry-free while knowing your home is protected.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Featured Las Vegas 55+ Communities</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          These premier communities represent the pinnacle of active adult living in Las Vegas, each offering unique characteristics that make them stand out in the market. From luxury amenities to exceptional locations, these featured communities showcase the best of 55+ living in the Las Vegas area.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCommunities.map((community) => (
            <CommunityCard key={community.slug} community={community} featured={true} />
          ))}
        </div>
      </section>

      {/* All Communities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">All Las Vegas 55+ Communities</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Below is our comprehensive directory of Las Vegas area 55+ communities. Each community offers unique benefits, amenities, and lifestyle options. Click on any community to learn more about homes for sale, floor plans, amenities, market updates, and community characteristics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCommunities.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>
      </section>

      {/* Choosing a Community Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How to Choose the Right Las Vegas 55+ Community for You</h2>
        <div className="max-w-4xl space-y-6 text-muted-foreground mb-8">
          <p>
            Selecting the right 55+ community is one of the most important decisions you'll make for your retirement. The best community for you depends on your lifestyle preferences, budget, desired amenities, and long-term goals. Here's what to consider when evaluating Las Vegas 55+ communities:
          </p>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Location and Neighborhood</h3>
            <p>
              Each area of Las Vegas offers distinct advantages. <Link href="/summerlin-55-homes" className="text-primary hover:underline">Summerlin</Link> provides a master-planned community atmosphere with mountain views and extensive amenities. <Link href="/henderson-55-homes" className="text-primary hover:underline">Henderson</Link> offers a more suburban feel with excellent shopping and dining. Consider proximity to healthcare, shopping, entertainment, and airports when evaluating locations. Use our <Link href="/las-vegas-55-guide/map" className="text-primary hover:underline">interactive map</Link> to explore community locations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Amenities and Lifestyle</h3>
            <p>
              Different communities emphasize different amenities. Golf enthusiasts will appreciate communities with championship courses, while fitness-focused residents might prioritize state-of-the-art gym facilities. Social butterflies should consider communities with active club scenes and busy event calendars. Discover <Link href="/las-vegas-55-guide/top-10-gated" className="text-primary hover:underline">gated communities</Link> for enhanced security or <Link href="/las-vegas-55-guide/top-10-pickleball" className="text-primary hover:underline">communities with pickleball courts</Link> for active recreation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Home Types and Pricing</h3>
            <p>
              Las Vegas 55+ communities offer diverse housing options from affordable attached villas to luxury single-family homes. Understanding price ranges, homeowner association fees, and what's included in those fees is crucial for budget planning. Consider both initial purchase price and ongoing costs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Community Culture and Demographics</h3>
            <p>
              Each community has its own personality and demographic profile. Some attract active, outgoing residents, while others appeal to those seeking quiet, peaceful living. Visiting communities, talking to residents, and attending community events can help you identify where you'll feel most at home.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Get Started Exploring Las Vegas 55+ Communities</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Ready to find your perfect Las Vegas 55+ community? Our team of specialists is here to help you navigate your options, schedule tours, and find the community that best matches your lifestyle and budget. Contact us today to begin your journey toward exceptional active adult living.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact Our Team
          </Link>
          <Link
            href="/las-vegas-55-guide"
            className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
          >
            View Complete Guide
          </Link>
          <Link
            href="/homes-for-sale"
            className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
          >
            Search Homes For Sale
          </Link>
        </div>
      </section>
      <FaqSection faqs={communityIndexFaqs} />
    </div>
    </div>
  )
}
