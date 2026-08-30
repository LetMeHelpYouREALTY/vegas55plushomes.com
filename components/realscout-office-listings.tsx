'use client'

import { REALSCOUT_OFFICE_LISTINGS_HTML } from '@/lib/realscout'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site-config'

const MLS_DISCLAIMER =
  'Listing information is provided by RealScout and the Las Vegas REALTORS® MLS and is believed accurate but not guaranteed. All information should be independently verified. Equal Housing Opportunity.'

/**
 * Office listings grid rendered under every PageHero.
 * The RealScout script is loaded once in app/layout.tsx.
 * Do not use React state for the widget; RealScout upgrades the custom element.
 */
export default function RealScoutOfficeListings() {
  return (
    <section
      className="border-b bg-muted/30"
      aria-labelledby="office-listings-heading"
    >
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2
          id="office-listings-heading"
          className="text-2xl font-bold text-foreground sm:text-3xl"
        >
          Homes for sale from Dr. Jan Duffy&apos;s office
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Newest for-sale listings from Berkshire Hathaway HomeServices Nevada
          Properties. Call{' '}
          <a
            href={`tel:${PHONE_TEL}`}
            className="font-semibold text-primary underline-offset-2 hover:underline"
          >
            {PHONE_DISPLAY}
          </a>{' '}
          for 55+ communities including Del Webb Lake Las Vegas and Sun City
          Summerlin.
        </p>
        <div
          className="realscout-office-host mt-8 min-h-[320px] w-full"
          dangerouslySetInnerHTML={{ __html: REALSCOUT_OFFICE_LISTINGS_HTML }}
        />
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          {MLS_DISCLAIMER}
        </p>
      </div>
    </section>
  )
}
