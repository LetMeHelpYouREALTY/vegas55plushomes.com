import Link from 'next/link'
import { Home, Shield, Users, Trophy, Heart, MapPin, CheckCircle, ArrowRight, Award } from 'lucide-react'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import FaqSection from '@/components/faq-section'
import { siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import { generatePageGraph, generateResidenceCommunitySchema } from '@/lib/structured-data'
import { whySunCityFaqs } from '@/lib/page-faqs'

export const metadata = buildMetadata({
  title: 'Why Sun City Summerlin? | Las Vegas 55+ Community Guide | Dr. Jan Duffy',
  description:
    'Why buyers choose Sun City Summerlin: Summerlin location, three golf courses, four recreation centers, and gated 55+ living. Call (702) 996-3758.',
  path: '/communities/sun-city-summerlin/why-sun-city-summerlin',
  image: siteImages.golf,
  keywords: ['why Sun City Summerlin', 'Las Vegas 55+ community', 'Summerlin active adult living'],
})

export default function WhySunCitySummerlinPage() {
  const reasons = [
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Premier Location',
      description: 'Strategically located in Summerlin, one of Las Vegas\'s most prestigious areas, with easy access to shopping, dining, entertainment, healthcare, and master-plan amenities. The Summerlin location combines the specialized focus of 55+ living with access to broader community benefits.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Gated Access & Privacy',
      description: 'Controlled-access entries and on-site staffing at the gates. Confirm guest, vendor, and HOA access rules when you tour so you know how daily arrivals work.',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'World-Class Amenities',
      description: 'Three championship golf courses, four recreation centers, state-of-the-art fitness facilities, pools, tennis courts, pickleball courts, and over 80 clubs create a resort-style living experience that rivals the finest active adult communities anywhere.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Active Social Scene',
      description: 'Hundreds of clubs and organizations covering diverse interests offer endless opportunities to meet neighbors, pursue hobbies, and build lasting friendships. The vibrant social scene ensures residents can be as active and engaged as they wish in community life.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Low-Maintenance Living',
      description: 'Homes designed for easy living with low-maintenance exteriors and HOA services that handle landscaping and common area maintenance, allowing more time for enjoyment, recreation, and relaxation rather than property upkeep.',
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Exceptional Value',
      description: 'Competitive pricing combined with outstanding amenities, lifestyle benefits, and comprehensive services make Sun City Summerlin an exceptional value proposition. The community offers luxury active adult living at accessible price points across diverse home options.',
    },
  ]

  return (
    <div>
      <JsonLd
        id="why-scs-graph"
        data={generatePageGraph({
          pageType: 'WebPage',
          name: 'Why Sun City Summerlin',
          description:
            'Location, golf, recreation centers, and gated 55+ living in Summerlin, Las Vegas.',
          path: '/communities/sun-city-summerlin/why-sun-city-summerlin',
          image: siteImages.golf,
          dateModified: '2026-08-30',
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Communities', url: '/communities' },
            { name: 'Sun City Summerlin', url: '/communities/sun-city-summerlin' },
            { name: 'Why Sun City Summerlin', url: '/communities/sun-city-summerlin/why-sun-city-summerlin' },
          ],
          faqs: whySunCityFaqs,
          extra: [
            generateResidenceCommunitySchema({
              name: 'Sun City Summerlin',
              description:
                'Largest Las Vegas 55+ community, with golf, four recreation centers, and a Summerlin location near Red Rock Canyon.',
              url: '/communities/sun-city-summerlin',
              image: siteImages.golf,
              city: 'Las Vegas',
              amenities: [
                'Three championship golf courses',
                'Four recreation centers',
                'Gated entries',
                '80+ clubs',
              ],
            }),
          ],
        })}
      />
      <PageHero
        image={siteImages.golf}
        title="Why Sun City Summerlin?"
        subtitle="About 7,700 homes, three golf courses, and four recreation centers in Summerlin, Las Vegas. Tour with Dr. Jan Duffy at (702) 996-3758."
        breadcrumbs={[
          { label: 'Communities', href: '/communities' },
          { label: 'Sun City Summerlin', href: '/communities/sun-city-summerlin' },
          { label: 'Why Sun City Summerlin' },
        ]}
        primaryCTA={{ href: '/contact', text: 'Ask about Sun City Summerlin' }}
        secondaryCTA={{ href: '/communities/sun-city-summerlin/homes-for-sale', text: 'Homes for sale' }}
      />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Sun City Summerlin stands out as one of Las Vegas's premier 55+ communities, offering an unmatched combination of location, amenities, lifestyle, and value. Discover why so many active adults choose to call this exceptional community home.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Choosing where to live during your active retirement years is one of life's most significant decisions. Understanding what makes Sun City Summerlin special helps you determine if this community matches your vision for exceptional active adult living.
        </p>
      </div>

      <div className="max-w-6xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Top Reasons to Choose Sun City Summerlin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {reasons.map((reason, index) => (
              <div key={index} className="rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Premier Location in Summerlin</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Sun City Summerlin's location within the prestigious Summerlin master plan provides residents with the best of both worlds: the specialized focus and amenities of a 55+ community, plus access to Summerlin's extensive amenities, shopping, dining, healthcare, and entertainment options.
            </p>
            <p>
              Summerlin consistently ranks among America's best places to live, offering master-planned amenities, beautiful parks, extensive trail systems, and a reputation for quality that enhances property values and quality of life. Living in Sun City Summerlin means enjoying this exceptional location while benefiting from 55+ community features designed specifically for active adults.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Location Advantages</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Access to Summerlin master-plan amenities including parks, trails, and recreation facilities</li>
              <li>Proximity to shopping centers, restaurants, and entertainment venues</li>
              <li>Convenient access to healthcare facilities and medical centers</li>
              <li>Easy access to major highways and McCarran International Airport</li>
              <li>Prestigious address that enhances property values and lifestyle quality</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">World-Class Amenities and Facilities</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Sun City Summerlin's amenity package rivals luxury resorts, providing residents with everything needed for an active, engaged, and fulfilling retirement lifestyle. With three championship golf courses, four recreation centers, state-of-the-art fitness facilities, and hundreds of clubs and activities, the community offers more than most could imagine needing.
            </p>
            <p>
              The scale and diversity of amenities at Sun City Summerlin mean residents never have to leave the community to pursue interests, hobbies, fitness, or social activities. Everything from golf and tennis to arts and crafts, from fitness classes to book clubs, from pickleball to woodworking is available within the community gates.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Comprehensive Amenity Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Three Championship Golf Courses</p>
                  <p className="text-sm text-muted-foreground">Year-round golf on meticulously maintained courses with diverse challenges and stunning desert landscapes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Four Recreation Centers</p>
                  <p className="text-sm text-muted-foreground">Multiple centers offering fitness facilities, social spaces, hobby studios, and programming throughout the community.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">State-of-the-Art Fitness</p>
                  <p className="text-sm text-muted-foreground">Modern equipment, group classes, personal training, and wellness programs designed for active adults.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">80+ Clubs & Organizations</p>
                  <p className="text-sm text-muted-foreground">Diverse clubs covering every interest from arts to travel to volunteering, ensuring social connection opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Active, Engaged Lifestyle</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Sun City Summerlin fosters an active, engaged lifestyle where residents pursue interests, develop new hobbies, and build meaningful connections with neighbors who share similar life stages and values. The community's extensive amenities and social opportunities ensure that residents can be as active and engaged as they choose.
            </p>
            <p>
              Whether you're passionate about golf, fitness, arts and crafts, social activities, or quiet relaxation, Sun City Summerlin provides the facilities, programs, and community support to pursue your interests and discover new passions. The vibrant social scene means you'll find neighbors who share your interests and opportunities to engage in ways that bring fulfillment and enjoyment.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Excellent Value and Investment</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Sun City Summerlin offers exceptional value, combining competitive home prices with comprehensive amenities and lifestyle benefits that create an outstanding value proposition. The community's established reputation, desirable location, and extensive amenities support property values while providing exceptional lifestyle benefits.
            </p>
            <p>
              Property values in Sun City Summerlin have historically maintained stability, providing confidence for both buyers seeking homes and owners evaluating their investment. The combination of location, amenities, and community reputation creates a compelling value proposition that makes Sun City Summerlin attractive for active adults seeking both lifestyle benefits and sound real estate investment.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Why Residents Love Sun City Summerlin</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Residents consistently cite the community's comprehensive amenities, active social scene, beautiful homes, and welcoming atmosphere as reasons they chose and love Sun City Summerlin. The combination of resort-style amenities, diverse activities, and neighborly community creates an environment where residents thrive and enjoy their retirement years.
            </p>
            <p>
              The community's size and diversity mean you'll find neighbors who share your interests while enjoying a large enough community to offer extensive amenities and programming. This balance between community feel and comprehensive offerings creates an environment that appeals to many active adults seeking exceptional retirement living.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/communities/sun-city-summerlin/schedule-tour"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Schedule a Tour <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/communities/sun-city-summerlin"
              className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
            >
              Learn More About Sun City Summerlin
            </Link>
          </div>
        </section>
      </div>
    </div>
      <FaqSection faqs={whySunCityFaqs} />
    </div>
  )
}
