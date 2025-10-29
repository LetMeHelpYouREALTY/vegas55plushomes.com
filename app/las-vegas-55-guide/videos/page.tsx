export const metadata = {
  title: 'Las Vegas 55+ Communities Videos | Virtual Tours & Community Videos',
  description: 'Watch videos and virtual tours of Las Vegas 55+ communities. Explore communities through video before visiting in person.',
}

export default function VideosPage() {
  const videoCategories = [
    {
      title: 'Community Tours',
      videos: [
        { title: 'Sun City Summerlin Community Tour', community: 'Sun City Summerlin' },
        { title: 'Sun City Anthem Overview', community: 'Sun City Anthem' },
        { title: 'Siena Luxury Living', community: 'Siena' },
      ],
    },
    {
      title: 'Home Tours',
      videos: [
        { title: 'Sun City Summerlin St. Tropez Floorplan Tour', community: 'Sun City Summerlin' },
        { title: 'Modern Living in Sun City Anthem', community: 'Sun City Anthem' },
      ],
    },
    {
      title: 'Lifestyle & Amenities',
      videos: [
        { title: 'Golf Course Living in Las Vegas 55+ Communities', community: 'Various' },
        { title: 'Fitness & Wellness Amenities Tour', community: 'Various' },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a> / <a href="/las-vegas-55-guide" className="hover:text-foreground">Las Vegas 55+ Guide</a> / Videos
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Las Vegas 55+ Communities Videos</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Explore Las Vegas 55+ communities through our video collection. Watch community tours, home walkthroughs, and lifestyle videos to help you find your perfect active adult community.
        </p>
      </div>

      <div className="space-y-12">
        {videoCategories.map((category) => (
          <section key={category.title}>
            <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.videos.map((video) => (
                <div key={video.title} className="rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Video Placeholder</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.community}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

