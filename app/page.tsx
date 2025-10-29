import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Shield, Users, MapPin, Heart, Trophy, Calendar, CheckCircle } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'

export const metadata = {
  title: 'Las Vegas 55+ Real Estate | Award-Winning Buyer\'s Representative Dr. Jan Duffy',
  description: 'Award-winning realtor Dr. Jan Duffy - Your trusted Las Vegas 55+ real estate specialist and buyer\'s representative. Expert guidance for active adults seeking homes in premier communities including Sun City Summerlin, Sun City Anthem, Del Webb Lake Las Vegas, and more.',
}

export default function HomePage() {
  const featuredCommunities = lasVegasCommunities
    .filter(c => c.featured)
    .slice(0, 3)
    .map(c => ({
      name: c.name,
      description: c.description,
      href: `/communities/${c.slug}`,
      image: `/communities/${c.slug}.jpg`,
      location: c.location,
      homesForSale: c.homesForSale,
    }))

  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Advanced Home Search',
      description: 'Access comprehensive search tools to find your perfect Las Vegas 55+ home with filters for price, location, amenities, and more',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Expert Real Estate Guidance',
      description: 'Work with experienced 55+ real estate specialists who possess deep knowledge of Las Vegas communities and market trends',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Insights & Expertise',
      description: 'Benefit from extensive local knowledge of Las Vegas 55+ communities, their unique amenities, lifestyles, and neighborhood characteristics',
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Comprehensive Market Understanding',
      description: 'Gain insights from professionals with thorough understanding of Las Vegas real estate market trends, pricing, and investment potential',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Find Your Las Vegas 55+ Dream Home | Premier Active Adult Communities
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Award-winning realtor Dr. Jan Duffy - Your trusted buyer's representative for Las Vegas 55+ real estate. Expert guidance for active adults seeking homes in premier active adult communities including Del Webb Lake Las Vegas, Sun City Summerlin, Sun City Anthem, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/homes-for-sale">Search Homes For Sale</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/communities">Explore All Communities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Why Las Vegas is the Perfect Destination for 55+ Living</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Las Vegas has emerged as one of America's premier destinations for active adults seeking an exceptional retirement lifestyle. Beyond the world-famous Strip, the Las Vegas Valley offers an ideal combination of year-round sunshine, world-class amenities, vibrant cultural scene, and outstanding value that makes it perfect for 55+ living.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              The Las Vegas metropolitan area, including Henderson and North Las Vegas, is home to some of the nation's finest 55+ active adult communities. These master-planned communities are specifically designed for residents 55 and better, offering resort-style amenities, championship golf courses, state-of-the-art fitness centers, and endless opportunities for social engagement and active living.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Whether you're seeking a luxury lifestyle in a gated community like Siena, an active retirement in Sun City Summerlin, or a peaceful haven in Henderson's Sun City Anthem, Las Vegas offers diverse options to match every preference and budget. Our team specializes exclusively in helping active adults find their perfect home in these exceptional communities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Award-Winning Buyer's Representative Dr. Jan Duffy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              As an award-winning realtor and dedicated buyer's representative, Dr. Jan Duffy specializes exclusively in representing buyers purchasing new construction homes in Las Vegas 55+ communities. Our specialized expertise ensures you receive personalized, expert guidance throughout your home search journey, protecting your interests and saving you money.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Service Details */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Comprehensive Real Estate Services for Active Adults</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border bg-card">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Community Expertise
                </h4>
                <p className="text-muted-foreground">
                  We possess intimate knowledge of each Las Vegas 55+ community's unique characteristics, from amenity packages and lifestyle offerings to homeowner association structures and investment potential.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Personalized Guidance
                </h4>
                <p className="text-muted-foreground">
                  Every client receives individualized attention tailored to their specific needs, preferences, and budget. We take time to understand your vision for retirement living.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Market Intelligence
                </h4>
                <p className="text-muted-foreground">
                  Stay informed with current market trends, pricing data, and investment insights specific to Las Vegas 55+ real estate to make confident decisions.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Smooth Transaction Process
                </h4>
                <p className="text-muted-foreground">
                  From initial search through closing and beyond, we ensure a seamless, stress-free experience with clear communication every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Las Vegas 55+ Communities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Explore premier active adult communities designed for your ideal retirement lifestyle. Each community offers unique amenities, architectural styles, and social opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCommunities.map((community) => (
              <Link
                key={community.href}
                href={community.href}
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
                </div>
              </Link>
            ))}
          </div>

          {/* Community Details */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">Discover What Makes Las Vegas 55+ Communities Exceptional</h3>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Las Vegas 55+ communities represent the pinnacle of active adult living, offering residents an unparalleled combination of luxury amenities, social engagement opportunities, and low-maintenance lifestyles. These master-planned communities are designed specifically for active adults who want to maximize their retirement years through fitness, recreation, social connections, and cultural enrichment.
              </p>
              <p>
                From championship golf courses to state-of-the-art fitness centers, from pickleball courts to arts and crafts studios, Las Vegas 55+ communities provide everything you need to maintain an active, fulfilling lifestyle. Many communities feature multiple recreation centers, swimming pools, restaurants, libraries, and computer labs, all within walking distance or a short golf cart ride from your home.
              </p>
              <p>
                The architectural diversity across Las Vegas 55+ communities is equally impressive. Whether you prefer single-story attached villas for maintenance-free living, spacious detached homes for entertaining, or luxury estate-style residences, you'll find options to match your preferences. Many communities offer homes designed with accessibility in mind, featuring single-level living, wide doorways, and thoughtful layouts that accommodate changing needs.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/communities">View All Las Vegas 55+ Communities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">The Benefits of Las Vegas 55+ Community Living</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  World-Class Amenities
                </h3>
                <p className="text-muted-foreground">
                  Las Vegas 55+ communities feature amenities that rival luxury resorts, including multiple golf courses, fitness centers with personal trainers, swimming pools, tennis and pickleball courts, and spas. These facilities are typically included with your homeowner association fees, providing exceptional value.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Active Social Scene
                </h3>
                <p className="text-muted-foreground">
                  Join hundreds of clubs and organizations based on your interests, from book clubs and gardening groups to travel clubs and volunteer organizations. The social calendar is always full with activities, events, and outings designed to help you meet like-minded neighbors.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  Low-Maintenance Lifestyle
                </h3>
                <p className="text-muted-foreground">
                  Say goodbye to yard work, exterior maintenance, and home repairs. Most Las Vegas 55+ communities handle landscaping, exterior painting, roof maintenance, and common area upkeep, allowing you to focus on enjoying your retirement rather than maintaining a property.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Security & Peace of Mind
                </h3>
                <p className="text-muted-foreground">
                  Gated communities provide 24/7 security, controlled access, and a sense of safety that allows you to travel worry-free. Many communities also feature security patrols and emergency response systems for added peace of mind.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-center">Why Las Vegas Offers Unmatched Value for Active Adults</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Las Vegas consistently ranks as one of the most affordable major metropolitan areas for retirees, particularly when compared to coastal California communities. The state of Nevada offers favorable tax benefits for retirees, including no state income tax, no inheritance tax, and property tax exemptions for qualified seniors.
              </p>
              <p>
                The cost of living in Las Vegas is significantly lower than in many other retirement destinations, making your retirement savings go further. Healthcare facilities are world-class, with numerous hospitals, specialty clinics, and medical centers throughout the valley. The Las Vegas area is also home to excellent shopping, dining, and entertainment options, all while maintaining that small-community feel within your 55+ community.
              </p>
              <p>
                Climate is another major advantage of Las Vegas living. With over 300 days of sunshine annually and mild winters, you can enjoy outdoor activities year-round. This makes the golf courses, walking trails, outdoor pools, and patio living spaces that are hallmarks of 55+ communities particularly enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Getting Started: Your Journey to Las Vegas 55+ Living</h2>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Explore Communities Online</h3>
                  <p className="text-muted-foreground">
                    Begin by browsing our comprehensive guide to Las Vegas 55+ communities. Learn about amenities, home types, locations, and pricing. Our detailed community pages provide virtual tours, floor plans, and market updates to help you narrow your search.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Schedule Virtual or In-Person Tours</h3>
                  <p className="text-muted-foreground">
                    Once you've identified communities of interest, schedule personalized tours with our team. We offer both virtual tours for out-of-state buyers and in-person tours for local buyers, always prioritizing your convenience and safety.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Work with Our Expert Team</h3>
                  <p className="text-muted-foreground">
                    Our Las Vegas 55+ real estate specialists will guide you through every step, from initial search through closing and beyond. We handle negotiations, inspections, paperwork, and ensure a smooth transaction process.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-primary/5 p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Begin Your Search?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our team is here to help you find your perfect Las Vegas 55+ home. Contact us today to schedule a consultation and start your journey toward an exceptional active adult lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/homes-for-sale">Search Available Homes</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Las Vegas 55+ Dream Home?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our Las Vegas 55+ real estate specialists today to start your home search journey. We're committed to helping you find the perfect active adult community that matches your lifestyle, budget, and preferences.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
