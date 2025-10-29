import Link from 'next/link'
import { Home, MapPin, Shield, Trophy, Heart, Users } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'

export const metadata = {
  title: 'Las Vegas 55+ Communities | Complete Guide to Premier Active Adult Communities',
  description: 'Explore premier Las Vegas 55+ communities including Sun City Summerlin, Sun City Anthem, Siena, Desert Shores, and more. Find your perfect active adult community with our comprehensive guide.',
  keywords: ['Las Vegas 55+ communities', 'active adult communities Las Vegas', 'retirement communities Las Vegas', '55 plus communities Nevada'],
}

const featuredCommunities = lasVegasCommunities.filter(c => c.featured)
const allCommunities = lasVegasCommunities

export default function CommunitiesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Las Vegas 55+ Communities: Your Complete Guide</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-6">
          Discover premier active adult communities throughout Las Vegas, Henderson, and the surrounding valley. Each community offers unique amenities, floor plans, and lifestyles specifically designed for active adults 55 and better who want to maximize their retirement years through active living, social engagement, and low-maintenance convenience.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Our comprehensive guide helps you explore what makes each Las Vegas 55+ community special, from world-class golf courses and fitness centers to vibrant social scenes and resort-style amenities. Whether you're seeking luxury living, an active lifestyle, or peaceful retirement, Las Vegas offers exceptional options to match your vision.
        </p>
      </div>

      {/* Why Las Vegas 55+ Communities Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Choose a Las Vegas 55+ Community?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="p-6 rounded-lg border bg-card">
            <Trophy className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">World-Class Amenities</h3>
            <p className="text-muted-foreground">
              Las Vegas 55+ communities feature amenities that rival luxury resorts, including championship golf courses, state-of-the-art fitness centers, swimming pools, tennis and pickleball courts, and comprehensive clubhouses.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Users className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Active Social Scene</h3>
            <p className="text-muted-foreground">
              Each community hosts hundreds of clubs and organizations based on diverse interests, from book clubs and gardening groups to travel clubs and volunteer organizations, ensuring you'll find like-minded neighbors.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Heart className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Low-Maintenance Living</h3>
            <p className="text-muted-foreground">
              Most communities handle landscaping, exterior maintenance, and common area upkeep, allowing you to focus on enjoying your retirement rather than maintaining a property.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Shield className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Security & Peace of Mind</h3>
            <p className="text-muted-foreground">
              Gated communities provide 24/7 security, controlled access, and a sense of safety that allows you to travel worry-free while knowing your home is protected.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Featured Las Vegas 55+ Communities</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          These premier communities represent the pinnacle of active adult living in Las Vegas, each offering unique characteristics that make them stand out in the market. From luxury amenities to exceptional locations, these featured communities showcase the best of 55+ living in the Las Vegas area.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCommunities.map((community) => (
            <Link
              key={community.slug}
              href={`/communities/${community.slug}`}
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
                <p className="text-muted-foreground mb-3">{community.description}</p>
                <p className="text-sm text-primary font-medium">{community.homesForSale} Homes Currently Available</p>
                {community.priceRange && (
                  <p className="text-sm text-muted-foreground mt-2">From {community.priceRange}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Communities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">All Las Vegas 55+ Communities</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Below is our comprehensive directory of Las Vegas area 55+ communities. Each community offers unique benefits, amenities, and lifestyle options. Click on any community to learn more about homes for sale, floor plans, amenities, market updates, and community characteristics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCommunities.map((community) => (
            <Link
              key={community.slug}
              href={`/communities/${community.slug}`}
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
                <p className="text-muted-foreground mb-3">{community.description}</p>
                <p className="text-sm text-primary font-medium">{community.homesForSale} Homes Available</p>
                {community.priceRange && (
                  <p className="text-sm text-muted-foreground mt-2">From {community.priceRange}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Choosing a Community Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How to Choose the Right Las Vegas 55+ Community for You</h2>
        <div className="max-w-4xl space-y-6 text-muted-foreground mb-8">
          <p>
            Selecting the right 55+ community is one of the most important decisions you'll make for your retirement. The best community for you depends on your lifestyle preferences, budget, desired amenities, and long-term goals. Here's what to consider when evaluating Las Vegas 55+ communities:
          </p>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Location and Neighborhood</h3>
            <p>
              Each area of Las Vegas offers distinct advantages. Summerlin provides a master-planned community atmosphere with mountain views and extensive amenities. Henderson offers a more suburban feel with excellent shopping and dining. Consider proximity to healthcare, shopping, entertainment, and airports when evaluating locations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Amenities and Lifestyle</h3>
            <p>
              Different communities emphasize different amenities. Golf enthusiasts will appreciate communities with championship courses, while fitness-focused residents might prioritize state-of-the-art gym facilities. Social butterflies should consider communities with active club scenes and busy event calendars.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Home Types and Pricing</h3>
            <p>
              Las Vegas 55+ communities offer diverse housing options from affordable attached villas to luxury single-family homes. Understanding price ranges, homeowner association fees, and what's included in those fees is crucial for budget planning. Consider both initial purchase price and ongoing costs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Community Culture and Demographics</h3>
            <p>
              Each community has its own personality and demographic profile. Some attract active, outgoing residents, while others appeal to those seeking quiet, peaceful living. Visiting communities, talking to residents, and attending community events can help you identify where you'll feel most at home.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Get Started Exploring Las Vegas 55+ Communities</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Ready to find your perfect Las Vegas 55+ community? Our team of specialists is here to help you navigate your options, schedule tours, and find the community that best matches your lifestyle and budget. Contact us today to begin your journey toward exceptional active adult living.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact Our Team
          </Link>
          <Link
            href="/las-vegas-55-guide"
            className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
          >
            View Complete Guide
          </Link>
        </div>
      </section>
    </div>
  )
}
