import Link from 'next/link'
import { Home, Bed, Bath, Square, ArrowRight } from 'lucide-react'
import SitePhoto from '@/components/site-photo'
import { siteImages } from '@/lib/site-images'

export const metadata = {
  title: 'Sun City Summerlin Floorplans | Complete Guide to Home Options | Las Vegas 55+',
  description: 'Explore all floorplans available in Sun City Summerlin. From spacious detached homes to cozy attached villas, discover 17 distinct floor plans ranging from 1,200 to 3,500+ square feet.',
  keywords: ['Sun City Summerlin floorplans', 'Las Vegas 55+ home plans', 'Sun City Summerlin home designs', 'active adult floorplans'],
}

export default function SunCitySummerlinFloorplansPage() {
  const floorplans = [
    { 
      name: 'Barcelona', 
      beds: 2, 
      baths: 2, 
      sqft: '1,200 - 1,400', 
      type: 'Attached Villa',
      description: 'Perfect starter home or downsizing option with efficient single-story layout'
    },
    { 
      name: 'Monaco', 
      beds: 2, 
      baths: 2.5, 
      sqft: '1,400 - 1,600', 
      type: 'Detached',
      description: 'Spacious detached home ideal for couples seeking more space and privacy'
    },
    { 
      name: 'Tuscany', 
      beds: 2, 
      baths: 2, 
      sqft: '1,600 - 1,800', 
      type: 'Detached',
      description: 'Traditional single-story design with open floor plan perfect for entertaining'
    },
    { 
      name: 'Provencal', 
      beds: 3, 
      baths: 2, 
      sqft: '1,800 - 2,000', 
      type: 'Detached',
      description: 'Three-bedroom option ideal for hosting guests or maintaining a home office'
    },
    { 
      name: 'Versailles', 
      beds: 3, 
      baths: 2.5, 
      sqft: '2,000 - 2,400', 
      type: 'Detached',
      description: 'Spacious layout with premium features and ample room for all your needs'
    },
    { 
      name: 'Chateau', 
      beds: 3, 
      baths: 3, 
      sqft: '2,400 - 3,000+', 
      type: 'Detached Luxury',
      description: 'Luxury estate-style home with premium finishes and expansive living spaces'
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/communities" className="hover:text-foreground">Communities</Link> / <Link href="/communities/sun-city-summerlin" className="hover:text-foreground">Sun City Summerlin</Link> / Floorplans
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sun City Summerlin Floorplans | Complete Guide to Home Options</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Explore all available floorplans in Sun City Summerlin. From spacious detached homes to cozy attached villas, discover 17 distinct floor plans designed specifically for active adult living, ranging from approximately 1,200 square feet to over 3,500 square feet.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Each floorplan at Sun City Summerlin is thoughtfully designed with single-story living, open layouts, and features that support active adult lifestyles. Whether you're downsizing, seeking a maintenance-free attached home, or desiring a spacious estate, Sun City Summerlin offers options to match your preferences and budget.
        </p>
      </div>

      <div className="max-w-6xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Available Floorplans at Sun City Summerlin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floorplans.map((plan) => (
              <div key={plan.name} className="rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow">
                <SitePhoto
                  image={siteImages.interior}
                  alt={`${plan.name} single-story 55+ floor plan style home interior in Sun City Summerlin, Las Vegas`}
                  className="aspect-video rounded mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4" />
                    <span>{plan.beds} Bedroom{plan.beds > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-4 w-4" />
                    <span>{plan.baths} Bathroom{plan.baths > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="h-4 w-4" />
                    <span>{plan.sqft} sq ft</span>
                  </div>
                  <p className="text-primary font-medium mt-2">{plan.type}</p>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Understanding Sun City Summerlin Floor Plan Options</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Sun City Summerlin offers 17 distinct floor plans designed specifically for active adult living, ranging from efficient attached villas to spacious luxury homes. Understanding the differences between floor plan types helps you identify options that match your lifestyle, budget, and preferences.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Attached Villas</h3>
            <p>
              Attached villas at Sun City Summerlin provide efficient, low-maintenance living options perfect for downsizing or seeking maximum convenience. These homes typically feature single-story layouts, shared walls with neighbors, and exterior maintenance handled by the homeowner association. Attached villas offer excellent value and appeal to active adults who prioritize low-maintenance living and want to maximize time spent enjoying amenities and activities rather than maintaining property.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Detached Homes</h3>
            <p>
              Detached homes at Sun City Summerlin offer more privacy and space while still benefiting from community amenities and maintenance services. These single-family homes provide yards, more privacy, and typically larger living spaces than attached options. Detached homes appeal to active adults who want the benefits of 55+ community living while maintaining more traditional home characteristics and privacy.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Luxury Estate Homes</h3>
            <p>
              Luxury estate homes at Sun City Summerlin represent the community's largest and most premium options, featuring expansive living spaces, premium finishes, and impressive features. These homes often include spacious master suites, gourmet kitchens, outdoor living areas, and other luxury touches that appeal to active adults seeking the finest in 55+ community living. Estate homes provide exceptional comfort and space for entertaining, hobbies, and enjoying the active adult lifestyle.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Floor Plan Features and Design Principles</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              All Sun City Summerlin floor plans are designed with active adult living in mind, incorporating features and layouts that support comfortable, convenient lifestyles. Understanding these design principles helps you appreciate what makes these homes ideal for active retirement living.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Single-Story Living</h3>
            <p>
              All Sun City Summerlin homes feature single-story designs that eliminate stairs and provide convenient, accessible living spaces. This design approach appeals to active adults who want to avoid stairs while aging in place and provides convenience for daily living that many residents value.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Open Floor Plans</h3>
            <p>
              Most floor plans feature open layouts that connect living, dining, and kitchen areas, creating spacious feeling homes that facilitate entertaining and daily living. These open designs allow for flexible furniture arrangements and create social spaces that accommodate gatherings with family and friends.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Master Suite Design</h3>
            <p>
              Floor plans prioritize master suites, typically featuring spacious bedrooms, ample storage, and well-appointed bathrooms. Many plans position master suites for privacy while keeping them accessible from main living areas, balancing comfort and convenience.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Outdoor Living Spaces</h3>
            <p>
              Many floor plans include patios, courtyards, or covered outdoor areas that extend living space outdoors and take advantage of Las Vegas's favorable climate. These outdoor spaces provide opportunities for relaxation, entertaining, and enjoying the desert environment.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Choosing the Right Floor Plan for Your Lifestyle</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Selecting the right floor plan involves considering your lifestyle, space needs, entertaining preferences, and long-term plans. Understanding how different floor plans support various lifestyles helps you identify options that truly match your vision for active adult living.
            </p>
            <p>
              Consider how you'll use your home daily, whether you frequently host guests, what hobbies or activities you'll pursue at home, and whether you need space for a home office or dedicated hobby room. These factors influence which floor plan characteristics matter most and help you prioritize when evaluating options.
            </p>
            <p>
              Our team can help you explore available floor plans, understand the characteristics of different options, and identify plans that match your specific needs and preferences. We can also show you homes with various floor plans during your search, helping you experience different layouts firsthand.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">View Available Homes with These Floor Plans</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Ready to see these floor plans in person? Our team can help you find available homes featuring the floor plans that interest you most. We can schedule tours of homes with specific floor plans, allowing you to experience the layouts and features firsthand before making decisions.
            </p>
            <p>
              Contact us to explore available homes at Sun City Summerlin, learn about current inventory, and schedule tours of homes with floor plans that match your preferences. We're here to help you find the perfect home that supports your vision for active adult living.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/communities/sun-city-summerlin/homes-for-sale"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              View Available Homes
            </Link>
            <Link
              href="/communities/sun-city-summerlin/schedule-tour"
              className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
            >
              Schedule a Tour
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
