import Link from 'next/link'
import { Home, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Summerlin 55+ Homes For Sale | Las Vegas Real Estate',
  description: 'Find 55+ homes for sale in Summerlin, Las Vegas. Explore premier active adult communities including Sun City Summerlin and more.',
}

export default function Summerlin55HomesPage() {
  const communities = [
    {
      name: 'Sun City Summerlin',
      description: 'Premier 55+ gated community with multiple golf courses and resort-style amenities',
      href: '/communities/sun-city-summerlin',
    },
    {
      name: 'Regency at Summerlin',
      description: 'Active adult community in the master-planned community of Summerlin',
      href: '/communities/regency-summerlin',
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a> / Summerlin 55+ Homes
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Summerlin 55+ Homes For Sale</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Discover premier 55+ active adult communities in Summerlin, one of Las Vegas's most desirable master-planned communities. Summerlin offers residents beautiful desert scenery, excellent amenities, and a vibrant lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {communities.map((community) => (
          <Link
            key={community.href}
            href={community.href}
            className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video bg-muted flex items-center justify-center">
              <Home className="h-16 w-16 text-muted-foreground" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin className="h-4 w-4" />
                <span>Summerlin, Las Vegas</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {community.name}
              </h3>
              <p className="text-muted-foreground">{community.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-lg border bg-card p-8">
        <h2 className="text-2xl font-semibold mb-4">About Summerlin</h2>
        <p className="text-muted-foreground mb-4">
          Summerlin is one of the country's largest master-planned communities, spanning 22,500 acres at the base of the Red Rock Canyon National Conservation Area. Known for its beautiful parks, world-class amenities, and strong sense of community, Summerlin is an ideal location for active adults seeking an upscale lifestyle.
        </p>
        <p className="text-muted-foreground">
          Summerlin's 55+ communities offer the perfect combination of active adult living within a larger, vibrant community setting, providing residents with both specialized amenities and access to all that Summerlin has to offer.
        </p>
      </div>
    </div>
  )
}

