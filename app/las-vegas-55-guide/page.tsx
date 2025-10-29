import Link from 'next/link'
import { MapPin, Home, Trophy } from 'lucide-react'

export const metadata = {
  title: 'Las Vegas 55+ Guide | Complete Guide to Active Adult Communities',
  description: 'Your complete guide to Las Vegas 55+ communities. Explore the top communities, amenities, and find your perfect active adult lifestyle.',
}

export default function LasVegas55GuidePage() {
  const guideLinks = [
    { title: 'Las Vegas 55+ Overview', href: '/las-vegas-55-guide/overview', icon: <Home className="h-5 w-5" /> },
    { title: 'Top 10 Gated 55+ Communities in Las Vegas', href: '/las-vegas-55-guide/top-10-gated', icon: <Trophy className="h-5 w-5" /> },
    { title: 'Top 10 Las Vegas 55+ Communities with Pickleball Courts', href: '/las-vegas-55-guide/top-10-pickleball', icon: <Trophy className="h-5 w-5" /> },
    { title: 'Las Vegas 55+ Map', href: '/las-vegas-55-guide/map', icon: <MapPin className="h-5 w-5" /> },
    { title: 'Las Vegas 55+ Videos', href: '/las-vegas-55-guide/videos', icon: <Home className="h-5 w-5" /> },
    { title: 'Las Vegas 55+ Single Family Homes', href: '/homes-for-sale?type=single-family', icon: <Home className="h-5 w-5" /> },
    { title: 'Las Vegas 55+ Condos For Sale', href: '/homes-for-sale?type=condo', icon: <Home className="h-5 w-5" /> },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Las Vegas 55+ Guide</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Your complete guide to Las Vegas 55+ active adult communities. Discover the best communities, amenities, and lifestyle options for active adults in Las Vegas and Henderson.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guideLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-4 p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow group"
          >
            <div className="text-primary">{link.icon}</div>
            <span className="font-medium group-hover:text-primary transition-colors">{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

