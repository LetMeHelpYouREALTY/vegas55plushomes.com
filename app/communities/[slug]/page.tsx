import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPin, CheckCircle } from 'lucide-react'
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
import FeaturedListingsSection from '@/components/featured-listings-section'
import { featuredListingsForCommunity } from '@/lib/featured-listings'

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
  const communityListings = featuredListingsForCommunity(community.slug)
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
    dateModified: '2026-10-09',
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
        primaryCTA={{ text: 'View Homes For Sale', href: '/homes-for-sale' }}
        secondaryCTA={{ text: 'Schedule a Tour', href: '/contact' }}
      />

      {communityListings.length > 0 && (
        <FeaturedListingsSection
          title={`Featured home in ${community.name}`}
          intro={`${communityListings[0]?.streetAddress ?? community.name} is a current listing in this 55+ community. Call (702) 996-3758 to tour it with a buyer's representative.`}
          listings={communityListings}
        />
      )}

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

      <div className="space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">About {community.name}</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>{community.longDescription}</p>
            <p>
              {community.name} is in {community.location}.
              {community.yearBuilt ? ` The published start year is ${community.yearBuilt}.` : ''}
              {community.homeCount
                ? ` About ${community.homeCount.toLocaleString()} homes${community.size ? ` sit on ${community.size}` : ''}.`
                : ''}
              {community.priceRange
                ? ` The price range published on this page is ${community.priceRange}. Confirm the live price before you write an offer.`
                : ''}
              {' '}This page lists {community.homesForSale} homes for sale. That count is a snapshot, not a live MLS feed.
            </p>
            <p>
              Floor plans listed for {community.name}: {community.floorplans.join('; ')}.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Where {community.name} sits</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              The address area is {community.location}. Compare it with other {community.city} 55+ neighborhoods on the{' '}
              <Link
                href={
                  community.location.toLowerCase().includes('summerlin')
                    ? '/summerlin-55-homes'
                    : community.city === 'Henderson'
                      ? '/henderson-55-homes'
                      : '/communities'
                }
                className="text-primary hover:underline"
              >
                {community.location.toLowerCase().includes('summerlin')
                  ? 'Summerlin 55+ homes'
                  : community.city === 'Henderson'
                    ? 'Henderson 55+ homes'
                    : 'Las Vegas 55+ communities'}
              </Link>{' '}
              page, or start with the{' '}
              <Link href="/las-vegas-55-guide" className="text-primary hover:underline">
                Las Vegas 55+ guide
              </Link>
              .
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Amenities at {community.name}</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            {community.name} lists {community.amenities.length} amenities: {community.amenities.join(', ')}.
            Ask the association which of these are included in the dues before you rely on them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {community.amenities.map((amenity, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{amenity}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Floor plans at {community.name}</h2>
          <div className="mt-4 space-y-3">
            {community.floorplans.map((floorplan) => (
              <div key={floorplan} className="rounded-lg border bg-card p-4">
                <p className="font-medium">{floorplan}</p>
              </div>
            ))}
          </div>
        </section>

        {community.slug === 'sun-city-summerlin' && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Sun City Summerlin guides</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                ['/communities/sun-city-summerlin/homes-for-sale', 'Sun City Summerlin homes for sale'],
                ['/communities/sun-city-summerlin/floorplans', 'Sun City Summerlin floor plans'],
                ['/communities/sun-city-summerlin/why-sun-city-summerlin', 'Why buyers choose Sun City Summerlin'],
                ['/communities/sun-city-summerlin/amenities', 'Sun City Summerlin amenities'],
                ['/communities/sun-city-summerlin/market-updates', 'Sun City Summerlin market notes'],
                ['/communities/sun-city-summerlin/schedule-tour', 'Schedule a Sun City Summerlin tour'],
                ['/communities/sun-city-summerlin/faq', 'Sun City Summerlin questions'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-primary hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="text-3xl font-bold mb-6">Buying in {community.name}</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Dr. Jan Duffy represents buyers. Call (702) 996-3758 to tour {community.name}.
              {community.priceRange ? ` Use ${community.priceRange} as the published range, then verify the house you want.` : ''}
              {' '}Association dues, age rules, and resale counts change. Get them in writing before you offer.
            </p>
            <p>
              <Link href="/homes-for-sale" className="text-primary hover:underline">
                Search 55+ homes for sale
              </Link>
              {' '}or{' '}
              <Link href="/contact" className="text-primary hover:underline">
                request a tour
              </Link>
              .
            </p>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="mb-4 text-xl font-semibold">Homes for sale</h3>
          <p className="mb-4 text-muted-foreground">
            {community.homesForSale} homes are listed as available in {community.name}. Confirm the count on a live search.
          </p>
          <Button asChild className="w-full">
            <Link href="/homes-for-sale">View listings</Link>
          </Button>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="mb-4 text-xl font-semibold">Tour {community.name}</h3>
          <p className="mb-4 text-muted-foreground">
            Call (702) 996-3758 to walk {community.name} with a buyer&apos;s representative.
          </p>
          <Button asChild variant="outline" className="w-full">
            <Link href="/contact">Request a tour</Link>
          </Button>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="mb-4 text-xl font-semibold">Published range</h3>
          <p className="mb-4 text-muted-foreground">
            {community.priceRange ?? 'Ask for the current range.'} Office: 28 Lake Oasis St, Henderson, NV 89011.
          </p>
          <Button asChild variant="outline" className="w-full">
            <a href="tel:7029963758">Call (702) 996-3758</a>
          </Button>
        </div>
      </div>
      <FaqSection title={`${community.name} questions`} faqs={faqs} />
    </div>
    </div>
  )
}
