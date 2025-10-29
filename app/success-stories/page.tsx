export const metadata = {
  title: 'Success Stories | Las Vegas 55+ Real Estate | Vegas 55 Plus Homes',
  description: 'Read success stories from our clients who found their dream homes in Las Vegas 55+ communities.',
}

export default function SuccessStoriesPage() {
  const stories = [
    {
      title: 'Finding the Perfect St. Tropez Home at Sun City Summerlin',
      date: 'August 2025',
      excerpt: 'From picketball dreams to home sweet home - a happy buyer\'s journey in Sun City Summerlin.',
      community: 'Sun City Summerlin',
    },
    {
      title: 'How We Helped a Buyer Find Her Dream Home in Sun City Anthem',
      date: 'January 2025',
      excerpt: 'From contingent offer to forever home - a real estate success story in Sun City Anthem.',
      community: 'Sun City Anthem',
    },
    {
      title: 'From California to Las Vegas: A Success Story',
      date: 'September 2024',
      excerpt: 'Exploring Las Vegas 55+ communities and finding the perfect home for retirement.',
      community: 'Siena',
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Read about how we've helped clients find their dream homes in Las Vegas 55+ communities. Each success story represents a unique journey to homeownership.
        </p>
      </div>

      <div className="space-y-8 max-w-4xl">
        {stories.map((story) => (
          <article key={story.title} className="rounded-lg border bg-card p-8 hover:shadow-lg transition-shadow">
            <div className="text-sm text-muted-foreground mb-2">{story.date}</div>
            <div className="text-sm text-primary mb-4">{story.community}</div>
            <h2 className="text-2xl font-semibold mb-4">{story.title}</h2>
            <p className="text-muted-foreground mb-4">{story.excerpt}</p>
            <a href="#" className="text-primary hover:underline text-sm font-medium">
              Read Full Story →
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}

