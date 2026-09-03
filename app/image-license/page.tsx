import Link from 'next/link'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import FaqSection from '@/components/faq-section'
import { siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import { generatePageGraph } from '@/lib/structured-data'
import { imageLicenseFaqs } from '@/lib/page-faqs'
import {
  AGENT_NAME,
  EMAIL,
  FULL_ADDRESS,
  IMAGE_LICENSE_PATH,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_SHORT_NAME,
  SITE_URL,
  getImageCopyrightNotice,
} from '@/lib/site-config'

const copyrightNotice = getImageCopyrightNotice()

export const metadata = buildMetadata({
  title: `Image License & Copyright | ${SITE_SHORT_NAME} | ${AGENT_NAME}`,
  description: `${copyrightNotice} License terms for photographs, the logo, and graphics on vegas55plushomes.com. Request reuse at ${PHONE_DISPLAY}.`,
  path: IMAGE_LICENSE_PATH,
  image: siteImages.logo,
  keywords: ['Vegas 55 Plus Homes image license', 'Dr. Jan Duffy photo copyright'],
})

export default function ImageLicensePage() {
  const pageGraph = generatePageGraph({
    pageType: 'WebPage',
    name: 'Image License & Copyright',
    description:
      'License terms and copyright notice for site photography, the logo, and graphics on vegas55plushomes.com.',
    path: IMAGE_LICENSE_PATH,
    image: siteImages.logo,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Image License', url: IMAGE_LICENSE_PATH },
    ],
    faqs: imageLicenseFaqs,
  })

  return (
    <div>
      <JsonLd id="image-license-page-graph" data={pageGraph} />
      <PageHero
        image={siteImages.logo}
        title="Image License & Copyright"
        subtitle={`${copyrightNotice} Photographs and graphics on this site are licensed for use on vegas55plushomes.com unless you receive written permission.`}
        breadcrumbs={[{ label: 'Image License' }]}
        primaryCTA={{ text: `Call ${PHONE_DISPLAY}`, href: `tel:${PHONE_TEL}` }}
        secondaryCTA={{ text: 'Request permission', href: '/contact' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-3xl space-y-10">
          <section>
            <h2 className="mb-4 text-3xl font-bold">Copyright notice</h2>
            <p className="text-muted-foreground" data-speakable="true">
              {copyrightNotice} This notice applies to original site photography (including hero
              images such as Las Vegas new-construction 55+ homes and interiors), the Vegas 55 Plus
              Homes logo, and other graphics first published on {SITE_URL}.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-bold">License terms</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Images on vegas55plushomes.com are licensed for display on this website to help
                buyers compare 55+ and active adult communities in Las Vegas, Henderson, and
                Summerlin. All other uses are reserved.
              </p>
              <p>You may not copy, scrape, crop, or republish these files without written permission, including:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Marketing, advertising, or listing presentations</li>
                <li>Print, social, or paid media</li>
                <li>Training decks, blogs, or other websites</li>
              </ul>
              <p>
                MLS listing photos and builder renderings that appear in search widgets remain the
                property of the originating broker, photographer, or builder and follow those
                sources&apos; display rules.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-bold">How to acquire a license</h2>
            <p className="text-muted-foreground">
              To request reuse, contact {AGENT_NAME} with the image URL, the intended use, and the
              publication date. Permission is granted only in writing.
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                Phone:{' '}
                <a className="text-primary hover:underline" href={`tel:${PHONE_TEL}`}>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                Email:{' '}
                <a className="text-primary hover:underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </li>
              <li>
                Office: {FULL_ADDRESS}.{' '}
                <Link className="text-primary hover:underline" href="/contact">
                  Contact form
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <FaqSection faqs={imageLicenseFaqs} />
    </div>
  )
}
