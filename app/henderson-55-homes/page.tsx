import Link from 'next/link'
import { Home, MapPin, Award, Shield, Heart, Trophy } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import FaqSection from '@/components/faq-section'
import SitePhoto from '@/components/site-photo'
import { siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import { generatePageGraph, generateItemListSchema } from '@/lib/structured-data'
import { hendersonFaqs } from '@/lib/page-faqs'

export const metadata = buildMetadata({
  title: 'Henderson 55+ Homes For Sale | Sun City Anthem, Del Webb | Dr. Jan Duffy',
  description:
    'Find 55+ homes in Henderson, Nevada — Sun City Anthem, Solera at Anthem, Heritage at Cadence, and Del Webb at Lake Las Vegas. Call Dr. Jan Duffy at (702) 996-3758. Office at 28 Lake Oasis St, Henderson, NV 89011.',
  path: '/henderson-55-homes',
  image: siteImages.henderson,
  keywords: ['Henderson 55+ homes', 'Sun City Anthem', 'Del Webb Lake Las Vegas'],
})

export default function Henderson55HomesPage() {
  const hendersonCommunities = lasVegasCommunities.filter(c => c.city === 'Henderson')

  const pageGraph = generatePageGraph({
    pageType: 'CollectionPage',
    name: 'Henderson 55+ Homes For Sale',
    description:
      '55+ homes in Henderson, Nevada, including Sun City Anthem, Solera at Anthem, and Del Webb at Lake Las Vegas.',
    path: '/henderson-55-homes',
    image: siteImages.henderson,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Henderson 55+ Homes', url: '/henderson-55-homes' },
    ],
    faqs: hendersonFaqs,
    extra: [
      generateItemListSchema({
        name: 'Henderson 55+ Communities',
        description: 'Active adult communities in Henderson, Nevada.',
        items: hendersonCommunities.map((community) => ({
          name: community.name,
          url: `/communities/${community.slug}`,
        })),
      }),
    ],
  })

  return (
    <div>
      <JsonLd id="henderson-page-graph" data={pageGraph} />
      <PageHero
        image={siteImages.henderson}
        title="Henderson 55+ Homes For Sale"
        subtitle="Sun City Anthem, Del Webb at Lake Las Vegas, and Heritage at Cadence sit in Henderson, Nevada’s second-largest city. Call (702) 996-3758. Office: 28 Lake Oasis St."
        breadcrumbs={[{ label: 'Henderson 55+ Homes' }]}
        primaryCTA={{ text: 'Search Homes', href: '/homes-for-sale' }}
        secondaryCTA={{ text: 'Del Webb Lake Las Vegas', href: '/communities/del-webb-lake-las-vegas' }}
      />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="max-w-4xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Choose Henderson for 55+ Living?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="answer-first" data-speakable="true">
              Henderson is Nevada’s second-largest city, about 16 miles southeast of the Las Vegas Strip, with parks, trail systems, shopping, dining, and multiple 55+ communities including Sun City Anthem and Del Webb at Lake Las Vegas.
            </p>
            <p>
              Residents can reach Strip entertainment, medical campuses, and McCarran/Harry Reid International Airport while living in a suburban setting with its own retail and recreation.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Parks, Trails, and City Services</h3>
            <p>
              Henderson maintains parks, trail systems, and recreation facilities used by 55+ community residents. Healthcare campuses and shopping centers sit along major corridors such as St. Rose Parkway and Horizon Ridge.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Quality of Life and Services</h3>
            <p>
              Henderson offers parks, trail systems, healthcare facilities, and a shopping and dining scene. The city’s public services and infrastructure support everyday living for 55+ homeowners.
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
                  <SitePhoto
                    image={siteImages.henderson}
                    alt="Sun City Anthem 55+ homes and amenities in Henderson, Nevada"
                    className="aspect-video"
                  />
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
                  <SitePhoto
                    image={siteImages.henderson}
                    alt="Solera at Anthem 55+ homes in Henderson, Nevada"
                    className="aspect-video"
                  />
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
              Purchasing a home in a Henderson 55+ community means access to parks, trail systems, shopping, healthcare, and a 16-mile drive to the Las Vegas Strip. Henderson’s 55+ inventory includes golf, waterfront, and newer Lennar/Del Webb products.
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
      <FaqSection faqs={hendersonFaqs} />
    </div>
    </div>
  )
}
