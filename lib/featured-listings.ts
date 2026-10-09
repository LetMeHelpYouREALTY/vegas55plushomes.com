/**
 * Hand-featured MLS homes. Facts come from the listing record.
 * Remarks are rewritten here — do not paste MLS public remarks.
 */

export type ListingStatus = 'Active'

export type OpenHouse = {
  /** ISO date, local calendar day in Las Vegas. */
  date: string
  /** 24-hour start, America/Los_Angeles. */
  start: string
  /** 24-hour end, America/Los_Angeles. */
  end: string
  label: string
}

export type FeaturedListing = {
  slug: string
  status: ListingStatus
  headline: string
  summary: string
  streetAddress: string
  city: string
  state: string
  postalCode: string
  price: number
  beds: number
  baths: number
  livingSqft: number
  /** Dollars per square foot as printed on the listing, not a fresh calculation. */
  pricePerSqft: number
  lotSqft: number
  /** Buyer-facing listing date (YYYY-MM-DD). */
  listingDate: string
  /** MLS list-date field when it differs from the buyer-facing date. */
  mlsListDate: string
  statusChangeDate: string
  mlsNumber: string
  mlsSource: string
  propertyType: string
  propertySubType: string
  architecturalStyle: string
  subdivision: string
  county: string
  yearBuilt: number
  stories: number
  planName: string
  communitySlug: string
  communityName: string
  realscoutUrl: string
  associationName: string
  associationFee: number
  associationFeeTotal: number
  associationFeeFrequency: 'Monthly'
  /** MLS Association Yes/No, kept even when it conflicts with a named association. */
  associationYesNo: 'Yes' | 'No'
  taxAnnualAmount: number
  parcelNumber: string
  furnished: string
  condition: string
  roomsTotal: number
  openHouses: OpenHouse[]
  rooms: Array<{ name: string; dimensions?: string; description: string }>
  appliances: string[]
  interiorFeatures: string[]
  flooring: string[]
  laundry: string[]
  windowFeatures: string[]
  exteriorFeatures: string[]
  fencing: string[]
  patio: string[]
  lotFeatures: string[]
  parking: string[]
  garageSpaces: number
  heating: string[]
  cooling: string[]
  sewer: string
  water: string
  schools: Array<{ level: string; name: string }>
  directions: string
  highlights: string[]
}

export const MLS_LISTING_DISCLAIMER =
  'Source: Greater Las Vegas Association of Realtors (GLVAR). Listing data is believed accurate but is not guaranteed and should be independently verified. Dr. Jan Duffy represents buyers. Equal Housing Opportunity.'

