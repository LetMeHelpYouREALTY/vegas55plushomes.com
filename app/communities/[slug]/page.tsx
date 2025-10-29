import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, MapPin, Calendar, Users } from 'lucide-react'

const communityData: Record<string, {
  name: string
  location: string
  description: string
  longDescription: string
  amenities: string[]
  floorplans: string[]
  homesForSale: number
}> = {
  'sun-city-summerlin': {
    name: 'Sun City Summerlin',
    location: 'Las Vegas, NV',
    description: 'Premier 55+ gated community with multiple golf courses and resort-style amenities',
    longDescription: 'Sun City Summerlin is one of Las Vegas\'s premier active adult communities, offering residents an unparalleled lifestyle with world-class amenities, championship golf courses, and a vibrant social scene. This gated community features beautifully maintained homes, multiple recreation centers, and endless opportunities for active living.',
    amenities: [
      'Multiple championship golf courses',
      'State-of-the-art fitness centers',
      'Swimming pools and spas',
      'Tennis and pickleball courts',
      'Arts and crafts studios',
      'Libraries and computer labs',
      'Restaurants and cafes',
      'Numerous clubs and activities',
    ],
    floorplans: ['Single-story detached homes', 'Attached villas', 'Homes ranging from 1,200 to 3,500 sq ft'],
    homesForSale: 24,
  },
  'sun-city-anthem': {
    name: 'Sun City Anthem',
    location: 'Henderson, NV',
    description: 'Active adult community featuring championship golf and fitness centers',
    longDescription: 'Sun City Anthem in Henderson offers active adults a resort-style lifestyle with three championship golf courses, multiple recreation centers, and a strong sense of community. This well-established community features a variety of home styles designed for low-maintenance living.',
    amenities: [
      'Three championship golf courses',
      'Multiple recreation centers',
      'Fitness centers with state-of-the-art equipment',
      'Indoor and outdoor pools',
      'Tennis and pickleball courts',
      'Woodworking and arts studios',
      'Restaurants and gathering spaces',
      'Over 100 clubs and organizations',
    ],
    floorplans: ['Single-story homes', 'Attached and detached options', 'Homes from 1,100 to 3,000+ sq ft'],
    homesForSale: 18,
  },
  'siena': {
    name: 'Siena',
    location: 'Las Vegas, NV',
    description: 'Luxury 55+ community with Tuscan-inspired architecture',
    longDescription: 'Siena is a master-planned 55+ community featuring Tuscan-inspired architecture and world-class amenities. This luxury community offers residents a resort-style lifestyle with championship golf, multiple pools, fitness centers, and beautifully designed homes.',
    amenities: [
      'Championship golf course',
      'Luxury clubhouse with multiple facilities',
      'Multiple swimming pools and spas',
      'Fitness and wellness centers',
      'Tennis and bocce ball courts',
      'Restaurant and bistro',
      'Arts and crafts studios',
      'Walking and biking trails',
    ],
    floorplans: ['Luxury single-story homes', 'Homes ranging from 1,400 to 4,000+ sq ft', 'Multiple architectural styles'],
    homesForSale: 12,
  },
  'desert-shores': {
    name: 'Desert Shores',
    location: 'Las Vegas, NV',
    description: 'Waterfront community with lake views and golf courses',
    longDescription: 'Desert Shores offers a unique waterfront lifestyle in Las Vegas with stunning lake views, private beaches, and resort-style amenities. This established community features a mix of architectural styles and provides residents with an active, social lifestyle.',
    amenities: [
      'Lakefront properties with beach access',
      'Private beaches and water activities',
      'Golf courses',
      'Swimming pools and spas',
      'Tennis courts',
      'Community centers',
      'Walking trails',
      'Waterfront dining options',
    ],
    floorplans: ['Single-story and two-story options', 'Lakefront and non-lakefront homes', 'Homes from 1,200 to 4,000+ sq ft'],
    homesForSale: 8,
  },
}

export async function generateStaticParams() {
  return Object.keys(communityData).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const community = communityData[slug]

  if (!community) {
    return {
      title: 'Community Not Found',
    }
  }

  return {
    title: `${community.name} | Las Vegas 55+ Real Estate | Vegas 55 Plus Homes`,
    description: community.longDescription,
  }
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const community = communityData[slug]

  if (!community) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
          <Home className="h-24 w-24 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="h-5 w-5" />
          <span className="text-lg">{community.location}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{community.name}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          {community.longDescription}
        </p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Amenities */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Community Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {community.amenities.map((amenity, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <div className="mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Floor Plans */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Available Floor Plans</h2>
            <div className="space-y-3">
              {community.floorplans.map((floorplan, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card">
                  {floorplan}
                </div>
              ))}
            </div>
          </section>
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
              Interested in learning more about {community.name}? Contact us to schedule a personalized tour.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

