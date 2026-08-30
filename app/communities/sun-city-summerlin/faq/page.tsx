import Link from 'next/link'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import FaqSection from '@/components/faq-section'
import { siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import { generatePageGraph } from '@/lib/structured-data'

const faqs = [
  {
    question: 'What is the age requirement for Sun City Summerlin?',
    answer:
      'Sun City Summerlin is a 55+ community: at least one resident must be 55 or older. Permanent residents under 19 are not permitted. Short-term guests, including grandchildren, may visit within HOA visitor rules.',
  },
  {
    question: 'What types of homes are available in Sun City Summerlin?',
    answer:
      'Sun City Summerlin offers single-family detached homes, attached villas, and condominiums from about 1,200 to 3,500+ square feet across 17 floor plans.',
  },
  {
    question: 'What amenities does Sun City Summerlin offer?',
    answer:
      'Amenities include three championship golf courses, four recreation centers, fitness centers, pools, tennis, pickleball, arts studios, libraries, restaurants, and 80+ clubs.',
  },
  {
    question: 'Are there homeowner association fees?',
    answer:
      'Yes. HOA fees cover common-area maintenance, landscaping, amenities, and security. Amounts vary by home type and neighborhood. Confirm current fees before writing an offer.',
  },
  {
    question: 'Is Sun City Summerlin pet-friendly?',
    answer:
      'Pets are generally allowed subject to HOA limits on number and size. Verify current pet rules with the HOA before purchasing.',
  },
  {
    question: 'How do I schedule a tour of Sun City Summerlin?',
    answer:
      'Call Dr. Jan Duffy at (702) 996-3758, email DrDuffySells@Vegas55PlusHomes.com, or use the contact form. Tours can include recreation centers, golf courses, and available homes.',
  },
  {
    question: 'What makes Sun City Summerlin different from other Las Vegas 55+ communities?',
    answer:
      'It is the largest Las Vegas 55+ community, with about 7,700 homes on 2,400+ acres, three golf courses, and four recreation centers in Summerlin near Red Rock Canyon.',
  },
  {
    question: 'Are there activities and social opportunities for residents?',
    answer:
      'Yes. More than 80 clubs cover arts, travel, fitness, and volunteer work, with events scheduled throughout the month.',
  },
]

export const metadata = buildMetadata({
  title: 'Sun City Summerlin FAQ | Age Rules, HOA, Homes | Dr. Jan Duffy',
  description:
    'Answers about Sun City Summerlin 55+ living: age requirements, home types, amenities, HOA fees, pets, and tours. Call Dr. Jan Duffy at (702) 996-3758.',
  path: '/communities/sun-city-summerlin/faq',
  image: siteImages.golf,
  keywords: ['Sun City Summerlin FAQ', 'Sun City Summerlin age requirement', 'Sun City Summerlin HOA'],
})

export default function FAQPage() {
  const pageGraph = generatePageGraph({
    pageType: 'FAQPage',
    name: 'Sun City Summerlin FAQ',
    description:
      'Frequently asked questions about buying and living in Sun City Summerlin, a 55+ community in Summerlin, Las Vegas.',
    path: '/communities/sun-city-summerlin/faq',
    image: siteImages.golf,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Communities', url: '/communities' },
      { name: 'Sun City Summerlin', url: '/communities/sun-city-summerlin' },
      { name: 'FAQ', url: '/communities/sun-city-summerlin/faq' },
    ],
    faqs,
  })

  return (
    <div>
      <JsonLd id="scs-faq-graph" data={pageGraph} />
      <PageHero
        image={siteImages.golf}
        title="Sun City Summerlin FAQ"
        subtitle="Age rules, home types, amenities, HOA fees, and how to tour. Call (702) 996-3758."
        breadcrumbs={[
          { label: 'Communities', href: '/communities' },
          { label: 'Sun City Summerlin', href: '/communities/sun-city-summerlin' },
          { label: 'FAQ' },
        ]}
        primaryCTA={{ text: 'Schedule a Tour', href: '/communities/sun-city-summerlin/schedule-tour' }}
        secondaryCTA={{ text: 'View Homes', href: '/communities/sun-city-summerlin/homes-for-sale' }}
      />
      <FaqSection title="Sun City Summerlin questions" faqs={faqs} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact Dr. Jan Duffy
          </Link>
          <Link
            href="/communities/sun-city-summerlin"
            className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
          >
            Community Overview
          </Link>
        </div>
      </div>
    </div>
  )
}
