import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Search, MapPin, DollarSign, Bed, Bath, Filter } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'
import HomeSearchFilters from '@/components/home-search-filters'

export const metadata = {
  title: 'Las Vegas 55+ Homes For Sale | Search Active Adult Communities | Vegas 55 Plus Homes',
  description: 'Search Las Vegas 55+ homes for sale in premier active adult communities. Find your perfect home in Sun City Summerlin, Sun City Anthem, Siena, and more. Expert guidance for active adult homebuyers.',
  keywords: ['Las Vegas 55+ homes for sale', 'active adult homes Las Vegas', '55+ homes for sale', 'Las Vegas retirement homes', 'Sun City Summerlin homes'],
}

export default function HomesForSalePage() {
  const allCommunities = lasVegasCommunities

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Las Vegas 55+ Homes For Sale | Search Premier Active Adult Communities</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Search for your perfect 55+ home in Las Vegas. Our comprehensive home search helps you find homes in premier active adult communities throughout the Las Vegas Valley, from Sun City Summerlin to Sun City Anthem, Siena, and beyond.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Whether you're seeking a luxury home in a gated community or an affordable option in a value-oriented community, Las Vegas offers diverse 55+ home options to match every preference and budget. Use our search tools and expert guidance to find your ideal active adult home.
        </p>
      </div>

      <div className="max-w-6xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Search Las Vegas 55+ Homes for Sale</h2>
          <HomeSearchFilters />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Understanding the Las Vegas 55+ Home Market</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              The Las Vegas 55+ home market offers exceptional diversity, from affordable attached villas to luxury single-family estates. Understanding market dynamics, pricing trends, and available inventory helps you make informed decisions when searching for your perfect active adult home.
            </p>
            <p>
              Las Vegas 55+ communities range from mega-communities with thousands of homes and extensive amenities to smaller, more intimate communities with specialized focuses. Each community offers unique home styles, price points, and lifestyle options, making it important to understand what's available before beginning your search.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Market Overview and Pricing Trends</h3>
            <p>
              The Las Vegas 55+ real estate market continues to demonstrate strong fundamentals with steady demand from active adults seeking exceptional retirement living. Home prices range from affordable options under $300,000 in value-oriented communities to luxury homes exceeding $1,000,000 in premium communities, providing options for diverse budgets and preferences.
            </p>
            <p>
              Current market conditions offer opportunities for buyers, with diverse inventory levels across communities and competitive pricing that provides value compared to many other retirement destinations. Understanding current pricing trends and market dynamics helps you evaluate opportunities and make informed purchase decisions.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Home Types and Styles Available</h3>
            <p>
              Las Vegas 55+ communities offer diverse home types including single-story attached villas, detached single-family homes, and condominiums. Architectural styles range from traditional designs to contemporary aesthetics, with many communities featuring Mediterranean, Tuscan, or desert-inspired architecture that reflects the Las Vegas landscape.
            </p>
            <p>
              Most 55+ homes in Las Vegas are designed with single-story living in mind, providing convenient, low-maintenance layouts that appeal to active adults. Common features include open floor plans, updated kitchens, spacious master suites, and outdoor living spaces designed for entertaining and relaxation.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Browse Homes by Las Vegas 55+ Community</h2>
          <div className="space-y-6 mb-8">
            <p className="text-lg text-muted-foreground">
              Each Las Vegas 55+ community offers unique home options, pricing, and amenities. Browse communities to explore available homes and find communities that match your preferences for lifestyle, amenities, and budget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCommunities.slice(0, 9).map((community) => (
                <Link
                  key={community.slug}
                  href={`/communities/${community.slug}`}
                  className="group rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Home className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors mb-1">
                        {community.name}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {community.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{community.description}</p>
                  {community.homesForSale && (
                    <p className="text-sm text-primary font-medium">{community.homesForSale} Homes Available</p>
                  )}
                  {community.priceRange && (
                    <p className="text-xs text-muted-foreground mt-1">{community.priceRange}</p>
                  )}
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button asChild variant="outline" size="lg">
                <Link href="/communities">View All Communities</Link>
              </Button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">What to Look for When Searching for 55+ Homes</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Searching for a 55+ home requires consideration of factors beyond basic property features. Understanding community amenities, homeowner association structures, and lifestyle characteristics helps you find homes that truly match your vision for active adult living.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Home Features and Layouts</h3>
            <p>
              Single-story living is a priority for most active adults, and Las Vegas 55+ communities excel in providing convenient, low-maintenance layouts. Look for homes with open floor plans that facilitate entertaining, master suites on the main level, and thoughtful designs that accommodate aging in place if desired.
            </p>
            <p>
              Updated kitchens, modern bathrooms, energy-efficient systems, and outdoor living spaces enhance enjoyment and value. Consider whether homes have been recently renovated, feature modern finishes, or require updates, as this impacts both immediate enjoyment and long-term value.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Community Amenities and Lifestyle</h3>
            <p>
              Beyond individual home features, evaluate the community amenities and lifestyle that accompany your home purchase. Golf courses, fitness centers, pools, social clubs, and activity calendars all contribute to your daily life and should factor into your home search and decision-making process.
            </p>
            <p>
              Understanding what amenities are included with your homeowner association fees versus what requires additional memberships or fees helps you evaluate the true cost and value of living in each community. Our team can help you understand these details for any community you're considering.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Location and Neighborhood Characteristics</h3>
            <p>
              Location matters for 55+ homes, affecting everything from daily convenience to long-term value. Consider proximity to healthcare, shopping, entertainment, and natural attractions. Also evaluate neighborhood characteristics within communities, as large communities often have distinct neighborhoods with different feels and characteristics.
            </p>
            <p>
              Some neighborhoods within communities offer specific advantages like golf course views, proximity to amenities, quieter settings, or more active social scenes. Understanding these neighborhood differences helps you find homes in locations that match your preferences within your chosen communities.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Working with Our Las Vegas 55+ Home Search Specialists</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Our specialized team understands the unique aspects of searching for and purchasing 55+ homes in Las Vegas. We provide comprehensive support throughout your home search, from identifying communities that match your preferences to evaluating specific homes and navigating the purchase process.
            </p>
            <p>
              We create customized search strategies based on your specific criteria, preview homes before showing them to save your valuable time, and provide detailed market analysis including comparable sales and pricing trends. Our deep knowledge of Las Vegas 55+ communities means we can answer detailed questions about amenities, lifestyle, and community characteristics that help you make informed decisions.
            </p>
            <p>
              For out-of-state buyers, we offer additional support including virtual tours, comprehensive documentation, and coordination of visit logistics. Our goal is to make your Las Vegas 55+ home search as efficient and successful as possible, regardless of where you're starting your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <Search className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customized Search Strategies</h3>
              <p className="text-muted-foreground">
                We develop personalized search strategies based on your specific criteria, preferences, and budget. This targeted approach ensures you see homes that truly match your needs rather than wasting time on properties that don't fit your requirements.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Filter className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Detailed Market Analysis</h3>
              <p className="text-muted-foreground">
                For every home you're considering, we provide comprehensive market analysis including comparable sales, pricing trends, and insights into how that property fits within the broader community market. This data-driven approach helps you make informed purchase decisions.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Get Started with Your Las Vegas 55+ Home Search</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Ready to begin searching for your perfect Las Vegas 55+ home? Contact our team today to discuss your preferences, learn about available inventory, and develop a customized search strategy tailored to your unique needs. We're here to help you find the perfect home in one of Las Vegas's premier active adult communities.
            </p>
            <p>
              Whether you're ready to start viewing homes or you're still in the research phase, our team provides expert guidance and comprehensive support. We can answer questions about communities, help you understand market conditions, and guide you through every step of finding and purchasing your perfect Las Vegas 55+ home.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/communities">Explore Communities</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
