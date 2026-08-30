import Link from 'next/link'
import { Activity, Trophy, Users, Heart } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import { siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import { generatePageGraph, generateItemListSchema } from '@/lib/structured-data'

export const metadata = buildMetadata({
  title: 'Las Vegas 55+ Communities with Pickleball Courts | Dr. Jan Duffy',
  description:
    'Find Las Vegas 55+ communities with pickleball courts, including Sun City Summerlin and Del Webb Lake Las Vegas. Call (702) 996-3758.',
  path: '/las-vegas-55-guide/top-10-pickleball',
  image: siteImages.pickleball,
  keywords: ['Las Vegas 55+ pickleball', 'pickleball courts Las Vegas 55+'],
})

export default function Top10PickleballPage() {
  // Filter communities that have pickleball in amenities
  const pickleballCommunities = lasVegasCommunities
    .filter(c => c.amenities.some(a => a.toLowerCase().includes('pickleball')))
    .slice(0, 10)
    .map((c, index) => ({ ...c, rank: index + 1 }))

  return (
    <div>
      <JsonLd
        id="pickleball-page-graph"
        data={generatePageGraph({
          pageType: 'CollectionPage',
          name: 'Las Vegas 55+ Communities with Pickleball Courts',
          description: '55+ communities in Las Vegas and Henderson that include pickleball courts.',
          path: '/las-vegas-55-guide/top-10-pickleball',
          image: siteImages.pickleball,
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Las Vegas 55+ Guide', url: '/las-vegas-55-guide' },
            { name: 'Pickleball Communities', url: '/las-vegas-55-guide/top-10-pickleball' },
          ],
          extra: [
            generateItemListSchema({
              name: 'Las Vegas 55+ pickleball communities',
              description: 'Communities with pickleball courts.',
              items: pickleballCommunities.map((community) => ({
                name: community.name,
                url: `/communities/${community.slug}`,
              })),
            }),
          ],
        })}
      />
      <PageHero
        image={siteImages.pickleball}
        title="Las Vegas 55+ Pickleball Communities"
        subtitle="Outdoor pickleball courts are a common amenity in Las Vegas Valley 55+ communities. Call (702) 996-3758 to tour."
        breadcrumbs={[
          { label: 'Las Vegas 55+ Guide', href: '/las-vegas-55-guide' },
          { label: 'Pickleball' },
        ]}
        primaryCTA={{ text: 'Search Homes', href: '/homes-for-sale' }}
      />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="max-w-4xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Pickleball is Perfect for 55+ Active Adults</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Pickleball has exploded in popularity among active adults, and for good reason. This fast-growing sport combines elements of tennis, badminton, and ping-pong, making it accessible to players of all skill levels while providing excellent exercise and social opportunities. The sport's appeal to 55+ residents has been so strong that many Las Vegas communities have invested in dedicated pickleball facilities and programs.
            </p>
            <p>
              As a low-impact sport, pickleball is easy on joints while still providing cardiovascular benefits, making it ideal for active adults who want to stay fit without the strain of high-impact activities. The smaller court size compared to tennis means less running while still delivering an engaging workout. Plus, pickleball's social nature—often played in doubles and requiring communication with partners—makes it perfect for building friendships and staying socially connected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <Activity className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Low-Impact Exercise</h3>
              <p className="text-muted-foreground">
                Pickleball provides excellent cardiovascular exercise without the joint stress of high-impact sports. The sport's court size and gameplay mechanics make it ideal for maintaining fitness while protecting your body from excessive wear and tear.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Social Connection</h3>
              <p className="text-muted-foreground">
                Pickleball's doubles format and casual nature make it an excellent way to meet neighbors and build lasting friendships. Many communities have active pickleball clubs that organize games, tournaments, and social events around the sport.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Trophy className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Easy to Learn</h3>
              <p className="text-muted-foreground">
                Unlike some sports that require extensive training, pickleball is relatively easy to pick up while offering enough strategic depth to keep experienced players engaged. This accessibility means residents can start playing quickly and improve over time.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Heart className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Year-Round Play</h3>
              <p className="text-muted-foreground">
                Las Vegas's climate allows for year-round pickleball play, with outdoor courts usable throughout most of the year. Many communities also feature covered or indoor courts for playing during the hottest summer months, ensuring residents can enjoy the sport regardless of weather conditions.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Top 10 Las Vegas 55+ Communities with Pickleball Courts</h2>
          <div className="space-y-6 mb-8">
            {pickleballCommunities.map((community) => (
              <Link
                key={community.slug}
                href={`/communities/${community.slug}`}
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
                  <p className="text-muted-foreground mb-2">{community.location}</p>
                  <p className="text-sm text-muted-foreground">{community.description}</p>
                  {community.priceRange && (
                    <p className="text-sm text-primary font-medium mt-2">{community.priceRange}</p>
                  )}
                </div>
                <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">What to Look for in Pickleball Facilities</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              When evaluating 55+ communities for pickleball, consider several factors beyond simply whether courts exist. The quality, accessibility, and programming around pickleball facilities can significantly impact your enjoyment of the sport.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Court Quality and Availability</h3>
            <p>
              Look for communities with well-maintained courts, proper lighting for evening play, and adequate court space to accommodate resident demand. Some communities have dedicated pickleball courts, while others use multi-purpose courts that can be adapted. Consider whether courts are outdoor, covered, or indoor, and how availability works—are there scheduled times, or is play available on a first-come basis?
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Pickleball Programs and Clubs</h3>
            <p>
              Many communities with strong pickleball facilities also have active clubs that organize regular play, skill-level groups, lessons for beginners, and competitive tournaments. These programs enhance the social and fitness benefits of the sport, helping you connect with players of similar skill levels and continuously improve your game.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Community Support and Culture</h3>
            <p>
              Evaluate how pickleball fits into the overall community culture. Do a significant number of residents play? Are there organized leagues and social events around pickleball? Communities where pickleball is well-integrated into social life often provide the best experience for players who want to make the sport a regular part of their active retirement routine.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">The Growing Popularity of Pickleball in Las Vegas</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Las Vegas has become a hub for pickleball enthusiasts, with many 55+ communities recognizing the sport's appeal and investing in quality facilities. The city's climate and active adult population make it ideal for pickleball's outdoor play, while many communities also offer covered or indoor options for year-round enjoyment.
            </p>
            <p>
              The sport's growth in Las Vegas 55+ communities reflects broader national trends, but the city's unique combination of active adult populations, favorable weather, and community investments in recreation facilities has accelerated pickleball's popularity here. Many residents report that pickleball has become a central part of their social and fitness routines, providing both physical activity and regular opportunities to connect with neighbors.
            </p>
            <p>
              For active adults considering Las Vegas for retirement, the presence of quality pickleball facilities can be a significant factor in community selection. The sport offers a perfect combination of fitness, fun, and social connection that aligns with many residents' goals for active retirement living.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Getting Started with Pickleball in Las Vegas 55+ Communities</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              If you're new to pickleball, many Las Vegas 55+ communities offer beginner programs, lessons, and equipment available for residents to try the sport. The welcoming nature of the pickleball community means that newcomers are typically encouraged and supported as they learn the game.
            </p>
            <p>
              When touring communities, ask about pickleball programs, court availability, resident participation levels, and whether the community hosts tournaments or social events around pickleball. This information will help you identify communities where pickleball is a vibrant part of community life rather than just an available amenity.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/communities"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Explore All Communities
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}
