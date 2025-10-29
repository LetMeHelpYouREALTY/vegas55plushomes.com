import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Shield, Users, MapPin } from 'lucide-react'

export default function HomePage() {
  const featuredCommunities = [
    {
      name: 'Sun City Summerlin',
      description: 'Premier 55+ gated community with golf courses and resort-style amenities',
      href: '/communities/sun-city-summerlin',
      image: '/communities/sun-city-summerlin.jpg',
    },
    {
      name: 'Sun City Anthem',
      description: 'Active adult community featuring championship golf and fitness centers',
      href: '/communities/sun-city-anthem',
      image: '/communities/sun-city-anthem.jpg',
    },
    {
      name: 'Siena',
      description: 'Luxury 55+ community with Tuscan-inspired architecture and world-class amenities',
      href: '/communities/siena',
      image: '/communities/siena.jpg',
    },
  ]

  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Home Search',
      description: 'Access advanced search tools to find your perfect Las Vegas 55+ home',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Expert Guidance',
      description: 'Work with experienced 55+ real estate specialists who know Las Vegas communities',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Insights',
      description: 'Deep local knowledge of Las Vegas 55+ communities, amenities, and lifestyles',
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Local Expertise',
      description: 'Comprehensive understanding of Las Vegas real estate market trends',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Find Your Las Vegas 55+ Dream Home
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your trusted Las Vegas 55+ real estate specialists. Discover premier active adult communities including Sun City Summerlin, Sun City Anthem, Siena, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/homes-for-sale">Search Homes</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/communities">Explore Communities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Vegas 55 Plus Homes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise in Las Vegas 55+ communities to help you find the perfect home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg border bg-card">
                <div className="flex justify-center mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Las Vegas 55+ Communities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore premier active adult communities designed for your ideal retirement lifestyle
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {community.name}
                  </h3>
                  <p className="text-muted-foreground">{community.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/communities">View All Communities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our Las Vegas 55+ real estate specialists today to start your home search journey
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
