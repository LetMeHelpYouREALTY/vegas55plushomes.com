export const metadata = {
  title: 'Las Vegas 55+ Communities Overview | Complete Guide',
  description: 'Complete overview of Las Vegas 55+ active adult communities. Learn about amenities, lifestyle, and why Las Vegas is ideal for active adults.',
}

export default function OverviewPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a> / <a href="/las-vegas-55-guide" className="hover:text-foreground">Las Vegas 55+ Guide</a> / Overview
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Las Vegas 55+ Communities Overview</h1>
      </div>

      <div className="max-w-4xl space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Las Vegas for Active Adult Living?</h2>
          <p className="text-muted-foreground mb-4">
            Las Vegas has become one of the nation's premier destinations for active adults seeking an exciting retirement lifestyle. Beyond the famous Strip, Las Vegas offers beautiful desert scenery, world-class amenities, and a vibrant 55+ community scene that rivals any location in the country.
          </p>
          <p className="text-muted-foreground">
            The Las Vegas Valley, including Henderson and North Las Vegas, features numerous master-planned 55+ communities designed specifically for active adults. These communities offer resort-style living with golf courses, fitness centers, swimming pools, and countless social activities, all within a climate that's perfect for year-round outdoor activities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What to Look for in a Las Vegas 55+ Community</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span><strong>Location:</strong> Consider proximity to amenities, healthcare, shopping, and entertainment. Summerlin and Henderson are particularly popular areas.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span><strong>Amenities:</strong> Look for communities with golf courses, fitness centers, pools, and recreation facilities that match your interests.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span><strong>Home Types:</strong> Las Vegas 55+ communities offer everything from affordable attached villas to luxury single-family homes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span><strong>HOA Fees:</strong> Understand what's included in homeowner association fees and how they fit into your budget.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span><strong>Lifestyle:</strong> Each community has its own personality. Visit multiple communities to find one that matches your desired lifestyle.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Popular Las Vegas 55+ Communities</h2>
          <p className="text-muted-foreground mb-4">
            Las Vegas is home to many highly-regarded 55+ communities including:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
            <li>• Sun City Summerlin</li>
            <li>• Sun City Anthem</li>
            <li>• Siena</li>
            <li>• Desert Shores</li>
            <li>• Regency at Summerlin</li>
            <li>• Solera at Anthem</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

