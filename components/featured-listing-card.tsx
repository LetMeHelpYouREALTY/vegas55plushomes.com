import Link from 'next/link'
import { Calendar, Home, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  formatSqft,
  formatUsd,
  listingAddressLine,
  listingPath,
  type FeaturedListing,
} from '@/lib/featured-listings'

type FeaturedListingCardProps = {
  listing: FeaturedListing
}

export default function FeaturedListingCard({ listing }: FeaturedListingCardProps) {
  return (
    <article className="rounded-lg border bg-card p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
        Featured home · {listing.status} · New on site
      </p>
      <h3 className="mt-2 text-2xl font-bold">
        <Link href={listingPath(listing)} className="hover:text-primary">
          {listing.streetAddress}
        </Link>
      </h3>
      <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
        {listingAddressLine(listing)}
      </p>
      <p className="mt-4 text-3xl font-bold text-primary">{formatUsd(listing.price)}</p>
      <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-4">
        <li className="flex items-center gap-2">
          <Home className="h-4 w-4 text-primary" aria-hidden="true" />
          {listing.beds} beds
        </li>
        <li>{listing.baths} baths</li>
        <li>{formatSqft(listing.livingSqft)} sq ft</li>
        <li>{formatSqft(listing.lotSqft)} sq ft lot</li>
      </ul>
      <p className="mt-4 text-muted-foreground">{listing.summary}</p>
      {listing.openHouses.length > 0 && (
        <div className="mt-4 rounded-md border bg-muted/40 p-4">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
            Open houses
          </p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {listing.openHouses.map((openHouse) => (
              <li key={openHouse.date}>{openHouse.label}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href={listingPath(listing)}>View home details</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Tour with Dr. Jan Duffy</Link>
        </Button>
      </div>
    </article>
  )
}
