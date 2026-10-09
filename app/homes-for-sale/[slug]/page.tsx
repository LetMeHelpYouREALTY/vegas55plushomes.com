import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import FaqSection from '@/components/faq-section'
import JsonLd from '@/components/json-ld'
import PageHero from '@/components/page-hero'
import {
  MLS_LISTING_DISCLAIMER,
  featuredListings,
  formatSqft,
  formatUsd,
  getFeaturedListing,
  listingAddressLine,
  listingMapEmbedUrl,
  listingMapUrl,
  listingPath,
} from '@/lib/featured-listings'
import { formatListingDate } from '@/lib/utils/date-helpers'
import { buildMetadata } from '@/lib/page-metadata'
import { siteImages } from '@/lib/site-images'
import {
  FULL_ADDRESS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
} from '@/lib/site-config'
import {
  generateFeaturedHomeListingSchema,
  generateOpenHouseEventSchema,
  generatePageGraph,
} from '@/lib/structured-data'

const HERO_IMAGE = siteImages.summerlin

export function generateStaticParams() {
  return featuredListings.map((listing) => ({ slug: listing.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const listing = getFeaturedListing(slug)
  if (!listing) {
    return { title: 'Home not found | Vegas 55 Plus Homes' }
  }

  return buildMetadata({
    title: `${listing.streetAddress} | ${formatUsd(listing.price)} | Summerlin 55+`,
    description: `${listing.summary} Open houses October 10–11, 2026. Call Dr. Jan Duffy at ${PHONE_DISPLAY}.`,
    path: listingPath(listing),
    image: HERO_IMAGE,
    keywords: [
      listing.streetAddress,
      'Heritage at Stonebridge homes for sale',
      'Summerlin 55+ homes',
      `MLS ${listing.mlsNumber}`,
    ],
  })
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-semibold">{value}</dd>
    </div>
  )
}

export default async function FeaturedListingPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const listing = getFeaturedListing(slug)
  if (!listing) notFound()

  const path = listingPath(listing)
  const address = listingAddressLine(listing)
  const faqs = [
    {
      question: `What is the list price for ${listing.streetAddress}?`,
      answer: `${address} is active at ${formatUsd(listing.price)}. MLS# ${listing.mlsNumber}. The status change date on the listing is ${formatListingDate(listing.statusChangeDate)}. Confirm the price before you write an offer.`,
    },
    {
      question: 'When are the open houses?',
      answer: `${listing.openHouses.map((openHouse) => openHouse.label).join(' ')} These times are from the MLS listing. Call Dr. Jan Duffy at ${PHONE_DISPLAY} if you want a buyer's representative at the tour.`,
    },
    {
      question: 'Is Heritage at Stonebridge age-restricted?',
      answer:
        'Heritage at Stonebridge is a guard-gated community in Summerlin West for residents 55 and better. Amenities on the listing include a clubhouse, fitness center, heated lap pool, spa, pickleball, and bocce.',
    },
    {
      question: 'What association fees does the MLS show?',
      answer: `The listing names ${listing.associationName}, an association fee of ${formatUsd(listing.associationFee)} ${listing.associationFeeFrequency.toLowerCase()}, and an association fee total of ${formatUsd(listing.associationFeeTotal)} ${listing.associationFeeFrequency.toLowerCase()}. The same record marks Association Yes/No as ${listing.associationYesNo}. Verify both figures with the association before you offer.`,
    },
    {
      question: 'What annual tax amount is on the listing?',
      answer: `The MLS tax annual amount is ${formatUsd(listing.taxAnnualAmount)}. Confirm the figure with Clark County. It is not a tax opinion.`,
    },
  ]

  const pageGraph = generatePageGraph({
    pageType: 'ItemPage',
    name: `${listing.streetAddress} | ${formatUsd(listing.price)}`,
    description: listing.summary,
    path,
    image: HERO_IMAGE,
    datePublished: listing.listingDate,
    dateModified: listing.statusChangeDate,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Homes For Sale', url: '/homes-for-sale' },
      { name: listing.streetAddress, url: path },
    ],
    faqs,
    extra: [
      generateFeaturedHomeListingSchema({
        name: address,
        description: listing.summary,
        url: path,
        datePosted: listing.listingDate,
        image: HERO_IMAGE,
        price: listing.price,
        streetAddress: listing.streetAddress,
        addressLocality: listing.city,
        addressRegion: listing.state,
        postalCode: listing.postalCode,
        beds: listing.beds,
        baths: listing.baths,
        roomsTotal: listing.roomsTotal,
        livingSqft: listing.livingSqft,
        yearBuilt: listing.yearBuilt,
        mlsNumber: listing.mlsNumber,
      }),
      ...listing.openHouses.map((openHouse) =>
        generateOpenHouseEventSchema({
          name: `Open house at ${listing.streetAddress}`,
          startDate: `${openHouse.date}T${openHouse.start}:00-07:00`,
          endDate: `${openHouse.date}T${openHouse.end}:00-07:00`,
          streetAddress: listing.streetAddress,
          addressLocality: listing.city,
          addressRegion: listing.state,
          postalCode: listing.postalCode,
          url: path,
        }),
      ),
    ],
  })

  return (
    <div>
      <JsonLd id={`${listing.slug}-listing-graph`} data={pageGraph} />
      <PageHero
        image={HERO_IMAGE}
        title={`${listing.streetAddress} | Las Vegas 55+ Home`}
        subtitle={`${listing.summary} Call ${PHONE_DISPLAY}.`}
        breadcrumbs={[
          { label: 'Homes For Sale', href: '/homes-for-sale' },
          { label: listing.streetAddress },
        ]}
        primaryCTA={{ text: `Call ${PHONE_DISPLAY}`, href: `tel:${PHONE_TEL}` }}
        secondaryCTA={{ text: 'Photos and virtual tour', href: listing.realscoutUrl }}
        showOfficeListings={false}
      />

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-8 text-sm text-muted-foreground">
          The hero photo is a Summerlin 55+ street, not a photo of this house. Property photos and the virtual tour are on the{' '}
          <a
            href={listing.realscoutUrl}
            className="text-primary underline-offset-2 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            RealScout listing
          </a>
          .
        </p>

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {listing.status} · New on site · MLS# {listing.mlsNumber}
            </p>
            <p className="mt-2 text-4xl font-bold">{formatUsd(listing.price)}</p>
            <p className="mt-1 text-muted-foreground">
              {formatUsd(listing.pricePerSqft)} per sq ft as shown on the listing
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
            </Button>
            <Button asChild variant="outline">
              <a href={listingMapUrl(listing)} target="_blank" rel="noopener noreferrer">
                Directions
              </a>
            </Button>
          </div>
        </div>

        <dl className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Fact label="Beds" value={String(listing.beds)} />
          <Fact label="Baths" value={String(listing.baths)} />
          <Fact label="Living area" value={`${formatSqft(listing.livingSqft)} sq ft`} />
          <Fact label="Lot" value={`${formatSqft(listing.lotSqft)} sq ft`} />
          <Fact label="Listing date" value={formatListingDate(listing.listingDate)} />
          <Fact label="MLS list date" value={formatListingDate(listing.mlsListDate)} />
          <Fact label="Year built" value={String(listing.yearBuilt)} />
          <Fact label="Plan" value={listing.planName} />
        </dl>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <section>
              <h2 className="text-3xl font-bold">The home</h2>
              <div className="mt-4 space-y-4 text-lg text-muted-foreground">
                <p>
                  This {listing.yearBuilt} resale is the {listing.planName} plan. It is one story, {formatSqft(listing.livingSqft)} square feet, with {listing.beds} bedrooms and {listing.baths} baths.
                </p>
                <p>
                  The living room is 21 by 12 feet at the front of the plan. The kitchen has a breakfast bar, an island, and quartz counters. The primary bedroom is 11 by 12 feet with a walk-in closet. Bedroom two is 14 by 10 feet.
                </p>
                <p>
                  After the 2025 purchase, the owner added a front-entry sitting area, a paver patio, decorative gates, wall-to-wall garage cabinets, and closet shelving. The listing says the built-ins convey.
                </p>
                <p>
                  Flooring is carpet and ceramic tile. Appliances listed are a gas range, dishwasher, disposal, microwave, refrigerator, washer, and dryer. Laundry has electric and gas dryer hookups. Heating is central gas. Cooling is central electric. The home is partially furnished.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-muted-foreground">
                {listing.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-lg border bg-card px-4 py-3">
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold">Rooms</h2>
              <div className="mt-4 overflow-x-auto rounded-lg border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Room</th>
                      <th className="px-4 py-3 font-semibold">Size</th>
                      <th className="px-4 py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listing.rooms.map((room) => (
                      <tr key={room.name} className="border-t">
                        <td className="px-4 py-3 font-medium">{room.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{room.dimensions ?? '—'}</td>
                        <td className="px-4 py-3 text-muted-foreground">{room.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold">{listing.communityName}</h2>
              <div className="mt-4 space-y-4 text-lg text-muted-foreground">
                <p>
                  {listing.communityName} is a guard-gated community for residents 55 and better in Summerlin West. The subdivision on the listing is {listing.subdivision}, {listing.county} County.
                </p>
                <p>
                  Association amenities listed are a clubhouse, fitness center, gate, guard, pickleball, pool, and spa. There is no private pool. The lot is desert landscaping with drip irrigation, rocks, a covered porch, and a block-fenced backyard. Parking is a {listing.garageSpaces}-car attached garage.
                </p>
                <p>
                  <Link href={`/communities/${listing.communitySlug}`} className="text-primary hover:underline">
                    Read the {listing.communityName} community page
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold">Open houses</h2>
              <ul className="mt-4 space-y-3">
                {listing.openHouses.map((openHouse) => (
                  <li key={openHouse.date} className="rounded-lg border bg-card p-4 font-medium">
                    {openHouse.label}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-muted-foreground">
                Open house times come from the MLS listing. Dr. Jan Duffy can attend with you as your buyer&apos;s representative. Call{' '}
                <a href={`tel:${PHONE_TEL}`} className="text-primary hover:underline">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold">Map and directions</h2>
              <div className="mt-4 overflow-hidden rounded-lg border">
                <iframe
                  title={`Map of ${address}`}
                  src={listingMapEmbedUrl(listing)}
                  className="h-80 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Location provided by {listing.mlsSource}.
              </p>
              <p className="mt-4 text-muted-foreground">{listing.directions}</p>
              <p className="mt-4">
                <a
                  href={listingMapUrl(listing)}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open directions in Google Maps
                </a>
              </p>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold">Costs on the listing</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground">Association name</dt>
                  <dd className="font-medium">{listing.associationName}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Association fee</dt>
                  <dd className="font-medium">
                    {formatUsd(listing.associationFee)} {listing.associationFeeFrequency.toLowerCase()}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Association fee total</dt>
                  <dd className="font-medium">
                    {formatUsd(listing.associationFeeTotal)} {listing.associationFeeFrequency.toLowerCase()}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Association yes/no</dt>
                  <dd className="font-medium">{listing.associationYesNo}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Tax annual amount</dt>
                  <dd className="font-medium">{formatUsd(listing.taxAnnualAmount)}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Parcel</dt>
                  <dd className="font-medium">{listing.parcelNumber}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm text-muted-foreground">
                The fee fields and the association yes/no flag do not match. Verify dues and the tax figure before you offer.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold">Schools named in MLS</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {listing.schools.map((school) => (
                  <li key={school.level}>
                    <span className="font-medium text-foreground">{school.level}: </span>
                    {school.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold">Buyer representation</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {SITE_NAME}. Office: {FULL_ADDRESS}. Dr. Jan Duffy represents buyers of 55+ homes. Call{' '}
                <a href={`tel:${PHONE_TEL}`} className="font-semibold text-primary hover:underline">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
              <Button asChild className="mt-4 w-full">
                <Link href="/contact">Request a tour</Link>
              </Button>
            </div>
          </aside>
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">Property details</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <Fact label="Property type" value={`${listing.propertyType} · ${listing.propertySubType}`} />
            <Fact label="Style" value={listing.architecturalStyle} />
            <Fact label="Stories" value={String(listing.stories)} />
            <Fact label="Condition" value={listing.furnished === 'Partially' ? `${listing.condition}, partially furnished` : listing.condition} />
            <Fact label="Appliances" value={listing.appliances.join(', ')} />
            <Fact label="Interior" value={listing.interiorFeatures.join(', ')} />
            <Fact label="Flooring" value={listing.flooring.join(', ')} />
            <Fact label="Laundry" value={listing.laundry.join(', ')} />
            <Fact label="Windows" value={listing.windowFeatures.join(', ')} />
            <Fact label="Exterior" value={listing.exteriorFeatures.join(', ')} />
            <Fact label="Patio" value={listing.patio.join(', ')} />
            <Fact label="Fencing" value={listing.fencing.join(', ')} />
            <Fact label="Lot" value={listing.lotFeatures.join(', ')} />
            <Fact label="Parking" value={`${listing.parking.join(', ')} · ${listing.garageSpaces} garage spaces`} />
            <Fact label="Heating" value={listing.heating.join(', ')} />
            <Fact label="Cooling" value={listing.cooling.join(', ')} />
            <Fact label="Sewer" value={listing.sewer} />
            <Fact label="Water" value={listing.water} />
          </dl>
        </section>

        <p className="mt-12 text-xs leading-relaxed text-muted-foreground">{MLS_LISTING_DISCLAIMER}</p>
      </div>

      <FaqSection title={`${listing.streetAddress} questions`} faqs={faqs} />
    </div>
  )
}
