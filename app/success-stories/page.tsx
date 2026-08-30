import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, MapPin, Heart, Star, Users } from 'lucide-react'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import FaqSection from '@/components/faq-section'
import { siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import { generateItemListSchema, generatePageGraph } from '@/lib/structured-data'
import { successStoriesFaqs } from '@/lib/page-faqs'

export const metadata = buildMetadata({
  title: 'Success Stories | Las Vegas 55+ Buyer Representation | Dr. Jan Duffy',
  description:
    'Client journeys buying 55+ homes in Sun City Summerlin, Sun City Anthem, and Siena with Dr. Jan Duffy. Call (702) 996-3758.',
  path: '/success-stories',
  image: siteImages.interior,
  keywords: ['Las Vegas 55+ success stories', 'Sun City Summerlin buyer stories', 'Henderson 55+ realtor'],
})

export default function SuccessStoriesPage() {
  const stories = [
    {
      title: 'Finding the Perfect Home at Sun City Summerlin',
      date: 'August 2025',
      community: 'Sun City Summerlin',
      excerpt: 'From California to Las Vegas - discovering the perfect active adult lifestyle at Sun City Summerlin. Learn how our team helped this couple navigate their relocation and find their dream home in Las Vegas\'s largest 55+ community.',
      fullStory: 'After researching Las Vegas 55+ communities online, this couple from California reached out to us for guidance. They were particularly interested in Sun City Summerlin but had concerns about such a large community. We scheduled extensive tours, introduced them to residents, and helped them understand the community\'s neighborhood structure. Through our guidance, they found the perfect home in a quiet neighborhood while still having access to all of Sun City Summerlin\'s extensive amenities. The transition from California to Las Vegas was smooth, and they\'re now enjoying the active lifestyle they dreamed of.',
    },
    {
      title: 'How We Helped a Buyer Find Her Dream Home in Sun City Anthem',
      date: 'January 2025',
      community: 'Sun City Anthem',
      excerpt: 'From initial search to closing - a comprehensive success story showing how our specialized knowledge of Sun City Anthem helped a buyer find exactly what she was looking for in this premier Henderson 55+ community.',
      fullStory: 'This buyer came to us with very specific requirements: a single-story home with an updated kitchen, within a specific price range, and close to the Anthem Center. Our deep knowledge of Sun City Anthem\'s neighborhoods and floor plans allowed us to identify properties that matched her criteria quickly. We previewed homes before showing them, saving her time, and provided detailed market analysis for each option. Through our efforts, she found her perfect home and closed successfully. She continues to recommend our team to friends interested in Sun City Anthem.',
    },
    {
      title: 'From California to Las Vegas: A Success Story',
      date: 'September 2024',
      community: 'Siena',
      excerpt: 'A detailed account of how we helped a couple from California relocate to Las Vegas and find a home in Siena, navigating long-distance buying and community selection with expert guidance every step of the way.',
      fullStory: 'This couple from California wanted to relocate to Las Vegas but couldn\'t visit communities in person initially. We provided comprehensive virtual tours, detailed community comparisons, and extensive documentation about Siena and other communities they were considering. When they were finally able to visit, we had narrowed their options to three communities, saving them time and travel costs. Our long-distance support continued through video walkthroughs, digital document signing, and coordination with local services. They chose Siena for its recreation amenities and location, and the entire process went smoothly despite the distance.',
    },
  ]

  return (
    <div>
      <JsonLd
        id="success-stories-graph"
        data={generatePageGraph({
          pageType: 'CollectionPage',
          name: 'Las Vegas 55+ Buyer Success Stories',
          description:
            'How Dr. Jan Duffy represented buyers relocating to Sun City Summerlin, Sun City Anthem, and Siena.',
          path: '/success-stories',
          image: siteImages.interior,
          dateModified: '2026-08-30',
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Success Stories', url: '/success-stories' },
          ],
          faqs: successStoriesFaqs,
          extra: [
            generateItemListSchema({
              name: '55+ buyer journeys in Las Vegas',
              description: 'Community-specific buyer representation outcomes.',
              items: stories.map((story) => ({
                name: story.title,
                url: '/success-stories',
                image: siteImages.interior,
              })),
            }),
          ],
        })}
      />
      <PageHero
        image={siteImages.interior}
        title="55+ Buyer Success Stories"
        subtitle="Relocations and resale purchases in Sun City Summerlin, Sun City Anthem, and Siena with a dedicated buyer’s representative. Call (702) 996-3758."
        breadcrumbs={[{ label: 'Success Stories' }]}
        primaryCTA={{ href: '/contact', text: 'Start your search' }}
        secondaryCTA={{ href: '/communities', text: 'Explore communities' }}
      />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Read success stories from our clients who found their dream homes in Las Vegas 55+ communities. Each success story represents a unique journey to homeownership, highlighting how our specialized expertise in Las Vegas 55+ real estate helps active adults achieve their retirement living goals.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          These real testimonials showcase the personalized service, deep community knowledge, and comprehensive support that our team provides to every client, ensuring successful outcomes regardless of their specific circumstances or requirements.
        </p>
      </div>

      <div className="max-w-4xl space-y-12 mb-12">
        {stories.map((story, index) => (
          <article key={index} className="rounded-lg border bg-card p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium">{story.community}</span>
              <span className="mx-2">•</span>
              <span>{story.date}</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">{story.title}</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-lg">{story.excerpt}</p>
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-xl font-semibold text-foreground mb-3">The Full Story</h3>
                <p>{story.fullStory}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="max-w-4xl space-y-8 mb-12">
        <h2 className="text-3xl font-bold mb-6">What Makes Our Success Stories Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border bg-card">
            <Users className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
            <p className="text-muted-foreground">
              Every client receives individualized attention tailored to their specific needs, preferences, and circumstances. Our success stories reflect the personalized approach that ensures each client finds the perfect home match.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Home className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Deep Community Knowledge</h3>
            <p className="text-muted-foreground">
              Our specialized expertise in Las Vegas 55+ communities allows us to match clients with communities that truly fit their lifestyle. Success stories demonstrate how this knowledge creates better outcomes.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Heart className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Comprehensive Support</h3>
            <p className="text-muted-foreground">
              From initial research through closing and beyond, we provide comprehensive support that ensures smooth transactions. Our success stories show how this support makes all the difference.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Star className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Results That Matter</h3>
            <p className="text-muted-foreground">
              Our success stories reflect real results: clients finding homes they love, communities where they thrive, and retirement lifestyles that exceed expectations. These outcomes demonstrate our commitment to client success.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Start Your Success Story Today</h2>
        <div className="space-y-4 text-muted-foreground mb-8">
          <p>
            Ready to begin your journey to finding your perfect Las Vegas 55+ home? Our team is here to help you create your own success story. Contact us today to schedule a consultation and learn how we can guide you through the process of finding your dream home in one of Las Vegas's premier active adult communities.
          </p>
          <p>
            We understand that every client's journey is unique, and we're committed to providing the personalized service and expert guidance that ensures your success. Whether you're just beginning to explore options or you're ready to make an offer, we're here to support you every step of the way.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/communities">Explore Communities</Link>
          </Button>
        </div>
      </section>
    </div>
      <FaqSection faqs={successStoriesFaqs} />
    </div>
  )
}
