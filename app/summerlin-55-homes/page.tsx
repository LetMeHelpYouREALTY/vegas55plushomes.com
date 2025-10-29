import Link from 'next/link'
import { Home, MapPin, Trophy, Mountain, TreePine, Award } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'

export const metadata = {
  title: 'Summerlin 55+ Homes For Sale | Las Vegas Real Estate | Premier Active Adult Communities',
  description: 'Find 55+ homes for sale in Summerlin, Las Vegas. Explore premier active adult communities including Sun City Summerlin, Siena, Regency at Summerlin, and more in this prestigious master-planned community.',
  keywords: ['Summerlin 55+ homes', 'Summerlin active adult communities', 'Summerlin real estate 55+', 'Las Vegas Summerlin retirement communities'],
}

export default function Summerlin55HomesPage() {
  const summerlinCommunities = lasVegasCommunities.filter(c => 
    c.location.toLowerCase().includes('summerlin') || 
    c.city === 'Las Vegas' && (c.slug.includes('summerlin') || c.name.includes('Summerlin'))
  )

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-foreground">Home</Link> / Summerlin 55+ Homes
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Summerlin 55+ Homes For Sale | Premier Active Adult Communities</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Discover premier 55+ active adult communities in Summerlin, one of Las Vegas's most desirable master-planned communities. Summerlin offers residents beautiful desert scenery, excellent amenities, mountain views, and a vibrant lifestyle that makes it ideal for active adult living.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Summerlin's 55+ communities combine the benefits of specialized active adult living with access to all the amenities and resources of this prestigious master-planned community, creating a unique living experience that appeals to active adults seeking both community and convenience.
        </p>
      </div>

      <div className="max-w-4xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Choose Summerlin for 55+ Living?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Summerlin is one of the country's largest and most acclaimed master-planned communities, spanning 22,500 acres at the base of the Red Rock Canyon National Conservation Area. Known for its beautiful parks, world-class amenities, strong sense of community, and stunning natural setting, Summerlin provides an ideal location for active adults seeking upscale, resort-style living.
            </p>
            <p>
              The community's commitment to quality planning, architectural diversity, and amenity development has earned it recognition as one of the nation's premier master-planned communities. For active adults, Summerlin offers the perfect combination of specialized 55+ communities with access to broader community resources, creating a comprehensive lifestyle package that's hard to match.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Natural Beauty and Outdoor Recreation</h3>
            <p>
              Summerlin's location adjacent to Red Rock Canyon provides unparalleled access to natural beauty and outdoor recreation. Residents can enjoy hiking trails, scenic drives, rock climbing, and exploring the stunning desert landscape just minutes from home. This connection to nature enhances the active adult lifestyle, providing endless opportunities for outdoor activities and natural beauty appreciation.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Master-Planned Excellence</h3>
            <p>
              Summerlin's master planning ensures cohesive development, quality infrastructure, and comprehensive amenities that benefit all residents. The community features extensive park systems, walking and biking trails, golf courses, shopping centers, restaurants, and cultural venues, all thoughtfully integrated into the overall community design.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Premier Summerlin 55+ Communities</h2>
          <div className="space-y-6 mb-8">
            {summerlinCommunities.length > 0 ? (
              summerlinCommunities.map((community) => (
                <Link
                  key={community.slug}
                  href={`/communities/${community.slug}`}
                  className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow block"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{community.location}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {community.name}
                    </h3>
                    <p className="text-muted-foreground mb-3">{community.description}</p>
                    {community.priceRange && (
                      <p className="text-sm text-primary font-medium">{community.priceRange}</p>
                    )}
                    {community.homesForSale && (
                      <p className="text-sm text-muted-foreground mt-1">{community.homesForSale} Homes Available</p>
                    )}
                  </div>
                </Link>
              ))
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link
                  href="/communities/sun-city-summerlin"
                  className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Home className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      Sun City Summerlin
                    </h3>
                    <p className="text-muted-foreground">Premier 55+ gated community with multiple golf courses and resort-style amenities</p>
                  </div>
                </Link>
                <Link
                  href="/communities/regency-summerlin"
                  className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Home className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      Regency at Summerlin
                    </h3>
                    <p className="text-muted-foreground">Luxury Toll Brothers community with 22,000 sq ft clubhouse</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">About Summerlin: A Premier Master-Planned Community</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Summerlin represents the gold standard for master-planned community development in the United States. Conceived and developed by The Howard Hughes Corporation, Summerlin has been built with careful attention to planning, design, and community values that create exceptional living environments for residents of all ages.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Comprehensive Amenities and Services</h3>
            <p>
              Summerlin's amenities extend far beyond individual neighborhoods, including over 250 parks, 150+ miles of trails, multiple golf courses, shopping centers, dining establishments, medical facilities, and cultural venues. This comprehensive infrastructure means that Summerlin 55+ community residents have access to extensive resources and amenities beyond what's available within their specific active adult communities.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Quality Schools and Services</h3>
            <p>
              While 55+ communities don't focus on schools externally, Summerlin's commitment to quality education and community services reflects the overall commitment to excellence that benefits all residents. The presence of quality schools, libraries, and community services contributes to the area's desirability and property values, making it an excellent long-term investment location.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Location Advantages</h3>
            <p>
              Summerlin's location provides easy access to the Las Vegas Strip, downtown Las Vegas, McCarran International Airport, and major employment centers, while maintaining a distinct community character that feels separate from the hustle of the Strip. This location advantage makes Summerlin ideal for active adults who want proximity to Las Vegas amenities while living in a more peaceful, planned environment.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">55+ Community Options in Summerlin</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Summerlin is home to several exceptional 55+ communities, each offering unique characteristics that appeal to different lifestyles and preferences. From the mega-community scale of Sun City Summerlin to the luxury of Siena and Regency at Summerlin, active adults can find options that match their vision for retirement living.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Sun City Summerlin: The Mega-Community</h3>
            <p>
              Sun City Summerlin represents one of Las Vegas's largest and most established 55+ communities, featuring over 7,700 homes across 2,400+ acres. This mega-community offers extensive amenities including three championship golf courses, four recreation centers, over 80 clubs, and comprehensive facilities that create a resort-like living experience. Sun City Summerlin's size provides incredible diversity in home options, neighborhoods, and social opportunities.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Siena: Luxury Golf Community</h3>
            <p>
              Siena offers upscale 55+ living with an 18-hole championship golf course, Tuscan-inspired architecture, and luxury amenities on 667 acres. This premium community provides an intimate, exclusive atmosphere while still offering comprehensive amenities and beautiful homes. Siena's location within Summerlin provides the added benefit of access to all Summerlin resources.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Regency at Summerlin: Toll Brothers Luxury</h3>
            <p>
              Regency at Summerlin by Toll Brothers offers 448 luxury homes with a spectacular 22,000 square foot clubhouse, indoor and outdoor pools, and premium finishes throughout. This community represents some of the newest luxury construction in Summerlin's 55+ market, featuring modern designs and high-end amenities.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Buying a 55+ Home in Summerlin</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Purchasing a home in a Summerlin 55+ community means investing in one of Las Vegas's most desirable locations with access to comprehensive amenities, natural beauty, and a strong sense of community. The combination of specialized active adult living with master-planned community benefits creates exceptional value for active adults.
            </p>
            <p>
              Summerlin's strong market fundamentals, quality planning, and desirable location contribute to property values and long-term investment potential. When combined with the active adult lifestyle benefits, Summerlin represents an excellent choice for active adults seeking both lifestyle fulfillment and sound real estate investment.
            </p>
            <p>
              Our team specializes in Summerlin 55+ communities and can help you navigate the unique considerations of buying in this prestigious area. From understanding Summerlin master plan amenities and location advantages to evaluating specific communities and home options, we provide comprehensive guidance to help you find your perfect Summerlin 55+ home.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/homes-for-sale?location=summerlin"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              View Summerlin Homes For Sale
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
  )
}
