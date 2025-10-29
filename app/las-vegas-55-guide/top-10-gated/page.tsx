import Link from 'next/link'
import { Shield } from 'lucide-react'

export const metadata = {
  title: 'Top 10 Gated 55+ Communities in Las Vegas | Complete Guide',
  description: 'Discover the top 10 gated 55+ communities in Las Vegas. Find secure, exclusive active adult communities with world-class amenities.',
}

export default function Top10GatedPage() {
  const communities = [
    { rank: 1, name: 'Sun City Summerlin', location: 'Las Vegas', href: '/communities/sun-city-summerlin' },
    { rank: 2, name: 'Sun City Anthem', location: 'Henderson', href: '/communities/sun-city-anthem' },
    { rank: 3, name: 'Siena', location: 'Las Vegas', href: '/communities/siena' },
    { rank: 4, name: 'Desert Shores', location: 'Las Vegas', href: '/communities/desert-shores' },
    { rank: 5, name: 'Regency at Summerlin', location: 'Las Vegas', href: '/communities/regency-summerlin' },
    { rank: 6, name: 'Solera at Anthem', location: 'Henderson', href: '/communities/solera-anthem' },
    { rank: 7, name: 'Canyon Gate Country Club', location: 'Las Vegas', href: '/communities/canyon-gate' },
    { rank: 8, name: 'Lake Las Vegas', location: 'Henderson', href: '/communities/lake-las-vegas' },
    { rank: 9, name: 'Sun City MacDonald Ranch', location: 'Henderson', href: '/communities/macdonald-ranch' },
    { rank: 10, name: 'The Lakes', location: 'Las Vegas', href: '/communities/the-lakes' },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a> / <a href="/las-vegas-55-guide" className="hover:text-foreground">Las Vegas 55+ Guide</a> / Top 10 Gated Communities
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Top 10 Gated 55+ Communities in Las Vegas</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Las Vegas is an attractive destination for retirees due to its pleasant climate, beautiful landscapes, and numerous cultural and recreational activities. Gated 55+ communities are particularly popular, offering added security and exclusivity.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl">
        {communities.map((community) => (
          <Link
            key={community.rank}
            href={community.href}
            className="flex items-center gap-6 p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow group"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{community.rank}</span>
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {community.name}
                </h3>
              </div>
              <p className="text-muted-foreground">{community.location}</p>
            </div>
            <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-lg border bg-card p-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose a Gated 55+ Community?</h2>
        <p className="text-muted-foreground mb-4">
          Gated communities offer residents enhanced security, privacy, and a sense of exclusivity. Combined with 55+ age restrictions, these communities provide an ideal environment for active adults seeking a safe, secure, and socially vibrant retirement lifestyle.
        </p>
        <p className="text-muted-foreground">
          When choosing a retirement community, consider factors such as location, amenities, health care access, social opportunities, and budget to find the perfect fit for your retirement needs and preferences.
        </p>
      </div>
    </div>
  )
}

