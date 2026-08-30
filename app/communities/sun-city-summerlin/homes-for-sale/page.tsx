import Link from 'next/link'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import FaqSection from '@/components/faq-section'
import SitePhoto from '@/components/site-photo'
import { siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import {
  generatePageGraph,
  generateResidenceCommunitySchema,
  generateServiceSchema,
} from '@/lib/structured-data'
import { sunCityHomesFaqs } from '@/lib/page-faqs'

export const metadata = buildMetadata({
  title: 'Sun City Summerlin Homes for Sale | Las Vegas 55+ | Dr. Jan Duffy',
  description:
    'Search Sun City Summerlin 55+ homes in Summerlin, Las Vegas with buyer’s representative Dr. Jan Duffy. Call (702) 996-3758 for current MLS inventory.',
  path: '/communities/sun-city-summerlin/homes-for-sale',
  image: siteImages.golf,
  keywords: ['Sun City Summerlin homes for sale', 'Las Vegas 55+ listings', 'Summerlin active adult homes'],
})

export default function SunCitySummerlinHomesForSalePage() {
  return (
    <div>
      <JsonLd
        id="scs-homes-graph"
        data={generatePageGraph({
          pageType: 'CollectionPage',
          name: 'Sun City Summerlin Homes for Sale',
          description:
            'Buyer representation for resale and, when available, new 55+ homes in Sun City Summerlin, Las Vegas.',
          path: '/communities/sun-city-summerlin/homes-for-sale',
          image: siteImages.golf,
          dateModified: '2026-08-30',
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Communities', url: '/communities' },
            { name: 'Sun City Summerlin', url: '/communities/sun-city-summerlin' },
            { name: 'Homes for Sale', url: '/communities/sun-city-summerlin/homes-for-sale' },
          ],
          faqs: sunCityHomesFaqs,
          extra: [
            generateResidenceCommunitySchema({
              name: 'Sun City Summerlin',
              description:
                'Gated 55+ community in Summerlin, Las Vegas with golf, recreation centers, and single-story homes.',
              url: '/communities/sun-city-summerlin',
              image: siteImages.golf,
              city: 'Las Vegas',
              amenities: [
                'Three championship golf courses',
                'Four recreation centers',
                'Pickleball and tennis',
                'Resort-style pools',
              ],
            }),
            generateServiceSchema({
              name: 'Sun City Summerlin buyer representation',
              description:
                'MLS search, tours, and contract review for 55+ homes in Sun City Summerlin.',
            }),
          ],
        })}
      />
      <PageHero
        image={siteImages.golf}
        title="Sun City Summerlin Homes for Sale"
        subtitle="Golf-course and recreation-center neighborhoods in Summerlin’s largest 55+ community. Call (702) 996-3758 for current listings—inventory changes daily."
        breadcrumbs={[
          { label: 'Communities', href: '/communities' },
          { label: 'Sun City Summerlin', href: '/communities/sun-city-summerlin' },
          { label: 'Homes for Sale' },
        ]}
        primaryCTA={{ href: '/contact', text: 'Request listing alerts' }}
        secondaryCTA={{ href: '/communities/sun-city-summerlin/schedule-tour', text: 'Schedule a tour' }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-lg text-muted-foreground max-w-3xl">
            Sun City Summerlin is a gated 55+ community in Summerlin, Las Vegas. This page is a starting point for buyers—not a live MLS feed. Dr. Jan Duffy sends matching homes, previews properties, and represents you through inspections and closing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <SitePhoto
              image={siteImages.golf}
              alt="Golf fairway and single-story 55+ homes in Sun City Summerlin, Las Vegas"
              className="aspect-video rounded-lg"
              sizes="(max-width: 1024px) 100vw, 75vw"
              priority
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SitePhoto
                image={siteImages.interior}
                alt="Open-plan interior typical of Sun City Summerlin single-story 55+ homes"
                className="aspect-video rounded-lg"
              />
              <SitePhoto
                image={siteImages.clubhouse}
                alt="Clubhouse pool amenities near Sun City Summerlin 55+ homes"
                className="aspect-video rounded-lg"
              />
            </div>
            <p className="text-muted-foreground">
              List prices, days on market, and HOA dues must be verified on each listing. Contact Dr. Duffy at (702) 996-3758 or{' '}
              <Link href="/contact" className="text-primary hover:underline">
                send a search request
              </Link>{' '}
              with beds, baths, golf vs. interior lot, and budget.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-lg font-semibold mb-4">Get listing alerts</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Receive email when new Sun City Summerlin homes match your criteria.
              </p>
              <Link href="/contact" className="text-primary hover:underline text-sm font-medium">
                Sign up →
              </Link>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-lg font-semibold mb-4">Need help?</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Buyer representation for Sun City Summerlin resale homes. Office: 28 Lake Oasis St, Henderson, NV 89011.
              </p>
              <Link href="/contact" className="text-primary hover:underline text-sm font-medium">
                Contact Dr. Duffy →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FaqSection faqs={sunCityHomesFaqs} />
    </div>
  )
}
