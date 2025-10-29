import Link from 'next/link'
import { Home, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Henderson 55+ Homes For Sale | Las Vegas Real Estate',
  description: 'Find 55+ homes for sale in Henderson, Nevada. Explore premier active adult communities including Sun City Anthem and more.',
}

export default function Henderson55HomesPage() {
  const communities = [
    {
      name: 'Sun City Anthem',
      description: 'Active adult community featuring championship golf courses and state-of-the-art fitness centers',
      href: '/communities/sun-city-anthem',
    },
    {
      name: 'Solera at Anthem',
      description: 'Newer construction 55+ community with modern amenities and beautifully designed homes',
      href: '/communities/solera-anthem',
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a> / Henderson 55+ Homes
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Henderson 55+ Homes For Sale</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Discover premier 55+ active adult communities in Henderson, Nevada's second-largest city. Henderson offers a safe, family-friendly environment with excellent amenities and a strong sense of community.
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
                <span>Henderson, NV</span>
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
        <h2 className="text-2xl font-semibold mb-4">About Henderson</h2>
        <p className="text-muted-foreground mb-4">
          Henderson is consistently ranked as one of America's safest cities and offers residents a high quality of life with excellent schools, beautiful parks, and vibrant shopping and dining. The city's 55+ communities take advantage of this ideal setting, providing active adults with both specialized amenities and access to all that Henderson has to offer.
        </p>
        <p className="text-muted-foreground">
          Henderson's proximity to Las Vegas Strip entertainment while maintaining its own distinct community character makes it an ideal location for active adult living.
        </p>
      </div>
    </div>
  )
}

