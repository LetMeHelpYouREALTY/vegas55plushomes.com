export const metadata = {
  title: 'Las Vegas 55+ Communities Map | Interactive Map of Active Adult Communities',
  description: 'Explore Las Vegas 55+ communities on an interactive map. Find communities by location and discover amenities near each community.',
}

export default function MapPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a> / <a href="/las-vegas-55-guide" className="hover:text-foreground">Las Vegas 55+ Guide</a> / Map
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Las Vegas 55+ Communities Map</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Explore the locations of Las Vegas's premier 55+ communities on our interactive map. Find communities by area and discover what each location has to offer.
        </p>
      </div>

      <div className="rounded-lg border bg-card p-8 mb-8">
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Interactive Map Coming Soon</p>
          <p className="text-sm text-muted-foreground mt-2">
            A detailed interactive map showing all Las Vegas 55+ communities will be available here.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold mb-2">Summerlin Area</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Sun City Summerlin</li>
            <li>• Regency at Summerlin</li>
          </ul>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold mb-2">Henderson Area</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Sun City Anthem</li>
            <li>• Solera at Anthem</li>
          </ul>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold mb-2">Las Vegas Area</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Siena</li>
            <li>• Desert Shores</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

