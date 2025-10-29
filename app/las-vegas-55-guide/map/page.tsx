import Link from 'next/link'
import { MapPin, Home, Search, Compass, Info } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'

export const metadata = {
  title: 'Las Vegas 55+ Communities Map | Interactive Map of Active Adult Communities | Location Guide',
  description: 'Explore Las Vegas 55+ communities on an interactive map. Find communities by location, area, and discover amenities near each community. Comprehensive location guide for active adult communities.',
  keywords: ['Las Vegas 55+ map', '55+ communities map', 'active adult communities location', 'Las Vegas retirement communities map'],
}

export default function MapPage() {
  // Organize communities by area
  const summerlinCommunities = lasVegasCommunities.filter(c => 
    c.location.toLowerCase().includes('summerlin')
  )
  const hendersonCommunities = lasVegasCommunities.filter(c => c.city === 'Henderson')
  const lasVegasCommunities_filtered = lasVegasCommunities.filter(c => 
    c.city === 'Las Vegas' && !c.location.toLowerCase().includes('summerlin')
  )
  const northLasVegasCommunities = lasVegasCommunities.filter(c => c.city === 'North Las Vegas')

  const areaSections = [
    { 
      title: 'Summerlin Area', 
      communities: summerlinCommunities,
      description: 'Premium master-planned community with mountain views and extensive amenities'
    },
    { 
      title: 'Henderson Area', 
      communities: hendersonCommunities,
      description: 'Safe, family-friendly environment with numerous 55+ communities'
    },
    { 
      title: 'Las Vegas Area', 
      communities: lasVegasCommunities_filtered,
      description: 'Diverse communities throughout the Las Vegas Valley'
    },
    { 
      title: 'North Las Vegas Area', 
      communities: northLasVegasCommunities,
      description: 'Growing area with newer 55+ community options'
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/las-vegas-55-guide" className="hover:text-foreground">Las Vegas 55+ Guide</Link> / Map
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Las Vegas 55+ Communities Map | Location Guide for Active Adult Communities</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Explore the locations of Las Vegas's premier 55+ communities with our comprehensive map guide. Understanding community locations helps you evaluate proximity to services, healthcare, shopping, entertainment, and natural attractions, all important factors in choosing your perfect active adult community.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Our location guide organizes communities by area, helping you understand the geographic distribution of Las Vegas 55+ communities and identify locations that match your preferences for convenience, access, and lifestyle.
        </p>
      </div>

      <div className="max-w-6xl space-y-12 mb-12">
        <section>
          <div className="rounded-lg border bg-card p-8 mb-8">
            <div className="aspect-video bg-muted rounded-lg flex flex-col items-center justify-center">
              <MapPin className="h-16 w-16 text-primary mb-4 opacity-50" />
              <p className="text-lg text-muted-foreground font-medium mb-2">Interactive Map Coming Soon</p>
              <p className="text-sm text-muted-foreground max-w-md text-center">
                A detailed interactive map showing all Las Vegas 55+ communities with clickable markers, community information, and filtering options will be available here soon.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Understanding Las Vegas 55+ Community Locations</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Location is one of the most important factors when choosing a 55+ community in Las Vegas. Different areas offer distinct advantages, from proximity to healthcare and shopping to access to natural beauty and entertainment. Understanding where communities are located helps you evaluate which areas align with your lifestyle preferences and needs.
            </p>
            <p>
              Las Vegas 55+ communities are primarily concentrated in Summerlin, Henderson, and throughout the Las Vegas Valley. Each area has unique characteristics, from Summerlin's master-planned sophistication to Henderson's suburban charm, and understanding these differences helps you identify the best location for your active adult lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-lg border bg-card">
              <Compass className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Location Advantages</h3>
              <p className="text-muted-foreground">
                Consider proximity to healthcare facilities, shopping centers, entertainment venues, airports, and natural attractions. Some areas offer better access to specific services or attractions, and understanding location advantages helps you choose communities that match your priorities.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Search className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Area Characteristics</h3>
              <p className="text-muted-foreground">
                Different Las Vegas areas have distinct characteristics, from urban convenience to suburban tranquility. Understanding area characteristics helps you identify locations that match your desired lifestyle, whether you prefer bustling areas with easy access to amenities or quieter settings with natural beauty.
              </p>
            </div>
          </div>
        </section>

        {areaSections.map((area) => (
          <section key={area.title}>
            <h2 className="text-3xl font-bold mb-4">{area.title}</h2>
            <p className="text-lg text-muted-foreground mb-6">{area.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {area.communities.map((community) => (
                <Link
                  key={community.slug}
                  href={`/communities/${community.slug}`}
                  className="group rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors mb-1">
                        {community.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{community.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{community.description}</p>
                  {community.priceRange && (
                    <p className="text-sm text-primary font-medium">{community.priceRange}</p>
                  )}
                  {community.homesForSale && (
                    <p className="text-xs text-muted-foreground mt-2">{community.homesForSale} Homes Available</p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-bold mb-6">Location Considerations for Active Adults</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              When evaluating community locations, active adults should consider several factors beyond simply the area name. Proximity to healthcare, shopping convenience, access to entertainment, and relationship to natural attractions all impact daily life and long-term satisfaction.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Healthcare Access</h3>
            <p管理人>
              Easy access to quality healthcare facilities becomes increasingly important as active adults age. Consider proximity to major hospitals, specialist clinics, and emergency services when evaluating community locations. Many Las Vegas 55+ communities are strategically located near medical centers, but understanding exact distances and travel times helps you make informed location decisions.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Shopping and Services</h3>
            <p>
              Convenient access to shopping, dining, and services enhances daily life in active adult communities. Evaluate proximity to grocery stores, pharmacies, banks, and other services you'll use regularly. While many communities are self-contained with on-site amenities, easy access to external services remains important for convenience and quality of life.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Entertainment and Recreation</h3>
            <p>
              Las Vegas offers world-class entertainment, dining, and recreational opportunities, and considering proximity to these attractions helps you choose locations that match your lifestyle interests. Whether you prefer easy access to the Strip for shows and dining or prefer proximity to natural attractions like Red Rock Canyon or Lake Mead, location matters for active adults who want to maintain vibrant social lives.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Using the Map Guide in Your Search</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              This map guide serves as a starting point for understanding Las Vegas 55+ community locations. As you narrow down your preferences, use this guide to identify communities in areas that match your priorities, then explore specific communities in detail through our community pages and videos.
            </p>
            <p>
              Our team can also provide personalized guidance about locations, helping you understand the advantages and characteristics of different areas and how they might match your lifestyle preferences. Contact us to discuss location considerations and get recommendations based on your specific needs.
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
  )
}
