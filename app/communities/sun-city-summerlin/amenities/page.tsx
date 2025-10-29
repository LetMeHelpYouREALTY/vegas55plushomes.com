export const metadata = {
  title: 'Sun City Summerlin Amenities | Las Vegas 55+ Community',
  description: 'Discover world-class amenities at Sun City Summerlin including golf courses, fitness centers, pools, and more.',
}

export default function SunCitySummerlinAmenitiesPage() {
  const amenityCategories = [
    {
      title: 'Golf & Recreation',
      amenities: [
        'Multiple championship golf courses',
        'Driving range and putting greens',
        'Tennis courts',
        'Pickleball courts',
        'Bocce ball courts',
        'Shuffleboard',
      ],
    },
    {
      title: 'Fitness & Wellness',
      amenities: [
        'State-of-the-art fitness centers',
        'Group fitness classes',
        'Indoor and outdoor pools',
        'Spa and hot tubs',
        'Walking and jogging trails',
        'Wellness programs',
      ],
    },
    {
      title: 'Social & Activities',
      amenities: [
        'Multiple recreation centers',
        'Arts and crafts studios',
        'Woodworking shop',
        'Libraries and computer labs',
        'Restaurants and cafes',
        'Numerous clubs and organizations',
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a> / <a href="/communities" className="hover:text-foreground">Communities</a> / <a href="/communities/sun-city-summerlin" className="hover:text-foreground">Sun City Summerlin</a> / Amenities
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sun City Summerlin Amenities</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Sun City Summerlin offers residents an unparalleled lifestyle with world-class amenities designed for active adults. From championship golf courses to state-of-the-art fitness centers, discover everything this premier community has to offer.
        </p>
      </div>

      <div className="space-y-12">
        {amenityCategories.map((category) => (
          <section key={category.title}>
            <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.amenities.map((amenity) => (
                <div key={amenity} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <div className="mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

