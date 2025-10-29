import Link from 'next/link'
import { MapPin, Home, Trophy, PlayCircle, Shield, Activity, Info, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { lasVegasCommunities } from '@/lib/communities-data'

export const metadata = {
  title: 'Las Vegas 55+ Guide | Complete Guide to Active Adult Communities | Vegas 55 Plus Homes',
  description: 'Your complete guide to Las Vegas 55+ active adult communities. Explore the top communities, amenities, lifestyle options, and find your perfect active adult living experience in Las Vegas and Henderson.',
  keywords: ['Las Vegas 55+ guide', 'active adult communities guide', 'Las Vegas retirement communities', '55+ living guide Las Vegas'],
}

export default function LasVegas55GuidePage() {
  const featuredCommunities = lasVegasCommunities.filter(c => c.featured).slice(0, 6)

  const guideLinks = [
    { 
      title: 'Las Vegas 55+ Overview', 
      href: '/las-vegas-55-guide/overview', 
      icon: <Home className="h-5 w-5" />,
      description: 'Complete overview of Las Vegas 55+ communities, lifestyle, and why Las Vegas is ideal for active adults'
    },
    { 
      title: 'Top 10 Gated 55+ Communities in Las Vegas', 
      href: '/las-vegas-55-guide/top-10-gated', 
      icon: <Shield className="h-5 w-5" />,
      description: 'Discover the premier gated 55+ communities offering enhanced security and exclusive amenities'
    },
    { 
      title: 'Top 10 Las Vegas 55+ Communities with Pickleball Courts', 
      href: '/las-vegas-55-guide/top-10-pickleball', 
      icon: <Activity className="h-5 w-5" />,
      description: 'Find communities making pickleball courts available for active adults'
    },
    { 
      title: 'Las Vegas 55+ Map', 
      href: '/las-vegas-55-guide/map', 
      icon: <MapPin className="h-5 w-5" />,
      description: 'Explore community locations and understand geographic distribution across the Las Vegas Valley'
    },
    { 
      title: 'Las Vegas 55+ Videos', 
      href: '/las-vegas-55-guide/videos', 
      icon: <PlayCircle className="h-5 w-5" />,
      description: 'Watch virtual tours and community videos to explore Las Vegas 55+ communities from anywhere'
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Las Vegas 55+ Guide | Your Complete Resource for Active Adult Living</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Your comprehensive guide to Las Vegas 55+ active adult communities. Discover the best communities, amenities, lifestyle options, and everything you need to know about active adult living in Las Vegas and Henderson. This guide provides detailed information to help you make informed decisions about your retirement lifestyle.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Whether you're beginning your search or narrowing down options, this guide offers comprehensive insights into Las Vegas 55+ communities, helping you understand what makes each community unique and find the perfect match for your active retirement years.
        </p>
      </div>

      <div className="max-w-6xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Use This Las Vegas 55+ Guide?</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Navigating the Las Vegas 55+ community landscape can feel overwhelming given the numerous excellent options available. This comprehensive guide provides the information, insights, and resources you need to efficiently explore communities, understand market dynamics, and make informed decisions about where to call home for your active retirement years.
            </p>
            <p>
              Our guide goes beyond basic listings, offering detailed information about community cultures, amenities, pricing trends, location advantages, and lifestyle characteristics. This depth of information helps you identify communities that truly match your preferences rather than relying solely on surface-level marketing materials.
            </p>
            <p>
              For active adults relocating from other states or those unfamiliar with the Las Vegas area, this guide provides essential context about the region, climate, lifestyle, and what makes Las Vegas an exceptional destination for 55+ living. Understanding these broader factors helps you evaluate communities within their larger context.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <Info className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Comprehensive Information</h3>
              <p className="text-muted-foreground">
                Our guide provides detailed information about communities, amenities, pricing, locations, and lifestyle characteristics that help you make informed decisions about your active adult living.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Location Insights</h3>
              <p className="text-muted-foreground">
                Understand geographic distribution, location advantages, and how different Las Vegas areas compare. This location knowledge helps you identify areas that match your preferences.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Trophy className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Perspectives</h3>
              <p className="text-muted-foreground">
                Gain insights from Las Vegas 55+ real estate specialists who understand community nuances, market trends, and what matters most for active adult living in Las Vegas.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Guide Sections: Explore Las Vegas 55+ Communities</h2>
          <div className="space-y-6 mb-8">
            <p className="text-lg text-muted-foreground">
              Our guide is organized into comprehensive sections that cover different aspects of Las Vegas 55+ community living. Each section provides detailed information to help you understand specific topics and make informed decisions about your active adult lifestyle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guideLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-start gap-4 p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="text-primary mt-1 flex-shrink-0">{link.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">{link.description}</p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      Explore Guide
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Featured Las Vegas 55+ Communities</h2>
          <div className="space-y-4 text-muted-foreground mb-6">
            <p>
              Las Vegas is home to numerous exceptional 55+ communities, each offering unique characteristics, amenities, and lifestyle options. These featured communities represent some of the most sought-after active adult living destinations in the Las Vegas area, showcasing the diversity and quality available to active adults.
            </p>
            <p>
              From mega-communities with thousands of homes and extensive amenity packages to smaller, more intimate communities with specialized focuses, Las Vegas offers options for every preference and budget. Understanding what makes each community special helps you identify those that align with your vision for active retirement living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredCommunities.map((community) => (
              <Link
                key={community.slug}
                href={`/communities/${community.slug}`}
                className="group rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{community.location}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {community.name}
                </h3>
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
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/communities">View All Communities</Link>
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Key Topics Covered in This Guide</h2>
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Community Overviews and Comparisons</h3>
              <p>
                Our guide provides comprehensive overviews of Las Vegas 55+ communities, helping you understand what makes each community unique. We cover amenities, home options, pricing, location advantages, and community cultures, giving you the complete picture needed to make informed decisions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Amenity Focus Guides</h3>
              <p>
                Specific guides focusing on popular amenities like pickleball courts and gated security help you identify communities that offer the features you care about most. These focused guides save time by helping you quickly identify communities that match your priority amenities.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Location and Geography</h3>
              <p>
                Understanding where communities are located and how locations compare helps you evaluate proximity to services, healthcare, entertainment, and natural attractions. Our location guide provides context about different Las Vegas areas and their characteristics.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Visual Resources</h3>
              <p>
                Video tours and maps provide visual ways to explore communities from anywhere. These resources are particularly valuable for out-of-state buyers who want to begin their research remotely before scheduling in-person visits.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">How to Use This Guide Effectively</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This guide is designed to be used at any stage of your Las Vegas 55+ home search, from initial research through final decision-making. Understanding how to use different sections effectively helps you get maximum value from the information provided.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">For Early-Stage Research</h3>
            <p>
              If you're just beginning to explore Las Vegas 55+ communities, start with the overview section to understand the Las Vegas market and what makes it appealing for active adults. Then use the map and community comparison resources to get a sense of what's available and where communities are located.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">For Narrowing Options</h3>
            <p>
              As you develop clearer preferences, use amenity-specific guides (like pickleball or gated communities) to identify communities that offer features you prioritize. These focused guides help you efficiently narrow down from the many excellent options available.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">For Final Evaluations</h3>
            <p>
              When you're evaluating specific communities, use video tours, detailed community pages, and location guides to thoroughly understand each option. Combine guide information with in-person visits and discussions with our team to make confident final decisions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Get Personalized Guidance</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              While this guide provides comprehensive information to help you explore Las Vegas 55+ communities independently, our team is here to provide personalized guidance tailored to your specific needs and preferences. We can help you interpret guide information, answer questions about specific communities, and develop customized search strategies.
            </p>
            <p>
              Contact us to discuss your Las Vegas 55+ home search, learn about communities that might match your preferences, and get expert guidance that complements the information in this guide. Our specialized knowledge of Las Vegas 55+ communities ensures you receive insights that help you make the best possible decisions about your active adult living.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/homes-for-sale">Search Homes</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