export const featuredListings: FeaturedListing[] = [
  {
    slug: '894-heritage-bend-drive',
    status: 'Active',
    headline: '894 Heritage Bend Drive, a 2025 Lennar Claremont in Heritage at Stonebridge',
    summary:
      'Active one-story home at 894 Heritage Bend Drive, Las Vegas, NV 89138. Two bedrooms, two baths, 1,234 square feet, listed at $539,888. MLS# 2825123.',
    streetAddress: '894 Heritage Bend Drive',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89138',
    price: 539888,
    beds: 2,
    baths: 2,
    livingSqft: 1234,
    pricePerSqft: 437,
    lotSqft: 5227,
    listingDate: '2026-10-05',
    mlsListDate: '2026-10-06',
    statusChangeDate: '2026-10-08',
    mlsNumber: '2825123',
    mlsSource: 'Greater Las Vegas Association of Realtors (GLVAR)',
    propertyType: 'Residential',
    propertySubType: 'Single Family Residence',
    architecturalStyle: 'One Story',
    subdivision: 'Summerlin Village 24 Parcel Fgh',
    county: 'Clark',
    yearBuilt: 2025,
    stories: 1,
    planName: 'Lennar Claremont',
    communitySlug: 'heritage-stonebridge',
    communityName: 'Heritage at Stonebridge',
    realscoutUrl:
      'https://drjanduffy.realscout.com/homesearch/listings/p-894-heritage-bend-drive-las-vegas-89138-glvartrestle-177',
    associationName: 'Heritage Heights',
    associationFee: 350,
    associationFeeTotal: 419,
    associationFeeFrequency: 'Monthly',
    associationYesNo: 'No',
    taxAnnualAmount: 1557,
    parcelNumber: '137-33-819-051',
    furnished: 'Partially',
    condition: 'Resale',
    roomsTotal: 4,
    openHouses: [
      {
        date: '2026-10-10',
        start: '12:00',
        end: '14:00',
        label: 'Saturday, October 10, 2026, 12:00 PM – 2:00 PM',
      },
      {
        date: '2026-10-11',
        start: '10:00',
        end: '12:00',
        label: 'Sunday, October 11, 2026, 10:00 AM – 12:00 PM',
      },
    ],
    rooms: [
      {
        name: 'Primary bedroom',
        dimensions: '11×12',
        description: 'Walk-in closet',
      },
      {
        name: 'Living room',
        dimensions: '21×12',
        description: 'Front of the plan',
      },
      {
        name: 'Kitchen',
        description: 'Breakfast bar, island, and quartz countertops',
      },
      {
        name: 'Bedroom 2',
        dimensions: '14×10',
        description: 'Closet',
      },
    ],
    appliances: [
      'Dryer',
      'Dishwasher',
      'Disposal',
      'Gas range',
      'Microwave',
      'Refrigerator',
      'Washer',
    ],
    interiorFeatures: ['Primary downstairs', 'Window treatments'],
    flooring: ['Carpet', 'Ceramic tile'],
    laundry: ['Electric dryer hookup', 'Gas dryer hookup', 'Laundry room'],
    windowFeatures: ['Blinds'],
    exteriorFeatures: ['Porch', 'Patio', 'Irrigation sprinklers'],
    fencing: ['Block', 'Back yard'],
    patio: ['Covered', 'Patio', 'Porch'],
    lotFeatures: [
      'Drip irrigation / bubblers',
      'Desert landscaping',
      'Landscaped',
      'Rocks',
      'Less than a quarter acre',
    ],
    parking: ['Attached', 'Garage', 'Garage door opener', 'Private'],
    garageSpaces: 2,
    heating: ['Central', 'Gas'],
    cooling: ['Central air', 'Electric'],
    sewer: 'Public sewer',
    water: 'Public',
    schools: [
      { level: 'Elementary', name: 'Billy & Rosemary Vassiliadis (as entered in MLS)' },
      { level: 'Middle', name: 'Rogich (MLS: Rogich Sig)' },
      { level: 'High school', name: 'Palo Verde' },
    ],
    directions:
      'Take the 215 west and exit onto Hughes Park Drive east. Turn left onto West Charleston Boulevard. Turn right onto North Sky Vista Drive. Turn left onto Crossbridge Drive. Turn left onto Heritage Heights Drive and slight right toward Heritage Heights Drive. Turn right onto Heritage Heights Drive. At the traffic circle, turn right onto Heritage Bend Drive. The home is on the right.',
    highlights: [
      'Front-entry sitting area, paver patio, and decorative gates added after the 2025 purchase',
      'Garage cabinets and custom closet shelving are in place',
      'Open great room and an island kitchen',
      'Walk-in primary closet',
      'Guard-gated Heritage at Stonebridge in Summerlin West, for residents 55 and better',
      'Clubhouse, fitness center, heated lap pool, spa, pickleball, and bocce',
      'Built-ins convey with the sale',
    ],
  },
]

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatSqft(sqft: number): string {
  return new Intl.NumberFormat('en-US').format(sqft)
}

export function listingPath(listing: Pick<FeaturedListing, 'slug'>): string {
  return `/homes-for-sale/${listing.slug}`
}

export function getFeaturedListing(slug: string): FeaturedListing | undefined {
  return featuredListings.find((listing) => listing.slug === slug)
}

export function featuredListingsForCommunity(communitySlug: string): FeaturedListing[] {
  return featuredListings.filter((listing) => listing.communitySlug === communitySlug)
}

export function listingAddressLine(listing: FeaturedListing): string {
  return `${listing.streetAddress}, ${listing.city}, ${listing.state} ${listing.postalCode}`
}

export function listingMapUrl(listing: FeaturedListing): string {
  const query = encodeURIComponent(listingAddressLine(listing))
  return `https://www.google.com/maps/search/?api=1&query=${query}`
}

export function listingMapEmbedUrl(listing: FeaturedListing): string {
  const query = encodeURIComponent(listingAddressLine(listing))
  return `https://maps.google.com/maps?q=${query}&z=16&output=embed`
}
