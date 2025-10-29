export const metadata = {
  title: 'Client Reviews | Las Vegas 55+ Real Estate | Vegas 55 Plus Homes',
  description: 'Read reviews from our satisfied clients who found their perfect Las Vegas 55+ homes.',
}

export default function ReviewsPage() {
  const reviews = [
    {
      name: 'Marcie',
      community: 'Sun City Summerlin',
      date: 'June 2025',
      review: 'They were wonderful! We are so thankful for their help in finding our new, beautiful home!',
    },
    {
      name: 'Cathy C.',
      community: 'Sun City Summerlin',
      date: 'January 2025',
      review: 'I would recommend them to anyone looking for a professional real estate agent and most specifically for Sun City Summerlin!',
    },
    {
      name: 'Errol R.',
      community: 'Sun City Anthem',
      date: 'December 2024',
      review: 'Trusted realtor who helped us find our dream 55+ home. Professional, knowledgeable, and patient throughout the entire process.',
    },
    {
      name: 'Rob and Karin',
      community: 'Siena',
      date: 'September 2024',
      review: 'We found our dream home and they helped us through all the details and video walkthroughs. We cannot thank them enough!',
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Reviews</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Hear from our satisfied clients who found their perfect homes in Las Vegas 55+ communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {reviews.map((review, index) => (
          <div key={index} className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-1 mb-3">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i} className="text-yellow-400">{star}</span>
              ))}
            </div>
            <p className="text-muted-foreground mb-4 italic">"{review.review}"</p>
            <div className="flex items-center justify-between text-sm">
              <div>
                <div className="font-semibold">{review.name}</div>
                <div className="text-muted-foreground">{review.community}</div>
              </div>
              <div className="text-muted-foreground">{review.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

