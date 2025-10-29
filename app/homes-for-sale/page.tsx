export const metadata = {
  title: 'Las Vegas 55+ Homes For Sale | Vegas 55 Plus Homes',
  description: 'Search Las Vegas 55+ homes for sale. Find your perfect active adult home in premier communities throughout Las Vegas and Henderson.',
}

export default function HomesForSalePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Las Vegas 55+ Homes For Sale</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Search for your perfect 55+ home in Las Vegas. Use our advanced search to find homes in premier active adult communities throughout the Las Vegas Valley.
        </p>
      </div>

      {/* Search Form Placeholder */}
      <div className="rounded-lg border bg-card p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advanced Home Search</h2>
        <p className="text-muted-foreground mb-6">
          Search filters coming soon. For now, please contact us to find homes matching your criteria.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Community</label>
            <select className="w-full px-4 py-2 border rounded-md bg-background" aria-label="Community">
              <option>All Communities</option>
              <option>Sun City Summerlin</option>
              <option>Sun City Anthem</option>
              <option>Siena</option>
              <option>Desert Shores</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Price Range</label>
            <select className="w-full px-4 py-2 border rounded-md bg-background" aria-label="Price Range">
              <option>Any Price</option>
              <option>$200,000 - $400,000</option>
              <option>$400,000 - $600,000</option>
              <option>$600,000 - $800,000</option>
              <option>$800,000+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Bedrooms</label>
            <select className="w-full px-4 py-2 border rounded-md bg-background" aria-label="Bedrooms">
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Coming Soon Message */}
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground mb-4">
          Home listings will be displayed here. Contact us to get started with your search.
        </p>
      </div>
    </div>
  )
}

