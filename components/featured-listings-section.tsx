import FeaturedListingCard from '@/components/featured-listing-card'
import { featuredListings, type FeaturedListing } from '@/lib/featured-listings'

type FeaturedListingsSectionProps = {
  title?: string
  intro?: string
  listings?: FeaturedListing[]
}

export default function FeaturedListingsSection({
  title = 'Featured 55+ home',
  intro = 'A current Heritage at Stonebridge listing for buyers working with Dr. Jan Duffy. Call (702) 996-3758.',
  listings = featuredListings,
}: FeaturedListingsSectionProps) {
  if (listings.length === 0) return null

  return (
    <section className="border-b bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="answer-first mt-4 text-lg text-muted-foreground" data-speakable="true">
            {intro}
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-6">
          {listings.map((listing) => (
            <FeaturedListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  )
}
