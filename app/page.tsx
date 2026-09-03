import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { lasVegasCommunities } from '@/lib/communities-data'
import JsonLd from '@/components/json-ld'
import FaqSection from '@/components/faq-section'
import PageHero from '@/components/page-hero'
import { siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import { generateHowToSchema, generatePageGraph, generateServiceSchema } from '@/lib/structured-data'
import { homeFaqs } from '@/lib/page-faqs'
import {
  FULL_ADDRESS,
  LICENSE,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/site-config'

export const metadata = buildMetadata({
  title: 'Del Webb Lake Las Vegas 55+ Buyer’s Agent | Dr. Jan Duffy',
  description:
    'Dr. Jan Duffy represents 55+ buyers at Del Webb Lake Las Vegas from 28 Lake Oasis St, Henderson, NV 89011. Nevada license S.0197614. Call (702) 996-3758.',
  path: '/',
  image: siteImages.lake,
  keywords: [
    'Del Webb Lake Las Vegas',
    'Lake Las Vegas 55+ homes',
    'Henderson 55+ buyer’s agent',
    'Dr. Jan Duffy',
  ],
})

export default function HomePage() {
  const delWebb = lasVegasCommunities.find((c) => c.slug === 'del-webb-lake-las-vegas')
  const pageGraph = generatePageGraph({
    pageType: 'WebPage',
    name: 'Del Webb Lake Las Vegas 55+ Buyer’s Agent | Dr. Jan Duffy',
    description:
      'Buyer representation for Del Webb at Lake Las Vegas from 28 Lake Oasis St, Henderson, NV 89011.',
    path: '/',
    image: siteImages.lake,
    breadcrumbs: [{ name: 'Home', url: '/' }],
    faqs: homeFaqs,
    extra: [
      generateServiceSchema({
        name: 'Del Webb Lake Las Vegas buyer representation',
        description:
          'Contract review, tours, and offer strategy for 55+ buyers at Del Webb Lake Las Vegas and nearby Henderson 55+ communities.',
        areaServed: ['Henderson', 'Lake Las Vegas', 'Las Vegas'],
        serviceType: 'Real Estate Buyer Representation',
      }),
      generateHowToSchema({
        name: 'How to tour Del Webb Lake Las Vegas with a buyer’s agent',
        description: 'Three steps to start a 55+ purchase at Lake Las Vegas with Dr. Jan Duffy.',
        steps: [
          {
            name: 'Call the Henderson office',
            text: `Call ${PHONE_DISPLAY} or visit 28 Lake Oasis St, Henderson, NV 89011.`,
          },
          {
            name: 'Tour Del Webb inventory',
            text: 'Walk new-construction and resale 55+ homes at Del Webb Lake Las Vegas with a buyer’s representative.',
          },
          {
            name: 'Review the contract before you sign',
            text: 'A buyer’s agent reviews builder or resale contracts, inspections, and credits. The on-site sales desk represents the builder.',
          },
        ],
      }),
    ],
  })

  return (
    <div className="flex flex-col">
      <JsonLd id="home-page-graph" data={pageGraph} />
      <PageHero
        image={siteImages.lake}
        title="Del Webb Lake Las Vegas 55+ buyer representation"
        subtitle={`Dr. Jan Duffy works from ${FULL_ADDRESS}. She represents buyers at Del Webb — 461 planned homes on Lake Las Vegas. Call ${PHONE_DISPLAY}.`}
        primaryCTA={{ text: `Call ${PHONE_DISPLAY}`, href: `tel:${PHONE_TEL}` }}
        secondaryCTA={{ text: 'Tour Del Webb', href: '/communities/del-webb-lake-las-vegas' }}
        priority
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:px-8">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full ring-1 ring-gold ring-offset-8 ring-offset-background">
            <Image
              src={siteImages.headshot.src}
              alt={siteImages.headshot.alt}
              fill
              sizes="(max-width: 1024px) 80vw, 420px"
              className="object-cover"
              priority
            />
          </div>
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Buyer’s representative · Henderson NV 89011
            </p>
            <h2 className="mb-4 text-4xl md:text-5xl">One agent. One lake. Your contract.</h2>
            <Separator className="mb-6 max-w-24 bg-gold" />
            <p className="answer-first mb-4 text-lg leading-relaxed text-muted-foreground" data-speakable="true">
              Dr. Jan Duffy (Nevada license {LICENSE}) represents 55+ buyers at Del Webb Lake Las
              Vegas. The builder’s desk works for the builder. She works for you.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Office at {FULL_ADDRESS}. Tours, contract review, and inspections start from that
              street — not a valley-wide call center.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="gold">
                <a href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/why-hire-an-agent">What a buyer’s agent does</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/30 bg-card py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 max-w-2xl text-3xl md:text-4xl">Realtor service, not a community catalog</h2>
          <Separator className="mb-12 max-w-24 bg-gold" />
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <p className="font-serif text-5xl text-gold">01</p>
                <CardTitle>New-construction contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  She reads Del Webb purchase agreements, options, and credits before you sign.
                  Standard builder co-op covers her fee on most new homes.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <p className="font-serif text-5xl text-gold">02</p>
                <CardTitle>Tours from Lake Oasis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Start at 28 Lake Oasis St. Then walk 1,500–3,000+ sq ft Mediterranean plans along
                  the shoreline.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <p className="font-serif text-5xl text-gold">03</p>
                <CardTitle>Resale and inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  For resale 55+ homes in 89011, she coordinates inspections and writes offers
                  against current comps — not a brochure price.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {delWebb && (
        <section className="bg-background py-20 lg:py-28">
          <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative aspect-[4/3] overflow-hidden ring-1 ring-gold/50">
              <Image
                src={siteImages.lake.src}
                alt={siteImages.lake.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Hyper-local focus
              </p>
              <h2 className="mb-4 text-4xl">{delWebb.name}</h2>
              <Separator className="mb-6 max-w-24 bg-gold" />
              <p className="mb-4 text-lg text-muted-foreground">
                {delWebb.homeCount} planned homes. 10,000 sq ft clubhouse. Waterfront lots on Lake Las
                Vegas in Henderson.
              </p>
              <p className="mb-8 text-muted-foreground">
                Listed range {delWebb.priceRange}. Confirm the current ask on any home before you
                offer. Dr. Duffy also covers nearby Henderson 55+ inventory when it fits the same
                single-story, HOA-maintained search.
              </p>
              <Button asChild size="lg" variant="gold">
                <Link href={`/communities/${delWebb.slug}`}>Del Webb details</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="border-y border-gold/40 bg-primary py-20 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl md:text-4xl">Start at the office, not a search bar</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/90">
            {FULL_ADDRESS}. Monday–Friday 9–6, Saturday 10–4. Call {PHONE_DISPLAY}.
          </p>
          <Button asChild size="lg" variant="gold">
            <Link href="/contact">Book a Del Webb consultation</Link>
          </Button>
        </div>
      </section>

      <FaqSection title="Del Webb and Lake Las Vegas buyer questions" faqs={homeFaqs} />
    </div>
  )
}
