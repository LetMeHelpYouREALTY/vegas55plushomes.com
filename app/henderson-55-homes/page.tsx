import Link from 'next/link'
import { Home, MapPin, Award, Shield, Heart, Trophy } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'

export const metadata = {
  title: 'Henderson 55+ Homes For Sale | Las Vegas Real Estate | Premier Active Adult Communities',
  description: 'Find 55+ homes for sale in Henderson, Nevada. Explore premier active adult communities including Sun City Anthem, Solera at Anthem, Heritage at Cadence, and more in this safe, family-friendly city.',
  keywords: ['Henderson 55+ homes', 'Henderson active adult communities', 'Henderson real estate 55+', 'Nevada Henderson retirement communities'],
}

export default function Henderson55HomesPage() {
  const hendersonCommunities = lasVegasCommunities.filter(c => c.city === 'Henderson')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-foreground">Home</Link> / Henderson 55+ Homes
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Henderson 55+ Homes For Sale | Premier Active Adult Communities</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Discover premier 55+ active adult communities in Henderson, Nevada's second-largest city. Henderson consistently ranks as one of America's safest cities and offers residents a high quality of life with excellent amenities, beautiful parks, vibrant shopping and dining, and a strong sense of community that makes it ideal for active adult living.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Henderson's 55+ communities take advantage of this ideal setting, providing active adults with both specialized amenities within their communities and access to all that Henderson has to offer, creating a comprehensive lifestyle package for active retirement living.
        </p>
      </div>

      <div className="max-w-4xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Choose Henderson for 55+ Living?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Henderson has earned a reputation as one of America's safest and most desirable cities, consistently ranking at the top of national safety and quality of life rankings. This commitment to safety, combined with excellent infrastructure, quality services, and strong community values, makes Henderson particularly appealing to active adults seeking a secure, comfortable retirement environment.
            </p>
            <p>
              The city's proximity to the Las Vegas Strip entertainment while maintaining its own distinct community character creates the perfect balance for active adults. Residents can enjoy easy access to Las Vegas amenities, shows, and dining while living in a more peaceful, suburban environment with its own excellent shopping, restaurants, and services.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Safety and Security</h3>
            <p>
              Henderson's reputation for safety is well-earned, with low crime rates, active community policing, and a commitment to maintaining safe neighborhoods. This safety record provides peace of mind for active adults, especially those living in 55+ communities who value security and tranquility in their retirement years.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Quality of Life and Services</h3>
            <p>
              Henderson offers excellent schools (beneficial for property values), beautiful parks, extensive trail systems, quality healthcare facilities, and a robust shopping and dining scene. The city's commitment to maintaining high-quality public services and infrastructure contributes to the overall quality of life that residents enjoy.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Master-Planned Communities</h3>
            <p>
              Henderson is home to several master-planned communities including Anthem, MacDonald Ranch, Cadence, and others, which provide comprehensive amenities and planning that benefit all residents, including those in 55+ communities within these master plans. This integration means 55+ community residents enjoy both specialized amenities and broader community resources.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Premier Henderson 55+ Communities</h2>
          <div className="space-y-6 mb-8">
            {hendersonCommunities.length > 0 ? (
              hendersonCommunities.map((community) => (
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
                  href="/communities/sun-city-anthem"
                  className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Home className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      Sun City Anthem
                    </h3>
                    <p className="text-muted-foreground">Premier Henderson 55+ community with 77,000 sq ft Anthem Center</p>
                  </div>
                </Link>
                <Link
                  href="/communities/solera-anthem"
                  className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Home className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      Solera at Anthem
                    </h3>
                    <p className="text-muted-foreground">Affordable 55+ community with modern amenities</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">About Henderson: Nevada's Premier Suburban City</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Henderson has grown from a small town to Nevada's second-largest city while maintaining its community-focused character and quality of life standards. The city's careful planning and commitment to excellence have created an environment that attracts families, businesses, and active adults seeking a suburban lifestyle with urban amenities nearby.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Excellent Location and Access</h3>
            <p>
              Henderson's location provides easy access to the Las Vegas Strip, McCarran International Airport, major employment centers, and all Las Vegas amenities while maintaining distance from the hustle and bustle. This proximity allows residents to enjoy Las Vegas entertainment, dining, and cultural offerings when desired while living in a more relaxed, suburban setting.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Natural Beauty and Recreation</h3>
            <p>
              Henderson features beautiful desert landscapes, mountain views, and access to Lake Mead for water recreation. The city maintains extensive park systems, walking trails, and recreational facilities that complement the amenities available within 55+ communities, providing residents with comprehensive outdoor recreation opportunities.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Healthcare and Services</h3>
            <p>
              Henderson features excellent healthcare facilities including Henderson Hospital (new facility), St. Rose Dominican Hospitals, and numerous specialty clinics and medical centers. The presence of quality healthcare ensures that active adults have access to comprehensive medical services and preventive care, contributing to peace of mind and quality of life.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Henderson's Master-Planned Communities</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Henderson is home to several highly-regarded master-planned communities that host 55+ active adult communities within them. Understanding these master plans helps you understand the broader context in which Henderson's 55+ communities exist.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Anthem Master Plan</h3>
            <p>
              The Anthem master plan hosts both Sun City Anthem and Solera at Anthem, creating a comprehensive development with golf courses, parks, shopping, and extensive amenities. 55+ community residents in Anthem enjoy access to master plan amenities in addition to their specialized community facilities, creating exceptional value and lifestyle opportunities.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">MacDonald Ranch and Cadence</h3>
            <p>
              Henderson's other master-planned communities including MacDonald Ranch, Cadence, and others provide similar comprehensive planning and amenities that benefit all residents. These master plans contribute to Henderson's reputation for quality development and desirable living environments.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Buying a 55+ Home in Henderson</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Purchasing a home in a Henderson 55+ community means investing in one of Nevada's most desirable and safest cities with access to quality services, excellent amenities, and a strong community character. Henderson's combination of safety, quality of life, and proximity to Las Vegas creates exceptional value for active adults.
            </p>
            <p>
              Henderson's real estate market has demonstrated strong fundamentals with steady appreciation and consistent demand. The city's growth, quality planning, and desirable characteristics contribute to property values and long-term investment potential, making Henderson an excellent choice for active adults seeking both lifestyle fulfillment and sound real estate investment.
            </p>
            <p>
              Our team specializes in Henderson 55+ communities and can help you navigate the unique considerations of buying in this desirable area. From understanding Henderson's neighborhoods and master-planned communities to evaluating specific 55+ communities and home options, we provide comprehensive guidance to help you find your perfect Henderson 55+ home.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/homes-for-sale?location=henderson"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              View Henderson Homes For Sale
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
