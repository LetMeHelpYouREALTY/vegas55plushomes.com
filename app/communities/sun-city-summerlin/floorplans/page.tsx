export const metadata = {
  title: 'Sun City Summerlin Floorplans | Las Vegas 55+ Real Estate',
  description: 'Explore all floorplans available in Sun City Summerlin. From spacious detached homes to cozy attached villas, find your perfect layout.',
}

export default function SunCitySummerlinFloorplansPage() {
  const floorplans = [
    { name: 'Barcelona', beds: 2, baths: 2, sqft: '1,200 - 1,400', type: 'Attached Villa' },
    { name: 'Monaco', beds: 2, baths: 2.5, sqft: '1,400 - 1,600', type: 'Detached' },
    { name: 'Tuscany', beds: 2, baths: 2, sqft: '1,600 - 1,800', type: 'Detached' },
    { name: 'Provencal', beds: 3, baths: 2, sqft: '1,800 - 2,000', type: 'Detached' },
    { name: 'Versailles', beds: 3, baths: 2.5, sqft: '2,000 - 2,400', type: 'Detached' },
    { name: 'Chateau', beds: 3, baths: 3, sqft: '2,400 - 3,000+', type: 'Detached Luxury' },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a> / <a href="/communities" className="hover:text-foreground">Communities</a> / <a href="/communities/sun-city-summerlin" className="hover:text-foreground">Sun City Summerlin</a> / Floorplans
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sun City Summerlin Floorplans</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Explore all available floorplans in Sun City Summerlin. From spacious detached homes to cozy attached villas, we have floorplans to suit every lifestyle and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {floorplans.map((plan) => (
          <div key={plan.name} className="rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted rounded mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-muted-foreground">{plan.name}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>{plan.beds} Bedrooms, {plan.baths} Bathrooms</p>
              <p>{plan.sqft} sq ft</p>
              <p className="text-primary font-medium">{plan.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

