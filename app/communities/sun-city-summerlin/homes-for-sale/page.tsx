export const metadata = {
  title: 'Sun City Summerlin Homes For Sale | Las Vegas 55+ Real Estate',
  description: 'Browse homes for sale in Sun City Summerlin, Las Vegas\'s premier 55+ gated community. Expert help from Vegas 55 Plus Homes.',
}

export default function SunCitySummerlinHomesForSalePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a> / <a href="/communities" className="hover:text-foreground">Communities</a> / <a href="/communities/sun-city-summerlin" className="hover:text-foreground">Sun City Summerlin</a> / Homes For Sale
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sun City Summerlin Homes For Sale</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Welcome to our curated list of homes for sale in Sun City Summerlin, a premier gated 55+ community in Las Vegas, Nevada. This page is updated daily with the latest real estate listings in Sun City Summerlin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Homes listings will be displayed here. Contact us to get started with your search for Sun City Summerlin homes.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-semibold mb-4">Get Listing Alerts</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Sign up to receive email alerts when new homes matching your criteria become available in Sun City Summerlin.
            </p>
            <a href="/contact" className="text-primary hover:underline text-sm font-medium">
              Sign Up →
            </a>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Our Sun City Summerlin specialists are here to help you find your perfect home.
            </p>
            <a href="/contact" className="text-primary hover:underline text-sm font-medium">
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

