import Link from 'next/link'
import { PlayCircle, Home, MapPin, Award, Users, Activity } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'

export const metadata = {
  title: 'Las Vegas 55+ Communities Videos | Virtual Tours & Community Videos | Complete Collection',
  description: 'Watch videos and virtual tours of Las Vegas 55+ communities. Explore communities through video before visiting in person. Comprehensive video collection showcasing active adult living.',
  keywords: ['Las Vegas 55+ videos', 'virtual tours 55+ communities', 'Las Vegas active adult video tours', '55+ community walkthroughs'],
}

export default function VideosPage() {
  const featuredCommunities = lasVegasCommunities.filter(c => c.featured).slice(0, 9)

  const videoCategories = [
    {
      title: 'Community Tours',
      description: 'Comprehensive tours of Las Vegas 55+ communities showcasing amenities, architecture, and lifestyle',
      videos: [
        { title: 'Sun City Summerlin Community Tour', community: 'Sun City Summerlin', href: '/communities/sun-city-summerlin' },
        { title: 'Sun City Anthem Overview', community: 'Sun City Anthem', href: '/communities/sun-city-anthem' },
        { title: 'Siena Luxury Living Tour', community: 'Siena', href: '/communities/siena' },
        { title: 'Desert Shores Waterfront Living', community: 'Desert Shores', href: '/communities/desert-shores' },
        { title: 'Regency at Summerlin Community Tour', community: 'Regency at Summerlin', href: '/communities/regency-summerlin' },
      ],
    },
    {
      title: 'Home Tours',
      description: 'Detailed walkthroughs of homes in Las Vegas 55+ communities showcasing floor plans and design',
      videos: [
        { title: 'Sun City Summerlin St. Tropez Floorplan Tour', community: 'Sun City Summerlin', href: '/communities/sun-city-summerlin' },
        { title: 'Modern Living in Sun City Anthem', community: 'Sun City Anthem', href: '/communities/sun-city-anthem' },
        { title: 'Luxury Home Tour at Siena', community: 'Siena', href: '/communities/siena' },
        { title: 'Updated Home Features in Las Vegas 55+ Communities', community: 'Various', href: '/communities' },
      ],
    },
    {
      title: 'Lifestyle & Amenities',
      description: 'Explore the active adult lifestyle and comprehensive amenities available in Las Vegas 55+ communities',
      videos: [
        { title: 'Golf Course Living in Las Vegas 55+ Communities', community: 'Various', href: '/communities' },
        { title: 'Fitness & Wellness Amenities Tour', community: 'Various', href: '/communities' },
        { title: 'Pickleball and Sports Facilities', community: 'Various', href: '/las-vegas-55-guide/top-10-pickleball' },
        { title: 'Social Activities and Clubs', community: 'Various', href: '/communities' },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/las-vegas-55-guide" className="hover:text-foreground">Las Vegas 55+ Guide</Link> / Videos
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Las Vegas 55+ Communities Videos | Virtual Tours & Community Collections</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Explore Las Vegas 55+ communities through our comprehensive video collection. Watch community tours, home walkthroughs, and lifestyle videos to help you find your perfect active adult community. Our video library provides detailed insights into communities, amenities, and the active adult lifestyle.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Whether you're beginning your research or narrowing down your options, our videos offer an immersive way to explore Las Vegas 55+ communities from anywhere. These virtual tours and community showcases help you understand what makes each community unique before scheduling in-person visits.
        </p>
      </div>

      <div className="max-w-6xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Watch Las Vegas 55+ Community Videos?</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Video content provides an invaluable resource for active adults researching Las Vegas 55+ communities, especially for those relocating from other states or unable to visit communities in person immediately. Our video collection offers detailed glimpses into community life, amenities, home styles, and the overall lifestyle that each community provides.
            </p>
            <p>
              Watching community videos allows you to efficiently explore multiple communities, understand their unique characteristics, and identify which communities align with your preferences before investing time in in-person visits. This video research helps you make more informed decisions and focus your in-person tours on communities that truly match your vision for active adult living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <PlayCircle className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Comprehensive Community Overviews</h3>
              <p className="text-muted-foreground">
                Our community tour videos showcase amenities, architecture, neighborhoods, and overall community atmosphere, giving you a complete picture of what life is like in each Las Vegas 55+ community.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Home className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Detailed Home Walkthroughs</h3>
              <p className="text-muted-foreground">
                Home tour videos provide detailed walkthroughs of floor plans, features, and design elements, helping you understand different home options available within each community without visiting in person.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Activity className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Lifestyle Insights</h3>
              <p className="text-muted-foreground">
                Lifestyle videos showcase activities, amenities in use, social events, and the day-to-day experience of active adult living in Las Vegas 55+ communities, helping you understand the community culture.
              </p>
            </div>
          </div>
        </section>

        {videoCategories.map((category) => (
          <section key={category.title}>
            <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">{category.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.videos.map((video) => (
                <Link
                  key={video.title}
                  href={video.href}
                  className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow block"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center relative">
                    <PlayCircle className="h-16 w-16 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{video.title}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      {video.community}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-bold mb-6">Featured Las Vegas 55+ Communities Video Collection</h2>
          <div className="space-y-4 text-muted-foreground mb-6">
            <p>
              Explore videos from Las Vegas's premier 55+ communities, each offering unique characteristics, amenities, and lifestyle options. These featured communities represent some of the most sought-after active adult living destinations in the Las Vegas area, and our video collection helps you understand what makes each community special.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCommunities.map((community) => (
              <Link
                  key={community.slug}
                  href={`/communities/${community.slug}`}
                  className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow block"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center relative">
                    <PlayCircle className="h-12 w-12 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{community.name}</h3>
                    <p className="text-sm text-muted-foreground">{community.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Making the Most of Video Tours</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              While video tours provide excellent preliminary information about Las Vegas 55+ communities, they're most valuable when combined with in-person visits. Use videos to narrow down your options, identify communities that interest you most, and prepare questions for your in-person tours.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">What to Look for in Community Videos</h3>
            <p>
              When watching community tour videos, pay attention to the overall atmosphere, architectural styles, amenity quality, and the sense of community activity. Notice how residents are portrayed, what activities are featured, and how the community presents itself. These details provide insights into the community culture and priorities.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Using Video Tours for Long-Distance Research</h3>
            <p>
              For active adults relocating from other states, video tours are particularly valuable as they allow you to begin your research remotely. Our comprehensive video collection helps you identify communities worth visiting in person, saving time and travel costs while ensuring you focus on communities that truly match your preferences.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Complementing Video with In-Person Visits</h3>
            <p>
              Video tours provide excellent preparation for in-person visits. After watching videos, you'll arrive at communities with better questions, clearer priorities, and a deeper understanding of what to look for during your tours. This preparation enhances the value of your in-person visits and helps you make more informed decisions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Schedule In-Person Tours</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              After watching our video collection and identifying communities that interest you, the next step is scheduling in-person tours. Our team can help coordinate visits to multiple communities, arrange meetings with community representatives, and provide guided tours that highlight aspects most relevant to your preferences.
            </p>
            <p>
              Contact us to schedule personalized tours of Las Vegas 55+ communities that caught your attention in our video collection. We'll help you experience these communities firsthand and answer questions that arise after viewing the videos.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/communities"
              className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
            >
              Explore All Communities
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
