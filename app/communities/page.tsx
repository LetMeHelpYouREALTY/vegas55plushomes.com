import Link from 'next/link'
import { Home, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Las Vegas 55+ Communities | Vegas 55 Plus Homes',
  description: 'Explore premier Las Vegas 55+ communities including Sun City Summerlin, Sun City Anthem, Siena, Desert Shores, and more. Find your perfect active adult community.',
}

const communities = [
  {
    name: 'Sun City Summerlin',
    location: 'Las Vegas, NV',
    description: 'Premier 55+ gated community with multiple golf courses, fitness centers, and resort-style amenities. Perfect for active adults seeking luxury retirement living.',
    href: '/communities/sun-city-summerlin',
    featured: true,
  },
  {
    name: 'Sun City Anthem',
    location: 'Henderson, NV',
    description: 'Active adult community featuring championship golf courses, state-of-the-art fitness centers, and numerous clubs and activities.',
    href: '/communities/sun-city-anthem',
    featured: true,
  },
  {
    name: 'Siena',
    location: 'Las Vegas, NV',
    description: 'Luxury 55+ community with Tuscan-inspired architecture, world-class amenities, diversified floor plans, and championship golf.',
    href: '/communities/siena',
    featured: true,
  },
  {
    name: 'Desert Shores',
    location: 'Las Vegas, NV',
    description: 'Waterfront community offering lake views, golf courses, and resort-style living in a premier 55+ setting.',
    href: '/communities/desert-shores',
    featured: false,
  },
  {
    name: 'Solera at Anthem',
    location: 'Henderson, NV',
    description: 'Newer construction 55+ community with modern amenities and beautifully designed homes.',
    href: '/communities/solera-anthem',
    featured: false,
  },
  {
    name: 'Regency at Summerlin',
    location: 'Las Vegas, NV',
    description: 'Active adult community in the master-planned community of Summerlin with world-class amenities.',
    href: '/communities/regency-summerlin',
    featured: false,
  },
]

export default function CommunitiesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Las Vegas 55+ Communities</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Discover premier active adult communities throughout Las Vegas and Henderson. Each community offers unique amenities, floor plans, and lifestyles designed for active adults 55 and better.
        </p>
      </div>

      {/* Featured Communities */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Featured Communities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.filter(c => c.featured).map((community) => (
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
                  <span>{community.location}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {community.name}
                </h3>
                <p className="text-muted-foreground">{community.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Communities */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">All Las Vegas 55+ Communities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <span>{community.location}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {community.name}
                </h3>
                <p className="text-muted-foreground">{community.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

