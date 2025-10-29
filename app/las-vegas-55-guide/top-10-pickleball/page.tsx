import Link from 'next/link'
import { Activity } from 'lucide-react'

export const metadata = {
  title: 'Top 10 Las Vegas 55+ Communities with Pickleball Courts',
  description: 'Discover Las Vegas 55+ communities featuring pickleball courts. Pickleball has rapidly grown in popularity among active adults.',
}

export default function Top10PickleballPage() {
  const communities = [
    { rank: 1, name: 'Sun City Summerlin', location: 'Las Vegas', courts: 8, href: '/communities/sun-city-summerlin' },
    { rank: 2, name: 'Sun City Anthem', location: 'Henderson', courts: 6, href: '/communities/sun-city-anthem' },
    { rank: 3, name: 'Siena', location: 'Las Vegas', courts: 4, href: '/communities/siena' },
    { rank: 4, name: 'Regency at Summerlin', location: 'Las Vegas', courts: 4, href: '/communities/regency-summerlin' },
    { rank: 5, name: 'Desert Shores', location: 'Las Vegas', courts: 3, href: '/communities/desert-shores' },
    { rank: 6, name: 'Solera at Anthem', location: 'Henderson', courts: 3, href: '/communities/solera-anthem' },
    { rank: 7, name: 'Canyon Gate Country Club', location: 'Las Vegas', courts: 2, href: '/communities/canyon-gate' },
    { rank: 8, name: 'The Lakes', location: 'Las Vegas', courts: 2, href: '/communities/the-lakes' },
    { rank: 9, name: 'Lake Las Vegas', location: 'Henderson', courts: 2, href: '/communities/lake-las-vegas' },
    { rank: 10, name: 'Sun City MacDonald Ranch', location: 'Henderson', courts: 2, href: '/communities/macdonald-ranch' },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a> / <a href="/las-vegas-55-guide" className="hover:text-foreground">Las Vegas 55+ Guide</a> / Top 10 Pickleball Communities
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Top 10 Las Vegas 55+ Communities with Pickleball Courts</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Pickleball has rapidly grown in popularity among active adults in Las Vegas's 55+ communities. Whether you're an experienced player or just discovering the sport, many of Las Vegas's 55+ communities now feature pickleball courts catchy their impressive amenities.
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
                <Activity className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {community.name}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>{community.location}</span>
                <span className="font-medium text-foreground">{community.courts} Pickleball Courts</span>
              </div>
            </div>
            <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-lg border bg-card p-8">
        <h2 className="text-2xl font-semibold mb-4">Why Pickleball is So Popular in 55+ Communities</h2>
        <p className="text-muted-foreground mb-4">
          Pickleball combines elements of tennis, badminton, and ping-pong, making it accessible to players of all skill levels. It's a low-impact sport that's easy on the joints while providing excellent cardiovascular exercise. The social aspect of pickleball also makes it a favorite among active adults looking to stay fit and connect with neighbors.
        </p>
        <p className="text-muted-foreground">
          Many Las Vegas 55+ communities have responded to this growing interest by adding pickleball courts, and some communities have dedicated pickleball clubs and leagues. When choosing a 55+ community, consider whether pickleball courts are available if this sport interests you.
        </p>
      </div>
    </div>
  )
}

