import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPin, CheckCircle, Trophy, Users, Heart, Shield } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import FaqSection from '@/components/faq-section'
import { getCommunityImage } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import {
  generatePageGraph,
  generateResidenceCommunitySchema,
} from '@/lib/structured-data'

export async function generateStaticParams() {
  return lasVegasCommunities.map((community) => ({
    slug: community.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const community = lasVegasCommunities.find((c) => c.slug === slug)

  if (!community) {
    return {
      title: 'Community Not Found | Vegas 55 Plus Homes',
    }
  }

  const image = getCommunityImage(community)

  return buildMetadata({
    title: `${community.name} 55+ Homes | ${community.city}, NV | Dr. Jan Duffy`,
    description: community.longDescription.slice(0, 155),
    path: `/communities/${community.slug}`,
    image,
    keywords: [
      `${community.name}`,
      `${community.name} homes for sale`,
      `55+ community ${community.city}`,
      `${community.name} Las Vegas`,
    ],
  })
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const community = lasVegasCommunities.find((c) => c.slug === slug)

  if (!community) {
    notFound()
  }

  const image = getCommunityImage(community)
  const faqs = [
    {
      question: `Where is ${community.name} located?`,
      answer: `${community.name} is a 55+ community in ${community.location}. Dr. Jan Duffy represents buyers here. Call (702) 996-3758 to tour homes.`,
    },
    {
      question: `What amenities does ${community.name} offer?`,
      answer: `${community.name} includes ${community.amenities.slice(0, 4).join(', ')}${community.amenities.length > 4 ? ', and more' : ''}.`,
    },
  ]

  const pageGraph = generatePageGraph({
    pageType: 'ItemPage',
    name: `${community.name} 55+ Homes | ${community.city}, NV`,
    description: community.longDescription,
    path: `/communities/${community.slug}`,
    image,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Las Vegas 55+ Communities', url: '/communities' },
      { name: community.name, url: `/communities/${community.slug}` },
    ],
    faqs,
    extra: [
      generateResidenceCommunitySchema({
        name: community.name,
        description: community.longDescription,
        url: `/communities/${community.slug}`,
        image,
        city: community.city,
        amenities: community.amenities,
      }),
    ],
  })

  return (
    <div>
      <JsonLd id={`${community.slug}-page-graph`} data={pageGraph} />
      <PageHero
        image={image}
        title={`${community.name} | ${community.city} 55+ Homes`}
        subtitle={community.longDescription}
        breadcrumbs={[
          { label: 'Communities', href: '/communities' },
          { label: community.name },
        ]}
        primaryCTA={{ text: 'View Homes For Sale', href: `/homes-for-sale?community=${slug}` }}
        secondaryCTA={{ text: 'Schedule a Tour', href: '/contact' }}
      />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="h-5 w-5" />
          <span className="text-lg">{community.location}</span>
        </div>
        {community.priceRange && (
          <p className="text-lg font-semibold text-primary">Price Range: {community.priceRange}</p>
        )}
        {community.homeCount && (
          <p className="text-lg text-muted-foreground">Community Size: {community.homeCount.toLocaleString()}+ homes</p>
        )}
      </div>

      {/* Quick Stats */}
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="rounded-lg border bg-card p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">{community.homesForSale}</div>
          <div className="text-muted-foreground">Homes For Sale</div>
        </div>
        <div className="rounded-lg border bg-card p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">{community.floorplans.length}</div>
          <div className="text-muted-foreground">Floor Plan Options</div>
        </div>
        <div className="rounded-lg border bg-card p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">{community.amenities.length}+</div>
          <div className="text-muted-foreground">Amenities</div>
        </div>
      </div>

      {/* Comprehensive Content Section */}
      <div className="space-y-12 mb-12">
        {/* About the Community */}
        <section>
          <h2 className="text-3xl font-bold mb-6">About {community.name}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              {community.name} represents one of Las Vegas's premier destinations for active adults seeking an exceptional retirement lifestyle. Located in {community.city}, this {community.category === 'mega' ? 'mega' : community.category === 'large' ? 'large' : community.category === 'premium' ? 'premium' : 'distinguished'} 55+ community offers residents an unparalleled combination of world-class amenities, beautifully designed homes, and a vibrant social atmosphere that defines the active adult living experience.
            </p>
            <p>
              Established {community.yearBuilt ? `in ${community.yearBuilt}` : 'as a premier destination'}, {community.name} has grown into one of the most sought-after 55+ communities in the Las Vegas area. With {community.homeCount ? `${community.homeCount.toLocaleString()}+ homes` : 'hundreds of homes'} {community.size ? `across ${community.size}` : ''}, this community provides residents with extensive amenities, diverse home options, and endless opportunities for active living, social engagement, and personal enrichment.
            </p>
            <p>
              What sets {community.name} apart is its commitment to creating a lifestyle that goes beyond traditional retirement living. Residents here enjoy access to resort-style amenities, championship golf courses, state-of-the-art fitness facilities, and an active social calendar that keeps the community vibrant and engaging year-round. Whether you're passionate about golf, fitness, arts and crafts, or simply enjoying the company of like-minded neighbors, {community.name} offers the perfect backdrop for your active retirement years.
            </p>
          </div>
        </section>

        {/* Location & Lifestyle */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Location & Lifestyle at {community.name}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              {community.name} is strategically located in {community.city}, offering residents the perfect balance of active adult community living and access to all that the Las Vegas area has to offer. <Link href="/communities" className="text-primary hover:underline">Explore other Las Vegas 55+ communities</Link> or learn more about <Link href="/las-vegas-55-guide" className="text-primary hover:underline">Las Vegas 55+ living</Link>. The community's location provides easy access to world-class healthcare facilities, shopping centers, entertainment venues, and the natural beauty of the Nevada desert landscape.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Convenient Access to Las Vegas Amenities</h3>
            <p>
              Living at {community.name} means you're never far from the vibrant energy of Las Vegas while enjoying the peaceful, resort-like atmosphere of your community. Residents can easily access the Las Vegas Strip for world-class entertainment, dining, and shows, or explore the many museums, galleries, and cultural attractions that make Las Vegas a rich cultural destination beyond the casinos and resorts.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Year-Round Active Living</h3>
            <p>
              The Las Vegas climate is perfect for active adults, with over 300 days of sunshine annually and mild winters that allow for year-round outdoor activities. At {community.name}, you can enjoy outdoor pools, walking trails, golf courses, and outdoor recreation facilities throughout the year, making it easy to maintain an active, healthy lifestyle regardless of the season.
            </p>
          </div>
        </section>

        {/* Amenities */}
        <section>
          <h2 className="text-3xl font-bold mb-6">World-Class Amenities at {community.name}</h2>
          <p className="text-lg text-muted-foreground mb-6">
            {community.name} features an exceptional array of amenities designed to support an active, engaged lifestyle. These resort-style facilities are included with your homeowner association fees, providing exceptional value and convenience for residents.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {community.amenities.map((amenity, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{amenity}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Recreation & Social Activities</h3>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Beyond the physical amenities, {community.name} offers a vibrant social calendar filled with activities, events, and opportunities to connect with neighbors. From fitness classes and golf tournaments to book clubs, travel groups, and holiday celebrations, there's always something happening in the community. The active homeowners association ensures that residents have access to a full calendar of social, recreational, and educational opportunities throughout the year.
            </p>
            <p>
              Many residents find that the social opportunities at {community.name} are just as valuable as the physical amenities. The community's active club scene allows residents to pursue their interests, develop new hobbies, and build lasting friendships with neighbors who share similar interests and life experiences.
            </p>
          </div>
        </section>

        {/* Home Options */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Home Options at {community.name}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-6">
            <p>
              {community.name} offers diverse home options to suit a variety of preferences and budgets. Whether you're seeking a low-maintenance attached villa, a spacious single-family home, or something in between, you'll find options that match your lifestyle and needs.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Available Floor Plans</h3>
            <div className="space-y-3 mt-4">
              {community.floorplans.map((floorplan, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card">
                  <p className="text-foreground font-medium">{floorplan}</p>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Design & Features</h3>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Homes at {community.name} are thoughtfully designed for active adult living, featuring single-story layouts, open floor plans, and low-maintenance exteriors. Many homes include features such as updated kitchens, spacious master suites, outdoor living spaces, and energy-efficient systems that reduce utility costs while maintaining comfort year-round.
            </p>
            <p>
              The architectural diversity within {community.name} allows residents to choose homes that match their personal style preferences, from traditional designs to more contemporary aesthetics. Many homes have been updated and renovated by previous owners, while new construction options are available in select neighborhoods, providing opportunities for those seeking the latest in home design and energy efficiency.
            </p>
          </div>
        </section>

        {/* Why Choose This Community */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Choose {community.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <Trophy className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Premier Amenities</h3>
              <p className="text-muted-foreground">
                {community.name} offers amenities that rival luxury resorts, providing residents with everything they need for an active, fulfilling lifestyle without ever leaving the community.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Active Social Scene</h3>
              <p className="text-muted-foreground">
                The community's vibrant social calendar and active club scene ensure that residents can pursue their interests, develop new hobbies, and build lasting friendships with like-minded neighbors.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Heart className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Low-Maintenance Living</h3>
              <p className="text-muted-foreground">
                {community.name} handles landscaping, exterior maintenance, and common area upkeep, allowing residents to focus on enjoying their retirement rather than maintaining a property.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Security & Peace of Mind</h3>
              <p className="text-muted-foreground">
                {community.category === 'mega' || community.name.includes('Gated') ? 'The gated community provides 24/7 security, controlled access, and a sense of safety that allows residents to travel worry-free.' : 'The community provides a secure environment and a strong sense of community, allowing residents to travel worry-free knowing their home and neighbors are part of a supportive community.'}
              </p>
            </div>
          </div>
        </section>

        {/* Buying in This Community */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Buying a Home in {community.name}</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Purchasing a home in {community.name} is more than a real estate transaction—it's an investment in your active retirement lifestyle. With {community.homesForSale} homes currently available, now is an excellent time to explore your options in this premier Las Vegas 55+ community.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Current Market Conditions</h3>
            <p>
              The Las Vegas real estate market continues to offer excellent value for active adults seeking 55+ community living. {community.name} presents an opportunity to purchase a home in a well-established, amenity-rich community at competitive prices. With {community.priceRange ? `homes ranging from ${community.priceRange}` : 'diverse pricing options'}, buyers can find options that fit their budget while enjoying access to world-class amenities.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Working with Our Team</h3>
            <p>
              Our specialized Las Vegas 55+ real estate team has extensive knowledge of {community.name} and the surrounding area. We understand the unique considerations when buying in a 55+ community, from understanding homeowner association fees and restrictions to helping you find the perfect home that matches your lifestyle and budget. We're here to guide you through every step of the process, from initial search through closing and beyond.
            </p>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Additional community-specific content can be added here */}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold mb-4">Homes For Sale</h3>
            <p className="text-muted-foreground mb-4">
              View {community.homesForSale} homes currently available in {community.name}.
            </p>
            <Button asChild className="w-full">
              <Link href={`/homes-for-sale?community=${slug}`}>View Listings</Link>
            </Button>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold mb-4">Schedule a Tour</h3>
            <p className="text-muted-foreground mb-4">
              Interested in learning more about {community.name}? Contact us to schedule a personalized tour of the community and available homes.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold mb-4">Get More Information</h3>
            <p className="text-muted-foreground mb-4">
              Our team specializes in {community.name} and Las Vegas 55+ real estate. We can provide detailed information about the community, available homes, and market conditions.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </div>
      <FaqSection title={`${community.name} questions`} faqs={faqs} />
    </div>
    </div>
  )
}
