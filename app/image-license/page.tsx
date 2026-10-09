import Link from 'next/link'
import JsonLd from '@/components/json-ld'
import { buildMetadata } from '@/lib/page-metadata'
import { AGENT_NAME, EMAIL, FULL_ADDRESS, PHONE_DISPLAY, PHONE_TEL, SITE_SHORT_NAME } from '@/lib/site-config'
import { generatePageGraph } from '@/lib/structured-data'
import { siteImages } from '@/lib/site-images'

export const metadata = buildMetadata({
  title: 'Image License | Vegas 55 Plus Homes',
  description:
    'Photographs and graphics on Vegas 55 Plus Homes are copyrighted by Dr. Jan Duffy. All rights reserved. Request permission before reuse.',
  path: '/image-license',
  image: siteImages.logo,
})

export default function ImageLicensePage() {
  const pageGraph = generatePageGraph({
    pageType: 'WebPage',
    name: 'Image License',
    description:
      'License terms for photographs and graphics published on Vegas 55 Plus Homes.',
    path: '/image-license',
    image: siteImages.logo,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Image License', url: '/image-license' },
    ],
  })

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <JsonLd id="image-license-graph" data={pageGraph} />
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Image License</h1>
      <p className="mt-4 text-muted-foreground">
        © 2026 {AGENT_NAME}, {SITE_SHORT_NAME}. All rights reserved.
      </p>
      <div className="mt-8 space-y-4 text-foreground">
        <p>
          Photographs, portraits, logos, and graphics on this site belong to {AGENT_NAME} and{' '}
          {SITE_SHORT_NAME}. You may view them in a browser. You may not copy, crop, republish, or
          use them in ads, listings, or social posts without written permission.
        </p>
        <p>
          This is an all-rights-reserved license. It is not a Creative Commons license. Credit alone
          does not grant reuse.
        </p>
        <p>
          To request permission, contact {AGENT_NAME} at{' '}
          <a className="text-primary hover:underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>{' '}
          or{' '}
          <a className="text-primary hover:underline" href={`tel:${PHONE_TEL}`}>
            {PHONE_DISPLAY}
          </a>
          . Office: {FULL_ADDRESS}. You can also use the{' '}
          <Link className="text-primary hover:underline" href="/contact">
            contact form
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
